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
