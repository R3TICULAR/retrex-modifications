# Cecil's Portfolio Site

A personal developer portfolio built with Lit web components following design system principles.

## Tech Stack
- **Lit Elements** - Web components framework
- **SCSS** - Styling with design tokens
- **Vite** - Build tool
- **Design Tokens** - Consistent theming system

## Components

### Header Component
- Rotating logo with FontAwesome icon
- Navigation with hover effects
- Teal primary color theme

### Hero Component
- Animated floating particles (15 geometric dots)
- Teal-to-yellow gradient background
- Overlay text with accessibility-focused shadows
- Responsive slot-based content system

## Design System
- **Colors**: Teal primary (#14b8a6), Yellow accent (#facc15), White backgrounds
- **Typography**: Inter font family
- **Accessibility**: WCAG AA compliant text shadows for gradient overlays
- **Animation**: CSS-only particle system with staggered timing

## Responsive Design (Mobile-First)
- **Philosophy**: Mobile-first design approach
- **Breakpoints**:
  - Small (default): 0px - 767px
  - Medium: 768px - 1023px
  - Large: 1024px - 1439px
  - XL: 1440px+
- **Implementation**: Base styles for mobile, progressive enhancement with `@media` queries

## Development Notes
- Components use Shadow DOM for style encapsulation
- Slots provide flexible content insertion
- Design tokens in `/src/styles/tokens.css` for consistent theming
- All components designed mobile-first with responsive breakpoints 
# retrex-modifications
A Portfolio website built by me to showcase my web development skillset utilizing Lit web components.
