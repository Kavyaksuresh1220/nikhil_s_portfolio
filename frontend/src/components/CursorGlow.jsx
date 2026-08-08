import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A soft glow that trails the cursor. Hidden on touch / small screens.
export default function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-30 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400/70 blur-md md:block"
    />
  );
}
