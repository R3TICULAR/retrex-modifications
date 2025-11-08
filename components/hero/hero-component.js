import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './hero-component.scss';

class HeroComponent extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  static properties = {
    typewriterText: { type: String },
    displayText: { type: String, state: true }
  };

  constructor() {
    super();
    this.typewriterText = '';
    this.displayText = '';
  }

  firstUpdated() {
    const titleSlot = this.shadowRoot.querySelector('slot[name="title"]');
    const slottedElements = titleSlot.assignedElements();
    
    if (slottedElements.length > 0) {
      this.typewriterText = slottedElements[0].textContent;
      slottedElements[0].textContent = '';
      this.startTypewriter();
    }
  }

  startTypewriter() {
    let i = 0;
    const speed = 100;
    
    const typeChar = () => {
      if (i < this.typewriterText.length) {
        this.displayText += this.typewriterText.charAt(i);
        i++;
        setTimeout(typeChar, speed);
      }
    };
    
    typeChar();
  }

  render() {
    return html`
      <div class="video-container">
        <div class="parallax-layers">
          <div class="layer layer-1"></div>
          <div class="layer layer-2"></div>
          <div class="layer layer-3"></div>
        </div>
        <slot name="video"></slot>
        <div class="content">
          <div class="typewriter-container">
            <span class="typewriter-text">${this.displayText}</span>
            <span class="cursor">|</span>
          </div>
          <slot name="title" style="display: none;">Default Title</slot>
          <slot name="description"></slot>
          <slot name="cta"></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('hero-component')) {
  customElements.define('hero-component', HeroComponent);
}
