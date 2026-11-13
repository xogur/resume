import { Section } from "./Section";

type StrengthsProps = {
  strengths: string[];
};

export function Strengths({ strengths }: StrengthsProps) {
  return (
    <Section title="핵심 역량">
      <ul className="strength-list">
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </Section>
  );
}
