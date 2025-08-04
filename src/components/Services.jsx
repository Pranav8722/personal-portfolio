import React from "react";
import { FaLaptopCode, FaPalette, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaLaptopCode />, title: "Web Development", desc: "Building responsive and modern websites using React and Django." },
  { icon: <FaPalette />, title: "UI/UX Design", desc: "Designing intuitive interfaces and prototypes using Figma." },
  { icon: <FaCogs />, title: "DevOps Basics", desc: "Experience with Git, Jenkins, Docker basics, and CI/CD pipelines." }
];

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.3, type: "spring", stiffness: 80 }
    })
  };

  return (
    <section id="services">
      <h2>What I Do</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
