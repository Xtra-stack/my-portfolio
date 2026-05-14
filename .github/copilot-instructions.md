# Copilot Instructions for Ajay's Portfolio

## Architecture Overview

This is an **interactive 3D portfolio website** built with **Three.js** and **GSAP**. The design uses a "solar system" metaphor where each section (Bio, Tech, Work, etc.) is a planet in orbit around a central sun. Clicking planets zooms the camera and displays modal content.

### Core Tech Stack
- **Three.js** (v128): 3D rendering engine
- **GSAP** (v3.12.2): Animation and tweening library
- **Vanilla JavaScript**: No frameworks; single-page architecture
- **HTML5/CSS3**: Layout and styling

## File Structure & Responsibilities

| File | Purpose |
|------|---------|
| [index.html](index.html) | UI layer (hero section, modal, HUD navigation) |
| [script.js](script.js) | Three.js engine, interaction logic, animations |
| [style.css](style.css) | Glassmorphism design with CSS variables and transitions |

## Key Architectural Patterns

### 1. **Data-Driven Content Structure** (`SECTIONS` Array)
- Each portfolio section is defined once in the `SECTIONS` array
- Properties: `title`, `content` (HTML), `color`, `dist` (orbit distance), `size`, `speed` (rotation speed), `hasRings` (optional)
- Content can include dynamic HTML (tech grid, feedback form) — keep it in backticks or use innerHTML-safe patterns

### 2. **State Management**
- **`isZoomed`**: Boolean tracking if camera is focused on a planet
- **`activeIdx`**: Index of currently viewed planet (-1 = hero/core view)
- These drive UI visibility (hero hidden when zoomed) and camera animations

### 3. **Three.js Scene Hierarchy**
```
Scene
├── Sun (center point light source)
├── Planets (mesh + atmosphere glow + optional rings)
├── Orbit lines (visual reference guides)
├── Star field (background points)
└── Asteroid belt (decorative points)
```

### 4. **Animation Pattern: GSAP Timelines**
- All camera transitions use `gsap.timeline()` for coordinated FOV + position changes
- `viewNode(idx)` handles zoom-in; `resetView()` handles zoom-out
- Always `gsap.killTweensOf()` before starting new animations to prevent conflicts

### 5. **Interaction Flow**
```
User clicks planet → raycaster intersection → viewNode(idx) 
  → pause planet rotation → camera zoom + modal fade-in
User clicks close/CORE → resetView() 
  → resume planet rotation → camera zoom-out + modal fade-out
```

## Development Conventions

### Adding New Portfolio Sections
1. Add new object to `SECTIONS` array (maintain consistent property structure)
2. Assign unique `color` (hex) and `dist` (must not overlap with existing orbits)
3. HTML content goes in `content` string — use `<div class="tech-grid">` for structured layouts
4. If content is interactive (like feedback form), attach listeners in `viewNode()` after modal is displayed

### Responsive Design Notes
- CSS uses viewport-based sizing; no media queries needed for 3D canvas
- `onResize()` updates camera aspect ratio and renderer resolution
- `renderer.setPixelRatio()` capped at 2 for performance on high-DPI displays

### Texture Generation
- `createNoiseTexture()`: Creates procedural planet surface textures via canvas 2D
- `createGlowTexture()`: Radial gradient for sun halo effect
- Called once per planet during `init()`; reuse for performance

## Integration Points & External Dependencies

### Libraries (CDN)
- **Three.js**: Used for 3D rendering; required for entire scene
- **GSAP**: Used for smooth camera animations; could be replaced but currently handles all tweens
- **Google Fonts** (Plus Jakarta Sans): Typography only; fallback to system fonts available

### Modal Content Injection
- Content from `SECTIONS[idx].content` is directly set via `innerHTML` in `viewNode()`
- **Security note**: Only inject trusted content; sanitize if user input is added

### Feedback Form (Dynamic)
- Form listens for submit only when "Feedback Node" is active
- Current implementation reloads page on success; consider API endpoint integration

## Common Development Tasks

### Updating Content
- Modify `SECTIONS` array in [script.js](script.js) (lines 1-71)
- Re-edit CSS variables in [style.css](style.css) (lines 11-15) for theme changes (accent colors, glass effect)

### Debugging 3D Rendering
- Check browser console for "Critical libraries" error (THREE/GSAP not loaded)
- Use `camera.position` and `camera.fov` to diagnose view issues
- Inspect `planets` array in DevTools to verify mesh positions

### Performance Optimization
- Star field uses `BufferGeometry` with `Points` (optimal for many objects)
- Asteroid belt similarly optimized; avoid adding per-particle physics
- Disable glow effects or reduce `starCount` on low-end devices if needed

## Future Enhancement Ideas

- Add mouse-drag planet manipulation instead of fixed orbits
- Integrate a backend API for dynamic project portfolio loading
- Add sound effects (mute toggle) coordinated with GSAP animations
- Implement mobile touch controls for planet selection
