import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service & License - cloner Documentation",
  description:
    "Terms of Service, acceptable use, and licensing information for cloner software and documentation.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Terms of Service & License
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing or using this website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          2. Open Source License (GPLv3)
        </h2>
        <p>
          The <strong>cloner</strong> command-line software is licensed under the <strong>GNU General Public License v3.0 (GPLv3)</strong>.
        </p>
        <p>
          You are free to run, study, share, and modify the software in accordance with the terms of the GNU General Public License as published by the Free Software Foundation. Any derivative work or redistribution of the software must also be made available under the same license terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          3. Disclaimer of Warranty
        </h2>
        <p className="font-mono text-xs uppercase bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
          This software and website documentation are provided &quot;as is&quot;, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from, out of, or in connection with the software or the use or other dealings in the software.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          4. Website Content & Accuracy
        </h2>
        <p>
          While we strive to provide accurate and up-to-date documentation regarding Git, worktrees, and shell scripting, we make no representations or warranties concerning the accuracy, completeness, or suitability of the information found on this site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          5. Governing Law
        </h2>
        <p>
          Any claim relating to this website or cloner shall be governed by applicable laws without regard to conflict of law provisions.
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
