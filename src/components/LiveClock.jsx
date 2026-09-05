import { useEffect, useState } from "react";

// Live local clock with the visitor's GMT offset — mirrors the reference's
// "21:32:19 GMT+5:30" ticker in the hero footer.
function format(now) {
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  const offMin = -now.getTimezoneOffset(); // minutes east of UTC
  const sign = offMin >= 0 ? "+" : "-";
  const abs = Math.abs(offMin);
  const oh = Math.floor(abs / 60);
  const om = abs % 60;
  const off = om ? `${sign}${oh}:${String(om).padStart(2, "0")}` : `${sign}${oh}`;

  return `${hh}:${mm}:${ss} GMT${off}`;
}

export default function LiveClock() {
  const [time, setTime] = useState(() => format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
