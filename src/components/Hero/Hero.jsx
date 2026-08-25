import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <section className="hero">
      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="hero-shape">
          <span className="code-symbol">&lt;/&gt;</span>
        </div>

        <div className="floating-dot dot-one"></div>
        <div className="floating-dot dot-two"></div>
      </div>

      <h1>Hi! I'm Naima!</h1>

      <p>Frontend Developer &amp; UX/UI Designer</p>

      <p>Currently studying Fullstack .NET @ Lexicon</p>

      <button onClick={navigateToAbout}>LEARN MORE</button>
    </section>
  );
};

export default Hero;
