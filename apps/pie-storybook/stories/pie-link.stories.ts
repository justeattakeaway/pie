import { html, TemplateResult, nothing } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import {
    PieLink, LinkProps as LinkBaseProps, sizes, variants,
    iconPlacements, tags,
} from '@justeattakeaway/pie-link';
import type { StoryMeta, SlottedComponentProps } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieLink];

type LinkProps = SlottedComponentProps<LinkBaseProps>;
type LinkStoryMeta = StoryMeta<LinkProps>;

const defaultArgs: LinkProps = {
    tag: 'a',
    variant: 'default',
    size: 'medium',
    href: 'https://pie.design',
    target: '_target',
    isBold: false,
    isStandalone: false,
    slot: 'This is Lit!',
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
        iconPlacement: {
            description: 'Show a leading/trailing icon.<br /><br />To use this with pie-link, you can pass an icon into the `icon` slot',
            control: 'select',
            options: [undefined, ...iconPlacements],
        },
        href: {
            description: 'The URL that the hyperlink should point to',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        target: {
            description: 'Set where to display the linked URL',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        rel: {
            description: 'Set what the relationship of the linked URL is',
            control: 'text',
            if: { arg: 'tag', eq: 'a' },
        },
        isBold: {
            description: 'If `true`, makes the link text bold',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isStandalone: {
            description: 'If `true`, the link will be treated as a block box',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
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
            url: '',
        },
    },
};

export default linkStoryMeta;

const Template = ({
    tag,
    href,
    target,
    rel,
    size,
    variant,
    isBold,
    isStandalone,
    slot,
    iconPlacement,
}: LinkProps): TemplateResult => html`
        <pie-link
            tag="${tag}"
            variant="${variant}"
            size="${size}"
            iconPlacement="${iconPlacement || nothing}"
            href="${href || nothing}"
            target="${target || nothing}"
            rel="${rel || nothing}"
            ?isBold="${isBold}"
            ?isStandalone="${isStandalone}">
            ${iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
            ${slot}
        </pie-link>
        `;

export const Default: Story<LinkProps> = (args: LinkProps) => Template(args);
Default.args = {
    ...defaultArgs,
};

export const HighVisibility: Story<LinkProps> = (args: LinkProps) => Template(args);
HighVisibility.args = {
    ...defaultArgs,
    variant: 'high-visibility',
};

export const Inverse: Story<LinkProps> = (args: LinkProps) => Template(args);
Inverse.args = {
    ...defaultArgs,
    variant: 'inverse',
};

Inverse.parameters = {
    backgrounds: {
        default: 'dark',
    },
};
