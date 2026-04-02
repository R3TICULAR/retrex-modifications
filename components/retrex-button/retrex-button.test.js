import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import './retrex-button.js';

describe('RetrexButton', () => {
  let element;
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('retrex-button');
    element.textContent = 'Click me';
    container.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    container.remove();
  });

  describe('Rendering', () => {
    it('should render a button element by default', () => {
      const button = element.shadowRoot.querySelector('button');
      expect(button).toBeTruthy();
    });

    it('should render slotted content', () => {
      const slot = element.shadowRoot.querySelector('.retrex-button__content slot');
      expect(slot).toBeTruthy();
    });

    it('should render as a link when href is provided', async () => {
      const linkElement = document.createElement('retrex-button');
      linkElement.setAttribute('href', 'https://example.com');
      linkElement.textContent = 'Link';
      container.appendChild(linkElement);
      await linkElement.updateComplete;
      
      const link = linkElement.shadowRoot.querySelector('a');
      const button = linkElement.shadowRoot.querySelector('button');
      
      expect(link).toBeTruthy();
      expect(button).toBeFalsy();
      expect(link.getAttribute('href')).toBe('https://example.com');
    });
  });

  describe('Properties', () => {
    it('should have default property values', () => {
      expect(element.variant).toBe('primary');
      expect(element.disabled).toBe(false);
      expect(element.loading).toBe(false);
      expect(element.type).toBe('button');
    });

    it('should reflect variant property to attribute', async () => {
      element.variant = 'secondary';
      await element.updateComplete;
      
      expect(element.getAttribute('variant')).toBe('secondary');
    });

    it('should reflect disabled property to attribute', async () => {
      element.disabled = true;
      await element.updateComplete;
      
      expect(element.hasAttribute('disabled')).toBe(true);
    });

    it('should apply correct CSS class based on variant', async () => {
      element.variant = 'secondary';
      await element.updateComplete;
      
      const button = element.shadowRoot.querySelector('button');
      expect(button.className).toContain('retrex-button--secondary');
    });
  });

  describe('Click Handling', () => {
    it('should emit retrex-click event on click', async () => {
      const clickHandler = vi.fn();
      element.addEventListener('retrex-click', clickHandler);
      
      const button = element.shadowRoot.querySelector('button');
      button.click();
      
      expect(clickHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler.mock.calls[0][0].detail).toHaveProperty('originalEvent');
    });

    it('should not emit retrex-click when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;
      
      const clickHandler = vi.fn();
      element.addEventListener('retrex-click', clickHandler);
      
      const button = element.shadowRoot.querySelector('button');
      button.click();
      
      expect(clickHandler).not.toHaveBeenCalled();
    });

    it('should not emit retrex-click when loading', async () => {
      element.loading = true;
      await element.updateComplete;
      
      const clickHandler = vi.fn();
      element.addEventListener('retrex-click', clickHandler);
      
      const button = element.shadowRoot.querySelector('button');
      button.click();
      
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe('Public Methods', () => {
    it('should focus the button when focus() is called', () => {
      const button = element.shadowRoot.querySelector('button');
      const focusSpy = vi.spyOn(button, 'focus');
      
      element.focus();
      
      expect(focusSpy).toHaveBeenCalled();
    });

    it('should blur the button when blur() is called', () => {
      const button = element.shadowRoot.querySelector('button');
      const blurSpy = vi.spyOn(button, 'blur');
      
      element.blur();
      
      expect(blurSpy).toHaveBeenCalled();
    });

    it('should trigger click when click() is called', () => {
      const button = element.shadowRoot.querySelector('button');
      const clickSpy = vi.spyOn(button, 'click');
      
      element.click();
      
      expect(clickSpy).toHaveBeenCalled();
    });

    it('should not trigger click when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;
      
      const button = element.shadowRoot.querySelector('button');
      const clickSpy = vi.spyOn(button, 'click');
      
      element.click();
      
      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  describe('Type Attribute', () => {
    it('should set button type attribute', async () => {
      element.type = 'submit';
      await element.updateComplete;
      
      const button = element.shadowRoot.querySelector('button');
      expect(button.getAttribute('type')).toBe('submit');
    });
  });
});
