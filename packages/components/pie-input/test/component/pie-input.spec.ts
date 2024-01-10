
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
            test('should default to an empty string if no name prop provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieInput, {});

                // Act
                const input = component.locator('input');

                // Assert
                expect((await input.getAttribute('name'))).toBe('');
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

    test.describe('Form integration', () => {
        test('should appear within the form data object when the form is submitted', async ({ page }) => {
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
    });
});
