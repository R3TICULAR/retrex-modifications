# Design Tokens & Color Guidelines

## Core Palette

- **Primary (Teal):** `--color-primary: #14b8a6;`
- **Primary Dark:** `--color-primary-dark: #0f766e;`
- **Primary Light:** `--color-primary-light: #5eead4;`
- **Accent (Yellow):** `--color-accent: #facc15;`
- **Background:** `--color-bg: #ffffff;`
- **Surface:** `--color-surface: #f8fafc;`
- **Text Primary:** `--color-text: #0f172a;`
- **Text Secondary:** `--color-text-secondary: #64748b;`
- **Border:** `--color-border: #e2e8f0;`
- **Error:** `--color-error: #ef4444;`

## Usage
- Use `--color-primary` for main actions, highlights, and brand elements.
- Use `--color-bg` for page backgrounds.
- Use `--color-surface` for cards, modals, and surfaces.
- Use `--color-text` for main text, `--color-text-secondary` for less prominent text.
- Use `--color-accent` for attention-grabbing elements (e.g., CTAs).
- Use `--color-border` for subtle dividers.
- Use `--color-error` for error states.

## Example (CSS)
```css
:root {
  --color-primary: #14b8a6;
  --color-primary-dark: #0f766e;
  --color-primary-light: #5eead4;
  --color-accent: #facc15;
  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
  --color-error: #ef4444;
}
```

## Accessibility
- Ensure sufficient contrast between text and background.
- Use color as a supplement, not the only indicator, for important states.

---

_Expand this doc as your system grows (e.g., add spacing, typography, etc.)._