import React from "react";

const certifications = [
  "Python with Machine Learning – Compsoft Technologies",
  "UI/UX using Figma – Varcons Technologies",
  "DevOps Internship – IBM & Roaman Technologies"
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul className="cert-list">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
