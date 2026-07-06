import Image from "next/image";
import type { ContactLink, Highlight } from "@/data/resume";

type HeroProps = {
  profile: {
    name: string;
    role: string;
    currentPosition: string;
    tagline: string;
    photo: string;
    headline: string;
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
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
      </div>

      <aside className="hero-profile" aria-label="프로필 요약">
        <Image
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          width={132}
          height={132}
          priority
          className="portrait"
        />
        <div>
          <strong>{profile.name}</strong>
          <p>
            {profile.role}
            <br />
            {profile.tagline}
          </p>
        </div>
        <div className="contact-row" aria-label="주요 연락처">
          {contacts.map((contact) =>
            contact.href ? (
              <a key={contact.label} href={contact.href}>
                {contact.value}
              </a>
            ) : (
              <span key={contact.label} className="contact-text">
                {contact.value}
              </span>
            ),
          )}
        </div>
      </aside>

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
