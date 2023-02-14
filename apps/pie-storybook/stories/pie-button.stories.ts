import type { Meta, StoryObj } from '@storybook/web-components';
import {
    PieButton,
    BUTTON_SIZE,
    BUTTON_TYPE,
    BUTTON_VARIANT
} from '@justeattakeaway/pie-button';

const buttonSizes = Object.values(BUTTON_SIZE);
const buttonTypes = Object.values(BUTTON_TYPE);
const buttonVariants = Object.values(BUTTON_VARIANT);

const componentRef = [PieButton];

const meta: Meta = {
    title: 'pie-button',
    component: 'pie-button',
    argTypes: {
        size: {
            control: 'select',
            options: buttonSizes
        },
        type: {
            control: 'select',
            options: buttonTypes
        },
        variant: {
            control: 'select',
            options: buttonVariants
        }
    }
};

export default meta;

export const Base: StoryObj = {};

export const PrimaryButton: StoryObj = {
    args: {
        size: BUTTON_SIZE.MEDIUM,
        type: BUTTON_TYPE.SUBMIT,
        variant: BUTTON_VARIANT.PRIMARY
    }
};

export const SecondaryButton: StoryObj = {
    args: {
        size: BUTTON_SIZE.MEDIUM,
        type: BUTTON_TYPE.SUBMIT,
        variant: BUTTON_VARIANT.SECONDARY
    }
};

export const OutlineButton: StoryObj = {
    args: {
        size: BUTTON_SIZE.MEDIUM,
        type: BUTTON_TYPE.SUBMIT,
        variant: BUTTON_VARIANT.OUTLINE
    }
};

export const GhostButton: StoryObj = {
    args: {
        size: BUTTON_SIZE.MEDIUM,
        type: BUTTON_TYPE.SUBMIT,
        variant: BUTTON_VARIANT.GHOST
    }
};
