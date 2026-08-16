import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { profile } from "../data";

/* Shared building blocks for the editorial homepage layout:
   a stacked wordmark in the corner, a big muted section title that
   drifts horizontally on scroll, and oversized statement headings
   that reveal per-line and scrub vertically as they pass. */

/* "NIK / HIL." — the small stacked mark in each band's top-left. */
export function BandMark() {
  const n = profile.firstName.toUpperCase();
  const mid = Math.ceil(n.length / 2);
  return (
    <span className="band-mark" aria-hidden="true">
      <span>{n.slice(0, mid)}</span>
      <span>{n.slice(mid)}.</span>
    </span>
  );
}

/* Big muted section title with horizontal scroll parallax. */
export function SectionTitle({ children, inRef }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: inRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [70, -70]);

  return (
    <motion.h2
      style={{ x }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="section-title"
    >
      {children}
    </motion.h2>
  );
}

/* A full-width section: corner mark, optional drifting title. */
export function Band({ id, title, children, className = "" }) {
  const ref = useRef(null);
  return (
    <section id={id} ref={ref} className={`band ${className}`}>
      <div className="relative mx-auto w-full max-w-6xl">
        <BandMark />
        {title && <SectionTitle inRef={ref}>{title}</SectionTitle>}
        {children}
      </div>
    </section>
  );
}

/* The floating portrait bubble that trails a statement line. */
export function PortraitChip() {
  return (
    <motion.span
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="portrait-chip"
      aria-hidden="true"
    >
      <img src={profile.avatar} alt="" loading="lazy" />
    </motion.span>
  );
}

/* Oversized statement heading.
   `*marked*` runs take the accent colour; a statement with no marks
   is rendered entirely in the accent colour. Each line reveals with a
   mask-wipe on scroll-in, and the whole block scrubs vertically as it
   travels through the viewport. */
export function Statement({
  text,
  accent = "green",
  portrait = false,
  portraitLine = 0,
  as = "h3",
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  const lines = String(text).split("\n");
  const hasMarks = text.includes("*");
  const color = `var(--pop-${accent})`;
  const MotionTag = motion[as] ?? motion.h3;

  return (
    <MotionTag
      ref={ref}
      style={{ y, ...(hasMarks ? null : { color }) }}
      className="statement"
    >
      {lines.map((line, li) => (
        <span key={li} className="statement-line">
          <motion.span
            className="statement-line-inner"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: li * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line.split("*").map((seg, i) =>
              i % 2 === 1 ? (
                <span key={i} style={{ color }}>
                  {seg}
                </span>
              ) : (
                <span key={i}>{seg}</span>
              )
            )}
          </motion.span>
          {portrait && li === portraitLine && <PortraitChip />}
        </span>
      ))}
    </MotionTag>
  );
}
