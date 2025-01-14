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
    },
    args: defaultArgs,
};

export default thumbnailStoryMeta;

const Template: TemplateFunction<ThumbnailProps> = ({
    variant,
    src,
    alt,
}) => html`
    <pie-thumbnail
        variant="${variant}"
        src="${src}"
        alt="${alt}">
    </pie-thumbnail>`;

// Define the prop options for the matrix
const sharedPropOptions = {
    src: ['https://www.pie.design/assets/img/jet-logo-narrow.svg'],
    alt: ['JET logo'],
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
