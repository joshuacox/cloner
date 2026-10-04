"use client";

import { useState } from "react";

export default function CommandGenerator() {
  const [repoUrl, setRepoUrl] = useState("git@github.com:facebook/react.git");
  const [targetDir, setTargetDir] = useState("");
  const [branch, setBranch] = useState("");
  const [depth, setDepth] = useState<string>("");
  const [isQuiet, setIsQuiet] = useState(false);
  const [isVerbose, setIsVerbose] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compute inferred directory name
  const inferDirectory = (url: string) => {
    if (!url.trim()) return "my-project";
    let cleaned = url.trim().replace(/\/+$/, "");
    cleaned = cleaned.replace(/\.git$/, "");
    const parts = cleaned.split("/");
    const last = parts[parts.length - 1];
    if (last.includes(":")) {
      return last.split(":").pop() || "my-project";
    }
    return last || "my-project";
  };

  const effectiveDir = targetDir.trim() || inferDirectory(repoUrl);
  const effectiveBranch = branch.trim() || "main";

  // Build command string
  const commandParts = ["cloner"];
  if (branch.trim()) {
    commandParts.push(`--branch ${branch.trim()}`);
  }
  if (depth.trim() && !isNaN(Number(depth))) {
    commandParts.push(`--depth ${depth.trim()}`);
  }
  if (isQuiet) {
    commandParts.push("--quiet");
  } else if (isVerbose) {
    commandParts.push("--verbose");
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
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 sm:p-8 shadow-sm">
      <div className="max-w-2xl mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-2">
          ⚡ Interactive Playground
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Command Generator & Worktree Simulator
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Customize your clone parameters and observe how <code className="text-emerald-500 font-bold">cloner</code> structures your workspace.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
              Repository URL or Path
            </label>
            <input
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="e.g. git@github.com:org/repo.git"
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                Target Folder (Optional)
              </label>
              <input
                type="text"
                value={targetDir}
                onChange={(e) => setTargetDir(e.target.value)}
                placeholder={inferDirectory(repoUrl)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                Initial Branch (Optional)
              </label>
              <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="Auto-detect (main/master)"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                Shallow Depth (--depth)
              </label>
              <input
                type="number"
                min="1"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                placeholder="Full history"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-zinc-700 dark:text-zinc-300">
                <input
                  type="checkbox"
                  checked={isQuiet}
                  onChange={(e) => {
                    setIsQuiet(e.target.checked);
                    if (e.target.checked) setIsVerbose(false);
                  }}
                  className="rounded text-emerald-500 focus:ring-emerald-500 border-zinc-300 dark:border-zinc-700"
                />
                Quiet mode (-q)
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-zinc-700 dark:text-zinc-300">
                <input
                  type="checkbox"
                  checked={isVerbose}
                  onChange={(e) => {
                    setIsVerbose(e.target.checked);
                    if (e.target.checked) setIsQuiet(false);
                  }}
                  className="rounded text-emerald-500 focus:ring-emerald-500 border-zinc-300 dark:border-zinc-700"
                />
                Verbose mode (-v)
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Output & Simulated Tree */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
              <span>Generated Command</span>
              {copied && <span className="text-emerald-500 font-mono">Copied!</span>}
            </div>
            <div className="relative flex items-center rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 p-3.5 font-mono text-xs overflow-x-auto">
              <span className="text-emerald-400 mr-2 select-none">$</span>
              <span className="flex-1 select-all">{generatedCommand}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="ml-3 px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
                aria-label="Copy generated command"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
              Simulated Directory Layout
            </label>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner">
              <div className="text-emerald-400 font-bold">{effectiveDir}/</div>
              <div className="pl-4 text-emerald-300">
                ├── .git/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500"># Central Bare Repository Store</span>
              </div>
              <div className="pl-4 text-sky-400">
                └── {effectiveBranch}/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500"># Initial Linked Worktree ({effectiveBranch})</span>
              </div>
              <div className="mt-3 pt-3 border-t border-zinc-800 text-zinc-500 text-[11px]">
                # Ready for immediate parallel branch checkout:
                <br />
                <span className="text-zinc-400">$ cd {effectiveDir}</span>
                <br />
                <span className="text-zinc-400">$ git worktree add feature-billing</span>
                <br />
                <span className="text-zinc-400"># Result: {effectiveDir}/feature-billing/ created!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
