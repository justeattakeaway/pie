import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('mixins.focus', () => {
    it('should render the expected CSS content', () => {
        // Arrange
        const scssToTest = `
          @use 'mixins';

          .foo {
            &:focus-visible {
              @include mixins.focus;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          .foo:focus-visible {
            box-shadow: 0 0 0 2px var(--dt-color-focus-inner), 0 0 0 4px var(--dt-color-focus-outer);
            outline: none;
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});

