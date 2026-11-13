import type { SkillGroup } from "@/data/resume";
import { Section } from "./Section";

type SkillsProps = {
  groups: SkillGroup[];
};

export function Skills({ groups }: SkillsProps) {
  return (
    <Section title="기술스택">
      <div className="skill-grid">
        {groups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.skills.join(", ")}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
