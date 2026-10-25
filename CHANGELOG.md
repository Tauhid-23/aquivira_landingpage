# Changelog & Version History

All notable changes, releases, and fixes for the AquiVira project are documented in this file.
This changelog provides a clear version history to review changes quickly or perform rollbacks in case of system failures.

Format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [v1.2.1] - 2026-10-25

### Added
- **Google Search Console Verification**:
  - Added verification meta tag `B_cP4vwAkwH7hn3_0ETPNKvqYHKV02da65tg7kDuPWA` in `app/layout.tsx`.
  - Added HTML verification file `public/googlef43b29a8ffd7300b.html` supporting both verification methods simultaneously.

### Rollback Target
- **Previous stable commit**: `28a605a`
- **Rollback command**: `git revert HEAD` or `git reset --hard 28a605a`

---

## [v1.2.0] - 2026-10-25

### Added
- **SEO Robots Route** (`app/robots.ts`): Configured search bot crawling rules allowing full indexing and pointing to the canonical sitemap.
- **Dynamic Sitemap Route** (`app/sitemap.ts`): Created sitemap generator for `https://www.aquivira.com` to assist Googlebot and Bingbot discovery.
- **Rollback Tracking**: Initialized `CHANGELOG.md` with semantic versioning and commit hashes for incident rollback procedures.

### Changed
- **SEO & Search Favicon Resolution** (`app/layout.tsx`):
  - Added `metadataBase: new URL("https://www.aquivira.com")` for absolute URL resolution required by Googlebot and Bingbot favicon crawlers.
  - Added standard multi-size `/favicon.ico` (any size), `/icon-32x32.png`, and `/icon-192.png` to metadata icon arrays.
  - Updated OpenGraph image dimensions to match the 1024x1024 official logo.
- **README Documentation** (`README.md`): Added latest updates summary and deployment documentation.

### Rollback Target
- **Previous stable commit**: `774f71d`
- **Rollback command**: `git revert HEAD` or `git reset --hard 774f71d`

---

## [v1.1.0] - 2026-10-25

### Added
- Multi-resolution icon set (`public/icon-16x16.png`, `public/icon-32x32.png`, `public/icon-192.png`, `public/icon-512.png`).
- Embedded SVG icon (`public/icon.svg`) and PWA web app manifest icons (`public/manifest.json`).
- Root fallback `favicon.ico` in both `public/` and `app/`.

### Changed
- **Official Brand Logo**: Replaced placeholder asset with official high-resolution AquiVira brand mark (`public/aquivira-logo.png`).
- Replaced all legacy v0 / Vercel default tab icons across light/dark themes and mobile devices.

### Git References
- Commit `774f71d`: Update official AquiVira brand logo and generate comprehensive multi-resolution favicons
- Commit `ba4f59d`: Replace default v0 favicon and app icons with AquiVira logo

---

## [v1.0.1] - 2026-10-25

### Changed
- **Leadership Alignment** (`app/page.tsx`):
  - Updated **Most. Mobassara Jannat** to Chief Executive Officer (CEO) across Team and Contact cards.
  - Updated **Ashraf Islam Ashfaq** to Chief Operating Officer (COO) across Team and Contact cards.

### Git References
- Commit `332347a`: Update leadership roles: Mobassara Jannat as CEO and Ashraf Islam Ashfaq as COO

---

## [v1.0.0] - Baseline Release

### Features
- Initial AquiVira landing page built with Next.js 16 (App Router) and Tailwind CSS.
- Hero, Features, Product Showcase, Achievements, Interactive Photo Gallery with lightbox, FAQ accordion, Contact, and Pre-Order funnel.
