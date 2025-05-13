import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-breadcrumb';
import { type BreadcrumbProps, defaultProps, variants } from '@justeattakeaway/pie-breadcrumb';

import { createStory } from '../utilities';

type BreadcrumbStoryMeta = Meta<BreadcrumbProps>;

const defaultArgs: BreadcrumbProps = {
    ...defaultProps,
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
    title: 'Components/Breadcrumb',
    component: 'pie-breadcrumb',
    argTypes: {
        items: {
            description: 'The navigation items to display in the breadcrumb. Should be an array of objects containing `label` and `href` i.e: `{ label: \'homepage\', href: \'/\' }`',
            control: 'object',
        },
        variant: {
            description: 'Set the variant of the breadcrumb.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isCompact: {
            description: 'When set to true, a compact version of the breadcrumb is displayed, showing only the last item in the `items` property.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isCompact,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/46d9YJsbVPA9fEuC5C2EuT/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=314-23908&p=f&m=dev',
        },
    },
};

export default breadcrumbStoryMeta;

const Template = ({ items, variant, isCompact }: BreadcrumbProps) => html`
    <pie-breadcrumb
        ?isCompact="${isCompact}"
        variant="${ifDefined(variant)}"
        .items="${items}">
    </pie-breadcrumb>
`;

export const Default = createStory<BreadcrumbProps>(Template, defaultArgs)();
