import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-thumbnail';
import { type ThumbnailProps } from '@justeattakeaway/pie-thumbnail';

import { createStory } from '../utilities';

type ThumbnailStoryMeta = Meta<ThumbnailProps>;

const defaultArgs: ThumbnailProps = {};

const thumbnailStoryMeta: ThumbnailStoryMeta = {
    title: 'Thumbnail',
    component: 'pie-thumbnail',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default thumbnailStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: ThumbnailProps) => html`
    <pie-thumbnail></pie-thumbnail>
`;

export const Default = createStory<ThumbnailProps>(Template, defaultArgs)();
