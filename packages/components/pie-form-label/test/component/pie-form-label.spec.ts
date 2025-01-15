import { test, expect } from '@playwright/test';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import { formLabel } from '../helpers/page-object/selectors.ts';
import type { FormLabelProps } from '../../src/index.ts';

test.describe('PieFormLabel - Component tests', () => {
    test('should render successfully', async ({ page }) => {
    // Arrange
        const props: FormLabelProps = {
            for: 'form-label',
            optional: 'Optional',
            trailing: 'X out X',
        };

        const formLabelPage = new BasePage(page, 'form-label--default');

        await formLabelPage.load({ ...props });

        // Act
        const formLabelComponent = page.getByTestId(formLabel.selectors.container.dataTestId);

        // Assert
        await expect(formLabelComponent).toBeVisible();
    });
    test.describe('should behave as expected when it is clicked and the "for" prop is assigned', () => {
        test('when used with a text input', async ({ page }) => {
            // Arrange
            const formLabelWithTextInputPage = new BasePage(page, 'form-label--with-text-input');
            await formLabelWithTextInputPage.load();

            // Act
            const textInput = page.getByTestId('email-input');
            const label = page.getByTestId(formLabel.selectors.container.dataTestId);
            await label.click();

            // Assert
            await expect(textInput).toBeFocused();
        });

        test.describe('when used with a switch', () => {
            test.describe('when clicked once', () => {
                test('the switch should be focused', async ({ page }) => {
                // Arrange
                    const formLabelWithSwitchPage = new BasePage(page, 'form-label--with-switch');
                    await formLabelWithSwitchPage.load();

                    // Act
                    const switchComponent = page.getByTestId('approve-settings-switch');
                    const label = page.getByTestId(formLabel.selectors.container.dataTestId);
                    await expect(switchComponent).not.toBeFocused();
                    await label.click();

                    // Assert
                    await expect(switchComponent).toBeFocused();
                });
                test('the switch "checked" attribute is true', async ({ page }) => {
                // Arrange
                    const formLabelWithSwitchPage = new BasePage(page, 'form-label--with-switch');
                    await formLabelWithSwitchPage.load();

                    // Act
                    const switchComponent = page.getByTestId('approve-settings-switch');
                    const label = page.getByTestId(formLabel.selectors.container.dataTestId);
                    await label.click();

                    await expect(switchComponent).toHaveAttribute('checked', '');
                });
            });
            test.describe('when clicked twice', () => {
                test('the switch "checked" attribute is false', async ({ page }) => {
                // Arrange
                    const formLabelWithSwitchPage = new BasePage(page, 'form-label--with-switch');
                    await formLabelWithSwitchPage.load();

                    // Act
                    const switchComponent = page.getByTestId('approve-settings-switch');
                    const label = page.getByTestId(formLabel.selectors.container.dataTestId);
                    await label.click();
                    await label.click();

                    // Assert
                    await expect(switchComponent).not.toHaveAttribute('checked', '');
                });
            });
        });
    });
});
