import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Certifications from "./components/Certifications";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h1>𝒑𝒓𝒂𝒏𝒂𝒗</h1>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#github">GitHub</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="PranavBadaskar-Resume.pdf" download className="btn">Resume</a>
      </nav>

      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Services />
      <Timeline />
      <Certifications />
      <GitHubStats />
      <Contact />
    </>
  );
}

export default App;
