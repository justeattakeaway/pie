import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { iconButton } from '../helpers/page-object/selectors.ts';
import type { IconButtonProps } from '../../src/defs.ts';

test('should correctly work with native click events', async ({ page }) => {
    // Arrange
    const iconButtonPage = new BasePage(page, 'icon-button--default');
    await iconButtonPage.load();

    const expectedEventMessage = 'Native event dispatched';

    // Set up a listener for console messages
    const consoleMessages: string[] = [];
    page.on('console', (message) => {
        if (message.type() === 'info') {
            consoleMessages.push(message.text());
        }
    });

    // Act
    const iconButtonComponent = await page.locator(iconButton.selectors.container.dataTestId);
    await iconButtonComponent.click();

    // Assert
    expect(consoleMessages).toEqual([expectedEventMessage]);
});

test('should apply all aria attributes to the underlying button element', async ({ page }) => {
    // Arrange
    const props: IconButtonProps = {
        aria: {
            label: 'foo',
            labelledby: 'bar',
            describedby: 'baz',
            expanded: true,
            controls: 'test-controls',
        },
    };
    const iconButtonPage = new BasePage(page, 'icon-button--default');
    await iconButtonPage.load({ ...props });

    const iconButtonComponent = await page.locator(iconButton.selectors.container.dataTestId).locator('button');

    // Assert
    await expect(iconButtonComponent).toHaveAttribute('aria-label', 'foo');
    await expect(iconButtonComponent).toHaveAttribute('aria-labelledby', 'bar');
    await expect(iconButtonComponent).toHaveAttribute('aria-describedby', 'baz');
    await expect(iconButtonComponent).toHaveAttribute('aria-expanded', 'true');
    await expect(iconButtonComponent).toHaveAttribute('aria-controls', 'test-controls');
});
