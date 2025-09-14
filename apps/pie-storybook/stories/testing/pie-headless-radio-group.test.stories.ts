import { html, type TemplateResult } from 'lit';
import { type Meta } from '@storybook/web-components';

// Note: We are importing the components from a package,
// so you will need to ensure `@justeattakeaway/pie-headless-radio-group` is installed.
import '@justeattakeaway/pie-headless-radio-group';
import { type HeadlessRadioGroupProps, type PieHeadlessRadioButton } from '@justeattakeaway/pie-headless-radio-group';

import { createStory } from '../../utilities';

type PieHeadlessRadioGroupStoryMeta = Meta<HeadlessRadioGroupProps>;

const defaultArgs: HeadlessRadioGroupProps = {
    name: 'test-radio-group',
    value: '2',
    label: 'Test Radio Group',
    disabled: false,
};

const headlessRadioGroupStoryMeta: PieHeadlessRadioGroupStoryMeta = {
    title: 'Headless Radio Group',
    component: 'pie-headless-radio-group',
    argTypes: {
        name: { control: 'text' },
        value: { control: 'text' },
        label: { control: 'text' },
        disabled: { control: 'boolean' },
    },
    args: defaultArgs,
};

export default headlessRadioGroupStoryMeta;

// Basic styles to make the radio buttons visible and testable.
const sharedStyles = html`
<style>
    pie-headless-radio-button {
        display: block;
        margin-bottom: 8px;
    }

    .radio-label {
        display: block;
        padding: 8px;
        border: 2px solid grey;
        border-radius: 4px;
    }

    pie-headless-radio-button[checked] .radio-label {
        border-color: blue;
        background-color: lightblue;
    }

    pie-headless-radio-button[disabled] .radio-label,
    pie-headless-radio-group[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    pie-headless-radio-button:focus-within {
        outline: 2px solid orange;
    }
</style>
`;

const LTRTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled}>
        <pie-headless-radio-button value="1" data-test-id="radio-1">
            <span class="radio-label">One</span>
        </pie-headless-radio-button>
        <pie-headless-radio-button value="2" data-test-id="radio-2">
            <span class="radio-label">Two</span>
        </pie-headless-radio-button>
        <pie-headless-radio-button value="3" data-test-id="radio-3" disabled>
            <span class="radio-label">Three (Disabled)</span>
        </pie-headless-radio-button>
        <pie-headless-radio-button value="4" data-test-id="radio-4">
            <span class="radio-label">Four</span>
        </pie-headless-radio-button>
    </pie-headless-radio-group>
`;

const RTLTemplate = (args: HeadlessRadioGroupProps): TemplateResult => html`
    <div dir="rtl">
        ${LTRTemplate(args)}
    </div>
`;

const FormTemplate = (): TemplateResult => {
    const handleFormSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: { [key: string]: any } = {};
        formData.forEach((value, key) => { data[key] = value; });

        const output = form.querySelector('#form-output');
        if (output) output.textContent = JSON.stringify(data);
    };

    const handleFormReset = (event: Event) => {
        const form = event.target as HTMLFormElement;
        const output = form.querySelector('#form-output');
        if (output) output.textContent = '';
    };

    return html`
    ${sharedStyles}
    <form @submit=${handleFormSubmit} @reset=${handleFormReset}>
        <pie-headless-radio-group name="group1" value="b">
            <pie-headless-radio-button value="a" data-test-id="form-radio-a">
                <span class="radio-label">A</span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="b" data-test-id="form-radio-b">
                <span class="radio-label">B</span>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
        <hr/>
        <pie-headless-radio-group name="group2" value="d">
             <pie-headless-radio-button value="c" data-test-id="form-radio-c">
                <span class="radio-label">C</span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="d" data-test-id="form-radio-d">
                <span class="radio-label">D</span>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
        <hr/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <pre id="form-output"></pre>
    </form>
    `;
};

const DynamicTemplate = (): TemplateResult => {
    const addRadio = () => {
        const group = document.querySelector('#dynamic-group');
        if (group) {
            const newRadio = document.createElement('pie-headless-radio-button') as PieHeadlessRadioButton;
            newRadio.value = 'new';
            newRadio.dataset.testId = 'radio-new';
            newRadio.innerHTML = '<span class="radio-label">New</span>';
            group.appendChild(newRadio);
        }
    };

    const removeRadio = () => {
        const radioToRemove = document.querySelector('[data-test-id="radio-to-remove"]');
        if (radioToRemove) radioToRemove.remove();
    };

    const disableRadio = () => {
        const radio = document.querySelector('[data-test-id="radio-to-disable"]') as PieHeadlessRadioButton;
        if (radio) radio.disabled = true;
    };

    return html`
    ${sharedStyles}
    <pie-headless-radio-group value="1" data-test-id="dynamic-group-root" id="dynamic-group">
        <pie-headless-radio-button value="1" data-test-id="radio-to-disable">
            <span class="radio-label">One (Will be disabled)</span>
        </pie-headless-radio-button>
        <pie-headless-radio-button value="2" data-test-id="radio-to-remove">
            <span class="radio-label">Two (Will be removed)</span>
        </pie-headless-radio-button>
    </pie-headless-radio-group>
    <hr/>
    <button @click=${addRadio} data-test-id="btn-add">Add</button>
    <button @click=${removeRadio} data-test-id="btn-remove">Remove</button>
    <button @click=${disableRadio} data-test-id="btn-disable">Disable</button>
    `;
};

export const LTR = createStory<HeadlessRadioGroupProps>(LTRTemplate, defaultArgs)();
export const RTL = createStory<HeadlessRadioGroupProps>(RTLTemplate, defaultArgs)();
export const Form = createStory<HeadlessRadioGroupProps>(FormTemplate, {})();
export const Dynamic = createStory<HeadlessRadioGroupProps>(DynamicTemplate, {})();
export const DisabledGroup = createStory<HeadlessRadioGroupProps>(LTRTemplate, { ...defaultArgs, disabled: true })();
