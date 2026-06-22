# Design Brief

## Direction

Jewel of the East — Premium Himalayan hotel group website with an editorial magazine aesthetic. Warm cream surfaces, deep ocean blue CTAs, and gold accents evoke mountain serenity and trustworthy luxury for family travelers.

## Tone

Refined warmth with editorial confidence. Like opening a high-end travel magazine — spacious, elegant, and inviting without being cold or corporate.

## Differentiation

Elegant serif display headings (Fraunces) on warm cream backgrounds with deep ocean blue CTAs and gold quote marks — a hotel site that feels like a curated story, not a booking engine.

## Color Palette

| Token      | OKLCH         | Role                          |
| ---------- | ------------- | ----------------------------- |
| background | 0.96 0.012 75 | Warm cream page background    |
| foreground | 0.18 0.02 50  | Deep charcoal text            |
| card       | 0.98 0.01 75  | Slightly brighter cream cards |
| primary    | 0.42 0.14 240 | Deep ocean blue — CTAs, links |
| accent     | 0.72 0.15 80  | Warm gold — highlights, icons |
| muted      | 0.92 0.015 75 | Soft cream for sections       |

## Typography

- Display: Fraunces — headings, hero text, property names
- Body: General Sans — paragraphs, UI labels, navigation
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base` or `text-lg`

## Elevation & Depth

Warm, soft shadows that lift cards without harshness. Three tiers: `shadow-card` for content cards, `shadow-elevated` for hero overlays and featured blocks, `shadow-hotel` for property cards. No glassmorphism — solid warm surfaces only.

## Structural Zones

| Zone    | Background        | Border            | Notes                                      |
| ------- | ----------------- | ----------------- | ------------------------------------------ |
| Header  | bg-card + border-b | 1px border-b      | Sticky, warm cream with subtle shadow      |
| Content | bg-background     | —                 | Alternating bg-muted/30 every other section |
| Footer  | bg-muted/40 + border-t | 1px border-t   | Warm cream, slightly deeper                |

## Spacing & Rhythm

Spacious vertical rhythm: `py-20` between major sections, `gap-8` within content groups, `px-4 md:px-8 lg:px-12` horizontal page padding. Micro-spacing: `gap-2` for inline elements, `p-6` for card padding.

## Component Patterns

- Buttons: `rounded-lg`, `bg-primary text-primary-foreground`, hover `brightness-110` with `transition-smooth`
- Cards: `rounded-xl`, `bg-card`, `shadow-card`, hover `shadow-elevated`
- Badges: `rounded-full`, `bg-accent text-accent-foreground`, small uppercase labels

## Motion

- Entrance: `fade-in-up` on scroll for sections, staggered 0.1s between children
- Hover: buttons brighten, cards lift with `shadow-elevated`, images scale subtly
- Decorative: `float` animation on decorative elements, carousel auto-advances every 3s

## Constraints

- English language only throughout
- Light mode primary; dark mode is secondary fallback
- No raw color literals — always use semantic tokens
- No arbitrary Tailwind color classes

## Signature Detail

Gold accent quote marks (`text-accent`) on testimonial cards and a warm gradient underline beneath the hero headline — the moment that tells visitors this is not a generic hotel template.
