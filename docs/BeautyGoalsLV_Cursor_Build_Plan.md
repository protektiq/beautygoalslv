# Beauty Goals LV — Cursor Build Plan
## Step-by-step guide for Cursor + Claude Code verification

| Field | Details |
|---|---|
| **Project** | Beauty Goals LV — beautygoalslv.com rebuild |
| **Stack** | Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui |
| **CMS** | None for v1 — static content, easy to migrate later |
| **Booking** | Aesthetic Record embed (existing system) |
| **Verification tool** | Claude Code — run after each phase |
| **Design reference** | `beautygoalslv_mockup.html` + `BeautyGoalsLV_PRD_v1.md` |

---

## Before you start — project references

Keep these three files open in Cursor throughout the build:

- `beautygoalslv_mockup.html` — visual reference for every page and component
- `BeautyGoalsLV_PRD_v1.md` — feature requirements and priorities
- This file — the build plan itself

**Brand tokens (pin these in every Tailwind/CSS config decision):**
```
Teak:       #B9A068   → primary accent, CTAs, headings, borders
Silver:     #C7C7C7   → secondary borders, dividers, metadata
Black:      #000000   → hero, nav, footer, dark sections
Warm White: #F9F6F0   → content section backgrounds
Body text:  #2D2B27
Muted:      #6B6860
```

**Fonts:**
```
Display: Playfair Display (italic weight for headings)
Body/UI: Inter
```

---

## Phase 1 — Project foundation & design system

> **Goal:** Repo initialized, Tailwind configured with brand tokens, fonts loaded, base layout components (Nav + Footer) built and verified.

---

### Step 1.1 — Initialize the project

**Prompt Cursor:**
```
Create a new Next.js 14 project with the App Router, TypeScript, and Tailwind CSS.
Project name: beautygoalslv
Run: npx create-next-app@latest beautygoalslv --typescript --tailwind --app --src-dir --import-alias "@/*"
Then install: npm install clsx tailwind-merge lucide-react
```

**Claude Code verification checklist:**
```
- [x] /src/app/layout.tsx exists
- [x] /src/app/page.tsx exists
- [x] tailwind.config.ts exists
- [x] package.json includes next, react, typescript, tailwindcss
- [x] npm run dev starts without errors
- [x] No TypeScript errors on first run
```

---

### Step 1.2 — Configure Tailwind with brand tokens

**Prompt Cursor:**
```
Update tailwind.config.ts to extend the theme with Beauty Goals LV brand colors and fonts.
Add these exact values:

colors:
  teak: { DEFAULT: '#B9A068', light: '#CEB98A', dark: '#9A8455' }
  silver: '#C7C7C7'
  near-black: '#0D0D0D'
  warm-white: '#F9F6F0'
  body: '#2D2B27'
  muted: '#6B6860'

fontFamily:
  display: ['Playfair Display', 'Georgia', 'serif']
  body: ['Inter', 'system-ui', 'sans-serif']

Also set the default font-sans to Inter.
```

**Claude Code verification checklist:**
```
- [ ] tailwind.config.ts contains teak, silver, warm-white color keys
- [ ] fontFamily.display and fontFamily.body are defined
- [ ] Colors match hex values exactly (#B9A068, #C7C7C7, #F9F6F0)
- [ ] No Tailwind config syntax errors
```

---

### Step 1.3 — Load Google Fonts and set global styles

**Prompt Cursor:**
```
In /src/app/layout.tsx:
1. Import Playfair Display and Inter from next/font/google
   - Playfair Display: weights [400, 500, 600, 700], styles [normal, italic], subsets [latin]
   - Inter: weights [300, 400, 500, 600], subsets [latin]
2. Apply both fonts via CSS variables: --font-display and --font-body
3. Set global base styles in /src/app/globals.css:
   - body background: #F9F6F0
   - body color: #2D2B27
   - font-family: var(--font-body)
   - -webkit-font-smoothing: antialiased
   - Remove all default Tailwind @layer base overrides that conflict
4. Set metadata: title 'Beauty Goals LV — Med Spa Las Vegas', description matching PRD
```

**Claude Code verification checklist:**
```
- [ ] Playfair Display and Inter imported via next/font (not <link> tag)
- [ ] CSS variables --font-display and --font-body applied to <html>
- [ ] globals.css sets background #F9F6F0 on body
- [ ] No layout shift from font loading (display: swap)
- [ ] Metadata title and description set correctly
- [ ] npm run build passes without font-related errors
```

---

### Step 1.4 — Build the Nav component

**Prompt Cursor:**
```
Create /src/components/Nav.tsx — a sticky navigation bar matching the mockup exactly.

Requirements:
- Fixed top, full width, z-50, height 72px
- Background: #000000, bottom border: 1px solid rgba(185,160,104,0.2)
- Left: logo "Beauty Goals LV" in Playfair Display italic, color #B9A068, links to /
- Center/Right nav links: Home, About, Services (with dropdown), Gallery, Membership, Promotions
- Font: Inter, 0.82rem, uppercase, letter-spacing 0.06em, color rgba(255,255,255,0.75)
- Hover state: color #B9A068
- "Book Now" button: background #B9A068, color #000, font-weight 600, padding 9px 20px, border-radius 2px
- Services dropdown: positioned below nav, background #0D0D0D, border-top 2px solid #B9A068,
  width 600px, two-column grid showing all 15+ services grouped as:
  Injectables (Botox, Fillers, Lip Filler) and Body (Emsculpt, Emsella) in column 1
  Facials & Lasers (HydraFacial, Diamond Glow, Aerolase, IPL) and Specialty
  (Sofwave, XERF, Thread Lift) in column 2
- Mobile: hide nav links below 900px, show hamburger menu icon (implement later in Step 1.5)
- All links use Next.js <Link> component
- "Book Now" links to /contact
```

**Claude Code verification checklist:**
```
- [ ] Nav.tsx exists in /src/components/
- [ ] Component is exported as default
- [ ] Background is #000000 (not near-black, not gray)
- [ ] Logo uses font-family display (Playfair Display italic)
- [ ] Logo color is exactly #B9A068
- [ ] Book Now button has correct gold background and black text
- [ ] Services dropdown renders with two-column layout
- [ ] Dropdown shows on hover (CSS or state-based)
- [ ] All 15+ services are listed in dropdown with correct groupings
- [ ] Nav uses <Link> not <a> for internal routes
- [ ] Nav is imported and rendered in layout.tsx
- [ ] Nav has position: fixed, z-index 50
- [ ] No TypeScript errors
```

---

### Step 1.5 — Mobile nav (hamburger menu)

**Prompt Cursor:**
```
Add a mobile hamburger menu to Nav.tsx for screens below 900px.

Requirements:
- Show a hamburger icon (three horizontal lines) on mobile, hide on desktop
- Clicking hamburger opens a full-width dropdown panel below the nav
- Panel background: #000000, padding 24px
- List all page links vertically: Home, About, Services, Gallery, Membership, Promotions
- Under Services, show all treatments indented (no mega-menu grid on mobile)
- Book Now button full-width at bottom of panel in gold
- Close panel when any link is clicked
- Use React useState for open/closed state
- Animate panel open/close with CSS transition (max-height or transform)
- Use lucide-react Menu and X icons
```

**Claude Code verification checklist:**
```
- [ ] Hamburger icon visible below 900px, hidden above
- [ ] Desktop nav links hidden below 900px
- [ ] useState controls open/closed state
- [ ] Panel opens and closes correctly on icon click
- [ ] Panel closes when a nav link is clicked
- [ ] All page links present in mobile menu
- [ ] Book Now button is gold, full-width in mobile panel
- [ ] No layout shift when menu opens (panel doesn't push content)
- [ ] lucide-react Menu/X icons render correctly
```

