/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { ICON_BUTTON_VARIANT } from '@justeattakeaway/pie-icon-button';
import { html, TemplateResult } from 'lit';

export default {
    title: 'Icon Button',
    component: 'pie-icon-button',
    argTypes: {
        variant: {
            control: 'select',
            options: Object.values(ICON_BUTTON_VARIANT),
        },
        disabled: {
            control: 'boolean',
        },
    },
    args: {
        variant: ICON_BUTTON_VARIANT.PRIMARY,
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%E2%9A%AA%EF%B8%8F-%5BPIE-2.0%5D?type=design&node-id=32007-361476&t=gIg91Y13QC8Ndhly-4',
        },
    },
} as Meta;

interface IconButtonProps {
    variant: ICON_BUTTON_VARIANT;
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
    variant: ICON_BUTTON_VARIANT.PRIMARY,
    disabled: false,
};

export const Primary: Story = Template.bind({});
Primary.args = {
    ...defaultArgs,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
    ...defaultArgs,
    variant: ICON_BUTTON_VARIANT.SECONDARY,
};

export const Outline: Story = Template.bind({});
Outline.args = {
    ...defaultArgs,
    variant: ICON_BUTTON_VARIANT.OUTLINE,
};

export const Ghost: Story = Template.bind({});
Ghost.args = {
    ...defaultArgs,
    variant: ICON_BUTTON_VARIANT.GHOST,
};

export const GhostTertiary: Story = Template.bind({});
GhostTertiary.args = {
    ...defaultArgs,
    variant: ICON_BUTTON_VARIANT.GHOST_TERTIARY,
};
