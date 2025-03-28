import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-breadcrumb';
import { type BreadcrumbProps } from '@justeattakeaway/pie-breadcrumb';

import { createStory } from '../utilities';

type BreadcrumbStoryMeta = Meta<BreadcrumbProps>;

const defaultArgs: BreadcrumbProps = {};

const breadcrumbStoryMeta: BreadcrumbStoryMeta = {
    title: 'Breadcrumb',
    component: 'pie-breadcrumb',
    argTypes: {},
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default breadcrumbStoryMeta;

// TODO: remove the eslint-disable rule when props are added
// eslint-disable-next-line no-empty-pattern
const Template = ({}: BreadcrumbProps) => html`
    <pie-breadcrumb></pie-breadcrumb>
`;

export const Default = createStory<BreadcrumbProps>(Template, defaultArgs)();