---

### Step 1.6 — Build the Footer component

**Prompt Cursor:**
```
Create /src/components/Footer.tsx matching the mockup design.

Requirements:
- Background: #000000, top border: 1px solid rgba(185,160,104,0.15)
- Padding: 60px 24px 32px
- Four-column grid (on desktop): Brand column, Treatments, Quick Links, Visit Us
- Brand column:
  - "Beauty Goals LV" in Playfair Display italic, color #B9A068, font-size 1.5rem
  - Tagline: "Las Vegas's premier medical aesthetics spa..."
  - Financing row: "Financing:" label + "CareCredit" and "Patientfi" badges
    (badges: background rgba(255,255,255,0.07), border 1px solid rgba(255,255,255,0.1), color rgba(255,255,255,0.6))
- Treatments column: links to /services for Botox & Fillers, Sofwave Lift, XERF, Aerolase, HydraFacial, Emsculpt Neo, Thread Lift, "All services →"
- Quick Links column: About, Gallery, Membership, Promotions, Book Now, Contact
- Visit Us column: address (8961 W. Sahara Ave, Suite 106, Las Vegas NV 89117), phone (702-625-3838), email (beautygoalsLV@gmail.com), hours (Mon-Fri 10am-6pm, Sat 10am-4pm, Sun by appt)
- Footer bottom bar: copyright text left, Instagram + YouTube social icons right
  Social icon circles: 34px, border 1px solid rgba(185,160,104,0.2), hover border #B9A068
- On mobile (below 900px): collapse to 2 columns; below 600px: single column
- All internal links use Next.js <Link>
```

**Claude Code verification checklist:**
```
- [ ] Footer.tsx exists in /src/components/
- [ ] Background is #000000
- [ ] Four columns render on desktop
- [ ] Two columns on tablet (900px), one on mobile (600px)
- [ ] Address, phone, email all present and correct
- [ ] Hours listed correctly (Mon-Fri, Sat, Sun)
- [ ] CareCredit and Patientfi financing badges present
- [ ] Social icons render as circles with hover states
- [ ] Copyright text present in footer bottom bar
- [ ] Footer imported and rendered in layout.tsx below main content
- [ ] No TypeScript errors
```

---

### Step 1.7 — Create shared UI primitives

**Prompt Cursor:**
```
Create the following reusable components in /src/components/ui/:

1. Button.tsx
   Variants: 'gold' (bg #B9A068, text black), 'outline' (transparent bg, border+text #B9A068),
   'outline-white' (transparent bg, border+text white), 'black' (bg black, text white)
   Sizes: 'default' (padding 14px 32px), 'sm' (padding 10px 22px)
   Base styles: font Inter, 0.82rem, font-weight 600, letter-spacing 0.07em, uppercase,
   border-radius 2px, transition all 0.2s, cursor pointer
   Accept className prop to allow overrides
   Accept onClick, href (renders as Link if href provided), type props

2. SectionEyebrow.tsx
   A <span> with: font-size 0.72rem, letter-spacing 0.15em, uppercase, color #B9A068,
   font-weight 600, margin-bottom 16px, display block
   After the text, renders a 32px wide × 1.5px tall #B9A068 horizontal rule via ::after
   (implement as a separate <span> element below the text since ::after is tricky in Tailwind)

3. BookingStrip.tsx
   Full-width section with background #B9A068
   Accepts props: headline (string), subtext (string)
   Renders headline in Playfair Display italic (black), subtext (black/60%), 
   and a "Book a Free Consultation" black button linking to /contact
   Centered layout, padding 48px 24px
```

**Claude Code verification checklist:**
```
- [ ] /src/components/ui/Button.tsx exists with all 4 variants
- [ ] /src/components/ui/SectionEyebrow.tsx exists
- [ ] /src/components/ui/BookingStrip.tsx exists
- [ ] Button renders as <Link> when href prop is provided
- [ ] Button renders as <button> when no href (or onClick only)
- [ ] All variants have correct colors matching brand tokens
- [ ] SectionEyebrow renders the gold underline rule below text
- [ ] BookingStrip background is #B9A068 (teak), not any other color
- [ ] All components accept and apply className prop
- [ ] No TypeScript errors in any of the three files
```

---

## Phase 2 — Homepage

> **Goal:** Full homepage built with all 8 PRD-required sections, matching mockup layout and brand design.

---

### Step 2.1 — Homepage Hero section

**Prompt Cursor:**
```
Build the hero section for /src/app/page.tsx.

Layout: Two-column grid on desktop (1fr 1fr), stacked on mobile.
Background: #000000. Min-height: calc(100vh - 72px). Padding: 80px 24px. Max-width 1200px centered.

Left column:
- Eyebrow: "Las Vegas Premier Med Spa" (use SectionEyebrow but white/teak on dark)
- H1: 'Where <em>expertise</em> meets natural beauty.' — Playfair Display, italic,
  color white, clamp(2.8rem, 6vw, 4.8rem). The word "expertise" in color #B9A068.
- Subtext paragraph: color rgba(255,255,255,0.6), font-size 1rem, line-height 1.7, max-width 480px
  Text: "Michelle Tio-Nguyen, FNP-C — 10 years of master-level injectables, advanced lasers,
  and personalized aesthetic medicine at 8961 W. Sahara Ave."
- Two buttons side by side: "Book a Consultation" (gold variant, links /contact),
  "Explore Services" (outline-white variant, links /services)
- Membership note below buttons: "Membership from $99/mo — 10-15% off all services · Credits always roll over"
  font-size 0.8rem, color rgba(255,255,255,0.5), margin-top 20px

Right column (stats panel):
- Background: rgba(185,160,104,0.05), border: 1px solid rgba(185,160,104,0.15), border-radius 4px, padding 48px 40px
- 2x2 stats grid: "13+" / "Years medical experience", "10+" / "Years aesthetic medicine",
  "15+" / "Advanced treatments", "8K" / "Instagram followers"
  Stat number: Playfair Display, 2.8rem, color #B9A068
  Stat label: Inter, 0.75rem, color rgba(255,255,255,0.5)
- Below stats: "Treatments offered" label + pill list of 9 treatments
  Pills: font-size 0.72rem, padding 5px 11px, border 1px solid rgba(185,160,104,0.3),
  color rgba(255,255,255,0.65), border-radius 2px
  Treatments: Botox, Fillers, Sofwave, XERF, Aerolase, HydraFacial, Emsculpt Neo, Thread Lift, Microneedling
```

**Claude Code verification checklist:**
```
- [ ] Hero background is #000000 (pure black, not gray)
- [ ] H1 uses Playfair Display italic
- [ ] "expertise" word renders in #B9A068
- [ ] Two-column layout on desktop, stacked on mobile
- [ ] Both buttons present with correct variants and correct links
- [ ] Stats panel has 4 stats in 2x2 grid
- [ ] Stat numbers are #B9A068 color
- [ ] All 9 treatment pills render
- [ ] Membership note present with correct text
- [ ] Page does not overflow horizontally on mobile
```

---

### Step 2.2 — Social Proof Bar

**Prompt Cursor:**
```
Below the hero (still in page.tsx), add the social proof bar.

Background: #0D0D0D
Top and bottom borders: 1px solid rgba(185,160,104,0.15)
Padding: 20px 24px. Max-width 1200px inner content, centered.
Flex row, space-between, wraps on mobile.

Five proof items (centered, each has a number and a descriptor below):
1. "★ 5.0" / "Google rating"
2. "8,000+" / "Instagram followers"
3. "13 yrs" / "Medical expertise"
4. "CareCredit" / "Financing available"
5. "Patientfi" / "Payment plans"

Number style: Playfair Display, 1.4rem, color #B9A068
Descriptor style: Inter, 0.7rem, rgba(255,255,255,0.45), letter-spacing 0.06em, uppercase, margin-top 2px
```

