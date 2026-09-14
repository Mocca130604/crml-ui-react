# CRML-UI REACT (crml-ui-react)

[![npm version](https://img.shields.io/npm/v/crml-ui-react.svg?style=flat-square&color=CCFF00&labelColor=0D0D0D)](https://www.npmjs.com/package/crml-ui-react)
[![npm downloads](https://img.shields.io/npm/dm/crml-ui-react.svg?style=flat-square&color=00F0FF&labelColor=0D0D0D)](https://www.npmjs.com/package/crml-ui-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-FF007F.svg?style=flat-square&labelColor=0D0D0D)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Types-FFD600.svg?style=flat-square&labelColor=0D0D0D)](https://www.typescriptlang.org/)
[![Documentation Hub](https://img.shields.io/badge/Docs-ui.crml.my.id-CCFF00.svg?style=flat-square&labelColor=0D0D0D)](https://ui.crml.my.id/)

> **Definitive Neubrutalism, Y2K Cyber Mecha & Streetwear Design System for React 18/19 & Next.js**  
> 70 Production Primitives • Zero Ambient Blur Policy • Strict Mechanical Spring Rebound Physics • 100% Vue Master Parity

---

## ⚡ Overview & Design Philosophy

**`crml-ui-react`** is a production-grade, highly tactile Neubrutalism and Y2K Cyber Mecha design system library built for **React 18 / 19**, **Next.js (App & Pages router)**, **Vite**, and modern TypeScript web apps. 

Synthesizing playful Neubrutalism, retro 90s OS window chrome, cyber-mecha cockpit instruments, and streetwear graphic poster aesthetics, CRML-UI strictly enforces the **Zero Ambient Blur** doctrine: **no fuzzy drop-shadows, no translucent ambient blurs—only crisp, high-contrast 2.5px - 3.0px solid ink borders and mechanical offset drop-shadows.**

### Core Tenets:
1. **Zero Ambient Blur Policy**: All elevation is achieved via solid ink offsets (`box-shadow: 4px 4px 0px #0D0D0D`). Never use `filter: blur()` or soft rgba shadows.
2. **Mechanical Spring Rebound**: Interactive arcade-button physics simulated via realistic cubic bezier curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`) with tactile active depressions.
3. **Hyper-Contrast Mecha Palette**: Electric Lime (`#CCFF00`), Hot Pink (`#FF007F`), Cyber Cyan (`#00F0FF`), Sunburst Yellow (`#FFD600`), and Obsidian Black (`#0D0D0D`).
4. **100% Ecosystem Parity**: Full styling, prop naming, and behavioral parity with the master Vue library (`crml-ui`), Svelte (`crml-ui-svelte`), and HTML5 (`crml-ui-html`).

---

## 🎨 Design Token Specification Matrix

Consume identical CSS variables across your entire React application:

```css
:root {
  /* Primitive Mecha Palette */
  --crt-electric-lime: #CCFF00;
  --crt-hot-pink: #FF007F;
  --crt-cyber-cyan: #00F0FF;
  --crt-sunburst-yellow: #FFD600;
  --crt-obsidian: #0D0D0D;
  --crt-pure-white: #FFFFFF;
  --crt-smoke: #1A1A1A;

  /* Semantic UI Tokens */
  --crml-bg-base: #FAF9F6;
  --crml-bg-surface: #FFFFFF;
  --crml-text-main: #0D0D0D;
  --crml-text-muted: #525252;
  --crml-border-brutal: 3px solid #0D0D0D;
  --crml-shadow-brutal: 4px 4px 0px #0D0D0D;
  --crml-shadow-brutal-sm: 2px 2px 0px #0D0D0D;
  --crml-shadow-brutal-lg: 6px 6px 0px #0D0D0D;
  --crml-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 📦 Installation & Setup

### 1. Install via npm, pnpm, or yarn:

```bash
npm install crml-ui-react
# or
pnpm add crml-ui-react
# or
yarn add crml-ui-react
```

### 2. Import CSS Styles:

In your root file (e.g. `main.tsx`, `App.tsx`, or Next.js `app/layout.tsx`):

```tsx
// main.tsx or layout.tsx
import 'crml-ui-react/style.css';
```

---

## 🚀 React Quickstart & Component Usage

All 70 primitives are strictly typed with TypeScript declarations (`.d.ts`) and support standard React props, event handlers, and children composition:

```tsx
import React, { useState } from 'react';
import {
  CrmlNeubrutalCard,
  CrmlButton,
  CrmlBouncyButton,
  CrmlInput,
  CrmlCheckbox,
  CrmlBadge,
  CrmlStickerBadge,
  CrmlRetroDialog,
  CrmlMarquee
} from 'crml-ui-react';

export default function App() {
  const [handle, setHandle] = useState('');
  const [active, setActive] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div style={{ padding: '2rem', background: '#FAF9F6', minHeight: '100vh', fontFamily: 'monospace' }}>
      {/* Ticker Crawler */}
      <CrmlMarquee text="CRML-UI REACT /// 70 TACTILE PRIMITIVES /// 0% AMBIENT BLUR" variant="lime" />

      {/* Main Container */}
      <div style={{ maxWidth: '640px', margin: '2rem auto' }}>
        <CrmlNeubrutalCard variant="cyan">
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <CrmlStickerBadge variant="pink" star>OFFICIAL DROP</CrmlStickerBadge>
            <CrmlBadge variant="primary">REACT 18/19</CrmlBadge>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, margin: '0 0 1rem 0' }}>
            TACTILE REACT INTERACTION
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <CrmlInput
              label="OPERATOR CALLSIGN"
              placeholder="@mecha_pilot"
              value={handle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHandle(e.target.value)}
            />

            <CrmlCheckbox
              label="Enable Spring Rebound Engine"
              checked={active}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setActive(e.target.checked)}
              variant="lime"
            />

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <CrmlBouncyButton variant="lime" onClick={() => alert(`Initiated for ${handle || 'Pilot'}!`)}>
                LAUNCH SEQUENCE 🚀
              </CrmlBouncyButton>

              <CrmlButton variant="outline" onClick={() => setDialogOpen(true)}>
                OPEN DIALOG 🖲️
              </CrmlButton>
            </div>
          </div>
        </CrmlNeubrutalCard>
      </div>

      {/* Retro 90s OS Window Dialog */}
      <CrmlRetroDialog
        isOpen={dialogOpen}
        title="SYSTEM_CONFIRMATION.EXE"
        onClose={() => setDialogOpen(false)}
      >
        <p>Tactile spring physics confirmed. No soft blurs detected.</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
          <CrmlButton variant="lime" size="sm" onClick={() => setDialogOpen(false)}>
            CONFIRM ACTION
          </CrmlButton>
        </div>
      </CrmlRetroDialog>
    </div>
  );
}
```

---

## 📋 Complete Catalog Inventory (70 Primitives)

`crml-ui-react` exports 70 production primitives partitioned into Atomic tiers:

### ⚡ Atoms (16 Primitives)
- `CrmlButton`: Core tactile arcade button with mechanical displacement.
- `CrmlBouncyButton`: Exaggerated 4px spring rebound button.
- `CrmlBadge`: High-contrast pill chip for status and tags.
- `CrmlStickerBadge`: Tilted vinyl street badge (-4° to +6°) with adhesive peel hover.
- `CrmlStampBadge`: Weathered ink stencil stamps (`APPROVED`, `SOLD OUT`, `REJECTED`).
- `CrmlInput` / `CrmlTextarea`: Ink-bordered inputs with solid neon focus indicators.
- `CrmlNumberInput`: Tactile increment/decrement stepper input.
- `CrmlCheckbox`: Chunky square checkbox with solid spring checkmark.
- `CrmlNeonSwitch`: Cyber mecha toggle switch with neon halo illumination.
- `CrmlBlobAvatar`: Squircle & organic morphing avatar with status ring.
- `CrmlMarquee`: Continuous marquee announcement ticker crawler.
- `CrmlProgress`: Segmented ink bar charging indicator.
- `CrmlKbd`: Mechanical keyboard keycap indicator.
- `CrmlDivider` / `CrmlWavyDivider`: Sawtooth, organic wave, and ink-line SVG dividers.
- `CrmlSpeechBubble`: Comic dialogue balloon with angled pointer tail.
- `CrmlPixelIconWrapper`: 16-bit stepped pixel boundary wrapper.
- `CrmlSkeleton`: High-contrast geometric skeleton loader.
- `CrmlTooltip`: Solid ink popover tooltip.

### 🧩 Molecules (22 Primitives)
- `CrmlDatePicker`: Tactile calendar with Month/Year grid and Range Mode.
- `CrmlColorPicker`: Neubrutalism HSV swatch & hex color selector.
- `CrmlDualRangeSlider`: Dual-handle minimum/maximum interval range slider.
- `CrmlPillTabs`: Segmented navigation selector with tactile sliding indicator.
- `CrmlSegmentedControl`: Inline mechanical mode switcher.
- `CrmlDropdown`: Multi-layer popover select menu.
- `CrmlSearchTagFilter`: Search command bar with dynamic tag filtration.
- `CrmlEmojiRatingSlider`: Expressive rating slider with animated mood changes.
- `CrmlFloatingEmojiBar`: Floating social reaction dock with spring counters.
- `CrmlOtpInput`: Segmented one-time authentication code input boxes.
- `CrmlStepper`: Multi-step progress flow controller.
- `CrmlRadioGroup`: Chunky radio button selection suite.
- `CrmlPagination`: Page number controller with tactile step arrows.
- `CrmlBreadcrumb`: Hierarchical breadcrumb pathway.
- `CrmlAlert`: High-visibility notification banners with category styling.
- `CrmlCodeBlock`: Terminal snippet box with syntax coloring & one-click copy.
- `CrmlFaceIdToggle`: Cyberpunk biometric scanner trigger toggle.
- `CrmlStatusMatrix`: System health grid telemetry widget.
- `CrmlTagInput`: Interactive tokenized tag creator.
- `CrmlVaporwaveVisualizer`: Synthwave cassette audio frequency visualizer.
- `CrmlDoodleContainer`: Hand-drawn sketchy border container.

### 🏛️ Organisms (32 Primitives)
- `CrmlNeubrutalCard` / `CrmlCard`: Foundational ink containers with 4px drop shadow.
- `CrmlGlassCard`: Frosted mecha panel with solid stroke borders.
- `CrmlStickyNote`: Tilted desk memo note with push pin.
- `CrmlRetroDialog`: 90s OS window dialog modal with draggable titlebar.
- `CrmlFunkyAccordion`: Bouncy collapse FAQ accordion.
- `CrmlToast`: Floating tactile alert system.
- `CrmlHypebeastDropBanner`: Digital streetwear countdown release banner.
- `CrmlFileUpload`: Drag-and-drop file upload target zone.
- `CrmlFormGroup`: Form field group layout wrapper with validation text.
- `CrmlTable`: Dense data table with high-contrast sticky header.
- `CrmlPriceTagWidget`: Angled retail hanging price tag.
- `CrmlPricingCard`: Tiered subscription card with feature checkmarks.
- `CrmlTimeline`: Vertical historical milestone tracker.
- `CrmlCommandPalette`: Global shortcut overlay search dialog [⌘+K].
- `CrmlFilterDrawer`: Sliding tactile filter drawer.
- `CrmlAiPromptInput`: Generative AI prompt console bar.
- `CrmlVideoPlayer`: Custom retro mecha media video player controls.
- `CrmlKanbanCard`: Drag-ready task card with priority labels.
- `CrmlSwipeCard`: Interactive gesture card stack.
- `CrmlRadarTelemetry`: Circular radar scanner telemetry dial.
- `CrmlSoundboard`: 16-pad MPC arcade audio trigger matrix.
- `CrmlNotificationDrawer`: Slide-out user activity notification drawer.
- `CrmlReviewQuoteCard`: Testimonial review speech card.
- `CrmlSpeedometerDial`: Circular speed/bandwidth gauge.
- `CrmlRichTextEditor`: Tactical markdown WYSIWYG editor bar.
- `CrmlNavbar`: Sticky responsive top navigation header.
- `CrmlSidebar`: Collapsible application sidebar drawer.

---

## 🌐 Live Documentation & Playground

Explore live interactive demonstrations, API specifications, and code generation for all 70 components at the official documentation hub:

🔗 **[https://ui.crml.my.id/](https://ui.crml.my.id/)**

---

## ☕ Support the Ecosystem

CRML-UI is an open-source project distributed under the MIT License. If you love the tactile feel and use it in your apps, consider buying us a coffee!

☕ **[Buy Me a Coffee: buymeacoffee.com/crml](https://buymeacoffee.com/crml)**

---

## 📄 License

MIT License © 2026 CRML-UI Ecosystem Team.
