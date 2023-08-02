import * as fs from 'fs';
import * as util from 'util';
import * as path from 'path';
import cssValidator from 'w3c-css-validator';
import {
    describe,
    it,
    expect,
} from 'vitest';

const readFile = util.promisify(fs.readFile);

async function getCssContent (filePath: string): Promise<string> {
    try {
        const data = await readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error(`Error reading file from path: ${filePath}`, err);
        return '';
    }
}

// Requires the CSS to have been built before running these tests
const builtCssFilePath = path.join(__dirname, '../../dist/index.css');

describe('index.css', () => {
    it('should not throw any unexpected W3C CSS validation errors', async () => {
        // Arrange
        const css = await getCssContent(builtCssFilePath);

        // text-rendering is not supported by W3C CSS validator however it is allowed to be set on HTML elements in various browsers
        // therefore we will allow for this error to be ignored
        const acceptedErrors = ['Property “text-rendering” doesn\'t exist'];

        // Act
        const result = await cssValidator.validateText(css, {});
        const validationErrors = result.errors.filter((error) => !acceptedErrors.includes(error.message));

        // Assert
        expect(validationErrors).toHaveLength(0);
    });

    it('should render the expected CSS content', async () => {
        // Arrange
        const css = await getCssContent(builtCssFilePath);

        // Act & Assert
        expect(css).toMatchSnapshot();
    });
});
