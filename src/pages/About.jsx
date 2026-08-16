import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { profile, skills, experience, stats } from "../data";

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-mist/50">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-veil/8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Intro */}
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            About me
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">
            Designing & building the{" "}
            <span className="text-gradient">web of tomorrow</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-mist/70">{profile.bio}</p>
            <p className="mt-5 text-lg leading-relaxed text-mist/70">
              When I'm not shipping code, you'll find me exploring design
              systems, contributing to open source, and mentoring aspiring
              developers. I believe great software lives at the intersection of
              engineering rigor and human-centered design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-mist/70">
                <Icon name="pin" size={16} className="text-brand-400" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-mist/70 transition-colors hover:text-mist"
              >
                <Icon name="mail" size={16} className="text-brand-400" />
                {profile.email}
              </a>
            </div>
          </Reveal>

          {/* Portrait + mini stats */}
          <Reveal delay={0.2}>
            <div className="relative mb-4 overflow-hidden rounded-3xl glass p-1.5">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-56 w-full rounded-[1.3rem] object-cover"
              />
              <div className="absolute inset-x-1.5 bottom-1.5 rounded-b-[1.3rem] bg-gradient-to-t from-ink/90 to-transparent p-4">
                <p className="font-display text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-mist/60">{profile.role}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl glass p-5 text-center">
                  <p className="font-display text-3xl font-bold text-gradient">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-mist/60">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-8 font-display text-3xl font-bold">Skills</h2>
            <div className="space-y-6">
              {skills.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.08} />
              ))}
            </div>
          </Reveal>

          {/* Experience timeline */}
          <Reveal delay={0.1}>
            <h2 className="mb-8 font-display text-3xl font-bold">Experience</h2>
            <div className="relative space-y-8 border-l border-veil/10 pl-8">
              {experience.map((e) => (
                <div key={e.role} className="relative">
                  <span className="absolute -left-[2.4rem] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 ring-4 ring-ink" />
                  <p className="text-sm text-brand-400">{e.period}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {e.role}{" "}
                    <span className="text-mist/50">· {e.company}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist/60">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="pt-24">
      <AboutSection />
    </div>
  );
}
