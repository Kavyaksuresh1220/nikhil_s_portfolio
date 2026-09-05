import { useEffect, useState } from "react";

function getInitial() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") || "light";
}

// "Lights on·off" pill fixed to the bottom-left — flips the whole paper
// theme between light and dark.
export default function LightsToggle() {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const isDark = theme === "dark";
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      className="lights"
      onClick={toggle}
      data-cursor=""
      aria-label={isDark ? "Turn the lights on" : "Turn the lights off"}
    >
      <span className="sw">
        <span className="knob" />
      </span>
      Lights {isDark ? "off" : "on"}
    </button>
  );
}
