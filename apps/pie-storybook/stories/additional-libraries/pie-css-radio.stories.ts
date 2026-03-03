import type { Meta, StoryObj } from '@storybook/html';

// Import the radio CSS
import '@justeattakeaway/pie-css/dist/components/radio.css';

const meta: Meta = {
    title: 'Components/Radio/CSS Only/Examples',
    parameters: {
        layout: 'padded',
        docs: {
            source: {
                type: 'code',
            },
        },
    },
};

export default meta;

type Story = StoryObj;

export const AllStates: Story = {
    render: () => `
        <style>
            :root {
                --border-color: #e2e8f0;
                --text-heading: #64748b;
                --text-main: #334155;
            }

            .variant-grid {
                display: grid;
                /* Three columns: Row Header, Col 1 (Unchecked), Col 2 (Checked) */
                grid-template-columns: minmax(120px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr);
                grid-template-rows: auto auto auto auto;
                row-gap: 24px;
                align-items: center;
                font-family: system-ui, sans-serif;
                max-width: 600px;
            }

            /* Header Section */
            .variant-grid__header-row {
                display: contents; /* Allows children to participate directly in the main grid */
            }

            .col-header {
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: var(--text-heading);
                padding-bottom: 12px;
                border-bottom: 1px solid var(--border-color);
            }

            /* Target the first column header (Unchecked) to span 2 columns conceptually, but we offset its start point */
            .col-header--first {
                grid-column-start: 2; /* Starts in the second grid column */
            }

            /* Row Headers */
            .row-header {
                font-size: 0.875rem;
                font-weight: 600;
                color: var(--text-main);
                text-align: right;
                padding-right: 24px;
                border-right: 1px solid var(--border-color);
                height: 100%; /* Ensures border spans the entire row height */
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            /* Cell Content */
            .variant-grid__cell {
                display: flex;
                align-items: center;
                gap: 8px;
                padding-left: 24px; /* Give breathing room after the row-header border */
            }

            .variant-grid__cell label {
                font-size: 0.875rem;
                color: var(--text-main);
                cursor: pointer;
            }

            .variant-grid__cell input:disabled ~ label {
                cursor: not-allowed;
                opacity: 0.6;
            }
        </style>

        <div class="variant-grid">
            <div class="variant-grid__header-row">
                <div class="col-header col-header--first">Unchecked</div>
                <div class="col-header">Checked</div>
            </div>

            <div class="row-header">Default</div>
            <div class="variant-grid__cell">
                <input type="radio" id="default-unchecked" class="c-radio" name="var-default">
                <label for="default-unchecked">Radio option</label>
            </div>
            <div class="variant-grid__cell">
                <input type="radio" id="default-checked" class="c-radio" name="var-default" checked>
                <label for="default-checked">Radio option</label>
            </div>

            <div class="row-header">Error</div>
            <div class="variant-grid__cell">
                <input type="radio" id="error-unchecked" class="c-radio c-radio--error" name="var-error">
                <label for="error-unchecked">Radio option</label>
            </div>
            <div class="variant-grid__cell">
                <input type="radio" id="error-checked" class="c-radio c-radio--error" name="var-error" checked>
                <label for="error-checked">Radio option</label>
            </div>

            <div class="row-header">Disabled</div>
            <div class="variant-grid__cell">
                <input type="radio" id="disabled-unchecked" class="c-radio" name="var-disabled" disabled>
                <label for="disabled-unchecked">Radio option</label>
            </div>
            <div class="variant-grid__cell">
                <input type="radio" id="disabled-checked" class="c-radio" name="var-disabled" disabled checked>
                <label for="disabled-checked">Radio option</label>
            </div>
        </div>
    `,
};

export const CardBasedSelection: Story = {
    render: () => `
        <style>
            /* Fieldset reset to remove default padding/border if desired */
            fieldset {
                border: none;
                padding: 0;
                margin: 0;
            }

            legend {
                font-size: 1.17em; /* Matches h3 sizing */
                font-weight: bold;
                margin-bottom: 12px;
            }

            .card-option {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                padding: 16px;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                margin-bottom: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .card-option:hover {
                border-color: #c0c0c0;
                background-color: #fafafa;
            }

            /* Target the label when the child input is checked */
            .card-option:has(input:checked) {
                border-color: #007bff;
                background-color: #f0f7ff;
            }

            .card-option:has(input:disabled) {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .card-content {
                flex: 1;
            }

            /* Changed to strong/span to avoid nested heading confusion */
            .card-title {
                display: block;
                margin: 0 0 4px 0;
                font-size: 16px;
                font-weight: 600;
            }

            .card-description {
                margin: 0;
                font-size: 14px;
                color: #666;
            }
        </style>

    <form>
        <fieldset>
            <legend>Choose your plan</legend>

            <label class="card-option">
                <input type="radio" class="c-radio" name="plan" value="basic" checked>
                <span class="card-content">
                    <strong class="card-title">Basic Plan</strong>
                    <span class="card-description">Perfect for individuals. $9.99/month</span>
                </span>
            </label>

            <label class="card-option">
                <input type="radio" class="c-radio" name="plan" value="pro">
                <span class="card-content">
                    <strong class="card-title">Pro Plan</strong>
                    <span class="card-description">Best for small teams. $29.99/month</span>
                </span>
            </label>

            <label class="card-option">
                <input type="radio" class="c-radio" name="plan" value="enterprise">
                <span class="card-content">
                    <strong class="card-title">Enterprise Plan</strong>
                    <span class="card-description">For large organizations. Custom pricing</span>
                </span>
            </label>
        </fieldset>
    </form>
    `,
};

