import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const goHome = () => {
      const el = document.getElementById("home");
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });

      if (window.location.hash && window.location.hash !== "#home") {
        window.history.replaceState(null, "", " ");
      }
    };
    const t = setTimeout(goHome, 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-purple-1200 min-h-screen">
      <Navbar />
      <main>
        <section id="home" className="pt-24 scroll-mt-24">
          <Home />
        </section>
        <section id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}


export default App;
