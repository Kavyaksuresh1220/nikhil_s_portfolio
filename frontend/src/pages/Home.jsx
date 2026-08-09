import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Magnetic from "../components/Magnetic";
import TextReveal from "../components/TextReveal";
import PaperEdge from "../components/PaperEdge";
import { scrollTo } from "../components/SmoothScroll";
import { AboutSection } from "./About";
import { WorkSection } from "./Works";
import { ContactSection } from "./Contact";
import { profile, stats, marqueeTech, services, testimonials } from "../data";

/* A layered "paper" sheet with a torn top edge. */
function Sheet({ children, tone = "soft", className = "" }) {
  return (
    <section className={`sheet ${tone === "base" ? "sheet-base" : ""} ${className}`}>
      <PaperEdge />
      {children}
    </section>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 12 });
  const sry = useSpring(ry, { stiffness: 120, damping: 12 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 18);
    rx.set(-py * 18);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section ref={ref} className="relative flex min-h-screen items-center px-6 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div style={{ y: titleY, opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-mist/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            {profile.available ? "Available for new projects" : "Currently booked"}
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="block"
            >
              {profile.tagline.split(" ").slice(0, 2).join(" ")}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="block text-gradient"
            >
              {profile.tagline.split(" ").slice(2).join(" ")}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-mist/60"
          >
            Hi, I'm {profile.name} — a {profile.role.toLowerCase()} based in{" "}
            {profile.location}. {profile.bio.split(".")[0]}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.5}>
              <button
                onClick={() => scrollTo("#work")}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-xl hover:shadow-brand-500/40"
              >
                View my work
                <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Magnetic>
            <Magnetic strength={0.4}>
              <button
                onClick={() => scrollTo("#contact")}
                className="rounded-xl glass px-6 py-3.5 font-semibold text-mist transition-colors hover:bg-veil/10"
              >
                Get in touch
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right: floating visual card with tilt + parallax layers */}
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ opacity: fade }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block"
        >
          <motion.div
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
            className="relative h-full w-full rounded-[2rem] glass p-2 shadow-2xl shadow-black/40"
          >
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-ink-soft to-ink p-7">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-500/25 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <span className="font-display text-sm text-mist/50">{profile.location}</span>
                <span className="rounded-full bg-veil/10 px-3 py-1 text-xs font-medium">
                  {new Date().getFullYear()}
                </span>
              </div>

              <div className="relative">
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg ring-1 ring-veil/20">
                  <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
                </div>
                <p className="font-display text-2xl font-semibold leading-snug">{profile.name}</p>
                <p className="mt-1 text-sm text-mist/60">{profile.role}</p>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {["Figma", "UI", "UX", "Motion"].map((t) => (
                  <span key={t} className="rounded-lg bg-veil/5 px-3 py-1.5 text-xs text-mist/70 ring-1 ring-veil/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-16 rounded-2xl glass px-4 py-3 shadow-xl"
          >
            <p className="text-2xl font-bold text-gradient">4+</p>
            <p className="text-xs text-mist/60">years</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 bottom-24 rounded-2xl glass px-4 py-3 shadow-xl"
          >
            <p className="text-2xl font-bold text-gradient">30+</p>
            <p className="text-xs text-mist/60">projects</p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div style={{ opacity: fade }} className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-veil/25 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-mist/70"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────── Tech marquee ─────────────────────── */
function MarqueeRow({ reverse = false }) {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div
      className={`marquee-track flex w-max gap-10 pr-10 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {row.map((t, i) => (
        <span
          key={i}
          className="flex items-center gap-10 font-display text-2xl font-medium text-mist/25 transition-colors hover:text-mist/70"
        >
          {t}
          <span className="text-brand-400/40">✦</span>
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  return (
    <div className="relative flex flex-col gap-3 overflow-hidden border-y border-veil/10 py-6">
      <MarqueeRow />
      <MarqueeRow reverse />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
    </div>
  );
}

/* ─────────────────────── Stats band ─────────────────────── */
function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="rounded-2xl glass p-6 text-center">
              <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-mist/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────── Services ─────────────────────── */
const iconFor = { code: "code", sparkle: "sparkle", layout: "layout", bolt: "bolt" };
function Services() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            What I do
          </p>
          <TextReveal
            as="h2"
            text="Services built for impact"
            className="font-display text-4xl font-bold sm:text-5xl"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-veil/[0.07]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-veil/10 transition-colors group-hover:text-accent-400">
                  <Icon name={iconFor[s.icon]} size={22} />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-mist/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Testimonials ─────────────────────── */
function Testimonials() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.1}>
            <figure className="h-full rounded-3xl glass p-8">
              <Icon name="quote" size={32} className="text-brand-400/60" />
              <blockquote className="mt-5 text-lg leading-relaxed text-mist/85">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-semibold text-white">
                  {t.author[0]}
                </span>
                <span>
                  <span className="block font-semibold">{t.author}</span>
                  <span className="block text-sm text-mist/50">{t.title}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */
function CTA() {
  return (
    <section className="px-6 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-veil/10 bg-gradient-to-br from-brand-600/30 via-ink-soft to-accent-600/20 px-8 py-16 text-center sm:px-16">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-accent-500/40 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Let's build something <span className="text-gradient">unforgettable</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-mist/70">
              Have a project in mind? I'm always excited to collaborate with ambitious teams and founders.
            </p>
            <Magnetic strength={0.5} className="mt-9">
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 rounded-xl bg-mist px-7 py-4 font-semibold text-ink transition-transform hover:scale-105"
              >
                Start a conversation
                <Icon name="arrowUpRight" size={18} />
              </button>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <Sheet tone="soft">
        <Marquee />
        <Stats />
        <Services />
      </Sheet>

      <Sheet tone="base">
        <AboutSection />
      </Sheet>

      <Sheet tone="soft">
        <WorkSection />
      </Sheet>

      <Sheet tone="base">
        <Testimonials />
        <CTA />
      </Sheet>

      <Sheet tone="soft">
        <ContactSection />
      </Sheet>
    </>
  );
}
