import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

// Renders copy where *asterisks* wrap the words that take the green accent.
export function Accent({ text }) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <span key={i} className="green">{part.slice(1, -1)}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function Arrow({ size = 15 }) {
  return (
    <svg className="arr" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Filled circle-arrow used on the big pill buttons.
export function CircleArrow() {
  return (
    <svg className="arr" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M7.5 12h8M12.5 8.5 16 12l-3.5 3.5" fill="none" stroke="var(--pill-bg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Small round icon badge that opens each section.
const ICONS = {
  code: <path d="M9 8 5 12l4 4M15 8l4 4-4 4" />,
  pen: <path d="M12 3 4 15l8 6 8-6-8-12Zm0 0v10m-2 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />,
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
};

export function IconChip({ name }) {
  return (
    <span className="icon-chip" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[name]}
      </svg>
    </span>
  );
}

// Only let photos be dragged with a mouse — on touch screens dragging a
// photo would hijack page scrolling.
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}

// Tilted photo print with a grey sheet peeking out behind it.
// Draggable with a mouse; springs back toward its spot when released.
export function Polaroid({ src, alt, rotate = 0, className = "", constraints, delay = 0 }) {
  const fine = useFinePointer();
  return (
    <motion.figure
      className={`polaroid ${className}`}
      style={{ "--rb": `${rotate >= 0 ? -5 : 5}deg` }}
      initial={{ opacity: 0, y: 40, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay }}
      drag={fine}
      dragConstraints={constraints}
      dragElastic={0.25}
      dragTransition={{ bounceStiffness: 260, bounceDamping: 18 }}
      whileHover={fine ? { scale: 1.03, zIndex: 5 } : undefined}
      whileDrag={{ scale: 1.06, zIndex: 10, cursor: "grabbing" }}
    >
      <img src={src} alt={alt} draggable="false" loading="lazy" />
    </motion.figure>
  );
}
