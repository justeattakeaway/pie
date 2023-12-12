import { html } from 'lit';

/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-tag';
import { TagProps } from '@justeattakeaway/pie-tag';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type TagStoryMeta = StoryMeta<TagProps>;

const defaultArgs: TagProps = {};

const tagStoryMeta: TagStoryMeta = {
    title: 'Tag',
    component: 'pie-tag',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default tagStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: TagProps) => html`
    <pie-tag></pie-tag>
`;

export const Default = createStory<TagProps>(Template, defaultArgs)();
