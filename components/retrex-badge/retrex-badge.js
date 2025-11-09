import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './retrex-badge.scss';

class RetrexBadge extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  static properties = {
    variant: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.variant = 'development';
  }

  render() {
    return html`
      <span class="retrex-badge retrex-badge--${this.variant}">
        <slot></slot>
      </span>
    `;
  }
}

if (!customElements.get('retrex-badge')) {
  customElements.define('retrex-badge', RetrexBadge);
}