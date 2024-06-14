import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-textarea';
import { TextareaProps } from '@justeattakeaway/pie-textarea';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type TextareaStoryMeta = StoryMeta<TextareaProps>;

const defaultArgs: TextareaProps = {};

const textareaStoryMeta: TextareaStoryMeta = {
    title: 'Textarea',
    component: 'pie-textarea',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/6mNN7EK3baDTPJjFx2E69u/Textarea-web-component-audit?node-id=1573-114527',
        },
    },
};

export default textareaStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: TextareaProps) => html`
    <pie-textarea></pie-textarea>
`;

export const Default = createStory<TextareaProps>(Template, defaultArgs)();
