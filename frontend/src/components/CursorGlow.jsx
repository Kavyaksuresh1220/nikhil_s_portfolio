import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Interactive custom cursor:
//  • a precise dot that tracks the pointer
//  • a soft trailing ring that lags behind
//  • grows + shows a label when hovering [data-cursor] targets or links/buttons
// Hidden on touch / small screens (md:block).
export default function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring lags with a springy trail; dot is snappier.
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 });

  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [down, setDown] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e) => {
      const t = e.target.closest?.("[data-cursor], a, button");
      if (t) {
        setHovering(true);
        setLabel(t.getAttribute?.("data-cursor") || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    const downFn = () => setDown(true);
    const upFn = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", downFn);
    window.addEventListener("mouseup", upFn);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", downFn);
      window.removeEventListener("mouseup", upFn);
    };
  }, [x, y]);

  const hasLabel = hovering && label;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        style={{ left: ringX, top: ringY }}
        animate={{
          width: hasLabel ? 84 : hovering ? 52 : 34,
          height: hasLabel ? 84 : hovering ? 52 : 34,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="pointer-events-none fixed z-[60] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-veil/40 bg-veil/5 backdrop-blur-[1px] md:flex"
      >
        {hasLabel && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-mist">
            {label}
          </span>
        )}
      </motion.div>

      {/* Precise dot (hidden while a label shows, to keep it clean) */}
      <motion.div
        aria-hidden="true"
        style={{ left: dotX, top: dotY }}
        animate={{ scale: down ? 0.6 : hasLabel ? 0 : 1 }}
        className="pointer-events-none fixed z-[61] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 md:block"
      />
    </>
  );
}
