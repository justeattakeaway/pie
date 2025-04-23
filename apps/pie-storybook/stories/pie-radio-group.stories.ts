import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import '@justeattakeaway/pie-radio-group';
import {
    defaultProps,
    statusTypes,
    type RadioGroupProps as RadioGroupPropsBase,
} from '@justeattakeaway/pie-radio-group';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-radio';
import '@justeattakeaway/pie-form-label';

import { createStory } from '../utilities';

// Extending the props type definition to include storybook specific properties for controls
type RadioGroupProps = RadioGroupPropsBase & {
    labelSlot: keyof typeof labelSlotOptions;
};

type RadioGroupStoryMeta = Meta<RadioGroupProps>;

const defaultArgs: RadioGroupProps = {
    ...defaultProps,
    labelSlot: 'None',
};

const labelSlotOptions = {
    None: nothing,
    Label: html`<pie-form-label slot="label">Radio Group Label</pie-form-label>`,
};

const radioGroupStoryMeta: RadioGroupStoryMeta = {
    title: 'Components/Radio Group',
    component: 'pie-radio-group',
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
            description: 'Inline (horizontal) positioning of radio items.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.isInline,
            },
        },
        disabled: {
            description: 'If true, disables the whole radio group. If you need to disable only one radio, pass the disabled prop to the needed radio.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },
        value: {
            description: 'The value of the radio group (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.value,
            },
        },
        status: {
            description: 'The status of the radio group component / assistive text. Can be default, success or error.',
            control: 'select',
            options: statusTypes,
            defaultValue: {
                summary: defaultProps.status,
            },
        },
        assistiveText: {
            description: 'An optional assistive text to display below the radio group.',
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
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/6u3sopt3trAp9wdJi7lUfY/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=6369-3799&node-type=frame&t=pbk7ibGYRutGCO3z-0',
        },
    },
};

export default radioGroupStoryMeta;

const Template = ({
    name,
    value,
    isInline,
    disabled,
    labelSlot,
    assistiveText,
    status,
}: RadioGroupProps) => {
    function onChange (event: CustomEvent) {
        const selectedRadioElement = event.target as HTMLInputElement;
        action('change')(selectedRadioElement.value);
    }

    return html`
        <div style="max-width: 400px">
            <p>Please note, the radios are separate components. See
            <pie-link href="/?path=/story/radio--default">pie-radio</pie-link>.</p>
            <pie-radio-group
                name="${ifDefined(name)}"
                .value=${ifDefined(value)}
                ?isInline=${isInline}
                ?disabled=${disabled}
                assistiveText="${ifDefined(assistiveText)}"
                status=${ifDefined(status)}
                @change=${onChange}>
                    ${labelSlot}
                    <pie-radio value="radio-one">radio 1</pie-radio>
                    <pie-radio value="radio-two">radio 2</pie-radio>
                    <pie-radio value="radio-three">radio 3 longer label</pie-radio>
                    <pie-radio value="radio-four">radio 4</pie-radio>
                    <pie-radio value="radio-five">radio 5 even longer label: Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.</pie-radio>
                <pie-radio value="radio-six">radio 6</pie-radio>
            </pie-radio-group>
        </div>
    `;
};

export const Default = createStory<RadioGroupProps>(Template, defaultArgs)();
