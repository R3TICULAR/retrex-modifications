import './retrex-tile.js';
import '../retrex-button/retrex-button.js';

export default {
  title: 'Components/RetrexTile',
  component: 'retrex-tile',
  parameters: {
    layout: 'centered',
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
      <img slot="image" src="https://via.placeholder.com/300x200" alt="Project">
      <h3 slot="title">My Project</h3>
      <p slot="description">A cool project I built with modern web technologies.</p>
      <div slot="tags">React • Node.js • MongoDB</div>
      <div slot="actions">
        <retrex-button variant="primary" href="#">View Demo</retrex-button>
        <retrex-button variant="tertiary" href="#">GitHub</retrex-button>
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
