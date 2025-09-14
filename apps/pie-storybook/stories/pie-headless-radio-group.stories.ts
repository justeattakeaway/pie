import { html, type TemplateResult } from 'lit';
import { type Meta } from '@storybook/web-components';

// Note: We are importing the components from a package,
// so you will need to ensure `@justeattakeaway/pie-headless-radio-group` is installed.
import '@justeattakeaway/pie-headless-radio-group';
import { type HeadlessRadioGroupProps, type PieHeadlessRadioButton } from '@justeattakeaway/pie-headless-radio-group';

import { createStory } from '../utilities';

type PieHeadlessRadioGroupStoryMeta = Meta<HeadlessRadioGroupProps>;

const defaultArgs: HeadlessRadioGroupProps = {
    name: 'storybook-radio-group',
    value: 'm',
    label: 'Default Radio Group',
    disabled: false,
};

const PieHeadlessRadioGroupStoryMeta: PieHeadlessRadioGroupStoryMeta = {
    title: 'Components/Headless Radio Group',
    component: 'pie-headless-radio-group',
    argTypes: {
        name: {
            description: 'The name of the radio group, submitted with form data.',
            control: 'text',
        },
        value: {
            description: 'The currently selected value of the radio group.',
            control: 'text',
        },
        label: {
            description: 'An accessible label for the radio group for screen readers.',
            control: 'text',
        },
        disabled: {
            description: 'If true, the entire radio group and all its options will be disabled.',
            control: 'boolean',
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

export default PieHeadlessRadioGroupStoryMeta;

// This CSS is copied directly from the demo HTML to style the slotted content.
const sharedStyles = html`
<style>
    :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .card {
        background-color: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        max-width: 400px;
    }

    h2, p {
        color: #1a202c;
    }

    p {
        color: #4a5568;
        font-size: 0.875rem;
    }

    pie-headless-radio-group[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    .radio-label {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 0.375rem;
        transition: all 0.2s ease-in-out;
        gap: 0.75rem;
    }

    pie-headless-radio-button:not([disabled]):hover .radio-label {
        border-color: #a0aec0;
    }

    pie-headless-radio-button:not([disabled]):focus-within .radio-label {
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    pie-headless-radio-button[checked] .radio-label {
        border-color: #3182ce;
        background-color: #ebf8ff;
    }

    pie-headless-radio-button[disabled] .radio-label {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: #edf2f7;
    }

    .custom-radio-indicator {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        border: 2px solid #cbd5e0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .custom-radio-indicator::after {
        content: '';
        display: block;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: #3182ce;
        transform: scale(0);
        transition: transform 0.15s ease-in-out;
    }

    pie-headless-radio-button[checked] .custom-radio-indicator {
        border-color: #3182ce;
    }

    pie-headless-radio-button[checked] .custom-radio-indicator::after {
        transform: scale(1);
    }

    .vertical-group pie-headless-radio-button {
        display: block;
    }

    .vertical-group pie-headless-radio-button:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    .button-group {
        display: flex;
        width: fit-content;
        align-items: start;
    }

    .button-group pie-headless-radio-button:not(:first-child) {
        margin-left: -1px;
    }

    .button-group .button-label {
        padding: 0.75rem 1rem;
        text-align: center;
        background-color: #fff;
        border: 1px solid #cbd5e0;
        transition: all 0.2s ease-in-out;
        position: relative;
    }

    .button-group pie-headless-radio-button:first-child .button-label {
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
    }

    .button-group pie-headless-radio-button:last-child .button-label {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    }

    .button-group[dir="rtl"] pie-headless-radio-button:not(:first-child) {
        margin-left: 0;
        margin-right: -1px;
    }

    .button-group[dir="rtl"] pie-headless-radio-button:first-child .button-label {
        border-radius: 0 0.375rem 0.375rem 0;
    }

    .button-group[dir="rtl"] pie-headless-radio-button:last-child .button-label {
        border-radius: 0.375rem 0 0 0.375rem;
    }

    .button-group pie-headless-radio-button:not([disabled]):hover .button-label {
        background-color: #f7fafc;
        z-index: 1;
    }

    .button-group pie-headless-radio-button[checked] .button-label {
        background-color: #3182ce;
        color: white;
        border-color: #3182ce;
        z-index: 2;
    }

    .button-group pie-headless-radio-button:not([disabled]):focus-within .button-label {
        z-index: 3;
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    /* --- Card Layout Style --- */
    .card-radio-label {
        display: flex;
        padding: 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 0.5rem;
        transition: all 0.2s ease-in-out;
        gap: 1rem;
        align-items: flex-start;
    }

    .card-radio-label .content {
        flex-grow: 1;
    }

    .card-radio-label h4 {
        margin: 0 0 0.25rem 0;
        color: #2d3748;
        font-weight: 600;
    }

    .card-radio-label p {
        margin: 0;
        color: #718096;
        font-size: 0.875rem;
    }

    .card-radio-label .price {
        font-weight: 600;
        color: #2d3748;
    }

    pie-headless-radio-button:not([disabled]):hover .card-radio-label {
        border-color: #a0aec0;
    }

    pie-headless-radio-button:not([disabled]):focus-within .card-radio-label {
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    pie-headless-radio-button[checked] .card-radio-label {
        border-color: #3182ce;
        background-color: #ebf8ff;
    }

    /* --- Star Rating Style --- */
    .star-rating-group {
        display: flex;
    }

    .star-rating-group .star-label {
        cursor: pointer;
        color: #e2e8f0; /* Empty star color */
        transition: color 0.2s ease-in-out;
        padding: 0 0.125rem;
    }

    .star-rating-group .star-label svg {
        width: 2rem;
        height: 2rem;
        fill: currentColor;
    }

    .star-rating-group pie-headless-radio-button:has(~ pie-headless-radio-button[checked]) .star-label,
    .star-rating-group pie-headless-radio-button[checked] .star-label {
        color: #f59e0b; /* Filled star color */
    }

    .star-rating-group:not([disabled]):hover pie-headless-radio-button:not([disabled]):hover .star-label,
    .star-rating-group:not([disabled]):hover pie-headless-radio-button:not([disabled]):has(~ pie-headless-radio-button:hover) .star-label {
        color: #f59e0b;
    }

    .star-rating-group pie-headless-radio-button:focus {
        outline: none;
    }

    .star-rating-group pie-headless-radio-button:not([disabled]):focus-visible .star-label {
        outline: 2px solid #4299e1;
        outline-offset: 2px;
        border-radius: 2px;
    }

    /* --- Emoji Rating Style --- */
    .emoji-rating-group {
        display: flex;
        gap: 0.5rem;
    }

    .emoji-rating-group pie-headless-radio-button {
        display: flex; /* Needed for focus outline to wrap content correctly */
    }

    .emoji-rating-group .emoji-label {
        cursor: pointer;
        font-size: 2.5rem;
        transition: all 0.2s ease-in-out;
        filter: grayscale(1);
        padding: 0.25rem;
        border-bottom: 4px solid transparent;
    }

    .emoji-rating-group pie-headless-radio-button:not([disabled]):hover .emoji-label {
        transform: scale(1.2);
        filter: grayscale(0);
    }

    .emoji-rating-group pie-headless-radio-button[checked] .emoji-label {
        filter: grayscale(0);
        transform: scale(1.2);
        border-bottom-color: #3182ce;
    }

    .emoji-rating-group pie-headless-radio-button:focus {
        outline: none;
    }

    .emoji-rating-group pie-headless-radio-button:not([disabled]):focus-visible {
        border-radius: 8px;
        outline: 2px solid #4299e1;
        outline-offset: 2px;
    }

    /* --- Dynamic Controls Style --- */
    .dynamic-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .dynamic-controls button {
        background-color: #edf2f7;
        color: #2d3748;
        padding: 0.5rem 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .dynamic-controls button:hover {
        background-color: #e2e8f0;
    }

    /* --- Form Integration Style --- */
    .form-integration-story form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-integration-story .form-field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .form-integration-story .form-field > label {
        font-weight: 600;
        font-size: 0.875rem;
    }

    .form-integration-story input[type="text"],
    .form-integration-story select {
        padding: 0.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
    }

    .form-integration-story .form-actions {
        display: flex;
        gap: 0.5rem;
    }

    .form-integration-story button[type="submit"] {
        background-color: #3182ce;
        color: white;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.375rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.2s;
        align-self: flex-start;
    }

    .form-integration-story button[type="submit"]:hover {
        background-color: #2b6cb0;
    }

    .form-integration-story button[type="reset"] {
        background-color: #a0aec0;
        color: white;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.375rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.2s;
        align-self: flex-start;
    }

    .form-integration-story button[type="reset"]:hover {
        background-color: #718096;
    }

    .form-integration-story #form-output {
        background-color: #f7fafc;
        border: 1px solid #e2e8f0;
        padding: 1rem;
        border-radius: 0.375rem;
        margin-top: 1rem;
        white-space: pre-wrap;
    }
</style>
`;

const VerticalTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Standard Radio Group (Vertical)</h2>
        <p>This is a standard implementation with custom-styled radio indicators.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="vertical-group">
            <pie-headless-radio-button value="s">
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Small
                </span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="m">
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Medium
                </span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="l">
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Large
                </span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="xl" disabled>
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    X-Large (out of stock)
                </span>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
    </div>
`;

const HorizontalTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Button Group Style (Horizontal)</h2>
        <p>Here, the radio buttons are styled to look like a segmented control or button group.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="button-group">
            <pie-headless-radio-button value="list">
                <span class="button-label">List</span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="grid">
                <span class="button-label">Grid</span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="map">
                <span class="button-label">Map</span>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
    </div>
`;

const HorizontalRTLTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>RTL (Right-to-Left) Horizontal Example</h2>
        <p>This group has <code>dir="rtl"</code>. The right arrow key will now move selection to the left, and the left arrow key will move it to the right.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="button-group" dir="rtl">
            <pie-headless-radio-button value="en">
                <span class="button-label">1</span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="he">
                <span class="button-label">2</span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="ar">
                <span class="button-label">3</span>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
    </div>
`;

const VerticalRTLTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Vertical RTL Example</h2>
        <p>A vertically-oriented group in a right-to-left context.</p>
        <div dir="rtl">
            <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="vertical-group">
                <pie-headless-radio-button value="standard">
                    <span class="radio-label">
                        <span class="custom-radio-indicator"></span>
                        Standard
                    </span>
                </pie-headless-radio-button>
                <pie-headless-radio-button value="express">
                    <span class="radio-label">
                        <span class="custom-radio-indicator"></span>
                        Express
                    </span>
                </pie-headless-radio-button>
                <pie-headless-radio-button value="overnight">
                    <span class="radio-label">
                        <span class="custom-radio-indicator"></span>
                        Overnight
                    </span>
                </pie-headless-radio-button>
            </pie-headless-radio-group>
        </div>
    </div>
`;

const CardTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Card Layout Example</h2>
        <p>A more complex layout where each radio option is a selectable card with detailed information.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="vertical-group">
            <pie-headless-radio-button value="startup">
                <div class="card-radio-label">
                    <span class="custom-radio-indicator"></span>
                    <div class="content">
                        <h4>Startup</h4>
                        <p>A plan that scales with your rapidly growing business.</p>
                    </div>
                    <span class="price">$25</span>
                </div>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="business">
                <div class="card-radio-label">
                    <span class="custom-radio-indicator"></span>
                    <div class="content">
                        <h4>Business</h4>
                        <p>A plan that sets your business up for success.</p>
                    </div>
                    <span class="price">$50</span>
                </div>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="enterprise">
                 <div class="card-radio-label">
                    <span class="custom-radio-indicator"></span>
                    <div class="content">
                        <h4>Enterprise</h4>
                        <p>A plan for large organisations with custom needs.</p>
                    </div>
                    <span class="price">$100</span>
                </div>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
    </div>
`;

const StarRatingTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Star Rating Example</h2>
        <p>This example uses modern CSS to create an accessible star rating with correct keyboard navigation.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="star-rating-group">
            ${[1, 2, 3, 4, 5, 6].map((rating) => html`
                <pie-headless-radio-button
                    value=${rating.toString()}
                    aria-label="${rating} out of 6 stars">
                    <span class="star-label">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </pie-headless-radio-button>
            `)}
        </pie-headless-radio-group>
    </div>
`;

const EmojiRatingTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => {
    const ratings = [
        { value: '1', emoji: '😠', description: 'Poor' },
        { value: '2', emoji: '😟', description: 'Not good' },
        { value: '3', emoji: '😐', description: 'Okay' },
        { value: '4', emoji: '🙂', description: 'Good' },
        { value: '5', emoji: '😄', description: 'Excellent' },
    ];

    return html`
        ${sharedStyles}
        <div class="card">
            <h2>Emoji Experience Rating</h2>
            <p>Another example using the :has() selector for a modern, accessible, and keyboard-friendly rating system.</p>
            <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="emoji-rating-group">
                ${ratings.map((rating) => html`
                    <pie-headless-radio-button
                        value=${rating.value}
                        aria-label="${rating.description} (${rating.value} out of 5)">
                        <span class="emoji-label">${rating.emoji}</span>
                    </pie-headless-radio-button>
                `)}
            </pie-headless-radio-group>
        </div>
    `;
};

const DynamicControlsTemplate = ({ name, value, label }: HeadlessRadioGroupProps): TemplateResult => {
    // These functions will be attached to the buttons' click events.
    // They manipulate the DOM directly, which is a simple way to demonstrate this in a story.
    const addRadio = () => {
        const group = document.querySelector('#dynamic-group');
        if (group) {
            const radioCount = group.querySelectorAll('pie-headless-radio-button').length;
            const newRadio = document.createElement('pie-headless-radio-button') as PieHeadlessRadioButton;
            newRadio.value = `dynamic-${radioCount + 1}`;
            newRadio.innerHTML = `
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Dynamic Option ${radioCount + 1}
                </span>`;
            group.appendChild(newRadio);
        }
    };

    const removeRadio = () => {
        const group = document.querySelector('#dynamic-group');
        const lastRadio = group?.querySelector('pie-headless-radio-button:last-child');
        if (lastRadio) {
            group.removeChild(lastRadio);
        }
    };

    const disableRandomRadio = () => {
        const group = document.querySelector('#dynamic-group');
        const radios = group?.querySelectorAll<PieHeadlessRadioButton>('pie-headless-radio-button:not([disabled])');
        if (radios && radios.length > 0) {
            const randomIndex = Math.floor(Math.random() * radios.length);
            radios[randomIndex].disabled = true;
        }
    };

    const enableRandomRadio = () => {
        const group = document.querySelector('#dynamic-group');
        const disabledRadios = group?.querySelectorAll<PieHeadlessRadioButton>('pie-headless-radio-button[disabled]');
        if (disabledRadios && disabledRadios.length > 0) {
            const randomIndex = Math.floor(Math.random() * disabledRadios.length);
            disabledRadios[randomIndex].disabled = false;
        }
    };

    return html`
    ${sharedStyles}
    <div class="card">
        <h2>Dynamic Radios</h2>
        <p>This example demonstrates how the radio group handles radio buttons being added, removed, enabled, or disabled at runtime.</p>
        <pie-headless-radio-group id="dynamic-group" .name=${name} .value=${value} .label=${label} class="vertical-group">
            <pie-headless-radio-button value="dynamic-1">
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Dynamic Option 1
                </span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="dynamic-2">
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Dynamic Option 2
                </span>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
        <div class="dynamic-controls">
            <button @click=${addRadio}>Add Radio</button>
            <button @click=${removeRadio}>Remove Radio</button>
            <button @click=${disableRandomRadio}>Disable Random</button>
            <button @click=${enableRandomRadio}>Enable Random</button>
        </div>
    </div>
    `;
};

const FormIntegrationTemplate = (): TemplateResult => {
    const handleFormSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: { [key: string]: any } = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const output = form.querySelector('#form-output');
        if (output) {
            output.textContent = JSON.stringify(data, null, 2);
        }
    };

    const handleFormReset = () => {
        const form = document.querySelector('.form-integration-story form') as HTMLFormElement;
        const output = form.querySelector('#form-output');
        if (output) {
            output.textContent = '';
        }
    };

    return html`
    ${sharedStyles}
    <div class="card form-integration-story">
        <h2>Form Integration</h2>
        <p>This demonstrates how the component works within a native form. Submit to see the data.</p>
        <form @submit=${handleFormSubmit} @reset=${handleFormReset}>
            <div class="form-field">
                <label for="name-input">Name</label>
                <input type="text" id="name-input" name="customer-name" value="Jane Doe">
            </div>

            <div class="form-field">
                <label>T-Shirt Size</label>
                <pie-headless-radio-group name="tshirt-size" value="m" label="T-Shirt Size" class="vertical-group">
                    <pie-headless-radio-button value="s">
                        <span class="radio-label">
                            <span class="custom-radio-indicator"></span>
                            Small
                        </span>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="m">
                        <span class="radio-label">
                            <span class="custom-radio-indicator"></span>
                            Medium
                        </span>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="l">
                        <span class="radio-label">
                            <span class="custom-radio-indicator"></span>
                            Large
                        </span>
                    </pie-headless-radio-button>
                </pie-headless-radio-group>
            </div>

            <div class="form-field">
                <label>Subscription Plan</label>
                 <pie-headless-radio-group name="plan" value="business" label="Subscription Plan" class="vertical-group">
                    <pie-headless-radio-button value="startup">
                        <div class="card-radio-label">
                            <span class="custom-radio-indicator"></span>
                            <div class="content">
                                <h4>Startup</h4>
                                <p>A plan that scales with your business.</p>
                            </div>
                            <span class="price">$25</span>
                        </div>
                    </pie-headless-radio-button>
                    <pie-headless-radio-button value="business">
                        <div class="card-radio-label">
                            <span class="custom-radio-indicator"></span>
                            <div class="content">
                                <h4>Business</h4>
                                <p>A plan for growing businesses.</p>
                            </div>
                            <span class="price">$50</span>
                        </div>
                    </pie-headless-radio-button>
                </pie-headless-radio-group>
            </div>

            <div class="form-field">
                <label for="country-select">Country</label>
                <select name="country" id="country-select">
                    <option value="uk">United Kingdom</option>
                    <option value="nl">Netherlands</option>
                    <option value="es">Spain</option>
                </select>
            </div>

            <div class="form-actions">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>
            <pre id="form-output"></pre>
        </form>
    </div>
    `;
};

const DisabledGroupTemplate = ({
    name, value, label, disabled,
}: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Disabled Group</h2>
        <p>This shows a radio group where the entire group is disabled. It also contains one option that is individually disabled.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} ?disabled=${disabled} class="vertical-group">
            <pie-headless-radio-button value="s">
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Small
                </span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="m">
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Medium
                </span>
            </pie-headless-radio-button>
            <pie-headless-radio-button value="l" disabled>
                <span class="radio-label">
                    <span class="custom-radio-indicator"></span>
                    Large (Individually Disabled)
                </span>
            </pie-headless-radio-button>
        </pie-headless-radio-group>
    </div>
`;

export const Vertical = createStory<HeadlessRadioGroupProps>(VerticalTemplate, defaultArgs)();
export const Horizontal = createStory<HeadlessRadioGroupProps>(HorizontalTemplate, { name: 'view-mode', value: 'list', label: 'View Mode' })();
export const HorizontalRTL = createStory<HeadlessRadioGroupProps>(HorizontalRTLTemplate, { name: 'language', value: 'he', label: 'Language' })();
export const VerticalRTL = createStory<HeadlessRadioGroupProps>(VerticalRTLTemplate, { name: 'shipping-rtl', value: 'standard', label: 'Shipping Method' })();
export const CardLayout = createStory<HeadlessRadioGroupProps>(CardTemplate, { name: 'plan', value: 'business', label: 'Subscription Plan' })();
export const StarRating = createStory<HeadlessRadioGroupProps>(StarRatingTemplate, { name: 'rating', value: '4', label: 'Product Rating' })();
export const EmojiRating = createStory<HeadlessRadioGroupProps>(EmojiRatingTemplate, { name: 'experience', value: '4', label: 'Customer Experience' })();
export const DynamicControls = createStory<HeadlessRadioGroupProps>(DynamicControlsTemplate, { name: 'dynamic-group', value: 'dynamic-1', label: 'Dynamic Radio Group' })();
export const FormIntegration = createStory<HeadlessRadioGroupProps>(FormIntegrationTemplate, {})();
export const DisabledGroup = createStory<HeadlessRadioGroupProps>(DisabledGroupTemplate, {
    name: 'disabled-group',
    value: 's',
    label: 'Disabled Radio Group',
    disabled: true,
})();

