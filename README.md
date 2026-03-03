# cloner

Clones a git repo in a manner suitable for worktrees

## useage

`cloner repo_to_clone`

e.g.

`cloner git@github.com:joshuacox/cloner.git`

you can also give the name of the directory to be made:

`cloner git@github.com:joshuacox/cloner.git my_cloner`

## Explanation

If the script is given a directory name, first we make a new directory with the name, 
if we are not given the name we will derive it from the repo name and make the directory with that name.  
Then we cd into that directory and clone a bare repo to create the .git directory.  
Next `echo "gitdir: ./.git" > .git` to set the current directory to use the bare repo.
Then we make a new worktree for the `main` branch.

## exempli gratia

```
$ git worktree add new_feature
Preparing worktree (new branch 'new_feature')
HEAD is now at dd9c78d bootstrap
```

There is now a directory called `new_feature` checked out at that same branch:

```
$ tree
.
├── main
│   ├── bootstrapcloner.sh
│   ├── cloner
│   ├── CMakeLists.txt
│   ├── LICENSE
│   ├── man
│   │   └── cloner.1
│   └── README.md
└── new_feature
    ├── bootstrapcloner.sh
    ├── cloner
    ├── CMakeLists.txt
    ├── LICENSE
    ├── man
    │   └── cloner.1
    └── README.md

5 directories, 12 files
```
