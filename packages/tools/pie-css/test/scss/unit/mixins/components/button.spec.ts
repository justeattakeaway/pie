import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../../utilities/compileCss';

describe('mixins.button', () => {
    describe('button-base', () => {
        it('should output base button styles with CSS custom properties', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button {
                --btn-border-radius: var(--dt-radius-rounded-e);
                --btn-font-family: var(--dt-font-interactive-l-family);
                --btn-font-weight: var(--dt-font-interactive-l-weight);
                --int-states-mixin-bg-color: var(--dt-color-interactive-brand);
                --btn-text-color: var(--dt-color-content-interactive-light-solid);
                --btn-padding-vertical-xsmall: 6px;
                --btn-padding-vertical-small-expressive: 8px;
                --btn-padding-vertical-small-productive: 10px;
                --btn-padding-vertical-medium: 12px;
                --btn-padding-vertical-large: 16px;
                --btn-padding-horizontal-small: var(--dt-spacing-b);
                --btn-padding-horizontal-medium: var(--dt-spacing-d);
                --btn-padding-horizontal-large: var(--dt-spacing-e);
                position: relative;
                display: inline-flex;
                gap: var(--dt-spacing-b);
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: var(--btn-border-radius);
                outline: none;
                background-color: var(--int-states-mixin-bg-color);
                cursor: pointer;
                user-select: none;
                text-decoration: none;
                font-family: var(--btn-font-family);
                font-size: var(--btn-font-size);
                font-weight: var(--btn-font-weight);
                color: var(--btn-text-color);
                line-height: var(--btn-line-height);
                inline-size: var(--btn-inline-size);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should apply focus mixin on :focus-visible', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button:focus-visible {
                box-shadow: 0 0 0 2px var(--dt-color-focus-inner), 0 0 0 4px var(--dt-color-focus-outer);
                outline: none;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should size icons via .c-pieIcon class', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button .c-pieIcon {
                height: var(--btn-icon-size);
                width: var(--btn-icon-size);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });
    });

    describe('button-size', () => {
        it('should output xsmall size styles', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--xsmall {
                @include mixins.button-size('xsmall');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--xsmall {
                --btn-font-size: calc(var(--dt-font-interactive-xs-size) * 1px);
                --btn-line-height: calc(var(--dt-font-interactive-xs-line-height) * 1px);
                --btn-icon-size: 16px;
                --icon-size-override: 16px;
                padding: var(--btn-padding-vertical-xsmall) var(--btn-padding-horizontal-small);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should output small-expressive size styles', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--small-expressive {
                @include mixins.button-size('small-expressive');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--small-expressive {
                --btn-font-size: calc(var(--dt-font-interactive-l-size) * 1px);
                --btn-line-height: calc(var(--dt-font-interactive-l-line-height) * 1px);
                --btn-icon-size: 20px;
                --icon-size-override: 20px;
                padding: var(--btn-padding-vertical-small-expressive) var(--btn-padding-horizontal-medium);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should output small-productive size styles', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--small-productive {
                @include mixins.button-size('small-productive');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--small-productive {
                --btn-font-size: calc(var(--dt-font-interactive-s-size) * 1px);
                --btn-line-height: calc(var(--dt-font-interactive-s-line-height) * 1px);
                --btn-icon-size: 20px;
                --icon-size-override: 20px;
                padding: var(--btn-padding-vertical-small-productive) var(--btn-padding-horizontal-medium);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should output medium size styles', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--medium {
                @include mixins.button-size('medium');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--medium {
                --btn-font-size: calc(var(--dt-font-interactive-l-size) * 1px);
                --btn-line-height: calc(var(--dt-font-interactive-l-line-height) * 1px);
                --btn-icon-size: 24px;
                --icon-size-override: 24px;
                padding: var(--btn-padding-vertical-medium) var(--btn-padding-horizontal-large);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should output large size styles', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--large {
                @include mixins.button-size('large');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--large {
                --btn-font-size: calc(var(--dt-font-interactive-l-size) * 1px);
                --btn-line-height: calc(var(--dt-font-interactive-l-line-height) * 1px);
                --btn-icon-size: 24px;
                --icon-size-override: 24px;
                padding: var(--btn-padding-vertical-large) var(--btn-padding-horizontal-large);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should include responsive behaviour for xsmall size', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .c-button--xsmall {
                @include mixins.button-size('xsmall');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('@media(min-width:769px)');
            expect(css).toContain('.c-button--xsmall.c-button--responsive');
            // Should bump to small-productive by default
            expect(css).toContain('--btn-font-size:calc(var(--dt-font-interactive-s-size)*1px)');
        });

        it('should include expressive responsive behaviour for xsmall size', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .c-button--xsmall {
                @include mixins.button-size('xsmall');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('.c-button--xsmall.c-button--responsive.c-button--expressive');
            // Should bump to small-expressive with expressive class
            expect(css).toContain('--btn-font-size:calc(var(--dt-font-interactive-l-size)*1px)');
        });

        it('should offset padding for outline variants', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .c-button--medium {
                @include mixins.button-size('medium');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .c-button--medium.c-button--outline, .c-button--medium.c-button--outline-inverse {
                padding: calc(var(--btn-padding-vertical-medium) - 1px) var(--btn-padding-horizontal-large);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should include responsive padding offset for outline variants', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .c-button--medium {
                @include mixins.button-size('medium');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace('padding: calc(var(--btn-padding-vertical-large) - 1px) var(--btn-padding-horizontal-large)'));
        });

        it('should not include responsive rules for large size', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .c-button--large {
                @include mixins.button-size('large');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).not.toContain('@media(min-width:769px)');
        });

        it('should still offset padding for outline at large size', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .c-button--large {
                @include mixins.button-size('large');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .c-button--large.c-button--outline, .c-button--large.c-button--outline-inverse {
                padding: calc(var(--btn-padding-vertical-large) - 1px) var(--btn-padding-horizontal-large);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });
    });

    describe('button-variant', () => {
        it('should output primary variant with interactive states', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--primary {
                @include mixins.button-variant('primary');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--dt-color-interactive-brand');
            expect(css).toContain('.my-button--primary:hover:not(:disabled,.is-disabled,.is-dismissible)');
        });

        it('should output primary variant with special handling for xsmall and small-productive sizes', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .c-button--primary {
                @include mixins.button-variant('primary');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('.c-button--primary.c-button--xsmall,.c-button--primary.c-button--small-productive');
            expect(css).toContain('--int-states-mixin-bg-color:var(--dt-color-interactive-primary)');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-primary-solid)');
        });

        it('should output primary-alternative variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('primary-alternative');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:var(--dt-color-interactive-primary)');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-primary)');
        });

        it('should output primary-alternative-dark variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('primary-alternative-dark');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:var(--dt-color-interactive-dark)');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-light)');
        });

        it('should output secondary variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('secondary');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:var(--dt-color-interactive-secondary)');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-secondary)');
        });

        it('should output outline variant with border', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('outline');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:transparent');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-secondary-solid)');
            expect(css).toContain('border:1pxsolidvar(--dt-color-border-strong)');
        });

        it('should output ghost variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('ghost');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:transparent');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-secondary-solid)');
        });

        it('should output ghost-dark variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('ghost-dark');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-dark-solid)');
        });

        it('should output inverse variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('inverse');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:var(--dt-color-interactive-inverse)');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-secondary)');
        });

        it('should output ghost-inverse variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('ghost-inverse');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:transparent');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-primary-solid)');
        });

        it('should output outline-inverse variant with border', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('outline-inverse');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:transparent');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-primary-solid)');
            expect(css).toContain('border:1pxsolidvar(--dt-color-border-strong)');
        });

        it('should output ghost-inverse-light variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('ghost-inverse-light');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:transparent');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-light-solid)');
        });

        it('should output destructive variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('destructive');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:var(--dt-color-support-error)');
        });

        it('should output destructive-ghost variant', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('destructive-ghost');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--int-states-mixin-bg-color:transparent');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-interactive-error-solid)');
        });

        it('should include color-mix @supports block for modern browsers', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button {
                @include mixins.button-variant('primary');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('@supports(background-color:color-mix(insrgb,black,white))');
            expect(css).toContain('color-mix(insrgb,var(--dt-color-hover-01-bg)var(--dt-color-hover-01),var(--dt-color-interactive-brand))');
        });
    });

    describe('button-disabled', () => {
        it('should output disabled state styles', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--disabled {
                @include mixins.button-disabled();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--disabled {
                --btn-text-color: var(--dt-color-content-disabled-solid);
                cursor: not-allowed;
                pointer-events: none;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should set disabled background for non-ghost variants', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--disabled {
                @include mixins.button-disabled();
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(`.my-button--disabled:not(.c-button--ghost,
.c-button--ghost-dark,
.c-button--ghost-inverse,
.c-button--ghost-inverse-light,
.c-button--destructive-ghost)`));
            expect(css).toContain('--int-states-mixin-bg-color:var(--dt-color-disabled-01)');
            expect(css).toContain('--btn-text-color:var(--dt-color-content-disabled)');
        });

        it('should set disabled border colour for outline variants', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--disabled {
                @include mixins.button-disabled();
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('.my-button--disabled.c-button--outline,.my-button--disabled.c-button--outline-inverse');
            expect(css).toContain('border-color:var(--dt-color-disabled-01)');
        });
    });

    describe('button-full-width', () => {
        it('should set inline-size to 100%', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--fullWidth {
                @include mixins.button-full-width();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--fullWidth {
                --btn-inline-size: 100%;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toBe(expectedCss);
        });
    });

    describe('button-truncate', () => {
        it('should apply text overflow handling to > span', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-button--truncate {
                @include mixins.button-truncate();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-button--truncate > span {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });
    });
});
