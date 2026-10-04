# cloner

`cloner` clones a git repository in a manner structured specifically for **git worktrees**.

## Build & Installation

### Oneliner

```bash
curl -sL https://raw.githubusercontent.com/joshuacox/cloner/refs/heads/main/bootstrapcloner.sh | bash
```

### CMake

```bash
cmake .
make
sudo make install
```

To uninstall:
```bash
sudo make uninstall
```

---

## Usage

```bash
cloner [OPTIONS] <repo_to_clone> [target_directory]
```

### Options

* `-b, --branch <branch_name>`: Specify a branch to check out initially (defaults to the remote's default branch).
* `-v, --verbose`: Increase output verbosity.
* `-q, --quiet`: Quiet mode; suppresses informational messages.
* `-h, --help`: Show usage instructions.

### Examples

Clone using the repository's default branch into a folder named after the repo:

```bash
cloner git@github.com:joshuacox/cloner.git
```

Specify a custom directory:

```bash
cloner git@github.com:joshuacox/cloner.git my_cloner
```

Specify a custom initial branch:

```bash
cloner --branch develop git@github.com:joshuacox/cloner.git
```

---

## Explanation

When you clone a repository with `cloner`:
1. It creates the destination directory (named after the repo if not explicitly provided).
2. It initializes a bare git clone inside `.git/`.
3. It configures the fetch refspec (`+refs/heads/*:refs/remotes/origin/*`) so linked worktrees track remote branches properly.
4. It dynamically detects the remote default branch (e.g. `main` or `master`) or uses the branch specified with `--branch`.
5. It creates the initial worktree in a sibling folder under the root project directory.

Subsequent branches can simply be added as additional worktrees:
```bash
git worktree add <new_branch>
```

---

## Exempli Gratia

Let's start by cloning this repo:

```bash
$ cloner git@github.com:joshuacox/cloner.git
Cloning git@github.com:joshuacox/cloner.git into cloner...
Cloning into bare repository '.git'...
...
Creating worktree for branch 'main'...
Preparing worktree (checking out 'main')
HEAD is now at c6ab44d eg
Successfully set up worktree workspace in cloner
```

Now let's create a new branch/worktree from within the directory:

```bash
$ cd cloner
$ git worktree add new_feature
Preparing worktree (new branch 'new_feature')
HEAD is now at dd9c78d bootstrap
```

Your directory structure will now look like:

```text
.
├── .git
├── main
│   ├── bootstrapcloner.sh
│   ├── cloner
│   ├── CMakeLists.txt
│   ├── LICENSE
│   ├── man
│   │   └── cloner.1
│   └── README.md
└── new_feature
    ├── bootstrapcloner.sh
    ├── cloner
    ├── CMakeLists.txt
    ├── LICENSE
    ├── man
    │   └── cloner.1
    └── README.md
```

---

## Environment Variables

You can adjust `VERBOSITY`:

```bash
VERBOSITY=0 cloner repo_to_clone    # Quiet mode
VERBOSITY=20 cloner repo_to_clone   # Verbose mode
```
