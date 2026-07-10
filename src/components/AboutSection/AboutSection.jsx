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
          design principles. Currently, I am studying Full-Stack .NET
          Development at Lexicon, where I'm building backend applications with
          C#, ASP.NET Core, Entity Framework Core, and MySQL while expanding my
          experience across the full stack.
        </p>

        <div className="about-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Bootstrap</span>
          <span>Tailwind CSS</span>

          <span>C#</span>
          <span>.NET</span>
          <span>ASP.NET Core</span>
          <span>Entity Framework Core</span>

          <span>SQL</span>
          <span>MySQL</span>

          <span>Firebase</span>

          <span>UX/UI</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
