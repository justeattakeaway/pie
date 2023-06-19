import type { Meta, StoryObj as Story } from '@storybook/web-components';
import {
    ButtonProps as ButtonPropsBase, buttonSizes, buttonTypes, buttonVariants,
} from '@justeattakeaway/pie-button';
import { html, TemplateResult } from 'lit';

export default {
    title: 'Button',
    component: 'pie-button',
    argTypes: {
        size: {
            control: 'select',
            options: buttonSizes,
        },
        type: {
            control: 'select',
            options: buttonTypes,
        },
        variant: {
            control: 'select',
            options: buttonVariants,
        },
        disabled: {
            control: 'boolean',
        },
        isFullWidth: {
            control: 'boolean',
        },
        slot: {
            control: 'text',
        },
    },
    args: {
        size: 'medium',
        type: 'submit',
        variant: 'primary',
        disabled: false,
        isFullWidth: false,
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=34706-406376&t=8JLrEVbwx7AEJbEL-0',
        },
    },
} as Meta;

type ButtonProps = ButtonPropsBase & { slot: string }

const Template = ({
    size, variant, type, disabled, isFullWidth, slot,
}: ButtonProps): TemplateResult => html`
        <pie-button
            size="${size}"
            variant="${variant}"
            type="${type}"
            ?disabled="${disabled}"
            ?isFullWidth="${isFullWidth}">
            ${slot}
        </pie-button>
        `;

const defaultArgs: ButtonProps = {
    size: 'medium',
    type: 'submit',
    variant: 'primary',
    disabled: false,
    isFullWidth: false,
    slot: 'This is Lit!',
};

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
