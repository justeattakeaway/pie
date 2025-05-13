import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-<%= fileName %>';
import { type <%= componentName %>Props } from '@justeattakeaway/pie-<%= fileName %>';

import { createStory } from '../utilities';

type <%= componentName %>StoryMeta = Meta<<%= componentName %>Props>;

const defaultArgs: <%= componentName %>Props = {};

const <%= componentNameCamelCase %>StoryMeta: <%= componentName %>StoryMeta = {
    title: 'Components/<%= displayName %>',
    component: 'pie-<%= fileName %>',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default <%= componentNameCamelCase %>StoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: <%= componentName %>Props) => html`
    <pie-<%= fileName %>></pie-<%= fileName %>>
`;

export const Default = createStory<<%= componentName %>Props>(Template, defaultArgs)();
