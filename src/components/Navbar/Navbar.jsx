import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="logo-link" to="/">
          Naima's Portfolio
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About Me
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
