# Resume Traffic Prevention Design

## Goal

Keep the resume site easy for recruiters to open from a direct link while reducing accidental discovery, search indexing, crawler traffic, and rich-preview spread. The site is a personal resume, not a commercial app, so the design should avoid friction such as login, passwords, or Vercel deployment protection.

## Current State

- The site is deployed to Vercel Hobby at `https://resume-one-beta-12.vercel.app`.
- The project is a static-like Next.js resume with no database, API routes, paid third-party calls, or large media.
- Search indexing has already been discouraged with `metadata.robots` in `src/app/layout.tsx`.
- `public/robots.txt` already disallows all crawler paths.

## Recommended Approach

Use weak-private controls:

- Keep direct URL access open for recruiters.
- Keep `robots.txt` and page-level `noindex, nofollow`.
- Add response-level `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`.
- Avoid sitemap generation.
- Keep preview metadata minimal so links do not expose detailed resume content through crawlers or unfurled cards.
- Do not add password protection, auth, or Vercel Deployment Protection unless the resume URL is abused.

## Out of Scope

- Hard rate limiting with middleware or external WAF.
- Password-gated access.
- Custom domain purchase.
- Paid Vercel add-ons.
- Hiding the site from anyone who already has the URL.

## Architecture

The control stays at the Next.js config and metadata layer:

- `next.config.ts` adds static response headers for all routes.
- `src/app/layout.tsx` keeps `robots` metadata conservative.
- `public/robots.txt` remains the crawler-facing policy file.

This keeps the site static, cheap to host, and simple to reason about.

## Data Flow

1. A recruiter opens the direct resume URL.
2. Vercel serves the static Next.js page normally.
3. Browsers render the resume without prompts.
4. Search crawlers and compliant bots see `robots.txt`, `noindex`, and `X-Robots-Tag` signals and should avoid indexing or previewing the content.

## Failure Modes

- Non-compliant bots can ignore robots directives.
- A shared direct link can still receive traffic.
- If a link is posted publicly and becomes popular, Vercel Hobby limits may still be reached.

The fallback for real abuse is to move from weak-private controls to a stronger path: password protection, Vercel protection, or a less guessable URL path.

## Verification

- `npm run lint`
- `npm run build`
- Confirm `/robots.txt` returns `User-agent: *` and `Disallow: /`.
- Confirm the deployed page includes `noindex`.
- Confirm deployed response headers include `X-Robots-Tag`.

