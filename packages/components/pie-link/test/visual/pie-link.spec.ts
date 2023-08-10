
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
import { variants, sizes } from '@/defs';
import { PieLink } from '@/index';

const props: PropObject = {
    variant: variants,
    size: sizes,
    href: 'pie.design',
    target: '_blank',
    isBold: [true, false],
    isStandalone: [true, false],
};

const renderTestPieLink = (propVals: WebComponentPropValues) => `<pie-link variant="${propVals.variant}" size="${propVals.size}" href="${propVals.href}" target="${propVals.target}" ${propVals.isBold ? 'isBold' : ''} ${propVals.isStandalone ? 'isStandalone' : ''} />`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ page, mount }) => {
    await mount(PieLink, {});
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-link');
        element?.remove();
    });
});

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieLink);
        const propKeyValues = `size: ${testComponent.propValues.size}, isBold: ${testComponent.propValues.isBold}, isStandalone: ${testComponent.propValues.isStandalone}, href: ${testComponent.propValues.href}, target: ${testComponent.propValues.target}, target: ${testComponent.propValues.target}`;

        await mount(
            WebComponentTestWrapper,
            { props: { propKeyValues, darkMode: variant === 'inverse' } },
        );
    }));

    await percySnapshot(page, `PIE Link - Variant: ${variant}`);
}));
