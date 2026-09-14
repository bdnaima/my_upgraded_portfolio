import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact-card">
        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            Interested in discussing a project, or potential collaboration? Feel
            free to get in touch.
          </p>

          <div className="contact-links">
            <a href="mailto:naima.maria.malik@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/bdnaima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/naima-maria-malik-6471ba82/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
