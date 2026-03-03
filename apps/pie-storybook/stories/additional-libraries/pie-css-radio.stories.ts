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
            .variant-grid {
                /* Component Variables */
                --grid-border-color: var(--dt-color-border-default);
                --grid-text-heading: var(--dt-color-content-subdued);
                --grid-text-main: var(--dt-color-content-default);
                --grid-text-disabled: var(--dt-color-content-disabled);

                display: grid;
                /* Three columns: Row Header, Col 1 (Unchecked), Col 2 (Checked) */
                grid-template-columns: minmax(120px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr);
                grid-template-rows: auto auto auto auto;
                row-gap: var(--dt-spacing-e); /* 24px */
                align-items: center;
                font-family: var(--dt-font-family-primary);
                max-width: 600px;
            }

            /* Header Section */
            .variant-grid__header-row {
                display: contents; /* Allows children to participate directly in the main grid */
            }

            .col-header {
                font-family: var(--dt-font-caption-strong-family);
                font-size: var(--dt-font-caption-strong-size); /* 12px */
                font-weight: var(--dt-font-caption-strong-weight);
                line-height: calc(var(--dt-font-caption-strong-line-height) * 1px);
                text-transform: uppercase;
                letter-spacing: 0.05em; /* Retained as systems rarely tokenize letter-spacing */
                color: var(--grid-text-heading);
                padding-bottom: var(--dt-spacing-c); /* 12px */
                border-bottom: 1px solid var(--grid-border-color);
            }

            /* Target the first column header (Unchecked) to span 2 columns conceptually, but we offset its start point */
            .col-header--first {
                grid-column-start: 2; /* Starts in the second grid column */
            }

            /* Row Headers */
            .row-header {
                font-family: var(--dt-font-body-strong-s-family);
                font-size: var(--dt-font-body-strong-s-size); /* 14px */
                font-weight: var(--dt-font-body-strong-s-weight);
                line-height: calc(var(--dt-font-body-strong-s-line-height) * 1px);
                color: var(--grid-text-main);
                text-align: right;
                padding-right: var(--dt-spacing-e); /* 24px */
                border-right: 1px solid var(--grid-border-color);
                height: 100%; /* Ensures border spans the entire row height */
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            /* Cell Content */
            .variant-grid__cell {
                display: flex;
                align-items: center;
                gap: var(--dt-spacing-b); /* 8px */
                padding-left: var(--dt-spacing-e); /* 24px */
            }

            .variant-grid__cell label {
                font-family: var(--dt-font-body-s-family);
                font-size: var(--dt-font-body-s-size); /* 14px */
                font-weight: var(--dt-font-body-s-weight);
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--grid-text-main);
                cursor: pointer;
            }

            .variant-grid__cell input:disabled ~ label {
                cursor: not-allowed;
                color: var(--grid-text-disabled); /* Swapped opacity for the dedicated disabled token */
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
            fieldset {
                /* Mapped Component Variables */
                --card-opt-border-default: var(--dt-color-border-default);
                --card-opt-border-hover: var(--dt-color-border-strong);
                --card-opt-border-active: var(--dt-color-support-info); /* Blue border */

                --card-opt-bg-default: var(--dt-color-container-default);
                --card-opt-bg-hover: var(--dt-color-container-subtle);
                --card-opt-bg-active: var(--dt-color-support-info-tonal); /* Light blue bg */

                --card-opt-text-legend: var(--dt-color-content-default);
                --card-opt-text-title: var(--dt-color-content-default);
                --card-opt-text-desc: var(--dt-color-content-subdued);

                /* Fieldset reset */
                border: none;
                padding: 0;
                margin: 0;
            }

            legend {
                font-family: var(--dt-font-family-primary);
                font-size: var(--dt-font-heading-s-size--narrow); /* 16px to 20px depending on viewport */
                font-weight: var(--dt-font-heading-s-weight);
                color: var(--card-opt-text-legend);
                margin-bottom: var(--dt-spacing-c); /* 12px */
            }

            .card-option {
                display: flex;
                align-items: flex-start;
                gap: var(--dt-spacing-c); /* 12px */
                padding: var(--dt-spacing-d); /* 16px */
                border: 2px solid var(--card-opt-border-default);
                border-radius: var(--dt-radius-rounded-b); /* 8px */
                margin-bottom: var(--dt-spacing-c); /* 12px */
                background-color: var(--card-opt-bg-default);
                cursor: pointer;
                transition: all var(--dt-motion-timing-200) var(--dt-motion-easing-out);
            }

            .card-option:hover {
                border-color: var(--card-opt-border-hover);
                background-color: var(--card-opt-bg-hover);
            }

            /* Target the label when the child input is checked */
            .card-option:has(input:checked) {
                border-color: var(--card-opt-border-active);
                background-color: var(--card-opt-bg-active);
            }

            .card-option:has(input:disabled) {
                opacity: 0.5;
                /* If you want to use tokens for disabled states, you could also add:
                background-color: var(--dt-color-disabled-01);
                color: var(--dt-color-content-disabled); */
                cursor: not-allowed;
            }

            .card-content {
                flex: 1;
            }

            /* Changed to strong/span to avoid nested heading confusion */
            .card-title {
                display: block;
                font-family: var(--dt-font-family-primary);
                margin: 0 0 var(--dt-spacing-a) 0; /* 4px bottom margin */
                font-size: var(--dt-font-body-strong-l-size); /* 16px */
                font-weight: var(--dt-font-body-strong-l-weight); /* 700 */
                line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
                color: var(--card-opt-text-title);
            }

            .card-description {
                margin: 0;
                font-family: var(--dt-font-family-primary);
                font-size: var(--dt-font-body-s-size); /* 14px */
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--card-opt-text-desc);
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
                /* Mapped Component Variables */
                --delivery-bg-default: var(--dt-color-container-default);
                --delivery-bg-expanded: var(--dt-color-container-subtle);

                --delivery-border-default: var(--dt-color-border-default);
                --delivery-border-active: var(--dt-color-border-selected-brand);
                --delivery-border-top-inactive: var(--dt-color-support-neutral); /* Matches your pale beige */

                --delivery-text-title: var(--dt-color-content-default);
                --delivery-text-subtitle: var(--dt-color-content-subdued);
                --delivery-text-expanded: var(--dt-color-content-default);

                /* Reset default fieldset styles */
                border: none;
                margin: 0;
                padding: 0;
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-d); /* 16px */
                font-family: var(--dt-font-family-primary);
                max-width: 500px;
            }

            .delivery-card {
                display: flex;
                flex-direction: column;
                border: 1px solid var(--delivery-border-default);
                border-top: var(--dt-spacing-b) solid var(--delivery-border-top-inactive); /* 8px */
                border-radius: var(--dt-radius-rounded-c); /* 12px */
                background-color: var(--delivery-bg-default);
                cursor: pointer;
                overflow: hidden;
                transition: all var(--dt-motion-timing-200) var(--dt-motion-easing-out);
            }

            /* Card Selected State */
            .delivery-card:has(input[type="radio"]:checked) {
                border-color: var(--delivery-border-active);
                border-top-color: var(--delivery-border-active);
            }

            /* Top half of the card */
            .card-main {
                display: flex;
                align-items: center;
                /* Replaced 20px with 24px (e) and 16px (d) to match your token scale */
                padding: var(--dt-spacing-d) var(--dt-spacing-e);
                gap: var(--dt-spacing-d); /* 16px */
            }

            /* Flex rules for your custom radio */
            .c-radio {
                flex-shrink: 0;
                margin: 0;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-a); /* 4px */
                flex-grow: 1;
            }

            .card-title {
                font-weight: var(--dt-font-body-strong-l-weight); /* 700 */
                font-size: var(--dt-font-body-strong-l-size); /* 16px */
                line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
                color: var(--delivery-text-title);
            }

            .card-subtitle {
                font-size: var(--dt-font-body-s-size); /* 14px */
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--delivery-text-subtitle);
            }

            /* Bottom half of the card */
            .card-expanded {
                display: none;
                border-top: 1px solid var(--delivery-border-active);
                background-color: var(--delivery-bg-expanded);
                padding: var(--dt-spacing-d) var(--dt-spacing-e);
                align-items: center;
                gap: var(--dt-spacing-c); /* 12px */
            }

            /* CSS-only show when parent label's radio is checked */
            .delivery-card:has(input[type="radio"]:checked) .card-expanded {
                display: flex;
            }

            .card-expanded p {
                margin: 0;
                font-size: var(--dt-font-body-s-size); /* 14px */
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--delivery-text-expanded);
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
