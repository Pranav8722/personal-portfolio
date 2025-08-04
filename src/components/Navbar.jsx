import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Pranav</h1>
      <ul>
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
    </motion.nav>
  );
};

export default Navbar;
