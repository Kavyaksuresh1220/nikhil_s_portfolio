import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Reveal from "../components/Reveal";
import LiveClock from "../components/LiveClock";
import { scrollTo } from "../components/SmoothScroll";
import { Accent, Arrow, CircleArrow, IconChip, Polaroid, ease } from "../components/ui";
import { profile, photos, aboutTeaser, projects, journal } from "../data";

const RULER = [50, 100, 150, 200, 300, 400, 500, 600, 650, 700, 750, 800, 850, 900];
const TAG_COLORS = ["tag-purple", "tag-pink", "tag-orange"];

// ── Hero ──────────────────────────────────────────────────────
function Hero() {
  const first = profile.firstName;
  return (
    <header id="top" className="band hero">
      <div className="shell hero-shell">
        <div className="ruler" aria-hidden="true">
          {RULER.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
        >
          <img src={photos.portrait} alt={profile.name} />
        </motion.div>

        <h1 className="hero-title">
          {`Hi, I'm ${first}`.split("").map((c, i) => (
            <motion.span
              key={i}
              style={{ display: "inline-block", whiteSpace: "pre" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.03 }}
            >
              {c}
            </motion.span>
          ))}
          <span className="green">.</span>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.75 }}
        >
          {profile.tagline}
        </motion.p>
      </div>

      <div className="band-line">
        <div className="shell hero-foot">
          <span>{profile.location}</span>
          <LiveClock />
        </div>
      </div>
    </header>
  );
}

// ── About teaser ──────────────────────────────────────────────
function AboutTeaser() {
  const area = useRef(null);
  return (
    <section className="band">
      <div className="shell">
        <div className="sheet-grey teaser" ref={area}>
          <Polaroid src={photos.hills} alt="Nikhil in the misty hills" rotate={-7} className="teaser-photo teaser-photo-left" constraints={area} />
          <Polaroid src={photos.desk} alt="Nikhil at his desk in the studio" rotate={4} className="teaser-photo teaser-photo-right" constraints={area} delay={0.1} />

          <Reveal className="teaser-body">
            <h2 className="teaser-heading">
              <Accent text={aboutTeaser.heading} />
            </h2>
            <p className="teaser-lead dropcap">{aboutTeaser.lead}</p>
            <p className="teaser-fade">{aboutTeaser.fade}</p>
            <Link to="/about" className="pill-btn pill-dark">
              Read more about me <CircleArrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Work ──────────────────────────────────────────────────────
const WORK_INITIAL = 4;

function Cover({ p }) {
  return (
    <div className="cover" style={{ "--glow": p.glow }}>
      <div className="cover-inner">
        <div className="cover-text">
          <span className="cover-logo">{p.title[0]}</span>
          <p className="cover-title">{p.title}</p>
          <p className="cover-tagline">{p.tagline}</p>
        </div>
        <div className="cover-phones" aria-hidden="true">
          <span className="phone phone-back" />
          <span className="phone phone-front">
            <i /><i /><i /><i />
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ p }) {
  return (
    <a className="work-row" href={profile.socials.find((s) => s.label === "Behance").url} target="_blank" rel="noreferrer">
      <div className="work-info">
        <h3 className="work-name">
          <span className="work-logo" style={{ background: p.glow }}>{p.title[0]}</span>
          {p.title}
        </h3>
        <p className="work-desc">{p.desc}</p>
        <div className="tags">
          {p.tags.map((t, i) => (
            <span className={`tag ${TAG_COLORS[i % 3]}`} key={t}>{t}</span>
          ))}
        </div>
      </div>
      <Cover p={p} />
    </a>
  );
}

function Work() {
  const [expanded, setExpanded] = useState(false);
  const first = projects.slice(0, WORK_INITIAL);
  const rest = projects.slice(WORK_INITIAL);

  const toggle = () => {
    if (expanded) scrollTo("#work", -110);
    setExpanded((v) => !v);
  };

  return (
    <section id="work" className="band">
      <div className="shell">
        <div className="section-intro">
          <Reveal>
            <IconChip name="code" />
            <h2 className="section-title">
              <span className="green">Work.</span>
              <br />
              <span className="muted">A selection of recent projects.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="band-line">
        <div className="shell">
          {first.map((p) => (
            <Reveal key={p.title}>
              <ProjectRow p={p} />
            </Reveal>
          ))}
          <AnimatePresence initial={false}>
            {expanded &&
              rest.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                >
                  <ProjectRow p={p} />
                </motion.div>
              ))}
          </AnimatePresence>

          {rest.length > 0 && (
            <div className="work-more">
              <button type="button" className="pill-btn pill-green" onClick={toggle} aria-expanded={expanded}>
                {expanded ? "Show less" : "Read more"} <CircleArrow />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Writing ───────────────────────────────────────────────────
function Journal() {
  return (
    <section id="journal" className="band">
      <div className="shell split">
        <div className="split-side">
          <Reveal>
            <IconChip name="pen" />
            <h2 className="section-title">
              <span className="green">Writing.</span>
              <br />
              <span className="muted">Ideas and thoughts.</span>
            </h2>
            <p className="updated">Last updated {journal.updated}</p>
          </Reveal>
        </div>

        <div className="split-main posts">
          {journal.posts.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.06}>
              <a className="post" href={j.url} target="_blank" rel="noreferrer">
                <span className="post-thumb" aria-hidden="true">
                  {j.glyph}
                  {j.isNew && <span className="post-new">New</span>}
                </span>
                <div className="post-body">
                  <h3 className="post-title">{j.title}</h3>
                  <p className="post-excerpt">{j.excerpt}</p>
                  <div className="post-foot">
                    <div className="chips">
                      <span className="chip">{j.date}</span>
                      {j.tags.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                    <span className="post-more">
                      Read more <Arrow size={13} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { state } = useLocation();

  // Arriving from another page via a nav link like "Work" → scroll there.
  useEffect(() => {
    if (!state?.scrollTo) return;
    const id = setTimeout(() => scrollTo(state.scrollTo, -110), 80);
    return () => clearTimeout(id);
  }, [state]);

  return (
    <>
      <Hero />
      <AboutTeaser />
      <Work />
      <Journal />
    </>
  );
}
