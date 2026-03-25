import type { Meta, StoryObj } from '@storybook/html';

import '@justeattakeaway/pie-css/dist/components/button.css';
import '@justeattakeaway/pie-css/dist/helpers/typography.css';
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

        // Reorder variants so that inverse/dark background variants are grouped at the bottom
        const sortedVariants = [...variants].sort((a, b) => {
            const aIsBrand = brandBgVariants.has(a) ? 1 : 0;
            const bIsBrand = brandBgVariants.has(b) ? 1 : 0;
            return aIsBrand - bIsBrand;
        });

        const variantRows = sortedVariants.map((variant) => ({
            name: variant.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            class: variant,
            brandBg: brandBgVariants.has(variant),
        }));

        const rows = variantRows.map(({ name, class: cls, brandBg }) => {
            const bgClass = brandBg ? ' c-variantGrid-cell--brandBg' : '';
            const cells = sizes.map((size) => `<div class="c-variantGrid-cell${bgClass}">
                    ${buttonHtml(`c-button c-button--${cls} c-button--${size}`, label, iconPosition)}
                </div>`).join('\n            ');

            const disabledCell = `<div class="c-variantGrid-cell${bgClass}">
                    ${buttonHtml(`c-button c-button--${cls} c-button--medium c-button--disabled`, label, iconPosition)}
                </div>`;

            return `<div class="c-variantGrid-rowHeader u-font-body-strong-s">${name}</div>
            ${cells}
            ${disabledCell}`;
        }).join('\n\n            ');

        return `
        <style>
            .c-variantGrid {
                --grid-border-color: var(--dt-color-border-default);
                --grid-text-heading: var(--dt-color-content-subdued);
                --grid-text-main: var(--dt-color-content-default);

                display: grid;
                grid-template-columns: minmax(180px, 1fr) repeat(6, minmax(140px, 1fr));
                align-items: stretch;
                font-family: var(--dt-font-family-primary);
            }

            .c-variantGrid-headerRow {
                display: contents;
            }

            .c-variantGrid-colHeader {
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: var(--grid-text-heading);
                padding-bottom: var(--dt-spacing-c);
                border-bottom: 1px solid var(--grid-border-color);
                text-align: center;
            }

            .c-variantGrid-colHeader--first {
                grid-column-start: 2;
            }

            .c-variantGrid-rowHeader {
                color: var(--grid-text-main);
                text-align: right;
                padding-right: var(--dt-spacing-e);
                border-right: 1px solid var(--grid-border-color);
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            .c-variantGrid-cell {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: var(--dt-spacing-c);
                min-height: 72px;
            }

            .c-variantGrid-cell--brandBg {
                background-color: var(--dt-color-interactive-brand);
            }
        </style>

        <div class="c-variantGrid">
            <div class="c-variantGrid-headerRow">
                <div class="c-variantGrid-colHeader c-variantGrid-colHeader--first u-font-caption-strong">XSmall</div>
                <div class="c-variantGrid-colHeader u-font-caption-strong">Small Productive</div>
                <div class="c-variantGrid-colHeader u-font-caption-strong">Small Expressive</div>
                <div class="c-variantGrid-colHeader u-font-caption-strong">Medium</div>
                <div class="c-variantGrid-colHeader u-font-caption-strong">Large</div>
                <div class="c-variantGrid-colHeader u-font-caption-strong">Disabled</div>
            </div>

            ${rows}
        </div>
    `;
    },
};

export const FullWidth: Story = {
    render: () => `
        <style>
            .c-fullWidthContainer {
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

        <div class="c-fullWidthContainer">
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
            .c-overflowDemo {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-d);
                font-family: var(--dt-font-family-primary);
                max-width: 200px;
            }

            .c-overflowDemo-label {
                color: var(--dt-color-content-subdued);
            }
        </style>

        <div class="c-overflowDemo">
            <span class="c-overflowDemo-label u-font-caption">Buttons constrained to 200px via max-width on a parent container</span>

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
            .c-banner {
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

            .c-banner-content {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-b);
                z-index: 1;
            }

            .c-banner-title {
                margin: 0;
            }

            .c-banner-description {
                margin: 0;
            }

            .c-banner-cta {
                margin-top: var(--dt-spacing-c);
            }

            .c-banner-offer {
                font-family: var(--dt-font-heading-xl-family);
                font-weight: var(--dt-font-heading-xl-weight);
                color: var(--dt-color-content-default);
                display: flex;
                align-items: baseline;
                gap: var(--dt-spacing-a);
                z-index: 1;
            }

            .c-banner-offerCurrency {
                font-size: var(--dt-font-heading-s-size--narrow);
            }

            .c-banner-offerAmount {
                font-size: 72px;
                line-height: 1;
            }

            .c-banner-offerLabel {
                font-size: var(--dt-font-heading-s-size--narrow);
            }
        </style>

        <a href="#" class="c-banner">
            <div class="c-banner-content">
                <h3 class="c-banner-title u-font-heading-s-italic">I am a test offer.</h3>
                <p class="c-banner-description u-font-body-l">Use code <strong class="u-font-body-strong-l">TEST</strong> I am a test offer.</p>
                <div class="c-banner-cta">
                    <div class="c-button c-button--primary-alternative-dark c-button--small-productive">
                        Order now
                    </div>
                </div>
            </div>
            <div class="c-banner-offer">
                <span class="c-banner-offerCurrency">&pound;</span>
                <span class="c-banner-offerAmount">12</span>
                <span class="c-banner-offerLabel">off</span>
            </div>
        </a>
    `,
};

export const ResponsiveSizes: Story = {
    render: () => `
        <style>
            .c-responsiveDemo {
                display: flex;
                flex-direction: column;
                gap: var(--dt-spacing-d);
                font-family: var(--dt-font-family-primary);
                align-items: flex-start;
            }

            .c-responsiveDemo-label {
                color: var(--dt-color-content-subdued);
            }
        </style>

        <div class="c-responsiveDemo">
            <span class="c-responsiveDemo-label u-font-caption">Resize the viewport to see sizes change above 768px</span>

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
