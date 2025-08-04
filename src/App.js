import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Certifications from "./components/Certifications";
import GitHubStats from "./components/GitHubStats";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Timeline />
      <Certifications />
      <GitHubStats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
