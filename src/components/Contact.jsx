import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="scroll-animate">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Feel free to reach out for collaborations, freelance projects, or just a friendly chat!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h4>Email</h4>
            <p>
              <a href="mailto:pranavbadaskar06@gmail.com">
                pranavbadaskar06@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h4>Phone</h4>
            <p><a href="tel:+918722407643">+91 8722407643</a></p>
          </div>
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h4>Location</h4>
            <p>Banglore, Karnataka, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
