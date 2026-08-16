// A soft "torn paper" edge that caps the top of a layered sheet.
// It's filled with the sheet's own background color (via .paper-edge),
// so the sheet reads as a cut piece of paper laid over the one below.
export default function PaperEdge({ className = "" }) {
  return (
    <svg
      className={`paper-edge ${className}`}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,40 L0,20 C60,8 120,6 180,14 C250,23 300,10 370,10 C440,10 480,24 560,22
           C630,20 680,7 760,9 C840,11 890,25 970,21 C1040,18 1100,7 1160,13
           C1180,15 1195,18 1200,20 L1200,40 Z"
      />
    </svg>
  );
}
