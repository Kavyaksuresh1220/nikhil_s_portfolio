import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollTo } from "./SmoothScroll";
import { profile } from "../data";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

// Fixed centre navigation with an animated "available for work" status,
// matching the reference's floating pill.
export default function Navbar() {
  const [active, setActive] = useState("#top");

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = ["top", "work", "about", "journal", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    if (href === "#top") scrollTo("#top", 0);
    else scrollTo(href, -100);
  };

  return (
    <motion.nav
      className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="nav-pill nav-desktop">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => go(e, l.href)}
            className={`nav-link ${active === l.href ? "is-active" : ""}`}
          >
            {l.label}
          </a>
        ))}
        <a
          href={profile.resumeUrl || "#"}
          className="nav-link"
          target={profile.resumeUrl && profile.resumeUrl !== "#" ? "_blank" : undefined}
          rel="noreferrer"
        >
          Resume
        </a>
      </div>

      {profile.available && (
        <span className="nav-status">
          <span className="dot" />
          Available for work
        </span>
      )}
    </motion.nav>
  );
}
