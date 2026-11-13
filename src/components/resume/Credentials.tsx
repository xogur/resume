import type { SkillGroup } from "@/data/resume";
import { Section } from "./Section";

type CredentialsProps = {
  groups: SkillGroup[];
};

export function Credentials({ groups }: CredentialsProps) {
  return (
    <Section title="학력·자격">
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
