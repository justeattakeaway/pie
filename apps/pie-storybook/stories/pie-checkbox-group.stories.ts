import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
/* eslint-disable import/no-duplicates */
import '@justeattakeaway/pie-checkbox-group';
import { CheckboxGroupProps, defaultProps, statusTypes } from '@justeattakeaway/pie-checkbox-group';
/* eslint-enable import/no-duplicates */

import { type StoryMeta } from '../types';
import { createStory } from '../utilities';

type CheckboxGroupStoryMeta = StoryMeta<CheckboxGroupProps>;

const defaultArgs: CheckboxGroupProps = {
    ...defaultProps,
    aria: {
        label: '',
        labelledby: '',
    },
    disabled: false,
};

const checkboxGroupStoryMeta: CheckboxGroupStoryMeta = {
    title: 'Checkbox Group',
    component: 'pie-checkbox-group',
    argTypes: {
        label: {
            description: 'The visible label for the checkbox group',
            control: 'text',
        },
        status: {
            description: 'The status of the checkbox group component / assistive text. Can be default, success or error.',
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
            },
        },
        disabled: {
            description: 'If true, disables the whole checkbox group. If you need to disable only one checkbox pass the disabled prop to the needed checkbox.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },
        assistiveText: {
            description: 'An optional assistive text to display below the checkbox group.',
            control: 'text',
            defaultValue: {
                summary: '',
            },
        },
        aria: {
            description: 'ARIA object to pass label/labelledby/describedby aria attributes',
            control: 'object',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/aD4m0j97Ruw8Q4S5lED2Bl/Checkbox-audit?node-id=9938-14138&t=1V1VEYmtArFih6AX-4',
        },
    },
};

export default checkboxGroupStoryMeta;

const Template = ({
    label,
    assistiveText,
    status,
    disabled,
    aria,
}: CheckboxGroupProps) => html`
    <pie-checkbox-group
        label="${ifDefined(label)}"
        .aria="${aria}"
        assistiveText="${ifDefined(assistiveText)}"
        status=${ifDefined(status)}
        ?disabled="${disabled}"
    >
        <pie-checkbox
            name="checkbox-one"
            label="checkbox 1">
        </pie-checkbox>
        <pie-checkbox
            name="checkbox-two"
            label="checkbox 2">
        </pie-checkbox>
        <pie-checkbox
            name="checkbox-three"
            label="checkbox 3">
        </pie-checkbox>
    </pie-checkbox-group>
`;

export const Default = createStory<CheckboxGroupProps>(Template, defaultArgs)();
