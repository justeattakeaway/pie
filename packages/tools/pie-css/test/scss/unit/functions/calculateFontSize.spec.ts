import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('functions.calculate-font-size', () => {
    it('should render the expected CSS content', async () => {
        // Arrange
        const scssToTest = `
          @use 'functions';

          :root {
            --font-size: 12;
            --foo-font-size: #{functions.calculate-font-size(--font-size)};
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

