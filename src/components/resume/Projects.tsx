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
            <dl>
              <div>
                <dt>핵심 역할</dt>
                <dd>{project.contribution}</dd>
              </div>
              <div>
                <dt>기술 포인트</dt>
                <dd>{project.technicalPoint}</dd>
              </div>
              <div>
                <dt>성과</dt>
                <dd>{project.impact}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
