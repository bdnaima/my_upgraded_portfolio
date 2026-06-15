import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-card">
        <h2>Who am I?</h2>

        <p>
          I am a former translator and teacher who transitioned into frontend
          development. I enjoy creating modern, accessible, and user-friendly
          web experiences while combining technical development with UX/UI
          design principles.
        </p>

        <div className="about-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>UX/UI</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
