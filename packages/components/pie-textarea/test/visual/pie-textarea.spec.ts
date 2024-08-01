import { test, expect } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';

import { PieFormLabel } from '@justeattakeaway/pie-form-label';
import { PieTextarea } from '../../src/index.ts';
import { sizes } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-textarea"]';

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the textarea component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const component = await mount(PieTextarea);
    await component.unmount();

    const label = await mount(PieFormLabel);
    await label.unmount();
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

        test('should resize the textarea vertically', async ({ page, mount }) => {
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

        test('should overflow when content exceeds maximum height', async ({ page, mount }) => {
            await mount(PieTextarea, {
                props: {
                    resize: 'auto',
                } as PieTextarea,
            });

            const textarea = await page.locator(componentSelector);
            await textarea.fill('The default height is enough for two lines of text, but it should grow if you type more. If you reach more than six lines of content, the element will not continue to grow and scrollbars will appear.');
            await page.waitForTimeout(250); // Wait for throttled resize event to fire.

            await percySnapshot(page, 'Textarea - resize mode: auto - with overflowing content', percyWidths);
        });

        test('should not be able to be made taller than its maximum height', async ({ page, mount }) => {
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
});
