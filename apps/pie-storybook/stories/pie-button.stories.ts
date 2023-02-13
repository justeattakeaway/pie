import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { PieButton, BUTTON_TYPE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

const buttonTypes = Object.values(BUTTON_TYPE);
const buttonVariants = Object.values(BUTTON_VARIANT);

const componentRef = [PieButton];

const meta: Meta = {
    title: 'pie-button',
    component: 'pie-button',
    argTypes: {
        variant: {
            control: 'select',
            options: buttonVariants
        },
        type: {
            control: 'select',
            options: buttonTypes
        },
    }
};

export default meta;

export const Base: StoryObj = {};

export const TypeButton: StoryObj = {
    args: {
        type: "button",
        variant: "primary"
    }
};

export const TypeSubmit: StoryObj = {
    args: {
        type: "submit",
        variant: "primary"
    }
};

export const TypeReset: StoryObj = {
    args: {
        type: "reset",
        variant: "primary"
    }
};
