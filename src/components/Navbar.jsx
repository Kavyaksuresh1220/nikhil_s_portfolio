import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { scrollTo, scrollToTop } from "./SmoothScroll";

const links = [
  { id: "top", label: "Home" },
  { id: "about", label: "About me" },
  { id: "work", label: "Works" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the section currently in view.
  useEffect(() => {
    const ids = ["about", "work", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
        if (window.scrollY < 300) setActive("top");
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    if (id === "top") scrollToTop(false);
    else scrollTo(`#${id}`);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-40 px-6 py-3.5"
    >
      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-center rounded-full px-4 py-2 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass shadow-lg shadow-black/5" : "bg-transparent"
        }`}
      >
        {/* Wordmark — sits at the left edge, out of the centred group */}
        <button
          onClick={() => go("top")}
          className="absolute left-4 hidden font-display text-sm font-semibold tracking-tight lg:block"
        >
          {profile.firstName}
          <span className="text-leaf-500">.</span>
        </button>

        {/* Centred links + green CTA — the reference layout */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`text-[0.7rem] font-medium uppercase tracking-[0.1em] transition-colors ${
                  active === l.id ? "text-mist" : "text-mist/55 hover:text-mist"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={() => go("contact")}
              className="pill-green px-5 py-2 text-[0.8rem] font-medium"
            >
              Get in Touch
            </button>
          </li>
        </ul>

        {/* Mobile: brand left, controls right */}
        <button
          onClick={() => go("top")}
          className="absolute left-4 font-display text-base font-semibold tracking-tight md:hidden"
        >
          {profile.firstName}
          <span className="text-leaf-500">.</span>
        </button>

        <div className="absolute right-4 flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl glass p-3 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`block w-full rounded-full px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.1em] transition-colors ${
                  active === l.id ? "bg-veil/10 text-mist" : "text-mist/70"
                }`}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="pill-green mt-2 w-full px-4 py-3 text-sm font-medium"
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
