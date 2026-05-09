import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";
import ProjectsMain from "./pages/ProjectsMain";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  if (!loadingComplete) {

    return (
        <LoadingScreen
            onFinish={() => setLoadingComplete(true)}
        />
    );
}
  return (
    <div className="bg-background text-on-surface">

      <Navbar />

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsMain />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;