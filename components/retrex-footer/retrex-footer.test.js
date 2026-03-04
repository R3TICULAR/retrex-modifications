import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './retrex-footer.js';

describe('RetrexFooter', () => {
  let element;
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('retrex-footer');
    container.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    container.remove();
  });

  describe('Rendering', () => {
    it('should render footer element', () => {
      const footer = element.shadowRoot.querySelector('footer');
      expect(footer).toBeTruthy();
    });

    it('should have retrex-footer class', () => {
      const footer = element.shadowRoot.querySelector('footer');
      expect(footer.className).toContain('retrex-footer');
    });

    it('should render footer-content section', () => {
      const content = element.shadowRoot.querySelector('.footer-content');
      expect(content).toBeTruthy();
    });
  });

  describe('Slots', () => {
    it('should have logo slot', () => {
      const logoSlot = element.shadowRoot.querySelector('slot[name="logo"]');
      expect(logoSlot).toBeTruthy();
    });

    it('should have github slot', () => {
      const githubSlot = element.shadowRoot.querySelector('slot[name="github"]');
      expect(githubSlot).toBeTruthy();
    });

    it('should have copyright slot', () => {
      const copyrightSlot = element.shadowRoot.querySelector('slot[name="copyright"]');
      expect(copyrightSlot).toBeTruthy();
    });
  });

  describe('Default Copyright', () => {
    it('should display default copyright with current year', () => {
      const currentYear = new Date().getFullYear();
      const copyrightSlot = element.shadowRoot.querySelector('slot[name="copyright"]');
      const defaultContent = copyrightSlot.querySelector('p');
      
      expect(defaultContent).toBeTruthy();
      expect(defaultContent.textContent).toContain(currentYear.toString());
    });
  });
});
