// Decorative measurement rulers pinned to the left & right margins,
// echoing the reference's faint tick numbers (50 … 900).
const TICKS = [50, 100, 150, 200, 300, 400, 500, 600, 650, 700, 750, 800, 850, 900];

export default function SideRulers() {
  return (
    <div className="rulers" aria-hidden="true">
      <div className="ruler ruler-left">
        {TICKS.map((t) => (
          <span key={`l-${t}`}>{t}</span>
        ))}
      </div>
      <div className="ruler ruler-right">
        {TICKS.map((t) => (
          <span key={`r-${t}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}
