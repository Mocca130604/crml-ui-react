# AGENTS.md - crml-ui-react (React Ecosystem Specification)

> **Authoritative specification for AI Coding Assistants working on crml-ui-react.**

---

## 🚀 1. Repository Purpose
This is the **React 18/19 implementation** of the `crml-ui` design system, built with TypeScript, Vite Library Mode, and Zero Ambient Blur Neubrutalism.

### Strict Design Guidelines & Constraints:
1. **Zero Ambient Blur Policy**:
   - ❌ NEVER use soft drop-shadows or `filter: blur()`.
   - ✅ ALWAYS use solid ink offset drop-shadows:
     - Badge/Pill: `box-shadow: 2px 2px 0px #0D0D0D;`
     - Button/Card: `box-shadow: 4px 4px 0px #0D0D0D;`
     - Modal/Dialog: `box-shadow: 6px 6px 0px #0D0D0D;`
2. **Ink Border Stroke**:
   - Border style: `2.5px solid #0D0D0D` or `3px solid #0D0D0D`.
3. **Tactile Physics**:
   - Resting: `transform: translate(0px, 0px); box-shadow: 4px 4px 0px #0D0D0D;`
   - Active: `transform: translate(3px, 3px); box-shadow: 1px 1px 0px #0D0D0D;`
   - Transition: `transition: all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);`

### Cross-Framework Synchronization Protocol:
- If new components or props are added here, they MUST match the master token architecture in `src/tokens/` and be synced with `crml-ui` (Vue), `crml-ui-html`, and `crml-ui-svelte`.
