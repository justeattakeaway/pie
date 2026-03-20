import type { Meta, StoryObj } from '@storybook/html';

import '@justeattakeaway/pie-css/dist/components/button.css';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';
import { variants, sizes } from '@justeattakeaway/pie-webc/components/button';

const meta: Meta = {
    title: 'Components/Button/CSS Only/Examples',
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

const icon = '<icon-plus-circle></icon-plus-circle>';

const buttonContent = (label: string, iconPosition: string) => {
    if (iconPosition === 'leading') return `${icon} ${label}`;
    if (iconPosition === 'trailing') return `${label} ${icon}`;
    return label;
};

const buttonHtml = (classes: string, label: string, iconPosition: string) => `<div class="${classes}">${buttonContent(label, iconPosition)}</div>`;

export const AllVariants: Story = {
    argTypes: {
        label: {
            control: 'text',
            description: 'Button label text',
        },
        icon: {
            control: 'select',
            options: ['none', 'leading', 'trailing'],
            description: 'Position of the icon relative to the label',
        },
    },
    args: {
        label: 'Label',
        icon: 'none',
    },
    render: ({ label, icon: iconPosition }: { label: string; icon: string }) => {
        // Variants that need a dark/brand background to be visible
        const brandBgVariants = new Set(['ghost-dark', 'inverse', 'ghost-inverse', 'outline-inverse', 'ghost-inverse-light']);

        const variantRows = variants.map((variant) => ({
            name: variant.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            class: variant,
            brandBg: brandBgVariants.has(variant),
        }));

        const rows = variantRows.map(({ name, class: cls, brandBg }) => {
            const bgClass = brandBg ? ' brand-bg' : '';
            const cells = sizes.map((size) => `<div class="variant-grid__cell${bgClass}">
                    ${buttonHtml(`c-button c-button--${cls} c-button--${size}`, label, iconPosition)}
                </div>`).join('\n            ');

            const disabledCell = `<div class="variant-grid__cell${bgClass}">
                    ${buttonHtml(`c-button c-button--${cls} c-button--medium c-button--disabled`, label, iconPosition)}
                </div>`;

            return `<div class="row-header">${name}</div>
            ${cells}
            ${disabledCell}`;
        }).join('\n\n            ');

        return `
        <style>
            .variant-grid {
                --grid-border-color: var(--dt-color-border-default);
                --grid-text-heading: var(--dt-color-content-subdued);
                --grid-text-main: var(--dt-color-content-default);

                display: grid;
                grid-template-columns: minmax(180px, 1fr) repeat(6, minmax(140px, 1fr));
                align-items: stretch;
                font-family: var(--dt-font-family-primary);
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
                justify-content: center;
                padding: var(--dt-spacing-c);
                min-height: 72px;
            }

            .brand-bg {
                background-color: var(--dt-color-interactive-brand);
            }
        </style>

        <div class="variant-grid">
            <div class="variant-grid__header-row">
                <div class="col-header col-header--first">XSmall</div>
                <div class="col-header">Small Productive</div>
                <div class="col-header">Small Expressive</div>
                <div class="col-header">Medium</div>
                <div class="col-header">Large</div>
                <div class="col-header">Disabled</div>
            </div>

            ${rows}
        </div>
    `;
    },
};

export const FullWidth: Story = {
    render: () => `
        <style>
            .full-width-container {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-d);
                max-width: 400px;
                font-family: var(--dt-font-family-primary);
                border: 1px solid var(--dt-color-border-default);
                padding: var(--dt-spacing-d);
                border-radius: var(--dt-radius-rounded-c);
            }
        </style>

        <div class="full-width-container">
            <div class="c-button c-button--primary c-button--medium c-button--fullWidth">
                Full width primary
            </div>

            <div class="c-button c-button--secondary c-button--medium c-button--fullWidth">
                Full width secondary
            </div>

            <div class="c-button c-button--outline c-button--medium c-button--fullWidth">
                Full width outline
            </div>

            <div class="c-button c-button--ghost c-button--medium c-button--fullWidth">
                Full width ghost
            </div>
        </div>
    `,
};

export const TextOverflow: Story = {
    render: () => `
        <style>
            .overflow-demo {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-d);
                font-family: var(--dt-font-family-primary);
                max-width: 200px;
            }

            .overflow-demo__label {
                font-size: var(--dt-font-caption-size);
                line-height: calc(var(--dt-font-caption-line-height) * 1px);
                color: var(--dt-color-content-subdued);
            }
        </style>

        <div class="overflow-demo">
            <span class="overflow-demo__label">Buttons constrained to 200px via max-width on a parent container</span>

            <div class="c-button c-button--primary c-button--medium c-button--fullWidth c-button--truncate">
                <span>This label is too long and will be truncated</span>
            </div>

            <div class="c-button c-button--secondary c-button--medium c-button--fullWidth c-button--truncate">
                <icon-plus-circle></icon-plus-circle>
                <span>Truncated with a leading icon</span>
            </div>

            <div class="c-button c-button--outline c-button--small-productive c-button--fullWidth c-button--truncate">
                <span>Small text that overflows its container</span>
            </div>
        </div>
    `,
};

export const BannerAd: Story = {
    render: () => `
        <style>
            .banner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: var(--dt-color-support-brand-04);
                border-radius: var(--dt-radius-rounded-c);
                padding: var(--dt-spacing-e) var(--dt-spacing-f);
                font-family: var(--dt-font-family-primary);
                text-decoration: none;
                color: var(--dt-color-content-default);
                max-width: 800px;
                overflow: hidden;
                position: relative;
                cursor: pointer;
            }

            .banner__content {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-b);
                z-index: 1;
            }

            .banner__title {
                font-family: var(--dt-font-heading-s-family);
                font-size: var(--dt-font-heading-s-size--narrow);
                font-weight: var(--dt-font-heading-s-weight);
                font-style: italic;
                line-height: calc(var(--dt-font-heading-s-line-height--narrow) * 1px);
                margin: 0;
            }

            .banner__description {
                font-size: var(--dt-font-body-l-size);
                line-height: calc(var(--dt-font-body-l-line-height) * 1px);
                margin: 0;
            }

            .banner__description strong {
                font-weight: var(--dt-font-body-strong-l-weight);
            }

            .banner__cta {
                margin-top: var(--dt-spacing-c);
            }

            .banner__offer {
                font-family: var(--dt-font-heading-xl-family);
                font-weight: var(--dt-font-heading-xl-weight);
                color: var(--dt-color-content-default);
                display: flex;
                align-items: baseline;
                gap: var(--dt-spacing-a);
                z-index: 1;
            }

            .banner__offer-currency {
                font-size: var(--dt-font-heading-s-size--narrow);
            }

            .banner__offer-amount {
                font-size: 72px;
                line-height: 1;
            }

            .banner__offer-label {
                font-size: var(--dt-font-heading-s-size--narrow);
            }
        </style>

        <a href="#" class="banner" onclick="return false;">
            <div class="banner__content">
                <h3 class="banner__title">I am a test offer.</h3>
                <p class="banner__description">Use code <strong>TEST</strong> I am a test offer.</p>
                <div class="banner__cta">
                    <div class="c-button c-button--primary-alternative-dark c-button--small-productive">
                        Order now
                    </div>
                </div>
            </div>
            <div class="banner__offer">
                <span class="banner__offer-currency">&pound;</span>
                <span class="banner__offer-amount">12</span>
                <span class="banner__offer-label">off</span>
            </div>
        </a>
    `,
};

export const ResponsiveSizes: Story = {
    render: () => `
        <style>
            .responsive-demo {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-d);
                font-family: var(--dt-font-family-primary);
                align-items: flex-start;
            }

            .responsive-demo__label {
                font-size: var(--dt-font-caption-size);
                line-height: calc(var(--dt-font-caption-line-height) * 1px);
                color: var(--dt-color-content-subdued);
            }
        </style>

        <div class="responsive-demo">
            <span class="responsive-demo__label">Resize the viewport to see sizes change above 768px</span>

            <div class="c-button c-button--primary c-button--xsmall c-button--responsive">
                XSmall → Small Productive
            </div>

            <div class="c-button c-button--primary c-button--xsmall c-button--responsive c-button--expressive">
                XSmall → Small Expressive
            </div>

            <div class="c-button c-button--primary c-button--small-productive c-button--responsive">
                Small Productive → Medium
            </div>

            <div class="c-button c-button--primary c-button--medium c-button--responsive">
                Medium → Large
            </div>

            <div class="c-button c-button--primary c-button--large">
                Large (no change)
            </div>
        </div>
    `,
};
