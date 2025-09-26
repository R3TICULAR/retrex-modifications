import './header-component.js';
import '../retrex-button/retrex-button.js';

export default {
  title: 'Components/HeaderComponent',
  component: 'header-component',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <header-component>
      <div slot="logo" class="h-logo has-image">
        <i class="fa-solid fa-yin-yang fa-2xl"></i>
      </div>
    </header-component>
    <script src="https://kit.fontawesome.com/e2ac688914.js" crossorigin="anonymous"></script>
  `;
  return container;
};

export const Default = Template.bind({});

export const WithCustomNav = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <header-component>
      <div slot="logo" class="h-logo has-image">
        <i class="fa-solid fa-yin-yang fa-2xl"></i>
      </div>
      <nav slot="nav-options">
        <retrex-button href="#home" variant="secondary" size="small">Home</retrex-button>
        <retrex-button href="#about" variant="secondary" size="small">About</retrex-button>
        <retrex-button href="#projects" variant="secondary" size="small">Projects</retrex-button>
        <retrex-button href="#contact" variant="secondary" size="small">Contact</retrex-button>
      </nav>
    </header-component>
    <script src="https://kit.fontawesome.com/e2ac688914.js" crossorigin="anonymous"></script>
  `;
  return container;
};