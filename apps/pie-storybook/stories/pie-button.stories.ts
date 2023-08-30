import { html, TemplateResult, nothing } from 'lit';
import { type StoryObj as Story } from '@storybook/web-components';
import {
    ButtonProps as ButtonPropsBase, sizes, types,
    variants, iconPlacements,
} from '@justeattakeaway/pie-button';
import { IconPlusCircle } from '@justeattakeaway/pie-icons-webc';
import { StoryMeta, SlottedComponentProps } from '../types';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [IconPlusCircle];

type ButtonProps = SlottedComponentProps<ButtonPropsBase>;
type ButtonStoryMeta = StoryMeta<ButtonProps>;

const defaultArgs: ButtonProps = {
    size: 'medium',
    type: 'submit',
    variant: 'primary',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    slot: 'Label',
};

const buttonStoryMeta: ButtonStoryMeta = {
    title: 'Button',
    component: 'pie-button',
    argTypes: {
        size: {
            description: 'Set the size of the button.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: 'medium',
            },
        },
        type: {
            description: 'Set the type of the button.',
            control: 'select',
            options: types,
            defaultValue: {
                summary: 'submit',
            },
        },
        variant: {
            description: 'Set the variant of the button.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'primary',
            },
        },
        iconPlacement: {
            description: 'Show a leading/trailing icon.<br /><br />To use this with pie-button, you can pass an icon into the `icon` slot',
            control: 'select',
            options: [undefined, ...iconPlacements],
        },
        disabled: {
            description: 'If `true`, disables the button.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isFullWidth: {
            description: 'If `true`, sets the button width to 100% of it’s container.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        isLoading: {
            description: 'If `true`, displays a loading indicator inside the button.',
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
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=34706-406376&t=8JLrEVbwx7AEJbEL-0',
        },
    },
};

export default buttonStoryMeta;

const Template = ({
    size,
    variant,
    type,
    disabled,
    isFullWidth,
    isLoading,
    slot,
    iconPlacement,
}: ButtonProps): TemplateResult => html`
        <pie-button
            size="${size}"
            variant="${variant}"
            type="${type}"
            iconPlacement="${iconPlacement || nothing}"
            ?disabled="${disabled}"
            ?isLoading="${isLoading}"
            ?isFullWidth="${isFullWidth}">
            ${iconPlacement ? html`<icon-plus-circle slot="icon"></icon-plus-circle>` : nothing}
            ${slot}
        </pie-button>
        `;

export const Primary: Story<ButtonProps> = (args: ButtonProps) => Template(args);
Primary.args = {
    ...defaultArgs,
};

export const Secondary: Story<ButtonProps> = (args: ButtonProps) => Template(args);
Secondary.args = {
    ...defaultArgs,
    variant: 'secondary',
};

export const Outline: Story<ButtonProps> = (args: ButtonProps) => Template(args);
Outline.args = {
    ...defaultArgs,
    variant: 'outline',
};

export const Ghost: Story<ButtonProps> = (args: ButtonProps) => Template(args);
Ghost.args = {
    ...defaultArgs,
    variant: 'ghost',
};

export const Destructive: Story<ButtonProps> = (args: ButtonProps) => Template(args);
Destructive.args = {
    ...defaultArgs,
    variant: 'destructive',
};

export const DestructiveGhost: Story<ButtonProps> = (args: ButtonProps) => Template(args);
DestructiveGhost.args = {
    ...defaultArgs,
    variant: 'destructive-ghost',
};

export const Inverse: Story<ButtonProps> = (args: ButtonProps) => Template(args);
Inverse.args = {
    ...defaultArgs,
    variant: 'inverse',
};

Inverse.parameters = {
    backgrounds: {
        default: 'dark',
    },
};

export const GhostInverse: Story<ButtonProps> = (args: ButtonProps) => Template(args);
GhostInverse.args = {
    ...defaultArgs,
    variant: 'ghost-inverse',
};

GhostInverse.parameters = {
    backgrounds: {
        default: 'dark',
    },
};

export const OutlineInverse: Story<ButtonProps> = (args: ButtonProps) => Template(args);
OutlineInverse.args = {
    ...defaultArgs,
    variant: 'outline-inverse',
};

OutlineInverse.parameters = {
    backgrounds: {
        default: 'dark',
    },
};
