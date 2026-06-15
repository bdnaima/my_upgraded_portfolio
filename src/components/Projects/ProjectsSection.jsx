import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="projects">
      <h2>My Work</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
