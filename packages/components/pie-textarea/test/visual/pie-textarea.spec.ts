import { test, expect } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { setRTL } from '@justeattakeaway/pie-webc-testing/src/helpers/set-rtl-direction.ts';

import { PieFormLabel } from '@justeattakeaway/pie-form-label';
import { PieAssistiveText } from '@justeattakeaway/pie-assistive-text';

import { sizes } from '../../src/defs.ts';
import { PieTextarea } from '../../src/index.ts';

const componentSelector = '[data-test-id="pie-textarea"]';

const readingDirections = ['LTR', 'RTL'];

const renderTestPieTextarea = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.value) attributes += ` value="${propVals.value}"`;
    if (propVals.status) attributes += ` status="${propVals.status}"`;
    if (propVals.assistiveText) attributes += ` assistiveText="${propVals.assistiveText}"`;

    return `<pie-textarea${attributes}></pie-textarea>`;
};

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the textarea component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const component = await mount(PieTextarea);
    await component.unmount();

    const label = await mount(PieFormLabel);
    await label.unmount();

    const assistiveTextComponent = await mount(PieAssistiveText);
    await assistiveTextComponent.unmount();
});

sizes.forEach((size) => {
    test(`should render correctly with size: ${size}`, async ({ page, mount }) => {
        await mount(PieTextarea, {
            props: {
                size,
            } as PieTextarea,
        });

        const textarea = page.locator(componentSelector);

        await expect.soft(textarea).toBeVisible();

        await percySnapshot(page, `Textarea - size: "${size}"`, percyWidths);
    });
});

test.describe('disabled', () => {
    test('should render correctly when disabled', async ({ page, mount }) => {
        await mount(PieTextarea, {
            props: {
                disabled: true,
            } as PieTextarea,
        });

        await percySnapshot(page, 'Textarea - disabled: true', percyWidths);
    });

    test('should render correctly when not disabled', async ({ page, mount }) => {
        await mount(PieTextarea, {
            props: {
                disabled: false,
            } as PieTextarea,
        });

        await percySnapshot(page, 'Textarea - disabled: false', percyWidths);
    });
});

test.describe('placeholder', () => {
    test('should render correctly when `placeholder` is passed', async ({ page, mount }) => {
        await mount(PieTextarea, {
            props: {
                placeholder: 'Placeholder',
            } as PieTextarea,
        });

        await percySnapshot(page, 'Textarea - placeholder', percyWidths);
    });
});

test.describe('readonly', () => {
    test('should render correctly when `readonly` is passed', async ({ page, mount }) => {
        await mount(PieTextarea, {
            props: {
                readonly: true,
            } as PieTextarea,
        });

        await percySnapshot(page, 'Textarea - readonly', percyWidths);
    });
});

test.describe('Resize mode:', () => {
    test.describe('auto', () => {
        test('should render correctly with resize mode: auto', async ({ page, mount }) => {
            await mount(PieTextarea, {
                props: {
                    resize: 'auto',
                } as PieTextarea,
            });

            await percySnapshot(page, 'Textarea - resize: "auto"', percyWidths);
        });

        test('should resize the textarea vertically - @mobile', async ({ page, mount }) => {
            await mount(PieTextarea, {
                props: {
                    resize: 'auto',
                } as PieTextarea,
            });

            const textarea = await page.locator(componentSelector);

            await textarea.fill('The default height is enough for two lines of text, but it should grow if you type more.');
            await page.waitForTimeout(250); // Wait for throttled resize event to fire.

            await percySnapshot(page, 'Textarea - resize: "auto" (multiline content)', percyWidths);
        });

        test('should overflow when content exceeds maximum height - @mobile', async ({ page, mount }) => {
            await mount(PieTextarea, {
                props: {
                    resize: 'auto',
                } as PieTextarea,
            });

            const textarea = await page.locator(componentSelector);
            await textarea.fill('The default height is enough for two lines of text, but it should grow if you type more.\n\nIf you reach more than six lines of content, the element will not continue to grow and scrollbars will appear.');
            await page.waitForTimeout(250); // Wait for throttled resize event to fire.

            await percySnapshot(page, 'Textarea - resize mode: auto - with overflowing content', percyWidths);
        });

        test('should not be able to be made taller than its maximum height - @mobile', async ({ page, mount }) => {
            await mount(PieTextarea, {
                props: {
                    resize: 'auto',
                } as PieTextarea,
            });

            const textarea = await page.locator(componentSelector);
            await textarea.fill('This textarea has been filled with enough text for the automatic resizing to reach its maximum height. Some content should be cut off and you should not be able to see the end of this text. If this happens then the maximum height is not being limited correctly.');
            await page.waitForTimeout(250); // Wait for throttled resize event to fire.

            await page.evaluate(() => {
                const textarea = document.querySelector('pie-textarea');
                textarea?.shadowRoot?.querySelector('textarea')?.setAttribute('style', 'height: 600px;'); // Setting the height too high, maxHeight should override this.
            });

            await percySnapshot(page, 'Textarea - resize: "auto" - with large height', percyWidths);
        });
    });

    test.describe('manual', () => {
        test('should render correctly with resize mode: manual', async ({ page, mount }) => {
            await mount(PieTextarea, {
                props: {
                    resize: 'manual',
                } as PieTextarea,
            });

            await percySnapshot(page, 'Textarea - resize: "manual"', percyWidths);
        });

        test('should render correctly with a large height', async ({ page, mount }) => {
            await mount(PieTextarea, {
                props: {
                    resize: 'manual',
                } as PieTextarea,
            });

            await page.evaluate(() => {
                const textarea = document.querySelector('pie-textarea');
                textarea?.shadowRoot?.querySelector('textarea')?.setAttribute('style', 'height: 600px;');
            });

            await percySnapshot(page, 'Textarea - resize: "manual" - with large height', percyWidths);
        });
    });
});

