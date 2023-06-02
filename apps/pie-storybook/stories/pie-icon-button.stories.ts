/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { ICON_BUTTON_VARIANT, IconButtonVariant } from '@justeattakeaway/pie-icon-button';
import { html, TemplateResult } from 'lit';

export default {
    title: 'Icon Button',
    component: 'pie-icon-button',
    argTypes: {
        variant: {
            control: 'select',
            options: ICON_BUTTON_VARIANT,
        },
        disabled: {
            control: 'boolean',
        },
    },
    args: {
        variant: 'primary',
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-361476&t=gIg91Y13QC8Ndhly-4',
        },
    },
} as Meta;

interface IconButtonProps {
    variant: IconButtonVariant;
    disabled: boolean;
}

const Template = ({
    variant,
    disabled,
}: IconButtonProps): TemplateResult => html`
        <pie-icon-button
            variant="${variant}"
            ?disabled="${disabled}">
        </pie-icon-button>
        `;

const defaultArgs = {
    variant: 'primary',
    disabled: false,
};

export const Primary: Story = Template.bind({});
Primary.args = {
    ...defaultArgs,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
    ...defaultArgs,
    variant: 'secondary',
};

export const Outline: Story = Template.bind({});
Outline.args = {
    ...defaultArgs,
    variant: 'outline',
};

export const Ghost: Story = Template.bind({});
Ghost.args = {
    ...defaultArgs,
    variant: 'ghost',
};

export const GhostTertiary: Story = Template.bind({});
GhostTertiary.args = {
    ...defaultArgs,
    variant: 'ghost-tertiary',
};
