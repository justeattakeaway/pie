
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import type {
    WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import { PieFormLabel } from '../../src/index.ts';
import { FormLabelProps } from '../../src/defs.ts';

const renderTestPieDivider = (propVals: WebComponentPropValues) => `<pie-form-label optional="${propVals.optional}" trailing="${propVals.trailing}">Label</pie-form-label>`;

const props: FormLabelProps = {
    optional: 'Optional',
    trailing: 'X out of X',
};

test.beforeEach(async ({ page, mount }) => {
    await mount(PieFormLabel, {});
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-form-label');
        element?.remove();
    });
});

test.describe('Pie Form Label - Visual tests`', () => {
    test('should display the Pie Form Label component successfully', async ({ page, mount }) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(props, renderTestPieDivider);
        const propKeyValues = `optional: ${testComponent.propValues.optional}, trailing: ${testComponent.propValues.trailing}`;

        await mount(WebComponentTestWrapper, {
            props: { propKeyValues },
            slots: {
                component: testComponent.renderedString.trim(),
            },
        });

        await percySnapshot(page, 'Pie Form Label - Visual Test', percyWidths);
    });
});
