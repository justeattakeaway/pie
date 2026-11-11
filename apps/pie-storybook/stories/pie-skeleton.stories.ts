import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-webc/components/skeleton';
import {
    type SkeletonProps,
    defaultProps,
    variants,
    backgroundColors,
    borderRadii,
    aspectRatios,
    buttonSizes,
} from '@justeattakeaway/pie-webc/components/skeleton';

import { createStory, type TemplateFunction } from '../utilities';
import { typographyIdentifiers } from '../utilities/typographyIdentifiers';

type SkeletonStoryMeta = Meta<SkeletonProps>;

const defaultArgs: SkeletonProps = {
    ...defaultProps,
};

const skeletonStoryMeta: SkeletonStoryMeta = {
    title: 'Components/Skeleton',
    component: 'pie-skeleton',
    argTypes: {
        variant: {
            description: 'Set the shape the skeleton draws: a box, circle, pill, block of text lines or a row of stars.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        backgroundColor: {
            description: 'Set the background colour. `strong` is darker (for nested levels) and `subtle` is lighter (for nested levels or darker surfaces).',
            control: 'select',
            options: backgroundColors,
            defaultValue: {
                summary: defaultProps.backgroundColor,
            },
        },
        width: {
            description: 'Set the width as an absolute value (e.g. `120px`) or a percentage of the container (e.g. `50%`). Ignored by the circle and star variants.',
            control: 'text',
        },
        height: {
            description: 'Set the height. The accepted formats depend on the variant (absolute, percentage, spacing identifier, typography identifier or `button-*`).',
            control: 'text',
        },
        lines: {
            description: 'Set the number of text lines to draw. Applies to the text variant only. Clamped between 1 and 10.',
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: {
                summary: defaultProps.lines,
            },
        },
        stars: {
            description: 'Set the number of stars to draw. Applies to the star variant only. Clamped between 1 and 10.',
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: {
                summary: defaultProps.stars,
            },
        },
        borderRadius: {
            description: 'Set the corner radius of the box variant as a radius token identifier (e.g. `radius-rounded-b`). Ignored by the other variants.',
            control: 'select',
            options: borderRadii,
            defaultValue: {
                summary: defaultProps.borderRadius,
            },
        },
        aspectRatio: {
            description: 'Set the aspect ratio of the box variant. Ignored when both width and height are set.',
            control: 'select',
            options: aspectRatios,
            defaultValue: {
                summary: defaultProps.aspectRatio,
            },
        },
        isResponsive: {
            description: 'When true, a pill with a `button-*` height switches to the wide button height above the md breakpoint, like pie-button. Ignored otherwise.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isResponsive,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/9CUn6OqiHWmpr9dg3lzysI/-Web-component-audit--Skeleton?node-id=345-32232',
        },
    },
};

export default skeletonStoryMeta;

const Template: TemplateFunction<SkeletonProps> = ({
    variant,
    backgroundColor,
    width,
    height,
    lines,
    stars,
    borderRadius,
    aspectRatio,
    isResponsive,
}) => html`
    <div style="width: 300px;">
        <pie-skeleton
            variant="${ifDefined(variant)}"
            backgroundColor="${ifDefined(backgroundColor)}"
            width="${ifDefined(width)}"
            height="${ifDefined(height)}"
            lines="${ifDefined(lines)}"
            stars="${ifDefined(stars)}"
            borderRadius="${ifDefined(borderRadius)}"
            aspectRatio="${ifDefined(aspectRatio)}"
            ?isResponsive="${isResponsive}">
        </pie-skeleton>
    </div>`;

const createSkeletonStory = createStory<SkeletonProps>(Template, defaultArgs);

// Builds the per-story argTypes for a story that fixes a single variant:
// - the variant control is disabled and its displayed default is set to that variant
//   (a disabled control shows the argType default rather than the arg value)
// - the controls for props the variant doesn't support are disabled
const fixedVariantArgTypes = (variant: typeof variants[number]) => {
    const argTypes: Record<string, unknown> = {
        variant: {
            description: `This story shows the ${variant} variant. To try another variant, view the other stories.`,
            control: { disable: true },
            defaultValue: { summary: variant },
        },
    };

    if (variant !== 'box') {
        argTypes.aspectRatio = { control: { disable: true } };
        argTypes.borderRadius = { control: { disable: true } };
    }

    if (variant !== 'pill') {
        argTypes.isResponsive = { control: { disable: true } };
    }

    if (variant !== 'text') {
        argTypes.lines = { control: { disable: true } };
    }

    if (variant !== 'star') {
        argTypes.stars = { control: { disable: true } };
    }

    if (variant === 'circle' || variant === 'star') {
        argTypes.width = { control: { disable: true } };
    }

    return argTypes;
};

export const Box = createSkeletonStory({}, {
    argTypes: fixedVariantArgTypes('box'),
});

export const Circle = createSkeletonStory({
    variant: 'circle',
    height: 'spacing-i',
}, {
    argTypes: fixedVariantArgTypes('circle'),
});

export const Pill = createSkeletonStory({
    variant: 'pill',
    height: 'button-medium',
}, {
    argTypes: {
        ...fixedVariantArgTypes('pill'),
        height: {
            description: 'Set the height as a pie-button size (a spacing identifier or an absolute value are also accepted).',
            control: 'select',
            options: buttonSizes,
        },
    },
});

export const Text = createSkeletonStory({
    variant: 'text',
    height: 'font-body-l',
    lines: 3,
}, {
    argTypes: {
        ...fixedVariantArgTypes('text'),
        height: {
            description: 'Set the height as a typography identifier (the token name without the --dt- prefix and -size suffix).',
            control: 'select',
            options: typographyIdentifiers,
        },
    },
});

export const Star = createSkeletonStory({
    variant: 'star',
    stars: 5,
}, {
    argTypes: fixedVariantArgTypes('star'),
});

// A single list row: an avatar, two lines of text, a rating and a trailing value that lines up
// with the first line of text, like a list of items and their values.
const listRow = () => html`
    <div style="display: flex; align-items: flex-start; gap: 12px; padding-block: 12px; border-bottom: 1px solid var(--dt-color-divider-default);">
        <pie-skeleton variant="circle" height="40px"></pie-skeleton>
        <div style="flex: 1; display: grid; gap: 8px;">
            <pie-skeleton variant="text" height="font-body-l" lines="2"></pie-skeleton>
            <div style="display: flex;">
              <pie-skeleton variant="star" stars="5"></pie-skeleton>
            </div>
        </div>
        <pie-skeleton variant="text" height="font-body-l" lines="1" width="64px"></pie-skeleton>
    </div>`;

// A composed list of skeleton rows, showing how the variants combine to stand in for a real list.
const ListTemplate: TemplateFunction<SkeletonProps> = () => html`
    <div style="width: 360px; padding: 16px; background-color: var(--dt-color-container-default); border-radius: 12px;">
        <pie-skeleton variant="box" width="100%" height="56px"></pie-skeleton>
        <div style="margin-block-start: 8px;">
            ${Array.from({ length: 24 }, () => listRow())}
        </div>
    </div>`;

export const ListItems = ListTemplate.bind({});
ListItems.parameters = {
    layout: 'padded',
    controls: { disable: true },
};
