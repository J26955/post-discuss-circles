

# Transform Reddit MVP into Forex Trading Robot Shop

## Overview
Replace the current Reddit-style forum with a professional Forex Trading Robot (EA) shop website featuring a hero section, pricing tiers, features list, and testimonials.

## Design Direction
- Dark, professional theme (navy/dark blue backgrounds) with gold/green accents -- conveying trust and finance
- Clean, modern SaaS-style layout
- Single-page scrolling design

## Changes

### 1. Update Design System (`src/index.css`)
- Replace Reddit orange/purple palette with a finance-oriented scheme:
  - Primary: Gold/amber (trust, premium feel)
  - Accent: Green (profit, growth)
  - Background: Dark navy for a professional trading look
- Remove Reddit-specific variables (upvote, downvote, vote-inactive)

### 2. Update Tailwind Config (`tailwind.config.ts`)
- Remove Reddit-specific color tokens (upvote, downvote, vote-inactive)
- Add any new animation keyframes (fade-in, slide-up for sections)

### 3. Create New Components

**`src/components/HeroSection.tsx`**
- Bold headline: "Automated Forex Trading That Works"
- Subtext about the EA's capabilities
- CTA buttons: "Get Started" and "View Live Results"
- Background with subtle gradient/glow effect
- Stats bar: trades executed, success rate, users

**`src/components/FeaturesSection.tsx`**
- Grid of 6 feature cards with icons (from lucide-react):
  - Automated Trading, Stop Loss/Take Profit, Multi-Currency Support, Backtested Results, 24/7 Trading, Easy Setup
- Each card with icon, title, and short description

**`src/components/PricingSection.tsx`**
- 3 pricing tiers in cards:
  - Basic ($50): Core EA, 1 account, email support
  - Pro ($150 -- highlighted): Core EA, 3 accounts, priority support, updates
  - VIP ($300): Core EA, unlimited accounts, VIP support, custom settings, lifetime updates
- Monthly subscription option ($30/mo) shown as alternative
- "Most Popular" badge on Pro tier

**`src/components/TestimonialsSection.tsx`**
- 3 testimonial cards with:
  - Quote text, user name, trading results summary
  - Star ratings
- Clean card layout

**`src/components/ShopHeader.tsx`**
- Replace Reddit header with shop navigation
- Logo: "ForexBot Pro" or similar
- Nav links: Features, Pricing, Testimonials, Contact
- CTA button: "Buy Now"

**`src/components/Footer.tsx`**
- Simple footer with links, disclaimer about trading risks, copyright

### 4. Update Main Page (`src/pages/Index.tsx`)
- Replace Reddit feed layout with vertical sections:
  - ShopHeader
  - HeroSection
  - FeaturesSection
  - PricingSection
  - TestimonialsSection
  - Footer

### 5. Remove Reddit Components
- Delete: `PostCard.tsx`, `VoteButtons.tsx`, `SubredditSidebar.tsx`, `SortingTabs.tsx`, `Header.tsx`
- Delete: `src/data/mockPosts.ts`

### 6. Update Routes (`src/App.tsx`)
- No route changes needed -- single page is sufficient for MVP

## Technical Notes
- All components use existing shadcn/ui primitives (Card, Button, Badge)
- Icons from lucide-react (already installed)
- Fully responsive with Tailwind breakpoints
- No new dependencies required
