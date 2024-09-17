import { html } from 'lit';

import '@justeattakeaway/pie-<%= fileName %>';
import { type <%= componentName %>Props } from '@justeattakeaway/pie-<%= fileName %>';

import { type Meta } from '../types';
import { createStory } from '../utilities';

type <%= componentName %>StoryMeta = Meta<<%= componentName %>Props>;

const defaultArgs: <%= componentName %>Props = {};

const <%= componentNameCamelCase %>StoryMeta: <%= componentName %>StoryMeta = {
    title: '<%= displayName %>',
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
