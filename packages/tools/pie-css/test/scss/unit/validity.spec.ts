import {
    describe,
    it,
    expect,
} from 'vitest';

import cssValidator from 'w3c-css-validator';
import { compileCss } from '../../../utilities/compileCss';

describe('scss compiled output', () => {
    // We should integrate every SCSS mixin and function into this test.
    // This way we only make a single request to the W3C validator API
    it('should be valid CSS', async () => {
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

        const css = compileCss(scssToTest);

        // Act
        const result = await cssValidator.validateText(css);

        // Assert
        expect(result.valid).toBe(true);
    });
});

