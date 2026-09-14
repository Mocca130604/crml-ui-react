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

---

## 📦 Synchronized Semantic Versioning & NPM Release Protocol

Whenever modifications, bug fixes, component additions, or documentation updates (such as README revisions) are committed:

### 🏷️ Versioning Classification Scheme:
1. **MAJOR UPDATE (`+1.0.0` or `X.0.0`)**:
   - Triggered whenever a **NEW COMPONENT** is added to the library (e.g. introducing a new primitive in atoms, molecules, or organisms).
2. **MINOR UPDATE (`0.+1.0` or `x.X.0`)**:
   - Triggered whenever a **BUG FIX** is implemented (resolving component logic bugs, styling errors, or cross-browser behavioral glitches).
3. **PATCH UPDATE (`0.0.+1` or `x.x.X`)**:
   - Triggered for **LIGHTER CHANGES** (documentation updates, README revisions, SEO tweaks, internal refactoring, typings, and configuration maintenance).

### 📋 NPM Package Files Whitelist:
- `package.json` MUST explicitly declare `"README.md"` inside `"files"`:
  ```json
  "files": [
    "dist",
    "README.md"
  ]
  ```
  This guarantees that `README.md` is always bundled into the published npm tarball and renders immediately on the npmjs.com overview page.

### 🚀 Automated Verification & Publishing Workflow:
1. Increment the version in `package.json` following the classification scheme above across synchronized packages.
2. Run `npm run build` to verify strict type-checking and bundling.
3. Publish to NPM registry:
   ```bash
   npm publish --access public
   ```
4. Commit with structured semver message: `chore(release): bump to vX.Y.Z - <description>`.
5. Push to `origin main`.
