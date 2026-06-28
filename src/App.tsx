import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import AchievementGallery from "./components/AchievementGallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <Summary />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AchievementGallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;