
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    PropObject, WebComponentPropValues, WebComponentTestInput,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';

import { variants } from '../../src/defs.ts';
import { PieToast, type ToastProps } from '../../src/index.ts';

export const screenWidths = {
    widths: [1450, 375],
};

const longMessage = 'Donec pulvinar porta tempus. Sed ac ex ac libero pulvinar tincidunt eget non orci. Curabitur leo quam, commodo sit amet dolor eu, molestie molestie eros. Nulla rutrum vehicula sodales. Duis quis lobortis tortor. In hac habitasse platea dictumst. Vestibulum efficitur, orci at interdum eleifend, nulla nunc luctus urna, sit amet commodo libero lacus scelerisque enim. In eleifend ex ut nulla cursus, eu efficitur ligula pharetra.';

const variantProps: PropObject = {
    message: ['Item has been created', longMessage],
    variant: variants,
    isStrong: [false, true],
    isDismissible: [false, true],
    isMultiline: [false, true],
};

// Renders a <pie-toast> HTML string with the given prop values
const renderTestPieToast = (propVals: WebComponentPropValues) => `<pie-toast
        message="${propVals.message}"
        variant="${propVals.variant}"
        ${propVals.isStrong ? 'isStrong' : ''}
        ${propVals.isDismissible ? 'isDismissible' : ''}
        ${propVals.isMultiline ? 'isMultiline' : ''}></pie-toast>`;

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(variantProps);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the toast is registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const toastComponent = await mount(PieToast);
    await toastComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    for (const combo of componentPropsMatrixByVariant[variant]) {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieToast);

        const propKeyValues = `
            message: ${testComponent.propValues.message.length === longMessage.length ? 'With long message' : 'With short message'},
            variant: ${testComponent.propValues.variant},
            isStrong: ${testComponent.propValues.isStrong},
            isDismissible: ${testComponent.propValues.isDismissible},
            isMultiline: ${testComponent.propValues.isMultiline},
        `;

        const darkMode = ['neutral-alternative'].includes(variant);

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }

    await percySnapshot(page, `PIE Toast - Variant: ${variant}`, screenWidths);
}));

test.describe('Props', () => {
    test.describe('leadingAction', () => {
        const props = {
            message: 'Item was added',
            leadingAction: {
                text: 'Confirm',
                ariaLabel: 'Button to confirm the action',
            },
        };
        test('Displays leadingAction in footer if isMultiline is true', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...props,
                    isMultiline: true,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieToast - isMultiline - Displays leadingAction in footer if isMultiline is true');
        });

        test('Displays leadingAction inline if isMultiline is false', async ({ page, mount }) => {
            await mount(PieToast, {
                props: {
                    ...props,
                    isMultiline: false,
                } as ToastProps,
            });

            await percySnapshot(page, 'PieToast - isMultiline - Displays leadingAction inline if isMultiline is false');
        });
    });
});

