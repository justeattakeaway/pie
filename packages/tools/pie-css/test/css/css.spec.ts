import fs from 'fs/promises';
import path from 'path';
import cssValidator from 'w3c-css-validator';
import {
    describe,
    it,
    expect,
} from 'vitest';

// Requires the CSS to have been built before running these tests
const builtCssFilePath = path.join(__dirname, '../../dist/index.css');
const builtCssTypographyFilePath = path.join(__dirname, '../../dist/helpers/typography.css');
const builtCssRadioFilePath = path.join(__dirname, '../../dist/components/radio.css');

describe('index.css', () => {
    it('should not throw any unexpected W3C CSS validation errors', async () => {
        // Arrange
        const css = await fs.readFile(builtCssFilePath, 'utf8');

        // text-rendering is not supported by W3C CSS validator however it is allowed to be set on HTML elements in various browsers
        // therefore we will allow for this error to be ignored
        const acceptedErrors = ['Property “text-rendering” doesn\'t exist'];

        // Act
        const result = await cssValidator.validateText(css);
        const validationErrors = result.errors.filter((error) => !acceptedErrors.includes(error.message));

        // Assert
        expect(validationErrors).toHaveLength(0);
    });

    it('should render the expected CSS content', async () => {
        // Arrange
        const css = await fs.readFile(builtCssFilePath, 'utf8');

        // Act & Assert
        expect(css).toMatchSnapshot();
    });
});

describe('helpers/typography.css', () => {
    it('should not throw any unexpected W3C CSS validation errors', async () => {
        // Arrange
        const css = await fs.readFile(builtCssTypographyFilePath, 'utf8');

        // text-rendering is not supported by W3C CSS validator however it is allowed to be set on HTML elements in various browsers
        // therefore we will allow for this error to be ignored
        const acceptedErrors = ['Property "text-rendering" doesn\'t exist'];

        // Act
        const result = await cssValidator.validateText(css);
        const validationErrors = result.errors.filter((error) => !acceptedErrors.includes(error.message));

        // Assert
        expect(validationErrors).toHaveLength(0);
    });

    it('should render the expected CSS content', async () => {
        // Arrange
        const css = await fs.readFile(builtCssTypographyFilePath, 'utf8');

        // Act & Assert
        expect(css).toMatchSnapshot();
    });
});

describe('components/radio.css', () => {
    it('should not throw any unexpected W3C CSS validation errors', async () => {
        // Arrange
        const css = await fs.readFile(builtCssRadioFilePath, 'utf8');

        // color-mix() syntax is not supported by W3C CSS validator but is supported in modern browsers
        // These errors occur in @supports blocks for progressive enhancement
        // Filter out errors related to var(--dt-color-hover-01-bg) and var(--dt-color-active-01-bg)
        const acceptedErrorPatterns = ['var(--dt-color-hover-01-bg)', 'var(--dt-color-active-01-bg)'];

        // Act
        const result = await cssValidator.validateText(css);
        const validationErrors = result.errors.filter((error) => !acceptedErrorPatterns.some((pattern) => error.message.includes(pattern)));

        // Assert
        expect(validationErrors).toHaveLength(0);
    });

    it('should render the expected CSS content', async () => {
        // Arrange
        const css = await fs.readFile(builtCssRadioFilePath, 'utf8');

        // Act & Assert
        expect(css).toMatchSnapshot();
    });
});

