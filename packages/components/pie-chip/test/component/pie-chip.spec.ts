import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import type { ChipProps } from '../../src/index.ts';
import { chip } from '../helpers/page-object/selectors.ts';

const dismissibleProps: Partial<ChipProps> = {
    isSelected: true,
    isDismissible: true,
};

test.describe('PieChip - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const pieChipPage = new BasePage(page, 'chip--default');
        await pieChipPage.load();

        // Act
        const chipComponent = page.locator(chip.selectors.container.dataTestId);

        // Assert
        await expect(chipComponent).toBeVisible();
    });

    test.describe('if NOT disabled', () => {
        test('close button should emit the close event', async ({ page }) => {
            // Arrange
            const pieChipPage = new BasePage(page, 'chip--default');
            await pieChipPage.load({ ...dismissibleProps });

            const chipComponent = page.locator(chip.selectors.container.dataTestId);
            const closeButton = chipComponent.getByTestId(chip.selectors.closeButton.dataTestId);

            // Set up a listener for console messages
            const consoleMessages: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'log') {
                    consoleMessages.push(message.text());
                }
            });

            // Act
            await closeButton.click();

            // Assert
            expect(consoleMessages).toContain('pie-chip-close clicked');
        });
    });

    test.describe('if disabled', () => {
        test('should not trigger click events when the chip is `disabled`', async ({ page }) => {
            // Arrange
            const pieChipPage = new BasePage(page, 'chip--default');
            await pieChipPage.load({ disabled: true });

            const chipComponent = page.locator(chip.selectors.container.dataTestId);

            // Set up a listener for console messages
            const consoleMessages: string[] = [];
            page.on('console', (message) => {
                if (message.type() === 'log') {
                    consoleMessages.push(message.text());
                }
            });

            // Act
            await chipComponent.click();

            // Assert
            expect(consoleMessages).toStrictEqual([]);
        });

        test('close button should be disabled', async ({ page }) => {
            // Arrange
            const pieChipPage = new BasePage(page, 'chip--default');
            await pieChipPage.load({ ...dismissibleProps, disabled: true });

            const chipComponent = page.locator(chip.selectors.container.dataTestId);
            const closeButton = chipComponent.getByTestId(chip.selectors.closeButton.dataTestId);

            // Act && Assert
            await expect(closeButton).toBeDisabled();
        });
    });

    test.describe('Chip Close: aria: attribute', () => {
        test.describe('aria-label', () => {
            test.describe('when an aria close value is provided', () => {
                test('should render on the component with the correct value', async ({ page }) => {
                    // Arrange

                    const props: Partial<ChipProps> = { ...dismissibleProps, aria: { close: 'Chip Close' } };
                    const pieChipPage = new BasePage(page, 'chip--default');
                    await pieChipPage.load(props);

                    const chipComponent = page.locator(chip.selectors.container.dataTestId);
                    const closeButton = chipComponent.getByTestId(chip.selectors.closeButton.dataTestId);

                    // Act & Assert
                    await expect(closeButton).toHaveAttribute('aria-label', 'Chip Close');
                });
            });
        });

        test.describe('when an aria close value is not provided', () => {
            test('should not render on the component', async ({ page }) => {
                // Arrange

                const props: Partial<ChipProps> = { ...dismissibleProps, aria: { close: '' } };
                const pieChipPage = new BasePage(page, 'chip--default');
                await pieChipPage.load(props);

                const chipComponent = page.locator(chip.selectors.container.dataTestId);
                const closeButton = chipComponent.getByTestId(chip.selectors.closeButton.dataTestId);

                // Act & Assert
                await expect(closeButton).toHaveAttribute('aria-label', '');
            });
        });

        test.describe('Chip: aria: attributes', () => {
            test.describe('aria-live', () => {
                test('should render on the component with the value `polite`', async ({ page }) => {
                    // Arrange
                    const pieChipPage = new BasePage(page, 'chip--default');
                    await pieChipPage.load({ ...dismissibleProps });

                    const chipComponent = page.locator(chip.selectors.container.dataTestId);

                    // Act & Assert
                    await expect(chipComponent.getByTestId('pie-chip')).toHaveAttribute('aria-live', 'polite');
                });
            });

            test.describe('aria-atomic', () => {
                test('should render on the component with the value `true`', async ({ page }) => {
                    // Arrange
                    const pieChipPage = new BasePage(page, 'chip--default');
                    await pieChipPage.load({ ...dismissibleProps });

                    const chipComponent = page.locator(chip.selectors.container.dataTestId);

                    // Act & Assert
                    await expect(chipComponent.getByTestId('pie-chip')).toHaveAttribute('aria-atomic', 'true');
                });
            });

            test.describe('aria-label', () => {
                test.describe('when passed in', () => {
                    test('should render on the component with the correct value', async ({ page }) => {
                        // Arrange
                        const props: Partial<ChipProps> = { ...dismissibleProps, aria: { label: 'Chip Label' } };
                        const pieChipPage = new BasePage(page, 'chip--default');
                        await pieChipPage.load(props);

                        const chipComponent = page.locator(chip.selectors.container.dataTestId);

                        // Act & Assert
                        await expect(chipComponent.getByTestId('pie-chip')).toHaveAttribute('aria-label', 'Chip Label');
                    });
                });

                test.describe('when not passed in', () => {
                    test('should not render on the component', async ({ page }) => {
                        // Arrange
                        const pieChipPage = new BasePage(page, 'chip--default');
                        await pieChipPage.load();

                        const chipComponent = page.locator(chip.selectors.container.dataTestId);

                        // Act & Assert
                        expect(chipComponent.getByTestId('pie-chip').getAttribute('aria-label')).not.toContain('aria-label');
                    });
                });
            });

            test.describe('aria-busy', () => {
                test.describe('when the component is in a `isLoading` state', () => {
                    test('should render on the component with the value `true`', async ({ page }) => {
                        // Arrange
                        const props: Partial<ChipProps> = { ...dismissibleProps, isLoading: true };
                        const pieChipPage = new BasePage(page, 'chip--default');
                        await pieChipPage.load(props);

                        const chipComponent = page.locator(chip.selectors.container.dataTestId);

                        // Act & Assert
                        await expect(chipComponent.getByTestId('pie-chip')).toHaveAttribute('aria-busy', 'true');
                    });
                });

                test.describe('when the component is not in a `isLoading` state', () => {
                    test('should render on the component with the value `false`', async ({ page }) => {
                        // Arrange
                        const pieChipPage = new BasePage(page, 'chip--default');
                        await pieChipPage.load({ isLoading: false });

                        const chipComponent = page.locator(chip.selectors.container.dataTestId);

                        // Act && Assert
                        await expect(chipComponent.getByTestId('pie-chip')).toHaveAttribute('aria-busy', 'false');
                    });
                });
            });

            test.describe('aria-current', () => {
                test.describe('when the component is in a `isSelected` state', () => {
                    test('should render on the component with the value `true`', async ({ page }) => {
                        // Arrange
                        const props: Partial<ChipProps> = { isSelected: true };
                        const pieChipPage = new BasePage(page, 'chip--default');
                        await pieChipPage.load(props);

                        const chipComponent = page.locator(chip.selectors.container.dataTestId);

                        // Act && Assert
                        await expect(chipComponent.getByTestId('pie-chip')).toHaveAttribute('aria-current', 'true');
                    });
                });

                test.describe('when the component is not in a `isSelected` state', () => {
                    test('should render on the component with the value `false`', async ({ page }) => {
                        // Arrange
                        const props: Partial<ChipProps> = { isSelected: false };
                        const pieChipPage = new BasePage(page, 'chip--default');
                        await pieChipPage.load(props);

                        const chipComponent = page.locator(chip.selectors.container.dataTestId);

                        // Act && Assert
                        await expect(chipComponent.getByTestId('pie-chip')).toHaveAttribute('aria-current', 'false');
                    });
                });
            });
        });
    });
});
