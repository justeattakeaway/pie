import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { CheckboxProps, PieCheckbox } from '@justeattakeaway/pie-checkbox';
import { html, TemplateResult } from 'lit';

const checkbox = PieCheckbox;

export default {
    title: 'Checkbox',
    component: 'pie-checkbox',
    argTypes: {
        checked: {
            control: 'boolean',
        },
    },
    args: {
        checked: false,
    },
} as Meta;

const Template = ({
    checked,
}: CheckboxProps): TemplateResult => html`
        <pie-checkbox
            checked="${checked}">
        </pie-checkbox>
        `;

const defaultArgs: CheckboxProps = {
    checked: 'false',
};

export const Default: Story<CheckboxProps> = (args: CheckboxProps) => Template(args);
Default.args = {
    ...defaultArgs,
};
