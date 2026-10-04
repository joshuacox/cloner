"use client";

import { useState } from "react";

export default function WorktreeVisualizer() {
  const [activeTab, setActiveTab] = useState<"cloner" | "traditional">("cloner");

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Architecture Comparison
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            See how <code className="text-emerald-600 dark:text-emerald-400 font-semibold">cloner</code> reorganizes repositories for parallel development.
          </p>
        </div>
        <div className="inline-flex rounded-lg p-1 bg-zinc-200/80 dark:bg-zinc-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("cloner")}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "cloner"
                ? "bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Cloner (Worktrees)
          </button>
          <button
            onClick={() => setActiveTab("traditional")}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "traditional"
                ? "bg-white dark:bg-zinc-900 text-rose-600 dark:text-rose-400 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Traditional Clone
          </button>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "cloner" ? (
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-zinc-800">
              <div className="text-emerald-400 font-bold mb-2"># cloner my_project</div>
              <div className="text-zinc-400">my_project/</div>
              <div className="pl-4 text-emerald-400">├── .git/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500"># Central Bare Repository</span></div>
              <div className="pl-4 text-sky-300">├── main/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500"># Checked out at 'main'</span></div>
              <div className="pl-8 text-zinc-400">│&nbsp;&nbsp; ├── src/</div>
              <div className="pl-8 text-zinc-400">│&nbsp;&nbsp; └── package.json</div>
              <div className="pl-4 text-purple-300">├── feature-auth/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500"># git worktree add feature-auth</span></div>
              <div className="pl-8 text-zinc-400">│&nbsp;&nbsp; ├── src/</div>
              <div className="pl-8 text-zinc-400">│&nbsp;&nbsp; └── package.json</div>
              <div className="pl-4 text-amber-300">└── bugfix-login/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500"># git worktree add bugfix-login</span></div>
              <div className="pl-8 text-zinc-400">    └── ...</div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm">✓</span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Simultaneous Branch Development</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Run dev servers or test suites on two different branches side-by-side with zero stash or commit churn.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm">✓</span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Zero Git History Duplication</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">All worktrees share the same central bare <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">.git</code> store. Disk space is preserved.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm">✓</span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Instant Context Switching</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Switching branches is as simple as <code className="text-xs bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">cd ../feature-auth</code>. No re-compiling unchanged targets.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-zinc-800">
              <div className="text-rose-400 font-bold mb-2"># git clone my_project</div>
              <div className="text-zinc-400">my_project/</div>
              <div className="pl-4 text-zinc-500">├── .git/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Hidden monolithic repo</div>
              <div className="pl-4 text-rose-300">├── src/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Only ONE branch checked out</div>
              <div className="pl-4 text-rose-300">├── package.json</div>
              <div className="pl-4 text-amber-400">└── node_modules/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Rebuilt on every branch switch</div>
              <div className="mt-3 pt-3 border-t border-zinc-800 text-zinc-500">
                # Want to review PR while working on feature?
                <br />
                $ git stash
                <br />
                $ git checkout pr-branch
                <br />
                $ npm install  (slow rebuild!)
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg text-sm">✗</span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Single Active Branch Bottleneck</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">You can only view, build, or test one branch at a time inside the working tree.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg text-sm">✗</span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Endless Stash Gymnastics</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Uncommitted experiments must be stashed, committed blindly, or risked during urgent hotfixes.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg text-sm">✗</span>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Repeated Build Cache Invalidation</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Switching branches updates file timestamps, invalidating caches and triggering long rebuilds.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
