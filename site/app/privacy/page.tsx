import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - cloner Documentation",
  description:
    "Privacy Policy for cloner documentation website, including cookie disclosures, Google AdSense, log files, and data practices.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          1. Overview
        </h2>
        <p>
          This Privacy Policy describes how the documentation website for <strong>cloner</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and safeguards information when you visit our website. We are committed to transparency and respecting your digital privacy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          2. Log Files
        </h2>
        <p>
          Like most standard website servers, our hosting environment makes use of log files. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This data is used solely to analyze trends, administer the site, track user movement on the website, and gather broad demographic information. IP addresses and similar details are not linked to any personally identifiable information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          3. Google AdSense & Cookies
        </h2>
        <p>
          We use <strong>Google AdSense</strong> to display advertisements on our website to help support documentation maintenance and open-source infrastructure.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Google, as a third-party vendor, uses cookies to serve ads on this website.
          </li>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to this site and/or other sites on the Internet.
          </li>
          <li>
            Users may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-500"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-500"
            >
              aboutads.info
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          4. Third-Party Privacy Policies
        </h2>
        <p>
          Our Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information regarding their practices as well as for instructions about how to opt-out of certain options.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          5. GDPR & CCPA Compliance
        </h2>
        <p>
          If you are a resident of the European Economic Area (EEA) or California (CCPA), you have certain data protection rights, including the right to access, update, or delete information, and the right to opt out of the sale or sharing of personal data. Since this static documentation site does not collect personal names, email registrations, or user accounts, no personal databases are retained.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          6. Updates to This Policy
        </h2>
        <p>
          We may update our Privacy Policy periodically. We advise you to review this page occasionally for any changes. Continued use of the website after modifications constitutes acceptance of the revised policy.
        </p>
      </section>

      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-sm">
        <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          &larr; Back to Documentation
        </Link>
        <Link href="/terms/" className="text-zinc-500 hover:underline">
          Terms of Service &rarr;
        </Link>
      </div>
    </div>
  );
}
