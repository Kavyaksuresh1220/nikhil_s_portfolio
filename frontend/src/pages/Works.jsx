import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { projects } from "../data";

function ProjectCard({ p, index }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 15 });
  const sry = useSpring(ry, { stiffness: 150, damping: 15 });
  const ref = useRef(null);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        ref={ref}
        data-cursor="View"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
        className="group relative h-full overflow-hidden rounded-3xl glass p-1"
      >
        {/* Project cover image */}
        <div className="relative m-1 overflow-hidden rounded-[1.3rem]">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {p.year}
          </span>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-[1.4rem] p-7">
          <div
            className={`absolute -right-16 -top-8 h-52 w-52 rounded-full bg-gradient-to-br ${p.accent} opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-60`}
          />
          <div className="relative text-sm text-brand-400">{p.category}</div>

          <div className="relative mt-3">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              {p.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-mist/60">
              {p.desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-veil/5 px-3 py-1 text-xs text-mist/70 ring-1 ring-veil/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View case study
            <Icon name="arrowUpRight" size={16} />
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Portfolio
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">
            Things I've <span className="text-gradient">designed & shipped</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-mist/60">
            A selection of products, tools and experiments. Each one taught me
            something new about craft and collaboration.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Works() {
  return (
    <div className="pt-24">
      <WorkSection />
    </div>
  );
}
