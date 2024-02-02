import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-chip';
import { ChipProps } from '@justeattakeaway/pie-chip';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type ChipStoryMeta = StoryMeta<ChipProps>;

const defaultArgs: ChipProps = {};

const chipStoryMeta: ChipStoryMeta = {
    title: 'Chip',
    component: 'pie-chip',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default chipStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ChipProps) => html`
    <pie-chip></pie-chip>
`;

export const Default = createStory<ChipProps>(Template, defaultArgs)();
