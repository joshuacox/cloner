"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  caption?: string;
}

export default function CodeBlock({ code, language = "bash", caption }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group my-4 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-100 shadow-md">
      {caption && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-950/80 text-xs font-mono text-zinc-400">
          <span>{caption}</span>
          <span className="text-zinc-500 uppercase">{language}</span>
        </div>
      )}
      <div className="relative p-4 font-mono text-sm overflow-x-auto leading-relaxed">
        <pre>
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          type="button"
          aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
          className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors duration-150 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {copied ? (
            <span className="flex items-center gap-1.5 text-emerald-400">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
