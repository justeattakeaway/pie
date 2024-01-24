
import { test, expect } from '@sand4rt/experimental-ct-web';
import type { Page } from '@playwright/test';
import { PieInput, InputProps } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-input"]';

/**
 * Sets up form data extraction for testing form submissions. This function expects a form element
 * and a designated output element to exist on the page. It intercepts the form submit event,
 * prevents the actual submission, and serializes the form data into JSON, which is then placed in
 * the output element.
 *
 * Expected HTML structure on the page:
 * <form id="form-selector" action="/foo" method="POST">
 *     <pie-input type="text" name="username"></pie-input>
 *     <!-- other form elements -->
 *     <button type="submit">Submit</button>
 * </form>
 * <div id="output-selector"></div>
 *
 * @param {Page} page - The Playwright Page object representing the browser page.
 * @param {string} formSelector - The CSS selector for the form element.
 * @param {string} outputSelector - The CSS selector for the output element where serialized form data will be set.
 * @returns {Promise<void>} A promise that resolves when the setup is complete.
 */
async function setupFormDataExtraction (page: Page, formSelector: string, outputSelector: string): Promise<void> {
    await page.evaluate((config) => {
        const form = document.querySelector(config.formSelector) as HTMLFormElement;
        const output = document.querySelector(config.outputSelector) as HTMLDivElement;

        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the actual submission

            const formData = new FormData(form);
            const formDataObj: { [key: string]: FormDataEntryValue } = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });

            // Serialize and set form data as JSON text in the output element
            output.innerText = JSON.stringify(formDataObj);
        });
    }, { formSelector, outputSelector });
}

/**
 * Retrieves serialized form data from a specified output element and parses it into an object.
 * This function is typically used in conjunction with `setupFormDataExtraction` to test form submissions.
 *
 * @param {Page} page - The Playwright Page object representing the browser page.
 * @param {string} outputSelector - The CSS selector for the output element from which to retrieve the serialized form data.
 * @returns {Promise<{ [key: string]: FormDataEntryValue }>} A promise that resolves to an object representing the form data.
 * Each key-value pair in the object corresponds to a form field and its value.
 */
async function getFormDataObject (page: Page, outputSelector: string): Promise<{ [key: string]: FormDataEntryValue }> {
    const formDataJson = await page.$eval(outputSelector, (el) => (el as HTMLDivElement).innerText);

    return JSON.parse(formDataJson || '{}');
}

