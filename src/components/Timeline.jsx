import React from "react";

const timelineData = [
  { title: "DevOps Intern", period: "Sep 2024 – Jan 2025", desc: "IBM & Roaman Technologies – Worked with Git, Jenkins, Docker basics, and CI/CD concepts." },
  { title: "B.E. Computer Science", period: "2021 – Present", desc: "Maratha Mandal Engineering College – CGPA 8.2" },
  { title: "PUC", period: "2019 – 2021", desc: "M.M PU College – 78.16%" },
  { title: "SSLC", period: "2019", desc: "Kudremani High School – 86%" }
];

const Timeline = () => {
  return (
    <section id="timeline">
      <h2>Education & Internship</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.title}</h3>
            <span>{item.period}</span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
