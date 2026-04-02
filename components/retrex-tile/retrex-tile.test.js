import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import './retrex-tile.js';

describe('RetrexTile', () => {
  let element;
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('retrex-tile');
    const title = document.createElement('h3');
    title.setAttribute('slot', 'title');
    title.textContent = 'Test Title';
    element.appendChild(title);
    container.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    container.remove();
  });

  describe('Rendering', () => {
    it('should render the tile container', () => {
      const tile = element.shadowRoot.querySelector('.retrex-tile');
      expect(tile).toBeTruthy();
    });

    it('should have image slot', () => {
      const imageSlot = element.shadowRoot.querySelector('slot[name="image"]');
      expect(imageSlot).toBeTruthy();
    });

    it('should have title slot', () => {
      const titleSlot = element.shadowRoot.querySelector('slot[name="title"]');
      expect(titleSlot).toBeTruthy();
    });
  });

  describe('Properties', () => {
    it('should have default variant of generic', () => {
      expect(element.variant).toBe('generic');
    });

    it('should have default clickable of false', () => {
      expect(element.clickable).toBe(false);
    });

    it('should reflect variant property to attribute', async () => {
      element.variant = 'project';
      await element.updateComplete;
      
      expect(element.getAttribute('variant')).toBe('project');
    });
  });

  describe('Click Handling', () => {
    it('should not navigate when clickable is false', async () => {
      element.href = 'https://example.com';
      element.clickable = false;
      await element.updateComplete;
      
      const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => {});
      
      const tile = element.shadowRoot.querySelector('.retrex-tile');
      tile.click();
      
      expect(windowOpenSpy).not.toHaveBeenCalled();
      windowOpenSpy.mockRestore();
    });

    it('should navigate when clickable is true and href is set', async () => {
      element.href = 'https://example.com';
      element.clickable = true;
      await element.updateComplete;
      
      const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => {});
      
      const tile = element.shadowRoot.querySelector('.retrex-tile');
      tile.click();
      
      expect(windowOpenSpy).toHaveBeenCalledWith('https://example.com', '_self');
      windowOpenSpy.mockRestore();
    });
  });
});
