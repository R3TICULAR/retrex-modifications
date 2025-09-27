import { LitElement, html, css, unsafeCSS } from 'lit';

import styles from './header-component.scss';

class HeaderComponent extends LitElement {

  static styles = css`${unsafeCSS(styles)}`;

  /**
   * @slot 'logo' - Slot for logo present within navigation bar
   * @slot 'nav-options' - Slot for multiple page navigation options to display 
   */

  render() {
    console.log("HeaderComponent Rendered");
    return html`
      <header>
        <slot name="logo"></slot>
        <slot name='nav-options'>
          <nav>
            <retrex-button href="#home" variant="tertiary">Home</retrex-button>
            <retrex-button href="#About" variant="tertiary">About</retrex-button>
            <retrex-button href="#Contact" variant="tertiary">Contact</retrex-button>
          </nav>
        </slot>
      </header>
    `;
  }
}

// Define the custom element
if (!customElements.get("header-component")) {
  customElements.define("header-component", HeaderComponent);
}
