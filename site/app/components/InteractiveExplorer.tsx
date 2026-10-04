"use client";

import { useState } from "react";

const PRESETS = [
  { name: "React", url: "git@github.com:facebook/react.git", branch: "main" },
  { name: "Linux", url: "https://github.com/torvalds/linux.git", branch: "master" },
  { name: "Next.js", url: "git@github.com:vercel/next.js.git", branch: "canary" },
  { name: "Tailwind CSS", url: "git@github.com:tailwindlabs/tailwindcss.git", branch: "main" },
];

export default function InteractiveExplorer() {
  const [repoUrl, setRepoUrl] = useState("git@github.com:facebook/react.git");
  const [targetDir, setTargetDir] = useState("");
  const [branch, setBranch] = useState("");
  const [depth, setDepth] = useState<string>("");
  const [isQuiet, setIsQuiet] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"structure" | "comparison">("structure");

  const inferDirectory = (url: string) => {
    if (!url.trim()) return "react";
    let cleaned = url.trim().replace(/\/+$/, "");
    cleaned = cleaned.replace(/\.git$/, "");
    const parts = cleaned.split("/");
    const last = parts[parts.length - 1];
    if (last.includes(":")) {
      return last.split(":").pop() || "react";
    }
    return last || "react";
  };

  const effectiveDir = targetDir.trim() || inferDirectory(repoUrl);
  const effectiveBranch = branch.trim() || (repoUrl.includes("linux") ? "master" : repoUrl.includes("next.js") ? "canary" : "main");

  // Build command
  const commandParts = ["cloner"];
  if (branch.trim()) {
    commandParts.push(`-b ${branch.trim()}`);
  }
  if (depth.trim() && !isNaN(Number(depth))) {
    commandParts.push(`--depth ${depth.trim()}`);
  }
  if (isQuiet) {
    commandParts.push("-q");
  }
  commandParts.push(repoUrl.trim() || "git@github.com:org/repo.git");
  if (targetDir.trim()) {
    commandParts.push(targetDir.trim());
  }
  const generatedCommand = commandParts.join(" ");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const loadPreset = (preset: typeof PRESETS[0]) => {
    setRepoUrl(preset.url);
    setBranch(preset.branch);
    setTargetDir("");
  };

  return (
    <div className="my-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Interactive Workspace Simulator
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Architecture Explorer & Command Builder
          </h3>
        </div>

        {/* Tab switcher */}
        <div className="inline-flex rounded-lg p-1 bg-zinc-200/70 dark:bg-zinc-800/80 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("structure")}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "structure"
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Workspace Structure
          </button>
          <button
            onClick={() => setActiveTab("comparison")}
            type="button"
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "comparison"
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            Cloner vs Standard Clone
          </button>
        </div>
      </div>

      {/* Preset pills */}
      <div className="px-6 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-zinc-500 dark:text-zinc-400 font-medium">Quick Presets:</span>
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => loadPreset(p)}
            type="button"
            className={`px-2.5 py-1 rounded-md border text-xs font-mono transition-colors ${
              repoUrl === p.url
                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold"
                : "border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8">
        {activeTab === "structure" ? (
          <div className="space-y-6">
            {/* Input Controls Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Repository URL
                </label>
                <input
                  type="text"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="git@github.com:org/repo.git"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Folder Name (Optional)
                </label>
                <input
                  type="text"
                  value={targetDir}
                  onChange={(e) => setTargetDir(e.target.value)}
                  placeholder={inferDirectory(repoUrl)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Branch (Optional)
                </label>
                <input
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  placeholder={effectiveBranch}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Generated Command Box */}
            <div className="rounded-xl bg-zinc-900 text-zinc-100 p-3.5 sm:p-4 border border-zinc-800 flex items-center justify-between gap-4 font-mono text-xs overflow-x-auto">
              <div className="flex items-center gap-2 truncate">
                <span className="text-emerald-400 select-none">$</span>
                <span className="text-zinc-100 truncate">{generatedCommand}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors flex items-center gap-1.5"
                aria-label="Copy command"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Split Visual Tree and Benefits */}
            <div className="grid lg:grid-cols-12 gap-6 items-stretch">
              {/* Directory Visualization */}
              <div className="lg:col-span-7 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-5 font-mono text-xs leading-relaxed flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-800 font-sans text-sm">
                    <span>📁 Project Root:</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400">{effectiveDir}/</span>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>├── .git/</span>
                    <span className="text-[11px] text-zinc-500 font-normal"># Shared bare Git object store</span>
                  </div>

                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold pl-4">
                    <span>├── {effectiveBranch}/</span>
                    <span className="text-[11px] text-zinc-500 font-normal"># Default linked worktree ({effectiveBranch})</span>
                  </div>

                  <div className="pl-8 text-zinc-500 space-y-0.5">
                    <div>│&nbsp;&nbsp; ├── src/</div>
                    <div>│&nbsp;&nbsp; └── package.json</div>
                  </div>

                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold pl-4">
                    <span>├── feature-auth/</span>
                    <span className="text-[11px] text-zinc-500 font-normal"># git worktree add feature-auth</span>
                  </div>

                  <div className="pl-8 text-zinc-500 space-y-0.5">
                    <div>│&nbsp;&nbsp; ├── src/</div>
                    <div>│&nbsp;&nbsp; └── package.json</div>
                  </div>

                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold pl-4">
                    <span>└── review-pr-104/</span>
                    <span className="text-[11px] text-zinc-500 font-normal"># git worktree add review-pr-104 origin/pr-104</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 font-sans flex items-center justify-between">
                  <span>💡 Switch branches by changing folders: <code className="font-mono text-zinc-700 dark:text-zinc-300">cd ../feature-auth</code></span>
                </div>
              </div>

              {/* Three Value Pillars */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-1">
                    <span>⚡ Zero Disk Duplication</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    All branch folders share the central <code className="font-mono">.git/</code> database. Git history and packfiles are stored once.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm mb-1">
                    <span>🔄 Parallel Development</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Run local servers, tests, or compilers on multiple branches side-by-side with zero port conflicts and no cache invalidations.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm mb-1">
                    <span>🧹 No More Stash Gymastics</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Handle sudden hotfixes instantly without stashing half-baked experiments or generating dirty WIP commits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Comparison View */
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center text-xs font-bold">✓</span>
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Cloner Worktree Architecture</h4>
              </div>
              <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong>Instant context switching:</strong> Just <code className="font-mono bg-white dark:bg-zinc-900 px-1 py-0.5 rounded">cd ../branch</code> without resetting file timestamps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong>Simultaneous dev environments:</strong> Run webpack/vite/cargo on 2 branches at once.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong>Proper remote tracking:</strong> Auto-configured refspecs mean <code className="font-mono bg-white dark:bg-zinc-900 px-1 py-0.5 rounded">git fetch origin</code> works seamlessly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span><strong>Dynamic default branch:</strong> Auto-detects main, master, or custom branch without failing.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-zinc-400 dark:bg-zinc-600 text-white flex items-center justify-center text-xs font-bold">✗</span>
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Traditional Monolithic Clone</h4>
              </div>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-bold">•</span>
                  <span><strong>Single active branch:</strong> You can only checkout, compile, and run one branch at a time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-bold">•</span>
                  <span><strong>Constant stashing:</strong> Switching tasks requires <code className="font-mono bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">git stash</code> and resolving stash conflicts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-bold">•</span>
                  <span><strong>Build cache invalidation:</strong> Modifying file mtimes forces long full rebuilds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-bold">•</span>
                  <span><strong>Storage bloat:</strong> Manually making multiple clones downloads duplicates of the entire git history.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
