import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('settings :: mq', () => {
    it('should render the expected breakpoint variable', () => {
        // Arrange
        const scssToTest = `
          @use "sass:map";
          @use 'settings' as *;

          .foo {
            @media (max-width: map.get($breakpoints, "sm")) {
                color: red;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (max-width: 600px) {
            .foo {
              color: red;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render the expected CSS media query', () => {
        // Arrange
        const scssToTest = `
          @use 'settings' as *;

          .foo {
            @include media('<=sm') {
                color: red;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (max-width: 600px) {
            .foo {
              color: red;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it.each([
        ['xs', '320px'],
        ['sm', '600px'],
        ['md', '768px'],
        ['lg', '1024px'],
        ['xl', '1280px'],
        ['xxl', '1440px']
    ])('should render the "%p" media query breakpoint shortcut when referenced', (bpKey, bpValue) => {
        // Arrange
        const scssToTest = `
            @use 'settings' as *;

            .foo {
                @include media('>=${bpKey}') {
                    color: red;
                }
            }
        `;

        const expectedCss = stripCSSWhitespace(`
            @media (min-width: ${bpValue}) {
                .foo {
                    color: red;
                }
            }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});
