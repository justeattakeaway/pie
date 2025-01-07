import { html } from 'lit';

import '@justeattakeaway/pie-thumbnail';
import { type ThumbnailProps } from '@justeattakeaway/pie-thumbnail';

import { type Meta } from '@storybook/web-components';
import { createVariantStory, type TemplateFunction } from '../../utilities';

type ThumbnailStoryMeta = Meta<ThumbnailProps>;

const thumbnailStoryMeta: ThumbnailStoryMeta = {
    title: 'Thumbnail',
    component: 'pie-thumbnail',
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
    src: ['https://www.takeaway.com/consumer-web/images/takeaway-brand.61e55e0b.svg'],
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
