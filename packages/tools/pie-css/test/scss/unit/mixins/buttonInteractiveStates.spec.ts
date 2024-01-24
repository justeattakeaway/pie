import {
    describe,
    it,
    expect,
} from 'vitest';

import { compileCss, stripCSSWhitespace } from '../../../../utilities/compileCss';

describe('mixins.button-interactive-states', () => {
    it('should render the expected CSS content for default mode', () => {
        // Arrange
        const scssToTest = `
        @use 'mixins';

        .button {
          @include mixins.button-interactive-states('primary');
        }
    `;

        const expectedCss = stripCSSWhitespace(`
        .button:hover:not(:disabled) {
          --hover-modifier: calc(-1 * var(--dt-color-hover-01));
          --btn-bg-color: hsl(var(primary-h), var(primary-s), calc(var(primary-l) + var(--hover-modifier)));
        }

        .button:active:not(:disabled),
        .button[isLoading]:not(:disabled) {
          --active-modifier: calc(-1 * var(--dt-color-active-01));
          --btn-bg-color: hsl(var(primary-h), var(primary-s), calc(var(primary-l) + var(--active-modifier)));
        }
    `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render the expected CSS content for alt mode', () => {
        // Arrange
        const scssToTest = `
      @use 'mixins';

      .button {
        @include mixins.button-interactive-states('primary', 'alt');
      }
    `;

        const expectedCss = stripCSSWhitespace(`
        .button:hover:not(:disabled) {
          --hover-modifier: calc(-1 * var(--dt-color-hover-02));
          --btn-bg-color: hsl(var(primary-h), var(primary-s), calc(var(primary-l) + var(--hover-modifier)));
        }

        .button:active:not(:disabled),
        .button[isLoading]:not(:disabled) {
          --active-modifier: calc(-1 * var(--dt-color-active-02));
          --btn-bg-color: hsl(var(primary-h), var(primary-s), calc(var(primary-l) + var(--active-modifier)));
        }
    `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });

    it('should render the expected CSS content for transparent mode', () => {
        // Arrange
        const scssToTest = `
        @use 'mixins';

        .button {
          @include mixins.button-interactive-states('primary', 'transparent');
        }
    `;

        const expectedCss = stripCSSWhitespace(`
        .button:hover:not(:disabled) {
          --hover-modifier: calc(-1 * var(--dt-color-hover-01));
          --hover-modifier: var(--dt-color-hover-01);
          --btn-bg-color: hsl(var(primary-h), var(primary-s), var(primary-l), var(--hover-modifier));
        }

        .button:active:not(:disabled),
        .button[isLoading]:not(:disabled) {
          --active-modifier: calc(-1 * var(--dt-color-active-01));
          --active-modifier: var(--dt-color-active-01);
          --btn-bg-color: hsl(var(primary-h), var(primary-s), var(primary-l), var(--active-modifier));
        }
    `);

        // Act
        const css = stripCSSWhitespace(compileCss(scssToTest));

        // Assert
        expect(css).toBe(expectedCss);
    });
});
