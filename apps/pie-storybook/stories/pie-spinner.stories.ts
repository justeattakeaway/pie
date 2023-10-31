import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-spinner';
import { SpinnerProps } from '@justeattakeaway/pie-spinner';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type SpinnerStoryMeta = StoryMeta<SpinnerProps>;

const defaultArgs: SpinnerProps = {};

const spinnerStoryMeta: SpinnerStoryMeta = {
    title: 'Spinner',
    component: 'pie-spinner',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default spinnerStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: SpinnerProps) => html`
    <pie-spinner></pie-spinner>
`;

export const Default = createStory<SpinnerProps>(Template, defaultArgs)();
