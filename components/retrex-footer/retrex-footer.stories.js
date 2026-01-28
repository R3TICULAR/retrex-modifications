import './retrex-footer.js';

export default {
  title: 'Components/RetrexFooter',
  component: 'retrex-footer',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => {
  const container = document.createElement('div');
  container.innerHTML = `<retrex-footer></retrex-footer>`;
  return container;
};