---
name: Industrial Prestige
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#544341'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#877270'
  outline-variant: '#dac1bf'
  surface-tint: '#954742'
  primary: '#2a0002'
  on-primary: '#ffffff'
  primary-container: '#4a0e0e'
  on-primary-container: '#cc726d'
  inverse-primary: '#ffb3ad'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#1a0b01'
  on-tertiary: '#ffffff'
  tertiary-container: '#33200f'
  on-tertiary-container: '#a3866f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#3d0506'
  on-primary-fixed-variant: '#77302d'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#e1c0a7'
  on-tertiary-fixed: '#291808'
  on-tertiary-fixed-variant: '#59422f'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  deep-burgundy: '#4A0E0E'
  subtle-gold: '#C5A059'
  industrial-taupe: '#8C715B'
  off-white: '#F9F9F9'
  text-main: '#1A1A1A'
typography:
  headline-display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style

This design system establishes a narrative of "Industrial Prestige," merging the rugged reliability of commercial logistics with the refined elegance of investment services. The brand personality is authoritative, seasoned, and meticulously organized, targeting high-value corporate clients and industrial partners.

The visual style is a **Corporate Modern** evolution. It utilizes fluid, organic curves derived from the brand's logo—specifically circular motifs and sweeping arcs—to soften the industrial context. High-quality whitespace and a restricted, luxurious palette communicate a premium service tier, while sharp, clean typography maintains a functional, no-nonsense commercial edge. The emotional response should be one of absolute trust, stability, and professional excellence.

## Colors

The palette is anchored by **Deep Burgundy**, a color that evokes legacy and high-stakes commitment. This is contrasted against **Pure White** and **Light Gray** backgrounds to maintain a clean, modern aesthetic.

**Subtle Gold** is reserved strictly for accents, iconography, and high-level calls to action, providing a "premium" layer without becoming ostentatious. **Industrial Taupe** serves as a bridge between the primary burgundy and the neutral backgrounds, often used in secondary decorative arcs or subtle dividers. Typography primarily uses a near-black for maximum legibility against the light background architecture.

## Typography

The typography system relies on a triad of modern sans-serifs to distinguish between hierarchy and function. **Manrope** is used for headlines, providing a balanced, geometric confidence. **Work Sans** is the workhorse for body text, chosen for its exceptional readability in both digital and print industrial contexts. **Hanken Grotesk** is used for labels and technical data, offering a sharp, systematic feel.

For "Industrial Prestige," we utilize uppercase styling for labels and secondary headlines to reinforce a sense of institutional permanence. Line heights are generous to ensure the layout feels airy and premium.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop, centered within the viewport to maintain a curated, editorial feel. 

- **Desktop:** A 12-column grid with 24px gutters. Content is contained within a 1280px max-width to prevent line lengths from becoming unreadable.
- **Mobile:** A 4-column fluid grid with 16px margins. 
- **The "Curve" Exception:** Large-scale background elements and hero images should utilize the "fluid arc"—asymmetrical circular masks that break the grid vertically, mirroring the fluid swoosh of the corporate logo.

Spacing follows an 8px base unit. Section gaps are intentionally large (80px+) to allow the brand's premium colors and imagery to breathe.

## Elevation & Depth

This system avoids heavy drop shadows in favor of **Tonal Layers** and **Ambient Depth**. 

Hierarchy is established through surface color shifts:
1. **Base:** Light Gray (#F5F5F5) for the main canvas.
2. **Surface:** Pure White (#FFFFFF) for cards and interactive containers.
3. **Elevated:** White surfaces with an extremely soft, diffused shadow (15% opacity Burgundy tint, 20px blur) to suggest a gentle lift.

Circular elements and icons often use a subtle inner-glow or a very light gradient to mimic the physical "button" or "token" aesthetic seen in the reference material.

## Shapes

The shape language is a deliberate contrast between **Soft Rectangles** and **Perfect Circles**. 

UI containers (cards, inputs, buttons) use a **Soft (0.25rem)** radius. This maintains a professional, "squared-away" industrial look while avoiding the harshness of sharp corners. In contrast, decorative elements, icon containers, and image masks utilize **Perfect Circles** or extreme fluid curves. This juxtaposition reflects the balance between structured investment (the grid) and fluid growth (the curves).

## Components

### Buttons
- **Primary:** Deep Burgundy background with White text. Soft 4px radius. No border.
- **Secondary:** Transparent background with a 1px Subtle Gold border and Gold text.
- **Tertiary:** Pure White background with Burgundy text and a subtle ambient shadow.

### Cards
Cards should be Pure White with a Soft (0.25rem) radius. Use a 1px Light Gray border for definition. For "Premium" cards, use a Subtle Gold top-border (2px).

### Iconography
Icons should be housed within circular containers. Use Burgundy for the icon glyph and a very light tint of Burgundy or Gold for the circular background.

### Input Fields
Fields use a Light Gray fill with a bottom-only 2px border in Industrial Taupe. On focus, the border transitions to Deep Burgundy.

### Lists & Tables
Industrial data should be presented with high contrast. Use alternating row colors (White and Off-White) with Hanken Grotesk labels for table headers to maintain a technical, precise appearance.