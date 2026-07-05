import type { ExperienceItem } from "@/data/resume";
import { Section } from "./Section";

type ExperienceProps = {
  items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  return (
    <Section eyebrow="Experience" title="경력">
      <div className="timeline">
        {items.map((item) => (
          <article className="experience-item" key={`${item.company}-${item.period}`}>
            <div className="item-heading">
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span>{item.period}</span>
            </div>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
