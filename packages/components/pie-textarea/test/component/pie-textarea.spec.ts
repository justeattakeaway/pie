import { expect, test } from '@sand4rt/experimental-ct-web';
import {
    getFormDataObject,
    setupFormDataExtraction,
} from '@justeattakeaway/pie-webc-testing/src/helpers/form-helpers.ts';
import { PieFormLabel } from '@justeattakeaway/pie-form-label';
import { PieTextarea, TextareaProps } from '../../src/index.ts';

import { statusTypes } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-textarea"]';
const componentWrapperSelector = '[data-test-id="pie-textarea-wrapper"]';
const assistiveTextSelector = '[data-test-id="pie-textarea-assistive-text"]';

test.describe('PieTextarea - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieTextarea);
        await component.unmount();

        const label = await mount(PieFormLabel);
        await label.unmount();
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

        test.describe('value', () => {
            test('should default to an empty string if no value property is provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {});

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.inputValue())).toBe('');
            });

            test('the value property should be applied to the rendered HTML textarea element', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        value: 'testValue',
                    } as TextareaProps,
                });

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.inputValue())).toBe('testValue');
            });
        });

        test.describe('name', () => {
            test('textarea element should not include a name attribute if no name is provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {});

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.getAttribute('name'))).toBe(null);
            });

            test('should apply the name property to the rendered HTML textarea element', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        name: 'testName',
                    } as TextareaProps,
                });

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.getAttribute('name'))).toBe('testName');
            });
        });

        test.describe('autocomplete', () => {
            test('should not render an autocomplete attribute on the textarea element if no autocomplete is provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {});

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.getAttribute('autocomplete'))).toBe(null);
            });

            test('autocomplete property should be applied to the rendered HTML textarea element', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        autocomplete: 'on',
                    } as TextareaProps,
                });

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.getAttribute('autocomplete'))).toBe('on');
            });
        });

        test.describe('autoFocus', () => {
            test('should focus the component when the autoFocus property is `true`', async ({ page }) => {
                // Arrange
                // Setting the content this way rather than a mount call triggers the autofocus behaviour immediately
                await page.setContent('<pie-textarea data-test-id="testTextarea" autofocus></pie-textarea>');

                // Act
                const textareaLocator = page.getByTestId('testTextarea');

                // Assert
                await expect(textareaLocator).toBeFocused();
            });

            test('should not focus the component when the autoFocus property is not provided', async ({ page }) => {
                // Arrange
                // Setting the content this way rather than a mount call triggers the autofocus behaviour immediately
                await page.setContent('<pie-textarea data-test-id="testTextarea"></pie-textarea>');

                // Act
                const textareaLocator = page.getByTestId('testTextarea');

                // Assert
                await expect(textareaLocator).not.toBeFocused();
            });
        });

        test.describe('readonly', () => {
            test('should be able to edit the component value when readonly property is set to `false`', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        readonly: false,
                        value: 'testValue',
                    } as TextareaProps,
                });

                // Act
                await component.type(' newValue');

                // Assert
                expect((await component.locator('textarea').inputValue())).toBe('testValue newValue');
            });

            test('should not be able to edit the component value when readonly property is set to `true`', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        readonly: true,
                        value: 'testValue',
                    } as TextareaProps,
                });

                // Act
                await component.type('newValue');

                // Assert
                expect((await component.locator('textarea').inputValue())).toBe('testValue');
            });
        });

        test.describe('required', () => {
            test('should not render the required property on the textarea element if no required property is provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {});

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.getAttribute('required'))).toBe(null);
            });

            test('should apply the property property to the HTML textarea rendered', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        required: true,
                    } as TextareaProps,
                });

                // Act
                const textarea = component.locator('textarea');

                // Assert
                expect((await textarea.getAttribute('required'))).toBe('');
            });

            test('should be in an invalid `valueMissing` state if the textarea is empty and required property is set to `true`', async ({ mount, page }) => {
                // Arrange
                await mount(PieTextarea, {
                    props: {
                        required: true,
                    } as TextareaProps,
                });

                // Act
                const isInvalid = await page.evaluate(() => document.querySelector('pie-textarea')?.validity.valueMissing);

                // Assert
                expect(isInvalid).toBe(true);
            });

            test('should be in a valid state if the textarea is not empty and required property is set to `true`', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        required: true,
                    } as TextareaProps,
                });

                // Act
                await component.type('test');

                const isValid = await page.evaluate(() => document.querySelector('pie-textarea')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the textarea has a value property and required property is set to `true`', async ({ mount, page }) => {
                // Arrange
                await mount(PieTextarea, {
                    props: {
                        required: true,
                        value: 'testValue',
                    } as TextareaProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-textarea')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the textarea is empty and required property is set to `true`, but textarea is disabled', async ({ mount, page }) => {
                // Arrange
                await mount(PieTextarea, {
                    props: {
                        required: true,
                        disabled: true,
                    } as TextareaProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-textarea')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('maxLength', () => {
            test('should not display a form label when the label is absent but maxLength is provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        maxLength: 10,
                    } as TextareaProps,
                });

                // Act
                const labelNodes = component.locator('pie-form-label');

                // Assert
                await expect(labelNodes).toHaveCount(0);
            });

            test('should not display a maxLength when label is provided but no maxLength', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        label: 'foo label',
                    } as TextareaProps,
                });

                // Act
                const label = component.getByText('foo label');
                const maxLengthCounterNodes = component.getByTestId('pie-form-label-trailing');

                // Assert
                await expect(label).toBeVisible();
                await expect(maxLengthCounterNodes).toHaveCount(0);
            });

            test('should not display a maxLength when label is provided and maxLength is 0', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        label: 'foo label',
                        maxLength: 0,
                    } as TextareaProps,
                });

                // Act
                const label = component.getByText('foo label');
                const maxLengthCounterNodes = component.getByTestId('pie-form-label-trailing');

                // Assert
                await expect(label).toBeVisible();
                await expect(maxLengthCounterNodes).toHaveCount(0);
            });

            test('should display maxLength when label is present and maxLength provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        maxLength: 10,
                        label: 'foo label',
                    } as TextareaProps,
                });

                // Act
                const maxLengthCounter = component.getByTestId('pie-form-label-trailing');

                // Assert
                await expect(maxLengthCounter).toBeVisible();
                await expect(maxLengthCounter).toHaveText('0/10');
            });

            test('should update the displayed maxLength as a user types', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        maxLength: 10,
                        label: 'foo label',
                    } as TextareaProps,
                });

                // Act & Assert
                const maxLengthCounter = component.getByTestId('pie-form-label-trailing');
                await expect(maxLengthCounter).toBeVisible();
                await expect(maxLengthCounter).toHaveText('0/10');

                await component.type('12345');
                await expect(maxLengthCounter).toHaveText('5/10');
            });

            test('should update the displayed maxLength as a user deletes', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        maxLength: 10,
                        label: 'foo label',
                    } as TextareaProps,
                });

                // Act & Assert
                const maxLengthCounter = component.getByTestId('pie-form-label-trailing');
                await expect(maxLengthCounter).toBeVisible();
                await expect(maxLengthCounter).toHaveText('0/10');

                await component.type('12345');
                await expect(maxLengthCounter).toHaveText('5/10');

                await component.press('Backspace');
                await expect(maxLengthCounter).toHaveText('4/10');
            });

            test('should not let a user type more than the maxLength', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        maxLength: 5,
                        label: 'foo label',
                    } as TextareaProps,
                });

                // Act & Assert
                const maxLengthCounter = component.getByTestId('pie-form-label-trailing');
                await expect(maxLengthCounter).toBeVisible();
                await expect(maxLengthCounter).toHaveText('0/5');

                await component.type('123456');
                await expect(maxLengthCounter).toHaveText('5/5');
                const textareaContent = await page.locator(componentSelector).inputValue();
                expect(textareaContent).toBe('12345');
            });

            test('should not let a user programmatically set value more than the maxLength', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        maxLength: 5,
                        label: 'foo label',
                        value: '123456',
                    } as TextareaProps,
                });

                // Act & Assert
                const maxLengthCounter = component.getByTestId('pie-form-label-trailing');
                await expect(maxLengthCounter).toBeVisible();
                await expect(maxLengthCounter).toHaveText('5/5');
                const textareaContent = await page.locator(componentSelector).inputValue();
                expect(textareaContent).toBe('12345');
            });
        });

        test.describe('label', () => {
            test('should not render a label when the label is absent', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {});

                // Act
                const labelNodes = component.locator('pie-form-label');

                // Assert
                await expect(labelNodes).toHaveCount(0);
            });

            test('should render a label when the label is present', async ({ mount }) => {
                // Arrange
                const component = await mount(PieTextarea, {
                    props: {
                        label: 'foo label',
                    } as TextareaProps,
                });

                // Act
                const label = component.getByText('foo label');

                // Assert
                await expect(label).toBeVisible();
            });
        });

        test.describe('assistiveText', () => {
            test('should NOT render the assistive-text component if this property is not provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieTextarea, {});

                // Act
                const assistiveText = page.locator(assistiveTextSelector);

                // Assert
                expect(assistiveText).not.toBeVisible();
            });

            test('should apply the `default` variant attribute if no status is provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieTextarea, {
                    props: {
                        assistiveText: 'Assistive text',
                    } as TextareaProps,
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
                    test(`should render the assistive-text component with the ${status} variant`, async ({ mount, page }) => {
                        // Arrange
                        await mount(PieTextarea, {
                            props: {
                                assistiveText: 'Assistive text',
                                status,
                            } as TextareaProps,
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

            test.describe('Assistive text: ID attribute', () => {
                test('should contain an ID associated the textarea element for a11y', async ({ mount, page }) => {
                    // Arrange
                    await mount(PieTextarea, {
                        props: {
                            assistiveText: 'Assistive text',
                        } as TextareaProps,
                    });

                    // Act
                    const assistiveText = page.locator(assistiveTextSelector);

                    // Assert
                    await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                });
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the value of a description field in the FormData object when the form is submitted', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-textarea name="description"></pie-textarea>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson"></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-textarea').type('testValue');
            await page.click('button[type="submit"]');
            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj.description).toBe('testValue');
        });

        test('should submit the updated value if the value property is changed programmatically', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-textarea name="description"></pie-textarea>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson"></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-textarea').type('testValue');

            await page.evaluate(() => {
                const textarea = document.querySelector('pie-textarea') as PieTextarea;
                textarea.value = 'newTestValue';
            });

            await page.click('button[type="submit"]');

            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj.description).toBe('newTestValue');
        });

        test('should correctly reset the textarea value when the form is reset', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-textarea name="description"></pie-textarea>
                    <button type="reset">Reset</button>
                </form>
            `);

            // Act & Assert
            await page.locator('pie-textarea').type('testValue');
            expect(await page.evaluate(() => document.querySelector('pie-textarea')?.value)).toBe('testValue');

            await page.click('button[type="reset"]');
            expect(await page.evaluate(() => document.querySelector('pie-textarea')?.value)).toBe('');
        });

        test('should correctly set the textarea value even if `defaultValue` is provided', async ({ page }) => {
            // Arrange
            await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <pie-textarea defaultValue="foo"></pie-textarea>
                        <button type="reset">Submit</button>
                    </form>
                `);

            // Act & Assert
            await page.locator('pie-textarea').type('test');
            expect(await page.evaluate(() => document.querySelector('pie-textarea')?.value)).toBe('test');
        });

        test('should correctly reset the textarea value to the `defaultValue` if one is provided when the form is reset', async ({ page }) => {
            // Arrange
            await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <pie-textarea defaultValue="foo"></pie-textarea>
                        <button type="reset">Submit</button>
                    </form>
                `);

            // Act & Assert
            await page.locator('pie-textarea').type('test');

            await page.click('button[type="reset"]');
            expect(await page.evaluate(() => document.querySelector('pie-textarea')?.value)).toBe('foo');
        });

        test('should NOT submit the value for disabled textarea elements', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-textarea name="description" value="descriptionTextareaValue" disabled></pie-textarea>
                    <pie-textarea name="comments" value="commentsTextareaValue"></pie-textarea>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson"></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.click('button[type="submit"]');

            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj).toStrictEqual({ comments: 'commentsTextareaValue' });
        });

        test('should NOT submit the value inside a disabled fieldset', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <fieldset disabled>
                        <pie-textarea name="description" value="excluded"></pie-textarea>
                    </fieldset>
                    <pie-textarea name="comments" value="included"></pie-textarea>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson"></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.click('button[type="submit"]');

            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj).toStrictEqual({
                comments: 'included',
            });
        });

        test('should NOT submit form when pressing Enter on a textarea element', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-textarea name="description" autofocus></pie-textarea>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson"></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-textarea').type('testValue');
            await page.keyboard.press('Enter');
            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj).toStrictEqual({});
        });
    });

    test.describe('Events', () => {
        test.describe('input', () => {
            test('should emit an event each time the component receives input value', async ({ mount, page }) => {
                // Arrange
                const messages: InputEvent[] = [];
                const expectedMessagesLength = 10;

                const component = await mount(PieTextarea, {
                    props: {} as PieTextarea,
                    on: {
                        input: (data: InputEvent) => {
                            messages.push(data);
                        },
                    },
                });

                const textarea = component.locator('textarea');

                // Act
                await textarea.type('testValue');
                await page.keyboard.press('Backspace');

                // Assert
                expect(messages.length).toEqual(expectedMessagesLength);
            });

            test('should provide the event target value for event listeners', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                await page.setContent(`
                    <pie-textarea></pie-textarea>
                    <div id="output"></div>
                `);

                await page.evaluate(() => {
                    const output = (document.getElementById('output') as HTMLDivElement);
                    const textarea = document.querySelector('pie-textarea');

                    textarea?.addEventListener('input', (event: Event) => {
                        output.innerText = (event.target as HTMLTextAreaElement).value;
                    });
                });

                const textarea = page.locator('pie-textarea');

                // Act
                await textarea.type('test');
                await page.keyboard.press('Backspace');

                const output = page.locator('#output');

                // Assert
                expect(await output.innerText()).toEqual(expectedMessage);
            });

            test('should correctly handle textarea including backspaces in the event.data property', async ({ page }) => {
                // Arrange
                const expectedMessage = 'tes';

                await page.setContent(`
                    <pie-textarea></pie-textarea>
                    <div id="output"></div>
                `);

                await page.evaluate(() => {
                    const output = document.getElementById('output') as HTMLDivElement;
                    const textarea = document.querySelector('pie-textarea');

                    textarea?.addEventListener('input', (event) => {
                        const { data } = event as InputEvent;
                        const currentValue = (event.target as HTMLTextAreaElement).value;

                        // If data is null, it's a deletion, so update the output to match the textarea's value
                        if (data === null) {
                            output.innerText = currentValue;
                        } else {
                            // For additions, append the data character
                            output.innerText += data;
                        }
                    });
                });

                const textarea = page.locator('pie-textarea');

                // Act
                await textarea.type('test');
                await page.keyboard.press('Backspace');

                // Assert
                expect(await page.locator('#output').innerText()).toEqual(expectedMessage);
            });
        });

        test.describe('change', () => {
            test('should dispatch a change event when the value of the textarea changes', async ({ mount, page }) => {
                // Arrange
                const messages: CustomEvent[] = [];

                await mount(PieTextarea, {
                    props: {} as TextareaProps,
                    on: {
                        change: (data: CustomEvent) => {
                            messages.push(data);
                        },
                    },
                });

                const textarea = page.locator('pie-textarea');

                // Act
                await textarea.type('testValue');
                await page.keyboard.press('Tab');

                // Assert
                expect(messages.length).toEqual(1);
            });

            test('should dispatch a custom event that contains the original native event', async ({ mount, page }) => {
                // Arrange
                const messages: CustomEvent[] = [];
                const expectedMessages = [{ sourceEvent: { isTrusted: true } }];

                await mount(PieTextarea, {
                    props: {} as TextareaProps,
                    on: {
                        change: (data: CustomEvent) => {
                            messages.push(data);
                        },
                    },
                });

                const textarea = page.locator('pie-textarea');

                // Act
                await textarea.type('testValue');
                await page.keyboard.press('Tab'); // Change events on inputs are triggered when they lose focus after the value was changed

                // Assert
                expect(messages).toStrictEqual(expectedMessages);
            });
        });
    });

    test.describe('Attributes', () => {
        test.describe('aria-describedby', () => {
            test.describe('when `assistiveText` is NOT defined', () => {
                test('should not render the attribute', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieTextarea, {
                        props: {} as TextareaProps,
                    });

                    // Act
                    const textarea = component.locator('textarea');

                    const componentAttribute = await textarea.getAttribute('aria-describedby');

                    // Assert
                    expect(componentAttribute).toBeNull();
                });
            });

            test.describe('when `assistiveText` is defined', () => {
                test('should render the attribute correctly with the correct value', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieTextarea, {
                        props: {
                            assistiveText: 'Some useful message',
                        } as TextareaProps,
                    });

                    // Act
                    const textarea = component.locator('textarea');

                    const componentAttribute = await textarea.getAttribute('aria-describedby');

                    // Assert
                    expect(componentAttribute).toBe('assistive-text');
                });
            });
        });

        test.describe('aria-invalid', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-invalid` attribute', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieTextarea, {
                        props: {
                            status: 'error',
                        } as TextareaProps,
                    });

                    // Act
                    const textarea = component.locator('textarea');

                    const componentAttribute = await textarea.getAttribute('aria-invalid');

                    // Assert
                    expect(componentAttribute).toBeDefined();
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should render the `aria-invalid` with a value of `false`', async ({ mount }) => {
                        // Arrange
                        const component = await mount(PieTextarea, {
                            props: { status } as TextareaProps,
                        });

                        // Act
                        const textarea = component.locator('textarea');

                        const componentAttribute = await textarea.getAttribute('aria-invalid');

                        // Assert
                        expect(componentAttribute).toBe('false');
                    });
                });
            });
        });

        test.describe('aria-errormessage', () => {
            test.describe('when the component status is set to `error`', () => {
                test('should render the `aria-errormessage` attribute', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieTextarea, {
                        props: {
                            status: 'error',
                        } as TextareaProps,
                    });

                    // Act
                    const textarea = component.locator('textarea');

                    const componentAttribute = await textarea.getAttribute('aria-errormessage');

                    // Assert
                    expect(componentAttribute).toBeDefined();
                });
            });

            statusTypes.filter((status) => status !== 'error').forEach((status) => {
                test.describe(`when the component status is set to "${status}"`, () => {
                    test('should not render the `aria-errormessage` attribute', async ({ mount }) => {
                        // Arrange
                        const component = await mount(PieTextarea, {
                            props: { status } as TextareaProps,
                        });

                        // Act
                        const textarea = component.locator('textarea');

                        const componentAttribute = await textarea.getAttribute('aria-errormessage');

                        // Assert
                        expect(componentAttribute).toBeNull();
                    });
                });
            });
        });
    });
});
