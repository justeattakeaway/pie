import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

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
        }
    },
    args: {
        size: BUTTON_SIZE.MEDIUM,
        type: BUTTON_TYPE.SUBMIT,
        variant: BUTTON_VARIANT.PRIMARY,
        disabled: false
    },
} as Meta;

const defaultArgs = {
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.SUBMIT,
    variant: BUTTON_VARIANT.PRIMARY,
    slot: 'Click Me'
};

export const Primary: Story = (args) => {
    const { slot, ...buttonArgs } = args;

    return `
        <pie-button ...${buttonArgs}>
            ${slot}
        </pie-button>
    `;
};

Primary.args = {
    ...defaultArgs
};

export const Secondary : Story = {
    args: {
        ...defaultArgs,
        variant: BUTTON_VARIANT.SECONDARY
    }
};

export const Outline : Story = {
    args: {
        ...defaultArgs,
        variant: BUTTON_VARIANT.OUTLINE
    }
};

export const Ghost : Story = {
    args: {
        ...defaultArgs,
        variant: BUTTON_VARIANT.GHOST
    }
};
