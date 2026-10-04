# bash completion for cloner                                -*- shell-script -*-

_cloner() {
    local cur prev words cword
    _init_completion || return

    local opts="-b --branch --depth -v --verbose -q --quiet -V --version -h --help"

    case "${prev}" in
        -b|--branch)
            # Try to complete branch names if inside a git directory
            if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
                COMPREPLY=( $(compgen -W "$(git branch --all --format='%(refname:short)' 2>/dev/null)" -- "${cur}") )
            fi
            return 0
            ;;
        --depth)
            COMPREPLY=( $(compgen -W "1 5 10 50 100" -- "${cur}") )
            return 0
            ;;
    esac

    if [[ "${cur}" == -* ]]; then
        COMPREPLY=( $(compgen -W "${opts}" -- "${cur}") )
        return 0
    fi

    # Otherwise default to directory completion
    _filedir -d
} &&
complete -F _cloner cloner
