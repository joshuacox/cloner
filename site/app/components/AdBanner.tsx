"use client";

import { useEffect } from "react";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle?: any[];
  }
}

export default function AdBanner({
  slot = "1234567890",
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // Ignore adsbygoogle push errors in development, SSG, or offline
    }
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`my-10 mx-auto w-full max-w-4xl px-4 text-center ${className}`}
    >
      <div className="rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/20 py-2 px-4 transition-colors">
        <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-600 mb-1">
          Advertisement
        </span>
        <div className="min-h-[90px] flex items-center justify-center overflow-hidden">
          <ins
            className="adsbygoogle"
            style={{ display: "block", minWidth: "250px", minHeight: "90px" }}
            data-ad-client="ca-pub-8973108060277483"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        </div>
      </div>
    </aside>
  );
}
