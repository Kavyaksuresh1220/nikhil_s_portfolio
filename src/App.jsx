import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import LightsToggle from "./components/LightsToggle";
import Home from "./pages/Home";
import About from "./pages/About";

// The whole site sits on one white "sheet" framed by faint grid guides,
// floating on a grey page — after ishikadixit.framer.website.
export default function App() {
  return (
    <div className="page">
      <SmoothScroll />
      <Navbar />

      <main className="sheet">
        <div className="guides" aria-hidden="true">
          <div className="guides-inner" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </main>

      <LightsToggle />
    </div>
  );
}
