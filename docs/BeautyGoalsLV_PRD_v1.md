# Beauty Goals LV — Website Rebuild
## Product Requirements Document (PRD)

| Field | Details |
|---|---|
| **Client** | Beauty Goals LV — Michelle Tio-Nguyen, FNP-C |
| **Document type** | Product Requirements Document (PRD) |
| **Version** | 1.0 — Initial Draft |
| **Prepared by** | Claude (Anthropic) — AI-assisted audit & planning |
| **Date** | June 2026 |
| **Status** | Ready for design handoff |

**Brand colors:** `#B9A068` Teak (primary) · `#C7C7C7` Silver (secondary) · `#000000` Black (background)

**Social:** [Instagram @beautygoalslv](https://instagram.com/beautygoalslv) · [Instagram @beautygoalsbymichelle](https://instagram.com/beautygoalsbymichelle) · [YouTube](https://youtube.com/channel/UCbSrA4tNtZEE52L1KARn5UQ)

---

## 1. Executive Summary

Beauty Goals LV is a premier medical aesthetics spa in Las Vegas, NV, led by Michelle Tio-Nguyen, FNP-C, with over 13 years of medical experience and 10 years specializing in cosmetic aesthetics. The practice offers an advanced treatment menu spanning injectables (Botox, Dysport, Daxxify, dermal fillers), non-surgical lifting (Sofwave, Thread Lift, XERF), laser services (Aerolase Neo Elite, Erbium, IPL), body contouring (Emsculpt Neo, Emsella), and a full suite of medical-grade facials.

A comprehensive audit of the current website (16 pages, performed June 2026) identified 3 critical conversion blockers, 7 major UX failures, and 6 polish issues that collectively undermine the premium brand positioning the business has earned through years of client results and reviews.

This PRD defines the requirements for a complete website rebuild — replacing the current generic WordPress theme with a bespoke, brand-aligned digital experience that converts research-mode visitors into booked consultations and membership sign-ups.

| Metric | Count |
|---|---|
| Critical blockers | 3 |
| Major UX issues | 7 |
| Polish & trust gaps | 6 |
| Growth opportunities | 5 |
| Pages audited | 16 |

---

## 2. Problem Statement

### 2.1 The current site is failing to convert visitors

Despite Beauty Goals LV's strong real-world reputation, compelling treatment results, and Michelle's loyal client following (evidenced by glowing testimonials and 8K+ Instagram followers), the current website actively works against conversions through three core failures:

### Critical Issues (P1)

#### P1 — Pricing is invisible at the top of the funnel
**Problem:** No pricing appears on the homepage or services overview page. Med spa clients research costs early; without a ballpark figure they bounce to competitors.

**Fix:** Add "Starting at" ranges to each service card on the Services page. Surface membership pricing in the nav or hero.

---

#### P1 — Booking flow breaks trust at the redirect
**Problem:** Every "Book Now" button silently sends visitors to `abdoy.myaestheticrecord.com` — a third-party domain. For a med spa where trust is paramount, this domain switch reads as suspicious to first-time visitors.

**Fix:** Embed the booking widget directly or create a branded interstitial page before redirect.

---

#### P1 — Contact form has no stated SLA or confirmation feedback
**Problem:** The homepage contact form shows no expected response time, no visible success state, and no fallback contact details nearby — creating uncertainty after submission.

**Fix:** Add "We respond within 24 hours," display phone + email as alternatives, and confirm submission with a visible success state.

---

### Major Issues (P2)

#### P2 — Navigation hides 80% of the service menu
**Problem:** The current nav has 5 generic items. The 15+ named services (Sofwave, XERF, Aerolase, Thread Lift, Emsculpt, etc.) are buried 2 clicks deep with no preview.

**Fix:** Add a mega-menu under Services grouped by category: Injectables / Facials & Lasers / Body / Specialty.

---

#### P2 — Hero section communicates no specific differentiator
**Problem:** Three rotating headlines ("Reveal your Beauty," "Beautiful Healthy Skin," "Restore Your Youthful Glow") are generic and interchangeable. Nothing above the fold distinguishes Beauty Goals LV from any other local med spa.

**Fix:** Replace with a single specific headline tied to Michelle's actual strengths and the unique technology offered.

---

#### P2 — Membership value proposition is unclear
**Problem:** The Membership page leads with the price before the benefit. "Popular" appears on two tiers simultaneously. No retail value comparison is shown.

**Fix:** Add estimated retail value per tier, mark only one tier as most popular, lead with benefits before price.

---

#### P2 — Promotions page is functionally broken
**Problem:** The page contains only a Black Friday payment link -- no active promotions, no context, no product description. It exists as a nav destination but delivers nothing year-round.

**Fix:** Maintain as a living "Current Specials" page or remove from nav when inactive.

---

#### P2 — Gallery is unsorted and untappable for research
**Problem:** 40+ before/after images load in a single unfiltered grid. No ability to filter by treatment. Finding results for a specific service requires scrolling the entire page.

**Fix:** Add filterable tabs by treatment type. Label each pair with the specific treatment. Implement mobile lightbox with swipe.

---

### Minor Issues (P3)

#### P3 — Team credentials are incomplete
**Problem:** Jennifer and Zayna have brief bios but no certifications, device training, or years of experience -- key trust signals for laser and microneedling services.

**Fix:** Add certifications, training history, and specialties per provider.

---

#### P3 — Testimonials are anonymous and repeat
**Problem:** Reviews show only first name + last initial with no photos, treatment context, or platform source. Tasha R. appears twice in the homepage carousel.

**Fix:** Pull live Google Reviews via widget. Add headshots, treatment received, and date -- or link to verified source.

---

#### P3 — No hours or address in the footer
**Problem:** The footer only contains nav links. Users scrolling to find hours or directions find nothing.

**Fix:** Add address (linked to Google Maps), phone, email, and hours to footer.

---

#### P3 — URL structure is inconsistent across services
**Problem:** Some services live at `/services/[name]`, others at root level (`/sofwave/`, `/xerf/`, `/aerolase-neo-elite/`). Hurts SEO and breadcrumb navigation.

**Fix:** Consolidate all services under `/services/[name]` with 301 redirects from old URLs.

---

## 3. Goals & KPIs

| Goal | Metric | Target (12 months) |
|---|---|---|
| Increase new client bookings | Online bookings / month | +40% vs baseline |
| Grow membership base | Active members | +60 members in Y1 |
| Reduce bounce from pricing confusion | Bounce rate on service pages | Below 55% |
| Build email list for nurture | Email list subscribers | 500 in first 6 months |
| Improve local SEO visibility | Google ranking -- "Sofwave Las Vegas" etc. | Top 3 for 5 key terms |

---

## 4. Target Users

### The Informed Researcher
Women 28-50, Las Vegas metro area. Actively comparing med spas for Botox, filler, or a facial treatment. Has done Instagram research, read reviews, and wants to understand pricing before booking. Values expertise and natural results over aggressive discounting.

**Needs from the site:**
- Clear service descriptions with starting prices
- Before/after photos organized by treatment
- Provider credentials and experience
- Easy path to book a consultation

---

### The Existing Client
Current Beauty Goals LV client returning to book maintenance treatments, explore a new service they saw on Instagram, or refer a friend. Already trusts Michelle -- needs quick access to booking, promotions, and new treatment info.

**Needs from the site:**
- Fast "Book Now" access from any page
- Current promotions and membership deals
- New service announcements (XERF, Aerolase)
- Gallery of results for sharing/referrals

---

### The Body & Wellness Seeker
Men and women 30-55 exploring body contouring (Emsculpt Neo) or pelvic floor (Emsella). May be new to med spas. Needs more education, less assumption of prior knowledge. Often arrives via Google search for a specific device name.

**Needs from the site:**
- Plain-language treatment explanations
- Financing/payment options prominently shown
- Clinical study results (Emsculpt has strong data)
- Clear FAQ and consultation CTA

---

## 5. Brand Identity & Design Direction

### 5.1 Brand assets

**Primary logotype -- script wordmark**
`beautygoal2A-1500-WHITE-final-v3.png`
Use on dark/black backgrounds. Do not alter proportions or color.

**Emblem -- circle monogram**
`Beauty-Goals-LV-logo-for-printing-Transparent-BG.png`
Use as favicon, app icon, and social avatar. Gold glitter texture must be preserved.

### 5.2 Color palette

| Color | Hex | Role | Usage |
|---|---|---|---|
| Teak | `#B9A068` | Primary | CTAs, headings, highlights, borders, price displays, badges. The dominant brand accent. |
| Silver | `#C7C7C7` | Secondary | Dividers, secondary borders, inactive states, metadata text, table alternating rows. |
| Black | `#000000` | Background | Hero backgrounds, nav bar, footer, logo placement zones. Sets the luxury dark-and-gold aesthetic. |
| Warm White | `#F9F6F0` | Surface | Section backgrounds, card surfaces, content areas. Keeps the palette warm rather than clinical white. |

### 5.3 Design tone & direction

The visual language should communicate: **luxury, clinical expertise, warmth, and Las Vegas sophistication** -- not clinical sterility and not over-the-top glam. The goal is "high-end Beverly Hills aesthetics practice" as expressed through the Vegas lens.

**Design direction:**
- Dark hero sections (black background, gold accents)
- Warm off-white (`#F9F6F0`) for content sections
- Script/serif typography for display headings -- referencing the wordmark style
- Clean sans-serif for body text and UI elements
- Full-bleed real patient photography (no stock)

**Social channels for design reference:**
- Instagram: [@beautygoalslv](https://instagram.com/beautygoalslv)
- Instagram: [@beautygoalsbymichelle](https://instagram.com/beautygoalsbymichelle)
- YouTube: [Beauty Goals LV](https://youtube.com/channel/UCbSrA4tNtZEE52L1KARn5UQ)

---

## 6. Feature Requirements by Page

### 6.1 Global -- applies to all pages

| Feature | Requirement | Priority |
|---|---|---|
| Navigation | Sticky top nav with Beauty Goals LV wordmark logo (white version on dark). Services dropdown/mega-menu showing all 15+ services grouped by category. Persistent "Book Now" CTA button in Teak. Phone number visible on desktop. | P1 |
| Footer | Address (8961 W. Sahara Ave, Suite 106, Las Vegas NV 89117) linked to Google Maps. Phone: 702-625-3838. Email: beautygoalsLV@gmail.com. Business hours. Instagram, YouTube social links. Copyright. Membership CTA. | P1 |
| URL structure | All service pages consolidated under `/services/[service-name]`. 301 redirects from legacy root-level URLs (`/sofwave/`, `/xerf/`, `/aerolase-neo-elite/`, `/thread-lift/`). Breadcrumb nav on all service pages. | P1 |
| Booking CTA | Every page must have at least one branded "Book a Consultation" or "Book Now" button. Links to booking system with a branded interstitial or embedded widget -- no naked third-party redirect. | P1 |
| Mobile responsive | Full mobile optimization. Touch-friendly tap targets. Swipe gestures in gallery. Click-to-call on phone numbers. | P1 |
| Financing badge | CareCredit and Patientfi logos/badges shown on all service pages and the homepage -- not only on the Emsculpt page. | P2 |
| Google Reviews widget | Live Google Reviews widget showing star rating and recent reviews. Replace static anonymous testimonials. | P2 |
| SEO meta | Each page has unique title tag, meta description, and H1 using "[Treatment] Las Vegas" pattern. Schema markup for LocalBusiness and MedicalClinic. | P2 |

---

### 6.2 Homepage

| Feature | Requirement | Priority |
|---|---|---|
| Hero section | Single static hero (no auto-rotating carousel). Full-bleed dark image or video with black overlay. Headline must state a specific differentiator (e.g., provider name + specialization, or unique technology stack). Teak-colored "Book a Consultation" CTA. "Starting from $99/mo" membership callout visible. | P1 |
| Services grid | 6-8 service cards with icons, treatment name, 1-line description, and "Starting at $X" price. Grouped visually: Injectables, Facials & Lasers, Body, Specialty. Each links to full service page. | P1 |
| About Michelle | Brief 3-sentence bio of Michelle Tio-Nguyen, FNP-C with credential highlights and real photo. Links to full About page. | P1 |
| Contact form | Name, email, phone, treatment of interest. "We respond within 24 hours" sub-label. Phone and email shown as alternatives. Visible success confirmation on submit. No CAPTCHA. | P1 |
| Social proof bar | Google star rating + review count. Instagram follower count. Years in practice. Treatment count or notable stats. | P2 |
| Before/after preview | 3-4 featured before/after pairs (curated, labeled by treatment). "View Full Gallery" CTA. | P2 |
| Instagram feed | Embedded live Instagram feed (@beautygoalslv) -- last 6-9 posts. Shows active practice and real results. | P2 |
| Email capture | Secondary email signup with value hook: "Get our Glow-Getter skincare guide" or similar. Separate from booking form. | P3 |

---

### 6.3 About Us page

| Feature | Requirement | Priority |
|---|---|---|
| Michelle profile | Full bio, photo, credentials (FNP-C), years of experience (13 years medical, 10 years aesthetics), specializations, and list of conferences/trainings attended. Approachable tone. | P1 |
| Jennifer Guizar profile | Full bio with photo, certifications, device training completed, services she performs, and years of experience. | P2 |
| Zayna Rodriguez profile | Full bio with photo, certifications, device training, services performed, and personal statement. | P2 |
| Practice philosophy | Short paragraph on approach: personalized plans, natural results, client education. Ties to "Glow-Getter" brand language. | P2 |

---

### 6.4 Services landing page

| Feature | Requirement | Priority |
|---|---|---|
| Category structure | Services organized into 4 named categories: Injectables, Facials & Skin Rejuvenation, Body Contouring, Specialty & Other. Each category has a header and short description. | P1 |
| Service cards | Each service card includes: name, 2-sentence description, "Starting at $X" price (or "Pricing from consultation"), and "Learn More" link. | P1 |
| Membership promo | Persistent banner or card promoting the Glow Getter Membership ($99/mo) with key benefits. Links to full Membership page. | P2 |

---

### 6.5 Individual service pages (all 15+ services)

| Feature | Requirement | Priority |
|---|---|---|
| Consistent template | All service pages use the same layout template: Hero, What It Is, How It Works, Who It's For, Pricing, FAQs, Related Services, Book CTA. | P1 |
| Pricing section | All service pages must display pricing (specific amounts where known, "Starting at" where variable, or "Packages available -- contact us" as minimum). Never leave pricing absent. | P1 |
| FAQ -- service specific | Custom FAQs per treatment. No copy-pasting identical answers across pages. Fix the duplicated FAQ answer on the current Facials page. | P1 |
| Provider attribution | State which provider performs each treatment (Michelle for injectables; Jennifer or Zayna for facials/lasers). | P2 |
| Related services | Each service page links to 2-3 complementary services. Example: Botox page -> Fillers, Sofwave, Membership. | P2 |
| Financing callout | CareCredit and Patientfi logos with "As low as $X/month" estimate on services over $500. | P2 |

---

### 6.6 Gallery page

| Feature | Requirement | Priority |
|---|---|---|
| Filter tabs | Tabs at top: All / Botox & Fillers / Facials & Lasers / Body / Acne & Pigmentation. Active tab highlighted in Teak (`#B9A068`). | P1 |
| Labeled pairs | Each before/after image pair labeled with: treatment name, area treated, and number of sessions (where available). | P1 |
| Lightbox | Click/tap any image opens full-screen lightbox. Mobile: swipe to advance. Desktop: arrow keys. Close button top-right. | P2 |
| Video integration | Section for before/after video results (currently on YouTube channel). Embedded or linked thumbnails. | P3 |

---

### 6.7 Membership page

| Feature | Requirement | Priority |
|---|---|---|
| Value framing | Lead each tier with a 1-sentence pitch before listing inclusions. Add estimated retail value of included services to show discount magnitude. | P1 |
| Single "Popular" badge | Only one tier marked as "Most Popular." Recommend: Glow Up ($175) or Glow Goals ($225) based on service breadth. | P1 |
| Sign-up CTA | Phone number CTA + online inquiry form (if sign-up can be initiated digitally). | P1 |
| Comparison table | 4-column table comparing all tiers across key features: monthly cost, included services, discount %, rollover credits, milestone bonus. | P2 |

#### Membership tiers (for reference)

| Tier | Price | Key inclusions |
|---|---|---|
| Glow Getter | $99/mo | 10% off injectables, 15% off all other services. Credits roll over and apply to any treatment or product. |
| Glow Up | $175/mo | HydraFacial, Medium Depth Peel, IPL Rejuvenation, Acne Photofacial, Melasma Laser Spot Treatment, Laser Hair Reduction (up to 1 large area). Free Microneedling or Fractionated Laser after 6 months ($400 value). |
| Glow Goals | $225/mo | HydraFacial Deluxe, Diamond Glow Deluxe, Melasma Laser x2, PRX No-Peel Peel, Emsella, Fractionated Laser Resurfacing, ZO-3 Step Peel, Laser Hair Reduction (two medium or one XL area). Free Microneedling with RF or Erbium Laser after 6 months ($650 value). |
| Ultimate Goals | $499/mo | Microneedling with PRP/PRF or Exosome or Rejuran, Pixel-8 Microneedling RF Face, EmsculptNeo (any one area), Erbium Fully Ablative Laser, Fractionated Laser Full Face + Neck + Chest, PRX Skin Biostimulator x2, Keravive Scalp Treatment + LED, Emsella x2, Aerolase Face/Lip/Neck. Free Sofwave Cheek or Submental Lift OR Daxxify after 6 months ($1,000 value). |

---

### 6.8 Promotions page

| Feature | Requirement | Priority |
|---|---|---|
| Active promotions only | Display only current, live promotions with: treatment name, discount amount, expiry date, and "Book Now" CTA. Remove placeholder Black Friday link. | P1 |
| Empty state | When no promotions are active, show: "Check back soon -- or become a member for year-round savings" with Membership CTA. | P2 |
| New service intro pricing | Surface intro pricing for XERF and any new services here as they launch. | P2 |

---

## 7. Growth Opportunities (Phase 2)

The following features are not required for the initial launch but represent meaningful competitive advantages to build in a second phase once the core rebuild is live.

| Feature | Description | Potential impact |
|---|---|---|
| "Which treatment is right for me?" quiz | 3-5 question guided quiz that recommends a treatment based on skin concern, budget, and downtime tolerance. Replicates Michelle's consultation education style online. | High -- differentiates from all local competitors |
| Treatment comparison tool | Side-by-side comparison table for commonly confused treatments: Sofwave vs. Thread Lift vs. Filler for lifting; Botox vs. Daxxify; Aerolase vs. IPL. | Medium -- reduces pre-consultation friction |
| First Visit guide page | Dedicated page for new patients: what to expect from a consultation, what to bring, cancellation policy, and treatment category overviews. Converts hesitant new visitors. | Medium -- improves new patient conversion |
| SMS opt-in | "Text us a question" opt-in for mid-research visitors. Captures leads who aren't ready to call or fill a form. Integrates with existing 702-625-3838 or a dedicated SMS platform. | Medium -- captures mid-funnel leads |
| Blog / Education hub | Treatment education articles targeting long-tail search terms ("how long does Sofwave last," "Botox vs Dysport differences," "best age to start filler"). Michelle's expertise lends itself to authoritative content. | High -- compounding SEO value over time |

---

## 8. Out of Scope (v1)

The following are explicitly excluded from the initial website rebuild to maintain focus and manageable scope:

| Item | Rationale |
|---|---|
| Patient portal / medical records | Handled by Aesthetic Record (existing platform). Not a website function. |
| E-commerce / product store | Retail sales are in-clinic. Separate project if online retail becomes a priority. |
| Custom booking engine rebuild | Aesthetic Record handles scheduling. Website embeds or redirects only. |
| Multilingual support | English only for v1. Spanish support may be evaluated in v2 given the Las Vegas demographic. |
| CRM / email marketing platform | Website captures emails; CRM integration is a separate workstream. |

---

## 9. Suggested Build Milestones

| Phase | Milestone | Deliverables | Est. timing |
|---|---|---|---|
| 1 | Foundation | Design system setup (colors, type, components). Homepage. Global nav with mega-menu. Footer with full contact info. URL structure + redirects. | Weeks 1-3 |
| 2 | Core pages | About Us. Services landing page. All 15+ individual service pages using the standard template. Pricing populated on all pages. | Weeks 3-6 |
| 3 | Conversion & trust | Filtered gallery with lightbox. Membership page redesign. Promotions page. Google Reviews widget. Booking flow improvements. Contact form with confirmation. | Weeks 6-8 |
| 4 | Polish & launch | SEO meta tags. Schema markup. Instagram feed integration. Performance optimization. Mobile QA. Accessibility audit. Soft launch + monitor. | Weeks 8-10 |

---

*Prepared with Claude (Anthropic) -- Beauty Goals LV website rebuild -- June 2026*
