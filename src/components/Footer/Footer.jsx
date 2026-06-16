import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaEnvelope, FaUser } from "react-icons/fa";
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
        <Link
          className="footer-link"
          to="https://www.linkedin.com/in/naima-maria-malik-6471ba82/?skipRedirect=true"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="footer-link"
          to="https://www.facebook.com/noma.m.malik"
          target="_blank"
        >
          <FaFacebook />
        </Link>
        <Link className="footer-link" to="/contact">
          <FaEnvelope />
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
