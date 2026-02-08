import type { StoryBackgrounds } from '../types/StoryOptions';
import tokens from '@justeat/pie-design-tokens/dist/tokens.json';

const { alias, global } = tokens.theme.jet.color;

const CUSTOM_BACKGROUNDS : StoryBackgrounds = {
  default: 'light (container-default)',
  values: [
    {
      name: 'light (container-default)',
      value: 'var(--dt-color-container-default)', // Uses CSS variable for better support of dark/light mode in Storybook
    },
    {
      name: 'dark (container-dark)',
      value: alias.default['container-dark'],
    },
    {
      name: 'background-subtle',
      value: alias.default['background-subtle'],
    },
    {
      name: 'background-dark',
      value: alias.default['background-dark'],
    },
    {
      name: 'container-inverse',
      value: 'var(--dt-color-container-inverse)',
    },
    {
      name: 'container-inverse',
      value: 'var(--dt-color-container-inverse)', // Uses CSS variable for better support of dark/light mode in Storybook
    },
    {
      name: 'brand orange',
      value: global.orange,
    },
    {
      name: 'saddlebrown',
      value: 'saddlebrown',
    },
    {
      name: 'aquamarine',
      value: 'aquamarine',
    },
  ]
};

export default CUSTOM_BACKGROUNDS;
