---
name: Cinematic Technical Athlete
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#b4ccbb'
  on-secondary: '#203529'
  secondary-container: '#364c3e'
  on-secondary-container: '#a3bbaa'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#a2a3a3'
  on-tertiary-container: '#38393a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d0e9d6'
  secondary-fixed-dim: '#b4ccbb'
  on-secondary-fixed: '#0a2014'
  on-secondary-fixed-variant: '#364c3e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

This design system embodies the intersection of high-performance engineering and the raw, disciplined world of professional boxing. The aesthetic is **Cinematic Minimalism**—a high-contrast, moody atmosphere that treats code like art and movement like mathematics. 

The visual language draws inspiration from the rigid geometry of a boxing ring—linear, structural, and purposeful—but layers it with organic textures like subtle film grain and atmospheric blurs to evoke a futuristic, premium feel. The interface should feel like a high-end editorial piece or a sophisticated HUD, favoring extreme whitespace to allow "hero" content to breathe.

Key stylistic pillars:
- **Atmospheric Depth:** Deep, infinite backgrounds layered with cosmic gradients.
- **Precision Typography:** Dramatic scale shifts to create a hierarchy that feels both urgent and intellectual.
- **Architectural Layout:** Sharp edges and intentional grid lines that mimic the ropes and floor of a ring.

## Colors

The palette is anchored in shadows to maintain a premium, nocturnal aesthetic. 

- **Primary Accent:** Luminous Emerald (#10B981) is used sparingly for critical actions and data highlights, representing energy and precision.
- **Deep Accents:** Forest Green (#1A2F23) is used for subtle gradients and background depth, providing an organic feel to the digital space.
- **Base Layers:** Near-black (#050505) and Deep Charcoal (#0B0B0B) serve as the foundation, creating a high-contrast canvas for white typography.
- **Typography:** Off-white (#F9F9F9) is the standard for text to reduce eye strain while maintaining a crisp, editorial look.

## Typography

The typography system relies on extreme contrast in scale. 

**Display and Headlines** use **Sora** for its technical yet organic geometric construction. Display-XL should be used for section transitions and hero statements, often overlapping or interacting with background elements. 

**Body Text** uses **Inter** for its neutral, high-readability qualities, ensuring that long-form technical writing remains approachable.

**Labels and Metadata** use **JetBrains Mono** to inject a "software engineer" DNA into the design system, used for technical specs, dates, and category tags.

Instructions:
- Use all-caps for labels and small headings to evoke a "broadcast" or "technical manual" feel.
- Implement "Kinetic Typography" on scroll for Display-XL, with subtle horizontal shifts as the user moves down the page.

## Layout & Spacing

The layout is a **Fixed Grid** system that prioritizes negative space. 

- **The Ring Grid:** Use a 12-column grid for desktop. Elements should be aligned strictly to these columns. Thin, 1px lines (Color: #1A2F23 at 50% opacity) can be used to visually divide sections, mimicking the floor of a boxing ring.
- **Sectioning:** Vertical spacing is aggressive (160px gaps) to force focus on one piece of content at a time.
- **Responsive Behavior:** On mobile, the grid collapses to 4 columns. Large display type should scale down significantly but maintain its bold weight to remain the focal point.

## Elevation & Depth

This system avoids traditional drop shadows. Depth is created through **Tonal Layering** and **Atmospheric Blurs**.

- **Surfaces:** Most surfaces are flat and flush with the background. 
- **Z-Axis Hierarchy:** Depth is communicated via parallax movement. Background elements (gradients and film grain) move slower than the foreground text.
- **Glassmorphism:** Reserved exclusively for navigation bars and floating technical overlays. Use a 20px backdrop blur with a 1px border (#F9F9F9 at 10% opacity) to separate the element from the background noise.
- **Film Grain:** A persistent, low-opacity grain overlay sits at the highest Z-index to give the digital UI a tactile, cinematic texture.

## Shapes

The design system uses **Sharp (0px)** corners for all primary UI elements. 

The intentional absence of rounded corners reinforces the "Athletic" and "Engineering" personas—it is precise, uncompromising, and structural. 

**Exceptions:** 
- Decorative "organic" shapes used in the background (blobs/gradients) should be soft and blurry to contrast with the sharp, hard-edged UI components.
- Buttons and input fields must remain perfectly rectangular.

## Components

### Buttons
Primary buttons are sharp rectangles with a solid #10B981 background and #050505 text. On hover, they should transition to a ghost state (outline only) with a slight "punchy" scale-up (1.02x).

### Chips / Tags
Use the `label-mono` typography. Tags are enclosed in a 1px border (#10B981) with no background. They represent "Technical Skills" or "Boxing Weight Class."

### Lists
Lists of projects or fight stats should be separated by horizontal 1px lines. On hover, the entire row should reveal a faint Forest Green (#1A2F23) glow behind the text.

### Input Fields
Minimalist 1px bottom-border only. Labels use `label-mono` and sit above the line. Focus state turns the bottom border into a vibrant Emerald gradient.

### Cards
Cards are "Invisible" containers. No background color, no shadow. They rely on the grid and typography to define their boundaries. Images within cards should have a subtle desaturation filter that returns to full color on hover.

### Progress Bars
Used for "Skill Levels" or "Training Progress." A simple 2px line. The "filled" portion is Emerald; the "unfilled" portion is a dark Forest Green.