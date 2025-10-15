import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-link';
import {
    type LinkProps as LinkBaseProps,
    sizes,
    variants,
    iconPlacements,
    tags,
    buttonTypes,
    underlineTypes,
    defaultProps,
} from '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';

import { type SlottedComponentProps } from '../types';
import {
    createStory,
    type TemplateFunction,
    sanitizeAndRenderHTML,
} from '../utilities';

/**
 * Extend base LinkProps so that
 * we can toggle the standalone note on/off internally.
 */
interface ExtendedLinkProps extends SlottedComponentProps<LinkBaseProps> {
    /**
     * Not exposed to Storybook controls.
     * If `true`, display a note about needing `isStandalone`.
     */
    showStandaloneNote?: boolean;
    isDownload?: boolean;
    downloadFilename?: string;
}

type LinkStoryMeta = Meta<ExtendedLinkProps>;

const defaultArgs: ExtendedLinkProps = {
    ...defaultProps,
    iconPlacement: undefined,
    href: 'https://pie.design',
    target: '_blank',
    slot: 'Link',
    isDownload: false,
    downloadFilename: undefined,
};

const linkStoryMeta: LinkStoryMeta = {
    title: 'Components/Link',
    component: 'pie-link',
    argTypes: {
        tag: {
            description: 'Set the element tag of the link.',
            control: 'select',
            options: tags,
            defaultValue: { summary: defaultProps.tag },
        },
        variant: {
            description: 'Set the variant of the link.',
            control: 'select',
            options: variants,
            defaultValue: { summary: defaultProps.variant },
        },
        size: {
            description: 'Set the size of the link.',
            control: 'select',
            options: sizes,
            defaultValue: { summary: defaultProps.size },
        },
        underline: {
            description:
                'Set the underline behavior of the link.<br /><br />The `reverse` type can only be used if `isStandalone` is set to `true`',
            control: 'select',
            options: underlineTypes,
            defaultValue: { summary: defaultProps.underline },
        },
        iconPlacement: {
            description:
                'Show a leading or trailing icon.<br /><br />To use this with pie-link, you can pass an icon into the `icon` slot.<br /><br />Can only be used if `isStandalone` is set to `true`',
            control: 'select',
            options: [undefined, ...iconPlacements],
        },
        href: {
            description: 'The URL that the hyperlink should point to. Only applies if `tag` is `a`.',
            control: 'text',
        },
        target: {
            description: 'Set where to display the linked URL. Only applies if `tag` is `a`.',
            control: 'text',
        },
        isDownload: {
            description: 'Sets the download attribute (without value) to trigger file downloads. Only applies if `tag` is `a`.',
            control: 'boolean',
        },
        downloadFilename: {
            description: 'Sets the download attribute with a custom filename. Takes priority over isDownload. Only applies if `tag` is `a`.',
            control: 'text',
        },
        rel: {
            description:
                'Set what the relationship of the linked URL is. Only applies if `tag` is `a`.',
            control: 'text',
        },
        type: {
            description: 'Set the type of the button. Only applies if `tag` is `button`.',
            control: 'select',
            options: buttonTypes,
            defaultValue: { summary: defaultProps.type },
        },
        isBold: {
            description: 'If `true`, makes the link text bold.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isBold },
        },
        isStandalone: {
            description: 'If `true`, the link will be treated as a block element.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.isStandalone },
        },
        hasVisited: {
            description:
                'If `true`, the link will apply the styles for the visited state. Only applies if `tag` is `a`.',
            control: 'boolean',
            defaultValue: { summary: defaultProps.hasVisited },
        },
        slot: {
            description: 'The default slot is used to pass the text into the component.',
            control: 'text',
            defaultValue: { summary: '' },
        },
        aria: {
            description: 'Set the aria-label attribute of the link.',
            control: 'text',
        },

        /**
         * IMPORTANT: This ensures `showStandaloneNote` does NOT show in Storybook Controls.
         */
        showStandaloneNote: {
            table: {
                disable: true,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/Core-Web-Components-%5BDESIGNERS-DO-NOT-USE%5D?type=design&node-id=364-29974&mode=design',
        },
    },
};

export default linkStoryMeta;

const Template: TemplateFunction<ExtendedLinkProps> = ({
    aria,
    tag,
    href,
    target,
    rel,
    isDownload,
    downloadFilename,
    size,
    variant,
    underline,
    type,
    isBold,
    isStandalone,
    hasVisited,
    slot,
    iconPlacement,
    showStandaloneNote,
}) => html`
    <pie-link
        .aria="${aria}"
        tag="${ifDefined(tag)}"
        variant="${ifDefined(variant)}"
        size="${ifDefined(size)}"
        underline="${ifDefined(underline)}"
        iconPlacement="${ifDefined(iconPlacement)}"
        href="${ifDefined(href)}"
        target="${ifDefined(target)}"
        ?isDownload="${isDownload}"
        downloadFilename="${ifDefined(downloadFilename)}"
        rel="${ifDefined(rel)}"
        type="${ifDefined(type)}"
        ?isBold="${isBold}"
        ?isStandalone="${isStandalone}"
        ?hasVisited="${hasVisited}"
    >
        ${iconPlacement
    ? html`<icon-plus-circle slot="icon"></icon-plus-circle>`
    : nothing}
        ${sanitizeAndRenderHTML(slot)}
    </pie-link>

    ${showStandaloneNote
        ? html`<p>
            The <b>isStandalone</b> property must be set to true for icons to work.
            The icon size is hardcoded and cannot be overridden.
        </p>`
        : nothing}
`;

const createLinkStory = createStory<ExtendedLinkProps>(Template, defaultArgs);

export const Default = createLinkStory();

export const HighVisibility = createLinkStory({
    variant: 'high-visibility',
});

export const Inverse = createLinkStory(
    { variant: 'inverse' },
    { bgColor: 'dark (container-dark)' },
);

export const IconSlot = createLinkStory({
    isStandalone: true,
    iconPlacement: 'trailing',
    showStandaloneNote: true,
    slot: 'Link with Icon',
});
