import { html } from 'lit';

import '@justeattakeaway/pie-thumbnail';
import { type ThumbnailProps, defaultProps, variants } from '@justeattakeaway/pie-thumbnail';

import { type Meta } from '@storybook/web-components';
import { createVariantStory, type TemplateFunction } from '../../utilities';

type ThumbnailStoryMeta = Meta<ThumbnailProps>;

const defaultArgs: ThumbnailProps = {
    ...defaultProps,
    src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
    alt: 'JET logo',
    placeholder: {
        src: 'https://www.pie.design/assets/img/404_narrow.png',
        alt: 'Thumbnail placeholder image',
    },
};

const thumbnailStoryMeta: ThumbnailStoryMeta = {
    title: 'Thumbnail',
    component: 'pie-thumbnail',
    argTypes: {
        variant: {
            description: 'Set the variant of the thumbnail.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        src: {
            description: 'Set the src attribute for the underlying image tag.',
            control: 'text',
            defaultValue: {
                summary: defaultProps.src,
            },
        },
        alt: {
            description: 'Set the alt attribute for the underlying image tag.',
            control: 'text',
            defaultValue: {
                summary: defaultProps.alt,
            },
        },
        disabled: {
            description: 'Applies the disabled styling to the thumbnail component.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
            },
        },
        hasPadding: {
            description: 'Adds extra space around the thumbnail container.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.hasPadding,
            },
        },
        backgroundColor: {
            description: 'Applies a background color to the thumbnail container.',
            control: 'text',
            defaultValue: {
                summary: defaultProps.backgroundColor,
            },
        },
        placeholder: {
            description: 'If an image is unavailable, the placeholder  prop can be used to ensure there is always something visible to users.',
            control: 'object',
            defaultValue: {
                summary: defaultProps.placeholder,
            },
        },
    },
    args: defaultArgs,
};

export default thumbnailStoryMeta;

const Template: TemplateFunction<ThumbnailProps> = ({
    variant,
    src,
    alt,
    disabled,
    hasPadding,
    backgroundColor,
    placeholder,
}) => html`
    <pie-thumbnail
        variant="${variant}"
        src="${src}"
        alt="${alt}"
        ?disabled="${disabled}"
        ?hasPadding="${hasPadding}"
        backgroundColor="${backgroundColor}"
        .placeholder="${placeholder}">
    </pie-thumbnail>`;

// Define the prop options for the matrix
const sharedPropOptions = {
    src: [defaultArgs.src],
    alt: [defaultArgs.alt],
    disabled: [true, false],
    hasPadding: [true, false],
    backgroundColor: [defaultArgs.backgroundColor],
    placeholder: [defaultArgs.placeholder],
};

const defaultPropOptions = {
    ...sharedPropOptions,
    variant: ['default'],
};

const outlinePropOptions = {
    ...sharedPropOptions,
    variant: ['outline'],
};

export const DefaultPropVariations = createVariantStory<ThumbnailProps>(Template, defaultPropOptions);
export const OutlinePropVariations = createVariantStory<ThumbnailProps>(Template, outlinePropOptions);
