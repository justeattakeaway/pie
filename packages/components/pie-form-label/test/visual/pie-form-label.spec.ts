
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import type {
    WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import { FormLabelProps } from '@/defs';

const renderTestPieDivider = (propVals: WebComponentPropValues) => `<pie-form-label optional="${propVals.optional}" trailing="${propVals.trailing}"></pie-form-label>`;

const props: FormLabelProps = {
    optional: 'Optional',
    trailing: 'X out of X',
};

test.describe('Pie Form Label - Visual tests`', () => {
    test('should display the Pie Form Label component successfully', async ({ page, mount }) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(props, renderTestPieDivider);

        await mount(WebComponentTestWrapper, {
            slots: {
                component: testComponent.renderedString.trim(),
            },
        });

        await percySnapshot(page, 'Pie Form Label - Visual Test');
    });
});
