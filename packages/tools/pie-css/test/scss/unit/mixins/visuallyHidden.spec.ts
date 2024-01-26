import {
  describe,
  it,
  expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('mixins.visually-hidden', () => {
    it('should render the expected CSS content', () => {
        // Arrange
        const scssToTest = `
        @use 'mixins';

        .foo {
          @include mixins.visually-hidden;
        }
      `;

        const expectedCss = stripCSSWhitespace(`
        .foo {
          position: absolute;
          display: block;
          height: 1px;
          width: 1px;
          overflow: hidden;
          padding: 1px;
          white-space: nowrap;
        }
      `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

