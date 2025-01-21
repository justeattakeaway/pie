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
        src: 'https://fastly.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0',
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
                summary: defaultArgs.variant,
            },
        },
        src: {
            description: 'Set the src attribute for the underlying image tag.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.src,
            },
        },
        alt: {
            description: 'Set the alt attribute for the underlying image tag.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.alt,
            },
        },
        disabled: {
            description: 'Set the disabled attribute of the thumbnail.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },
        hasPadding: {
            description: 'Set the hasPadding attribute of the thumbnail.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.hasPadding,
            },
        },
        backgroundColor: {
            description: 'Set the backgroundColor attribute of the thumbnail.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.backgroundColor,
            },
        },
        placeholder: {
            description: 'Set the placeholder attribute of the thumbnail.',
            control: 'object',
            defaultValue: {
                summary: defaultArgs.placeholder,
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
    disabled: [defaultArgs.disabled],
    hasPadding: [defaultArgs.hasPadding],
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