**Claude Code verification checklist:**
```
- [ ] Bar sits directly below hero section
- [ ] Background is #0D0D0D (near-black, not pure black)
- [ ] All 5 proof items present with correct text
- [ ] Numbers/labels in correct color and font
- [ ] Wraps gracefully on mobile
- [ ] No extra margin/padding between hero and proof bar
```

---

### Step 2.3 — Services overview grid

**Prompt Cursor:**
```
Add a services preview section to page.tsx.

Background: #F9F6F0 (warm-white). Padding: 96px 24px. Max-width 1200px centered.

Header:
- SectionEyebrow: "Our Treatments"
- H2: "Everything your skin needs, under one roof." — Playfair Display, margin-bottom 12px
- Lead paragraph: Inter, 1.1rem, color #6B6860, max-width 640px, margin-bottom 48px

Services grid: auto-fill, minmax(260px, 1fr), gap 1px.
Grid background: rgba(185,160,104,0.1). Border: 1px solid rgba(185,160,104,0.1).

8 service cards (background white, padding 32px, hover background #F9F6F0):
For each card:
  - Emoji icon in a 40px circle (background rgba(185,160,104,0.12))
  - H4 (Playfair Display, font-weight 500)
  - Description paragraph (0.85rem, color #6B6860)
  - Price line (0.78rem, font-weight 600, color #B9A068)
  - "View treatment →" link (0.75rem, uppercase, color #6B6860, hover color #B9A068)

Services:
1. 💉 Botox & Neurotoxins / "Reduce fine lines and wrinkles, slim the jawline, or treat hyperhidrosis." / "Starting at $450"
2. ✨ Dermal Fillers / "Restore volume, enhance contour, and achieve facial balance." / "Starting at $550"
3. 🌊 Sofwave Non-Surgical Lift / "FDA-cleared ultrasound that lifts skin with zero downtime. One treatment." / "Consultation required"
4. ⚡ XERF Skin Tightening / "Dual-frequency radiofrequency for firmer, tighter skin. No needles." / "New — ask for pricing"
5. 💎 HydraFacial & Diamond Glow / "Medical-grade resurfacing, extraction, and deep hydration." / "Starting at $205"
6. 🔬 Aerolase Neo Elite / "650-microsecond laser treats 30+ conditions, safe for all skin types." / "Consultation required"
7. 💪 Emsculpt Neo / "Build muscle and eliminate fat simultaneously. 30% fat reduction on average." / "Packages available"
8. 🧵 Thread Lift / "Minimally invasive PDO threads for dramatic lifting without surgery." / "Consultation required"

Below grid: centered "View all services & pricing" outline-gold button linking to /services
```

**Claude Code verification checklist:**
```
- [ ] Section background is #F9F6F0 (warm-white)
- [ ] All 8 service cards present with correct content
- [ ] Card hover state changes background to #F9F6F0 (or slightly darker)
- [ ] Price line is #B9A068 on all cards
- [ ] "View treatment →" link color changes on hover
- [ ] Grid is responsive (wraps to fewer columns on mobile)
- [ ] "View all services" button links to /services
- [ ] No card content overflows its bounds on small screens
```

---

### Step 2.4 — About Michelle strip

**Prompt Cursor:**
```
Add the About Michelle section to page.tsx.

Background: white. Padding: 96px 24px. Max-width 1200px centered.
Two-column layout: image placeholder left, content right. Gap 80px. Stack on mobile.

Left: placeholder div styled as a portrait (aspect-ratio 3/4, max-height 520px,
background linear-gradient(135deg, #1a1a1a, #2a2520), border-radius 4px,
border 1px solid rgba(185,160,104,0.2), centered text "Michelle Tio-Nguyen / FNP-C"
in Playfair Display italic, color rgba(185,160,104,0.5))

Right:
- SectionEyebrow: "Meet Michelle"
- H2: "Master injector. Skin expert. Your partner." — margin-bottom 20px
- Lead paragraph: color #6B6860, margin-bottom 28px
  "Michelle Tio-Nguyen, FNP-C brings 13 years of medical expertise and a decade of
  aesthetic mastery to every appointment. Her approach: listen first, treat second —
  always preserving what makes you, you."
- Credential list (5 items, each with a 6px teak circle bullet):
  1. "Family Nurse Practitioner — Board Certified (FNP-C)"
  2. "Master injector — Botulinum Toxin, Dermal Filler, PDO Threads"
  3. "Certified in Regenerative Aesthetics & Advanced Anti-Aging"
  4. "Expert in cosmetic lasers: Aerolase, Sofwave, Erbium, IPL"
  5. "Regular attendee — national aesthetics conferences & trainings"
- Two buttons: "Meet the full team" (gold, links /about), "Book with Michelle" (outline, links /contact)
  Side by side, flex-wrap on mobile
```

**Claude Code verification checklist:**
```
- [ ] Two-column layout on desktop, stacked on mobile
- [ ] Image placeholder has correct gradient and styling
- [ ] All 5 credentials listed
- [ ] Bullet circles are #B9A068
- [ ] Both buttons present and link correctly
- [ ] Section background is white (not warm-white)
```

---

### Step 2.5 — Before/After preview

**Prompt Cursor:**
```
Add a before/after preview section to page.tsx.

Background: #F9F6F0. Padding: 96px 24px. Max-width 1200px centered.

Header:
- SectionEyebrow: "Real Results"
- H2: "Results that speak for themselves." margin-bottom 12px
- Lead: "Every photo is a real Beauty Goals LV client. No filters, no stock images."

Three before/after cards in a grid (3 columns desktop, 2 on tablet, 1 on mobile):

Each card:
- Background: #000000
- Border-radius: 4px
- Border: 1px solid rgba(185,160,104,0.12)
- Top section: two equal halves side by side
  Left half labeled "Before" (0.65rem, letter-spacing 0.1em, uppercase, color rgba(255,255,255,0.3))
  Right half labeled "After" (same style)
  Right half has border-left: 1px solid rgba(185,160,104,0.2)
  Both halves: min-height 200px, flex center, background linear-gradient gradient (dark)
- Bottom info strip: padding 14px 16px, background rgba(185,160,104,0.04)
  Treatment name: 0.8rem, font-weight 600, color white
  Area/detail: 0.72rem, color rgba(255,255,255,0.4), margin-top 2px

Three cards:
1. "Full Face Rejuvenation" / "Botox + Filler • 1 session"
2. "Acne Correction" / "Aerolase • 3 sessions"
3. "Facial Balancing" / "Filler • Cheeks + Chin"

Below cards: centered "View full gallery →" outline button linking to /gallery
```

**Claude Code verification checklist:**
```
- [ ] Three cards render in a grid
- [ ] Each card has Before/After labels side by side
- [ ] Cards have black background
- [ ] Info strip at bottom of each card
- [ ] "View full gallery" button links to /gallery
- [ ] Grid is responsive (3→2→1 columns)
```

---

### Step 2.6 — Testimonials section

