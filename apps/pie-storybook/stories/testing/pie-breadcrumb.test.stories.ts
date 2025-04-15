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
            description: 'Optional variant for styling the breadcrumb component.`default` will display a regular breadcrumb component. `back` variant will display the last element in the `items` property as a link',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        scrim: {
            description: 'Optional flag to enable or disable a scrim overlay for readability.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.scrim,
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

const Template = ({ items, scrim, variant }: BreadcrumbProps) => html`
    <pie-breadcrumb
        ?scrim="${scrim}"
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
    scrim: [true, false],
};

const defaultVariantPropOptions = {
    ...sharedPropOptions,
    variant: ['default'],
};

const backVariantPropOptions = {
    ...sharedPropOptions,
    variant: ['back'],
};

export const DefaultPropVariation = createVariantStory<BreadcrumbProps>(Template, defaultVariantPropOptions);
export const BackPropVariation = createVariantStory<BreadcrumbProps>(Template, backVariantPropOptions);
