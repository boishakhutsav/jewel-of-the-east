# Jewel of the East — Design Brief

## Overview
A luxury Himalayan boutique hotel website. Premium editorial feel with high-end serif typography, organic rich local color tones, and immersive full-width media treatment.

## Typography
- **Display**: `'Lora', serif` — high-end editorial serif for brand prestige
- **Body**: `'Satoshi', sans-serif` — clean geometric sans for readability
- **Mono**: `'JetBrains Mono', monospace` — code and data

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0B2B1B` (Deep Himalayan Emerald) | Solid background anchor |
| `--card` | `#FDFBF7` (Misty Pearl Cream) | Text card spaces |
| `--foreground` | `#F5F0E8` | Primary text on dark backgrounds |
| `--accent` | Warm gold | Highlights, borders, glows |
| `--primary` | `#1A4D3A` | Primary actions, buttons |
| `--muted` | `#1A3D2E` | Secondary backgrounds |

## Shadows
- `shadow-elevated`: `0 20px 40px -12px oklch(0.2 0.02 50 / 0.15)`
- `shadow-card`: `0 4px 16px -4px oklch(0.2 0.02 50 / 0.08)`
- `shadow-hero`: `0 20px 60px -16px oklch(0.1 0.02 155 / 0.3)`
- `shadow-crossfade`: `0 0 40px oklch(var(--accent) / 0.15)`

## Animations
- `crossfade-in`: `0.8s cubic-bezier(0.4, 0, 0.2, 1)` — text title entrance
- `crossfade-out`: `0.6s cubic-bezier(0.4, 0, 0.2, 1)` — text title exit
- `fade-in-up`: `0.6s ease-out` — general content entrance
- `float`: `4s ease-in-out infinite` — decorative floating elements

## Utilities
- `.media-frame`: Full-width un-bordered background media frames
- `.crossfade-text`: Immersive cross-fading text titles
- `.bg-hero-overlay`: Gradient overlay for hero sections
- `.border-gold`: Gold accent borders
- `.glow-accent`: Warm gold glow effect

## Layout Approach
- Full-width media frames with no borders
- Text cards on Misty Pearl Cream backgrounds
- Deep Himalayan Emerald as the solid background anchor
- Editorial serif typography for headers to establish brand prestige