**Prompt Cursor:**
```
Add a testimonials section to page.tsx.

Background: #000000. Padding: 96px 24px. Max-width 1200px centered.

Header:
- SectionEyebrow styled for dark bg: "Client Reviews" (teak color, same style)
- H2: "What our clients say." — Playfair Display, color white, margin-bottom 48px

Three testimonial cards in auto-fit grid (minmax 280px, 1fr), gap 24px:

Each card:
- Background: rgba(185,160,104,0.06)
- Border: 1px solid rgba(185,160,104,0.15)
- Border-radius: 4px, padding 28px
- Star rating: "★★★★★" color #B9A068, margin-bottom 12px, font-size 1rem
- Quote: color rgba(255,255,255,0.75), 0.88rem, line-height 1.7, margin-bottom 20px, italic
- Attribution row: initials circle (36px, bg rgba(185,160,104,0.2), color #B9A068) + name + detail

Three testimonials from the PRD:
1. Tasha R. — "She's precise, she listens to what your goals are..." / "Botox + Fillers · Verified Google Review"
2. Michelle A. — "She educates you about the treatments..." / "Botox + Chin Filler · Verified Google Review"
3. K.C. — "She looks at the patient as a whole person..." / "Multiple treatments · Verified Google Review"
```

**Claude Code verification checklist:**
```
- [ ] Section background is #000000
- [ ] All three testimonials present with correct quotes and attribution
- [ ] Stars are teak color
- [ ] Initials circles render correctly
- [ ] "Verified Google Review" source label present on all cards
- [ ] Cards are responsive (wrap to single column on mobile)
```

---

### Step 2.7 — Instagram feed strip + Homepage contact form

**Prompt Cursor:**
```
Add two more sections to page.tsx:

SECTION A — Instagram feed strip
Background: #F9F6F0. Padding: 96px 24px.

Header row (flex, space-between):
Left: SectionEyebrow "@beautygoalslv" + H2 "@beautygoalslv"
Right: "Follow us" outline button linking to https://instagram.com/beautygoalslv (target _blank)

6-tile grid (6 columns desktop, 3 on mobile):
Each tile: aspect-ratio 1, background linear-gradient(135deg, #1a1a1a, #252015),
border 1px solid rgba(185,160,104,0.08), cursor pointer, hover opacity 0.8,
centered label text (font-size 0.65rem, color rgba(185,160,104,0.4))
Labels: "Real results & tips", "Before & after", "Treatment reels", "Glow tips", "New services", "Behind the scenes"

SECTION B — Contact form strip
Background: #000000. Padding: 96px 24px. Max-width 1200px centered.
Two-column layout (1fr 1fr), stacked on mobile.

Left (contact info):
- SectionEyebrow: "Contact Us"
- H2: "Let's start your glow-up." — white, margin-bottom 20px
- Intro paragraph: rgba(255,255,255,0.55)
- Contact details (3 rows): 📍 Address, 📞 Phone, ✉️ Email
  Each row: flex, gap 14px, padding 16px 0, border-bottom 1px solid rgba(185,160,104,0.15)
  Label: 0.7rem, uppercase, letter-spacing 0.08em, color #B9A068, font-weight 600
  Value: white
- "⏱ We respond within 24 hours" badge: background rgba(185,160,104,0.1),
  border 1px solid rgba(185,160,104,0.2), color #B9A068, font-size 0.78rem, padding 8px 14px, border-radius 2px, margin-top 16px
- Financing row: "Financing:" label + CareCredit + Patientfi badges (same styling as footer)

Right (form):
5 fields: Full name (text), Email (email), Phone (tel), Treatment interested in (select with all services from PRD), Message (textarea)
All inputs: background white, border 1px solid rgba(185,160,104,0.2), border-radius 2px,
padding 12px 16px, font Inter 0.9rem, focus border #B9A068, focus outline none
Labels: 0.73rem, uppercase, letter-spacing 0.08em, color #6B6860, font-weight 600, display block, margin-bottom 7px
Submit button: gold variant, full width
Sub-note: "🔒 Your information is private and secure." — 0.78rem, color #6B6860, margin-top 10px
```

**Claude Code verification checklist:**
```
- [ ] Instagram strip has 6 placeholder tiles
- [ ] "Follow us" button links to correct Instagram URL
- [ ] Contact form has all 5 fields
- [ ] Select has full list of services as options
- [ ] Address, phone, email all correct (8961 W. Sahara, 702-625-3838, beautygoalsLV@gmail.com)
- [ ] "24 hours" response badge renders
- [ ] CareCredit and Patientfi badges present
- [ ] Form inputs have teak focus border
- [ ] Submit button is gold (not another color)
- [ ] Form is not actually wired up (static mockup) — no action/API yet
```

---

## Phase 3 — Inner pages

> **Goal:** All 6 inner pages built (About, Services, Gallery, Membership, Promotions, Contact) with correct routing, layouts, and content.

---

### Step 3.1 — Shared page layout components

**Prompt Cursor:**
```
Create two shared components used by all inner pages:

1. /src/components/PageHero.tsx
   Props: breadcrumb (string), breadcrumbHighlight (string), headline (string), subtext (string)
   Background: #000000, padding 72px 24px 60px, text-align center
   Border-bottom: 1px solid rgba(185,160,104,0.15)
   Inner max-width: 680px, centered
   Breadcrumb: flex, centered, font-size 0.73rem, uppercase, letter-spacing 0.06em,
   color rgba(255,255,255,0.3), margin-bottom 16px
   Breadcrumb highlight span: color #B9A068
   H1: Playfair Display italic, white, clamp(2.2rem, 5vw, 3.4rem), margin-bottom 16px
   Subtext: rgba(255,255,255,0.55), 1rem, line-height 1.7

2. /src/components/FinancingBadges.tsx
   A small horizontal row showing "Financing available:" label + CareCredit + Patientfi badges
   Accepts a 'theme' prop: 'dark' (for dark sections) or 'light' (for warm-white sections)
   Reusable across service pages, homepage, footer
```

**Claude Code verification checklist:**
```
- [ ] PageHero.tsx in /src/components/ with correct props interface
- [ ] FinancingBadges.tsx in /src/components/
- [ ] PageHero breadcrumb renders the highlighted segment in #B9A068
- [ ] PageHero background is #000000
- [ ] Both components have TypeScript prop interfaces defined
- [ ] No any types used
```

---

### Step 3.2 — About page

**Prompt Cursor:**
```
Create /src/app/about/page.tsx

Sections in order:

1. PageHero: breadcrumb "Home / About Us", headline "Meet the team behind your glow.",
   subtext "Three licensed professionals, one shared goal..."

2. Team section (background #F9F6F0, padding 96px 24px):
   SectionEyebrow "Our Providers" + H2 "Expert hands. Genuine care."
   Three-column team card grid (1 column on mobile):

   Each TeamCard:
   - Image placeholder: aspect-ratio 3/4, max-height 320px, dark gradient background,
     centered provider name in Playfair italic
   - Body: padding 24px
   - Name: Playfair Display, 1.2rem, font-weight 500
   - Title: 0.75rem, uppercase, letter-spacing 0.08em, color #B9A068, font-weight 600
   - Bio paragraph: 0.85rem, color #6B6860, line-height 1.65, margin-bottom 16px
   - Certification pills: small bordered pills (color #B9A068, border rgba(185,160,104,0.25))

   Michelle: FNP-C · CEO & Master Injector
   Certs: FNP-C Board Certified, Master Injector, PDO Threads, Sofwave Certified, Aerolase Trained, Regenerative Aesthetics
   Bio: full bio from PRD/mockup

   Jennifer Guizar: Advanced Medical Aesthetician
   Certs: HydraFacial Certified, Diamond Glow, Microneedling RF, Erbium Laser, PRX Peel, Laser Hair Removal

   Zayna Rodriguez: Advanced Medical Aesthetician
   Certs: HydraFacial Trained, Laser Treatments, Microneedling, Chemical Peels

3. Philosophy section (background white, padding 96px 24px):
   SectionEyebrow "Our Philosophy" + H2 "Beauty should feel like you — just better."
   Three-column grid of philosophy cards (stack on mobile):
   Each card: padding 32px, border-top 2px solid #B9A068
   Titles & descriptions from mockup:
   - "Personalized above all"
   - "Natural results, always"
   - "Education first"

4. BookingStrip: "Ready to meet the team?" / "Complimentary consultations with Michelle, Jennifer, or Zayna."
```

