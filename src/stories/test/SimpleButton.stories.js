export default {
  title: 'Test/SimpleButton',
  component: 'simple-button',
};

const Template = (args) => {
  const button = document.createElement('button');
  button.textContent = args.label || 'Simple Button';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = 'var(--color-primary)';
  button.style.color = 'var(--color-bg)';
  button.style.border = 'none';
  button.style.borderRadius = '6px';
  return button;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Test Button',
};