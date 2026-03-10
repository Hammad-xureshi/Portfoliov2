# GhostCursor Integration Summary

## Overview
All portfolio sections now have **section-specific GhostCursor background effects** with unique colors, effects, and timing. The global GhostCursor in App.jsx provides the base effect, while individual sections override it with their own themed variations.

---

## Section-by-Section Configuration

### 🏠 **Hero Section**
**File:** `src/components/sections/Hero.jsx`

```jsx
<GhostCursor
  color="#ec4899"        // Pink
  brightness={1.0}       // Full brightness
  trailLength={25}       // Moderate trail
  inertia={0.5}          // Responsive
  bloomStrength={0.6}    // Strong glow
  bloomRadius={1.0}      // Wide radius
  bloomThreshold={0}     // Full bloom
  grainIntensity={0}     // No grain (clean hero)
  fadeDelayMs={600}      // Quick fade
  fadeDurationMs={1200}  // Smooth fade
/>
```
**Design Rationale:**
- Pink color to grab attention with warm energy
- Full brightness for hero impact
- No grain for clean, professional look
- Quick fade when idle

---

### 📖 **About Section**
**File:** `src/components/sections/About.jsx`

```jsx
<GhostCursor
  color="#a855f7"        // Purple
  brightness={0.6}       // Subtle
  trailLength={20}       // Short trail
  inertia={0.6}          // Slightly sluggish
  bloomStrength={0.3}    // Soft glow
  bloomRadius={0.6}      // Tight glow
  bloomThreshold={0.1}   // Selective bloom
  grainIntensity={0.02}  // Minimal grain
  fadeDelayMs={800}      // Medium delay
  fadeDurationMs={1500}  // Graceful fade
/>
```
**Design Rationale:**
- Purple matches brand color
- Lower opacity (30%) for subtle background feel
- Short trail for text readability
- Minimal grain for legibility

---

### 💻 **Skills Section**
**File:** `src/components/sections/Skills.jsx`

```jsx
<GhostCursor
  color="#06b6d4"        // Cyan (tech vibe)
  brightness={0.65}      // Moderate
  trailLength={22}       // Short-medium trail
  inertia={0.58}         // Medium responsiveness
  bloomStrength={0.4}    // Subtle glow
  bloomRadius={0.7}      // Focused glow
  bloomThreshold={0.08}  // Selective
  grainIntensity={0.015} // Minimal grain
  fadeDelayMs={750}      // Quick fade
  fadeDurationMs={1350}  // Smooth transition
/>
```
**Design Rationale:**
- Cyan gives tech feel (developer tools aesthetic)
- Lower opacity (35%) to keep focus on skill cards
- Moderate trail for dynamic feel

---

### 🎯 **Projects Section**
**File:** `src/components/sections/Projects.jsx`

```jsx
<GhostCursor
  color="#f59e0b"        // Amber/Orange
  brightness={0.7}       // Warm brightness
  trailLength={30}       // Long trail (attention)
  inertia={0.55}         // Responsive
  bloomStrength={0.5}    // Medium glow
  bloomRadius={0.9}      // Medium radius
  bloomThreshold={0.05}  // Mostly visible
  grainIntensity={0.01}  // Very subtle grain
  fadeDelayMs={900}      // Medium delay
  fadeDurationMs={1400}  // Smooth fade
/>
```
**Design Rationale:**
- Amber/orange for highlighting (these are portfolio highlights)
- Longer trail to draw attention to project cards
- Warmth creates engagement feeling
- Opacity 40% balances visibility with card clarity

---

### 🎮 **CTF Journey Section**
**File:** `src/components/sections/CTF.jsx`

```jsx
<GhostCursor
  color="#ef4444"        // Red (security/challenge)
  brightness={0.75}      // Bright but cool
  trailLength={28}       // Medium-long trail
  inertia={0.52}         // Quick response
  bloomStrength={0.55}   // Strong glow
  bloomRadius={0.85}     // Solid bloom
  bloomThreshold={0.03}  // Mostly visible
  grainIntensity={0.02}  // Subtle grain
  fadeDelayMs={850}      // Quick fade
  fadeDurationMs={1450}  // Graceful transition
/>
```
**Design Rationale:**
- Red represents challenge/security context
- Strong bloom for energy and attention
- Opacity 35% keeps challenge cards visible and readable
- Quick responsiveness matches action/challenge vibe

---

### 🚀 **Journey Section**
**File:** `src/components/sections/Journey.jsx`

```jsx
<GhostCursor
  color="#10b981"        // Green (growth/progress)
  brightness={0.6}       // Subtle
  trailLength={24}       // Medium trail
  inertia={0.6}          // Slightly sluggish
  bloomStrength={0.35}   // Soft glow
  bloomRadius={0.65}     // Tight glow
  bloomThreshold={0.12}  // Very selective
  grainIntensity={0.01}  // Very subtle
  fadeDelayMs={1000}     // Longer delay (contemplative)
  fadeDurationMs={1600}  // Slower fade
/>
```
**Design Rationale:**
- Green for growth and positivity on timeline
- Lower opacity (30%) and subtle glow for reflective mood
- Longer fade delay for contemplative feeling
- Minimal grain keeps timeline clean

---

