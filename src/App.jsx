import CursorGlow from "./components/CursorGlow";
import SideRulers from "./components/SideRulers";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import LightsToggle from "./components/LightsToggle";
import Home from "./pages/Home";

// Single-page editorial portfolio (ishikadixit.framer.website re-creation,
// carrying Nikhil's identity). Everything scrolls on one paper sheet.
export default function App() {
  return (
    <div className="paper">
      <Preloader />
      <CursorGlow />
      <SmoothScroll />
      <SideRulers />
      <Navbar />

      <Home />

      <LightsToggle />
    </div>
  );
}
