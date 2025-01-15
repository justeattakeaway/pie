import { test, expect } from '@sand4rt/experimental-ct-web';

import { setupFormDataExtraction, getFormDataObject } from '@justeattakeaway/pie-webc-testing/src/helpers/form-helpers.ts';

import { PieRadio } from '../../src/index.ts';
import { type RadioProps } from '../../src/defs.ts';

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
            props: {
                value: 'testValue',
            } as RadioProps,
            slots,
        });

        // Act
        const radio = page.locator(componentSelector);

        // Assert
        expect(radio).toBeVisible();
    });

    test.describe('props', () => {
        test.describe('value', () => {
            test('should apply the value attribute to the input', async ({ mount }) => {
                // Arrange
                const component = await mount(PieRadio, {
                    props: {
                        value: 'testValue',
                    } as RadioProps,
                });

                // Act
                const radio = component.locator(inputSelector);

                // Assert
                expect((await radio.inputValue())).toBe('testValue');
            });
        });

        test.describe('name', () => {
            test('should not render a name attr on the radio element if no name provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieRadio, {
                    props: {
                        value: 'testValue',
                    },
                });

                // Act
                const radio = component.locator(inputSelector);

                // Assert
                expect((await radio.getAttribute('name'))).toBe(null);
            });

            test('should apply the name attr to the radio', async ({ mount }) => {
                // Arrange
                const component = await mount(PieRadio, {
                    props: {
                        name: 'test',
                        value: 'testValue',
                    } as RadioProps,
                });

                // Act
                const radio = component.locator(inputSelector);

                // Assert
                expect((await radio.getAttribute('name'))).toBe('test');
            });
        });

        test.describe('checked', () => {
            test('should check the radio when true', async ({ page, mount }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        checked: true,
                        value: 'testValue',
                    } as RadioProps,
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
                    props: {
                        checked: false,
                        value: 'testValue',
                    } as RadioProps,
                    slots,
                });

                // Act
                const radio = page.locator(inputSelector);

                // Assert
                await expect(radio).not.toBeChecked();
            });

            test('should keep aria-checked in sync with the checked prop', async ({ page, mount }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        checked: false,
                        value: 'testValue',
                    } as RadioProps,
                    slots,
                });

                // Act
                const radio = page.locator('pie-radio');

                // Assert initial state
                await expect(radio).toHaveAttribute('aria-checked', 'false');

                // Update checked prop to true
                await page.evaluate(() => {
                    const radioComponent = document.querySelector('pie-radio');
                    if (radioComponent) radioComponent.checked = true;
                });

                // Assert updated state
                await expect(radio).toHaveAttribute('aria-checked', 'true');

                // Update checked prop back to false
                await page.evaluate(() => {
                    const radioComponent = document.querySelector('pie-radio');
                    if (radioComponent) radioComponent.checked = false;
                });

                // Assert reverted state
                await expect(radio).toHaveAttribute('aria-checked', 'false');
            });
        });

        test.describe('disabled', () => {
            test('should enable the radio when false', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        disabled: false,
                        value: 'testValue',
                    } as RadioProps,
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
                    props: {
                        disabled: true,
                        value: 'testValue',
                    } as RadioProps,
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
                const component = await mount(PieRadio, {
                    props: {
                        value: 'testValue',
                    } as RadioProps,
                });

                // Act
                const radio = component.locator(inputSelector);

                // Assert
                expect((await radio.getAttribute('required'))).toBe(null);
            });

            test('should apply the required attribute to the input element', async ({ mount }) => {
                // Arrange
                const component = await mount(PieRadio, {
                    props: {
                        required: true,
                        value: 'testValue',
                    } as RadioProps,
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
                        value: 'testValue',
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
                        value: 'testValue',
                    } as RadioProps,
                });

                // Act
                await component.locator(inputSelector).click();
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);
                const isValueMissing = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valueMissing);

                // Assert
                expect(isValid).toBe(true);
                expect(isValueMissing).toBe(false);
            });

            test('should be in an invalid state if the radio is required but unchecked', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        checked: false,
                        required: true,
                        name: 'radio',
                        value: 'testValue',
                    } as RadioProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);
                const isValueMissing = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valueMissing);

                // Assert
                expect(isValid).toBe(false);
                expect(isValueMissing).toBe(true);
            });

            test('should be in a valid state if the radio is checked but not required', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        checked: true,
                        required: false,
                        name: 'radio',
                        value: 'testValue',
                    } as RadioProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);
                const isValueMissing = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valueMissing);

                // Assert
                expect(isValid).toBe(true);
                expect(isValueMissing).toBe(false);
            });

            test('should be in a valid state if the radio is unchecked and not required', async ({ mount, page }) => {
                // Arrange
                await mount(PieRadio, {
                    props: {
                        required: false,
                        checked: false,
                        name: 'radio',
                        value: 'testValue',
                    } as RadioProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valid);
                const isValueMissing = await page.evaluate(() => document.querySelector('pie-radio')?.validity.valueMissing);

                // Assert
                expect(isValid).toBe(true);
                expect(isValueMissing).toBe(false);
            });
        });
    });

    test.describe('Events', () => {
        test.describe('change', () => {
            test.describe('when radio is clicked', () => {
                test('should dispatch a change event that contains the original native event', async ({ mount }) => {
                    // Arrange
                    const messages: CustomEvent[] = [];
                    const expectedMessages = [{ sourceEvent: { isTrusted: true } }];

                    const component = await mount(PieRadio, {
                        props: {
                            value: 'testValue',
                        } as RadioProps,
                        on: {
                            change: (data: CustomEvent) => {
                                messages.push(data);
                            },
                        },
                    });

                    // Act
                    await component.locator(inputSelector).click();

                    // Assert
                    expect(messages.length).toEqual(1);
                    expect(messages).toStrictEqual(expectedMessages);
                });
            });

            test.describe('when inside a form which is reset', () => {
                test('should dispatch a change event', async ({ page }) => {
                    // Arrange
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <pie-radio name="testName" value="testValue" checked></pie-radio>
                            <button type="reset">Reset</button>
                        </form>
                        <div id="eventsContainer"></div>
                    `);

                    await page.evaluate(() => {
                        const radio = document.querySelector('pie-radio') as PieRadio;
                        const eventsContainer = document.querySelector('#eventsContainer') as HTMLDivElement;

                        radio.addEventListener('change', () => {
                            const el = document.createElement('div');
                            el.innerText = 'change event fired';
                            eventsContainer.appendChild(el);
                        });
                    });

                    // Act
                    await page.click('button[type="reset"]');

                    const eventElements = await page.evaluate(() => {
                        const events = document.querySelectorAll('#eventsContainer > div');
                        return Array.from(events).map((el) => el.innerHTML);
                    });

                    // Assert
                    expect(eventElements).toHaveLength(1);
                    expect(eventElements[0]).toBe('change event fired');
                });

                test('should not dispatch a change event if the value has not changed', async ({ page }) => {
                    // Arrange
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <pie-radio name="testName" value="testValue" checked defaultChecked></pie-radio>
                            <button type="reset">Reset</button>
                        </form>
                        <div id="eventsContainer"></div>
                    `);

                    await page.evaluate(() => {
                        const radio = document.querySelector('pie-radio') as PieRadio;
                        const eventsContainer = document.querySelector('#eventsContainer') as HTMLDivElement;

                        radio.addEventListener('change', () => {
                            const el = document.createElement('div');
                            el.innerText = 'change event fired';
                            eventsContainer.appendChild(el);
                        });
                    });

                    // Act
                    await page.click('button[type="reset"]');

                    const eventElements = await page.evaluate(() => {
                        const events = document.querySelectorAll('#eventsContainer > div');
                        return Array.from(events).map((el) => el.innerHTML);
                    });

                    // Assert
                    expect(eventElements).toHaveLength(0);
                });
            });
        });
    });

    test.describe('Form integration', () => {
        test('should correctly set the name and value of the radio in the FormData object when submitted', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-radio name="testName" value="testValue"></pie-radio>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson""></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-radio').click();
            await page.click('button[type="submit"]');
            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj).toStrictEqual({ testName: 'testValue' });
        });

        test('should submit the updated checked state if the checked attribute is changed programmatically', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                <pie-radio name="testName" value="testValue"></pie-radio>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson""></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-radio').click();

            await page.evaluate(() => {
                const radio = document.querySelector('pie-radio') as PieRadio;
                radio.checked = false;
                return radio;
            });

            await page.click('button[type="submit"]');

            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj).toStrictEqual({});
        });

        [true, false].forEach((checked) => {
            test(`should not submit the value if the input is disabled when checked is ${checked}`, async ({ page }) => {
                // Arrange
                await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <pie-radio
                            name="testName"
                            value="testValue"
                            disabled
                            ${checked ? 'checked' : ''}>
                        </pie-radio>
                        <button type="submit">Submit</button>
                    </form>
                    <div id="formDataJson""></div>
                `);
                await setupFormDataExtraction(page, '#testForm', '#formDataJson');

                // Act
                await page.click('button[type="submit"]');
                const formDataObj = await getFormDataObject(page, '#formDataJson');

                // Assert
                expect(formDataObj).toStrictEqual({});
            });
        });

        [true, false].forEach((checked) => {
            test(`should not submit the value inside a disabled fieldset when checked is ${checked}`, async ({ page }) => {
                // Arrange
                await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <fieldset disabled>
                            <pie-radio
                                name="testName"
                                value="testValue"
                                ${checked ? 'checked' : ''}>
                            </pie-radio>
                        </fieldset>
                        <button type="submit">Submit</button>
                    </form>
                    <div id="formDataJson""></div>
                `);

                await setupFormDataExtraction(page, '#testForm', '#formDataJson');

                // Act
                await page.click('button[type="submit"]');

                const formDataObj = await getFormDataObject(page, '#formDataJson');

                // Assert
                expect(formDataObj).toStrictEqual({});
            });
        });

        test.describe('when the form is reset', () => {
            test.describe('and defaultChecked is true', () => {
                [true, false].forEach((defaultChecked) => {
                    const checked = !defaultChecked;

                    test(`should reset the radio to its default state when defaultChecked is ${defaultChecked} and checked is ${checked}`, async ({ page }) => {
                        // Arrange
                        await page.setContent(`
                            <form id="testForm" action="/foo" method="POST">
                                <pie-radio
                                    name="testName"
                                    value="testValue"
                                    ${defaultChecked ? 'defaultChecked' : ''}
                                    ${checked ? 'checked' : ''}>
                                </pie-radio>
                                <button type="reset">Reset</button>
                            </form>`);

                        let isChecked = await page.evaluate(() => document.querySelector('pie-radio')?.checked);
                        expect.soft(isChecked).toBe(checked);

                        // Act
                        await page.click('button[type="reset"]');

                        // Assert
                        isChecked = await page.evaluate(() => document.querySelector('pie-radio')?.checked);
                        expect(isChecked).toBe(defaultChecked);
                    });
                });
            });
        });
    });
});
