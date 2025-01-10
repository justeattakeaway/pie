import { html } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-thumbnail';
import { type ThumbnailProps, defaultProps, variants } from '@justeattakeaway/pie-thumbnail';

import { createStory, type TemplateFunction } from '../utilities';

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
}) => html`
    <pie-thumbnail
        variant="${variant}"
        src="${src}"
        alt="${alt}">
    </pie-thumbnail>`;

const createThumbnailStory = createStory<ThumbnailProps>(Template, defaultArgs);

export const Default = createThumbnailStory({}, {});

export const Outline = createThumbnailStory({
    variant: 'outline',
}, {});
