import fs from 'fs/promises';
import path from 'path';
import cssValidator from 'w3c-css-validator';
import { compileCss } from '../../../utilities/compileCss';

describe('scss compiled output', () => {
    it('should be valid CSS', async () => {
        // Arrange
        const scssToTest = await fs.readFile(path.join(__dirname, 'validityTest.scss'), 'utf8');
        const css = compileCss(scssToTest);

        // Act
        const result = await cssValidator.validateText(css);

        // Assert
        expect(result.valid).toBe(true);
    });
});