test.describe('PieInput - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieInput);
        await component.unmount();
    });

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

        test.describe('name', () => {
            test('should not render a name attribute on the input element if no name provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('name'))).toBe(null);
            });

            test('should apply the name prop to the HTML input rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        name: 'test',
                    } as InputProps,
                });

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('name'))).toBe('test');
            });
        });

        test.describe('pattern', () => {
            test('should not render a pattern attribute on the input element if no pattern provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('pattern'))).toBe(null);
            });

            test('should be invalid state `patternMismatch` if pattern is not met', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        pattern: '[a-z]{4,8}',
                    } as InputProps,
                });

                // Act
                await component.type('hello world');

                const isInvalid = await page.evaluate(() => document.querySelector('pie-input')?.validity.patternMismatch);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if pattern is met', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        pattern: '[a-z]{4,8}',
                    } as InputProps,
                });

                // Act
                await component.type('test');

                const isValid = await page.evaluate(() => document.querySelector('pie-input')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('minlength', () => {
            test('should not render a minlength attribute on the input element if no minlength provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('minlength'))).toBe(null);
            });

            test('should be invalid state `tooShort` if the min length is not entered', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        minlength: 3,
                    } as InputProps,
                });

                // Act
                await component.type('te');

                const isInvalid = await page.evaluate(() => document.querySelector('pie-input')?.validity.tooShort);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the min length is met', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        minlength: 3,
                    } as InputProps,
                });

                // Act
                await component.type('tes');

                const isValid = await page.evaluate(() => document.querySelector('pie-input')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('maxlength', () => {
            test('should not render a maxlength attribute on the input element if no maxlength provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('maxlength'))).toBe(null);
            });

            test('should not be able to input a value greater than the maxlength provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        maxlength: 3,
                    } as InputProps,
                });

                // Act
                await component.type('test');

                // Assert
                expect((await component.locator('input').inputValue())).toBe('tes');
            });

            test('should be invalid state `tooLong` if the maxlength is exceeded programmatically', async ({ mount, page }) => {
                // Arrange
                await mount(PieInput, {
                    props: {
                        maxlength: 2,
                        value: 'test',
                    } as InputProps,
                });

                // Act
                await page.focus('pie-input');
                await page.keyboard.press('ArrowRight'); // Move cursor to end of input so we don't delete the whole value
                await page.keyboard.press('Backspace'); // Delete the last character to trigger an input event - this should trigger the validity state update

                const isInvalid = await page.evaluate(() => document.querySelector('pie-input')?.validity.tooLong);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be valid state if the max length is not exceeded', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        maxlength: 3,
                    } as InputProps,
                });

                // Act
                await component.type('tes');

                const isValid = await page.evaluate(() => document.querySelector('pie-input')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('autocomplete', () => {
            test('should not render an autocomplete attribute on the input element if no autocomplete provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('autocomplete'))).toBe(null);
            });

            test('should apply the autocomplete prop to the HTML input rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        autocomplete: 'on',
                    } as InputProps,
                });

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('autocomplete'))).toBe('on');
            });
        });

        test.describe('placeholder', () => {
            test('should not render a placeholder attribute on the input element if no placeholder provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('placeholder'))).toBe(null);
            });

            test('should apply the placeholder prop to the HTML input rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        placeholder: 'Test Placeholder',
                    } as InputProps,
                });

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('placeholder'))).toBe('Test Placeholder');
            });
        });

        test.describe('autoFocus', () => {
            test('should focus the component when autoFocus is `true`', async ({ page }) => {
                // Arrange
                // Setting the content this way rather than a mount call triggers the autofocus behaviour immediately
                await page.setContent('<pie-input data-testid="testInput" type="text" autofocus></pie-input>');

                // Act
                const inputLocator = await page.getByTestId('testInput');

                // Assert
                await expect(inputLocator).toBeFocused();
            });

            test('should not focus the component when autoFocus is not provided', async ({ page }) => {
                // Arrange
                // Setting the content this way rather than a mount call triggers the autofocus behaviour immediately
                await page.setContent('<pie-input data-testid="testInput" type="text"></pie-input>');

                // Act
                const inputLocator = await page.getByTestId('testInput');

                // Assert
                await expect(inputLocator).not.toBeFocused();
            });
        });

        test.describe('inputmode', () => {
            test('should not render an inputmode attribute on the input element if no inputmode provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('inputmode'))).toBe(null);
            });

            test('should apply the inputmode prop to the HTML input rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {
                    props: {
                        inputmode: 'numeric',
                    } as InputProps,
                });

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('inputmode'))).toBe('numeric');
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

        test.describe('change', () => {
            test('should dispatch a change event when the input value changes', async ({ mount, page }) => {
                // Arrange
                const messages: CustomEvent[] = [];

                await mount(PieInput, {
                    props: {} as InputProps,
                    on: {
                        change: (data: CustomEvent) => {
                            messages.push(data);
                        },
                    },
                });

                const input = page.locator('pie-input');

                // Act
                await input.type('test');
                await page.keyboard.press('Tab');

                // Assert
                expect(messages.length).toEqual(1);
            });

            test('should dispatch a custom event that contains the original native event', async ({ mount, page }) => {
                // Arrange
                const messages: CustomEvent[] = [];
                const expectedMessages = [{ sourceEvent: { isTrusted: true } }];

                await mount(PieInput, {
                    props: {} as InputProps,
                    on: {
                        change: (data: CustomEvent) => {
                            messages.push(data);
                        },
                    },
                });

                const input = page.locator('pie-input');

                // Act
                await input.type('test');
                await page.keyboard.press('Tab'); // Change events on inputs are triggered when they lose focus after the value was changed

                // Assert
                expect(messages).toStrictEqual(expectedMessages);
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the value of username in the FormData object when submitted', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-input type="text" name="username"></pie-input>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson""></div>
            `);

            // Setup form data extraction
            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-input').type('test');
            await page.click('button[type="submit"]');
            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj.username).toBe('test');
        });

        test('should submit the updated value if the value prop is changed programmatically', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-input type="text" name="username"></pie-input>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson""></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-input').type('test');

            await page.evaluate(() => {
                const input = document.querySelector('pie-input') as PieInput;
                input.value = 'test2';
            });

            await page.click('button[type="submit"]');

            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj.username).toBe('test2');
        });
    });
});
