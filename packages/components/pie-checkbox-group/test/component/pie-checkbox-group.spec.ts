import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieAssistiveText } from '@justeattakeaway/pie-assistive-text';
import { PieCheckbox } from '@justeattakeaway/pie-checkbox';
import { PieCheckboxGroup, type CheckboxGroupProps } from '../../src/index.ts';
import { statusTypes } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-checkbox-group"]';
const assistiveTextSelector = '[data-test-id="pie-checkbox-group-assistive-text"]';
const checkboxSelector = '[data-test-id="checkbox-input"]';

test.describe('PieCheckboxGroup - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieCheckboxGroup);
        await component.unmount();

        const assistiveTextComponent = await mount(PieAssistiveText);
        await assistiveTextComponent.unmount();

        const CheckboxComponent = await mount(PieCheckbox);
        await CheckboxComponent.unmount();
    });

    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCheckboxGroup, {
            props: {} as CheckboxGroupProps,
            slots: {
                default: '<pie-checkbox></pie-checkbox>',
            },
        });

        // Act
        const checkboxGroup = page.locator(componentSelector);

        // Assert
        expect(checkboxGroup).toBeVisible();
    });

    test.describe('assistiveText', () => {
        test('should not render the assistive text component if the prop is not provided', async ({ mount, page }) => {
            // Arrange
            await mount(PieCheckboxGroup, {});

            // Act
            const assistiveText = page.locator(assistiveTextSelector);

            // Assert
            expect(assistiveText).not.toBeVisible();
        });

        test('should apply the "default" variant attribute if no status is provided', async ({ mount, page }) => {
            // Arrange
            await mount(PieCheckboxGroup, {
                props: {
                    assistiveText: 'Assistive text',
                } as PieCheckboxGroup,
            });

            // Act
            const assistiveText = page.locator(assistiveTextSelector);

            // Assert
            expect(assistiveText).toBeVisible();
            expect(await assistiveText.getAttribute('variant')).toBe('default');
            expect(assistiveText).toHaveText('Assistive text');
        });

        test.describe('Assistive text: Status', () => {
            statusTypes.forEach((status) => {
                test(`should render the assistive text component with the ${status} variant`, async ({ mount, page }) => {
                    // Arrange
                    await mount(PieCheckboxGroup, {
                        props: {
                            assistiveText: 'Assistive text',
                            status,
                        } as PieCheckboxGroup,
                    });

                    // Act
                    const assistiveText = page.locator(assistiveTextSelector);

                    // Assert
                    expect(assistiveText).toBeVisible();
                    expect(assistiveText).toHaveAttribute('variant', status);
                    expect(assistiveText).toHaveText('Assistive text');
                });
            });
        });

        test.describe('Assistive test ID attribute', () => {
            test('should contain an ID associated with the checkbox group element for a11y', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieCheckboxGroup, {
                    props: {
                        assistiveText: 'Assistive text',
                    } as PieCheckboxGroup,
                });

                // Act
                const checkboxGroup = component.locator(componentSelector);
                const assistiveText = page.locator(assistiveTextSelector);

                const componentAttribute = await checkboxGroup.getAttribute('aria-describedby');

                // Assert
                await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                expect(componentAttribute).toBe('assistive-text');
            });
        });
    });

    test.describe('Props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the slotted component', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieCheckboxGroup, {
                        props: {
                            disabled: true,
                        } as CheckboxGroupProps,
                        slots: {
                            default: '<pie-checkbox></pie-checkbox>',
                        },
                    });

                    // Act
                    const checkbox = component.locator(checkboxSelector);

                    // Assert
                    expect(checkbox).toBeDisabled();
                });
            });
            test.describe('when false', () => {
                test('the slotted checkbox component should not be disabled if checkbox itself is not disabled', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieCheckboxGroup, {
                        props: {
                            disabled: false,
                        } as CheckboxGroupProps,
                        slots: {
                            default: '<pie-checkbox></pie-checkbox>',
                        },
                    });

                    // Act
                    const checkbox = component.locator(checkboxSelector);

                    // Assert
                    expect(checkbox).not.toBeDisabled();
                });
                test('the slotted checkbox component should be disabled if checkbox itself is disabled', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieCheckboxGroup, {
                        props: {
                            disabled: false,
                        } as CheckboxGroupProps,
                        slots: {
                            default: '<pie-checkbox disabled></pie-checkbox>',
                        },
                    });

                    // Act
                    const checkbox = component.locator(checkboxSelector);

                    // Assert
                    expect(checkbox).toBeDisabled();
                });
            });
        });
    });
});
