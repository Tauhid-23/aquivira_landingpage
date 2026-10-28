# Changelog & Version History

All notable changes, releases, and fixes for the AquiVira project are documented in this file.
This changelog provides a clear version history to review changes quickly or perform rollbacks in case of system failures.

Format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [3.0.0] - 2026-10-28

### Major Release - AquiVira 3.0 Production Rollout
Complete interactive, sensory, and cultural transformation of the platform:
- **Tier 1 (Sensory, Cultural & Authentic Polish)**:
  - **Cinematic Interactive Media Slideshow & Photo Gallery**:
    - Comprehensive media showcase (`components/media/MediaSlideshow.tsx`) featuring 16 authentic photos from the AquiVira collection across 6 categories (Awards & Accolades, Strategic Partners, Pitches & Summits, Community Impact, R&D & Engineering, Craft & Design).
    - Equipped with 5-second autoplay and linear progress bar, interactive thumbnail filmstrip with auto-scroll centering, dual display modes (Cinematic Slideshow vs. Explorer Grid), full-screen lightbox modal, keyboard navigation, touch swipe support, and full bilingual (`EN` | `বাংলা`) titles and captions.
  - Instant client-side **Bilingual Localization Toggle (`EN` | `বাংলা`)** across navigation, hero, specifications, and checkout.
  - Interactive **Sensory Audio Experience ("The Pour of Purity")** synthesizing gravity water flow with animated soundwave visualizers.
  - **Digital Artisan Kiln Stamp & Provenance Modal** verifying 1000°C sintering, alluvial river silt sourcing, and fair-wage Kumor pottery impact.
  - **Certified icddr,b Laboratory Water Quality Reports**:
  - Official test specification modal (`components/lab/LabTestCertModal.tsx`) with authentic test reports issued by the **Laboratory of Environmental Health, HSPSD, icddr,b (Mohakhali, Dhaka)** (Reports #2026042093 and #2026095130).
  - Exact verified parameters: Total Coliforms: **0 CFU/100mL**, Arsenic: **< 1.0 ppb**, Iron: **< 0.1 mg/L**, Turbidity: **0.11 NTU**, and TDS: **160.7 mg/L**.
  - Authorized signatory: **Dr. Zahid Hayat Mahmud**, Scientist and Head, Laboratory of Environmental Health.
  - Interactive categorization tabs (All, Microbiological, Physical, Heavy Metals) and printable summary view.
  - Traditional **Bengali Terracotta Relief Dividers** inspired by local pottery heritage.
- **Tier 2 (Trust, Social Proof & Institutional Procurement)**:
  - **Verified Customer Kitchen Stories & Reviews Carousel** with 4.9/5 star ratings from Dhaka, Rajshahi, and Sylhet.
  - Real-Time **64-District Postal, Delivery & COD Checker** with instant transit estimates.
  - **Corporate, School & NGO Bulk Order RFQ Wizard** with automated WhatsApp pro-forma dispatch.
  - Interactive **5-Step Unboxing & Curing Ritual Walkthrough** on the care guide.
- **Tier 3 (Interactive Physics & Engineering Simulators)**:
  - **Thermodynamic Evaporative Cooling Simulator** calculating temperature drops (4°C–6°C below room temperature) and annual energy savings.
  - **Regional Water Source & Contaminant Analyzer** comparing raw vs. filtered water across Dhaka WASA, Northern Groundwater, and Coastal Wells.
  - **Household Consumption & Filter Life Forecaster** with automated WhatsApp refill reminder scheduling.

---

## [3.0.0-alpha.2] - 2026-10-28

### Added (v3.0.0 Phase 2: Trust, Social Proof & Institutional Expansion)
- **Verified Customer Kitchen Stories & Reviews Carousel**:
  - Interactive reviews showcase (`components/reviews/CustomerReviews.tsx`) featuring real customer stories from Dhaka (Dhanmondi, Uttara), Rajshahi, and Sylhet.
  - Verified buyer badges, 4.9/5 star aggregate rating, and authentic household takeaways.
- **Real-Time 64-District Postal, Delivery & COD Checker**:
  - Embedded district lookup widget (`components/delivery/DistrictDeliveryChecker.tsx`) calculating instant COD availability, 24–48h express transit times, and free fragile insurance.
- **Corporate, School & NGO Bulk Order RFQ Wizard**:
  - Interactive 3-step procurement modal (`components/b2b/CorporateRfqModal.tsx`) allowing institutions to specify deployment volume and custom requirements with automated WhatsApp pro-forma dispatch.
- **Interactive 5-Step Unboxing & Curing Ritual Walkthrough**:
  - Dynamic progress checklist (`components/care/UnboxingRitualGuide.tsx`) guiding buyers through dust wiping, 24h water immersion, initial flush, optimal ventilation, and routine maintenance.

---

## [3.0.0-alpha.1] - 2026-10-28

### Added (v3.0.0 Phase 1: Sensory, Cultural & Authentic Polish)
- **Instant Bilingual Localization Toggle (`EN` | `বাংলা`)**:
  - Global language toggle in header and mobile drawer with zero-latency client state and `localStorage` persistence.
  - Complete English & Bengali translation dictionaries for navigation, value propositions, product specs, and checkout.
- **Sensory Audio Experience ("The Pour of Purity")**:
  - Interactive acoustic stream component (`components/sensory/WaterPourAudio.tsx`) synthesizing the resonant sound of water flowing from a gravity tap into an earthen tumbler via Web Audio API.
  - Animated soundwave equalizer bars, toggle controls, and accessible tooltip.
- **Digital Artisan Kiln Stamp & Provenance Modal**:
  - Interactive terracotta relief medallion (`components/artisan/ArtisanKilnStamp.tsx`) honoring Rajshahi Kumor potters.
  - Interactive provenance modal showcasing 1000°C kiln firing proof, alluvial river silt purity, and non-toxic lead/cadmium-free certification.
- **Official icddr,b Laboratory Test Certificate Modal**:
  - Official test specification modal (`components/lab/LabTestCertModal.tsx`) transcribing authentic reports from icddr,b Laboratory of Environmental Health (Reports #2026042093 and #2026095130) with 1-click printable certificate.
- **Bengali Terracotta Relief Dividers**:
  - Subtle geometric SVG motif dividers (`components/ui/TerracottaDivider.tsx`) inspired by traditional Bangladeshi terracotta pottery art.

---

## [2.0.1] - 2026-10-28

### Changed
- **Institutional Partner Sequence Alignment**:
  - Reordered supporters grid from left to right across all touchpoints (Home, About, Media): **Embassy of Switzerland in Bangladesh**, **Swisscontact**, and **WaterAid Bangladesh**.
- **Navigation Bar Restructuring**:
  - Consolidated top navigation tabs into 5 primary destinations: **The Science**, **Our Impact**, **About Us**, **Media & Partners**, and **FAQ & Contact**.
  - Added dedicated `#partners` anchor scroll targets on `/about` and `/media`.
  - Streamlined horizontal navbar space by removing redundant "Shop" text link, keeping the prominent `Order Now — ৳9,999` CTA.

---

## [2.0.0] - 2026-10-28

### Major Release - AquiVira 2.0
Official production release marking the complete platform modernization, transition to active on-site purchasing, verified craftsmanship storytelling, and multi-page architecture.

#### Added
- **Active On-Site E-Commerce & Checkout Engine (`/order`)**:
  - Live ordering system supporting Cash on Delivery (COD) across all 64 districts in Bangladesh.
  - Interactive payment gateway mockups for mobile financial services (bKash & Nagad with TrxID validation) and debit/credit cards.
  - Automatic order tracking code generation (`AQV-XXXXXX`) and 1-click WhatsApp order confirmation.
  - Dedicated Corporate & Bulk Order routing to the official helpline.
- **Authentic Product Showcase**:
  - High-resolution studio photography of the handcrafted Rajshahi terracotta purifier (`/aquivira-authentic-purifier.jpg`) showcasing traditional Bengali architectural motifs (Curzon Hall / Lalbagh style), food-grade dispensing tap, and matching clay cup.
  - Product thumbnail preview integrated into Step 1 of the checkout panel.
- **Institutional Supporters & Partners Hub**:
  - Official showcase of backing and acceleration by the Embassy of Switzerland in Bangladesh, WaterAid Bangladesh, Swisscontact, and B-Kash across Home, About, and Media pages.
- **Press & Media Hub (`/media`)**:
  - Dedicated press and media coverage page integrated into the main navigation and mobile menu.
- **Comprehensive Multi-Page Experience**:
  - `/product`: Interactive 3-layer exploded filter engineering, head-to-head RO comparison, evaporative cooling physics, and lab test spectrometry.
  - `/about`: RUET engineering origin story, founding mission, and artisan partnership narrative.
  - `/impact`: Interactive annual environmental & financial savings calculator.
  - `/clay-care-guide`: Step-by-step unboxing, chemical-free maintenance, and placement guide.
  - `/contact`: Official contact channels, leadership contact, and verified physical address.

#### Changed
- **Pricing & Filter Specification Synchronization**:
  - Purifier: ৳9,999 BDT (31% discount from ৳14,499 BDT).
  - Replacement Cartridge: ৳1,199 BDT (৳300 off from ৳1,499 BDT).
  - Cartridge Longevity: Rated for 6,000+ Liters up to 8,000 Liters with routine care (~10 to 13 months at 20+ Liters/day family usage).
  - Official Customer Helpline: `+8801330192882` across all touchpoints.
- **Brand & Search Infrastructure**:
  - Full multi-resolution favicon suite, verified Google Search Console meta tag & file, dynamic `robots.ts`, and `sitemap.ts`.

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
