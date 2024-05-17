
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieCheckbox, CheckboxProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="checkbox-input"]';

test.describe('PieCheckbox - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieCheckbox);
        await component.unmount();
    });

    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCheckbox, {
            props: {} as CheckboxProps,
        });

        // Act
        const checkbox = page.locator(componentSelector);

        // Assert
        expect(checkbox).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('value', () => {
            test('should default to "on" string if no value prop provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {});
                // expected const is a default value for the html <input type="checkbox" /> value attribute.
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
                const expected = 'on';

                // Act
                const checkbox = component.locator(componentSelector);

                // Assert
                expect((await checkbox.inputValue())).toBe(expected);
            });

            test('should apply the value attr to the checkbox', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        value: 'test',
                    } as CheckboxProps,
                });

                // Act
                const checkbox = component.locator(componentSelector);

                // Assert
                expect((await checkbox.inputValue())).toBe('test');
            });
        });

        test.describe('name', () => {
            test('should not render a name attr on the checkbox element if no name provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {});

                // Act
                const checkbox = component.locator(componentSelector);

                // Assert
                expect((await checkbox.getAttribute('name'))).toBe(null);
            });

            test('should apply the name attr to the checkbox', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        name: 'test',
                    } as CheckboxProps,
                });

                // Act
                const checkbox = component.locator(componentSelector);

                // Assert
                expect((await checkbox.getAttribute('name'))).toBe('test');
            });
        });

        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the component', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieCheckbox, {
                        props: {
                            disabled: true,
                        } as CheckboxProps,
                    });

                    // Act
                    const checkbox = component.locator(componentSelector);

                    // Assert
                    expect(checkbox).toBeDisabled();
                });

                test('should not be able to focus the component', async ({ page }) => {
                    // Arrange
                    await page.setContent('<pie-checkbox disabled></pie-checkbox>');

                    // Act
                    const checkbox = page.locator('pie-checkbox');
                    await checkbox.focus();

                    // Assert
                    expect(checkbox).not.toBeFocused();
                });
            });

            test.describe('when not provided', () => {
                test('should not disable the component', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieCheckbox, {});

                    // Act
                    const checkbox = component.locator(componentSelector);

                    // Assert
                    expect(checkbox).not.toBeDisabled();
                });

                test('should be able to focus the component', async ({ page }) => {
                    // Arrange
                    await page.setContent('<pie-checkbox></pie-checkbox>');

                    // Act
                    const checkbox = page.locator('pie-checkbox');
                    await checkbox.focus();

                    // Assert
                    expect(checkbox).toBeFocused();
                });
            });
        });

        test.describe('required', () => {
            test('should not render a required attribute if the required prop isn’t provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {});

                // Act
                const checkbox = component.locator(componentSelector);

                // Assert
                expect((await checkbox.getAttribute('required'))).toBe(null);
            });

            test('should apply the required prop to the HTML input rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        required: true,
                    } as CheckboxProps,
                });

                // Act
                const checkbox = component.locator(componentSelector);

                // Assert
                expect((await checkbox.getAttribute('required'))).toBe('');
            });

            test('should be in an invalid state if checkbox is unchecked and required', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {
                    props: {
                        required: true,
                    } as CheckboxProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(false);
            });

            test('should be in a valid state if checkbox is checked and required', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        checked: false,
                        required: true,
                    } as CheckboxProps,
                });

                // Act
                await component.locator(componentSelector).click();
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the input has a checked prop and required', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {
                    props: {
                        required: true,
                        checked: true,
                    } as CheckboxProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });
    });
});
