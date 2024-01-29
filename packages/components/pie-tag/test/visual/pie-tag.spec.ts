
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
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { PieTag } from '@/index';
import { sizes, variants } from '../../src/defs.ts';

// TODO: Currently setting the slot to use a straight up SVG
//       This should be updated to use pie-icons-webc, but after some investigation, we think that we'll
//       need to convert the webc icons to use Lit, as currently the components don't work well in a Node env like Playwright
//       Atm, importing them like `import '@justeattakeaway/pie-icons-webc/icons/IconClose.js';` results in an `HTMLElement is not defined` error
const icon = '<svg slot="icon" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plusCircle"><path d="M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z"></path><path d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z"></path></svg>';

const props: PropObject = {
    variant: variants,
    size: sizes,
    isStrong: [true, false],
    iconSlot: ['', icon],
};

// Renders a <pie-tag> HTML string with the given prop values
const renderTestPieTag = (propVals: WebComponentPropValues) => `<pie-tag variant="${propVals.variant}" size="${propVals.size}" ${propVals.isStrong ? 'isStrong' : ''}>${propVals.iconSlot} Hello world</pie-tag>`;

const componentPropsMatrix: WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ page, mount }, testInfo) => {
    await mount(
        PieTag,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-tag');
        element?.remove();
    });

    testInfo.setTimeout(testInfo.timeout + 40000);
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieTag);
        const propKeyValues = `
            size: ${testComponent.propValues.size},
            variant: ${testComponent.propValues.variant},
            isStrong: ${testComponent.propValues.isStrong},
            iconSlot: ${testComponent.propValues.iconSlot ? 'with icon' : 'no icon'}`;
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
    }));

    // Follow up to remove in Jan
    await page.waitForTimeout(5000);

    await percySnapshot(page, `PIE Tag - Variant: ${variant}`, percyWidths);
}));
