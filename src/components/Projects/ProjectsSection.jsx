import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section className="projects">
      <h2>My Work</h2>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show less" : "Show all"}
      </button>
    </section>
  );
};

export default ProjectsSection;
