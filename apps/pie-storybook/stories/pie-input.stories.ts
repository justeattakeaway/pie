import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-input';
import { types, InputProps } from '@justeattakeaway/pie-input';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type InputStoryMeta = StoryMeta<InputProps>;

const defaultArgs: InputProps = {
    type: 'text',
};

const inputStoryMeta: InputStoryMeta = {
    title: 'Input',
    component: 'pie-input',
    argTypes: {
        type: {
            description: 'The type of HTML input to render.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: 'text',
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default inputStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({ type }: InputProps) => html`
    <pie-input type=${ifDefined(type)}></pie-input>
`;

export const Default = createStory<InputProps>(Template, defaultArgs)();
