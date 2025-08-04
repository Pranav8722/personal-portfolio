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
        <h1>Pranav</h1>
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
        <a href="#contact" className="btn">Hire Me</a>
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
