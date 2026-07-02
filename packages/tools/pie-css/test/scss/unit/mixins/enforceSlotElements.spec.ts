import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('mixins.enforce-slot-elements', () => {
    describe('default slot (no slot names provided)', () => {
        it('should hide slotted elements that are not in the allowlist', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('p', 'span')) {
                  font-size: 1rem;
                }
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .foo ::slotted(:not(p, span)) {
                display: none;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should apply the content block to each allowed element', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('p', 'span')) {
                  font-size: 1rem;
                }
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .foo ::slotted(p), .foo ::slotted(span) {
                font-size: 1rem;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should support a single allowed element', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('span',)) {
                  font-weight: bold;
                }
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .foo ::slotted(:not(span)) {
                display: none;
              }
              .foo ::slotted(span) {
                font-weight: bold;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toBe(expectedCss);
        });
    });

    describe('single named slot', () => {
        it('should hide non-allowed elements scoped to the named slot', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('h1', 'h2'), 'header-slot') {
                  color: blue;
                }
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .foo ::slotted([slot=header-slot]:not(h1, h2)) {
                display: none;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should apply the content block only to allowed elements in that slot', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('h1', 'h2'), 'header-slot') {
                  color: blue;
                }
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .foo ::slotted(h1[slot=header-slot]), .foo ::slotted(h2[slot=header-slot]) {
                color: blue;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should not affect the default (unnamed) slot', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('h1', 'h2'), 'header-slot') {
                  color: blue;
                }
              }
            `;

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).not.toContain('::slotted(:not(h1,h2))');
        });
    });

    describe('multiple named slots', () => {
        it('should build combined hide selectors for every slot', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('img', 'picture'), 'hero-image', 'footer-image') {
                  max-width: 100%;
                }
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .foo ::slotted([slot=hero-image]:not(img, picture)),
              .foo ::slotted([slot=footer-image]:not(img, picture)) {
                display: none;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });

        it('should build combined allowlist selectors for every slot/element pairing', () => {
            // Arrange
            const scssToTest = `
              @use 'mixins';

              .foo {
                @include mixins.enforce-slot-elements(('img', 'picture'), 'hero-image', 'footer-image') {
                  max-width: 100%;
                }
              }
            `;

            const expectedCss = stripCSSWhitespace(`
              .foo ::slotted(img[slot=hero-image]),
              .foo ::slotted(picture[slot=hero-image]),
              .foo ::slotted(img[slot=footer-image]),
              .foo ::slotted(picture[slot=footer-image]) {
                max-width: 100%;
              }
            `);

            // Act
            const css = stripCSSWhitespace(compileCss(scssToTest));

            // Assert
            expect(css).toContain(expectedCss);
        });
    });
});
