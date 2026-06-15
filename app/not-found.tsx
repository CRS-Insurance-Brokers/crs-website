import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found · CRS Insurance Brokers",
  robots: { index: false },
};

/*
 * Root not-found: catches every unmatched URL site-wide. Deliberately
 * self-contained — no Nav/Footer imports, which depend on the marketing
 * segment's CSS. Styled inline with the brand palette instead.
 */
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        background: "#14102E",
        color: "#EDEAE2",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/crs-logo-dark.svg"
        alt="CRS Insurance Brokers"
        style={{ height: "64px", marginBottom: "1rem" }}
      />
      <p
        style={{
          fontFamily: "ui-monospace, 'Geist Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          opacity: 0.55,
          margin: 0,
        }}
      >
        404 — Page not found
      </p>
      <h1
        style={{
          fontSize: "clamp(1.75rem, 4vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.015em",
          margin: 0,
          color: "#FFFFFF",
        }}
      >
        This page doesn&rsquo;t exist.
      </h1>
      <p style={{ maxWidth: "44ch", opacity: 0.7, lineHeight: 1.65, margin: 0 }}>
        The address may be mistyped, or the page may have moved. Head back to
        the homepage, or call us on{" "}
        <a
          href="tel:01455244630"
          style={{ color: "#E56C70", textDecoration: "none", whiteSpace: "nowrap" }}
        >
          01455 244630
        </a>{" "}
        and we&rsquo;ll point you the right way.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "0.5rem",
          padding: "1rem 1.5rem",
          background: "#FFFFFF",
          color: "#14102E",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textDecoration: "none",
        }}
      >
        Back to the homepage →
      </Link>
    </main>
  );
}
