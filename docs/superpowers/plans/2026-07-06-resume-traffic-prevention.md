# Resume Traffic Prevention Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add weak-private traffic prevention headers to the deployed resume site without blocking direct recruiter access.

**Architecture:** Keep the resume fully static and public by direct URL. Use Next.js `headers()` in `next.config.ts` to add response-level crawler and preview suppression headers across all routes, while preserving the existing metadata and `robots.txt` controls.

**Tech Stack:** Next.js 16.2.10, TypeScript, Vercel Hobby, GitHub.

## Global Constraints

- Keep direct URL access open for recruiters.
- Keep `robots.txt` and page-level `noindex, nofollow`.
- Add response-level `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`.
- Avoid sitemap generation.
- Keep preview metadata minimal so links do not expose detailed resume content through crawlers or unfurled cards.
- Do not add password protection, auth, or Vercel Deployment Protection unless the resume URL is abused.
- Do not add paid Vercel add-ons.

---

### Task 1: Add Response-Level Anti-Indexing Headers

**Files:**
- Modify: `next.config.ts`
- Verify: `src/app/layout.tsx`
- Verify: `public/robots.txt`

**Interfaces:**
- Consumes: Existing Next.js `NextConfig` export from `next.config.ts`.
- Produces: An async `headers()` config that applies `X-Robots-Tag` and conservative caching behavior to all routes.

- [ ] **Step 1: Confirm current metadata and robots file**

Run:

```bash
Get-Content -Path src\app\layout.tsx
Get-Content -Path public\robots.txt
```

Expected:

```tsx
robots: {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
},
```

```txt
User-agent: *
Disallow: /
```

- [ ] **Step 2: Update `next.config.ts`**

Replace the file with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 3: Run local verification**

Run:

```bash
npm run lint
npm run build
```

Expected:

```text
eslint
✓ Compiled successfully
```

- [ ] **Step 4: Deploy to Vercel production**

Run:

```bash
npx vercel --prod --yes
```

Expected:

```text
Production      https://resume-one-beta-12.vercel.app
```

- [ ] **Step 5: Verify live headers and robots**

Run:

```powershell
(Invoke-WebRequest -UseBasicParsing https://resume-one-beta-12.vercel.app).Headers["X-Robots-Tag"]
(Invoke-WebRequest -UseBasicParsing https://resume-one-beta-12.vercel.app/robots.txt).Content
```

Expected:

```text
noindex, nofollow, noarchive, nosnippet
```

```txt
User-agent: *
Disallow: /
```

- [ ] **Step 6: Commit and push**

Run:

```bash
git add next.config.ts docs/superpowers/plans/2026-07-06-resume-traffic-prevention.md
git commit -m "chore: add resume anti-index headers"
git push
```

Expected:

```text
main -> main
```

## Self-Review

- Spec coverage: The plan covers response-level `X-Robots-Tag`, keeps existing `robots.txt` and metadata, avoids auth/passwords, avoids paid add-ons, and includes deployment verification.
- Placeholder scan: No placeholder terms are present.
- Type consistency: The plan uses the existing `NextConfig` type and a valid Next.js `headers()` return shape.

