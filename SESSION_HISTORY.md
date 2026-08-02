# Session History - Cursor Glow / Aura Effect Implementation

**Date**: 2026-07-29

---

## Summary

Implemented interactive cursor-following glow/aura effects across the application, inspired by the `hero-aura-preview.html` reference file. Added effects to the Osciva fold and Portfolio page hero section.

---

## Changes Made

### 1. Header.tsx - Commented Out Products Dropdown Items
**File**: `src/app/components/Header.tsx`

**Action**: Commented out JoomlaXpress and LeadFlux items from the Products dropdown menu to be added later.

```tsx
{/* JoomlaXpress — we will add it later */}
{/* <li><Link href="/#joomlaxpress">...</Link></li> */}

{/* LeadFlux — we will add it later */}
{/* <li><Link href="/#leadflux">...</Link></li> */}
```

---

### 2. globals.css - Fixed Govt Band Eyebrow Color
**File**: `src/app/globals.css`

**Action**: Added specific CSS rule to improve text contrast in the government section.

```css
.govt-band__copy .eyebrow {
  color: var(--char);
}
```

**Reason**: The eyebrow text "Government & enterprise · 10" was blending with the cream background.

---

### 3. Sections3.tsx - Added SphereParticles to Osciva Fold
**File**: `src/app/components/Sections3.tsx`

**Action**: Added the same SphereParticles component (from Osciva page) to the Osciva fold on the home page.

```tsx
import SphereParticles from '@/components/SphereParticles'

export function Osciva() {
  const visualRef = useRef<HTMLDivElement>(null);
  return (
    // ...
    <div ref={visualRef} className="osciva__visual" ...>
      <div className="product-hero__mesh" ...>
        <div className="product-hero__mesh-blob" style={{ width: '300px', height: '300px', ... }}></div>
      </div>
      <SphereParticles rootRef={visualRef} />
    </div>
  );
}
```

**Added**:
- Red blob effect (300px × 300px, 0.3 opacity)
- SphereParticles component for 3D particle animation

---

### 4. PageHero.tsx - Added Aura Effect to Portfolio Hero
**File**: `src/app/components/PageHero.tsx`

**Action**: Implemented dual-layer, color-shifting aura effect matching `hero-aura-preview.html`.

**Features**:
- Mouse tracking with smooth trailing (0.12 lerp factor)
- Two color arrays cycling through: gold → red → amber
- Phase-based color mixing (faster when moving)
- CSS custom properties for position (`--mx`, `--my`) and colors (`--c1`, `--c2`)

```tsx
export default function PageHero({ breadcrumb, title, lede }: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const auraRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Brand colour stops
    const C1 = [[232, 181, 71], [208, 0, 0], [240, 140, 60]]  // inner: gold, red, amber
    const C2 = [[208, 0, 0], [232, 181, 71], [120, 40, 10]]    // outer: red, gold, deep

    // Mouse tracking + color cycling logic
    // ...
  }, [])

  return (
    <section className="page-hero" ref={heroRef}>
      <div className="page-hero__aura" ref={auraRef} ...></div>
      {/* ... */}
    </section>
  )
}
```

---

### 5. subpages.css - Aura Effect Styles
**File**: `src/app/subpages.css`

**Action**: Added dual-layer radial gradient styles for the aura effect.

```css
/* ── Aura Effect: two blended radial glows whose colours shift as you move ── */
.page-hero__aura {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 1;
}

.page-hero__aura::before {
  background: radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%),
    rgba(var(--c1, 232, 181, 71), 0.22), transparent 60%);
}

.page-hero__aura::after {
  background: radial-gradient(460px circle at var(--mx, 50%) var(--my, 50%),
    rgba(var(--c2, 208, 0, 0), 0.14), transparent 65%);
  filter: blur(6px);
}
```

**Specifications**:
- Inner glow: 300px circle, 0.22 opacity
- Outer glow: 460px circle, 0.14 opacity, 6px blur
- Colors controlled by JS-driven CSS variables

---

### 6. subpages.css - Content Z-Index Fix
**File**: `src/app/subpages.css`

**Action**: Increased `page-hero__inner` z-index to ensure content stays above the aura.

```css
.page-hero__inner {
  position: relative;
  z-index: 2;  /* Changed from 1 */
  max-width: 900px;
}
```

---

## Technical Details

### Aura Effect Algorithm

1. **Mouse Tracking**: Captures mouse position relative to hero bounds (0-100%)
2. **Smooth Trailing**: Uses linear interpolation (lerp) with 0.12 factor for smooth cursor following
3. **Color Cycling**: 
   - Advances phase faster when moving (0.012) vs idle (0.004)
   - Interpolates between predefined brand color stops
