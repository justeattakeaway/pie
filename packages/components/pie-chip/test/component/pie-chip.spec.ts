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
            component.addEventListener(event, (e) => {
                // Store the detail if it exists, otherwise store the event name
                window.eventLog.push((e as CustomEvent).detail?.isSelected ?? event);
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

    test.describe('Selectable variant (default)', () => {
        test('should dispatch `pie-chip-selected` event with `isSelected: true` when selected', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, {}, 'pie-chip-selected');

            // Act
            await chipComponent.click();
            const eventPayload = await page.evaluate(() => window.eventLog[0]);

            // Assert
            expect(eventPayload).toBe(true);
        });

        test('should dispatch `pie-chip-selected` event with `isSelected: false` when deselected', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { isSelected: true }, 'pie-chip-selected');

            // Act
            await chipComponent.click();
            const eventPayload = await page.evaluate(() => window.eventLog[0]);

            // Assert
            expect(eventPayload).toBe(false);
        });

        test('should have the correct ARIA attributes', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, {
                isSelected: true,
                aria: { label: 'Chip Label' },
            });

            const chipComponentCheckbox = chipComponent.getByTestId(chip.selectors.checkboxInput.dataTestId);

            // Assert
            await expect(chipComponentCheckbox).toHaveAttribute('aria-label', 'Chip Label');
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

            const chipComponentStatic = chipComponent.getByTestId(chip.selectors.static.dataTestId);

            // Assert
            await expect(chipComponentStatic).toHaveAttribute('aria-live', 'polite');
            await expect(chipComponentStatic).toHaveAttribute('aria-atomic', 'true');
            await expect(chipComponentStatic).toHaveAttribute('aria-label', 'Dismissible Chip');
            await expect(chipComponentStatic).toHaveAttribute('aria-current', 'true');
        });

        test.describe('aria-busy attribute', () => {
            test('should be `true` when isLoading is true', async ({ page }) => {
                // Arrange
                const chipComponent = await setupPageWithChip(page, {
                    ...dismissibleProps,
                    isLoading: true,
                });

                const chipComponentStatic = chipComponent.getByTestId(chip.selectors.static.dataTestId);

                // Assert
                await expect(chipComponentStatic).toHaveAttribute('aria-busy', 'true');
            });

            test('should be `false` when isLoading is false', async ({ page }) => {
                // Arrange
                const chipComponent = await setupPageWithChip(page, {
                    ...dismissibleProps,
                    isLoading: false,
                });
                const chipComponentStatic = chipComponent.getByTestId(chip.selectors.static.dataTestId);

                // Assert
                await expect(chipComponentStatic).toHaveAttribute('aria-busy', 'false');
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
        test('should not dispatch `pie-chip-selected` event when the chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { disabled: true }, 'pie-chip-selected');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });

        test('the internal checkbox input should be disabled', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { disabled: true });
            const chipComponentCheckbox = chipComponent.getByTestId(chip.selectors.checkboxInput.dataTestId);

            // Assert
            await expect(chipComponentCheckbox).toBeDisabled();
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
        test('should not dispatch `pie-chip-selected` event when a selectable chip is clicked', async ({ page }) => {
            // Arrange
            const chipComponent = await setupPageWithChip(page, { isLoading: true }, 'pie-chip-selected');

            // Act
            await chipComponent.click({ force: true });
            const events = await page.evaluate(() => window.eventLog);

            // Assert
            expect(events).toEqual([]);
        });
    });
});

