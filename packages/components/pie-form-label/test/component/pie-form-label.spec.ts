
import { test, expect, MountOptions } from '@sand4rt/experimental-ct-web';
import { PieInput } from '@justeattakeaway/pie-input';
import { PieSwitch } from '@justeattakeaway/pie-switch';
import { PieFormLabel, FormLabelProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-form-label"]';

test.describe('PieFormLabel - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieFormLabel, {
            props: {
                for: 'form-label',
                optional: 'Optional',
                trailing: 'X out X',
            } as MountOptions<Record<string, never>, PieFormLabel>['props'] & FormLabelProps,
            slots: {
                default: 'Label',
            },
        });

        // Act
        const formLabel = page.locator(componentSelector);

        // Assert
        expect(formLabel).toBeVisible();
    });
    test.describe('should focus the component assigned with "for" when clicked', () => {
        // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
        // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
        test.beforeEach(async ({ mount }) => {
            const pieInput = await mount(PieInput);
            await pieInput.unmount();

            const pieSwitch = await mount(PieSwitch);
            await pieSwitch.unmount();

            const pieFormLabel = await mount(PieFormLabel);
            await pieFormLabel.unmount();
        });

        test('when used with a text input', async ({ page }) => {
            // Arrange
            await page.setContent('<pie-form-label for="email">Email:</pie-form-label><pie-input id="email"></pie-input>');

            // Act
            const target = page.locator('#email');
            const label = page.locator('pie-form-label');
            await label.click();

            // Assert
            expect(target).toBeFocused();
        });

        test.describe('when used with a switch', () => {
            const markup = '<pie-form-label for="approveSettings">Approve settings</pie-form-label><pie-switch id="approveSettings"></pie-switch>';

            test.describe('when clicked once', () => {
                test('the switch should be focused', async ({ page }) => {
                    // Arrange
                    await page.setContent(markup);

                    // Act
                    const target = page.locator('#approveSettings');
                    const label = page.locator('pie-form-label');
                    await label.click();

                    // Assert
                    expect(target).toBeFocused();
                });
                test('the switch "checked" attribute is true', async ({ page }) => {
                    // Arrange
                    await page.setContent(markup);

                    // Act
                    const target = page.locator('#approveSettings');
                    const label = page.locator('pie-form-label');
                    await label.click();

                    // Assert
                    expect(target).toBeFocused();
                });
            });
            test.describe('when clicked twice', () => {
                test('the switch "checked" attribute is false', async ({ page }) => {
                    // Arrange
                    await page.setContent(markup);

                    // Act
                    const target = page.locator('#approveSettings');
                    const label = page.locator('pie-form-label');
                    await label.click();
                    await label.click();

                    // Assert
                    expect(target).toBeFocused();
                });
            });
        });
    });
});
