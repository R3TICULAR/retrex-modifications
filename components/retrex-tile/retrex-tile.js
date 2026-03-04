import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './retrex-tile.scss';

class RetrexTile extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  static properties = {
    variant: { type: String, reflect: true },
    clickable: { type: Boolean, reflect: true },
    href: { type: String },
    _hasImage: { type: Boolean, state: true }
  };

  constructor() {
    super();
    this.variant = 'generic';
    this.clickable = false;
    this.href = '';
    this._hasImage = false;
  }

  firstUpdated() {
    const imageSlot = this.shadowRoot.querySelector('slot[name="image"]');
    this._hasImage = imageSlot.assignedElements().length > 0;
    imageSlot.addEventListener('slotchange', () => {
      this._hasImage = imageSlot.assignedElements().length > 0;
    });
  }

  _handleClick(event) {
    if (this.href && this.clickable) {
      window.open(this.href, '_self');
    }
  }

  render() {
    const classes = `retrex-tile retrex-tile--${this.variant} ${this.clickable ? 'retrex-tile--clickable' : ''}`;
    const imageClasses = `retrex-tile__image ${!this._hasImage ? 'retrex-tile__image--default' : ''}`;
    
    return html`
      <div class="${classes}" @click="${this._handleClick}">
        <div class="${imageClasses}">
          <slot name="image"></slot>
        </div>
        
        <div class="retrex-tile__content">
          <div class="retrex-tile__header">
            <div class="retrex-tile__title-section">
              <slot name="title"></slot>
              <slot name="subtitle"></slot>
            </div>
            <div class="retrex-tile__badge">
              <slot name="badge"></slot>
            </div>
          </div>
          
          <div class="retrex-tile__body">
            <slot name="description"></slot>
          </div>
          
          <div class="retrex-tile__tags">
            <slot name="tags"></slot>
          </div>
          
          <div class="retrex-tile__actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('retrex-tile')) {
  customElements.define('retrex-tile', RetrexTile);
}
