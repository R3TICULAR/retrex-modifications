import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './retrex-footer.scss';

class RetrexFooter extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  /**
   * @slot logo - Footer logo or branding
   * @slot github - GitHub social link
   * @slot linkedin - LinkedIn social link
   * @slot twitter - Twitter/X social link
   * @slot email - Email contact link
   * @slot links - Additional footer links
   * @slot copyright - Copyright text
   */

  render() {
    return html`
      <footer class="retrex-footer">
        <div class="footer-content">
          <div class="footer-branding">
            <slot name="logo"></slot>
          </div>
          
          <div class="footer-social">
            <slot name="github"></slot>
            <slot name="linkedin"></slot>
            <slot name="twitter"></slot>
            <slot name="email"></slot>
          </div>
          
          <div class="footer-links">
            <slot name="links"></slot>
          </div>
        </div>
        
        <div class="footer-bottom">
          <slot name="copyright">
            <p>&copy; ${new Date().getFullYear()} Retrex Mods. All rights reserved.</p>
          </slot>
        </div>
      </footer>
    `;
  }
}

customElements.define('retrex-footer', RetrexFooter);
