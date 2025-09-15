import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './retrex-button.scss';

class RetrexButton extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  render() {
    return html`
      <div class="retrex-button">
        <slot>Default content</slot>
      </div>
    `;
  }
}

customElements.define('retrex-button', RetrexButton);
