import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "About Cloner - Git Worktree Workflow Orchestrator",
  description:
    "Learn about the origins, philosophy, and motivation behind cloner, an open-source tool for parallel git worktree development.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          About cloner
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          The story, engineering principles, and motivation behind the worktree orchestrator.
        </p>
      </div>

      <section className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
          Why was cloner created?
        </h2>
        <p>
          In modern software engineering, developers frequently work across multiple tasks simultaneously: reviewing pull requests, diagnosing urgent production regressions, testing experimental refactors, and building long-running features.
        </p>
        <p>
          Traditional Git workflows force developers to either:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>
            Constantly stash uncommitted work, checkout another branch, rebuild node_modules or binaries, test, and switch back (losing cache and context).
          </li>
          <li>
            Clone the entire repository repeatedly into separate directories, multiplying disk usage and duplicating Git object databases.
          </li>
        </ul>
        <p>
          Git added the <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-emerald-600 dark:text-emerald-400 font-mono">git worktree</code> command to solve this, allowing multiple working trees attached to a single repository. However, setting up a repository from the very beginning in a clean worktree-friendly layout required a cumbersome sequence of manual commands: creating a folder, cloning bare into <code className="text-xs font-mono">.git</code>, fixing fetch refspecs, detecting the upstream branch, and creating the first linked worktree.
        </p>
        <p>
          <strong className="text-zinc-900 dark:text-white">cloner</strong> wraps that entire process into a single, reliable command.
        </p>
      </section>

      <AdBanner slot="5566778899" format="auto" />

      <section className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
          Core Principles
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Zero Dependencies</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Built as a pure POSIX-compatible Bash utility requiring only Git and standard coreutils. No runtimes, no daemon, no bloat.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Fail-Safe & Atomic</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Clean rollback mechanisms guarantee that network drops or permission errors never leave corrupted repository directories behind.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Universal Compatibility</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Works across Linux, macOS, BSD, and WSL. Compatible with GitHub, GitLab, Bitbucket, Gitea, and self-hosted git servers.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Open Source & Free</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Licensed under the GNU General Public License v3.0, ensuring freedom, transparency, and community contributions.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
          Author & Maintainer
        </h2>
        <p>
          Created and maintained by <strong>Joshua Cox</strong>.
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Source code, issues, and contributions are available on GitHub:{" "}
          <a
            href="https://github.com/joshuacox/cloner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-500"
          >
            github.com/joshuacox/cloner
          </a>
          .
        </p>
      </section>

      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-sm">
        <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          &larr; Back to Documentation
        </Link>
        <Link href="/privacy/" className="text-zinc-500 hover:underline">
          Privacy Policy &rarr;
        </Link>
      </div>
    </div>
  );
}
