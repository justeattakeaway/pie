import { test } from '@sand4rt/experimental-ct-web';
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

import { PieTextarea } from '../../src/index.ts';

const readingDirections = ['LTR', 'RTL'];

const renderTestPieTextarea = (propVals: WebComponentPropValues) => {
    let attributes = '';

    if (propVals.disabled) attributes += ' disabled';
    if (propVals.size) attributes += ` size="${propVals.size}"`;

    return `<pie-textarea${attributes}></pie-textarea>`;
};

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the textarea component is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const component = await mount(PieTextarea);
    await component.unmount();
});

test('Size variants', async ({ mount, page }) => {
    const sizeVariants = ['small', 'medium', 'large'];

    await Promise.all(sizeVariants.map(async (size) => {
        const testComponent: WebComponentTestInput = createTestWebComponent({ size }, renderTestPieTextarea);
        const propKeyValues = `size: ${testComponent.propValues.size}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }));

    await percySnapshot(page, 'PIE Textarea - Size variants', percyWidths);
});

await Promise.all(readingDirections.map(async (dir) => {
    test(`Content and props - ${dir}`, async ({ mount, page }) => {
        if (dir === 'RTL') {
            setRTL(page);
        }

        let testComponent: WebComponentTestInput = createTestWebComponent({ value: 'String' }, renderTestPieTextarea);

        // Disabled placeholder
        testComponent = createTestWebComponent({
            disabled: true,
        }, renderTestPieTextarea);

        let propKeyValues = `disabled: ${testComponent.propValues.disabled}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
            },
        );

        // Not Disabled placeholder
        testComponent = createTestWebComponent({
            disabled: false,
        }, renderTestPieTextarea);

        propKeyValues = `disabled: ${testComponent.propValues.disabled}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues },
            },
        );

        await percySnapshot(page, `PIE Textarea - Content and props - ${dir}`, percyWidths);
    });
}));

