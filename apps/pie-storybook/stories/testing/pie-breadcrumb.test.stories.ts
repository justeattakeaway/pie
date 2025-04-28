import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-breadcrumb';
import { type BreadcrumbProps, defaultProps, variants } from '@justeattakeaway/pie-breadcrumb';

import { createStory, createVariantStory } from '../../utilities';

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
    title: 'Breadcrumb',
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
            url: '',
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
export const WithLongText = createStory<BreadcrumbProps>(Template, {
    items: [{
        label: 'Breadcrumb 1',
        href: '#',
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque eget velit quis mollis.',
        href: '#',
    }],
})();

const sharedPropOptions = {
    items: [[...defaultArgs.items]],
    isCompact: [true, false],
};

const defaultVariantPropOptions = {
    ...sharedPropOptions,
    variant: ['default'],
};

const scrimVariantPropOptions = {
    ...sharedPropOptions,
    variant: ['scrim'],
};

export const DefaultPropVariation = createVariantStory<BreadcrumbProps>(Template, defaultVariantPropOptions);
export const ScrimPropVariation = createVariantStory<BreadcrumbProps>(Template, scrimVariantPropOptions);
