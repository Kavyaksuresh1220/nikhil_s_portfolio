import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollTo } from "./SmoothScroll";
import { profile } from "../data";

const LINKS = [
  { label: "Home", to: "/", hash: "#top" },
  { label: "Work", to: "/", hash: "#work" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/", hash: "#journal" },
  { label: "Contact", hash: "#contact" }, // footer exists on every page
];

// Floating card at the top of the sheet: links row + a status strip.
export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [spy, setSpy] = useState("#top");

  // Scrollspy on the home page.
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["top", "work", "journal", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSpy(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);

  const isActive = (l) => {
    if (l.to === "/about") return pathname === "/about";
    if (pathname === "/about") return false;
    return spy === l.hash;
  };

  const go = (e, l) => {
    e.preventDefault();
    const samePage = !l.to || l.to === pathname;
    if (samePage && l.hash) {
      scrollTo(l.hash, l.hash === "#top" ? 0 : -110);
    } else {
      navigate(l.to, { state: l.hash && l.hash !== "#top" ? { scrollTo: l.hash } : null });
    }
  };

  const onAbout = pathname === "/about";

  return (
    <motion.nav
      className="nav"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      aria-label="Main"
    >
      <div className="nav-links">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.to === "/about" ? l.to : `${l.to || ""}${l.hash}`}
            onClick={(e) => go(e, l)}
            className={`nav-link ${isActive(l) ? "is-active" : ""}`}
          >
            {l.label}
          </a>
        ))}
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="nav-link">
          Resume
        </a>
      </div>
      <div className="nav-status">
        {onAbout ? (
          "Nice to meet you :)"
        ) : (
          <>
            {profile.available && <span className="dot" />}
            Available for work
          </>
        )}
      </div>
    </motion.nav>
  );
}
