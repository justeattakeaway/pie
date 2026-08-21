import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Meta } from '@storybook/web-components';
import { action } from 'storybook/actions';

import '@justeattakeaway/pie-webc/components/radio-group';
import {
    defaultProps,
    statusTypes,
    type RadioGroupProps as RadioGroupPropsBase,
} from '@justeattakeaway/pie-webc/components/radio-group';
import '@justeattakeaway/pie-webc/components/link';
import '@justeattakeaway/pie-webc/components/radio';
import '@justeattakeaway/pie-webc/components/form-label';

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
                    <pie-radio value="radio-three" disabled>radio 3 disabled</pie-radio>
                    <pie-radio value="radio-four">radio 4</pie-radio>
                    <pie-radio value="radio-five">radio 5 even longer label: Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.</pie-radio>
                <pie-radio value="radio-six">radio 6</pie-radio>
            </pie-radio-group>
        </div>
    `;
};

export const Default = createStory<RadioGroupProps>(Template, defaultArgs)();

const tileOptions = [
    { value: 'sunmi', label: 'Sunmi', image: './static/images/burger-4by3.png' },
    { value: 'citaq', label: 'Citaq', image: './static/images/modal-image-4by3.jpg' },
    { value: 'tablet', label: 'Tablet', image: './static/images/modal-image-illustration.png' },
];

const ImageTileTemplate = ({
    name,
    value,
    isInline,
    disabled,
    assistiveText,
    status,
}: RadioGroupProps) => {
    function onChange (event: CustomEvent) {
        const selectedRadioElement = event.target as HTMLInputElement;
        action('change')(selectedRadioElement.value);
    }

    // The tile is consumer markup, so it forwards its own clicks to the radio it wraps. Clicks that
    // came from the radio are ignored, otherwise it would be activated twice.
    function onTileClick (event: MouseEvent) {
        if ((event.target as HTMLElement).closest('pie-radio')) {
            return;
        }

        (event.currentTarget as HTMLElement).querySelector('pie-radio')?.click();
    }

    return html`
        <style>
            pie-radio-group {
                max-width: 600px;
            }

            .c-radioTile {
                flex: 1 1 180px;
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-b);
                padding: var(--dt-spacing-b);
                border: 1px solid var(--dt-color-border-strong);
                border-radius: var(--dt-radius-rounded-c);
                background-color: var(--dt-color-container-default);
                cursor: pointer;
            }

            /* The group only spaces slotted \`pie-radio\`s in its column layout, so the tiles space themselves */
            pie-radio-group:not([isinline]) .c-radioTile:not(:first-of-type) {
                margin-block-start: var(--dt-spacing-c);
            }

            /* The hover token is an overlay colour plus an opacity, mixed over the container colour */
            .c-radioTile:hover {
                background-color: color-mix(in srgb, var(--dt-color-hover-01-bg) var(--dt-color-hover-01), var(--dt-color-container-default));
            }

            /* pie-radio reflects its \`checked\` property, so the selected tile needs no JS */
            .c-radioTile:has(pie-radio[checked]) {
                border-color: var(--dt-color-interactive-brand);
                box-shadow: inset 0 0 0 1px var(--dt-color-interactive-brand);
            }

            .c-radioTile:has(pie-radio:focus-visible) {
                box-shadow: 0 0 0 2px var(--dt-color-focus-inner), 0 0 0 4px var(--dt-color-focus-outer);
            }

            /* The group reflects \`disabled\`, so the tiles can follow the group's state */
            pie-radio-group[disabled] .c-radioTile {
                cursor: not-allowed;
                background-color: var(--dt-color-container-default);
            }

            .c-radioTile-image {
                display: block;
                inline-size: 100%;
                aspect-ratio: 4 / 3;
                object-fit: cover;
                border-radius: var(--dt-radius-rounded-b);
            }
        </style>
        <p>Please note, the tiles here are an example of custom markup wrapping each pie-radio. See the
        <pie-link href="/?path=/docs/components-radio-group--overview">radio group overview</pie-link>
        for what the group handles and what you are responsible for.</p>
        <pie-radio-group
            name="${ifDefined(name)}"
            .value=${ifDefined(value)}
            ?isInline=${isInline}
            ?disabled=${disabled}
            assistiveText="${ifDefined(assistiveText)}"
            status=${ifDefined(status)}
            @change=${onChange}>
                <pie-form-label slot="label">What device do you use to manage orders?</pie-form-label>
                ${tileOptions.map((option) => html`
                    <div class="c-radioTile" @click=${onTileClick}>
                        <img class="c-radioTile-image" src=${option.image} alt="">
                        <pie-radio value=${option.value}>${option.label}</pie-radio>
                    </div>
                `)}
        </pie-radio-group>
    `;
};

/**
 * Demonstrates that a radio group also drives radios wrapped in arbitrary consumer markup, not
 * just direct `pie-radio` children or `pie-list-item`s. The group still owns selection, keyboard
 * navigation and the disabled state, while the tile is responsible for forwarding its own clicks
 * to the radio it wraps.
 */
export const ImageTiles = createStory<RadioGroupProps>(ImageTileTemplate, defaultArgs)({
    name: 'device',
    value: 'sunmi',
    isInline: true,
});
