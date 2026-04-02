import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './header-component.js';

describe('HeaderComponent', () => {
  let element;
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('header-component');
    container.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    container.remove();
  });

  describe('Rendering', () => {
    it('should render header element', () => {
      const header = element.shadowRoot.querySelector('header');
      expect(header).toBeTruthy();
    });

    it('should render menu toggle button', () => {
      const button = element.shadowRoot.querySelector('.menu-toggle');
      expect(button).toBeTruthy();
    });

    it('should have aria-label on menu toggle', () => {
      const button = element.shadowRoot.querySelector('.menu-toggle');
      expect(button.getAttribute('aria-label')).toBe('Toggle menu');
    });
  });

  describe('Properties', () => {
    it('should initialize menuOpen to false', () => {
      expect(element.menuOpen).toBe(false);
    });

    it('should toggle menuOpen when toggleMenu is called', () => {
      expect(element.menuOpen).toBe(false);
      
      element.toggleMenu();
      expect(element.menuOpen).toBe(true);
      
      element.toggleMenu();
      expect(element.menuOpen).toBe(false);
    });
  });

  describe('Menu Toggle Functionality', () => {
    it('should toggle menu on button click', async () => {
      const button = element.shadowRoot.querySelector('.menu-toggle');
      
      expect(element.menuOpen).toBe(false);
      
      button.click();
      await element.updateComplete;
      
      expect(element.menuOpen).toBe(true);
    });

    it('should add menu-active class when menu is open', async () => {
      element.menuOpen = true;
      await element.updateComplete;
      
      const header = element.shadowRoot.querySelector('header');
      expect(header.className).toContain('menu-active');
    });
  });
});
