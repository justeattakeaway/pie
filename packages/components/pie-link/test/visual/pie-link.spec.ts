
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
import {
    variants, sizes, iconPlacements, LinkProps,
} from '@/defs';
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

const icon = '<svg slot="icon" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plusCircle"><path d="M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z"></path><path d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z"></path></svg>';

iconPlacements.forEach((iconPlacement) => test(`Render icon slot for iconPlacement: ${iconPlacement}`, async ({ page, mount }) => {
    await mount(
        PieLink,
        {
            props: {
                href: 'pie.design',
                iconPlacement,
            } as LinkProps,
            slots: {
                component: `<pie-link>
                                ${icon}
                                Hello, Pie Link!
                            </pie-link>`,
            },
        },
    );

    await percySnapshot(page, `PIE Link Icon Slot - iconPlacement: ${iconPlacement}`);
}));
