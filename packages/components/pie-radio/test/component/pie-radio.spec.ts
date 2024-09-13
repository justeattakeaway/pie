
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieRadio } from '../../src/index.ts';
import { defaultProps, RadioProps } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-radio"]';
const inputSelector = 'input[type="radio"]';

const slots = {
    default: 'Label',
};

test.describe('PieRadio - Component tests', () => {
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieRadio);
        await component.unmount();
    });

    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieRadio, {
            props: defaultProps,
            slots,
        });

        // Act
        const radio = page.locator(componentSelector);

        // Assert
        expect(radio).toBeVisible();
    });

    test.describe('props', () => {
        test.describe('checked', () => {
            test('should check the radio when true', async ({ page, mount }) => {
                // Arrange
                await mount(PieRadio, {
                    props: { checked: true },
                    slots,
                });

                // Act
                const radio = page.locator(inputSelector);

                // Assert
                await expect(radio).toBeChecked();
            });

            test('should not check the radio when false', async ({ page, mount }) => {
                // Arrange
                await mount(PieRadio, {
                    props: { checked: false },
                    slots,
                });

                // Act
                const radio = page.locator(inputSelector);

                // Assert
                await expect(radio).not.toBeChecked();
            });
        });

        test.describe('disabled', () => {
            test('should enable the radio when false', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: { disabled: false },
                    slots,
                });

                // Act
                const radio = page.locator(inputSelector);

                // Assert
                await expect(radio).not.toBeDisabled();
            });

            test('should disable the radio when true', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: { disabled: true },
                    slots,
                });

                // Act
                const radio = page.locator(inputSelector);

                // Assert
                await expect(radio).toBeDisabled();
            });
        });

        test.describe('required', () => {
            test('should not add a required attribute if the prop is not provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieRadio);

                // Act
                const radio = component.locator(inputSelector);

                // Assert
                expect((await radio.getAttribute('required'))).toBe(null);
            });

            test('should apply the required attribute to the input element', async ({ mount }) => {
                // Arrange
                const component = await mount(PieRadio, {
                    props: { required: true },
                });

                // Act
                const radio = component.locator(inputSelector);

                // Assert
                expect((await radio.getAttribute('required'))).toBe('');
            });

            test('should be in a valid state if the radio is required and checked', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        checked: true,
                        required: true,
                        name: 'radio',
                    } as RadioProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the radio is required and checked manually', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieRadio, {
                    props: {
                        required: true,
                        checked: false,
                        name: 'radio',
                    } as RadioProps,
                });

                // Act
                await component.locator(inputSelector).click();
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in an invalid state if the radio is required but unchecked', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        checked: false,
                        required: true,
                        name: 'radio',
                    } as RadioProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);

                // Assert
                expect(isValid).toBe(false);
            });

            test('should be in a valid state if the radio is checked but not required', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        checked: true,
                        required: false,
                        name: 'radio',
                    } as RadioProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the radio is unchecked and not required', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        required: false,
                        checked: false,
                        name: 'radio',
                    } as RadioProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });
    });
});
