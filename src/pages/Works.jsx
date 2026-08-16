import { motion } from "framer-motion";
import Icon from "../components/Icon";
import { Band, Statement } from "../components/Editorial";
import { projects, sectionCopy } from "../data";

function ProjectCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotateX: 9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1000 }}
    >
      <article className="work-card group" data-cursor="View">
        <figure>
          <img src={p.image} alt={p.title} loading="lazy" />
        </figure>

        <div className="px-4 pb-3 pt-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] opacity-55">
              {p.category}
            </p>
            <p className="text-[0.7rem] font-medium opacity-45">{p.year}</p>
          </div>

          <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-none tracking-tight">
            {p.title}
          </h3>

          <p className="mt-3 max-w-md text-[0.8125rem] leading-relaxed opacity-65">
            {p.desc}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-veil/15 px-3 py-1 text-[0.7rem] opacity-70"
              >
                {t}
              </span>
            ))}
            <span className="ml-auto inline-flex items-center gap-1 text-[0.75rem] font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Case study
              <Icon name="arrowUpRight" size={14} />
            </span>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export function WorkSection() {
  const copy = sectionCopy.works;
  return (
    <Band id="work" title={copy.label}>
      <div className="mt-8 md:mt-14">
        <Statement text={copy.statement} accent={copy.accent} as="h2" />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </Band>
  );
}

export default function Works() {
  return (
    <div className="page-editorial pt-16">
      <WorkSection />
    </div>
  );
}
