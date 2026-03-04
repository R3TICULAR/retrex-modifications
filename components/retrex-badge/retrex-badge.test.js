import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './retrex-badge.js';

describe('RetrexBadge', () => {
  let element;
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('retrex-badge');
    element.textContent = 'Development';
    container.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    container.remove();
  });

  describe('Rendering', () => {
    it('should render a span element', () => {
      const span = element.shadowRoot.querySelector('span');
      expect(span).toBeTruthy();
    });

    it('should have retrex-badge class', () => {
      const span = element.shadowRoot.querySelector('span');
      expect(span.className).toContain('retrex-badge');
    });
  });

  describe('Properties', () => {
    it('should have default variant of development', () => {
      expect(element.variant).toBe('development');
    });

    it('should reflect variant property to attribute', async () => {
      element.variant = 'production';
      await element.updateComplete;
      
      expect(element.getAttribute('variant')).toBe('production');
    });

    it('should apply correct CSS class based on variant', async () => {
      element.variant = 'production';
      await element.updateComplete;
      
      const span = element.shadowRoot.querySelector('span');
      expect(span.className).toContain('retrex-badge--production');
    });
  });

  describe('Variants', () => {
    const variants = ['development', 'production', 'testing', 'staging'];

    variants.forEach(variant => {
      it(`should render ${variant} variant correctly`, async () => {
        const testElement = document.createElement('retrex-badge');
        testElement.setAttribute('variant', variant);
        testElement.textContent = variant;
        container.appendChild(testElement);
        await testElement.updateComplete;
        
        const span = testElement.shadowRoot.querySelector('span');
        expect(span.className).toContain(`retrex-badge--${variant}`);
        expect(testElement.variant).toBe(variant);
      });
    });
  });
});
