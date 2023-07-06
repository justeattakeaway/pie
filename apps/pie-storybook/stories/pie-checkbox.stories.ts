import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { CheckboxProps, inputTypes } from '@justeattakeaway/pie-checkbox';
import { html, TemplateResult } from 'lit';

export default {
    title: 'Checkbox',
    component: 'pie-checkbox',
    argTypes: {
        checked: {
            control: 'boolean',
        },

        disabled: {
            control: 'boolean',
        },

        inputType: {
            control: 'select',
            options: inputTypes,
        },

        slot: {
            control: 'text',
        },
    },
    args: {
        checked: false,
        disabled: false,
        inputType: 'checkbox',
    },
} as Meta;

const Template = ({
    checked,
    disabled,
    inputType,
    slot,
}: CheckboxProps): TemplateResult => html`
        <pie-checkbox inputType="${inputType}" .checked="${checked}" ?disabled="${disabled}">
            ${slot}
        </pie-checkbox>
        `;

const defaultArgs: CheckboxProps = {
    checked: true,
    disabled: false,
    inputType: 'checkbox',
    slot: 'This is a label!',

};

export const Default: Story<CheckboxProps> = (args: CheckboxProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
