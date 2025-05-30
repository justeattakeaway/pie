import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-breadcrumb';
import '@justeattakeaway/pie-breadcrumb/dist/pie-breadcrumb-item';
import { type BreadcrumbProps as BreadcrumbPropsBase, defaultProps, variants } from '@justeattakeaway/pie-breadcrumb';

import { type SlottedComponentProps } from '../../types';
import { createStory, createVariantStory, sanitizeAndRenderHTML } from '../../utilities';

type BreadcrumbProps = SlottedComponentProps<BreadcrumbPropsBase>;
type BreadcrumbStoryMeta = Meta<BreadcrumbProps>;

const slot = `<pie-breadcrumb-item href="#">Breadcrumb 1</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Breadcrumb 2</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Breadcrumb 3</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Current Page</pie-breadcrumb-item>`;

const defaultArgs: BreadcrumbProps = {
    ...defaultProps,
    slot,
};

const breadcrumbStoryMeta: BreadcrumbStoryMeta = {
    title: 'Breadcrumb',
    component: 'pie-breadcrumb',
    argTypes: {
        variant: {
            description: 'Set the variant of the breadcrumb.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        isCompact: {
            description: 'When set to true, only the previous breadcrumb item is shown for quick navigation. If there\'s no item to go back to, the breadcrumb is hidden.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isCompact,
            },
        },
        hideCurrentPage: {
            description: 'When set to true, the current page of the breadcrumb (last item) is hidden',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.hideCurrentPage,
            },
        },
        slot: {
            description: 'The default slot is used to pass `pie-breadcrumb-item` elements. If only one item is provided, the breadcrumb is hidden.',
            control: 'text',
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

const Template = ({
    variant,
    isCompact,
    hideCurrentPage,
    slot,
}: BreadcrumbProps) => html`
    <pie-breadcrumb
        variant="${ifDefined(variant)}"
        ?isCompact="${isCompact}"
        ?hideCurrentPage="${hideCurrentPage}">
            ${sanitizeAndRenderHTML(slot, { ALLOWED_TAGS: ['pie-breadcrumb-item'] })}
    </pie-breadcrumb>
`;

export const Default = createStory<BreadcrumbProps>(Template, defaultArgs)();
export const WithLongText = createStory<BreadcrumbProps>(Template, {
    slot: `<pie-breadcrumb-item href="#">Breadcrumb 1</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque eget velit quis mollis.</pie-breadcrumb-item>`,
})();

const sharedPropOptions = {
    isCompact: [true, false],
    hideCurrentPage: [true, false],
    slot: [slot],
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
