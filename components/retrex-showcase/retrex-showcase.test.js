import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import './retrex-showcase.js';

describe('RetrexShowcase', () => {
  let element;
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('retrex-showcase');
    container.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    container.remove();
  });

  describe('Rendering', () => {
    it('should render section element', () => {
      const section = element.shadowRoot.querySelector('section');
      expect(section).toBeTruthy();
    });

    it('should have retrex-showcase class', () => {
      const section = element.shadowRoot.querySelector('section');
      expect(section.className).toContain('retrex-showcase');
    });

    it('should render projects-grid', () => {
      const grid = element.shadowRoot.querySelector('.projects-grid');
      expect(grid).toBeTruthy();
    });
  });

  describe('Properties', () => {
    it('should initialize projectCount to 0', () => {
      expect(element.projectCount).toBe(0);
    });
  });

  describe('Grid Class Logic', () => {
    it('should return grid-2x2 for 4 projects', () => {
      element.projectCount = 4;
      expect(element.getGridClass()).toBe('grid-2x2');
    });

    it('should return grid-2x3 for 5 projects', () => {
      element.projectCount = 5;
      expect(element.getGridClass()).toBe('grid-2x3');
    });

    it('should return grid-auto for 7 projects', () => {
      element.projectCount = 7;
      expect(element.getGridClass()).toBe('grid-auto');
    });
  });
});