test.describe('Label and Character count:', () => {
    test('Renders the label and character count correctly', async ({ page, mount }) => {
        await mount(PieTextarea, {
            props: {
                label: 'Label',
                maxLength: 250,
                value: 'This is a test value',
            } as PieTextarea,
        });

        await percySnapshot(page, 'Textarea - with label and character count', percyWidths);
    });

    test('RTL - Renders the label and character count correctly', async ({ page, mount }) => {
        setRTL(page);

        await mount(PieTextarea, {
            props: {
                label: 'Label',
                maxLength: 250,
                value: 'This is a test value',
            } as PieTextarea,
        });

        await percySnapshot(page, 'Textarea RTL - with label and character count', percyWidths);
    });
});

test.describe('Assistive text and statuses:', () => {
    for (const dir of readingDirections) {
        test(`Assistive text and statuses - ${dir}`, async ({ mount, page }) => {
            if (dir === 'RTL') {
                setRTL(page);
            }

            // Assistive text with no status
            let testComponent: WebComponentTestInput = createTestWebComponent({ assistiveText: 'Assistive text', value: 'String' }, renderTestPieTextarea);
            let propKeyValues = `assistiveText: ${testComponent.propValues.value}, value: ${testComponent.propValues.value}`;

            await mount(
                WebComponentTestWrapper,
                {
                    props: { propKeyValues },
                    slots: {
                        component: testComponent.renderedString.trim(),
                    },
                },
            );

            // Error + assistive text
            testComponent = createTestWebComponent({ assistiveText: 'Error text', value: 'String', status: 'error' }, renderTestPieTextarea);
            propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, value: ${testComponent.propValues.value}, status: ${testComponent.propValues.status}`;

            await mount(
                WebComponentTestWrapper,
                {
                    props: { propKeyValues },
                    slots: {
                        component: testComponent.renderedString.trim(),
                    },
                },
            );

            // Error and no assistive text
            testComponent = createTestWebComponent({ value: 'String', status: 'error' }, renderTestPieTextarea);
            propKeyValues = `value: ${testComponent.propValues.value}, status: ${testComponent.propValues.status}`;

            await mount(
                WebComponentTestWrapper,
                {
                    props: { propKeyValues },
                    slots: {
                        component: testComponent.renderedString.trim(),
                    },
                },
            );

            // Success + assistive text
            testComponent = createTestWebComponent({ assistiveText: 'Success text', value: 'String', status: 'success' }, renderTestPieTextarea);
            propKeyValues = `assistiveText: ${testComponent.propValues.assistiveText}, value: ${testComponent.propValues.value}, status: ${testComponent.propValues.status}`;

            await mount(
                WebComponentTestWrapper,
                {
                    props: { propKeyValues },
                    slots: {
                        component: testComponent.renderedString.trim(),
                    },
                },
            );

            await percySnapshot(page, `PIE Textarea - Assistive text and statuses - ${dir}`, percyWidths);
        });
    }
});
