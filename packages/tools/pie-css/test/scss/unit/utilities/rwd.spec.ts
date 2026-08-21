import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('utilities.rwd', () => {
    it('should hide .u-showAboveMid below the md breakpoint (768px)', () => {
        // Arrange
        const scssToTest = `
          @use 'settings/mq' as *;

          .u-showAboveMid {
            @include media('<md') {
              display: none !important;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (max-width: 767px) {
            .u-showAboveMid {
              display: none !important;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should hide .u-showBelowMid at and above the md breakpoint (768px)', () => {
        // Arrange
        const scssToTest = `
          @use 'settings/mq' as *;

          .u-showBelowMid {
            @include media('>=md') {
              display: none !important;
            }
          }
        `;

        const expectedCss = stripCSSWhitespace(`
          @media (min-width: 768px) {
            .u-showBelowMid {
              display: none !important;
            }
          }
        `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});
