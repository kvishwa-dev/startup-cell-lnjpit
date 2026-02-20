import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Startups from "./pages/Startups";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/startups" element={<Startups />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
