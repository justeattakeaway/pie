import { html, TemplateResult } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import {
    PieLink, LinkProps as LinkBaseProps, sizes, variants,
} from '@justeattakeaway/pie-link';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { StoryMeta, SlottedComponentProps } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieLink];

type LinkProps = SlottedComponentProps<LinkBaseProps>;
type LinkStoryMeta = StoryMeta<LinkProps>;

const defaultArgs: LinkProps = {
    variant: 'default',
    size: 'medium',
    href: 'https://pie.design',
    target: '_self',
    isBold: false,
    isStandalone: false,
    slot: 'This is Lit!',
};

const linkStoryMeta: LinkStoryMeta = {
    title: 'Link',
    component: 'pie-link',
    argTypes: {
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
        href: {
            description: 'What the URL that the hyperlink should point to',
            control: 'text',
        },
        target: {
            description: 'Set where to display the linked URL',
            control: 'text',
        },
        rel: {
            description: 'Set what the relationship of the linked URL is',
            control: 'text',
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
    href, target, rel, size, variant, isBold, isStandalone, slot,
}: LinkProps): TemplateResult => html`
        <pie-link
            variant="${variant}"
            size="${size}"
            href=${ifDefined(href || undefined)}
            target=${ifDefined(target || undefined)}
            rel=${ifDefined(rel || undefined)}
            ?isBold="${isBold}"
            ?isStandalone="${isStandalone}">
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
