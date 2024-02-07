import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-assistive-text';
import { AssistiveTextProps } from '@justeattakeaway/pie-assistive-text';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type AssistiveTextStoryMeta = StoryMeta<AssistiveTextProps>;

const defaultArgs: AssistiveTextProps = {};

const assistiveTextStoryMeta: AssistiveTextStoryMeta = {
    title: 'Assistive Text',
    component: 'pie-assistive-text',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default assistiveTextStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: AssistiveTextProps) => html`
    <pie-assistive-text></pie-assistive-text>
`;

export const Default = createStory<AssistiveTextProps>(Template, defaultArgs)();
