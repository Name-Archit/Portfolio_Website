import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";
import ProjectsMain from "./pages/ProjectsMain";

function App() {
  return (
    <div className="bg-background text-on-surface">

      <Navbar />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsMain />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;