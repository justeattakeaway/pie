import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-lottie-player';
import { LottiePlayerProps } from '@justeattakeaway/pie-lottie-player';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type LottiePlayerStoryMeta = StoryMeta<LottiePlayerProps>;

const defaultArgs: LottiePlayerProps = {};

const lottiePlayerStoryMeta: LottiePlayerStoryMeta = {
    title: 'Lottie Player',
    component: 'pie-lottie-player',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default lottiePlayerStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: LottiePlayerProps) => html`
    <pie-lottie-player></pie-lottie-player>
`;

export const Default = createStory<LottiePlayerProps>(Template, defaultArgs)();
