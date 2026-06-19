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
          border: 0;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          white-space: nowrap;
          clip: rect(0, 0, 0, 0);
          clip-path: inset(50%);
        }
        .foo * {
          overflow: hidden;
        }
      `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

