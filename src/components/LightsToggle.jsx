import { useEffect, useState } from "react";

function getInitial() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") || "light";
}

// Small switch fixed to the bottom-left — flips the site between the light
// and dark theme.
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
      aria-label={isDark ? "Turn the lights on" : "Turn the lights off"}
    >
      <span className="sw">
        <span className="knob" />
      </span>
    </button>
  );
}