**Claude Code verification checklist:**
```
- [ ] /src/app/about/page.tsx exists and renders at /about
- [ ] PageHero present with correct text
- [ ] All 3 team cards present with names, titles, bios, and certs
- [ ] Cert pills render in teak border style
- [ ] Philosophy section has 3 items with teak top border
- [ ] BookingStrip at bottom links to /contact
- [ ] Page is responsive (team cards stack on mobile)
- [ ] No TypeScript errors
```

---

### Step 3.3 — Services page

**Prompt Cursor:**
```
Create /src/app/services/page.tsx

Sections:

1. PageHero: "Every treatment, tailored to you." / "15+ advanced services from injectables to body contouring..."

2. Main services section (background #F9F6F0, padding 96px 24px):

   Membership promo banner at top:
   Background #000000, border 1px solid rgba(185,160,104,0.25), border-radius 4px, padding 32px 40px
   Flex row (space-between): "Glow Getter Membership" heading (Playfair italic, white) +
   "10% off injectables · 15% off all other services" subtext + "$99/mo" price (Playfair, #B9A068) +
   "See all plans" outline button linking /membership

   Four service categories with consistent structure:
   Each category has:
   - Category tag (small teak-bordered pill)
   - Category description (muted text)
   - Service card grid (auto-fill minmax 280px, gap 20px)

   Each service card:
   - Background white, border 1px solid rgba(185,160,104,0.1), border-radius 4px, padding 24px
   - Hover: border-color #B9A068, subtle box-shadow
   - H4 (Playfair), description (muted), price row (flex space-between)

   CATEGORY 1 — Injectables
   Provider note: "Performed by Michelle Tio-Nguyen, FNP-C"
   Cards: Botox/Dysport/Xeomin/Daxxify, Dermal Fillers, Lip Filler
   (with prices from PRD: Botox $550, Dysport $600, Xeomin $450, Daxxify from $800, Letybo $650)
   (Fillers from $550 · Facial balancing from $1,100)
   (Lip Filler starting at $550)

   CATEGORY 2 — Facials & Lasers
   Provider note: "Performed by our advanced aestheticians"
   Cards: HydraFacial, Diamond Glow, Microneedling, IPL Photofacial, Chemical Peels, Erbium Laser Resurfacing
   (with all prices from PRD)

   CATEGORY 3 — Specialty Treatments
   Cards: Sofwave, XERF, Aerolase Neo Elite, Thread Lift

   CATEGORY 4 — Body Contouring
   Cards: Emsculpt Neo, Emsella

   Financing callout row at bottom:
   Background rgba(185,160,104,0.06), border 1px solid rgba(185,160,104,0.15), border-radius 4px
   "CareCredit and Patientfi accepted" text + badge pills

3. BookingStrip: "Not sure where to start?" / "Book a complimentary consultation and we'll build your personalized treatment plan."
```

**Claude Code verification checklist:**
```
- [ ] /src/app/services/page.tsx exists and renders at /services
- [ ] Membership banner present at top of services section
- [ ] All 4 categories present with correct headings and provider notes
- [ ] All services listed with correct names and prices from PRD
- [ ] Service card hover state changes border to teak
- [ ] Financing callout at bottom of services section
- [ ] BookingStrip at bottom
- [ ] Prices match PRD exactly (Botox $550, Dysport $600, etc.)
- [ ] No service is missing from the PRD list
```

---

### Step 3.4 — Gallery page

**Prompt Cursor:**
```
Create /src/app/gallery/page.tsx

1. PageHero: "Real clients. Real results." / "Every photo is an actual Beauty Goals LV client — no filters, no stock images."

2. Gallery section (background #F9F6F0, padding 96px 24px):

   Filter tabs row (flex, gap 8px, margin-bottom 40px, flex-wrap):
   5 filter buttons: "All results", "Botox & Fillers", "Facials & Lasers", "Body Contouring", "Acne & Pigmentation"
   Default active: "All results"
   Button styles: padding 9px 20px, font-size 0.75rem, uppercase, letter-spacing 0.07em,
   font-weight 600, border-radius 2px, border 1px solid rgba(185,160,104,0.25),
   color #6B6860, background white, transition all 0.2s
   Active/hover: background #B9A068, color black, border-color #B9A068
   Use React useState to track active filter

   Gallery grid: auto-fill minmax(260px, 1fr), gap 16px

   9 gallery items (before/after cards):
   Each item:
   - Background #000000, border-radius 4px, border 1px solid rgba(185,160,104,0.1)
   - Hover: border-color #B9A068, transition 0.2s
   - Top section: two equal halves side by side (flex)
     Each half: min-height 160px, flex center column, background gradient (dark)
     Label: "Before" or "After" — 0.62rem, uppercase, letter-spacing 0.12em, rgba(255,255,255,0.3)
     Right half has border-left 1px solid rgba(185,160,104,0.15)
   - Info strip: padding 14px 16px
     Treatment name: 0.82rem, font-weight 600, color #2D2B27
     Meta: 0.72rem, color #6B6860, margin-top 3px

   9 items with filter categories and content:
   Category "Botox & Fillers": Full Face Rejuvenation (Botox+Filler·1 session), Facial Balancing (Cheeks+Chin filler), Under-Eye Filler (Tear trough·1 syringe), Jawline Slimming (Masseter Botox·40 units)
   Category "Facials & Lasers": Acne Correction (Aerolase Neo·3 sessions), Melasma Treatment (Laser·4 sessions), Acne Scarring (Microneedling RF·3 sessions)
   Category "Body Contouring": Emsculpt Neo (Abdomen·4 sessions)
   Category "Acne & Pigmentation": Acne Correction (already listed — show in both)

   Implement filter: clicking a filter tab shows only cards with matching category.
   "All results" shows all 9 cards. Use data attributes or state array.
```

**Claude Code verification checklist:**
```
- [ ] /src/app/gallery/page.tsx exists at /gallery
- [ ] 5 filter buttons present
- [ ] Active filter button highlights in teak (#B9A068)
- [ ] Clicking filter shows only matching cards (others hidden)
- [ ] "All results" shows all 9 cards
- [ ] All 9 gallery items present
- [ ] Each item has Before/After label pair
- [ ] Info strip shows treatment name and meta
- [ ] Filter state managed with useState
- [ ] Grid is responsive
```

---

### Step 3.5 — Membership page

