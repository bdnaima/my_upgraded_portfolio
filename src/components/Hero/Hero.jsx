import { useNavigate } from "react-router-dom";
import "./Hero.css";
import flower from "../../assets/images/flower.webp";

const Hero = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <section className="hero">
      <img src={flower} alt="" className="flower" />
      <h1>Hi! I'm Naima!</h1>
      <p>I'm a frontend developer with UX/UI design experience.</p>
      <p>Currently studying Fullstack .NET @ Lexicon</p>
      <button onClick={() => navigateToAbout()}>LEARN MORE</button>
    </section>
  );
};

export default Hero;
