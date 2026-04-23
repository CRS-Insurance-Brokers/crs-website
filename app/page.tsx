export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[560px] flex-col items-start justify-center gap-4 px-5 py-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
        Workplace incident · RIDDOR helper
      </p>
      <h1
        className="text-[34px] leading-[1.05] text-ink"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        Let&rsquo;s work out what needs to happen next.
      </h1>
      <p className="max-w-[50ch] text-[15.5px] leading-[1.55] text-ink-muted">
        Scaffold stub. The flow, components, persistence, email and PWA shell
        land at later milestones &mdash; see <code>PLAN.md</code>.
      </p>
    </main>
  );
}
