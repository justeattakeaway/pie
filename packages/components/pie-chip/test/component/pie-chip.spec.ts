import { test, expect, type Page } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { ChipProps } from '../../src/index.ts';
import { chip } from '../helpers/page-object/selectors.ts';

// Extends the global Window interface to include the eventLog property
declare global {
    interface Window {
        eventLog: any[];
    }
}

const dismissibleProps: Partial<ChipProps> = {
    isSelected: true,
    isDismissible: true,
};

/**
 * A helper function to setup the page, load the chip component,
 * and attach a specified event listener.
 * @param page - The Playwright page object.
 * @param props - The props to pass to the chip component.
 * @param eventName - The name of the event to listen for.
 * @returns The locator for the chip component.
 */
const setupPageWithChip = async (page: Page, props: Partial<ChipProps> = {}, eventName?: string) => {
    const pieChipPage = new BasePage(page, 'chip--default');
    await pieChipPage.load(props);
    const chipComponent = page.locator(chip.selectors.container.dataTestId);

    if (eventName) {
        await page.evaluate((event) => {
            window.eventLog = [];
            const component = document.querySelector('pie-chip') as HTMLElement;
            component.addEventListener(event, () => {
                // Store the event name
                window.eventLog.push(event);
            });
        }, eventName);
    }

    return chipComponent;
};

test.describe('PieChip - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const chipComponent = await setupPageWithChip(page);

        // Assert
        await expect(chipComponent).toBeVisible();
    });

    test.describe('when type="button" (default)', () => {
        test('should be able to listen to change event when clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'button' }, 'change');

            // Act
            await chipComponent.click();
            const [emittedEvent] = await page.evaluate(() => window.eventLog);

            // Assert
            expect(emittedEvent).toBe('change');
        });

        test('should have the correct ARIA attributes', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, {
                type: 'button',
                isSelected: true,
                aria: {
                    label: 'Button Chip Label',
                    haspopup: 'true',
                    expanded: false,
                },
            });

            const chipButton = chipComponent.getByTestId(chip.selectors.button.dataTestId);

            // Assert
            await expect(chipButton).toHaveAttribute('aria-label', 'Button Chip Label');
            await expect(chipButton).toHaveAttribute('aria-pressed', 'true');
            await expect(chipButton).toHaveAttribute('aria-haspopup', 'true');
            await expect(chipButton).toHaveAttribute('aria-expanded', 'false');
        });
    });

    test.describe('when type="checkbox"', () => {
        test('should be able to listen to change event when a selected checkbox chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'checkbox', isSelected: true }, 'change');

            // Act
            await chipComponent.click();
            const [emittedEvent] = await page.evaluate(() => window.eventLog);

            // Assert
            expect(emittedEvent).toBe('change');
        });

        test('should be able to listen to change event when an unselected checkbox chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'checkbox', isSelected: false }, 'change');

            // Act
            await chipComponent.click();
            const [emittedEvent] = await page.evaluate(() => window.eventLog);

            // Assert
            expect(emittedEvent).toBe('change');
        });

        test('should have the correct ARIA attributes', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, {
                type: 'checkbox',
                isSelected: true,
                aria: { label: 'Checkbox Chip Label' },
            });

            const chipCheckboxInput = chipComponent.getByTestId(chip.selectors.checkboxInput.dataTestId);

            // Assert
            await expect(chipCheckboxInput).toHaveAttribute('aria-label', 'Checkbox Chip Label');
        });
    });

    test.describe('Dismissible variant', () => {
        test('close button should emit the `pie-chip-close` event when clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, dismissibleProps, 'pie-chip-close');
            const closeButton = chipComponent.getByTestId(chip.selectors.closeButton.dataTestId);

            // Act
            await closeButton.click();
            const [emittedEvent] = await page.evaluate(() => window.eventLog);

            // Assert
            expect(emittedEvent).toBe('pie-chip-close');
        });

        test('should have the correct static ARIA attributes', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, {
                ...dismissibleProps,
                aria: { label: 'Dismissible Chip' },
            });

            const chipStatic = chipComponent.getByTestId(chip.selectors.static.dataTestId);

            // Assert
            await expect(chipStatic).toHaveAttribute('aria-label', 'Dismissible Chip');
            await expect(chipStatic).toHaveAttribute('aria-current', 'true');
        });

        test.describe('aria-busy attribute', () => {
            test('should be `true` when isLoading is true', async ({ page }) => {
                // Arrange
                const chipComponent = await setupPageWithChip(page, {
                    ...dismissibleProps,
                    isLoading: true,
                });

                const chipStatic = chipComponent.getByTestId(chip.selectors.static.dataTestId);

                // Assert
                await expect(chipStatic).toHaveAttribute('aria-busy', 'true');
            });

            test('should be `false` when isLoading is false', async ({ page }) => {
                // Arrange
                const chipComponent = await setupPageWithChip(page, {
                    ...dismissibleProps,
                    isLoading: false,
                });
                const chipStatic = chipComponent.getByTestId(chip.selectors.static.dataTestId);

                // Assert
                await expect(chipStatic).toHaveAttribute('aria-busy', 'false');
            });
        });

        test.describe('when an aria close value is provided', () => {
            test('should render on the close button with the correct value', async ({ page }) => {
                // Arrange
                const props: Partial<ChipProps> = { ...dismissibleProps, aria: { close: 'Close Chip' } };
                const chipComponent = await setupPageWithChip(page, props);
                const closeButton = chipComponent.getByTestId(chip.selectors.closeButton.dataTestId);

                // Assert
                await expect(closeButton).toHaveAttribute('aria-label', 'Close Chip');
            });
        });
    });

    test.describe('when disabled', () => {
        test('should not be able to listen to click event when a button chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'button', disabled: true }, 'click');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });

        test('should not be able to listen to click event when a checkbox chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'checkbox', disabled: true }, 'click');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });

        test('should not be able to listen to change event when a checkbox chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'checkbox', disabled: true }, 'change');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });

        test('the internal button element should be disabled', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { disabled: true });
            const chipButton = chipComponent.getByTestId(chip.selectors.button.dataTestId);

            // Assert
            await expect(chipButton).toBeDisabled();
        });

        test('the internal checkbox input should be disabled', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'checkbox', disabled: true });
            const chipCheckboxInput = chipComponent.getByTestId(chip.selectors.checkboxInput.dataTestId);

            // Assert
            await expect(chipCheckboxInput).toBeDisabled();
        });

        test('the dismissible close button should be disabled', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { ...dismissibleProps, disabled: true });
            const closeButton = chipComponent.getByTestId(chip.selectors.closeButton.dataTestId);

            // Assert
            await expect(closeButton).toBeDisabled();
        });
    });

    test.describe('when isLoading', () => {
        test('should not be able to listen to click event when a button chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'button', isLoading: true }, 'click');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });

        test('should not be able to listen to click event when a checkbox chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'checkbox', isLoading: true }, 'click');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });

        test('should not be able to listen to change event when a checkbox chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { type: 'checkbox', isLoading: true }, 'change');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });
    });
});
