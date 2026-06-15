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
          design principles. Currently, I am continuing my journey as a
          full-stack developer, studying C# and .NET at Lexicon to strengthen my
          backend development skills.
        </p>

        <div className="about-tags">
          <span>HTML & CSS</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>Node</span>
          <span>C#</span>
          <span>.NET</span>
          <span>Firebase</span>
          <span>UX/UI</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
