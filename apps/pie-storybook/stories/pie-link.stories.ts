import { html, nothing } from 'lit';
import {
    PieLink, LinkProps as LinkBaseProps, sizes, variants,
    iconPlacements, tags, buttonTypes, underlineTypes,
} from '@justeattakeaway/pie-link';
import type { StoryMeta, SlottedComponentProps } from '../types';
import { createStory, type TemplateFunction } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieLink];

type LinkProps = SlottedComponentProps<LinkBaseProps>;
type LinkStoryMeta = StoryMeta<LinkProps>;

const defaultArgs: LinkProps = {
    tag: 'a',
    variant: 'default',
    size: 'medium',
    underline: 'default',
    href: 'https://pie.design',
    target: '_blank',
    isBold: false,
    isStandalone: false,
    hasVisited: false,
    slot: 'Link',
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
                summary: 'a',
            },
        },
        variant: {
            description: 'Set the variant of the link.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'default',
            },
        },
        size: {
            description: 'Set the size of the link.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: 'medium',
            },
        },
        underline: {
            description: 'Set the underline behavior of the link.',
            control: 'select',
            options: underlineTypes,
            defaultValue: {
                summary: 'default',
            },
        },
        iconPlacement: {
            description: 'Show a leading/trailing icon.<br /><br />To use this with pie-link, you can pass an icon into the `icon` slot.',
            control: 'select',
            options: [undefined, ...iconPlacements],
        },
        href: {
            description: 'The URL that the hyperlink should point to.',
            control: 'text',
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
                summary: 'submit',
            },
            if: { arg: 'tag', eq: 'button' },
        },
        isBold: {
            description: 'If `true`, makes the link text bold.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isStandalone: {
            description: 'If `true`, the link will be treated as a block box.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        hasVisited: {
            description:  'If `true`, the link will apply the styles for the visited state.',
            control: 'boolean',
            defaultValue: {
                summary: false,
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

const Template : TemplateFunction<LinkProps> = ({
    tag,
    href,
    target,
    rel,
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
            tag="${tag}"
            variant="${variant}"
            size="${size}"
            underline="${underline}"
            iconPlacement="${iconPlacement || nothing}"
            href="${href || nothing}"
            target="${target || nothing}"
            rel="${rel || nothing}"
            type="${type || nothing}"
            ?isBold="${isBold}"
            ?isStandalone="${isStandalone}"
            ?hasVisited="${hasVisited}">
            ${iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
            ${slot}
        </pie-link>`;

const createLinkStory = createStory<LinkProps>(Template, defaultArgs);

export const Default = createLinkStory();
export const HighVisibility = createLinkStory({ variant:  'high-visibility' });
export const Inverse = createLinkStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
