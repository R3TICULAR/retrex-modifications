import { LitElement, html, css, unsafeCSS } from 'lit';

import styles from './header-component.scss';

class HeaderComponent extends LitElement {
  static properties = {
    menuOpen: { type: Boolean, state: true }
  };

  static styles = css`${unsafeCSS(styles)}`;

  constructor() {
    super();
    this.menuOpen = false;
  }

  /**
   * @slot 'logo' - Slot for logo present within navigation bar
   * @slot 'nav-options' - Slot for multiple page navigation options to display 
   * @slot 'menu-icon' - Slot for menu icon to display in mobile view
   */

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    console.log("HeaderComponent Rendered");
    return html`
      <header class="${this.menuOpen ? 'menu-active' : ''}">
        <slot name="logo"></slot>
        <button class="menu-toggle" @click=${this.toggleMenu} aria-label="Toggle menu">
          <slot name="menu-icon">
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
          </slot>
        </button>
        <div class="nav-wrapper ${this.menuOpen ? 'open' : ''}">
        <slot name='nav-options'>
          <nav>
            <retrex-button href="#home" variant=${this.menuOpen ? "primary" : "tertiary"}>Home</retrex-button>
            <retrex-button href="#About" variant=${this.menuOpen ? "primary" : "tertiary"}>About</retrex-button>
            <retrex-button href="#Contact" variant=${this.menuOpen ? "primary" : "tertiary"}>Contact</retrex-button>
          </nav>
        </slot>
        </div>
      </header>
    `;
  }
}

// Define the custom element
if (!customElements.get("header-component")) {
  customElements.define("header-component", HeaderComponent);
}
