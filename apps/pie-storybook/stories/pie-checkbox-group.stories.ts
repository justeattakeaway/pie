import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-checkbox-group';
import { type CheckboxGroupProps as CheckboxGroupPropsBase, defaultProps, statusTypes } from '@justeattakeaway/pie-checkbox-group';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-checkbox';
import '@justeattakeaway/pie-form-label';

import { createStory } from '../utilities';

// Extending the props type definition to include storybook specific properties for controls
type CheckboxGroupProps = CheckboxGroupPropsBase & {
    labelSlot: keyof typeof labelSlotOptions;
};

type CheckboxGroupStoryMeta = Meta<CheckboxGroupProps>;

const defaultArgs: CheckboxGroupProps = {
    ...defaultProps,
    labelSlot: 'None',
};

const labelSlotOptions = {
    None: nothing,
    Label: html`<pie-form-label slot="label">Checkbox Group Label</pie-form-label>`,
};

const checkboxGroupStoryMeta: CheckboxGroupStoryMeta = {
    title: 'Components/Checkbox Group',
    component: 'pie-checkbox-group',
    argTypes: {
        name: {
            description: 'The name associated with the group.',
            control: 'text',
        },
        labelSlot: {
            name: 'Label Slot',
            options: Object.keys(labelSlotOptions),
            description: '<b>**Not a component Prop</b><br><br>Use the `label` slot to pass a <pie-form-label> component with all relevant props.',
            control: 'select',
            mapping: labelSlotOptions,
        },
        isInline: {
            description: 'Inline (horizontal) positioning of checkbox items.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.isInline,
            },
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
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/aD4m0j97Ruw8Q4S5lED2Bl/Checkbox-audit?node-id=9938-14138&t=1V1VEYmtArFih6AX-4',
        },
    },
};

export default checkboxGroupStoryMeta;

const Template = ({
    name,
    isInline,
    assistiveText,
    status,
    disabled,
    labelSlot,
}: CheckboxGroupProps) => html`
        <div style="max-width: 400px">
            <p>Please note, the checkboxes are separate components. See
            <pie-link href="/?path=/story/checkbox--default">pie-checkbox</pie-link>.</p>
            <pie-checkbox-group
                name="${ifDefined(name)}"
                assistiveText="${ifDefined(assistiveText)}"
                ?isInline=${isInline}
                status=${ifDefined(status)}
                ?disabled="${disabled}">
                ${labelSlot}
                <pie-checkbox name="checkbox-one">checkbox 1</pie-checkbox>
                <pie-checkbox name="checkbox-two">checkbox 2</pie-checkbox>
                <pie-checkbox name="checkbox-three">checkbox 3 longer label</pie-checkbox>
                <pie-checkbox name="checkbox-four">checkbox 4</pie-checkbox>
                <pie-checkbox name="checkbox-five">checkbox 5 even longer label: Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.</pie-checkbox>
                <pie-checkbox name="checkbox-six">checkbox 6</pie-checkbox>
            </pie-checkbox-group>
        </div>
    `;

export const Default = createStory<CheckboxGroupProps>(Template, defaultArgs)();
