import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-radio';
import { type RadioProps } from '@justeattakeaway/pie-radio';

import { createStory } from '../utilities';

type RadioStoryMeta = Meta<RadioProps>;

const defaultArgs: RadioProps = {};

const radioStoryMeta: RadioStoryMeta = {
    title: 'Radio',
    component: 'pie-radio',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default radioStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: RadioProps) => html`
    <pie-radio></pie-radio>
`;

export const Default = createStory<RadioProps>(Template, defaultArgs)();
