import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-link';
import {
    type LinkProps as LinkBaseProps, sizes, variants, iconPlacements, tags, buttonTypes, underlineTypes, defaultProps,
} from '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';

import { type SlottedComponentProps } from '../../types';
import {
    createStory, createVariantStory, type TemplateFunction, sanitizeAndRenderHTML,
} from '../../utilities';

type LinkProps = SlottedComponentProps<LinkBaseProps>;
type LinkStoryMeta = Meta<LinkProps>;

const defaultArgs: LinkProps = {
    ...defaultProps,
    iconPlacement: undefined,
    href: 'https://pie.design',
    target: '_blank',
    slot: 'Link',
    aria: { label: 'Link' },
    download: undefined,
};

const linkStoryMeta: LinkStoryMeta = {
    title: 'Link',
    component: 'pie-link',
    argTypes: {
        tag: {
            description: 'Set the element tag of the link.',
            control: 'select',
            options: tags,
            defaultValue: {
                summary: defaultProps.tag,
            },
        },
        variant: {
            description: 'Set the variant of the link.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: defaultProps.variant,
            },
        },
        size: {
            description: 'Set the size of the link.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: defaultProps.size,
            },
        },
        underline: {
            description: 'Set the underline behavior of the link.<br /><br />The `reverse` type can only be used if `isStandalone` is set to `true`',
            control: 'select',
            options: underlineTypes,
            defaultValue: {
                summary: defaultProps.underline,
            },
            if: { arg: 'isStandalone', eq: true },
        },
        iconPlacement: {
            description: 'Show a leading or trailing icon.<br /><br />To use this with pie-link, you can pass an icon into the `icon` slot.<br /><br />Can only be used if `isStandalone` is set to `true`',
            control: 'select',
            options: [undefined, ...iconPlacements],
            if: { arg: 'isStandalone', eq: true },
        },
        href: {
            description: 'The URL that the hyperlink should point to.',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        download: {
            description: 'Sets the download attribute to trigger file downloads. When an empty string, sets the download attribute without a value. When a non-empty string, sets the download attribute with the specified filename.',
            control: {
                type: 'select',
            },
            options: [undefined, '', 'custom-filename.svg'],
            if: { arg: 'tag', eq: 'a' },
        },
        target: {
            description: 'Set where to display the linked URL.',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        rel: {
            description: 'Set what the relationship of the linked URL is.',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        type: {
            description: 'Set the type of the button.',
            control: 'select',
            options: buttonTypes,
            defaultValue: {
                summary: defaultProps.type,
            },
            if: { arg: 'tag', eq: 'button' },
        },
        isBold: {
            description: 'If `true`, makes the link text bold.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isBold,
            },
        },
        isStandalone: {
            description: 'If `true`, the link will be treated as a block element.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.isStandalone,
            },
        },
        hasVisited: {
            description:  'If `true`, the link will apply the styles for the visited state.',
            control: 'boolean',
            defaultValue: {
                summary: defaultProps.hasVisited,
            },
            if: { arg: 'tag', eq: 'a' },
        },
        slot: {
            description: 'The default slot is used to pass the button text into the component.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        aria: {
            description: 'Set the aria-label attribute of the link.',
            control: 'text',
        },
    },
    args: defaultArgs,
};

export default linkStoryMeta;

const Template: TemplateFunction<LinkProps> = ({
    aria,
    tag,
    href,
    target,
    rel,
    download,
    size,
    variant,
    underline,
    type,
    isBold,
    isStandalone,
    hasVisited,
    slot,
    iconPlacement,
}) => html`
        <pie-link
            .aria="${aria}"
            tag="${ifDefined(tag)}"
            variant="${ifDefined(variant)}"
            size="${ifDefined(size)}"
            underline="${ifDefined(underline)}"
            iconPlacement="${ifDefined(iconPlacement)}"
            href="${ifDefined(href)}"
            download="${ifDefined(download)}"
            target="${ifDefined(target)}"
            rel="${ifDefined(rel)}"
            type="${ifDefined(type)}"
            ?isBold="${isBold}"
            ?isStandalone="${isStandalone}"
            ?hasVisited="${hasVisited}">
            ${iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
            ${sanitizeAndRenderHTML(slot)}
        </pie-link>`;

const createLinkStory = createStory<LinkProps>(Template, defaultArgs);

export const Default = createLinkStory();
export const HighVisibility = createLinkStory({ variant:  'high-visibility' });
export const Inverse = createLinkStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });

export const Download = createLinkStory({
    tag: 'a',
    href: '/static/images/logo--pie--dark.svg',
    download: '',
});

export const DownloadWithFilename = createLinkStory({
    tag: 'a',
    href: '/static/images/logo--pie--dark.svg',
    download: 'pie-logo.svg',
});

// Base shared props without variant or size
const baseSharedPropsMatrix: Partial<Record<keyof LinkProps, unknown[]>> = {
    tag: [...tags],
    isBold: [true, false],
    iconPlacement: [undefined, ...iconPlacements],
    isStandalone: [true, false],
};

// Default variant stories
const defaultSmallPropsMatrix: Partial<Record<keyof LinkProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['default'],
    size: ['small'],
    slot: ['Link'],
};

const defaultMediumPropsMatrix: Partial<Record<keyof LinkProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['default'],
    size: ['medium'],
    slot: ['Link'],
};

export const DefaultSmallVariations = createVariantStory<LinkProps>(Template, defaultSmallPropsMatrix);
export const DefaultMediumVariations = createVariantStory<LinkProps>(Template, defaultMediumPropsMatrix);

// High-visibility variant stories
const highVisibilitySmallPropsMatrix: Partial<Record<keyof LinkProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['high-visibility'],
    size: ['small'],
    slot: ['Link'],
};

const highVisibilityMediumPropsMatrix: Partial<Record<keyof LinkProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['high-visibility'],
    size: ['medium'],
    slot: ['Link'],
};

export const HighVisibilitySmallVariations = createVariantStory<LinkProps>(Template, highVisibilitySmallPropsMatrix);
export const HighVisibilityMediumVariations = createVariantStory<LinkProps>(Template, highVisibilityMediumPropsMatrix);

// Inverse variant stories
const inverseSmallPropsMatrix: Partial<Record<keyof LinkProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['inverse'],
    size: ['small'],
    slot: ['Link'],
};

const inverseMediumPropsMatrix: Partial<Record<keyof LinkProps, unknown[]>> = {
    ...baseSharedPropsMatrix,
    variant: ['inverse'],
    size: ['medium'],
    slot: ['Link'],
};

export const InverseSmallVariations = createVariantStory<LinkProps>(Template, inverseSmallPropsMatrix, { bgColor: 'dark (container-dark)' });
export const InverseMediumVariations = createVariantStory<LinkProps>(Template, inverseMediumPropsMatrix, { bgColor: 'dark (container-dark)' });
