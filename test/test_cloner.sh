#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLONER_BIN="${SCRIPT_DIR}/../cloner"

TEST_TMP=$(mktemp -d 2>/dev/null || mktemp -d -t cloner_test)
cleanup() {
  rm -rf "${TEST_TMP}"
}
trap cleanup EXIT

export GIT_AUTHOR_NAME="Test User"
export GIT_AUTHOR_EMAIL="test@example.com"
export GIT_COMMITTER_NAME="Test User"
export GIT_COMMITTER_EMAIL="test@example.com"

echo "=== Running Cloner Test Suite in ${TEST_TMP} ==="

# 1. Test Help flag
echo -n "Test 1: Help option (-h / --help)... "
"${CLONER_BIN}" -h >/dev/null
"${CLONER_BIN}" --help >/dev/null
echo "PASS"

# 2. Test missing argument
echo -n "Test 2: Missing argument error handling... "
if "${CLONER_BIN}" >/dev/null 2>&1; then
  echo "FAIL (expected error on empty args)"
  exit 1
fi
echo "PASS"

# Set up mock remotes for testing
MOCK_REPOS="${TEST_TMP}/remotes"
mkdir -p "${MOCK_REPOS}"

# Create a repo with default branch 'master'
cd "${MOCK_REPOS}"
git init --bare --initial-branch=master repo_master.git >/dev/null
# Add a commit to master
TMP_CLONE="${TEST_TMP}/tmp_master"
git clone repo_master.git "${TMP_CLONE}" >/dev/null 2>&1
cd "${TMP_CLONE}"
git checkout -b master >/dev/null 2>&1 || true
git commit --allow-empty -m "Initial commit on master" >/dev/null
git push origin master >/dev/null 2>&1
cd "${MOCK_REPOS}/repo_master.git"
git symbolic-ref HEAD refs/heads/master
rm -rf "${TMP_CLONE}"

# Create a repo with default branch 'main' and a feature branch
cd "${MOCK_REPOS}"
git init --bare --initial-branch=main repo_main.git >/dev/null
TMP_CLONE="${TEST_TMP}/tmp_main"
git clone repo_main.git "${TMP_CLONE}" >/dev/null 2>&1
cd "${TMP_CLONE}"
git checkout -b main >/dev/null 2>&1 || true
git commit --allow-empty -m "Initial commit on main" >/dev/null
git push origin main >/dev/null 2>&1
git checkout -b feature-test >/dev/null 2>&1
git commit --allow-empty -m "Feature commit" >/dev/null
git push origin feature-test >/dev/null 2>&1
cd "${MOCK_REPOS}/repo_main.git"
git symbolic-ref HEAD refs/heads/main
rm -rf "${TMP_CLONE}"

# 3. Test dynamic detection of default branch 'master'
echo -n "Test 3: Dynamic detection of default branch 'master'... "
WORK_DIR="${TEST_TMP}/work"
mkdir -p "${WORK_DIR}"
cd "${WORK_DIR}"
"${CLONER_BIN}" -q "${MOCK_REPOS}/repo_master.git"
if [[ ! -d "repo_master/master" ]]; then
  echo "FAIL (expected worktree directory repo_master/master to exist)"
  exit 1
fi
if [[ ! -d "repo_master/.git" ]]; then
  echo "FAIL (expected bare repository in repo_master/.git)"
  exit 1
fi
echo "PASS"

# 4. Test dynamic detection of default branch 'main' with custom directory
echo -n "Test 4: Default branch 'main' with custom directory... "
cd "${WORK_DIR}"
"${CLONER_BIN}" -q "${MOCK_REPOS}/repo_main.git" custom_main_dir
if [[ ! -d "custom_main_dir/main" ]]; then
  echo "FAIL (expected worktree directory custom_main_dir/main to exist)"
  exit 1
fi
echo "PASS"

# 5. Test --branch override
echo -n "Test 5: Explicit branch override (--branch feature-test)... "
cd "${WORK_DIR}"
"${CLONER_BIN}" -q -b feature-test "${MOCK_REPOS}/repo_main.git" custom_feature_dir
if [[ ! -d "custom_feature_dir/feature-test" ]]; then
  echo "FAIL (expected worktree directory custom_feature_dir/feature-test to exist)"
  exit 1
fi
echo "PASS"

# 6. Test URL with trailing slash
echo -n "Test 6: Handling trailing slash in repository path... "
mkdir -p "${WORK_DIR}/trailing_slash_test"
cd "${WORK_DIR}/trailing_slash_test"
"${CLONER_BIN}" -q "${MOCK_REPOS}/repo_master.git/"
if [[ ! -d "repo_master/master" ]]; then
  echo "FAIL (failed to clone repo with trailing slash)"
  exit 1
fi
echo "PASS"

# 7. Test directory conflict error
echo -n "Test 7: Refusal to overwrite existing directory... "
cd "${WORK_DIR}"
if "${CLONER_BIN}" -q "${MOCK_REPOS}/repo_master.git" repo_master >/dev/null 2>&1; then
  echo "FAIL (should have failed on existing directory)"
  exit 1
fi
echo "PASS"

# 8. Test remote fetch refspecs inside cloned worktree
echo -n "Test 8: Verify worktree remote tracking refspecs... "
cd "${WORK_DIR}/repo_master"
REFSPEC=$(git config remote.origin.fetch)
if [[ "${REFSPEC}" != "+refs/heads/*:refs/remotes/origin/*" ]]; then
  echo "FAIL (unexpected refspec: ${REFSPEC})"
  exit 1
fi
echo "PASS"

# 9. Test failure cleanup rollback
echo -n "Test 9: Atomic cleanup rollback on clone failure... "
cd "${WORK_DIR}"
if "${CLONER_BIN}" -q "${MOCK_REPOS}/non_existent_repo.git" failed_dir >/dev/null 2>&1; then
  echo "FAIL (expected failure on non-existent repo)"
  exit 1
fi
if [[ -e "failed_dir" ]]; then
  echo "FAIL (expected failed_dir to be removed on failure)"
  exit 1
fi
echo "PASS"

echo "=== All Tests Passed Successfully! ==="
