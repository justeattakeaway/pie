import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-breadcrumb';
import { type BreadcrumbProps } from '@justeattakeaway/pie-breadcrumb';

import { createStory } from '../../utilities';

type BreadcrumbStoryMeta = Meta<BreadcrumbProps>;

const defaultArgs: BreadcrumbProps = {
    items: [
        {
            label: 'Breadcrumb 1',
            href: '#',
        },
        {
            label: 'Breadcrumb 2',
            href: '#',
        },
        {
            label: 'Breadcrumb 3',
            href: '#',
        },
        {
            label: 'Current Page',
            href: '#',
        },
    ],
};

const breadcrumbStoryMeta: BreadcrumbStoryMeta = {
    title: 'Breadcrumb',
    component: 'pie-breadcrumb',
    argTypes: {
        items: {
            description: 'The navigation items to display in the breadcrumb. Should be an array of objects containing `label` and `href` i.e: `{ label: \'homepage\', href: \'/\' }`',
            control: 'object',
        },
    },
    args: defaultArgs,
};

export default breadcrumbStoryMeta;

const Template = ({ items }: BreadcrumbProps) => html`
    <pie-breadcrumb
        .items="${items}">
    </pie-breadcrumb>
`;

export const Default = createStory<BreadcrumbProps>(Template, defaultArgs)();
