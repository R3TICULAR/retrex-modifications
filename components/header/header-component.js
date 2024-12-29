import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit@2.0.0/index.js?module";

class HeaderComponent extends LitElement {
  // Defining styles using standard CSS
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #008080;
      color: white;
      max-block-size: 80px;
    }

    nav {
      display: flex;
      gap: 20px;
    }

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
    }

    a:hover {
      text-decoration: underline;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
  `;

  /**
   * @slot 'logo' - Slot for logo present within navigation bar
   * @slot 'nav-options' - Slot for multiple page navigation options to display 
   */

  render() {
    return html`
      <link rel="stylesheet" href="./header/header.css" />
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
