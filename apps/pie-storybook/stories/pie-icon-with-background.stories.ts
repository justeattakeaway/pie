import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

// Import from source so Vite resolves and transforms the component directly.
// The component does not self-load icons — each icon used must be imported here.
import '@justeattakeaway/pie-icon-with-background/src/index.ts';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAlertTriangle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconCheckCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAppRestaurant.js';
import '@justeattakeaway/pie-icons-webc/dist/IconAppOrder.js';

import {
    type IconWithBackgroundProps,
    variants,
    shapes,
    sizes,
    emphases,
    defaultProps,
} from '@justeattakeaway/pie-icon-with-background/src/index.ts';

import { createStory, type TemplateFunction } from '../utilities';

type IconWithBackgroundStoryMeta = Meta<IconWithBackgroundProps>;

const defaultArgs: IconWithBackgroundProps = {
    ...defaultProps,
    iconName: 'icon-alert-circle',
};

const storyMeta: IconWithBackgroundStoryMeta = {
    title: 'Components/Icon with Background (POC)',
    component: 'pie-icon-with-background',
    argTypes: {
        iconName: {
            description: 'Kebab-case name of a pre-imported pie icon (e.g. `icon-alert-circle`, `icon-check-circle`). The icon element must be imported separately by the consumer.',
            control: 'select',
            options: [
                'icon-alert-circle',
                'icon-alert-triangle',
                'icon-check-circle',
                'icon-info-circle',
                'icon-app-restaurant',
                'icon-app-order',
            ],
        },
        variant: {
            description: 'Colour variant of the background.',
            control: 'select',
            options: variants,
            defaultValue: { summary: defaultProps.variant },
        },
        shape: {
            description: 'Shape of the background container.',
            control: 'select',
            options: shapes,
            defaultValue: { summary: defaultProps.shape },
        },
        size: {
            description: 'Size of the component.',
            control: 'select',
            options: sizes,
            defaultValue: { summary: defaultProps.size },
        },
        emphasis: {
            description: 'Visual prominence of the background.',
            control: 'select',
            options: emphases,
            defaultValue: { summary: defaultProps.emphasis },
        },
        isDisabled: {
            description: 'When true, applies a disabled (50% opacity) style.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isDisabled },
        },
    },
    args: defaultArgs,
};

export default storyMeta;

const Template: TemplateFunction<IconWithBackgroundProps> = ({
    iconName,
    variant,
    shape,
    size,
    emphasis,
    isDisabled,
}) => html`
    <pie-icon-with-background
        icon-name="${iconName}"
        variant="${variant}"
        shape="${shape}"
        size="${size}"
        emphasis="${emphasis}"
        ?isDisabled="${isDisabled}">
    </pie-icon-with-background>
`;

const createIconWithBackgroundStory = createStory<IconWithBackgroundProps>(Template, defaultArgs);

export const Default = createIconWithBackgroundStory({});
export const Circle = createIconWithBackgroundStory({ shape: 'circle', variant: 'brand-01' });
export const Square = createIconWithBackgroundStory({ shape: 'square', variant: 'brand-01' });
export const Warning = createIconWithBackgroundStory({ variant: 'warning', iconName: 'icon-alert-triangle' });
export const Error = createIconWithBackgroundStory({ variant: 'error', iconName: 'icon-alert-circle' });
export const Success = createIconWithBackgroundStory({ variant: 'success', iconName: 'icon-check-circle' });
export const Information = createIconWithBackgroundStory({ variant: 'information', iconName: 'icon-info-circle' });
export const Disabled = createIconWithBackgroundStory({ isDisabled: true });
export const Subtle = createIconWithBackgroundStory({ emphasis: 'subtle', variant: 'brand-01' });

// Shows all sizes × shapes side by side
const AllSizesTemplate: TemplateFunction<IconWithBackgroundProps> = ({ iconName, variant, emphasis }) => html`
    <style>
        .overview-grid {
            display: grid;
            grid-template-columns: 80px repeat(4, 1fr);
            gap: 16px;
            align-items: center;
            font-family: sans-serif;
            font-size: 13px;
        }
        .overview-grid .header { font-weight: bold; text-align: center; }
        .overview-grid .label  { font-weight: bold; }
        .overview-grid .cell   { display: flex; justify-content: center; }
    </style>
    <div class="overview-grid">
        <div></div>
        <div class="header">Small</div>
        <div class="header">Medium</div>
        <div class="header">Large</div>
        <div class="header">XLarge</div>

        <div class="label">Circle</div>
        ${(['small', 'medium', 'large', 'xlarge'] as const).map((size) => html`
            <div class="cell">
                <pie-icon-with-background icon-name="${iconName}" variant="${variant}" shape="circle" size="${size}" emphasis="${emphasis}"></pie-icon-with-background>
            </div>
        `)}

        <div class="label">Square</div>
        ${(['small', 'medium', 'large', 'xlarge'] as const).map((size) => html`
            <div class="cell">
                <pie-icon-with-background icon-name="${iconName}" variant="${variant}" shape="square" size="${size}" emphasis="${emphasis}"></pie-icon-with-background>
            </div>
        `)}
    </div>
`;

export const AllSizes = createStory<IconWithBackgroundProps>(AllSizesTemplate, defaultArgs)({
    variant: 'brand-01',
    iconName: 'icon-alert-circle',
}, {
    controls: { include: ['iconName', 'variant', 'emphasis'] },
});

// Shows all colour variants in a grid
const AllVariantsTemplate: TemplateFunction<IconWithBackgroundProps> = ({
    iconName, shape, size, emphasis,
}) => html`
    <style>
        .variants-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            align-items: flex-end;
            font-family: sans-serif;
            font-size: 12px;
        }
        .variants-grid .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }
    </style>
    <div class="variants-grid">
        ${variants.map((variant) => html`
            <div class="item">
                <pie-icon-with-background icon-name="${iconName}" variant="${variant}" shape="${shape}" size="${size}" emphasis="${emphasis}"></pie-icon-with-background>
                <span>${variant}</span>
            </div>
        `)}
    </div>
`;

export const AllVariants = createStory<IconWithBackgroundProps>(AllVariantsTemplate, defaultArgs)({
    iconName: 'icon-alert-circle',
    size: 'large',
}, {
    controls: { include: ['iconName', 'shape', 'size', 'emphasis'] },
});
