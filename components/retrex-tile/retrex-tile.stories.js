import './retrex-tile.js';
import '../retrex-button/retrex-button.js';
import '../retrex-badge/retrex-badge.js';

export default {
  title: 'Components/RetrexTile',
  component: 'retrex-tile',
  parameters: {
    layout: 'padded',
  },
};

export const Generic = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <retrex-tile variant="generic">
      <h3 slot="title">Generic Tile</h3>
      <p slot="description">This is a basic tile component with some content.</p>
    </retrex-tile>
  `;
  return container;
};

export const Project = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <retrex-tile variant="project">
      <h3 slot="title">My Project</h3>
      <p slot="description">A cool project I built with modern web technologies.</p>
      <div slot="tags">React • Node.js • MongoDB</div>
      <div slot="actions">
        <retrex-button variant="primary" href="#">View Demo</retrex-button>
        <retrex-button variant="secondary" href="#">GitHub</retrex-button>
      </div>
    </retrex-tile>
  `;
  return container;
};

export const WithBadge = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <retrex-tile variant="project">
      <h3 slot="title">Portfolio Website</h3>
      <retrex-badge slot="badge" variant="live">Live</retrex-badge>
      <p slot="description">Personal developer portfolio built with Lit web components, featuring responsive design and modern animations.</p>
      <div slot="tags">Lit • SCSS • Vite • Storybook</div>
      <div slot="actions">
        <retrex-button variant="primary" href="#">View Demo</retrex-button>
        <retrex-button variant="secondary" href="#">GitHub</retrex-button>
      </div>
    </retrex-tile>
  `;
  return container;
};

export const Clickable = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <retrex-tile variant="skill" clickable href="#">
      <h3 slot="title">JavaScript</h3>
      <p slot="description">Advanced proficiency in modern JavaScript.</p>
    </retrex-tile>
  `;
  return container;
};
