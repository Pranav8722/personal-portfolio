import React from "react";
// import aboutImg from "./itachi.jpg"; // Place your image in /src/assets

const About = () => {
  return (
    <section id="about" className="scroll-animate about-section">
      <h2>About Me</h2>
      <div className="about-container">
        <img src="/profile.jpg" alt="About Me" className="about-img" />

        <div className="about-text">
          <h3>Hello! I'm Pranav</h3>
          <p>
            I am a passionate Frontend Developer and Computer Science Engineering
            student. I love building visually appealing and interactive web applications
            with React, JavaScript, and modern design trends.
          </p>
          <p>
            Outside of coding, I enjoy designing UI/UX experiences and exploring new
            technologies to improve my skill set.
          </p>
          <a href="#projects" className="about-btn">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default About;