4. **CSS Updates**: Updates custom properties every frame via `requestAnimationFrame`

### Color Palette

| Layer | Colors (RGB) | Opacity | Size |
|-------|-------------|---------|------|
| Inner (`--c1`) | gold(232,181,71) → red(208,0,0) → amber(240,140,60) | 0.22 | 300px |
| Outer (`--c2`) | red(208,0,0) → gold(232,181,71) → deep(120,40,10) | 0.14 | 460px (+ 6px blur) |

---

## Files Modified

| File | Change |
|------|--------|
| `src/app/components/Header.tsx` | Commented out JoomlaXpress & LeadFlux dropdown items |
| `src/app/globals.css` | Added eyebrow color fix for govt band + mobile padding for Hero & Navbar |
| `src/app/components/Sections3.tsx` | Added SphereParticles + red blob to Osciva fold |
| `src/app/components/PageHero.tsx` | Added complete aura effect implementation |
| `src/app/subpages.css` | Added aura styles + z-index fix |

---

## Reference File

- **`c:\Users\Dell\Desktop\adhyatech_nextjs\hero-aura-preview.html`**
  - Standalone HTML demo showcasing the dual-layer color-shifting aura effect
  - Used as reference for implementation

---

### 6. globals.css - Mobile Padding for Hero & Navbar
**File**: `src/app/globals.css`

**Action**: Added mobile-specific padding for Hero section and Header/Navbar.

**768px breakpoint**:
```css
.header__inner {
  padding: 16px 0;  /* Increased navbar vertical padding */
}

.hero {
  padding: 60px 0 100px;  /* Added hero spacing */
}
```

**480px breakpoint**:
```css
.header__inner {
  padding: 14px 0;  /* Slightly reduced for small screens */
}

.hero {
  padding: 50px 0 80px;  /* Adjusted for phones */
}
```

**Reason**: Mobile devices needed more breathing room in the hero section and navbar for better readability and touch interactions.

---

## Notes

- The aura effect is **disabled on mobile** (< 768px) for performance
- The effect uses pure CSS + vanilla JavaScript (no external dependencies)
- Performance optimized with `requestAnimationFrame` loop
- Colors cycle through brand palette: gold, red, and amber tones

---

*Session end - 2026-07-29*

---

# Session History - TextHoverEffect Component

**Date**: 2026-07-30

---

## Summary

Created a new `TextHoverEffect` component with animated writing stroke and cursor-following red spotlight hover effect. The component features gold outline animation on load and a blurry red glow that follows the cursor inside the text when hovered.

---

## Changes Made

### 1. TextHoverEffect.tsx - New Component
**File**: `src/components/TextHoverEffect.tsx`

**Features**:
- Animated gold stroke writing effect (4 seconds duration)
- Cursor-following red spotlight with blur effect
- Uses project brand colors (gold: #E8B547, red: #D00000, #A80000, #FF1A1A)
- SVG-based with precise coordinate mapping using `getScreenCTM()`
- Font size: 190px
- Blur filter: 8px stdDeviation for soft edges

```tsx
export const TextHoverEffect = ({
  text,
  className,
  triggerAnimation,
}: {
  text: string;
  className?: string;
  triggerAnimation?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 250, y: 75 });

  // Precise coordinate mapping using SVG CTM
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const pt = svgRef.current.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svgRef.current.getScreenCTM().inverse());
    setCursorPos({ x: svgP.x, y: svgP.y });
  };
```

---

## Technical Details

### Gradient Colors

**Gold (text stroke)**:
- `#E8B547` (brand-gold)

**Red (hover effect)**:
- `#D00000` (brand-red)
- `#A80000` (brand-red-2)
- `#FF1A1A` (brand-red-3)

### Cursor Tracking Algorithm

Uses SVG native coordinate transformation:
1. Creates SVGPoint from client coordinates
2. Applies inverse of screen CTM (Current Transformation Matrix)
3. Results in exact SVG viewBox coordinates (0-500, 0-150)

### Mask Configuration

- Black background rectangle covers entire SVG
- White circle (radius: 40px) follows cursor
- Blur filter: Gaussian blur with 8px standard deviation
- Transition: 0.02s for near-instant following

---

## Files Created

| File | Description |
|------|-------------|
| `src/components/TextHoverEffect.tsx` | Animated text with cursor-following hover effect |

---

## Notes

- The spotlight effect only appears when hovering over the text
- Uses framer-motion for smooth animations
- Blur filter creates soft, glowing edges instead of hard borders
- All colors match the project's brand palette from `globals.css`

---

*Session end - 2026-07-30*
