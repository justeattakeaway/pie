import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-radio';
import { type RadioProps as RadioBaseProps, defaultProps } from '@justeattakeaway/pie-radio';

import { type SlottedComponentProps } from '../types';

import { createStory } from '../utilities';

type RadioProps = SlottedComponentProps<RadioBaseProps>;
type RadioStoryMeta = Meta<RadioProps>;

const defaultArgs: RadioProps = {
    ...defaultProps,
    slot: 'Label',
    value: 'value',
};

const radioStoryMeta: RadioStoryMeta = {
    title: 'Radio',
    component: 'pie-radio',
    argTypes: {
        checked: {
            description: 'The checked state of the radio.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.checked,
            },
        },

        defaultChecked: {
            description: 'The default checked state of the radio (not necessarily the same as the current checked state). Used when the radio is part of a form that is reset.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.defaultChecked,
            },
        },

        disabled: {
            description: 'Same as the HTML disabled attribute - indicates whether or not the radio is disabled.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.disabled,
            },
        },

        name: {
            description: 'The name of the radio (used as a key/value pair with `value`). This is required in order to work properly with forms.',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.name,
            },
        },

        required: {
            description: 'Same as native required attribute. If any radio button in a same-named group of radio buttons has the required attribute, a radio button in that group must be checked, although it doesn\'t have to be the one with the attribute applied.',
            control: 'boolean',
            defaultValue: {
                summary: defaultArgs.required,
            },
        },

        slot: {
            description: 'Content to set as the radio label.',
            control: 'text',
        },

        value: {
            description: 'The value of the radio (used as a key/value pair in HTML forms with `name`).',
            control: 'text',
            defaultValue: {
                summary: defaultArgs.value,
            },
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default radioStoryMeta;

const Template = ({
    checked, disabled, defaultChecked, name, required, slot, value,
}: RadioProps) => html`
    <pie-radio
        ?checked="${checked}"
        ?disabled="${disabled}"
        ?defaultChecked="${defaultChecked}"
        ?required="${required}"
        name="${ifDefined(name)}"
        .value="${value}">
        ${slot}
    </pie-radio>
`;

export const Default = createStory<RadioProps>(Template, defaultArgs)();
