import type { StoryObj as Story } from '@storybook/web-components';
import {
    ButtonProps as ButtonPropsBase, sizes, types, variants,
} from '@justeattakeaway/pie-button';
import { html, TemplateResult } from 'lit';
import { StoryMeta, SlottedComponentProps } from '../types';

type ButtonProps = SlottedComponentProps<ButtonPropsBase>;
type ButtonStoryMeta = StoryMeta<ButtonProps>;

const defaultArgs: ButtonProps = {
    size: 'medium',
    type: 'submit',
    variant: 'primary',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    slot: 'This is Lit!',
};

const buttonStoryMeta: ButtonStoryMeta = {
    title: 'Button',
    component: 'pie-button',
    argTypes: {
        size: {
            control: 'select',
            options: sizes,
        },
        type: {
            control: 'select',
            options: types,
        },
        variant: {
            control: 'select',
            options: variants,
        },
        disabled: {
            control: 'boolean',
        },
        isFullWidth: {
            control: 'boolean',
        },
        isLoading: {
            control: 'boolean',
        },
        slot: {
            control: 'text',
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
    size, variant, type, disabled, isFullWidth, isLoading, slot,
}: ButtonProps): TemplateResult => html`
        <pie-button
            size="${size}"
            variant="${variant}"
            type="${type}"
            ?disabled="${disabled}"
            ?isLoading="${isLoading}"
            ?isFullWidth="${isFullWidth}">
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