**Prompt Cursor:**
```
Create /src/app/membership/page.tsx

1. PageHero: "Your skin, on a plan." / "Four membership tiers designed to make consistent, expert skincare achievable at every budget..."

2. Membership section (background #F9F6F0, padding 96px 24px):

   Four-column tier card grid (4 desktop, 2 tablet, 1 mobile). One card is featured.

   Each tier card:
   - Background white, border 1px solid rgba(185,160,104,0.15), border-radius 4px, overflow hidden
   - Hover: border-color #B9A068
   - Featured card (Glow Goals): border-color #B9A068, border-width 2px, position relative
     "Most popular" badge: absolute top, centered, background #B9A068, color black,
     font-size 0.65rem, uppercase, letter-spacing 0.1em, font-weight 700, padding 4px 14px, border-radius 0 0 4px 4px

   Card header (background #000000, padding 28px 24px):
   - Tier name: Playfair Display italic, 1.1rem, color white
   - Pitch: 0.82rem, rgba(255,255,255,0.5), line-height 1.5, margin-top 8px
   - Price row: dollar sign (1.2rem, teak) + amount (Playfair, 2.4rem, teak) + "/mo" (0.75rem, rgba(255,255,255,0.4))

   Card body (padding 24px):
   - Value estimate: "Estimated value: ~$X+/mo" — 0.75rem, color #B9A068, padding 8px 12px,
     background rgba(185,160,104,0.07), border-radius 2px, margin-bottom 16px
   - Inclusions list: each item with a ✓ in teak, font-size 0.81rem, color #6B6860,
     padding 6px 0, border-bottom 1px solid rgba(185,160,104,0.08)
   - 6-month milestone note: teak italic text in a tinted box
   - CTA button: full width, Glow Goals card gets gold button, others get outline button
     Button text: "Sign up — call (702) 625-3838"

   TIER DATA (from PRD):
   Glow Getter / $99 / "The entry point to member savings" / value ~$130+
   Inclusions: 10% off injectables, 15% off other services, 10% off retail, credits roll over
   No milestone bonus

   Glow Up / $175 / "One monthly treatment included" / value ~$210-$275
   Inclusions: HydraFacial, Medium Depth Peel, IPL Rejuvenation, Acne Photofacial,
   Melasma Laser Spot Treatment, Laser Hair Reduction (up to 1 large area)
   Milestone: Free Microneedling or Fractionated Laser after 6 months ($400 value)

   Glow Goals / $225 / FEATURED — "Most popular" / "Premium monthly treatments" / value ~$269-$500+
   Inclusions: HydraFacial Deluxe ($269), Diamond Glow Deluxe ($275), Melasma Laser x2,
   PRX No-Peel Peel, Emsella, Fractionated Laser Resurfacing (face), ZO-3 Step Peel,
   Laser Hair Reduction (2 medium or 1 XL area)
   Milestone: Free Microneedling with RF or Erbium Laser after 6 months ($650 value)

   Ultimate Goals / $499 / "The most advanced monthly treatments" / value ~$650-$1,000+
   Inclusions: Microneedling with PRP/PRF/Exosome/Rejuran, Pixel-8 Microneedling RF,
   EmsculptNeo (any area), Erbium Fully Ablative, Fractionated Laser Full Face+Neck+Chest,
   PRX Biostimulator x2, Keravive Scalp+LED, Emsella x2, Aerolase Face/Lip/Neck
   Milestone: Free Sofwave Lift or Daxxify ($1,000 value)

3. Comparison table:
   H3 "Plan comparison" — Playfair Display, margin-bottom 24px
   Table with sticky first column (feature names) and 4 tier columns
   Rows: Monthly treatment included, 10% off injectables, 15% off other services,
   Credits roll over, 6-month milestone bonus, Access to Emsculpt/Emsella, Advanced laser treatments
   Checkmarks in teak, dashes in rgba(185,160,104,0.25), bonus text where applicable
   Overflow-x: auto wrapper for mobile

4. BookingStrip: "Ready to become a member?" / "Call us or send a message — we'll find the right plan."
```

**Claude Code verification checklist:**
```
- [ ] /src/app/membership/page.tsx exists at /membership
- [ ] All 4 tier cards render with correct names and prices
- [ ] Only ONE card has "Most popular" badge (Glow Goals)
- [ ] Featured card (Glow Goals) has thicker teak border
- [ ] All inclusions lists are complete and accurate per PRD
- [ ] Milestone bonuses present on Glow Up, Glow Goals, Ultimate
- [ ] Glow Goals CTA is gold button, others are outline
- [ ] Comparison table renders with all 7 rows
- [ ] Table has overflow-x scroll wrapper
- [ ] Teak checkmarks (✓) and muted dashes render correctly
- [ ] Grid: 4 cols desktop, 2 tablet, 1 mobile
```

---

### Step 3.6 — Promotions page

**Prompt Cursor:**
```
Create /src/app/promotions/page.tsx

1. PageHero: "Current specials." / "Limited-time offers on treatments and memberships."

2. Promotions section (background #F9F6F0, padding 96px 24px):

   Three promo cards in auto-fill grid (minmax 320px), gap 24px:

   Each promo card:
   - Background white, border 1px solid rgba(185,160,104,0.12), border-radius 4px, overflow hidden
   - Banner section (background #000000, padding 28px, border-bottom 2px solid #B9A068):
     - Tag: 0.68rem, uppercase, letter-spacing 0.1em, color #B9A068, font-weight 700, display block, margin-bottom 10px
     - Name: Playfair Display italic, 1.3rem, color white, margin-bottom 6px
     - Discount: 0.85rem, rgba(255,255,255,0.55)
   - Body: padding 24px
     - Description: 0.85rem, muted, line-height 1.6, margin-bottom 16px
     - Gold CTA button (sm size): "Claim this offer" or "Book your consult" or "Get started" — links to /contact
     - Expiry/note: "⏱" + small text — 0.75rem, muted, margin-top 12px

   Promos:
   1. Tag: "New treatment — intro pricing" / Name: "XERF Skin Tightening" / Discount: "Special introductory rate — limited appointments"
   Desc: "Be among the first to experience XERF — our newest dual-frequency radiofrequency treatment. No needles, no downtime."
   Note: "Limited spots available — contact us for pricing"

   2. Tag: "New client special" / Name: "Complimentary Consultation + $50 Off" / Discount: "$50 credit toward your first treatment"
   Desc: "First time at Beauty Goals LV? Book a complimentary consultation and receive $50 credit toward any treatment booked on the same visit."
   Note: "Valid for new clients only · One per person"

   3. Tag: "Bundle & save" / Name: "Tattoo Removal Package" / Discount: "Buy 5 sessions, get the 6th free"
   Desc: "Commit to your full removal journey and save. Sizes from 2x2 ($100) to 10x10 ($300)."
   Note: "Ongoing offer · Cannot combine with membership discount"

   Member savings fallback box below cards:
   Background #000000, border 1px solid rgba(185,160,104,0.15), border-radius 4px, padding 48px, text-align center
   Headline (Playfair italic, white): "Year-round savings with a membership"
   Subtext (rgba white 0.45): "Members save 10-15% on every visit, every month — no waiting for a promotion."
   Gold button: "View membership plans" → links /membership
```

**Claude Code verification checklist:**
```
- [ ] /src/app/promotions/page.tsx exists at /promotions
- [ ] All 3 promo cards render with correct content
- [ ] Each card has black banner with teak bottom border
- [ ] Tag text in teak color
- [ ] CTAs link to /contact
- [ ] Expiry/note present on each card
- [ ] Member savings fallback box present below cards
- [ ] "View membership plans" button links to /membership
```

---

### Step 3.7 — Contact page

