import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import LiveClock from "../components/LiveClock";
import { scrollTo } from "../components/SmoothScroll";
import {
  profile,
  projects,
  journal,
} from "../data";

const ease = [0.22, 1, 0.36, 1];

function Arrow() {
  return (
    <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  const first = profile.firstName || profile.name.split(" ")[0];
  return (
    <header id="top" className="hero wrap">
      <motion.div
        className="hero-orb"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.1 }}
      />

      <h1 className="hero-title">
        {"Hi, I'm ".split("").map((c, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 + i * 0.03 }}
          >
            {c}
          </motion.span>
        ))}
        <motion.span
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
        >
          {first}
          <span className="dot-green">.</span>
        </motion.span>
      </h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.7 }}
      >
        A UI/UX designer turning complex ideas into simple, intuitive
        experiences people love to use.
      </motion.p>

      <div className="hero-foot">
        <span>{profile.location}</span>
        <LiveClock />
      </div>
    </header>
  );
}

// ── About ─────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="wrap section">
      <hr className="hair" />
      <div
        style={{ marginTop: "3rem" }}
        className="about-grid"
      >
        <Reveal>
          <p className="eyebrow">About me</p>
          <h2 className="about-statement" style={{ marginTop: "1rem" }}>
            I design seamless experiences that feel <span className="accent">alive</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="about-body dropcap">
            Okay, so design wasn't exactly "the plan." I started out chasing
            engineering — the sensible, expected route — and honestly, I'm glad
            I did. It gave me a foundation, and then it quietly led me here.
          </p>
          <p className="about-body" style={{ marginTop: "1.25rem" }}>
            {profile.bio}
          </p>
          <div style={{ marginTop: "1.75rem" }}>
            <Magnetic>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact", -100); }} className="link-btn" data-cursor="Read">
                Read more about me <Arrow />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Work ──────────────────────────────────────────────────────
const WORK_INITIAL = 4;

function ProjectCard({ p }) {
  return (
    <a className="proj" href={profile.socials?.[0]?.url || "#"} target="_blank" rel="noreferrer" data-cursor="View" style={{ height: "100%" }}>
      <div className="proj-shot">
        <img src={p.image} alt={p.title} loading="lazy" />
      </div>
      <div className="proj-body">
        <p className="proj-cat">{p.category}</p>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-desc">{p.desc}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Work() {
  const [expanded, setExpanded] = useState(false);
  const first = projects.slice(0, WORK_INITIAL);
  const rest = projects.slice(WORK_INITIAL);

  const toggle = () => {
    if (expanded) scrollTo("#work", -100);
    setExpanded((v) => !v);
  };

  return (
    <section id="work" className="wrap section">
      <Reveal>
        <p className="eyebrow">Selected work</p>
        <h2 className="section-head">
          Work<span className="accent">.</span>
        </h2>
        <p className="section-lead">A selection of recent projects.</p>
      </Reveal>

      <div className="works-grid" style={{ marginTop: "3rem" }}>
        {first.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} as="article">
            <ProjectCard p={p} />
          </Reveal>
        ))}
        <AnimatePresence initial={false}>
          {expanded &&
            rest.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                <ProjectCard p={p} />
              </motion.article>
            ))}
        </AnimatePresence>
      </div>

      {rest.length > 0 && (
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Magnetic>
            <button type="button" className="link-btn" onClick={toggle} aria-expanded={expanded} data-cursor={expanded ? "Less" : "More"}>
              {expanded ? "Show less" : "Read more"} <Arrow />
            </button>
          </Magnetic>
        </div>
      )}
    </section>
  );
}

// ── Journal ───────────────────────────────────────────────────
function Journal() {
  return (
    <section id="journal" className="wrap section">
      <Reveal>
        <p className="eyebrow">From the journal</p>
        <h2 className="section-head">
          Writing<span className="accent">.</span>
        </h2>
        <p className="section-lead">Ideas, notes and thoughts on craft.</p>
      </Reveal>

      <div style={{ marginTop: "2.5rem" }}>
        {journal.map((j, i) => (
          <Reveal key={j.title} delay={i * 0.05}>
            <a className="journal-item" href="#journal" data-cursor="Read">
              <div>
                {j.isNew && <span className="pill-new">New</span>}
                <h3 className="journal-title">{j.title}</h3>
                <p className="journal-excerpt">{j.excerpt}</p>
              </div>
              <div className="journal-meta">
                {j.date}
                <br />
                {j.tags.join(" · ")}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Contact + footer ──────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="wrap section">
      <hr className="hair" />
      <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact-big" style={{ marginTop: "1rem" }}>
            Let's make<br />something <span className="dot-green">together.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ marginTop: "1.5rem", opacity: 0.65, fontSize: "1.05rem" }}>
            Have a project in mind, or just want to say hi? Drop me a line at{" "}
            <a href={`mailto:${profile.email}`} className="contact-mail" data-cursor="Mail">
              {profile.email}
            </a>
          </p>
          <div style={{ marginTop: "2rem", display: "inline-flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Magnetic>
              <a href={`mailto:${profile.email}`} className="link-btn link-solid" data-cursor="Say hi">
                Say hello <Arrow />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resumeUrl || "#"} className="link-btn" data-cursor="Resume">
                Resume
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>

      <footer className="footer" style={{ marginTop: "5rem" }}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Journal />
      <Contact />
    </>
  );
}
