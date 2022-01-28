import { createButton } from './Button';

export default {
  title: 'Components/Button',
  component: createButton,
  decorators: [
    (story) => `<div style="margin: 3em;text-align:center;">${story().outerHTML}</div>`
  ],
};

const Template = (args) => {
  return createButton(args);
}

export const Default = Template.bind({});
Default.args = {
  label: 'Começar agora',
  outline: false,
  large: false,
  small: false,
  block: false,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Começar agora',
  outline: true,
  large: false,
  small: false,
  block: false,
};

export const Large = Template.bind({});
Large.args = {
  label: 'Começar agora',
  outline: true,
  large: true,
  small: false,
  block: false,
};

export const Small = Template.bind({});
Small.args = {
  label: 'Começar agora',
  outline: true,
  large: false,
  small: true,
  block: false,
};

export const Block = Template.bind({});
Block.args = {
  label: 'Começar agora',
  outline: true,
  large: false,
  small: false,
  block: true,
};
