import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { checkboxGroup } from '../helpers/page-object/selectors.ts';
import { statusTypes } from '../../src/defs.ts';
import type { CheckboxGroupProps } from '../../src/defs.ts';

test.describe('PieCheckboxGroup - Component tests', () => {
    test('should render successfully', async ({ page }) => {
        // Arrange
        const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
        await checkboxGroupPage.load();

        // Act
        const checkboxGroupComponent = page.getByTestId(checkboxGroup.selectors.container.dataTestId);

        // Assert
        await expect(checkboxGroupComponent).toBeVisible();
    });

    test.describe('assistiveText', () => {
        test('should not render the assistive text component if the prop is not provided', async ({ page }) => {
            // Arrange
            const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
            await checkboxGroupPage.load();

            // Act
            const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

            // Assert
            await expect(assistiveText).not.toBeVisible();
        });

        test('should apply the "default" variant attribute if no status is provided', async ({ page }) => {
            // Arrange
            const props : CheckboxGroupProps = {
                assistiveText: 'Assistive text',
            };
            const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
            await checkboxGroupPage.load({ ...props });

            // Act
            const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

            // Assert
            await expect(assistiveText).toBeVisible();
            await expect(assistiveText).toHaveAttribute('variant', 'default');
            await expect(assistiveText).toHaveText('Assistive text');
        });

        test.describe('Assistive text: Status', () => {
            statusTypes.forEach((status) => {
                test(`should render the assistive text component with the ${status} variant`, async ({ page }) => {
                    // Arrange
                    const props : CheckboxGroupProps = {
                        assistiveText: 'Assistive text',
                        status,
                    };
                    const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                    await checkboxGroupPage.load({ ...props });

                    // Act
                    const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

                    // Assert
                    await expect(assistiveText).toBeVisible();
                    await expect(assistiveText).toHaveAttribute('variant', status);
                    await expect(assistiveText).toHaveText('Assistive text');
                });
            });
        });

        test.describe('Assistive test ID attribute', () => {
            test('should contain an ID associated with the checkbox group element for a11y', async ({ page }) => {
                // Arrange
                const props : CheckboxGroupProps = {
                    assistiveText: 'Assistive text',
                };
                const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                await checkboxGroupPage.load({ ...props });

                // Act
                const checkboxGroupFieldset = page.getByTestId(checkboxGroup.selectors.fieldset.dataTestId);
                const assistiveText = page.getByTestId(checkboxGroup.selectors.assistiveText.dataTestId);

                // Assert
                await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                await expect(checkboxGroupFieldset).toHaveAttribute('aria-describedby', 'assistive-text');
            });
        });
    });

    test.describe('Props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the slotted component', async ({ page }) => {
                    // Arrange
                    const props : CheckboxGroupProps = {
                        disabled: true,
                    };
                    const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                    await checkboxGroupPage.load({ ...props });

                    // Act
                    const checkboxComponents = await page.locator('pie-checkbox').all();

                    // Assert
                    checkboxComponents.forEach(async (checkbox) => {
                        await expect(checkbox.locator('input')).toBeDisabled();
                    });
                });
            });
            test.describe('when false', () => {
                test('the slotted checkbox component should not be disabled if checkbox itself is not disabled', async ({ page }) => {
                    // Arrange
                    const props : CheckboxGroupProps = {
                        disabled: false,
                    };
                    const checkboxGroupPage = new BasePage(page, 'checkbox-group--default');
                    await checkboxGroupPage.load({ ...props });

                    // Act
                    const checkboxComponents = await page.locator('pie-checkbox').all();

                    // Assert
                    checkboxComponents.forEach(async (checkbox) => {
                        await expect(checkbox.locator('input')).not.toBeDisabled();
                    });
                });
            });
            test('the slotted checkbox component should be disabled if checkbox itself is disabled', async ({ page }) => {
                // Arrange
                const props : CheckboxGroupProps = {
                    disabled: false,
                };

                const checkboxGroupPage = new BasePage(page, 'checkbox-group--disabled-slotted-checkbox');
                await checkboxGroupPage.load({ ...props });

                // Act
                // Hardcoded `disable` attribute on the first checkbox
                const checkbox1 = page.locator('pie-checkbox', { hasText: 'checkbox 1' }).locator('input');
                const checkbox2 = page.locator('pie-checkbox', { hasText: 'checkbox 2' }).locator('input');

                // Assert
                await expect(checkbox1).toBeDisabled();
                await expect(checkbox2).not.toBeDisabled();
            });
        });
    });
});
