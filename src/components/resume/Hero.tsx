import Image from "next/image";
import Link from "next/link";
import type { ContactLink, Highlight } from "@/data/resume";

type HeroProps = {
  profile: {
    name: string;
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
        <h1>{profile.name}</h1>
        <p className="hero-role">
          {profile.currentPosition}, {profile.tagline}
        </p>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-summary">{profile.summary}</p>
        <Link className="portfolio-entry-link" href="/portfolio">
          프로젝트 설계·검증 자세히 보기
        </Link>
      </div>

      <aside className="hero-profile" aria-label="프로필 사진과 연락처">
        <Image
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          width={132}
          height={132}
          priority
          className="portrait"
        />
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
