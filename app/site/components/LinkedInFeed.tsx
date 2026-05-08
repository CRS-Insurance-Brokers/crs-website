import { Reveal } from "./Reveal";
import { ArrowUpRight, LinkedInIcon } from "./icons";
import { getLinkedInPosts, type LinkedInPost } from "../data/linkedin-posts";

const KIND_LABEL: Record<LinkedInPost["kind"], string> = {
  post: "Post",
  article: "Article",
  event: "Event",
  reshare: "Reshare",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
}

function PostCard({ post, idx }: { post: LinkedInPost; idx: number }) {
  // If body contains the emphasis fragment, split and italicise it
  let bodyNode: React.ReactNode = post.body;
  if (post.emphasis && post.body.includes(post.emphasis)) {
    const [before, after] = post.body.split(post.emphasis);
    bodyNode = (
      <>
        {before}
        <span className="italic text-m-coral">{post.emphasis}</span>
        {after}
      </>
    );
  }

  return (
    <Reveal delay={idx * 90} className="h-full">
      <a
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full bg-m-ink-2 hover:bg-m-ink-3 transition-colors duration-300"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <span
          aria-hidden
          className="absolute left-0 right-0 -bottom-px h-px bg-m-coral"
          style={{
            clipPath: "inset(0 100% 0 0)",
            transition: "clip-path 380ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
          data-coral-rule
        />

        {/* Top strip — date + kind */}
        <div
          className="flex items-center justify-between px-5 py-3 text-[9.5px] font-mono uppercase tracking-[0.28em] text-m-bone/50 tnum"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span className="flex items-center gap-2">
            <LinkedInIcon className="w-3 h-3 text-m-bone/55" strokeWidth={1.4} />
            <span className="text-m-bone/70">LinkedIn · {KIND_LABEL[post.kind]}</span>
          </span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 flex-1 flex flex-col gap-5">
          <p className="text-[14px] md:text-[14.5px] leading-[1.65] text-m-bone/80">
            {bodyNode}
          </p>

          {/* Engagement footer */}
          <div
            className="mt-auto pt-4 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-4 text-[10.5px] font-mono uppercase tracking-[0.22em] text-m-bone/45 tnum">
              {typeof post.reactions === "number" && (
                <span>{post.reactions} reactions</span>
              )}
              {typeof post.comments === "number" && (
                <span>{post.comments} comments</span>
              )}
            </div>
            <span
              className="flex items-center justify-center w-8 h-8 bg-white/[0.04] text-m-bone group-hover:bg-m-coral group-hover:text-m-ink transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              aria-hidden
            >
              <ArrowUpRight className="w-3 h-3" strokeWidth={1.25} />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export async function LinkedInFeed() {
  const posts = await getLinkedInPosts(3);

  return (
    <section
      className="relative py-32 md:py-40"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <Reveal>
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 mb-12 md:mb-16"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <span className="inline-flex items-center gap-2 mb-6 text-[10px] font-mono uppercase tracking-[0.32em] text-m-bone/55">
                <span className="w-1.5 h-1.5 rounded-full bg-m-coral pulse-dot" />
                Live from LinkedIn
              </span>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-white">
                What we&rsquo;re posting,<br />
                <span className="italic text-m-bone-2/85">in the field.</span>
              </h2>
            </div>
            <a
              href="https://www.linkedin.com/company/crs-insurance-brokers"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.22em] text-m-bone/65 hover:text-white transition-colors duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
            >
              Follow on LinkedIn →
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} idx={i} />
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-10 text-[10.5px] font-mono uppercase tracking-[0.28em] text-m-bone/35">
            ¹ Feed source: placeholder. Migration paths: LinkedIn Marketing API · third-party widget · CMS mirror. See{" "}
            <span className="text-m-bone/55">app/site/data/linkedin-posts.ts</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
