import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@justeattakeaway/pie-thumbnail';
import {
    type ThumbnailProps,
    defaultProps,
    variants,
    backgroundColors,
    sizes,
    aspectRatios,
} from '@justeattakeaway/pie-thumbnail';

import { type Meta } from '@storybook/web-components';
import { createStory, createVariantStory, type TemplateFunction } from '../../utilities';

type ThumbnailStoryMeta = Meta<ThumbnailProps>;

const defaultArgs: ThumbnailProps = {
    ...defaultProps,
    src: './static/images/pie-logo.svg',
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
        size: {
            description: 'Set the size of the thumbnail.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultArgs.size,
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
            control: 'select',
            options: backgroundColors,
            defaultValue: {
                summary: defaultProps.backgroundColor,
            },
        },
        aspectRatio: {
            description: 'Sets the aspect-ratio of the thumbnail image.',
            control: 'select',
            options: aspectRatios,
            defaultValue: {
                summary: defaultProps.aspectRatio,
            },
        },
        placeholder: {
            description: 'If an image fails to load, the placeholder prop can be used to ensure there is always something visible to users.',
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
    aspectRatio,
    size,
    src,
    alt,
    disabled,
    hasPadding,
    backgroundColor,
    placeholder,
}) => html`
    <pie-thumbnail
        variant="${ifDefined(variant)}"
        size="${ifDefined(size)}"
        src="${ifDefined(src)}"
        alt="${ifDefined(alt)}"
        backgroundColor="${ifDefined(backgroundColor)}"
        aspectRatio="${ifDefined(aspectRatio)}"
        ?disabled="${disabled}"
        ?hasPadding="${hasPadding}"
        .placeholder="${placeholder}">
    </pie-thumbnail>`;

// Define the prop options for the matrix
const sharedPropOptions = {
    src: [defaultArgs.src],
    alt: [defaultArgs.alt],
    size: [...sizes],
    disabled: [true, false],
    hasPadding: [true, false],
    backgroundColor: [defaultArgs.backgroundColor],
    placeholder: [defaultArgs.placeholder],
    aspectRatio: [defaultArgs.aspectRatio],
};

const defaultPropOptions = {
    ...sharedPropOptions,
    variant: ['default'],
};

const outlinePropOptions = {
    ...sharedPropOptions,
    variant: ['outline'],
};

const backgroundPropOptions = {
    backgroundColor: [...backgroundColors],
    variant: [...variants],
    src: ['https://www.pie.design/assets/img/404_narrow.png'],
};

const aspectRatio1by1PropOptions = {
    ...sharedPropOptions,
    aspectRatio: ['1by1'],
    src: [defaultArgs.src],
};

const aspectRatio4by3PropOptions = {
    ...sharedPropOptions,
    aspectRatio: ['4by3'],
    src: ['./static/images/burger-4by3.png'],
};

const aspectRatio16by9PropOptions = {
    ...sharedPropOptions,
    aspectRatio: ['16by9'],
    src: ['./static/images/burger-16by9.png'],
};

export const Default = createStory<ThumbnailProps>(Template, defaultArgs)();

export const InvalidSrc = createStory<ThumbnailProps>(Template, {
    placeholder: {
        src: 'https://www.pie.design/assets/img/404_narrow.png',
        alt: 'Placeholder Alt',
    },
    src: 'invalid-url.com',
    alt: 'Invalid text',
})();

export const ValidSrcWithPlaceholder = createStory<ThumbnailProps>(Template, {
    placeholder: {
        src: 'https://www.pie.design/assets/img/404_narrow.png',
        alt: 'Placeholder Alt',
    },
    src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
    alt: 'JET Logo',
})();

export const DefaultPropVariations = createVariantStory<ThumbnailProps>(Template, defaultPropOptions);
export const OutlinePropVariations = createVariantStory<ThumbnailProps>(Template, outlinePropOptions);
export const BackgroundPropVariations = createVariantStory<ThumbnailProps>(Template, backgroundPropOptions);
export const aspectRatio1by1PropVariations = createVariantStory<ThumbnailProps>(Template, aspectRatio1by1PropOptions);
export const aspectRatio4by3PropVariations = createVariantStory<ThumbnailProps>(Template, aspectRatio4by3PropOptions);
export const aspectRatio16by9PropVariations = createVariantStory<ThumbnailProps>(Template, aspectRatio16by9PropOptions);

