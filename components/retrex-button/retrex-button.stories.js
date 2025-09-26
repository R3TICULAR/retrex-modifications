import './retrex-button.js';

export default {
  title: 'Components/RetrexButton',
  component: 'retrex-button',
  parameters: {
    layout: 'centered',
  },

};

export const Primary = () => {
  const container = document.createElement('div');
  container.innerHTML = `<retrex-button variant="primary">Primary Button</retrex-button>`;
  return container;
};

export const Secondary = () => {
  const container = document.createElement('div');
  container.innerHTML = `<retrex-button variant="secondary">Secondary Button</retrex-button>`;
  return container;
};

export const Tertiary = () => {
  const container = document.createElement('div');
  container.innerHTML = `<retrex-button variant="tertiary">Tertiary Button</retrex-button>`;
  return container;
};

export const AsLink = () => {
  const container = document.createElement('div');
  container.innerHTML = `<retrex-button href="#">Link Button</retrex-button>`;
  return container;
};

export const Disabled = () => {
  const container = document.createElement('div');
  container.innerHTML = `<retrex-button disabled>Disabled Button</retrex-button>`;
  return container;
};

export const Loading = () => {
  const container = document.createElement('div');
  container.innerHTML = `<retrex-button loading>Loading Button</retrex-button>`;
  return container;
};