# RetrexButton Component

A versatile, accessible button component built with Lit that supports multiple variants, sizes, and can render as either a button or link.

## Usage

```html
<!-- Basic button -->
<retrex-button>Click me</retrex-button>

<!-- Primary button (default) -->
<retrex-button variant="primary">Primary Action</retrex-button>

<!-- Secondary button -->
<retrex-button variant="secondary">Secondary Action</retrex-button>

<!-- Tertiary button -->
<retrex-button variant="tertiary">Tertiary Action</retrex-button>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |
| `href` | `string` | `''` | URL for link behavior (renders as anchor when provided) |
| `target` | `string` | `''` | Link target attribute |
| `ariaLabel` | `string` | `''` | Accessible label for screen readers |

## Slots

| Slot | Description |
|------|-------------|
| Default | Button text content |
| `icon-start` | Icon before the text |
| `icon-end` | Icon after the text |

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `retrex-click` | `{ originalEvent: Event }` | Emitted when button is clicked |

## Methods

| Method | Description |
|--------|-------------|
| `focus()` | Programmatically focus the button |
| `blur()` | Remove focus from the button |
| `click()` | Programmatically trigger a click |

## Examples

### Basic Variants
```html
<retrex-button variant="primary">Primary</retrex-button>
<retrex-button variant="secondary">Secondary</retrex-button>
<retrex-button variant="tertiary">Tertiary</retrex-button>
```

### Sizes
```html
<retrex-button size="small">Small</retrex-button>
<retrex-button size="medium">Medium</retrex-button>
<retrex-button size="large">Large</retrex-button>
```

### States
```html
<retrex-button disabled>Disabled</retrex-button>
<retrex-button loading>Loading...</retrex-button>
```

### With Icons
```html
<retrex-button>
  <i slot="icon-start" class="fas fa-plus"></i>
  Add Item
</retrex-button>

<retrex-button>
  Download
  <i slot="icon-end" class="fas fa-download"></i>
</retrex-button>
```

### As Link
```html
<retrex-button href="/about">About Page</retrex-button>
<retrex-button href="https://example.com" target="_blank">External Link</retrex-button>
```

### Form Usage
```html
<form>
  <retrex-button type="submit">Submit Form</retrex-button>
  <retrex-button type="reset">Reset Form</retrex-button>
</form>
```

### Event Handling
```javascript
const button = document.querySelector('retrex-button');
button.addEventListener('retrex-click', (event) => {
  console.log('Button clicked!', event.detail.originalEvent);
});
```

### Accessibility
```html
<!-- Custom aria-label -->
<retrex-button aria-label="Close dialog">×</retrex-button>

<!-- Loading state with screen reader feedback -->
<retrex-button loading aria-label="Saving your changes">Save</retrex-button>
```

## Accessibility Features

- Full keyboard navigation support (Enter and Space keys)
- ARIA attributes for screen readers
- Proper focus management
- Loading state announcements
- Disabled state handling
- Link semantics when `href` is provided

## CSS Classes

The component generates the following CSS classes for styling:

- `.retrex-button` - Base button class
- `.retrex-button--primary` - Primary variant
- `.retrex-button--secondary` - Secondary variant  
- `.retrex-button--tertiary` - Tertiary variant
- `.retrex-button--small` - Small size
- `.retrex-button--medium` - Medium size
- `.retrex-button--large` - Large size
- `.retrex-button__content` - Text content wrapper
- `.retrex-button__spinner` - Loading spinner element