**Prompt Cursor:**
```
Create /src/app/contact/page.tsx

1. PageHero: "Book your consultation." / "All consultations are complimentary. We respond within 24 hours."

2. Contact section (background #F9F6F0, padding 96px 24px):

   Two-column layout: left (contact info + map) | right (form card). Stack on mobile.
   Left column max-width on desktop, right column: fixed 480px then grows.

   Left column:
   - SectionEyebrow: "Get in touch"
   - H2: "We'd love to meet you." margin-bottom 28px
   - 4 contact detail rows (📍 Address, 📞 Phone, ✉️ Email, 📸 Instagram):
     Each row: flex, gap 14px, padding 16px 0, border-bottom 1px solid rgba(185,160,104,0.15)
     Label: teak uppercase 0.7rem font-weight 600
     Value: body text, address line breaks preserved
   - Business hours section:
     Label: teak uppercase 0.7rem font-weight 600, margin-bottom 10px
     Hours grid (two columns): Mon-Fri 10am-6pm, Sat 10am-4pm, Sun By appointment
     Each row: flex space-between, 0.82rem, border-bottom 1px solid rgba(185,160,104,0.1)
   - "⏱ We respond within 24 hours" badge (teak background rgba, border, rounded 2px, 0.78rem, margin-top 20px)
   - Map placeholder: height 280px, dark gradient background, border 1px solid rgba(185,160,104,0.15),
     border-radius 4px, centered text "📍 Map — 8961 W. Sahara Ave, Las Vegas", margin-top 32px

   Right column (form card):
   Background white, border 1px solid rgba(185,160,104,0.12), border-radius 4px, padding 36px
   - "Send us a message" heading: Playfair italic, margin-bottom 24px
   - 5 form fields (same styling as homepage form): Full name*, Email*, Phone, Treatment select, Message textarea
   - Submit button: gold, full width
   - Privacy note: "🔒 Your information is private and never shared." — 0.78rem, muted, margin-bottom 0
   - Callout box below button: background rgba(185,160,104,0.06), border, border-radius 3px, padding 14px
     "Prefer to call? (702) 625-3838 — Or text — we answer both." — small teak number
```

**Claude Code verification checklist:**
```
- [ ] /src/app/contact/page.tsx exists at /contact
- [ ] Address: 8961 W. Sahara Avenue, Suite 106, Las Vegas NV 89117
- [ ] Phone: (702) 625-3838 (correct format)
- [ ] Email: beautygoalsLV@gmail.com
- [ ] Hours table: Mon-Fri 10am-6pm, Sat 10am-4pm, Sun by appointment
- [ ] Map placeholder renders
- [ ] Form has all 5 fields with correct labels
- [ ] Treatment select has full list of services as options
- [ ] "24 hours" badge renders in teak
- [ ] Form is not wired to a backend (static mockup)
- [ ] Both columns stack on mobile
```

---

## Phase 4 — Polish, SEO & launch prep

> **Goal:** Metadata, redirects, accessibility, responsiveness audit, and performance basics all complete.

---

### Step 4.1 — SEO metadata for all pages

**Prompt Cursor:**
```
Add Next.js metadata exports to every page file using the Metadata API (not <head> tags).

Each page needs a unique title and description following the "[Treatment] Las Vegas — Beauty Goals LV" pattern:

/                → "Med Spa Las Vegas | Beauty Goals LV — Botox, Fillers, Facials & More"
                   desc: "Beauty Goals LV is Las Vegas's premier med spa. Expert Botox, fillers, Sofwave, HydraFacial, Emsculpt, and more — led by Michelle Tio-Nguyen, FNP-C."
/about           → "About Us | Beauty Goals LV — Michelle Tio-Nguyen, FNP-C"
                   desc: "Meet the Beauty Goals LV team: Michelle Tio-Nguyen (FNP-C), Jennifer Guizar, and Zayna Rodriguez. 13+ years of aesthetic expertise in Las Vegas."
/services        → "Med Spa Services Las Vegas | Beauty Goals LV"
                   desc: "15+ advanced treatments: Botox, fillers, Sofwave, XERF, Aerolase, HydraFacial, Emsculpt Neo, thread lift, and more. Starting at $99/mo membership."
/gallery         → "Before & After Gallery | Beauty Goals LV Las Vegas"
                   desc: "Real before and after results from Beauty Goals LV clients. Botox, fillers, laser treatments, Emsculpt, facial balancing, and more."
/membership      → "Membership Plans | Beauty Goals LV Las Vegas"
                   desc: "Join the Beauty Goals LV Glow Getter program. Four membership tiers from $99/mo with 10-15% savings on all treatments. Credits always roll over."
/promotions      → "Current Promotions | Beauty Goals LV Las Vegas"
                   desc: "Current promotions and special offers at Beauty Goals LV. Intro pricing on XERF, new client specials, and bundle savings."
/contact         → "Book a Consultation | Beauty Goals LV Las Vegas"
                   desc: "Book your complimentary consultation at Beauty Goals LV, Las Vegas. Call (702) 625-3838 or send a message — we respond within 24 hours."

Also add to root layout.tsx:
- metadataBase: new URL('https://beautygoalslv.com')
- openGraph defaults (site name, locale, type)
- robots: index, follow
```

**Claude Code verification checklist:**
```
- [ ] Every page file exports a metadata const (not generateMetadata)
- [ ] All 7 pages have unique title and description
- [ ] Titles follow the "[keyword] Las Vegas" pattern
- [ ] metadataBase set in layout.tsx
- [ ] openGraph object present in layout.tsx
- [ ] No page is missing metadata export
- [ ] npm run build shows no metadata-related warnings
```

---

### Step 4.2 — URL redirects for legacy routes

**Prompt Cursor:**
```
Add Next.js redirects in next.config.ts to handle the old site's URL structure.

In next.config.ts, add a redirects() function returning these permanent (308) redirects:
/sofwave         → /services
/xerf            → /services
/aerolase-neo-elite → /services
/thread-lift     → /services
/facial          → /services
/emsculpt-neo    → /services
/other-services  → /services
/booking-page    → /contact
/about-us        → /about

All redirects: permanent: true (308 status code)
```

**Claude Code verification checklist:**
```
- [ ] next.config.ts has redirects() async function
- [ ] All 9 legacy paths are listed
- [ ] All redirects are permanent: true
- [ ] npm run build completes without config errors
- [ ] Test: visiting /sofwave in dev redirects to /services
- [ ] Test: visiting /about-us redirects to /about
- [ ] Test: visiting /booking-page redirects to /contact
```

---

### Step 4.3 — Accessibility audit fixes

**Prompt Cursor:**
```
Review and fix accessibility issues across all components:

1. Nav.tsx: Add aria-label="Main navigation" to <nav>. Add aria-expanded to the Services dropdown button. Add aria-label="Open menu" / "Close menu" to hamburger button.

2. All form inputs: Ensure every <input>, <select>, <textarea> has a corresponding <label> with htmlFor matching the input's id. Add required attribute to required fields.

3. All buttons: Ensure every icon-only button has aria-label. Ensure all interactive elements are keyboard focusable.

4. Focus styles: Add a visible focus ring to all interactive elements using Tailwind's focus-visible:ring-2 focus-visible:ring-teak utility (define teak in ring config).

5. Images: All <img> tags and placeholder divs used as images should have role="img" and aria-label describing what they represent.

6. Headings: Audit all pages to ensure heading hierarchy is correct (one h1 per page, h2 → h3 → h4 in order, no skipped levels).

7. Color contrast: Ensure rgba(255,255,255,0.55) text on black background passes WCAG AA (4.5:1 ratio). If it fails, increase opacity to 0.65.

8. Add <main> wrapper with id="main-content" and a skip link at the top of layout.tsx:
   "Skip to main content" link that is visually hidden but visible on focus, links to #main-content
```

**Claude Code verification checklist:**
```
- [ ] Nav has aria-label="Main navigation"
- [ ] Hamburger button has aria-label
- [ ] All form inputs have matching htmlFor/id pairs
- [ ] Required fields have required attribute
- [ ] Focus rings visible on all interactive elements (keyboard test)
- [ ] Skip link present in layout.tsx and functional
- [ ] <main> element wraps page content with id="main-content"
- [ ] No heading levels are skipped on any page
- [ ] One h1 per page (verify all 7 pages)
- [ ] npm run build passes with no accessibility-related errors
```

