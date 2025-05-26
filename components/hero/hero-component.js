import { LitElement, html, css } from 'lit';

class HeroComponent extends LitElement {
    static styles = css`
    :host {
      display: block;
      width: 100%;
      position: relative;
      overflow: hidden;
      height: 250px;
      color: white;
    }

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
    }

    ::slotted(video) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.5); /* Darken video for better text contrast */
    }

    .content {
      position: relative;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 1;
      padding: 16px;
      background: rgba(0, 0, 0, 0.3); /* Optional: Adds a semi-transparent background for extra readability */
      border-radius: 8px;
    }

    h1 {
      font-size: 3rem;
      margin: 0;
      font-weight: bold;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }

    p {
      font-size: 1.2rem;
      margin: 16px 0 24px;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
    }

    .cta-button {
      display: inline-block;
      padding: 12px 24px;
      font-size: 1rem;
      font-weight: bold;
      color: #002f34;
      background: #00e5d2;
      border: none;
      border-radius: 4px;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      text-decoration: none;
      transition: background 0.3s, transform 0.2s;
    }

    .cta-button:hover {
      background: #00b3a4;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      :host {
        height: 300px;
      }

      h1 {
        font-size: 2.4rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `;

  render() {
    return html`
      <div class="video-container">
        <slot name="video"></slot>
      </div>
      <div class="content">
        <h1>Retrex Specs</h1>
        <p>Where performance meets precision in motorsports innovation.</p>
        <a href="#explore" class="cta-button">Explore Now</a>
      </div>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
