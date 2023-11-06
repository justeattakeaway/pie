import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('helpers - has-grab-cursor', () => {
    it('should render the expected CSS content', async () => {
        // Arrange
        const scssToTest = `
          @use 'helpers';

          .foo {
            &[isdraggable] {
              @extend %has-grab-cursor;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          .foo[isdraggable] {
            cursor: grab;
          }
          .foo[isdraggable]:active {
            cursor: grabbing;
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

