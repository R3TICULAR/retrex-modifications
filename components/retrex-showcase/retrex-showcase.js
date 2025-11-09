import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './retrex-showcase.scss';

class RetrexShowcase extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  static properties = {
    projectCount: { type: Number, state: true }
  };

  constructor() {
    super();
    this.projectCount = 0;
  }

  firstUpdated() {
    this.updateProjectCount();
  }

  updateProjectCount() {
    const slot = this.shadowRoot.querySelector('slot[name="projects"]');
    const assignedElements = slot.assignedElements();
    this.projectCount = assignedElements.length;
  }

  render() {
    const gridClass = this.getGridClass();
    
    return html`
      <section class="retrex-showcase">
        <div class="showcase-header">
          <slot name="title"><h2>Featured Projects</h2></slot>
          <slot name="description"><p>A collection of my recent development work</p></slot>
        </div>
        <div class="projects-grid ${gridClass}">
          <slot name="projects" @slotchange="${this.updateProjectCount}"></slot>
        </div>
      </section>
    `;
  }

  getGridClass() {
    if (this.projectCount <= 4) {
      return 'grid-2x2';
    } else if (this.projectCount <= 6) {
      return 'grid-2x3';
    } else {
      return 'grid-auto';
    }
  }
}

if (!customElements.get('retrex-showcase')) {
  customElements.define('retrex-showcase', RetrexShowcase);
}