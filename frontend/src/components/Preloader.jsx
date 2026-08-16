import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";

// Cinematic intro loader: a count-up from 0 to 100 with the name
// revealing, then the curtain lifts. Shows once per session.
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(
    () => typeof sessionStorage !== "undefined" && sessionStorage.getItem("intro-seen") === "1"
  );

  useEffect(() => {
    if (done) return;
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const total = 1900; // ms
    let raf;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / total);
      // easeOutExpo for a satisfying settle
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          sessionStorage.setItem("intro-seen", "1");
          setDone(true);
        }, 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  const words = profile.name.split(" ");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="hero-editorial fixed inset-0 z-[100] flex flex-col items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-5xl font-bold uppercase tracking-tight sm:text-7xl"
            >
              {words[0]}{" "}
              <span className="text-leaf-500">{words.slice(1).join(" ")}</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-sm uppercase tracking-[0.3em] text-mist/50"
          >
            {profile.role}
          </motion.p>

          {/* Counter */}
          <div className="absolute bottom-10 right-8 font-display text-6xl font-bold sm:text-8xl">
            {count}
            <span className="text-leaf-500">%</span>
          </div>

          {/* Progress line */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-veil/10">
            <motion.div
              className="h-full bg-leaf-500"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
