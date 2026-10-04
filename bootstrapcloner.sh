#!/bin/sh
set -eu

THIS_NAME="cloner"
THIS_GH="joshuacox"
THIS_BRANCH="main"

TMP_DIR=$(mktemp -d 2>/dev/null || mktemp -d -t "${THIS_NAME}")
cleanup_func () {
  if [ -n "${TMP_DIR:-}" ] && [ -d "${TMP_DIR}" ]; then
    rm -rf "${TMP_DIR}"
  fi
}
trap cleanup_func EXIT INT TERM

cd "${TMP_DIR}"
curl -sSL -o "${THIS_NAME}-${THIS_BRANCH}.zip" "https://github.com/${THIS_GH}/${THIS_NAME}/archive/refs/heads/${THIS_BRANCH}.zip"
unzip -q "${THIS_NAME}-${THIS_BRANCH}.zip"
cd "${THIS_NAME}-${THIS_BRANCH}"

cmake .
make

if [ "$(id -u)" -eq 0 ]; then
  make install
else
  if command -v sudo >/dev/null 2>&1; then
    sudo make install
  else
    echo "Warning: 'sudo' not found. Attempting 'make install' without sudo..." >&2
    make install
  fi
fi

exit 0
