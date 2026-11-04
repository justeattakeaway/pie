import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/skeleton';
import { type SkeletonProps } from '@justeattakeaway/pie-webc/components/skeleton';

import { createStory } from '../utilities';

type SkeletonStoryMeta = Meta<SkeletonProps>;

const defaultArgs: SkeletonProps = {};

const skeletonStoryMeta: SkeletonStoryMeta = {
    title: 'Components/Skeleton',
    component: 'pie-skeleton',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default skeletonStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: SkeletonProps) => html`
    <pie-skeleton></pie-skeleton>
`;

export const Default = createStory<SkeletonProps>(Template, defaultArgs)();
