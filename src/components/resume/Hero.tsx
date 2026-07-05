import type { ContactLink, Highlight } from "@/data/resume";

type HeroProps = {
  profile: {
    name: string;
    role: string;
    currentPosition: string;
    tagline: string;
    summary: string;
  };
  contacts: ContactLink[];
  highlights: Highlight[];
};

export function Hero({ profile, contacts, highlights }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="hero-kicker">{profile.currentPosition}</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">
          {profile.role} · {profile.tagline}
        </p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="contact-row" aria-label="주요 연락처">
          {contacts.map((contact) =>
            contact.href ? (
              <a key={contact.label} href={contact.href}>
                <span>{contact.label}</span>
                {contact.value}
              </a>
            ) : (
              <span key={contact.label} className="contact-text">
                <span>{contact.label}</span>
                {contact.value}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="highlight-grid" aria-label="핵심 성과">
        {highlights.map((highlight) => (
          <article className="highlight-card" key={`${highlight.value}-${highlight.label}`}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
            <p>{highlight.detail}</p>
          </article>
        ))}
      </div>
    </header>
  );
}
