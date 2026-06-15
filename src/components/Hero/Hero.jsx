import "./Hero.css";
import flower from "../../assets/images/flower.webp";

const Hero = () => {
  return (
    <section className="hero">
      <img src={flower} alt="" className="flower" />
      <h1>Hi! I'm Naima!</h1>
      <p>I'm a frontend developer with UX/UI design experience.</p>
      <button>LEARN MORE</button>
    </section>
  );
};

export default Hero;
