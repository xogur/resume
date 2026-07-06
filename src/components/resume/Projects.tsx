import type { ProjectItem } from "@/data/resume";
import { Section } from "./Section";

type ProjectsProps = {
  projects: ProjectItem[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section eyebrow="Selected Work" title="주요 프로젝트">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-heading">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
            <div className="project-summary">
              <p>
                {project.contribution} {project.technicalPoint}
              </p>
              <strong>성과: {project.impact}</strong>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
