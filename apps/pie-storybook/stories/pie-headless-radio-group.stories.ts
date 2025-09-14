import { html, type TemplateResult } from 'lit';
import { type Meta } from '@storybook/web-components';

// Note: We are importing the components from a package,
// so you will need to ensure `@justeattakeaway/pie-headless-radio-group` is installed.
import '@justeattakeaway/pie-headless-radio-group';
import { type HeadlessRadioGroupProps } from '@justeattakeaway/pie-headless-radio-group';

import { createStory } from '../utilities';

type PieHeadlessRadioGroupStoryMeta = Meta<HeadlessRadioGroupProps>;

const defaultArgs: HeadlessRadioGroupProps = {
    name: 'storybook-radio-group',
    value: 'm',
    label: 'Default Radio Group',
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

    pie-headless-radio-button:focus-within .radio-label {
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
        display: inline-flex;
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

    .button-group pie-headless-radio-button:focus-within .button-label {
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

    pie-headless-radio-button:focus-within .card-radio-label {
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    pie-headless-radio-button[checked] .card-radio-label {
        border-color: #3182ce;
        background-color: #ebf8ff;
    }
</style>
`;

const VerticalTemplate = ({ name, value, label }: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Standard Radio Group (Vertical)</h2>
        <p>This is a standard implementation with custom-styled radio indicators.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} class="vertical-group">
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

const HorizontalTemplate = ({ name, value, label }: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Button Group Style (Horizontal)</h2>
        <p>Here, the radio buttons are styled to look like a segmented control or button group.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} class="button-group">
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

const HorizontalRTLTemplate = ({ name, value, label }: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>RTL (Right-to-Left) Horizontal Example</h2>
        <p>This group has <code>dir="rtl"</code>. The right arrow key will now move selection to the left, and the left arrow key will move it to the right.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} class="button-group" dir="rtl">
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

const VerticalRTLTemplate = ({ name, value, label }: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Vertical RTL Example</h2>
        <p>A vertically-oriented group in a right-to-left context.</p>
        <div dir="rtl">
            <pie-headless-radio-group .name=${name} .value=${value} .label=${label} class="vertical-group">
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

const CardTemplate = ({ name, value, label }: HeadlessRadioGroupProps): TemplateResult => html`
    ${sharedStyles}
    <div class="card">
        <h2>Card Layout Example</h2>
        <p>A more complex layout where each radio option is a selectable card with detailed information.</p>
        <pie-headless-radio-group .name=${name} .value=${value} .label=${label} class="vertical-group">
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

export const Vertical = createStory<HeadlessRadioGroupProps>(VerticalTemplate, defaultArgs)();
export const Horizontal = createStory<HeadlessRadioGroupProps>(HorizontalTemplate, { name: 'view-mode', value: 'list', label: 'View Mode' })();
export const HorizontalRTL = createStory<HeadlessRadioGroupProps>(HorizontalRTLTemplate, { name: 'language', value: 'he', label: 'Language' })();
export const VerticalRTL = createStory<HeadlessRadioGroupProps>(VerticalRTLTemplate, { name: 'shipping-rtl', value: 'standard', label: 'Shipping Method' })();
export const CardLayout = createStory<HeadlessRadioGroupProps>(CardTemplate, { name: 'plan', value: 'business', label: 'Subscription Plan' })();

