import Link from "next/link";
import CodeBlock from "./components/CodeBlock";
import AdBanner from "./components/AdBanner";
import WorktreeVisualizer from "./components/WorktreeVisualizer";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center pt-8 pb-4 max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Git Worktree Workflow Accelerator
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          Clone Repositories Built for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
            Parallel Worktrees
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          Traditional git clones force you to juggle branches, stash changes, and rebuild build caches.{" "}
          <code className="px-1.5 py-0.5 rounded font-mono text-sm bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400">
            cloner
          </code>{" "}
          initializes a bare Git repository with proper remote refspecs and checkouts your default branch as an independent worktree.
        </p>

        {/* Quick Install Oneliner */}
        <div className="pt-2 max-w-2xl mx-auto text-left">
          <CodeBlock
            code="curl -sL https://raw.githubusercontent.com/joshuacox/cloner/refs/heads/main/bootstrapcloner.sh | bash"
            caption="One-line Automated Installer"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#installation"
            className="px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </a>
          <a
            href="#architecture"
            className="px-6 py-3 rounded-xl font-semibold text-sm border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-all"
          >
            How It Works
          </a>
          <a
            href="https://github.com/joshuacox/cloner"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* Primary Ad Banner */}
      <AdBanner slot="9876543210" format="auto" />

      {/* Interactive Visualizer Component */}
      <section id="architecture" className="scroll-mt-20">
        <WorktreeVisualizer />
      </section>

      {/* Deep-Dive: Why Cloner? */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            The Git Worktree Dilemma Solved
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Git worktrees are one of Git&apos;s most powerful features, allowing you to checkout multiple branches in separate directories simultaneously. However, setting them up by hand is error-prone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
              🎯
            </div>
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Dynamic Default Branching
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Unlike scripts that blindly assume <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">main</code>, <code className="text-emerald-600 dark:text-emerald-400 font-semibold">cloner</code> inspects the remote&apos;s <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">origin/HEAD</code>, adapting seamlessly whether the upstream uses <code className="text-xs">main</code>, <code className="text-xs">master</code>, or a custom branch.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
              🔄
            </div>
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Proper Remote Refspecs
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Default bare clones don&apos;t configure tracking refspecs under <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">refs/remotes/origin/*</code>. <code className="text-emerald-600 dark:text-emerald-400 font-semibold">cloner</code> sets up the correct fetch refspec automatically so <code className="text-xs">git fetch origin</code> just works.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
              🛡️
            </div>
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Atomic Rollback & Safety
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              If network drops, authentication fails, or an argument is invalid, <code className="text-emerald-600 dark:text-emerald-400 font-semibold">cloner</code> cleans up any partially-created directories via traps, preventing broken or orphan repositories.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="scroll-mt-20 space-y-6">
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Installation
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Choose between automated one-liner installation, building with CMake, or manual placement.
          </p>
        </div>

        <div className="space-y-6">
          {/* Method 1: Oneliner */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                Recommended
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Quick Bootstrap Script
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Downloads the latest release archive, builds via CMake, and installs the binary and man page with automatic privilege detection:
            </p>
            <CodeBlock
              code="curl -sL https://raw.githubusercontent.com/joshuacox/cloner/refs/heads/main/bootstrapcloner.sh | bash"
              caption="Bootstrap One-liner"
            />
          </div>

          {/* Method 2: CMake */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              Build from Source with CMake
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Clone this repository and use CMake to compile and install into system paths:
            </p>
            <CodeBlock
              code={`git clone https://github.com/joshuacox/cloner.git\ncd cloner\ncmake .\nmake\nsudo make install`}
              caption="CMake Build & Install"
            />
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
              To uninstall: <code className="bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded text-zinc-800 dark:text-zinc-200">sudo make uninstall</code>
            </p>
          </div>

          {/* Method 3: Manual */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              Manual User Install
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Copy <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">cloner</code> into any directory on your <code className="text-xs font-mono">$PATH</code> (e.g. <code className="text-xs font-mono">~/.local/bin</code>):
            </p>
            <CodeBlock
              code={`mkdir -p ~/.local/bin ~/.local/share/man/man1\ncp cloner ~/.local/bin/\nchmod +x ~/.local/bin/cloner\ncp man/cloner.1 ~/.local/share/man/man1/`}
              caption="Manual User Installation"
            />
          </div>
        </div>
      </section>

      {/* Mid-Page AdSense Unit */}
      <AdBanner slot="2468135790" format="auto" />

      {/* Usage & Walkthrough */}
      <section id="usage" className="scroll-mt-20 space-y-6">
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Usage & Examples
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Standard syntax, options, and real-world development workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Basic Cloning
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Pass any git URL (SSH, HTTPS, or local path). The repository name is inferred automatically:
            </p>
            <CodeBlock
              code="cloner git@github.com:facebook/react.git"
              caption="Inferred directory: react/"
            />
            <p className="text-xs text-zinc-500">
              Creates <code className="text-xs">react/.git</code> and checks out the default branch as <code className="text-xs">react/main</code> (or <code className="text-xs">react/master</code>).
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Custom Target Directory
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Provide an optional second argument to rename the root container directory:
            </p>
            <CodeBlock
              code="cloner git@github.com:joshuacox/cloner.git my-cloner-workspace"
              caption="Custom destination directory"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Custom Branch Checkout
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Use <code className="text-xs font-mono">-b</code> or <code className="text-xs font-mono">--branch</code> to checkout a specific development branch:
            </p>
            <CodeBlock
              code="cloner --branch develop git@github.com:user/app.git"
              caption="Initial worktree at develop"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              Silent / Script Automation Mode
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Use <code className="text-xs font-mono">-q</code> or <code className="text-xs font-mono">--quiet</code> for clean execution in CI/CD scripts:
            </p>
            <CodeBlock
              code="cloner --quiet git@github.com:user/app.git /srv/workspace"
              caption="Quiet / Non-interactive"
            />
          </div>
        </div>
      </section>

      {/* CLI Reference */}
      <section id="reference" className="scroll-mt-20 space-y-6">
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Command-Line Reference
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Complete synopsis and supported flags.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
            <thead className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3">Flag / Option</th>
                <th className="px-4 py-3">Argument</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-mono text-xs">
              <tr className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-b, --branch</td>
                <td className="px-4 py-3 text-zinc-500">&lt;name&gt;</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Explicitly specify branch to check out into the initial worktree.
                </td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/50">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-v, --verbose</td>
                <td className="px-4 py-3 text-zinc-500">None</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Enable high verbosity progress output.
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-q, --quiet</td>
                <td className="px-4 py-3 text-zinc-500">None</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Suppress informational messages (errors remain visible).
                </td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/50">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-h, --help</td>
                <td className="px-4 py-3 text-zinc-500">None</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Print syntax overview and exit.
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">VERBOSITY=&lt;num&gt;</td>
                <td className="px-4 py-3 text-zinc-500">Environment</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Control logging level via environment variable (default: 10).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Worktree Cheat Sheet */}
      <section id="cheatsheet" className="scroll-mt-20 space-y-6">
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Git Worktree Cheat Sheet
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Now that you have cloned with <code className="text-emerald-500 font-bold">cloner</code>, here are the essential Git commands to master worktrees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">01.</span> Add a New Worktree
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Create a new folder and branch checked out at that branch:
            </p>
            <CodeBlock
              code="git worktree add feature-auth"
              caption="Creates folder 'feature-auth' and branch 'feature-auth'"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">02.</span> Checkout Existing Remote Branch
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Checkout a colleague&apos;s remote branch into its own folder:
            </p>
            <CodeBlock
              code="git worktree add pr-42 origin/pr-42"
              caption="Review a PR locally without touching your feature"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">03.</span> List Active Worktrees
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Inspect all registered worktrees, paths, and HEAD commits:
            </p>
            <CodeBlock
              code="git worktree list"
              caption="Outputs all active worktrees and paths"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-3">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">04.</span> Remove Completed Worktree
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Clean up worktree directory after merging:
            </p>
            <CodeBlock
              code="git worktree remove feature-auth\ngit worktree prune"
              caption="Delete worktree and prune stale references"
            />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="scroll-mt-20 space-y-6">
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Common questions about worktree layouts and Git compatibility.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              How does cloner differ from running <code className="text-xs font-mono">git worktree add</code> manually?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              If you run standard <code className="text-xs">git clone</code>, Git puts all working files in the repository root and hides <code className="text-xs">.git/</code> inside it. Creating worktrees from that setup creates sibling folders outside or nested subfolders inside. <code className="text-emerald-500 font-semibold">cloner</code> structures the root directory cleanly from the start: <code className="text-xs">.git/</code> holds the bare repository, and all branches (including <code className="text-xs">main</code>) live symmetrically as top-level sibling directories.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Does this consume more disk space than standard cloning?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              No. In fact, worktrees are significantly more disk-efficient than creating multiple clones. All worktrees share the exact same commit history, packfiles, objects, and refs inside the central <code className="text-xs">.git/</code> folder. Only the checked-out files in each active worktree consume additional disk space.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Do GUI Git clients and IDEs (VS Code, Cursor, IntelliJ) support this?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              Yes! Each worktree directory contains a standard <code className="text-xs">.git</code> text file that points back to the main bare repository. When you open any worktree folder (e.g. <code className="text-xs">my_project/main</code> or <code className="text-xs">my_project/feature</code>) in VS Code, IntelliJ, or GitKraken, the editor recognizes it natively as a Git repository.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom AdSense Unit */}
      <AdBanner slot="1357924680" format="auto" />
    </div>
  );
}
