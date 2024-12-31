import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-thumbnail';
import {
    type ThumbnailProps, defaultProps, variants, backgroundColors,
} from '@justeattakeaway/pie-thumbnail';

import { createStory, type TemplateFunction } from '../utilities';

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
            control: 'select',
            options: backgroundColors,
            defaultValue: {
                summary: defaultProps.backgroundColor,
            },
        },
        placeholder: {
            description: 'If an image is unavailable, the placeholder prop can be used to ensure there is always something visible to users.',
            control: 'object',
            defaultValue: {
                summary: defaultProps.placeholder,
            },
        },
        disabled: {
            description: 'Set the disabled attribute of the thumbnail.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.disabled,
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
        .placeholder="${placeholder}"
    </pie-thumbnail>`;

const createThumbnailStory = createStory<ThumbnailProps>(Template, defaultArgs);

export const Default = createThumbnailStory({}, {});

export const Outline = createThumbnailStory({
    variant: 'outline',
}, {});
