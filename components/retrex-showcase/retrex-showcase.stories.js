import './retrex-showcase.js';
import '../retrex-tile/retrex-tile.js';

export default {
  title: 'Components/RetrexShowcase',
  component: 'retrex-showcase',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <retrex-showcase>
      <h2 slot="title">${args.title}</h2>
      <p slot="description">${args.description}</p>
      ${args.projects.map(project => `
        <retrex-tile slot="projects">
          <div slot="title">${project.title}</div>
          <div slot="description">${project.description}</div>
          <div slot="tags">${project.tags}</div>
        </retrex-tile>
      `).join('')}
    </retrex-showcase>
  `;
  return container;
};

export const TwoByTwo = Template.bind({});
TwoByTwo.args = {
  title: 'Featured Projects',
  description: 'A collection of my recent development work',
  projects: [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack web application with React and Node.js',
      tags: 'React • Node.js • MongoDB'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application built with React Native',
      tags: 'React Native • Firebase • Redux'
    },
    {
      title: 'Data Dashboard',
      description: 'Real-time analytics dashboard with interactive charts',
      tags: 'Vue.js • D3.js • Express'
    },
    {
      title: 'API Gateway',
      description: 'Microservices architecture with Docker deployment',
      tags: 'Docker • Kubernetes • Go'
    }
  ]
};

export const TwoByThree = Template.bind({});
TwoByThree.args = {
  title: 'All Projects',
  description: 'Complete portfolio of development work',
  projects: [
    ...TwoByTwo.args.projects,
    {
      title: 'Machine Learning Model',
      description: 'Predictive analytics using Python and TensorFlow',
      tags: 'Python • TensorFlow • Pandas'
    },
    {
      title: 'Blockchain DApp',
      description: 'Decentralized application on Ethereum network',
      tags: 'Solidity • Web3.js • Ethereum'
    }
  ]
};

export const SingleProject = Template.bind({});
SingleProject.args = {
  title: 'Latest Project',
  description: 'My most recent development work',
  projects: [TwoByTwo.args.projects[0]]
};