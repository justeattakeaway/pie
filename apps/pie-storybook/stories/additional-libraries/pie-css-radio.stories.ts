import type { Meta, StoryObj } from '@storybook/html';

import '@justeattakeaway/pie-css/dist/components/radio.css';
import '@justeattakeaway/pie-button';

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
                --grid-border-color: var(--dt-color-border-default);
                --grid-text-heading: var(--dt-color-content-subdued);
                --grid-text-main: var(--dt-color-content-default);
                --grid-text-disabled: var(--dt-color-content-disabled);

                display: grid;
                grid-template-columns: minmax(120px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr);
                grid-template-rows: auto auto auto auto;
                row-gap: var(--dt-spacing-e);
                align-items: center;
                font-family: var(--dt-font-family-primary);
                max-width: 600px;
            }

            .variant-grid__header-row {
                display: contents;
            }

            .col-header {
                font-family: var(--dt-font-caption-strong-family);
                font-size: var(--dt-font-caption-strong-size);
                font-weight: var(--dt-font-caption-strong-weight);
                line-height: calc(var(--dt-font-caption-strong-line-height) * 1px);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: var(--grid-text-heading);
                padding-bottom: var(--dt-spacing-c);
                border-bottom: 1px solid var(--grid-border-color);
            }

            .col-header--first {
                grid-column-start: 2;
            }

            .row-header {
                font-family: var(--dt-font-body-strong-s-family);
                font-size: var(--dt-font-body-strong-s-size);
                font-weight: var(--dt-font-body-strong-s-weight);
                line-height: calc(var(--dt-font-body-strong-s-line-height) * 1px);
                color: var(--grid-text-main);
                text-align: right;
                padding-right: var(--dt-spacing-e);
                border-right: 1px solid var(--grid-border-color);
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            .variant-grid__cell {
                display: flex;
                align-items: center;
                gap: var(--dt-spacing-b);
                padding-left: var(--dt-spacing-e);
            }

            .variant-grid__cell label {
                font-family: var(--dt-font-body-s-family);
                font-size: var(--dt-font-body-s-size);
                font-weight: var(--dt-font-body-s-weight);
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--grid-text-main);
                cursor: pointer;
            }

            .variant-grid__cell input:disabled ~ label {
                cursor: not-allowed;
                color: var(--grid-text-disabled);
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
                --card-opt-border-default: var(--dt-color-border-default);
                --card-opt-border-hover: var(--dt-color-border-strong);
                --card-opt-border-active: var(--dt-color-support-info);

                --card-opt-bg-default: var(--dt-color-container-default);
                --card-opt-bg-hover: var(--dt-color-container-subtle);
                --card-opt-bg-active: var(--dt-color-support-info-tonal);

                --card-opt-text-legend: var(--dt-color-content-default);
                --card-opt-text-title: var(--dt-color-content-default);
                --card-opt-text-desc: var(--dt-color-content-subdued);

                border: none;
                padding: 0;
                margin: 0;
            }

            legend {
                font-family: var(--dt-font-family-primary);
                font-size: var(--dt-font-heading-s-size--narrow);
                font-weight: var(--dt-font-heading-s-weight);
                color: var(--card-opt-text-legend);
                margin-bottom: var(--dt-spacing-c);
            }

            .card-option {
                display: flex;
                align-items: flex-start;
                gap: var(--dt-spacing-c);
                padding: var(--dt-spacing-d);
                border: 2px solid var(--card-opt-border-default);
                border-radius: var(--dt-radius-rounded-b);
                margin-bottom: var(--dt-spacing-c);
                background-color: var(--card-opt-bg-default);
                cursor: pointer;
                transition: all var(--dt-motion-timing-200) var(--dt-motion-easing-out);
            }

            .card-option:hover {
                border-color: var(--card-opt-border-hover);
                background-color: var(--card-opt-bg-hover);
            }

            .card-option:has(input:checked) {
                border-color: var(--card-opt-border-active);
                background-color: var(--card-opt-bg-active);
            }

            .card-option:has(input:disabled) {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .card-content {
                flex: 1;
            }

            .card-title {
                display: block;
                font-family: var(--dt-font-family-primary);
                margin: 0 0 var(--dt-spacing-a) 0;
                font-size: var(--dt-font-body-strong-l-size);
                font-weight: var(--dt-font-body-strong-l-weight);
                line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
                color: var(--card-opt-text-title);
            }

            .card-description {
                margin: 0;
                font-family: var(--dt-font-family-primary);
                font-size: var(--dt-font-body-s-size);
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--card-opt-text-desc);
            }
        </style>

    <form>
        <fieldset>
            <legend>Lorem ipsum dolor sit</legend>

            <label class="card-option">
                <input type="radio" class="c-radio" name="plan" value="basic" checked>
                <span class="card-content">
                    <strong class="card-title">Ipsum dolor</strong>
                    <span class="card-description">Praesent commodo cursus magna vel</span>
                </span>
            </label>

            <label class="card-option">
                <input type="radio" class="c-radio" name="plan" value="pro">
                <span class="card-content">
                    <strong class="card-title">Amet Plan</strong>
                    <span class="card-description">Vivamus sagittis lacus. Vestibulum</span>
                </span>
            </label>

            <label class="card-option">
                <input type="radio" class="c-radio" name="plan" value="enterprise">
                <span class="card-content">
                    <strong class="card-title">Consectetur dolor</strong>
                    <span class="card-description">Nulla vitae elit. Cras justo odio</span>
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
                --delivery-bg-default: var(--dt-color-container-default);
                --delivery-bg-expanded: var(--dt-color-container-subtle);

                --delivery-border-default: var(--dt-color-border-default);
                --delivery-border-active: var(--dt-color-border-selected-brand);
                --delivery-border-top-inactive: var(--dt-color-support-neutral);

                --delivery-text-title: var(--dt-color-content-default);
                --delivery-text-subtitle: var(--dt-color-content-subdued);
                --delivery-text-expanded: var(--dt-color-content-default);

                border: none;
                margin: 0;
                padding: 0;
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-d);
                font-family: var(--dt-font-family-primary);
                max-width: 500px;
            }

            .delivery-card {
                display: flex;
                flex-direction: column;
                border: 1px solid var(--delivery-border-default);
                border-top: var(--dt-spacing-b) solid var(--delivery-border-top-inactive);
                border-radius: var(--dt-radius-rounded-c);
                background-color: var(--delivery-bg-default);
                cursor: pointer;
                overflow: hidden;
                transition: all var(--dt-motion-timing-200) var(--dt-motion-easing-out);
            }

            .delivery-card:has(input[type="radio"]:checked) {
                border-color: var(--delivery-border-active);
                border-top-color: var(--delivery-border-active);
            }

            .card-main {
                display: flex;
                align-items: center;
                padding: var(--dt-spacing-d) var(--dt-spacing-e);
                gap: var(--dt-spacing-d);
            }

            .c-radio {
                flex-shrink: 0;
                margin: 0;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-a);
                flex-grow: 1;
            }

            .card-title {
                font-weight: var(--dt-font-body-strong-l-weight);
                font-size: var(--dt-font-body-strong-l-size);
                line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
                color: var(--delivery-text-title);
            }

            .card-subtitle {
                font-size: var(--dt-font-body-s-size);
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--delivery-text-subtitle);
            }

            .card-expanded {
                display: none;
                border-top: 1px solid var(--delivery-border-active);
                background-color: var(--delivery-bg-expanded);
                padding: var(--dt-spacing-d) var(--dt-spacing-e);
                align-items: center;
                gap: var(--dt-spacing-c);
            }

            .delivery-card:has(input[type="radio"]:checked) .card-expanded {
                display: flex;
            }

            .card-expanded p {
                margin: 0;
                font-size: var(--dt-font-body-s-size);
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

export const ProductListSelection: Story = {
    render: () => `
        <style>
            .product-list {
                --product-list-border: var(--dt-color-border-default);
                --product-list-border-selected: var(--dt-color-interactive-brand);
                --product-list-bg: var(--dt-color-container-default);
                --product-list-text-title: var(--dt-color-content-default);
                --product-list-text-secondary: var(--dt-color-content-subdued);
                --product-list-text-match: var(--dt-color-content-subdued);
                --product-list-header-text: var(--dt-color-content-default);
                --product-list-header-desc: var(--dt-color-content-subdued);

                border: none;
                margin: 0;
                padding: 0;
                min-width: 0;
                font-family: var(--dt-font-family-primary);
                max-width: 500px;
            }

            .product-list__header {
                margin-bottom: var(--dt-spacing-d);
            }

            .product-list__heading {
                display: flex;
                align-items: center;
                gap: var(--dt-spacing-b);
                margin: 0 0 var(--dt-spacing-b) 0;
                font-size: var(--dt-font-heading-s-size--narrow);
                font-weight: var(--dt-font-heading-s-weight);
                line-height: calc(var(--dt-font-heading-s-line-height--narrow) * 1px);
                color: var(--product-list-header-text);
            }

            .product-list__description {
                margin: 0;
                font-size: var(--dt-font-body-s-size);
                line-height: calc(var(--dt-font-body-s-line-height) * 1px);
                color: var(--product-list-header-desc);
            }

            .product-list__items {
                display: flex;
                flex-direction: column;
            }

            .product-item {
                display: flex;
                align-items: center;
                gap: var(--dt-spacing-d);
                padding: var(--dt-spacing-d) 0;
                border-top: 1px solid var(--product-list-border);
                cursor: pointer;
                background: var(--product-list-bg);
                transition: background-color var(--dt-motion-timing-150) var(--dt-motion-easing-out);
            }

            .product-item:last-child {
                border-bottom: 1px solid var(--product-list-border);
            }

            .product-item__image {
                width: 48px;
                height: 48px;
                object-fit: contain;
                flex-shrink: 0;
                border-radius: var(--dt-radius-rounded-b);
            }

            .product-item__image-placeholder {
                width: 48px;
                height: 48px;
                flex-shrink: 0;
                border-radius: var(--dt-radius-rounded-b);
                background-color: var(--dt-color-container-subtle);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .product-item__content {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-a);
                flex: 1;
                min-width: 0;
            }

            .product-item__name {
                font-size: var(--dt-font-body-l-size);
                font-weight: var(--dt-font-body-strong-l-weight);
                line-height: calc(var(--dt-font-body-strong-l-line-height) * 1px);
                color: var(--product-list-text-title);
            }

            .product-item__gtin-label {
                font-size: var(--dt-font-caption-size);
                font-weight: var(--dt-font-caption-strong-weight);
                line-height: calc(var(--dt-font-caption-line-height) * 1px);
                color: var(--product-list-text-secondary);
            }

            .product-item__gtin-row {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: var(--dt-spacing-b);
            }

            .product-item__gtin-value {
                font-size: var(--dt-font-caption-size);
                line-height: calc(var(--dt-font-caption-line-height) * 1px);
                color: var(--product-list-text-secondary);
            }

            .product-item__match {
                font-size: var(--dt-font-caption-size);
                line-height: calc(var(--dt-font-caption-line-height) * 1px);
                color: var(--product-list-text-match);
                flex-shrink: 0;
            }

            .product-item__radio-wrapper {
                flex-shrink: 0;
            }

            .product-list__actions {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-c);
                margin-top: var(--dt-spacing-e);
            }
        </style>

    <form action="#">
        <fieldset class="product-list">
            <div class="product-list__header">
                <legend class="product-list__heading">Menu made easy</legend>
                <p class="product-list__description">Save time and be part of brand-sponsored ads by selecting the right item from the list and we will do the rest.</p>
            </div>

            <div class="product-list__items">
                <label class="product-item">
                    <span class="product-item__image-placeholder" aria-hidden="true">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="currentColor" opacity="0.15"/></svg>
                    </span>
                    <span class="product-item__content">
                        <span class="product-item__name" id="product-1-name">Pepsi can 330ml</span>
                        <span class="product-item__gtin-label">GTIN/Barcode</span>
                        <span class="product-item__gtin-row">
                            <span id="product-1-gtin" class="product-item__gtin-value" aria-label="4 0 6 2 1 3 9 0 1 7 4 1 6">4062139017416</span>
                            <span class="product-item__match" id="product-1-match">80% match</span>
                        </span>
                    </span>
                    <span class="product-item__radio-wrapper">
                        <input
                            type="radio"
                            class="c-radio"
                            name="product"
                            value="pepsi-330"
                            aria-labelledby="product-1-name"
                            aria-describedby="product-1-gtin product-1-match"
                            checked>
                    </span>
                </label>

                <label class="product-item">
                    <span class="product-item__image-placeholder" aria-hidden="true">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="currentColor" opacity="0.15"/></svg>
                    </span>
                    <span class="product-item__content">
                        <span class="product-item__name" id="product-2-name">Pepsi can 250ml</span>
                        <span class="product-item__gtin-label">GTIN/Barcode</span>
                        <span class="product-item__gtin-row">
                            <span id="product-2-gtin" class="product-item__gtin-value" aria-label="5 0 1 0 1 0 2 2 2 7 1 4 9">5010102227149</span>
                            <span class="product-item__match" id="product-2-match">50% match</span>
                        </span>
                    </span>
                    <span class="product-item__radio-wrapper">
                        <input
                            type="radio"
                            class="c-radio"
                            name="product"
                            value="pepsi-250"
                            aria-labelledby="product-2-name"
                            aria-describedby="product-2-gtin product-2-match">
                    </span>
                </label>

                <label class="product-item">
                    <span class="product-item__image-placeholder" aria-hidden="true">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="currentColor" opacity="0.15"/></svg>
                    </span>
                    <span class="product-item__content">
                        <span class="product-item__name" id="product-3-name">Pepsi can 150ml</span>
                        <span class="product-item__gtin-label">GTIN/Barcode</span>
                        <span class="product-item__gtin-row">
                            <span id="product-3-gtin" class="product-item__gtin-value" aria-label="4 0 6 0 8 0 0 1 0 1 4 5 7">4060800101457</span>
                            <span class="product-item__match" id="product-3-match">50% match</span>
                        </span>
                    </span>
                    <span class="product-item__radio-wrapper">
                        <input
                            type="radio"
                            class="c-radio"
                            name="product"
                            value="pepsi-150"
                            aria-labelledby="product-3-name"
                            aria-describedby="product-3-gtin product-3-match">
                    </span>
                </label>
            </div>

            <div class="product-list__actions">
                <pie-button type="submit" isFullWidth>Apply and save</pie-button>
                <pie-button type="button" variant="ghost" isFullWidth>Maybe later</pie-button>
            </div>
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
