import {
    describe,
    it,
    expect,
} from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import cssValidator from 'w3c-css-validator';
import { compileCss } from '../../../utilities/compileCss';

describe('scss compiled output', () => {
    it('should be valid CSS', async () => {
        // Arrange
        const scssToTest = await fs.readFile(path.join(__dirname, 'validityTest.scss'), 'utf8');
        const css = compileCss(scssToTest);

        // clip-path is valid in browsers, but the W3C validator used here does not recognise it
        const acceptedErrors = ['Property “clip-path” doesn\'t exist'];

        // Act
        const result = await cssValidator.validateText(css);

        const validationErrors = result.errors.filter((error) => !acceptedErrors.includes(error.message));

        // Assert
        expect(validationErrors).toHaveLength(0);
    });
});

