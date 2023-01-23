import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { PieButton } from '@justeattakeaway/pie-button';

const componentRef = [PieButton];

const meta: Meta = {
    title: 'pie-button',
    component: 'pie-button',
};

export default meta;

export const Base: StoryObj = {};

export const TypeButton: StoryObj = {
    args: {
        actionType: "button"
    }
};

export const TypeSubmit: StoryObj = {
    args: {
        actionType: "submit"
    }
};

export const TypeReset: StoryObj = {
    args: {
        actionType: "reset"
    }
};
