import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-input';
import { InputProps } from '@justeattakeaway/pie-input';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type InputStoryMeta = StoryMeta<InputProps>;

const defaultArgs: InputProps = {};

const inputStoryMeta: InputStoryMeta = {
    title: 'Input',
    component: 'pie-input',
    argTypes: {},
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
const Template = ({}: InputProps) => html`
    <pie-input></pie-input>
`;

export const Default = createStory<InputProps>(Template, defaultArgs)();
