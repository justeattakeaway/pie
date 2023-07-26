import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { FormSelectorProps, inputTypes } from '@justeattakeaway/pie-form-selector';
import { html, TemplateResult } from 'lit';

export default {
    title: 'Form Selector',
    component: 'pie-form-selector',
    argTypes: {
        checked: {
            control: 'boolean',
        },

        disabled: {
            control: 'boolean',
        },

        hasError: {
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
        hasError: false,
        inputType: 'checkbox',
    },
} as Meta;

const Template = ({
    checked,
    disabled,
    inputType,
    hasError,
    slot,
}: FormSelectorProps): TemplateResult => html`
        <pie-form-selector inputType="${inputType}" .checked="${checked}" isChecked="${checked}" ?hasError="${hasError}" ?disabled="${disabled}">
            <label>${slot}</label>
        </pie-form-selector>
        `;

const defaultArgs: FormSelectorProps = {
    checked: true,
    disabled: false,
    inputType: 'checkbox',
    hasError: false,
    slot: 'This is a label!',

};

export const Default: Story<FormSelectorProps> = (args: FormSelectorProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
