import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';
import withStorybookDirection from './withStorybookDirection';
import { html, TemplateResult } from 'lit';

export default {
    title: 'Button',
    component: 'pie-button',
    argTypes: {
        size: {
            control: 'select',
            options: Object.values(BUTTON_SIZE)
        },
        type: {
            control: 'select',
            options: Object.values(BUTTON_TYPE)
        },
        variant: {
            control: 'select',
            options: Object.values(BUTTON_VARIANT)
        },
        disabled: {
            control: 'boolean'
        },
        slot: {
            control: 'text'
        }
    },
    args: {
        size: BUTTON_SIZE.MEDIUM,
        type: BUTTON_TYPE.SUBMIT,
        variant: BUTTON_VARIANT.PRIMARY,
        disabled: false
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/j1YKygEyhqZ6zKVxcHapn5/%5BCore%5D-Component-Documentation-%5BPIE-2.0%5D?node-id=33988-388504&t=gZ1UZWnGXcilMsSC-4",
        }
    }
} as Meta;

interface ButtonProps {
    size: BUTTON_SIZE;
    variant: BUTTON_VARIANT;
    type: BUTTON_TYPE;
    disabled: boolean;
    slot: TemplateResult;
}

const Template = withStorybookDirection(({ size, variant, type, disabled, slot }: ButtonProps): TemplateResult => {
    return html`
        <pie-button
            size="${size}"
            variant="${variant}"
            type="${type}"
            ?disabled="${disabled}">
            ${slot}
        </pie-button>
        `;
});

const defaultArgs = {
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.SUBMIT,
    variant: BUTTON_VARIANT.PRIMARY,
    slot: 'This is Lit!',
    disabled: false
};

export const Primary: Story = Template.bind({});
Primary.args = {
    ...defaultArgs
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
    ...defaultArgs,
    variant: BUTTON_VARIANT.SECONDARY
};

export const Outline: Story = Template.bind({});
Outline.args = {
    ...defaultArgs,
    variant: BUTTON_VARIANT.OUTLINE
};

export const Ghost: Story = Template.bind({});
Ghost.args = {
    ...defaultArgs,
    variant: BUTTON_VARIANT.GHOST
};
