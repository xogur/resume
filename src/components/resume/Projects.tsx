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
                <dt>문제</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>조치</dt>
                <dd>{project.action}</dd>
              </div>
              <div>
                <dt>결과</dt>
                <dd>{project.result}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