### 🎓 **Certifications Section**
**File:** `src/components/sections/Certifications.jsx`

```jsx
<GhostCursor
  color="#8b5cf6"        // Violet
  brightness={0.7}       // Good brightness
  trailLength={26}       // Medium-long trail
  inertia={0.54}         // Responsive
  bloomStrength={0.45}   // Medium glow
  bloomRadius={0.75}     // Focused glow
  bloomThreshold={0.06}  // Mostly visible
  grainIntensity={0.015} // Subtle grain
  fadeDelayMs={900}      // Medium delay
  fadeDurationMs={1500}  // Smooth fade
/>
```
**Design Rationale:**
- Violet for achievements and recognition
- Similar brightness to Skills for consistency
- Opacity 40% for card visibility
- Medium bloom gives polish/prestige feeling

---

### 💬 **Contact Section**
**File:** `src/components/sections/Contact.jsx`

```jsx
<GhostCursor
  color="#d946ef"        // Magenta (call-to-action)
  brightness={0.85}      // Very bright
  trailLength={32}       // Long trail
  inertia={0.48}         // Most responsive
  bloomStrength={0.6}    // Strong glow
  bloomRadius={0.95}     // Wide glow
  bloomThreshold={0.02}  // Mostly visible
  grainIntensity={0.025} // More prominent grain
  fadeDelayMs={800}      // Quick fade
  fadeDurationMs={1300}  // Fast transition
/>
```
**Design Rationale:**
- Magenta is high-energy call-to-action color
- Brightest section (highest brightness)
- Longest trail to guide cursor attention
- Most responsive inertia for engagement
- Highest grain adds texture/energy
- Opacity 45% emphasizes action feeling

---

## Global GhostCursor (App.jsx)

```jsx
<GhostCursor
  color="#a855f7"        // Brand purple
  brightness={0.8}       // Good baseline
  trailLength={35}       // Full history
  inertia={0.45}         // Responsive
  bloomStrength={0.4}    // Balanced glow
  bloomRadius={0.8}      // Medium radius
  bloomThreshold={0}     // All pixels bloom
  grainIntensity={0.03}  // Subtle grain
  fadeDelayMs={1200}     // Long contemplative delay
  fadeDurationMs={1800}  // Long graceful fade
  className="opacity-40" // 40% opacity
/>
```

**Purpose:** Base effect when between sections, fades gracefully when idle

---

## Key Design Principles

### 1. **Color Hierarchy**
- **Hero:** Warm (pink) - grab attention
- **Technical Sections:** Cool (cyan, purple) - focus
- **Action Sections:** Energetic (orange, magenta) - engagement
- **Growth Sections:** Positive (green, violet) - progress

### 2. **Opacity Variance**
- Hero & Contact: 45-50% (prominent)
- Projects & Skills: 40% (balanced)
- CTF & Certifications: 35-40% (moderate)
- About & Journey: 30% (subtle)

### 3. **Trail Length**
- Hero (25): Short and punchy
- Contact (32): Longest trail for emphasis
- CTF (28): Dynamic for challenges
- Journey (24): Contemplative length

### 4. **Bloom & Grain**
- **Higher Bloom** = More energetic sections (Hero, Contact, Projects)
- **Lower Bloom** = More subtle sections (About, Journey)
- **Grain** = Texture preference (none in Hero, more in Contact)

### 5. **Fade Timing**
- **Quick Fades** (1200-1300ms): Action sections (Hero, Contact)
- **Medium Fades** (1400-1500ms): Balanced sections
- **Slow Fades** (1600ms): Reflective sections (Journey)

---

## Implementation Notes

### Each Section:
1. ✅ GhostCursor imported
2. ✅ Div wrapper with `absolute inset-0 z-0` positioning
3. ✅ Opacity controlled at wrapper level (not component level)
4. ✅ Content wrapped in `relative z-10` for layering
5. ✅ Color/brightness tweaked for section theme

### Rendering Order:
```
z-0: Background divs (GhostCursor)
z-10: Main content (sections, cards, forms)
```

This ensures cursor trails appear behind all interactive elements while still being visible.

---

## Performance Considerations

- **Pixel Budget Scaling:** ResizeObserver adapts to device (1.3M pixels desktop, 0.9M touch)
- **GPU Acceleration:** Three.js WebGL rendering with EffectComposer
- **Selective Grain:** Lower on subtle sections, higher on vibrant ones
- **Bloom Optimization:** Bloom threshold prevents over-processing

---

## Testing Checklist

- [ ] Hover over buttons in each section - cursor trail follows
- [ ] Move cursor between sections - color transitions smoothly
- [ ] Leave cursor idle - fade animation completes gracefully
- [ ] Check mobile - responsive pixel scaling active
- [ ] Verify z-index - cursor trails stay behind content
- [ ] Test scrolling - Lenis smooth scroll + cursor effect
- [ ] Check performance - 60fps maintained on target devices

---

## Future Enhancements

1. **Section Entry Animations:** Bloom stronger on section entrance
2. **Interactive Cards:** Bloom intensifies on hover
3. **Theme Toggle:** Change colors based on dark/light mode
4. **Device Memory:** Further optimization for low-end devices
5. **Haptic Feedback:** Subtle vibration on mobile (if supported)

