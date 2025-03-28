import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe('PieElement derived class', () => {
    test('should contain the same version found in it\'s package.json file', async ({ page }) => {
        // Arrange
        const mockComponentPage = new BasePage(page, 'webc-core--pie-element-version-property');
        await mockComponentPage.load();

        const packageJsonPath = path.join(__dirname, '../../../../pie-button/package.json');
        const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
        const expectedVersion = packageJson.version;

        // Act
        const pieElement = await page.getByTestId('pie-element');
        const version = await pieElement.getAttribute('v');

        // Assert
        expect(version).toBe(expectedVersion);
    });
});
