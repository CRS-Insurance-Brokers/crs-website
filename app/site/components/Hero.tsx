"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { HoldToCall } from "./HoldToCall";
import { ArrowUpRight } from "./icons";
import { heroFootnote, heroPlate, brand } from "../data/content";

/**
 * Editorial broadsheet hero.
 *  - No glass cards. No glow halos.
 *  - Hard typographic grid with marginalia, plate numbers, and footnoted asides.
 *  - Spring-driven mouse parallax on the photograph (Emil's decorative example).
 *  - Drop cap on the lede paragraph.
 *  - Hold-to-call CTA replacing the standard tel: link.
 */
export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || reduceMotion) return;

    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      // normalised offset, capped at ±1
      target.x = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width * 0.6)));
      target.y = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height * 0.6)));
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    // Spring lerp — stiffness 0.06, damping via velocity decay
    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      setParallax({ x: current.x, y: current.y });
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative pt-[160px] md:pt-[180px] pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 lg:pr-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14 lg:gap-y-0 items-end">
          {/* Headline column */}
          <div className="lg:col-span-7 min-w-0">
            <Reveal delay={120}>
              <h1 className="font-display font-bold leading-[1.15] tracking-[-0.015em] text-white"
                style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
              >
                Specialist cover<sup className="font-mono text-[0.18em] tracking-[0.18em] text-m-coral align-super ml-1.5 tnum">¹</sup>{" "}
                for <span className="italic">high-risk</span> trades.
                <br />
                Named specialists. Direct lines.
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-10 md:mt-12 max-w-[42ch] text-[15.5px] leading-[1.65] text-m-bone/70">
                Demolition, construction, contractors and manufacturing.
                We place cover others can&rsquo;t,{" "}
                <span className="text-white">and answer the phone when it matters.</span>
              </p>
            </Reveal>

            <Reveal delay={460}>
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-stretch gap-4">
                {/* Primary — Talk to us, hard rectangle, no rounded pill */}
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-between gap-4 px-5 py-4 bg-white text-m-ink overflow-hidden"
                  style={{
                    transition: "transform 160ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  onPointerDown={(e) => {
                    e.currentTarget.style.transform = "scale(0.985)";
                  }}
                  onPointerUp={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  onPointerLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <span className="text-[13px] font-semibold tracking-[0.08em]">
                    Talk to us →
                  </span>
                </a>

                {/* Hold-to-call — Emil's hold-to-delete pattern */}
                <HoldToCall display={brand.data.phone} number={brand.data.phoneTel} />
              </div>
            </Reveal>

            <Reveal delay={600}>
              <p className="mt-6 max-w-[44ch] text-[11px] font-mono uppercase tracking-[0.22em] text-m-bone/35 tnum leading-relaxed">
                {heroFootnote.data}
              </p>
            </Reveal>
          </div>

          {/* Photograph column — spring parallax, hard rectangle, no double-bezel */}
          <Reveal delay={520} className="lg:col-span-5">
            <figure className="relative">
              <div
                ref={photoRef}
                className="relative overflow-hidden bg-m-ink-3"
                style={{
                  aspectRatio: "4 / 5",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div
                  className="absolute inset-0 will-change-transform"
                  style={{
                    transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -14}px, 0) scale(1.06)`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroPlate.data.photoSrc}
                    alt={heroPlate.data.photoAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Crosshair overlay — print-survey aesthetic */}
                <div className="absolute inset-0 pointer-events-none mix-blend-difference">
                  <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-white/60" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-white/60" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-white/60" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-white/60" />
                </div>

                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, rgba(20,16,46,0.85) 100%)",
                  }}
                />

              </div>

            </figure>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
