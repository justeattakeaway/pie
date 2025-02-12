import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { EXPECTED_MOCK_EVENT_MESSAGE } from './constants.ts';

test.describe('dispatchCustomEvent function', () => {
    test('should dispatch an event when clicked', async ({ page }) => {
        // Arrange
        const mockComponentPage = new BasePage(page, 'webc-core--dispatch-custom-event');
        await mockComponentPage.load();

        // Set up a listener for console messages
        const consoleMessages: string[] = [];
        page.on('console', (message) => {
            if (message.type() === 'info') {
                consoleMessages.push(message.text());
            }
        });

        // Act
        await page.getByTestId('dispatch-custom-event-mock-button').click();

        // Assert
        expect(consoleMessages).toHaveLength(1);
        expect(consoleMessages[0]).toContain(EXPECTED_MOCK_EVENT_MESSAGE);
    });

    test('should call console.warn when event name do not start with "pie-"', async ({ page }) => {
        // Arrange
        const expected = 'A custom event name should start with `pie-`';

        const mockComponentPage = new BasePage(page, 'webc-core--invalid-event-name-event');
        await mockComponentPage.load();

        // Set up a listener for console messages
        const consoleMessages: string[] = [];
        page.on('console', (msg) => {
            if (msg.type() === 'warning') {
                consoleMessages.push(msg.text());
            }
        });

        // Act
        await page.getByTestId('dispatch-custom-event-mock-button').click();

        // Assert
        expect(consoleMessages).toHaveLength(1);
        expect(consoleMessages[0]).toMatch(expected);
    });
});
