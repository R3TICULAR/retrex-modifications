import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./retrex-button.scss";

class RetrexButton extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    variant: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    type: { type: String },
    href: { type: String },
    target: { type: String },
    ariaLabel: { type: String },
  };

  constructor() {
    super();
    this.variant = "primary";
    this.disabled = false;
    this.loading = false;
    this.type = "button";
    this.href = "";
    this.target = "";
    this.ariaLabel = "";
  }

  /**
   * Handles click events and emits custom retrex-click event
   * @param {Event} event - The click event
   * @private
   */
  _handleClick(event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Emit custom click event
    this.dispatchEvent(
      new CustomEvent("retrex-click", {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Handles keyboard navigation (Enter and Space keys)
   * @param {KeyboardEvent} event - The keyboard event
   * @private
   */
  _handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this._handleClick(event);
    }
  }

  /**
   * Programmatically focus the button
   * @public
   */
  focus() {
    this.shadowRoot?.querySelector("button, a")?.focus();
  }

  /**
   * Remove focus from the button
   * @public
   */
  blur() {
    this.shadowRoot?.querySelector("button, a")?.blur();
  }

  /**
   * Programmatically trigger a click on the button
   * @public
   */
  click() {
    if (!this.disabled && !this.loading) {
      this.shadowRoot?.querySelector("button, a")?.click();
    }
  }

  render() {
    const isLink = this.href && !this.disabled;
    const classes = `retrex-button retrex-button--${this.variant}`;

    return html`
      ${isLink
        ? html`<a
            class="${classes}"
            href="${this.href}"
            @click="${this._handleClick}"
          >
            <slot name="icon-start"></slot>
            <span class="retrex-button__content"><slot></slot></span>
            <slot name="icon-end"></slot>
          </a>`
        : html`<button
            class="${classes}"
            type="${this.type}"
            ?disabled="${this.disabled}"
            @click="${this._handleClick}"
          >
            <slot name="icon-start"></slot>
            <span class="retrex-button__content"><slot></slot></span>
            <slot name="icon-end"></slot>
          </button>`}
    `;
  }
}

if (!customElements.get("retrex-button")) {
  customElements.define("retrex-button", RetrexButton);
}
