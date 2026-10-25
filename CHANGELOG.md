# Changelog & Version History

All notable changes, releases, and fixes for the AquiVira project are documented in this file.
This changelog provides a clear version history to review changes quickly or perform rollbacks in case of system failures.

Format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [v0.7.3] - 2026-10-25

### Changed
- **Authentic Product Photo Integration**:
  - Replaced the modern stock placeholder in "The Magic of Natural Clay" section on the homepage (`app/page.tsx`) with the actual, authentic handcrafted AquiVira clay purifier photograph (`/aquivira-authentic-purifier.jpg`).
  - Showcases the authentic Rajshahi terracotta body, traditional hand-painted architectural heritage motifs, food-grade dispensing tap, and matching clay cup.
  - Refined container framing to preserve the full vertical profile from lid to base without distorted cropping, paired with an "Authentic Handcrafted Terracotta" verified badge.
  - Added craftsmanship and material highlights grid directly beside the photo (100% plastic-free, 4°C–6°C natural cooling, 6,000+ to 8,000L longevity).
- **Checkout Product Preview**:
  - Added an authentic product thumbnail preview in Step 1 of the checkout panel (`components/checkout/CheckoutPanel.tsx`).
  - Synchronized discount badge to 31% OFF (৳14,499 down to ৳9,999).

---

## [v0.7.2] - 2026-10-25

### Changed
- **Daily Usage & Longevity Calibration**:
  - Calibrated all family consumption models to **20+ Liters average daily usage**:
    - At 20L/day, 6,000 Liters = **300 days (~10 months)** of daily continuous filtration.
    - At 20L/day, 8,000 Liters (with regular care) = **400 days (~13 months / over 1 full year)** of safe drinking water per cartridge.
  - Updated `MAIN_PRODUCT.features` and export constants in `lib/data/checkoutData.ts` to reflect the 20+ Liters/day benchmark.
  - Aligned the interactive Impact Calculator (`/impact`) to compute annual savings based on 20+ Liters daily family consumption (7,300+ Liters/year, saving 3,650–7,300 plastic bottles per household).

---

## [v0.7.1] - 2026-10-25

### Changed
- **Filter Media Longevity Specification**:
  - Updated cartridge capacity metrics: The filter kit delivers **over 6,000+ Liters** and up to **8,000 Liters** with proper care.
- **Pricing & Helpline Synchronization**:
  - Purifier base: ৳14,499 with 31% discount = **৳9,999 BDT** (Limited Stock).
  - Extra Cartridge: **৳1,199 BDT** (৳300 off from ৳1,499).
  - Official Helpline: `+8801330192882` (Phone/WhatsApp).

---

## [v0.7.0] - 2026-10-25

### Added
- **Hybrid Product Page Architecture (`/product`)**:
  - Interactive Exploded Engineering Canvas (3-layer core: Biosand, Activated Carbon, Minerals).
  - Head-to-Head Showdown: AquiVira Clay Purifier vs. Plastic Electric RO (0 kWh vs 180 kWh, 0% water wasted vs 75% wasted, zero microplastics).
  - Forensic Laboratory Verification Spectrometry (80% heavy metals, 90% microbes).
  - Evaporative Cooling Physics (~4°C to 6°C temperature drop).

---

## [v0.6.0] - 2026-10-25

### Added
- **Active On-Site Checkout Panel (`/order`)**:
  - Real-time product selection (Purifier + Cartridge add-on counter).
  - Bangladesh 64-District & 8-Division cascading dropdowns.
  - Cash on Delivery (COD) as primary zero-upfront barrier.
  - Interactive Mockup Payment Gateways (bKash & Nagad with TrxID capture, Card sandbox).
  - Automatic order reference code generation (`AQV-XXXXXX`).
  - 1-Click WhatsApp Order Confirmation dispatch.
  - Dedicated Corporate & Bulk Orders banner routing to Helpline (`+8801330192882`).

---

## [v0.5.1] - 2026-10-25

### Added
- **Official Social Channels**:
  - Facebook: `https://www.facebook.com/aquivira.tech`
  - LinkedIn: `https://www.linkedin.com/company/aquivira`

---

## [v0.4.1] - 2026-10-25

### Added
- **Standalone Clay Care Guide (`/clay-care-guide`)**:
  - 5-step unboxing curing ritual.
  - Strict chemical-free cleaning rules (warm water + soft brush only).
  - Evaporative cooling placement advice.
  - Interactive troubleshooting accordion.

---

## [v0.3.0] - 2026-10-25

### Changed
- **Official Tagline & Narrative Anchor**:
  - Main Tagline: *"Engineered for Purity, Powered by Nature."*
  - The 3 Core Pillars: Zero Plastic, Off-the-Grid Purification, Natural Cooling.
  - RUET Engineering heritage & Kumor artisan revival partnership.

---

## [v1.2.2] - 2026-10-25

### Fixed
- Bing Webmaster SEO guidelines for title and meta description length.

---

## [v1.2.1] - 2026-10-25

### Added
- Google Search Console verification meta tag and HTML verification file.

---

## [v1.2.0] - 2026-10-25

### Added
- `app/robots.ts` and `app/sitemap.ts` dynamic generators.
- Canonical metadata resolution for Googlebot and Bingbot favicon discovery.

---

## [v1.1.0] - 2026-10-25

### Added
- Official AquiVira brand mark across multi-resolution favicons (`favicon.ico`, `icon-16x16`, `icon-32x32`, `icon-192`, `icon-512`, `apple-icon.png`).

---

## [v1.0.1] - 2026-10-25

### Changed
- Leadership roles: Most. Mobassara Jannat as CEO and Ashraf Islam Ashfaq as COO.

---

## [v1.0.0] - Baseline Release
- Initial single-page landing site.
