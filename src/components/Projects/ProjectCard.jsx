import { Link } from "react-router-dom";
import "./Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {/* <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div> */}

        <div className="project-links">
          <Link to={project.github} target="blank">
            GitHub
          </Link>
          <Link to={project.url} target="blank">
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
