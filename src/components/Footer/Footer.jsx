import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaUser } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="logo">
        <Link className="logo-link" to="/">
          <FaUser />
        </Link>
        <p>Naima &copy; 2026</p>
      </div>
      <div className="footer-links">
        <a className="footer-link" to="/contact">
          <FaEnvelope />
        </a>

        <Link
          className="footer-link"
          to="https://github.com/bdnaima"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          className="footer-link"
          to="https://www.linkedin.com/in/naima-maria-malik-6471ba82/?skipRedirect=true"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
