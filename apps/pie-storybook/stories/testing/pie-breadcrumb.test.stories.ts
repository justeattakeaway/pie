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
            description: 'When set to true, a compact version of the breadcrumb is displayed to navigate to the higher-level page in the hierarchy.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isCompact,
            },
        },
        slot: {
            description: 'Content to place within the breadcrumb. Use `pie-breadcrumb-item` elements as children.',
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
    slot,
}: BreadcrumbProps) => html`
    <pie-breadcrumb
        ?isCompact="${isCompact}"
        variant="${ifDefined(variant)}">
            ${sanitizeAndRenderHTML(slot, { ALLOWED_TAGS: ['pie-breadcrumb-item'] })}
    </pie-breadcrumb>
`;

export const Default = createStory<BreadcrumbProps>(Template, defaultArgs)();
export const WithLongText = createStory<BreadcrumbProps>(Template, {
    slot: `<pie-breadcrumb-item href="#">Breadcrumb 1</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque eget velit quis mollis.</pie-breadcrumb-item>
        <pie-breadcrumb-item href="#">Current Page</pie-breadcrumb-item>`,
})();

const sharedPropOptions = {
    isCompact: [true, false],
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
