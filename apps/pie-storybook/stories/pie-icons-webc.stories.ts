import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-icons-webc';
import { IconsWebcProps } from '@justeattakeaway/pie-icons-webc';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type IconsWebcStoryMeta = StoryMeta<IconsWebcProps>;

const defaultArgs: IconsWebcProps = {};

const iconsWebcStoryMeta: IconsWebcStoryMeta = {
    title: 'Icons Webc',
    component: 'pie-icons-webc',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default iconsWebcStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: IconsWebcProps) => html`
    <pie-icons-webc></pie-icons-webc>
`;

export const Default = createStory<IconsWebcProps>(Template, defaultArgs)();
