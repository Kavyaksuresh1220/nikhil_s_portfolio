import { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

// Fixed, full-viewport backdrop:
//  • aurora blobs drift with scroll (vertical parallax)
//  • blobs also lean toward the cursor (mouse parallax)
//  • a subtle grid overlay adds depth
export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Scroll parallax — different layers move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -140]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handle = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mx.set(nx * 60);
      my.set(ny * 60);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* base radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,var(--c-aurora-top)_0%,var(--c-aurora-bottom)_55%)]" />

      {/* aurora blob 1 */}
      <motion.div
        style={{ y: y1, x: sx }}
        className="absolute -top-40 -left-24 h-[42rem] w-[42rem] rounded-full bg-brand-500/30 blur-[130px] animate-float-slow"
      />
      {/* aurora blob 2 */}
      <motion.div
        style={{ y: y2, x: sy }}
        className="absolute top-1/3 -right-32 h-[38rem] w-[38rem] rounded-full bg-accent-500/25 blur-[140px] animate-float-slower"
      />
      {/* aurora blob 3 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-punch-500/20 blur-[150px] animate-float-slow"
      />

      {/* grid + vignette */}
      <div className="absolute inset-0 grid-overlay opacity-60 [mask-image:radial-gradient(100%_100%_at_50%_0%,#000_20%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,var(--c-bg)_10%,transparent_60%)]" />

      {/* film grain */}
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--c-grain)",
          mixBlendMode: "var(--c-grain-blend)",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
