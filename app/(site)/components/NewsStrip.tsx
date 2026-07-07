import { Reveal } from "./Reveal";

type NewsPost = {
  tag: string;
  date: string;
  headline: string;
  body: string;
  image: string;
  imagePosition?: string;
};

const posts: NewsPost[] = [
  {
    tag: "Charity",
    date: "9 Jun 2026",
    headline: "A visit from The Lighthouse Charity",
    body: "Ruth Beaney from The Lighthouse Charity came in last week to talk to the team. Free, confidential support for anyone working in construction — 24/7. Good to have her in.",
    image: "/news/lighthouse-visit.jpg",
    imagePosition: "top",
  },
  {
    tag: "Team News",
    date: "7 May 2026",
    headline: "Welcome to the team, Andrei",
    body: "We're pleased to welcome Andrei Codreanu to the CRS sales team as a prospecting sales executive. Andrei brings energy and enthusiasm — great to have him on board.",
    image: "/news/Andrei.jpg",
    imagePosition: "top",
  },
  {
    tag: "Community",
    date: "30 Apr 2026",
    headline: "CRS sponsors Hinckley RFC's final game of the season",
    body: "CRS took to The Pitches on Saturday as proud sponsors to support Hinckley Rugby Club at their final game of the season. A fantastic day — and a win on the day made it even better.",
    image: "/news/rugby.jpg",
    imagePosition: "center",
  },
  {
    tag: "Team News",
    date: "23 Apr 2026",
    headline: "Welcome to the team, Ethan",
    body: "Ethan joins the CRS sales team as a telesales executive. A record-breaking first day on the phones — great to have you on board, Ethan.",
    image: "/news/Ethan.jpg",
    imagePosition: "top",
  },
];

export function NewsStrip() {
  return (
    <section
      id="news"
      className="relative pt-[160px] md:pt-[180px] pb-32 md:pb-44"
      style={{ borderTop: "none" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 mb-16 md:mb-20"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                Latest News
              </span>
              <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.015em] text-white">
                From CRS.
              </h1>
            </div>
            <a
              href="https://www.linkedin.com/company/crs-insurance-brokers"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-bone/65 hover:text-white transition-colors duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
            >
              Follow us on LinkedIn →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Eva welcome card — newest */}
          <Reveal>
            <div
              className="relative flex flex-col h-full bg-m-ink-2"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="relative aspect-[16/9] overflow-hidden"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/news/Eva.jpg"
                  alt="Eva Matthews, Client Services Executive at CRS Insurance Brokers"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/45 tnum">
                  <span className="text-m-coral/80">Team News</span>
                  <span>6 Jul 2026</span>
                </div>
                <h3 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  Welcome to the team, Eva
                </h3>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  Eva Matthews joins CRS as a Client Services Executive, starting her apprenticeship with Skills Edge Training. Great to have her on board.
                </p>
              </div>
            </div>
          </Reveal>
          {/* Wear Purple Week card — links to full post */}
          <Reveal>
            <a
              href="/news/wear-purple-week"
              className="group relative flex flex-col h-full bg-m-ink-2 transition-colors duration-300 hover:bg-m-ink-3"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="relative aspect-[16/9] overflow-hidden"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/news/wear-purple-team.jpg"
                  alt="CRS team wearing purple for Wear Purple Week"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="flex items-center justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/45 tnum">
                  <span className="text-m-coral/80">Charity</span>
                  <span>16 Jun 2026</span>
                </div>
                <h3 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white group-hover:text-m-bone/90 transition-colors duration-300">
                  CRS backs Wear Purple Week.
                </h3>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  Wolf run, office bake-off, and a team that showed up in purple. How CRS supported The Lighthouse Charity this June.
                </p>
              </div>
            </a>
          </Reveal>
          {posts.map((post, i) => (
            <Reveal key={post.headline} delay={i * 110}>
              <div
                className="relative flex flex-col h-full bg-m-ink-2"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: post.imagePosition ?? "center" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                  <div className="flex items-center justify-between text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/45 tnum">
                    <span className="text-m-coral/80">{post.tag}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                    {post.headline}
                  </h3>

                  <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                    {post.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
