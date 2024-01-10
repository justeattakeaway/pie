
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
        test.describe('input', () => {
            test('should emit an event each time the component receives input', async ({ mount, page }) => {
                // Arrange
                const messages: InputEvent[] = [];
                const expectedMessagesLength = 5;

                const component = await mount(PieInput, {
                    props: {} as InputProps,
                    on: {
                        input: (data: InputEvent) => {
                            messages.push(data);
                        },
                    },
                });

                const input = component.locator('input');

                // Act
                await input.type('test');
                await page.keyboard.press('Backspace');

                // Assert
                expect(messages.length).toEqual(expectedMessagesLength);
            });

            test('should provide the event target value for event listeners', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                await page.setContent(`
                    <pie-input type="text"></pie-input>
                    <div id="output"></div>
                `);

                await page.evaluate(() => {
                    const output = (document.getElementById('output') as HTMLDivElement);
                    const input = document.querySelector('pie-input');

                    input?.addEventListener('input', (event: Event) => {
                        const currentValue = (event.target as HTMLInputElement).value;
                        output.innerText = currentValue;
                    });
                });

                const input = page.locator('pie-input');

                // Act
                await input.type('test');
                await page.keyboard.press('Backspace');

                const output = await page.locator('#output');

                // Assert
                expect(await output.innerText()).toEqual(expectedMessage);
            });

            test('should correctly handle input including backspaces in the event.data property', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                await page.setContent(`
                    <pie-input type="text"></pie-input>
                    <div id="output"></div>
                `);

                await page.evaluate(() => {
                    const output = document.getElementById('output') as HTMLDivElement;
                    const input = document.querySelector('pie-input');

                    input?.addEventListener('input', (event) => {
                        const { data } = event as InputEvent;
                        const currentValue = (event.target as HTMLInputElement).value;

                        // If data is null, it's a deletion, so update the output to match the input's value
                        if (data === null) {
                            output.innerText = currentValue;
                        } else {
                            // For additions, append the data character
                            output.innerText += data;
                        }
                    });
                });

                const input = page.locator('pie-input');

                // Act
                await input.type('test');
                await page.keyboard.press('Backspace');

                // Assert
                expect(await page.locator('#output').innerText()).toEqual(expectedMessage);
            });
        });
    });
});