export const ExpandableComplexCardBasedSelection: Story = {
    render: () => `
        <style>
            .delivery-options {
                /* Reset default fieldset styles */
                border: none;
                margin: 0;
                padding: 0;
                min-width: 0; /* Prevents overflow issues in some browsers */
                display: flex;
                flex-direction: column;
                gap: 16px;
                font-family: system-ui, -apple-system, sans-serif;
                max-width: 500px;
            }

            .delivery-card {
                display: flex;
                flex-direction: column;
                border: 1px solid #dcdcdc;
                border-top: 8px solid #f9ece0; /* Pale beige inactive top border */
                border-radius: 12px;
                background-color: #ffffff;
                cursor: pointer;
                overflow: hidden;
                transition: all 0.2s ease;
            }

            /* Card Selected State */
            .delivery-card:has(input[type="radio"]:checked) {
                border-color: #df6922;
                border-top-color: #df6922; /* Solid orange active top border */
            }

            /* Top half of the card */
            .card-main {
                display: flex;
                align-items: center;
                padding: 20px;
                gap: 16px;
            }

            /* Flex rules for your custom radio */
            .c-radio {
                flex-shrink: 0;
                margin: 0;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                gap: 4px;
                flex-grow: 1;
            }

            .card-title {
                font-weight: 700;
                font-size: 1.125rem;
                color: #222222;
            }

            .card-subtitle {
                font-size: 0.95rem;
                color: #555555;
            }

            /* Bottom half of the card */
            .card-expanded {
                display: none; /* CSS-only hide */
                border-top: 1px solid #df6922;
                background-color: #f9f9f9;
                padding: 16px 20px;
                align-items: center;
                gap: 12px;
            }

            /* CSS-only show when parent label's radio is checked */
            .delivery-card:has(input[type="radio"]:checked) .card-expanded {
                display: flex;
            }

            .card-expanded p {
                margin: 0;
                font-size: 0.95rem;
                color: #333333;
                line-height: 1.4;
                flex-grow: 1;
            }
        </style>

    <form action="#">
        <fieldset class="delivery-options">
            <label class="delivery-card">
                <div class="card-main">
                    <input type="radio" name="delivery_plan" value="free" class="c-radio">
                    <div class="card-content">
                        <span class="card-title">Lorem ipsum dolor</span>
                        <span class="card-subtitle">Donec id justo sed nulla amet</span>
                    </div>
                </div>
            </label>

            <label class="delivery-card">
                <div class="card-main">
                    <input type="radio" name="delivery_plan" value="extend" class="c-radio" checked>
                    <div class="card-content">
                        <span class="card-title">Lorem ipsum dolor et amet</span>
                        <span class="card-subtitle">Aenean eu leo quam ornare</span>
                        <span class="card-subtitle">Donec id justo sed nulla amet</span>
                    </div>
                </div>

                <div class="card-expanded">
                    <p>Nulla vitae <strong>ipsum fermentum</strong> elit cras justo vehicula! Cras mattis consectetur purus sit amet <strong>purus</strong></p>
                </div>
            </label>

            <label class="delivery-card">
                <div class="card-main">
                    <input type="radio" name="delivery_plan" value="extend-2" class="c-radio">
                    <div class="card-content">
                        <span class="card-title">Lorem ipsum dolor et</span>
                        <span class="card-subtitle">Aenean eu leo quam ornare</span>
                        <span class="card-subtitle">Donec id justo sed nulla amet</span>
                    </div>
                </div>

                <div class="card-expanded">
                    <p>Nulla vitae <strong>ipsum fermentum</strong> elit vehicula! Cras mattis purus sit <strong>purus</strong></p>
                </div>
            </label>
        </fieldset>
    </form>
    `,
};

export const HorizontalLayout: Story = {
    render: () => `
        <style>
            .horizontal-group {
                display: flex;
                gap: 24px;
                align-items: center;
            }
            .horizontal-group label {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
            }
        </style>

        <div class="horizontal-group" role="radiogroup" aria-labelledby="size-label">
            <span id="size-label"><strong>Size:</strong></span>
            <label>
                <input type="radio" class="c-radio" name="size" value="s" id="size-s">
                <span>Small</span>
            </label>
            <label>
                <input type="radio" class="c-radio" name="size" value="m" id="size-m" checked>
                <span>Medium</span>
            </label>
            <label>
                <input type="radio" class="c-radio" name="size" value="l" id="size-l">
                <span>Large</span>
            </label>
        </div>
    `,
};
