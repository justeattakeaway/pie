
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
import { variants, orientations } from '@/defs';
import { PieDivider } from '@/index';

const props: PropObject = {
    variant: variants,
    orientation: orientations,
};

const renderTestPieDivider = (propVals: WebComponentPropValues) => `<pie-divider variant="${propVals.variant}" orientation="${propVals.orientation}" />`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ page, mount }) => {
    await mount(PieDivider, {});
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-divider');
        element?.remove();
    });
});

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieDivider);
        const propKeyValues = `orientation: ${testComponent.propValues.orientation}}`;

        await mount(
            WebComponentTestWrapper,
            { props: { propKeyValues, darkMode: variant === 'inverse' } },
        );
    }));

    await percySnapshot(page, `PIE Divider - Variant: ${variant}`);
}));
