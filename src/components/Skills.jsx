import React from "react";

const skills = ["HTML/CSS", "JavaScript", "Python", "Django", "React", "MySQL", "Figma"];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

