import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('mixins.font-theme', () => {
    it('should render static properties (family, weight) with base tokens', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --dt-font-heading-l-family: "Arial", sans-serif;
            --dt-font-heading-l-weight: 700;
          }

          .foo {
            @include mixins.font-theme('font-heading-l');
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --dt-font-heading-l-family: "Arial", sans-serif;
            --dt-font-heading-l-weight: 700;
          }

          .foo {
            font-family: var(--dt-font-heading-l-family);
            font-weight: var(--dt-font-heading-l-weight);
            font-size: calc(var(--dt-font-heading-l-size--narrow) * 1px);
            line-height: calc(var(--dt-font-heading-l-line-height--narrow) * 1px);
          }

          @media (min-width: 768px) {
            .foo {
              font-size: calc(var(--dt-font-heading-l-size--wide) * 1px);
              line-height: calc(var(--dt-font-heading-l-line-height--wide) * 1px);
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render responsive properties with base tokens when no narrow/wide tokens exist', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --dt-font-body-s-size: 16;
            --dt-font-body-s-line-height: 24;
          }

          .foo {
            @include mixins.font-theme('font-body-s');
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --dt-font-body-s-size: 16;
            --dt-font-body-s-line-height: 24;
          }

          .foo {
            font-family: var(--dt-font-body-s-family);
            font-weight: var(--dt-font-body-s-weight);
            margin-block-end: calc(var(--dt-font-body-s-paragraph) * 1px);
            font-size: calc(var(--dt-font-body-s-size) * 1px);
            line-height: calc(var(--dt-font-body-s-line-height) * 1px);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render responsive properties with narrow tokens on mobile and wide tokens in media query', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --dt-font-heading-xl-size--narrow: 32;
            --dt-font-heading-xl-line-height--narrow: 40;
            --dt-font-heading-xl-size--wide: 48;
            --dt-font-heading-xl-line-height--wide: 56;
            --dt-breakpoint-md: 768px;
          }

          .foo {
            @include mixins.font-theme('font-heading-xl');
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --dt-font-heading-xl-size--narrow: 32;
            --dt-font-heading-xl-line-height--narrow: 40;
            --dt-font-heading-xl-size--wide: 48;
            --dt-font-heading-xl-line-height--wide: 56;
            --dt-breakpoint-md: 768px;
          }

          .foo {
            font-family: var(--dt-font-heading-xl-family);
            font-weight: var(--dt-font-heading-xl-weight);
            font-size: calc(var(--dt-font-heading-xl-size--narrow) * 1px);
            line-height: calc(var(--dt-font-heading-xl-line-height--narrow) * 1px);
          }

          @media (min-width: 768px) {
            .foo {
              font-size: calc(var(--dt-font-heading-xl-size--wide) * 1px);
              line-height: calc(var(--dt-font-heading-xl-line-height--wide) * 1px);
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render all properties (static and responsive) together', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --dt-font-interactive-l-family: "Roboto", sans-serif;
            --dt-font-interactive-l-weight: 500;
            --dt-font-interactive-l-size--narrow: 14;
            --dt-font-interactive-l-line-height--narrow: 20;
            --dt-font-interactive-l-size--wide: 16;
            --dt-font-interactive-l-line-height--wide: 24;
            --dt-breakpoint-md: 768px;
          }

          .foo {
            @include mixins.font-theme('font-interactive-l');
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --dt-font-interactive-l-family: "Roboto", sans-serif;
            --dt-font-interactive-l-weight: 500;
            --dt-font-interactive-l-size--narrow: 14;
            --dt-font-interactive-l-line-height--narrow: 20;
            --dt-font-interactive-l-size--wide: 16;
            --dt-font-interactive-l-line-height--wide: 24;
            --dt-breakpoint-md: 768px;
          }

          .foo {
            font-family: var(--dt-font-interactive-l-family);
            font-weight: var(--dt-font-interactive-l-weight);
            font-size: calc(var(--dt-font-interactive-l-size) * 1px);
            line-height: calc(var(--dt-font-interactive-l-line-height) * 1px);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render optional properties like text-decoration and font-style when available', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --dt-font-heading-m-family: "Georgia", serif;
            --dt-font-heading-m-weight: 600;
            --dt-font-heading-m-text-decoration: underline;
            --dt-font-heading-m-font-style: italic;
            --dt-font-heading-m-size: 24;
            --dt-font-heading-m-line-height: 32;
          }

          .foo {
            @include mixins.font-theme('font-heading-m');
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --dt-font-heading-m-family: "Georgia", serif;
            --dt-font-heading-m-weight: 600;
            --dt-font-heading-m-text-decoration: underline;
            --dt-font-heading-m-font-style: italic;
            --dt-font-heading-m-size: 24;
            --dt-font-heading-m-line-height: 32;
          }

          .foo {
            font-family: var(--dt-font-heading-m-family);
            font-weight: var(--dt-font-heading-m-weight);
            font-size: calc(var(--dt-font-heading-m-size--narrow) * 1px);
            line-height: calc(var(--dt-font-heading-m-line-height--narrow) * 1px);
          }

          @media (min-width: 768px) {
            .foo {
              font-size: calc(var(--dt-font-heading-m-size--wide) * 1px);
              line-height: calc(var(--dt-font-heading-m-line-height--wide) * 1px);
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render paragraph spacing with calc when available', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --dt-font-body-s-family: "Arial", sans-serif;
            --dt-font-body-s-paragraph: 16;
            --dt-font-body-s-size: 14;
            --dt-font-body-s-line-height: 20;
          }

          .foo {
            @include mixins.font-theme('font-body-s');
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --dt-font-body-s-family: "Arial", sans-serif;
            --dt-font-body-s-paragraph: 16;
            --dt-font-body-s-size: 14;
            --dt-font-body-s-line-height: 20;
          }

          .foo {
            font-family: var(--dt-font-body-s-family);
            font-weight: var(--dt-font-body-s-weight);
            margin-block-end: calc(var(--dt-font-body-s-paragraph) * 1px);
            font-size: calc(var(--dt-font-body-s-size) * 1px);
            line-height: calc(var(--dt-font-body-s-line-height) * 1px);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should only render media query when narrow/wide variants exist', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --dt-font-body-l-family: "Helvetica", sans-serif;
            --dt-font-body-l-weight: 400;
            --dt-font-body-l-size: 18;
            --dt-font-body-l-line-height: 26;
          }

          .foo {
            @include mixins.font-theme('font-body-l');
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --dt-font-body-l-family: "Helvetica", sans-serif;
            --dt-font-body-l-weight: 400;
            --dt-font-body-l-size: 18;
            --dt-font-body-l-line-height: 26;
          }

          .foo {
            font-family: var(--dt-font-body-l-family);
            font-weight: var(--dt-font-body-l-weight);
            margin-block-end: calc(var(--dt-font-body-l-paragraph) * 1px);
            font-size: calc(var(--dt-font-body-l-size) * 1px);
            line-height: calc(var(--dt-font-body-l-line-height) * 1px);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});
