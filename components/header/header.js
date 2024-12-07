import { LitElement, html, css } from 'https://unpkg.com/lit@2.0.0/index.js?module';
import styles from 'components\header\header.css'

class HeaderComponent extends LitElement {
  // Defining styles using standard CSS
  static styles = css`${styles}`;

  render() {
    return html`
      <header>
        <div class="logo">Retrex Specs</div>
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
customElements.define('header-component', HeaderComponent);
