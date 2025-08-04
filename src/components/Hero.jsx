import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi, I'm <span>Pranav Badaskar</span>
      </motion.h2>
      <ReactTyped
        strings={["Frontend Developer", "UI/UX Designer", "Aspiring Engineer"]}
        typeSpeed={80}
        backSpeed={50}
        loop
        className="typed-text"
      />
      <div className="social-icons">
        <a href="https://github.com/Pranav8722" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:pranavbadaskar06@gmail.com"><FaEnvelope /></a>
      </div>
    </section>
  );
};

export default Hero;
