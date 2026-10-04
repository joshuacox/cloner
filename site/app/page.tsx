import Link from "next/link";
import CodeBlock from "./components/CodeBlock";
import AdBanner from "./components/AdBanner";
import InteractiveExplorer from "./components/InteractiveExplorer";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* 1. Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-mono font-medium bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-sm">
          <span>🌳 Parallel Branch Development for Git</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
          Git worktrees made effortless.
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Traditional Git clones force you to stash uncommitted changes, switch branches, and rebuild caches.{" "}
          <code className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">cloner</code> clones a bare repository at the root and checks out your default branch as an independent, parallel worktree.
        </p>

        {/* Quick Install Box */}
        <div className="max-w-xl mx-auto text-left mb-8">
          <CodeBlock
            code="curl -sL https://raw.githubusercontent.com/joshuacox/cloner/refs/heads/main/bootstrapcloner.sh | bash"
            caption="Quick Install (One-liner)"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#explorer"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Explore Playground
          </a>
          <a
            href="#installation"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            Installation Guide
          </a>
          <a
            href="https://github.com/joshuacox/cloner"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-900 dark:border dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <span>GitHub</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </section>

      {/* 2. Unified Interactive Workspace Simulator */}
      <section id="explorer" className="scroll-mt-20">
        <InteractiveExplorer />
      </section>

      {/* 3. Core Architectural Advantages */}
      <section id="features" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Why use <code className="text-emerald-500 font-mono">cloner</code>?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Setting up worktree-ready repositories manually is tedious and requires configuring tricky Git refspecs. <code className="font-mono text-emerald-500">cloner</code> makes it automatic, safe, and portable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🎯
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Auto Default Branching
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Detects remote <code className="font-mono text-xs">origin/HEAD</code> dynamically. Whether the repository uses <code className="font-mono text-xs">main</code>, <code className="font-mono text-xs">master</code>, or a custom branch, <code className="font-mono text-xs">cloner</code> creates the initial worktree seamlessly.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🔄
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Safe Remote Tracking Refspecs
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Default bare clones don&apos;t configure remote branch tracking refspecs under <code className="font-mono text-xs">refs/remotes/origin/*</code>. <code className="font-mono text-xs">cloner</code> configures them correctly on clone so subsequent worktrees track upstream properly.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🛡️
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Atomic Rollback on Error
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              If an authentication error, typo, or network drop occurs during cloning, <code className="font-mono text-xs">cloner</code> automatically cleans up the half-initialized folder, ensuring no broken state is left behind.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Shallow Clone Support
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Use <code className="font-mono text-xs">--depth 1</code> to clone massive repositories (Linux, Chromium) in seconds, saving gigabytes of bandwidth and disk space while maintaining full worktree functionality.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              💻
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Native IDE & Editor Compatibility
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every worktree folder contains a standard <code className="font-mono text-xs">.git</code> pointer file. VS Code, Cursor, and JetBrains IDEs automatically identify worktree folders as full Git projects.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🐚
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Pure Bash & Shell Completions
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Zero dependencies outside of Git and Bash. Includes intelligent autocompletion scripts for both <strong>Bash</strong> and <strong>Zsh</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page Ad Unit */}
      <AdBanner slot="9876543210" format="auto" />

      {/* 4. Installation Guide */}
      <section id="installation" className="py-12 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Installation
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Install <code className="font-mono text-emerald-500">cloner</code> on your Linux, macOS, or WSL machine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-semibold">
                Recommended
              </span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                One-liner Installer
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
              Fetches the latest release, builds with CMake or make, and installs binaries and man pages automatically:
            </p>
            <CodeBlock
              code="curl -sL https://raw.githubusercontent.com/joshuacox/cloner/refs/heads/main/bootstrapcloner.sh | bash"
              caption="Bootstrap One-liner"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold">
                Zero Dependencies
              </span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Standard Makefile
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
              Clone from source and install directly without CMake:
            </p>
            <CodeBlock
              code={`git clone https://github.com/joshuacox/cloner.git\ncd cloner\nsudo make install`}
              caption="Makefile Build"
            />
          </div>
        </div>
      </section>

      {/* 5. Everyday Workflows */}
      <section id="usage" className="py-12 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Everyday Workflows
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Real-world scenarios showing how <code className="font-mono text-emerald-500">cloner</code> speeds up daily engineering tasks.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
              1. Basic Clone with Automatic Directory & Branch
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
              Clones into a folder named after the repository and checks out the default branch:
            </p>
            <CodeBlock code="cloner git@github.com:facebook/react.git" caption="Creates react/.git and react/main/" />
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
              2. Custom Destination Directory & Explicit Branch
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
              Check out a specific branch into a customized folder name:
            </p>
            <CodeBlock code="cloner -b develop git@github.com:joshuacox/cloner.git my-cloner" caption="Custom target folder & branch" />
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
              3. Shallow Clone for Huge Codebases (--depth 1)
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
              Save gigabytes of bandwidth and minutes of wait time when cloning massive repos:
            </p>
            <CodeBlock code="cloner --depth 1 https://github.com/torvalds/linux.git" caption="Shallow clone with depth 1" />
          </div>
        </div>
      </section>

      {/* 6. Command Reference */}
      <section id="reference" className="py-12 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Command-Line Reference
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Full options and environment variables supported by <code className="font-mono text-emerald-500">cloner</code>.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 uppercase font-semibold">
              <tr>
                <th className="px-4 py-3">Flag / Option</th>
                <th className="px-4 py-3">Argument</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-mono">
              <tr className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-b, --branch</td>
                <td className="px-4 py-3 text-zinc-500">&lt;name&gt;</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Explicit branch to check out into the initial worktree.
                </td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/40">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">--depth</td>
                <td className="px-4 py-3 text-zinc-500">&lt;depth&gt;</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Create a shallow clone with history truncated to specified depth.
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-v, --verbose</td>
                <td className="px-4 py-3 text-zinc-500">None</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Increase progress output verbosity.
                </td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/40">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-q, --quiet</td>
                <td className="px-4 py-3 text-zinc-500">None</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Quiet mode; suppress non-error informational messages.
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-V, --version</td>
                <td className="px-4 py-3 text-zinc-500">None</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Print version information (e.g. <code className="font-mono text-xs">cloner version 1.1.0</code>) and exit.
                </td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/40">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">-h, --help</td>
                <td className="px-4 py-3 text-zinc-500">None</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Print syntax usage instructions and exit.
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-950">
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">VERBOSITY</td>
                <td className="px-4 py-3 text-zinc-500">Environment</td>
                <td className="px-4 py-3 font-sans text-zinc-600 dark:text-zinc-400">
                  Integer controlling verbosity (default: 10, quiet: 0).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Worktree Cheat Sheet */}
      <section id="cheatsheet" className="py-12 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Git Worktree Cheat Sheet
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Commands to use once your repository is set up with <code className="font-mono text-emerald-500">cloner</code>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-2">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">01.</span> Add a New Feature Worktree
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Create a new folder and branch checked out at that branch:
            </p>
            <CodeBlock code="git worktree add feature-auth" caption="Creates folder 'feature-auth'" />
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-2">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">02.</span> Checkout Existing Remote Branch
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Checkout a colleague&apos;s remote branch to test or review:
            </p>
            <CodeBlock code="git worktree add pr-42 origin/pr-42" caption="Review PR locally without stash" />
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-2">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">03.</span> List Active Worktrees
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Inspect all registered paths and active HEAD branches:
            </p>
            <CodeBlock code="git worktree list" caption="Inspect active worktrees" />
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 space-y-2">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">04.</span> Remove Completed Worktree
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Clean up a branch folder once merged:
            </p>
            <CodeBlock code="git worktree remove feature-auth\ngit worktree prune" caption="Delete worktree & prune refs" />
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-12 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Answers to common questions about Git worktrees and compatibility.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              How does cloner differ from running <code className="font-mono text-xs">git worktree add</code> manually?
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
              Standard <code className="font-mono">git clone</code> places all working files in the repository root and hides <code className="font-mono">.git/</code> inside it. Adding worktrees creates awkward nested folders or sibling directories outside the root. <code className="font-mono text-emerald-500">cloner</code> structures the root symmetrically: <code className="font-mono">.git/</code> is a bare repository, and every branch (including <code className="font-mono">main</code>) is an equal, sibling worktree.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Does this consume more disk space than standard cloning?
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
              No. In fact, worktrees save immense disk space compared to making separate clones. All worktrees share the exact same commit history, packfiles, and objects inside the central <code className="font-mono">.git/</code> directory. Only checked-out files consume disk space.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Do GUI Git clients and IDEs (VS Code, Cursor, IntelliJ) support this?
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
              Yes. Each worktree folder contains a standard <code className="font-mono">.git</code> text file that points back to the main bare repository. When you open any worktree folder in VS Code, IntelliJ, or GitKraken, the editor recognizes it natively as a full Git repository.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Ad Unit */}
      <AdBanner slot="2468135790" format="auto" />
    </div>
  );
}
