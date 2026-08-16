import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import { Band, BandMark, SectionTitle, Statement } from "../components/Editorial";
import { scrollTo } from "../components/SmoothScroll";
import {
  profile,
  statements,
  keySkills,
  armoury,
  deepDive,
  sectionCopy,
} from "../data";

/* ───────────────────────── Hero ─────────────────────────
   Editorial layout: cream sheet, black vertical rails running
   down both edges, a serif-italic "ui/ux" line over an oversized
   wordmark, then the intro copy and two pill CTAs.            */

/* Word repeated down the black side rails. Swap this one line to
   change it (e.g. profile.name, or a literal like "STUDIO"). */
const RAIL_TEXT = profile.role; // "UI/UX Designer"
const RAIL_REPEAT = 10; // rendered twice for a seamless loop

function Rail({ side }) {
  const words = Array.from({ length: RAIL_REPEAT * 2 });
  return (
    <div className={`hero-rail hero-rail-${side}`} aria-hidden="true">
      <div className="hero-rail-track">
        {words.map((_, i) => (
          <span key={i} className="hero-rail-word">
            {RAIL_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="hero-editorial flex min-h-screen items-center justify-center px-6 pt-24 pb-16"
    >
      <Rail side="left" />
      <Rail side="right" />

      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-[2] mx-auto w-full max-w-6xl px-2 text-center sm:px-8"
      >
        <motion.p {...rise(0.15)} className="hero-serif">
          ui<span className="font-normal">/</span>ux
        </motion.p>

        <motion.h1 {...rise(0.25)} className="hero-wordmark mt-1">
          Portfoli&ouml;
        </motion.h1>

        <motion.p
          {...rise(0.4)}
          className="mx-auto mt-9 max-w-[38rem] text-[0.8125rem] leading-relaxed"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          {...rise(0.5)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.4}>
            <button
              onClick={() => scrollTo("#contact")}
              className="pill-green px-7 py-3 text-[0.875rem] font-medium"
            >
              Get in Touch
            </button>
          </Magnetic>
          <Magnetic strength={0.35}>
            <button
              onClick={() => scrollTo("#work")}
              className="pill-outline px-7 py-3 text-[0.75rem] font-medium uppercase tracking-[0.08em]"
            >
              View my work
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────── Statement bands ──────────────────── */
function StatementBand({ s }) {
  return (
    <Band id={s.id} title={s.label}>
      <div className="mt-8 md:mt-14">
        <Statement
          text={s.text}
          accent={s.accent}
          portrait={s.portrait}
          portraitLine={s.portraitLine}
          as="h2"
        />
      </div>

      {s.pill && (
        <Reveal delay={0.1} className="mt-12 flex justify-end">
          <span className="pill-green px-5 py-2 text-[0.8rem] font-medium">
            {s.pill}
          </span>
        </Reveal>
      )}
    </Band>
  );
}

/* ─────────────────────── Key skills ─────────────────────── */

/* Pixel-art T-rex (Chrome-dino style) that sits on the purple card. */
const DINO = [
  "0000000000111100",
  "0000000001111100",
  "0000000001101100",
  "0000000001111100",
  "0000000001111100",
  "0000000001111000",
  "1000000001111000",
  "1100000001111000",
  "1110000011111000",
  "1111011111111000",
  "1111111111111000",
  "0111111111111000",
  "0011111111110000",
  "0001111111100000",
  "0000111111000000",
  "0000110011000000",
  "0000110011000000",
];
function DinoIcon() {
  const u = 4;
  const rects = [];
  DINO.forEach((row, y) =>
    row.split("").forEach((c, x) => {
      if (c === "1") rects.push(<rect key={`${x}-${y}`} x={x * u} y={y * u} width={u} height={u} />);
    })
  );
  return (
    <svg
      className="dino-icon"
      width={DINO[0].length * u}
      height={DINO.length * u}
      viewBox={`0 0 ${DINO[0].length * u} ${DINO.length * u}`}
      fill="currentColor"
      aria-hidden="true"
    >
      {rects}
    </svg>
  );
}

const stackLayers = [
  { color: "var(--pop-red)", rotate: -12 },
  { color: "var(--pop-yellow)", rotate: -5 },
  { color: "var(--pop-green)", rotate: 5 },
  { color: "var(--pop-blue)", rotate: 12 },
];

function SkillStack() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Whole stack drifts + the front card gently straightens as it passes.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [34, -34]);
  const frontRot = useTransform(scrollYProgress, [0, 1], reduce ? [4, 4] : [7, 1]);

  return (
    <motion.div ref={ref} style={{ y }} className="skill-stack">
      {stackLayers.map((l, i) => (
        <motion.span
          key={i}
          className="stack-card"
          style={{ background: l.color }}
          initial={{ rotate: 0, opacity: 0, scale: 0.94 }}
          whileInView={{ rotate: reduce ? 0 : l.rotate, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.85, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
      ))}
      <motion.div
        className="stack-card stack-front"
        style={{ rotate: frontRot }}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <DinoIcon />
        <h3>{keySkills.card.title}</h3>
        <p>{keySkills.card.body}</p>
      </motion.div>
    </motion.div>
  );
}

function ArmouryBar() {
  return (
    <div className="armoury-bar">
      <span className="armoury-label">Armoury</span>
      <div className="armoury-tools">
        {armoury.map((t) => (
          <span
            key={t.name}
            className="tool-chip"
            style={{ background: t.bg, color: t.fg }}
            title={t.name}
          >
            {t.code}
          </span>
        ))}
        <span className="armoury-next" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function SkillsBand() {
  return (
    <Band id="skills" title={keySkills.label}>
      <div className="mt-8 grid items-center gap-14 md:mt-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <Statement
            text={keySkills.statement}
            accent={keySkills.accent}
            as="h3"
          />
        </div>
        <SkillStack />
      </div>

      <Reveal delay={0.15} className="mt-16">
        <ArmouryBar />
      </Reveal>
    </Band>
  );
}

/* ─────────────────────────── Works ───────────────────────────
   Statement-only, matching the reference — the actual showcase is
   the design deep dive that follows. */
function WorksBand() {
  const copy = sectionCopy.works;
  return (
    <Band id="work" title={copy.label}>
      <div className="mt-8 md:mt-14">
        <Statement text={copy.statement} accent={copy.accent} as="h2" />
      </div>
    </Band>
  );
}

/* ────────────────────── Design deep dive ──────────────────────
   The showpiece: the section pins for an extra viewport of scroll
   while the SPACEUP wordmark scrubs across and the shot drifts. */
function DeepDiveBand() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const wordX = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [140, -140]
  );
  const shotY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [50, -50]
  );

  return (
    <section ref={ref} className="deepdive-wrap">
      <div className="deepdive-pin">
        <div className="relative mx-auto w-full max-w-6xl">
          <BandMark />
          <SectionTitle inRef={ref}>{deepDive.label}</SectionTitle>

          <div className="mt-8 grid items-end gap-10 md:mt-12 lg:grid-cols-[0.72fr_1.28fr]">
            <motion.div style={{ y: shotY }} className="deepdive-shot">
              <img src={deepDive.image} alt={deepDive.name} loading="lazy" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h3 style={{ x: wordX }} className="deepdive-title">
                {deepDive.name}
              </motion.h3>
              <p className="deepdive-sub">{deepDive.subtitle}</p>
              <div className="mt-8">
                <Magnetic strength={0.35}>
                  <a
                    href={deepDive.url}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-green inline-block px-6 py-2.5 text-[0.8rem] font-medium"
                  >
                    {deepDive.cta}
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page-editorial">
      <Hero />

      {statements.map((s, i) => (
        <StatementBand key={s.id ?? i} s={s} />
      ))}

      <SkillsBand />
      <WorksBand />
      <DeepDiveBand />
    </div>
  );
}
