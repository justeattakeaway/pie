import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-thumbnail';
import {
    type ThumbnailProps,
    defaultProps,
    variants,
    backgroundColors,
    sizes,
    aspectRatios,
} from '@justeattakeaway/pie-thumbnail';

import { createStory, type TemplateFunction } from '../utilities';

type ThumbnailStoryMeta = Meta<ThumbnailProps>;

const defaultArgs: ThumbnailProps = {
    ...defaultProps,
    src: './static/images/pie-logo.svg',
    alt: 'The PIE design system logo',
};

const thumbnailStoryMeta: ThumbnailStoryMeta = {
    title: 'Components/Thumbnail',
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
        hideDefaultPlaceholder: {
            description: 'Hides the component default placeholder on image load failure.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.hideDefaultPlaceholder,
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
            description: 'Overrides the component default placeholder with a custom one on image load failure.',
            control: 'object',
            defaultValue: {
                summary: defaultProps.placeholder,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/z8B7RUnz2Oq8cplqN38E9j/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=17054-19120&node-type=instance&m=dev',
        },
    },
};

export default thumbnailStoryMeta;

const Template: TemplateFunction<ThumbnailProps> = ({
    variant,
    size,
    src,
    alt,
    disabled,
    hasPadding,
    hideDefaultPlaceholder,
    backgroundColor,
    placeholder,
    aspectRatio,
}) => html`
    <pie-thumbnail
        variant="${ifDefined(variant)}"
        size="${ifDefined(size)}"
        aspectRatio="${ifDefined(aspectRatio)}"
        src="${ifDefined(src)}"
        alt="${ifDefined(alt)}"
        backgroundColor="${ifDefined(backgroundColor)}"
        ?disabled="${disabled}"
        ?hasPadding="${hasPadding}"
        ?hideDefaultPlaceholder="${hideDefaultPlaceholder}"
        .placeholder="${placeholder}"
    </pie-thumbnail>`;

const createThumbnailStory = createStory<ThumbnailProps>(Template, defaultArgs);

export const Default = createThumbnailStory({}, {});

export const Outline = createThumbnailStory({
    variant: 'outline',
}, {});

export const AspectRatio4By3 = createThumbnailStory({
    size: 120,
    src: './static/images/burger-4by3.png',
    alt: 'Burger King meal with a cheeseburger, fries, onion rings, and Coca-Cola.',
    aspectRatio: '4by3',
}, {});

export const AspectRatio16By9 = createThumbnailStory({
    size: 128,
    src: './static/images/burger-16by9.png',
    alt: 'Chef assembling a burger in a kitchen.',
    aspectRatio: '16by9',
}, {});

export const InvalidSrcAndDefaultPlaceholder = createThumbnailStory({
    src: 'invalid-url.com',
    alt: 'Invalid image url',
}, {});

export const InvalidSrcAndCustomPlaceholder = createThumbnailStory({
    src: 'invalid-url.com',
    alt: 'Invalid image url',
    placeholder: {
        src: 'https://www.pie.design/assets/img/404_narrow.png',
        alt: 'A custom placeholder image',
    },
}, {});
