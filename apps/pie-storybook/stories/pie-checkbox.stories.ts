import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-checkbox';
import { CheckboxProps } from '@justeattakeaway/pie-checkbox';
/* eslint-enable import/no-duplicates */

import { action } from '@storybook/addon-actions';
import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type CheckboxStoryMeta = StoryMeta<CheckboxProps>;

const defaultArgs: CheckboxProps = {
    value: '',
    name: '',
    label: 'Label',
    disabled: false,
    checked: false,
    indeterminate: false,
};

const checkboxStoryMeta: CheckboxStoryMeta = {
    title: 'Checkbox',
    component: 'pie-checkbox',
    argTypes: {
        value: {
            description: 'The value of the checkbox (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        name: {
            description: 'The name of the checkbox (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        label: {
            description: 'The visible label for the checkbox',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        checked: {
            description: 'Indicates whether or not the checkbox is checked by default (when the page loads).',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        disabled: {
            description: 'If true, disables the checkbox.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
        indeterminate: {
            description: 'Indicates whether the checkbox visually shows a horizontal line in the box instead of a check/tick. It has no impact on whether the checkbox\'s value is used in a form submission. That is decided by the checked state, regardless of the indeterminate state.',
            control: 'boolean',
            defaultValue: {
                summary: false,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/pPSC73rPin4csb8DiK1CRr/branch/aD4m0j97Ruw8Q4S5lED2Bl/%E2%9C%A8-[Core]-Web-Components-[PIE-3]?type=design&node-id=1998-6410&mode=design&t=udPtXte1WeCeFc1D-0',
        },
    },
};

export default checkboxStoryMeta;

const Template = ({
    value,
    name,
    label,
    checked,
    disabled,
    indeterminate,
}: CheckboxProps) => {
    function onChange (event: CustomEvent) {
        action('change')({
            detail: event.detail,
        });
    }

    return html`
        <pie-checkbox
            .value="${ifDefined(value)}"
            name="${ifDefined(name)}"
            label="${ifDefined(label)}"
            ?checked="${checked}"
            ?disabled="${disabled}"
            ?indeterminate="${indeterminate}"
            @change="${onChange}">
        </pie-checkbox>
    `;
};

export const Default = createStory<CheckboxProps>(Template, defaultArgs)();
