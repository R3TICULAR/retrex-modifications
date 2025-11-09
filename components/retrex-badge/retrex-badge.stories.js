import './retrex-badge.js';

export default {
  title: 'Components/RetrexBadge',
  component: 'retrex-badge',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['development', 'beta', 'live', 'archived', 'coming-soon'],
    },
    text: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <retrex-badge variant="${args.variant}">${args.text}</retrex-badge>
  `;
  return container;
};

export const Development = Template.bind({});
Development.args = {
  variant: 'development',
  text: 'In Development',
};

export const Beta = Template.bind({});
Beta.args = {
  variant: 'beta',
  text: 'Beta',
};

export const Live = Template.bind({});
Live.args = {
  variant: 'live',
  text: 'Live',
};

export const Archived = Template.bind({});
Archived.args = {
  variant: 'archived',
  text: 'Archived',
};

export const ComingSoon = Template.bind({});
ComingSoon.args = {
  variant: 'coming-soon',
  text: 'Coming Soon',
};

export const AllVariants = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '1rem';
  container.style.flexWrap = 'wrap';
  container.style.padding = '2rem';
  
  container.innerHTML = `
    <retrex-badge variant="development">In Development</retrex-badge>
    <retrex-badge variant="beta">Beta v2.1</retrex-badge>
    <retrex-badge variant="live">Live Production</retrex-badge>
    <retrex-badge variant="archived">Archived</retrex-badge>
    <retrex-badge variant="coming-soon">Coming Soon</retrex-badge>
  `;
  return container;
};