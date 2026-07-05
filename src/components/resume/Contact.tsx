import type { ContactLink } from "@/data/resume";
import { Section } from "./Section";

type ContactProps = {
  contacts: ContactLink[];
};

export function Contact({ contacts }: ContactProps) {
  return (
    <Section eyebrow="Contact" title="연락처">
      <div className="contact-panel">
        {contacts.map((contact) =>
          contact.href ? (
            <a key={contact.label} href={contact.href}>
              <span>{contact.label}</span>
              {contact.value}
            </a>
          ) : (
            <p key={contact.label}>
              <span>{contact.label}</span>
              {contact.value}
            </p>
          ),
        )}
      </div>
    </Section>
  );
}
