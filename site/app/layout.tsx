import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "cloner - Git Worktree Workflow Orchestrator & CLI Tool",
  description:
    "A developer-first CLI utility designed to structure Git repositories for worktree workflows. Develop multiple branches in parallel with shared history, zero disk duplication, and instant branch switching.",
  keywords: [
    "cloner",
    "git worktree",
    "git worktrees",
    "git clone bare",
    "git parallel branches",
    "worktree workflow",
    "git tool",
    "developer productivity",
  ],
  authors: [{ name: "Joshua Cox" }],
  other: {
    "google-adsense-account": "ca-pub-8973108060277483",
  },
  openGraph: {
    title: "cloner - Streamlined Git Worktree Workflows",
    description:
      "Stop stashing and rebuilding. Clone repositories structured for Git worktree workflows and run multiple branches in parallel.",
    type: "website",
    url: "https://cloner.joshuacox.com",
    siteName: "cloner Documentation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
