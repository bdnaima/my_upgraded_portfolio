import { Link } from "react-router-dom";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact-card">
        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            Interested in collaborating, discussing a project, or simply saying
            hello? Feel free to get in touch.
          </p>

          <p>
            Otherwise feel free to email me directly:{" "}
            <a href="mailto:naima.maria.malik@gmail.com">
              naima.maria.malik@gmail.com
            </a>
          </p>

          <p>My link to: LinkedIn</p>
        </div>

        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your name" />

          <label>Email:</label>
          <input type="email" placeholder="Your email" />

          <label>Message:</label>
          <textarea rows="5" placeholder="Your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
