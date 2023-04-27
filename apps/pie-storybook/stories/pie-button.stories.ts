import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';
import { html } from 'lit';

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
} as Meta;

// In the actual implementation we would define this once for all stories to consume
const writingDirections = {
    ltr: 'ltr',
    rtl: 'rtl'
};

// In the actual implementation we would only want to access globals once. Not in every story
const Template = ({ size, variant, type, disabled, slot },
    {
        globals: {
            writingDirection
        }
    }) => {
    return html`
        <div dir="${writingDirections[writingDirection] ?? "auto"}">
            <pie-button
                size=${size}
                variant=${variant}
                type=${type}
                ?disabled=${disabled}>
                ${slot}
            </pie-button>
        </div>
    `;
}

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
