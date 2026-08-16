import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

// Global buttery smooth scrolling (à la award-winning Framer sites).
// Respects prefers-reduced-motion and resets to top on route change.
let lenisInstance = null;

export function scrollToTop(immediate = true) {
  if (lenisInstance) lenisInstance.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? "instant" : "smooth" });
}

// Smoothly scroll to a section. `target` may be a selector like "#work".
export function scrollTo(target, offset = -72) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.3 });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}

export default function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Heavy, continuous inertia (designsuspect.com feel): a low lerp gives
    // that floaty, glued-to-momentum scroll rather than a per-step ease.
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: true,
    });
    lenisInstance = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Jump to top on navigation
  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);

  return null;
}
