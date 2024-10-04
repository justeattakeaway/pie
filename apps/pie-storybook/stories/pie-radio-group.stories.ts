import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-radio-group';
import { type RadioGroupProps } from '@justeattakeaway/pie-radio-group';

import { createStory } from '../utilities';

type RadioGroupStoryMeta = Meta<RadioGroupProps>;

const defaultArgs: RadioGroupProps = {};

const radioGroupStoryMeta: RadioGroupStoryMeta = {
    title: 'Radio Group',
    component: 'pie-radio-group',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default radioGroupStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: RadioGroupProps) => html`
    <pie-radio-group></pie-radio-group>
`;

export const Default = createStory<RadioGroupProps>(Template, defaultArgs)();
