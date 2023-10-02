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
            &[isdraggable]:not([interactiontype='none']) {
              @extend %has-grab-cursor;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          .foo[isdraggable]:not([interactiontype=none]) {
            cursor: grab;
          }
          .foo[isdraggable]:active:not([interactiontype=none]) {
            cursor: grabbing;
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

