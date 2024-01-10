
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieInput, InputProps } from '@/index';

const componentSelector = '[data-test-id="pie-input"]';

test.describe('PieInput - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieInput, {
            props: {} as InputProps,
        });

        // Act
        const input = page.locator(componentSelector);

        // Assert
        expect(input).toBeVisible();
    });

    test.describe('Props', () => {
        test.describe('type', () => {
            test('should default to text type if no type prop provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect(input).toHaveAttribute('type', 'text');
            });

            test('should apply the type prop to the HTML input rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        type: 'number',
                    } as InputProps,
                });

                // Act
                const input = component.locator('input');

                // Assert
                expect(input).toHaveAttribute('type', 'number');
            });
        });

        test.describe('value', () => {
            test('should default to an empty string if no value prop provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.inputValue())).toBe('');
            });

            test('should apply the value prop to the HTML input rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        value: 'test',
                    } as InputProps,
                });

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.inputValue())).toBe('test');
            });
        });
    });

    test.describe('Events', () => {
        test.describe('pie-input', () => {
            type PieInputEvent = CustomEvent<{ data: string, value: string }>;

            test('should emit a custom event with the input event data and input value', async ({ mount, page }) => {
                // Arrange
                const messages: PieInputEvent[] = [];
                const expectedMessages = [
                    { data: 't', value: 't' },
                    { data: 'e', value: 'te' },
                    { data: 's', value: 'tes' },
                    { data: 't', value: 'test' },
                    { data: null, value: 'tes' }
                ];

                const component = await mount(PieInput, {
                    props: {} as InputProps,
                    on: {
                        'pie-input': (data: PieInputEvent) => {
                            messages.push(data);
                        },
                    },
                });

                const input = component.locator('input');

                // Act
                await input.type('test');
                await page.keyboard.press('Backspace');

                // Assert
                expect(messages).toEqual(expectedMessages);
            });
        });
    });
});
