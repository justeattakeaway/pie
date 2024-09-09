import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-radio';
import { RadioProps } from '@justeattakeaway/pie-radio';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type RadioStoryMeta = StoryMeta<RadioProps>;

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
