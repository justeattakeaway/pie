import { html, nothing } from 'lit';
import { type Meta } from '@storybook/web-components';

import '@justeattakeaway/pie-radio-group';
import {
    defaultProps,
    type RadioGroupProps as RadioGroupPropsBase,
} from '@justeattakeaway/pie-radio-group';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-radio';
import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle';

import { createStory } from '../../utilities';

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
    title: 'Radio Group',
    component: 'pie-radio-group',
    parameters: {
        controls: {
            disable: true,
        },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/pPSC73rPin4csb8DiK1CRr/branch/6u3sopt3trAp9wdJi7lUfY/%E2%9C%A8-%5BCore%5D-Web-Components-%5BPIE-3%5D?node-id=6369-3799&node-type=frame&t=pbk7ibGYRutGCO3z-0',
        },
    },
};

export default radioGroupStoryMeta;

const KeyboardNavigationTemplate = () => html`
    <h2>Radio group 1</h2>
    <p><pie-button size="small-productive" data-test-id="btn-1">Button 1</pie-button></p>
    <pie-radio-group name="radio-group-1" data-test-id="radio-group-1">
        <pie-radio data-test-id="radio-1" value="chinese">Chinese</pie-radio>
        <pie-radio data-test-id="radio-2" value="shawarma">Shawarma</pie-radio>
        <pie-radio data-test-id="radio-3" value="pizza">Pizza</pie-radio>
        <pie-radio data-test-id="radio-4" value="fish-and-chips">Fish and Chips</pie-radio>
        <pie-radio data-test-id="radio-5" value="indian">Indian</pie-radio>
    </pie-radio-group>
    <p><pie-button size="small-productive" variant="secondary" data-test-id="btn-2">Button 2</pie-button></p>

    <h2>Radio group 2</h2>
    <p><pie-button size="small-productive" data-test-id="btn-3">Button 3</pie-button></p>
    <pie-radio-group data-test-id="radio-group-2" value="fish-and-chips">
        <pie-radio data-test-id="radio-6" value="chinese">Chinese</pie-radio>
        <pie-radio data-test-id="radio-7" value="shawarma">Shawarma</pie-radio>
        <pie-radio data-test-id="radio-8" value="pizza">Pizza</pie-radio>
        <pie-radio data-test-id="radio-9" value="fish-and-chips">Fish and Chips</pie-radio>
        <pie-radio data-test-id="radio-10" value="indian">Indian</pie-radio>
    </pie-radio-group>
    <p><pie-button size="small-productive" variant="secondary" data-test-id="btn-4">Button 4</pie-button></p>
    `;

const DynamicSlotsTemplate = () => {
    let counter = 2;

    // Function to dynamically add radio buttons to the radio group
    const onAddButtonClick = () => {
        const radioGroup = document.querySelector('pie-radio-group[data-test-id="radio-group-1"]');

        if (radioGroup) {
            const newRadio = document.createElement('pie-radio');
            newRadio.setAttribute('value', counter.toString());
            newRadio.textContent = `Option ${counter}`;

            radioGroup.appendChild(newRadio);

            counter++;
        }
    };

    return html`
            <pie-radio-group name="radio-group-1" data-test-id="radio-group-1">
                <pie-radio data-test-id="radio-1" value="1">Option 1</pie-radio>
            </pie-radio-group>

            <p>
                <pie-button data-test-id="add-option" iconplacement="leading" @click="${onAddButtonClick}">
                    <icon-plus-circle slot="icon"></icon-plus-circle>
                    Add another option
                </pie-button>
            </p>
        `;
};

export const KeyboardNavigation = createStory<RadioGroupProps>(KeyboardNavigationTemplate, defaultArgs)();
export const DynamicSlots = createStory<RadioGroupProps>(DynamicSlotsTemplate, defaultArgs)();

