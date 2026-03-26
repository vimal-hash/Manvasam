# Manvasam — Tactile Editorial Landing Page

An award-level, "Tactile Editorial" Next.js landing page for Manvasam, a premium B2B coconut products manufacturer & exporter.

## Design System

### Philosophy: "Modern Industrial Editorial"
Inspired by high-end coffee table books and Awwwards-level sites. Every pixel is intentional.

### Color Palette
| Token        | Hex       | Usage                          |
|------------- |---------- |-------------------------------|
| Forest       | `#0A210F` | Headlines, CTAs, dark section |
| Cream        | `#E5DCC5` | Accents, sustainability bg    |
| Linen        | `#F8F5F2` | Primary background            |
| Charcoal     | `#1A1A1A` | Footer, body copy             |
| Border       | `#D1CDC7` | Architectural 1px borders     |

### Typography Trinity
| Role       | Font              | Style              |
|----------- |------------------ |-------------------|
| Headlines  | Playfair Display  | Serif Bold/Italic  |
| Body       | DM Sans           | Sans Light/Regular |
| Data/Specs | JetBrains Mono    | Monospace          |

### Key Design Features
- **Film Grain**: 2% SVG noise filter overlay on entire page
- **Custom Cursor**: `mix-blend-mode: difference`, expands on hover with contextual text
- **16-Column Grid**: Offset layouts for non-templated feel
- **Hexagon Mesh**: Molecular structure SVG pattern on dark section
- **Graph Paper**: 1px grid on products section
- **Topographic Map**: Faint topo lines on hero
- **Vertical Ruler**: Precision growth-stage ruler on About section
- **Specs Marquee**: Stock-ticker ribbon with live quality data
- **Blueprint Ghost**: Technical overlay on product card hover
- **Circular Progress**: Animated SVG path drawing "100% Organic" badge
- **Massive Footer Logo**: Brand name at 18vw, clipped by edges
- **Parallax Layers**: Text and images move at different scroll speeds

### Spacing Rules
- Section gap: `clamp(100px, 12vw, 180px)` — never less than 100px
- Body line-height: 1.8 (editorial leading)
- Mono letter-spacing: 0.05em–0.15em

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion 11**
- **pnpm**

## Getting Started

```bash
pnpm install
pnpm dev
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system CSS, grain, cursor
│   ├── layout.tsx           # Font imports, metadata
│   └── page.tsx             # Page composition
├── components/
│   ├── CustomCursor.tsx     # mix-blend-mode cursor
│   ├── Header.tsx           # Architectural nav
│   ├── Hero.tsx             # "Titan" hero with parallax
│   ├── About.tsx            # Narrative flow + Bento Vision/Mission
│   ├── Process.tsx          # Dark industrial section + marquee
│   ├── Products.tsx         # Museum catalog + blueprint hover
│   ├── Sustainability.tsx   # Eco-premium with circular progress
│   ├── FunFact.tsx          # Editorial callout
│   └── Footer.tsx           # Anchor with massive brand name
└── lib/
    └── animations.ts        # Shared Framer Motion variants
```

## Images
Replace placeholder images in `public/images/` with your actual product photography:
- `hero-coconut.png` — Hero macro shot
- `palm-grove.png` — Plantation photo
- `worker-back.png` — Worker/founder
- `coconut-halves.png`, `coconut-pieces.png` — Process shots
- `factory-line.png` — Facility interior
- `coconut-oil.png`, `desiccated-coconut.png`, `coconut-milk.png` — Product shots
- `sustainable-coconut.png` — Sustainability section

---
© 2025 Manvasam Dharma Agro & Farm Trading & Co
