import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('functions.to-px', () => {
    it('should render the expected CSS content', () => {
        // Arrange
        const scssToTest = `
          @use 'functions';

          :root {
            --font-size: 12;
            --foo-font-size: #{functions.to-px(--font-size)};
          }

          .foo {
            font-size: var(--foo-font-size);
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --font-size: 12;
            --foo-font-size: calc(var(--font-size) * 1px);
          }

          .foo {
            font-size:var(--foo-font-size);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

describe('functions.font-size', () => {
    it('should render the expected CSS content', () => {
        // Arrange
        const scssToTest = `
          @use 'functions';

          :root {
            --font-size: 12;
            --foo-font-size: #{functions.font-size(--font-size)};
          }

          .foo {
            font-size: var(--foo-font-size);
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --font-size: 12;
            --foo-font-size: calc(var(--font-size) * 1px);
          }

          .foo {
            font-size:var(--foo-font-size);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

describe('functions.line-height', () => {
    it('should render the expected CSS content', () => {
        // Arrange
        const scssToTest = `
          @use 'functions';

          :root {
            --line-height: 12;
            --foo-line-height: #{functions.line-height(--line-height)};
          }

          .foo {
            line-height: var(--foo-line-height);
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --line-height: 12;
            --foo-line-height: calc(var(--line-height) * 1px);
          }

          .foo {
            line-height:var(--foo-line-height);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

