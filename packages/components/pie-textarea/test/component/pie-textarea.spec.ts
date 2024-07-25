
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieTextarea, type TextareaProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-textarea"]';
const componentWrapperSelector = '[data-test-id="pie-textarea-wrapper"]';

test.describe('PieTextarea - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieTextarea);
        await component.unmount();
    });

    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieTextarea, {
            props: {} as TextareaProps,
        });

        // Act
        const textarea = page.locator(componentSelector);

        // Assert
        expect(textarea).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('disabled', () => {
            test.describe('when true', () => {
                test('should disable the component', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieTextarea, {
                        props: {
                            disabled: true,
                        } as PieTextarea,
                    });

                    // Act
                    const textarea = component.locator('textarea');

                    // Assert
                    expect(textarea).toBeDisabled();
                });

                test('should not be able to focus the component', async ({ page }) => {
                    // Arrange
                    await page.setContent('<pie-textarea disabled></pie-textarea>');

                    // Act
                    const textarea = page.locator('pie-textarea');
                    await textarea.focus();

                    // Assert
                    expect(textarea).not.toBeFocused();
                });
            });

            test.describe('when false', () => {
                test('should not disable the component', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieTextarea, {});

                    // Act
                    const textarea = component.locator('textarea');

                    // Assert
                    expect(textarea).not.toBeDisabled();
                });

                test('should still be able to focus the component', async ({ page }) => {
                    // Arrange
                    await page.setContent('<pie-textarea></pie-textarea>');

                    // Act
                    const textarea = page.locator('pie-textarea');
                    await textarea.focus();

                    // Assert
                    expect(textarea).toBeFocused();
                });
            });
        });

        test.describe('size', () => {
            test('should apply `medium` size prop by default if no size prop provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {});

                // Act
                const textareaWrapper = component.locator(componentWrapperSelector);

                // Assert
                expect(textareaWrapper).toHaveAttribute('data-pie-size', 'medium');
            });

            test('should apply `large` size attribute to the textarea wrapper', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        size: 'large',
                    } as TextareaProps,
                });

                // Act
                const textareaWrapper = component.locator(componentWrapperSelector);

                // Assert
                expect(textareaWrapper).toHaveAttribute('data-pie-size', 'large');
            });

            test('should apply `small` size attribute to the textarea wrapper', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        size: 'small',
                    } as TextareaProps,
                });

                // Act
                const textareaWrapper = component.locator(componentWrapperSelector);

                // Assert
                expect(textareaWrapper).toHaveAttribute('data-pie-size', 'small');
            });
        });

        test.describe('resize', () => {
            test('should apply `auto` resize prop by default if no resize prop provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {});

                // Act
                const textareaWrapper = component.locator(componentWrapperSelector);

                // Assert
                expect(textareaWrapper).toHaveAttribute('data-pie-resize', 'auto');
            });

            test('should apply `manual` resize attribute to the textarea wrapper', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        resize: 'manual',
                    } as TextareaProps,
                });

                // Act
                const textareaWrapper = component.locator(componentWrapperSelector);

                // Assert
                expect(textareaWrapper).toHaveAttribute('data-pie-resize', 'manual');
            });

            test('should apply `auto` resize attribute to the textarea wrapper', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        resize: 'auto',
                    } as TextareaProps,
                });

                // Act
                const textareaWrapper = component.locator(componentWrapperSelector);

                // Assert
                expect(textareaWrapper).toHaveAttribute('data-pie-resize', 'auto');
            });
        });
    });
});