---

### Step 4.4 — Mobile responsiveness audit

**Prompt Cursor:**
```
Do a systematic mobile responsiveness pass across all pages and fix any issues:

Breakpoints to verify: 375px (iPhone SE), 390px (iPhone 14), 768px (tablet), 1024px (laptop), 1280px (desktop)

Specific fixes needed:

1. Homepage hero: On mobile, both columns stack vertically, buttons are full width, stats grid stays 2x2 but smaller numbers
2. Services grid: On 375px, cards are single column with no horizontal overflow
3. Membership tiers: On mobile, all 4 tier cards stack to single column with correct spacing
4. Gallery grid: On 375px, single column
5. Navigation: Hamburger menu opens without horizontal scroll
6. Footer: On 375px, single column, address text wraps correctly
7. All section padding: Reduce from 96px to 48px on mobile (768px and below)
8. All max-width containers: Use padding-x of 16px on mobile (not 24px)
9. Typography: All headings use clamp() so they scale smoothly
10. Comparison table on Membership page: Has overflow-x: auto wrapper and doesn't break layout

Test each fix and confirm no horizontal scroll exists at 375px on any page.
```

**Claude Code verification checklist:**
```
- [ ] No horizontal scroll at 375px on any page (use browser DevTools)
- [ ] Hero stacks correctly on mobile
- [ ] All grids (services, gallery, team) collapse to single column at 600px
- [ ] Membership tiers stack to single column on mobile
- [ ] Section padding reduces on mobile (verify in DevTools)
- [ ] Nav hamburger works without overflow
- [ ] Footer is single column at 375px
- [ ] Comparison table scrolls horizontally without breaking layout
- [ ] All h1/h2 headings use clamp() font-sizes
- [ ] Typography remains readable at 375px (no tiny text)
```

---

### Step 4.5 — Performance basics

**Prompt Cursor:**
```
Apply these performance optimizations before launch:

1. Fonts: Confirm next/font is being used (not @import in CSS or <link> in <head>). Add display: 'swap' to both font configs if not already set.

2. Images: Create /public/images/ directory. Add a placeholder logo file (even a simple SVG). Wherever a div is used as an image placeholder, add a comment: // TODO: Replace with <Image> from next/image when real photos are available

3. Preload key routes: In layout.tsx metadata, add alternates for canonical URL.

4. Add a simple /src/app/not-found.tsx 404 page:
   - Dark background (#000000)
   - "404" in large Playfair Display teak number
   - "Page not found" heading
   - Brief message: "The page you're looking for doesn't exist."
   - Gold button linking back to homepage: "Back to Beauty Goals LV"

5. Add /src/app/robots.txt route:
   export GET function returning:
   User-agent: *
   Allow: /
   Sitemap: https://beautygoalslv.com/sitemap.xml

6. Run: npm run build
   Fix ALL TypeScript errors and build warnings before proceeding.
   Do not suppress errors with @ts-ignore.
```

**Claude Code verification checklist:**
```
- [ ] next/font used for all fonts (no CSS @import for fonts)
- [ ] display: 'swap' set on both font configs
- [ ] /public/images/ directory exists
- [ ] TODO comments on all image placeholder divs
- [ ] /src/app/not-found.tsx exists and renders a styled 404 page
- [ ] 404 page has a link back to homepage
- [ ] /src/app/robots.txt route exists
- [ ] npm run build completes with ZERO errors
- [ ] npm run build completes with ZERO TypeScript errors
- [ ] Bundle size reported — note any chunks over 200kb for future optimization
```

---

## Phase 5 — Final Claude Code verification (full site audit)

> Run this as one comprehensive check after all phases are complete.

**Claude Code — full audit prompt:**
```
Perform a complete audit of the beautygoalslv Next.js project. Check the following:

ROUTING
- Confirm these routes exist and render: / /about /services /gallery /membership /promotions /contact
- Confirm these redirects work: /sofwave→/services, /xerf→/services, /aerolase-neo-elite→/services, /about-us→/about, /booking-page→/contact

BRAND COMPLIANCE
- Confirm teak color (#B9A068) is used for: all CTA buttons, all eyebrow elements, all price displays, hover states, the "Most popular" badge
- Confirm black (#000000) is used for: nav background, hero sections, dark section backgrounds, tier card headers, footer
- Confirm warm-white (#F9F6F0) is used for: content section backgrounds (not pure white)
- Confirm Playfair Display italic is used for: hero h1, page hero h1, all h2 display headings, logo, tier names
- Confirm Inter is used for: all body text, nav links, form labels, buttons

CONTENT ACCURACY (cross-check against PRD)
- Pricing: Botox $550, Dysport $600, Xeomin $450, Daxxify from $800, Letybo $650
- Pricing: Lip Filler from $550, Cheeks from $600, Jaw from $1,100, Chin from $600
- Pricing: HydraFacial $205, Deluxe $269, Diamond Glow Express $215, Deluxe $275
- Pricing: Microneedling $375, with RF from $650, with PRP $625, with Exosome $675
- Membership: Glow Getter $99, Glow Up $175, Glow Goals $225, Ultimate Goals $499
- Address: 8961 W. Sahara Avenue, Suite 106, Las Vegas, NV 89117
- Phone: (702) 625-3838
- Email: beautygoalsLV@gmail.com
- Hours: Mon-Fri 10am-6pm, Sat 10am-4pm, Sun by appointment
- Only Glow Goals tier has "Most popular" badge

PRD REQUIREMENTS (P1 items must all be verified)
- [ ] Sticky nav with mega-menu showing all 15+ services in grouped dropdown
- [ ] "Book Now" CTA present on every page in the nav
- [ ] All service pages show pricing (none blank)
- [ ] Footer has full address, phone, email, hours
- [ ] Contact form has treatment select with full service list
- [ ] "We respond within 24 hours" present on contact/homepage form
- [ ] CareCredit and Patientfi mentioned on services page AND homepage (not just Emsculpt)
- [ ] Gallery has filter tabs for all 5 categories
- [ ] Membership page has only ONE "Most popular" badge
- [ ] All 9 legacy URL redirects configured in next.config.ts

BUILD & QUALITY
- [ ] npm run build passes with zero errors
- [ ] npm run build passes with zero TypeScript errors
- [ ] No console errors on any page in the browser
- [ ] No broken internal links (every <Link> goes to a valid route)
```

---

## Post-launch checklist (outside Cursor scope)

These require client-side setup, not code:

| Task | Owner | Notes |
|---|---|---|
| Connect booking embed from Aesthetic Record | Client | Replace `/contact` link with embedded widget or branded redirect page |
| Upload real before/after photos | Client | Replace all placeholder divs with `<Image>` components |
| Connect contact form to email | Developer | Use Resend, SendGrid, or Formspree. Add API route at `/api/contact` |
| Add Google Reviews widget embed code | Client | Replace static testimonials with live widget |
| Set up Google Analytics (GA4) | Client | Add gtag to layout.tsx or use next-ga |
| Verify domain and SSL at beautygoalslv.com | Client/Host | Point DNS to Vercel or hosting provider |
| Submit sitemap to Google Search Console | Client | After deployment at production URL |
| Connect Instagram feed API | Developer | Use Instagram Basic Display API or a service like Curator.io |
| Add CareCredit/Patientfi badge assets | Client | Get official badge files from each financing provider |
| Test booking flow end-to-end | Both | Confirm Aesthetic Record redirect works correctly on live domain |

---

*Build plan prepared with Claude (Anthropic) — Beauty Goals LV website rebuild — June 2026*
