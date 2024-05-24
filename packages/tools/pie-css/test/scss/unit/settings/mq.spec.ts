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
          @media (max-width:600px) {
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
    it('should render the xs media query breakpoint shortcut', () => {
        // Arrange
        const scssToTest = `
          @use 'settings' as *;

          .foo {
            @include media('>=xs') {
                color: red;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (min-width: 320px) {
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
    it('should render the sm media query breakpoint', () => {
        // Arrange
        const scssToTest = `
          @use 'settings' as *;

          .foo {
            @include media('>=sm') {
                text-align: center;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (min-width: 600px) {
            .foo {
              text-align: center;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
    it('should render the md media query breakpoint', () => {
        // Arrange
        const scssToTest = `
          @use 'settings' as *;

          .foo {
            @include media('>=md') {
                text-decoration: underline;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (min-width: 768px) {
            .foo {
              text-decoration: underline;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
    it('should render the lg media query breakpoint', () => {
        // Arrange
        const scssToTest = `
          @use 'settings' as *;

          .foo {
            @include media('>=lg') {
                text-transform: uppercase;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (min-width: 1024px) {
            .foo {
              text-transform: uppercase;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
    it('should render the xl media query breakpoint', () => {
        // Arrange
        const scssToTest = `
          @use 'settings' as *;

          .foo {
            @include media('>=xl') {
                font-weight: bold;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (min-width: 1280px) {
            .foo {
              font-weight: bold;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
    it('should render the xxl media query breakpoint', () => {
        // Arrange
        const scssToTest = `
          @use 'settings' as *;

          .foo {
            @include media('>=xxl') {
                font-style: italic;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (min-width: 1440px) {
            .foo {
                font-style: italic;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});
