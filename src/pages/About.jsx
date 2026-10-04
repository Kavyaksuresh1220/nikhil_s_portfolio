import { useRef } from "react";
import Reveal from "../components/Reveal";
import { Accent, IconChip, Polaroid } from "../components/ui";
import { profile, about, disciplines, aiTools, experience, education } from "../data";

function Intro() {
  return (
    <section className="band page-top">
      <div className="shell split">
        <div className="split-main about-intro">
          <Reveal>
            <IconChip name="smile" />
            <h1 className="about-statement">
              <span className="muted">About me.</span>
              <br />
              <Accent text={about.statement} />
            </h1>
          </Reveal>
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className={i === 0 ? "dropcap" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="split-side about-side">
          <Reveal>
            <div className="side-label">
              <span className="side-rule" />
              <span>
                {profile.role}
                <br />
                {profile.location} <span aria-hidden="true">✌️</span>
              </span>
            </div>
            <dl className="facts">
              <div>
                <dt>Based in</dt>
                <dd>Kerala, India</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>UI/UX · Graphic design</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Figma · Affinity</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd className="green">Open to work</dd>
              </div>
            </dl>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

function Highlights() {
  const area = useRef(null);
  return (
    <section className="band highlights">
      <div className="shell">
        <Reveal>
          <p className="highlights-label">{about.highlightsLabel}</p>
          <p className="psst">
            Psst… you can drag the photographs
            <svg width="34" height="30" viewBox="0 0 34 30" fill="none" aria-hidden="true">
              <path d="M3 4c9 1 18 6 22 18m0 0-6-4m6 4 3-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </p>
        </Reveal>
        <div className="highlights-row" ref={area}>
          {about.highlights.map((h, i) => (
            <Polaroid key={h.src} src={h.src} alt={h.alt} rotate={h.rotate} constraints={area} delay={i * 0.08} className="highlight-photo" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Disciplines() {
  return (
    <section className="band">
      <div className="shell split">
        <div className="split-side">
          <Reveal>
            <h2 className="side-heading">
              I work across <span className="green">two disciplines</span>
            </h2>
          </Reveal>
        </div>
        <div className="split-main cards">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <article className="card">
                <div className="card-head">
                  <h3>{d.title}</h3>
                  <span className="card-badge">{d.badge}</span>
                </div>
                <p className="card-desc">{d.desc}</p>
                <ul className="plus-list">
                  {d.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.12}>
            <article className="card">
              <div className="card-head">
                <h3>AI-assisted design</h3>
                <span className="card-badge">Toolkit</span>
              </div>
              <p className="card-desc">
                Using AI tools to explore ideas, generate concepts and move faster — while keeping the craft human.
              </p>
              <div className="chips">
                {aiTools.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Logo({ logo, initials, name }) {
  return (
    <span className="logo-tile">
      {logo ? <img src={logo} alt={`${name} logo`} /> : <span>{initials}</span>}
    </span>
  );
}

function Timeline({ title, accent, items }) {
  return (
    <section className="band">
      <div className="shell split">
        <div className="split-side">
          <Reveal>
            <h2 className="side-heading">
              {title} <span className="green">{accent}</span>
            </h2>
          </Reveal>
        </div>
        <div className="split-main timeline">
          {items.map((it, i) => (
            <Reveal key={`${it.role || it.title}-${i}`} delay={i * 0.05}>
              <div className="tl-row">
                <div className="tl-when">
                  <span>{it.period}</span>
                  {it.type && <span className="tl-type">{it.type}</span>}
                </div>
                <div className="tl-what">
                  <Logo logo={it.logo} initials={it.initials} name={it.company || it.school} />
                  <div>
                    <p className="tl-title">{it.role || it.title}</p>
                    <p className="tl-org">{it.company || it.school}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Intro />
      <Highlights />
      <Disciplines />
      <Timeline title="Work" accent="Experience" items={experience} />
      <Timeline title="" accent="Education" items={education} />
    </>
  );
}
