import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import './hero-component.js';

describe('HeroComponent', () => {
  let element;
  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    element = document.createElement('hero-component');
    container.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    container.remove();
  });

  describe('Rendering', () => {
    it('should render video-container', () => {
      const videoContainer = element.shadowRoot.querySelector('.video-container');
      expect(videoContainer).toBeTruthy();
    });

    it('should render parallax layers', () => {
      const parallax = element.shadowRoot.querySelector('.parallax-layers');
      expect(parallax).toBeTruthy();
    });

    it('should render three parallax layers', () => {
      const layers = element.shadowRoot.querySelectorAll('.layer');
      expect(layers.length).toBe(3);
    });

    it('should render cursor', () => {
      const cursor = element.shadowRoot.querySelector('.cursor');
      expect(cursor).toBeTruthy();
      expect(cursor.textContent).toBe('|');
    });
  });

  describe('Properties', () => {
    it('should initialize typewriterText as empty string', () => {
      expect(element.typewriterText).toBe('');
    });

    it('should initialize displayText as empty string', () => {
      expect(element.displayText).toBe('');
    });
  });

  describe('Typewriter Display', () => {
    it('should render displayText in typewriter-text span', async () => {
      element.displayText = 'Hello World';
      await element.updateComplete;
      
      const typewriterText = element.shadowRoot.querySelector('.typewriter-text');
      expect(typewriterText.textContent).toBe('Hello World');
    });
  });

  describe('Slots', () => {
    it('should have video slot', () => {
      const videoSlot = element.shadowRoot.querySelector('slot[name="video"]');
      expect(videoSlot).toBeTruthy();
    });

    it('should have title slot', () => {
      const titleSlot = element.shadowRoot.querySelector('slot[name="title"]');
      expect(titleSlot).toBeTruthy();
    });

    it('should have description slot', () => {
      const descSlot = element.shadowRoot.querySelector('slot[name="description"]');
      expect(descSlot).toBeTruthy();
    });
  });
});
