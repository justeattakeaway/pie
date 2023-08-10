import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('mixins.font-size', () => {
    it('should render the expected CSS content', async () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          :root {
            --font-size: 12;
          }

          .foo {
            @include mixins.font-size(--font-size);
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          :root {
            --font-size: 12;
          }

          .foo {
            font-size: calc(var(--font-size) * 1px);
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

