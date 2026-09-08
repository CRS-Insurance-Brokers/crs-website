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
              <span className="font-semibold inline-flex items-center gap-2 mb-6 text-[12px] tracking-[0.01em] text-m-bone/55">
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
              className="font-semibold group inline-flex items-center gap-3 text-[13px] tracking-[0.01em] text-m-bone/65 hover:text-white transition-colors duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
            >
              Follow us on LinkedIn →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Chloe Sharman welcome card — newest */}
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
                  src="/news/Chloe.jpg"
                  alt="Chloe Sharman, Renewals Executive at CRS Insurance Brokers"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center 25%" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Team News</span>
                  <span>1 Sep 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  Welcome to the team, Chloe
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  Chloe Sharman joins CRS as a Renewals Executive. She served in the Army before moving back into insurance. Welcome, Chloe.
                </p>
              </div>
            </div>
          </Reveal>
          {/* Lutterworth charity golf day card */}
          <Reveal delay={60}>
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
                  src="/news/lutterworth-golf.jpg"
                  alt="Three of the CRS team at the British Heart Foundation charity golf day, Lutterworth Golf Club"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Community</span>
                  <span>23 Aug 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  A charity golf day at Lutterworth Golf Club
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  Josh Van Allen, Lee Thornett and Jake Thornett played in the British Heart Foundation charity day at Lutterworth Golf Club, where CRS sponsored the closest-to-the-pin hole. &pound;6,000 was raised on the day.
                </p>
              </div>
            </div>
          </Reveal>
          {/* Thompson Utd sponsorship card */}
          <Reveal delay={120}>
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
                  src="/news/thompson-utd.jpg"
                  alt="CRS-sponsored Thompson Utd Veterans new home and away kits for the 26-27 season"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Community</span>
                  <span>14 Aug 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  CRS sponsors Thompson Utd Veterans&rsquo; new kit
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  CRS is sponsoring Thompson Utd Veterans&rsquo; new home kit for the 26-27 season.
                </p>
              </div>
            </div>
          </Reveal>
          {/* Josh Antill welcome card */}
          <Reveal delay={180}>
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
                  src="/news/Josh.jpg"
                  alt="Josh Antill, Sales Executive at CRS Insurance Brokers"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Team News</span>
                  <span>10 Aug 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  Welcome to the team, Josh
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  Josh Antill joins CRS as a Sales Executive. Welcome aboard, Josh.
                </p>
              </div>
            </div>
          </Reveal>
          {/* Apprentice milestones card */}
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
                  src="/news/apprentices.jpg"
                  alt="Ethan Tate, Libby Otway and Evie Watts, CRS apprentices with Skills Edge Training"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Team News</span>
                  <span>31 Jul 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  Milestones for our apprentices
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  Ethan, Libby and Evie are making progress with Skills Edge Training: distinctions on their assignments, and exam passes on the way to qualifying.
                </p>
              </div>
            </div>
          </Reveal>
          {/* Jake Pemberton promotion card */}
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
                  src="/news/jake-promotion.jpg"
                  alt="Jake Pemberton, Head of Technology at CRS Insurance Brokers"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Team News</span>
                  <span>20 Jul 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  Jake Pemberton promoted to Head of Technology
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  Congratulations to Jake on his promotion, now leading technology strategy at CRS.
                </p>
              </div>
            </div>
          </Reveal>
          {/* UK Broker Awards card — links to full post */}
          <Reveal>
            <a
              href="/news/uk-broker-awards-2026"
              className="group relative flex flex-col h-full bg-m-ink-2 transition-colors duration-300 hover:bg-m-ink-3"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="relative aspect-[16/9] overflow-hidden flex items-center justify-center p-5 md:p-6 bg-m-ink-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-full h-full flex items-center justify-center rounded-xl bg-white px-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/news/uk-broker-awards-finalist.png"
                    alt="UK Broker Awards 2026 Finalist"
                    className="w-full max-w-[86%] h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Awards</span>
                  <span>17 Jul 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white group-hover:text-m-bone/90 transition-colors duration-300">
                  Finalists at the UK Broker Awards 2026
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  CRS is a finalist in two categories at the UK Broker Awards 2026, for Commercial Lines Broker of the Year and Customer Service. A shortlisting that belongs to the team.
                </p>
              </div>
            </a>
          </Reveal>
          {/* Cobblers Golf Day card */}
          <Reveal>
            <div
              className="relative flex flex-col h-full bg-m-ink-2"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="relative aspect-[16/9] overflow-hidden"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Three-photo collage (mirrors the LinkedIn post): two of the
                    team large on the left, tee-off and branded fairway stacked right. */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px]">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src="/news/golf-day.jpg"
                    alt="Two of the CRS team at the Cobblers Golf Day, Northampton"
                    className="row-span-2 w-full h-full object-cover"
                    style={{ objectPosition: "center 42%" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/news/golf-day-swing.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 38%" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/news/golf-day-green.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 70%" }}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
              </div>
              <div className="p-7 md:p-8 flex flex-col gap-5 flex-1">
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Community</span>
                  <span>9 Jul 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  CRS sponsors the Cobblers Golf Day
                </h2>
                <p className="text-[13.5px] leading-[1.7] text-m-bone/55 flex-1">
                  CRS sponsored the Cobblers Golf Day, out on the course with clients, friends and familiar faces. Thanks to Northampton Town Football Club and the Northampton Town FC Community Trust for a well-run day.
                </p>
              </div>
            </div>
          </Reveal>
          {/* Eva welcome card */}
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
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Team News</span>
                  <span>6 Jul 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                  Welcome to the team, Eva
                </h2>
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
                <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                  <span className="text-m-coral/80">Charity</span>
                  <span>16 Jun 2026</span>
                </div>
                <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white group-hover:text-m-bone/90 transition-colors duration-300">
                  CRS backs Wear Purple Week.
                </h2>
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
                  <div className="font-semibold flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px] tracking-[0.01em] text-m-bone/60 tnum">
                    <span className="text-m-coral/80">{post.tag}</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="font-display text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.015em] text-white">
                    {post.headline}
                  </h2>

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
