import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './hero-component.scss';

class HeroComponent extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  render() {
    return html`
      <div class="video-container">
        <div class="particles">
          ${Array.from({length: 15}, (_, i) => html`<div class="particle particle-${i}"></div>`)}
        </div>
        <slot name="video"></slot>
        <div class="content">
          <slot name="title">Default Title</slot>
          <slot name="description"><p>Default description</p></slot>
          <slot name="cta"><a href="#" class="cta-button">Get Started</a></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
