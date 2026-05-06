import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../../utilities/compileCss';

describe('mixins.radio', () => {
    describe('radio-input-base', () => {
        it('should output base input styles with CSS custom properties', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-input-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio {
                --radio-dot-bg-color: var(--dt-color-content-interactive-primary);
                --radio-bg-color: transparent;
                --radio-bg-color--checked: var(--dt-color-interactive-brand);
                --radio-border-color: var(--dt-color-border-form);
                --radio-size: 24px;
                --radio-dot-size: 8px;
                --radio-cursor: pointer;
                --radio-motion-easing: var(--dt-motion-easing-persistent-functional);
                --radio-border-width: 1px;
                appearance: none;
                display: inline-block;
                position: relative;
                inline-size: var(--radio-size);
                block-size: var(--radio-size);
                border: var(--radio-border-width) solid var(--radio-border-color);
                border-radius: 50%;
                margin: 0;
                cursor: var(--radio-cursor);
                background-color: var(--radio-bg-color);
                flex-shrink: 0;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should include :before pseudo-element for filled circle', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-input-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:before {
                --circle-size: calc(var(--radio-border-width) * -1);
                content: "";
                display: block;
                inset: var(--circle-size);
                border-radius: inherit;
                background-color: var(--radio-bg-color--checked);
                position: absolute;
                transform: scale(0);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should include :after pseudo-element for center dot', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-input-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: var(--radio-dot-size);
                height: var(--radio-dot-size);
                background-color: var(--radio-dot-bg-color);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should handle :checked state correctly', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-input-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:checked:after {
                transform: translate(-50%, -50%) scale(1);
              }
              .my-radio:checked:before {
                transform: scale(1);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should handle :disabled state correctly', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-input-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:disabled {
                --radio-bg-color: var(--dt-color-disabled-01);
                --radio-border-color: var(--dt-color-border-default);
                --radio-cursor: not-allowed;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should handle :checked:disabled combination', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-input-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:checked:disabled {
                --radio-dot-bg-color: var(--dt-color-content-disabled);
                --radio-bg-color--checked: var(--dt-color-disabled-01);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should apply focus mixin on :focus-visible', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-input-base();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:focus-visible {
                box-shadow: 0 0 0 2px var(--dt-color-focus-inner), 0 0 0 4px var(--dt-color-focus-outer);
                outline: none;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });
    });

    describe('radio-interactive-state', () => {
        it('should apply hover state for unchecked radio with HSL fallback', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-interactive-state('dt-color-interactive-brand');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:hover:not(:checked, :disabled) {
                --radio-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--dt-color-hover-01));
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should apply hover state with color-mix for modern browsers', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-interactive-state('dt-color-interactive-brand');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('@supports(background-color:color-mix(insrgb,black,white))');
            expect(css).toContain('--radio-bg-color:color-mix(insrgb,var(--dt-color-hover-01-bg)var(--dt-color-hover-01),transparent)');
        });

        it('should apply active state for unchecked radio', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-interactive-state('dt-color-interactive-brand');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:active:not(:checked, :disabled) {
                --radio-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--dt-color-active-01));
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should apply hover state for checked radio', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-interactive-state('dt-color-interactive-brand');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:hover:checked:not(:disabled):before {
                --radio-bg-color--checked: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) - var(--dt-color-hover-01)));
                --radio-border-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) - var(--dt-color-hover-01)));
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should apply active state for checked radio', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-interactive-state('dt-color-interactive-brand');
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio:active:checked:not(:disabled):before {
                --radio-bg-color--checked: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) - var(--dt-color-active-01)));
                --radio-border-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) - var(--dt-color-active-01)));
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should use the provided color token parameter', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-interactive-state('dt-color-support-error');
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('--dt-color-support-error-h');
            expect(css).toContain('--dt-color-support-error-s');
            expect(css).toContain('--dt-color-support-error-l');
        });
    });

    describe('radio-error', () => {
        it('should override color custom properties with error tokens', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio--error {
                @include mixins.radio-error();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio--error {
                --radio-bg-color--checked: var(--dt-color-support-error);
                --radio-border-color: var(--dt-color-support-error);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toBe(expectedCss);
        });
    });

    describe('radio-animations', () => {
        it('should include background-color transition', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-animations();
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .my-radio {
                transition: background-color var(--dt-motion-timing-100) var(--radio-motion-easing);
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(stripCSSWhitespace(expectedCss));
        });

        it('should include :before transition with prefers-reduced-motion', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-animations();
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('@media(prefers-reduced-motion:no-preference)');
            expect(css).toContain('.my-radio:not(:disabled):before');
            expect(css).toContain('transition:allvar(--dt-motion-timing-100)var(--radio-motion-easing)');
        });

        it('should include :after transition with prefers-reduced-motion', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-animations();
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('.my-radio:not(:disabled):after');
        });

        it('should use longer duration for :checked:after', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .my-radio {
                @include mixins.radio-animations();
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain('.my-radio:not(:disabled):checked:after');
            expect(css).toContain('var(--dt-motion-timing-150)');
        });
    });
});
