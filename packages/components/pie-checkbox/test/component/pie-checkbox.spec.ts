
import { setupFormDataExtraction, getFormDataObject } from '@justeattakeaway/pie-webc-testing/src/helpers/form-helpers.ts';
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieAssistiveText } from '@justeattakeaway/pie-assistive-text';
import { PieCheckbox, CheckboxProps } from '../../src/index.ts';
import { statusTypes } from '../../src/defs.ts';

const inputSelector = '[data-test-id="checkbox-input"]';
const labelSelector = '[data-test-id="checkbox-component"]';
const assistiveTextSelector = '[data-test-id="pie-checkbox-assistive-text"]';

test.describe('PieCheckbox - Component tests', () => {
    // IMPORTANT: Mounting and Unmounting the component before each test ensures that any tests that do not explicitly
    // mount the component will still have it available in Playwright's cache (loaded and registered in the test browser)
    test.beforeEach(async ({ mount }) => {
        const component = await mount(PieCheckbox);
        await component.unmount();

        const assistiveTextComponent = await mount(PieAssistiveText);
        await assistiveTextComponent.unmount();
    });

    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieCheckbox, {
            props: {} as CheckboxProps,
        });

        // Act
        const checkbox = page.locator(inputSelector);

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
                const checkbox = component.locator(inputSelector);

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
                const checkbox = component.locator(inputSelector);

                // Assert
                expect((await checkbox.inputValue())).toBe('test');
            });
        });

        test.describe('name', () => {
            test('should not render a name attr on the checkbox element if no name provided', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {});

                // Act
                const checkbox = component.locator(inputSelector);

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
                const checkbox = component.locator(inputSelector);

                // Assert
                expect((await checkbox.getAttribute('name'))).toBe('test');
            });
        });

        test.describe('checked', () => {
            test('should default to false', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {});

                // Act
                const checkbox = component.locator(inputSelector);

                // Assert
                expect(await checkbox.isChecked()).toBe(false);
            });

            test('should be unchecked if the checked prop is false', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        checked: false,
                    } as CheckboxProps,
                });

                // Act
                const checkbox = component.locator(inputSelector);

                // Assert
                expect(await checkbox.isChecked()).toBe(false);
            });

            test('should be checked if the checked prop is true', async ({ mount }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        checked: true,
                    } as CheckboxProps,
                });

                // Act
                const checkbox = component.locator(inputSelector);

                // Assert
                expect(await checkbox.isChecked()).toBe(true);
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
                    const checkbox = component.locator(inputSelector);

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
                    const checkbox = component.locator(inputSelector);

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
                const checkbox = component.locator(inputSelector);

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
                const checkbox = component.locator(inputSelector);

                // Assert
                expect((await checkbox.getAttribute('required'))).toBe('');
            });

            test('should be in a valid state if the checkbox is required and checked', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {
                    props: {
                        checked: true,
                        required: true,
                    } as CheckboxProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the checkbox is required and checked manually', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        required: true,
                        checked: false,
                    } as CheckboxProps,
                });

                // Act
                await component.locator(labelSelector).click();
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in an invalid state if the checkbox is required but unchecked', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {
                    props: {
                        required: true,
                        checked: false,
                    } as CheckboxProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(false);
            });

            test('should be in an invalid state if the checkbox is required and unchecked manually', async ({ mount, page }) => {
                // Arrange
                const component = await mount(PieCheckbox, {
                    props: {
                        required: true,
                        checked: true,
                    } as CheckboxProps,
                });

                // Act
                await component.locator(labelSelector).click();
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(false);
            });

            test('should be in a valid state if the checkbox is checked but not required', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {
                    props: {
                        required: false,
                        checked: true,
                    } as CheckboxProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });

            test('should be in a valid state if the checkbox is unchecked and not required', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {
                    props: {
                        required: false,
                        checked: false,
                    } as CheckboxProps,
                });

                // Act
                const isValid = await page.evaluate(() => document.querySelector('pie-checkbox')?.validity.valid);

                // Assert
                expect(isValid).toBe(true);
            });
        });

        test.describe('assistiveText', () => {
            test('should not render the assistive text component if the prop is not provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {});

                // Act
                const assistiveText = page.locator(assistiveTextSelector);

                // Assert
                expect(assistiveText).not.toBeVisible();
            });

            test('should apply the "default" variant attribute if no status is provided', async ({ mount, page }) => {
                // Arrange
                await mount(PieCheckbox, {
                    props: {
                        assistiveText: 'Assistive text',
                    } as PieCheckbox,
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
                        await mount(PieCheckbox, {
                            props: {
                                assistiveText: 'Assistive text',
                                status,
                            } as PieCheckbox,
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
                test('should contain an ID associated with the checkbox element for a11y', async ({ mount, page }) => {
                    // Arrange
                    const component = await mount(PieCheckbox, {
                        props: {
                            assistiveText: 'Assistive text',
                        } as PieCheckbox,
                    });

                    // Act
                    const checkbox = component.locator(inputSelector);
                    const assistiveText = page.locator(assistiveTextSelector);

                    const componentAttribute = await checkbox.getAttribute('aria-describedby');

                    // Assert
                    await expect(assistiveText).toHaveAttribute('id', 'assistive-text');
                    expect(componentAttribute).toBe('assistive-text');
                });
            });
        });
    });

    test.describe('Attributes:', () => {
        test.describe('aria-describedby', () => {
            test.describe('when `assistiveText` is not defined', () => {
                test('should not render the attribute', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieCheckbox, {
                        props: {} as CheckboxProps,
                    });

                    // Act
                    const checkbox = component.locator(inputSelector);

                    const componentAttribute = await checkbox.getAttribute('aria-describedby');

                    // Assert
                    expect(componentAttribute).toBeNull();
                });
            });

            test.describe('when `assistiveText` is defined', () => {
                test('should render the attribute correctly with the correct value', async ({ mount }) => {
                    // Arrange
                    const component = await mount(PieCheckbox, {
                        props: {
                            assistiveText: 'Assistive text',
                        } as CheckboxProps,
                    });

                    // Act
                    const checkbox = component.locator(inputSelector);

                    const componentAttribute = await checkbox.getAttribute('aria-describedby');

                    // Assert
                    expect(componentAttribute).toBe('assistive-text');
                });
            });
        });
    });

    test.describe('Events', () => {
        test.describe('change', () => {
            test('should dispatch a change event when checkbox is clicked that contains the original native event', async ({ mount }) => {
                // Arrange
                const messages: CustomEvent[] = [];
                const expectedMessages = [{ sourceEvent: { isTrusted: true } }];

                const component = await mount(PieCheckbox, {
                    props: {} as CheckboxProps,
                    on: {
                        change: (data: CustomEvent) => {
                            messages.push(data);
                        },
                    },
                });

                // Act
                await component.locator(labelSelector).click();

                // Assert
                expect(messages.length).toEqual(1);
                expect(messages).toStrictEqual(expectedMessages);
            });

            test('should dispatch a change event when inside a form which is reset', async ({ page }) => {
                // Arrange
                await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <pie-checkbox name="testName" checked></pie-checkbox>
                        <button type="reset">Reset</button>
                    </form>
                    <div id="eventsContainer"></div>
                `);

                await page.evaluate(() => {
                    const checkbox = document.querySelector('pie-checkbox') as PieCheckbox;
                    const eventsContainer = document.querySelector('#eventsContainer') as HTMLDivElement;

                    checkbox.addEventListener('change', () => {
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

            test('should not dispatch a change event when inside a form which is reset if the value has not changed', async ({ page }) => {
                // Arrange
                await page.setContent(`
                    <form id="testForm" action="/foo" method="POST">
                        <pie-checkbox name="testName" checked defaultChecked></pie-checkbox>
                        <button type="reset">Reset</button>
                    </form>
                    <div id="eventsContainer"></div>
                `);

                await page.evaluate(() => {
                    const checkbox = document.querySelector('pie-checkbox') as PieCheckbox;
                    const eventsContainer = document.querySelector('#eventsContainer') as HTMLDivElement;

                    checkbox.addEventListener('change', () => {
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

    test.describe('Form integration', () => {
        test('should correctly set the name and value of the checkbox in the FormData object when submitted', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-checkbox name="testName"></pie-checkbox>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson""></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-checkbox').click();
            await page.click('button[type="submit"]');
            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj).toStrictEqual({ testName: 'on' });
        });

        test('should submit the updated checked state if the checked attribute is changed programmatically', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                <pie-checkbox name="testName"></pie-checkbox>
                    <button type="submit">Submit</button>
                </form>
                <div id="formDataJson""></div>
            `);

            await setupFormDataExtraction(page, '#testForm', '#formDataJson');

            // Act
            await page.locator('pie-checkbox').click();

            await page.evaluate(() => {
                const checkbox = document.querySelector('pie-checkbox') as PieCheckbox;
                checkbox.checked = false;
                return checkbox;
            });

            await page.click('button[type="submit"]');

            const formDataObj = await getFormDataObject(page, '#formDataJson');

            // Assert
            expect(formDataObj).toStrictEqual({});
        });

        test('should not submit the value if checkbox is disabled', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-checkbox name="testName" disabled></pie-checkbox>
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

        test('should not submit the value if checkbox is disabled, even if checked', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <pie-checkbox name="testName" checked disabled></pie-checkbox>
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

        test('should not submit the value inside a disabled fieldset', async ({ page }) => {
            // Arrange
            await page.setContent(`
                <form id="testForm" action="/foo" method="POST">
                    <fieldset disabled>
                        <pie-checkbox name="testName"></pie-checkbox>
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

        test.describe('when the form is reset', () => {
            test.describe('and defaultChecked is true', () => {
                test('should reset the checkbox to a checked state', async ({ page }) => {
                    // Arrange
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <pie-checkbox name="testName" defaultChecked></pie-checkbox>
                            <button type="reset">Reset</button>
                        </form>
                    `);

                    let isChecked = await page.evaluate(() => document.querySelector('pie-checkbox')?.checked);
                    expect.soft(isChecked).toBe(false);

                    // Act
                    await page.click('button[type="reset"]');

                    // Assert
                    isChecked = await page.evaluate(() => document.querySelector('pie-checkbox')?.checked);
                    expect(isChecked).toBe(true);
                });
            });

            test.describe('and defaultChecked is false', () => {
                test('should reset the checkbox to its default state', async ({ page }) => {
                    // Arrange
                    await page.setContent(`
                        <form id="testForm" action="/foo" method="POST">
                            <pie-checkbox name="testName" checked></pie-checkbox>
                            <button type="reset">Reset</button>
                        </form>
                    `);

                    let isChecked = await page.evaluate(() => document.querySelector('pie-checkbox')?.checked);
                    expect.soft(isChecked).toBe(true);

                    // Act
                    await page.click('button[type="reset"]');

                    // Assert
                    isChecked = await page.evaluate(() => document.querySelector('pie-checkbox')?.checked);
                    expect(isChecked).toBe(false);
                });
            });
        });
    });
});
