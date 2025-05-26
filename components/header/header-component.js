import {
  LitElement,
  html,
  css,
  unsafeCSS
} from "https://unpkg.com/lit@2.0.0/index.js?module";
//import styles from "./header-component.scss"; // Import the SCSS file
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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    `;
  }
}

// Define the custom element
customElements.define("header-component", HeaderComponent);
