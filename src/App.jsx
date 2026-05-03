import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;