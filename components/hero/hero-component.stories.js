import './hero-component.js';

export default {
  title: 'Components/HeroComponent',
  component: 'hero-component',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <hero-component>
      <h1 slot="title">Hey! I'm Cecil</h1>
      <p slot="description">
        Welcome to my portfolio site, designed to showcase my skills and projects in web development and design.
        Utilizing modern web technologies to create engaging and user-friendly experiences.
        With a focus on responsive design, accessibility, and performance, I aim to deliver high-quality solutions that meet the needs of users and clients alike.
      </p>
    </hero-component>
  `;
  return container;
};

export const Default = Template.bind({});