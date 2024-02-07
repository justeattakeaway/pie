
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
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
import { IconHeartFilled } from '@justeattakeaway/pie-icons-webc';
import {
    variants, sizes, iconPlacements, tags, underlineTypes,
} from '../../src/defs.ts';
import { PieLink } from '../../src/index.ts';

const props: PropObject = {
    tag: tags,
    variant: variants,
    size: sizes,
    underline: underlineTypes,
    href: 'pie.design',
    isBold: [true, false],
    isStandalone: [true, false],
    hasVisited: [true, false],
    iconPlacement: [undefined, ...iconPlacements],
};

const renderTestPieLink = (propVals: WebComponentPropValues) => `<pie-link tag="${propVals.tag}" variant="${propVals.variant}" size="${propVals.size}" underline="${propVals.underline}" iconPlacement="${propVals.iconPlacement}" href="${propVals.href}" ${propVals.isBold ? 'isBold' : ''} ${propVals.hasVisited ? 'hasVisited' : ''} ${propVals.isStandalone ? 'isStandalone' : ''}>${propVals.iconPlacement ? '<icon-heart-filled slot="icon"></icon-heart-filled>' : ''} Link</pie-link>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);

    // This ensures the link and icon components are registered in the DOM for each test.
    // It appears to add them to a Playwright cache which we understand is required for the tests to work correctly.
    const linkComponent = await mount(PieLink);
    await linkComponent.unmount();
    const iconComponent = await mount(IconHeartFilled);
    await iconComponent.unmount();
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieLink);
        const propKeyValues = `
            tag: ${testComponent.propValues.tag},
            size: ${testComponent.propValues.size},
            iconPlacement: ${testComponent.propValues.iconPlacement},
            isBold: ${testComponent.propValues.isBold},
            isStandalone: ${testComponent.propValues.isStandalone},
            href: ${testComponent.propValues.href}`;

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode: variant === 'inverse' },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Link - Variant: ${variant}`, percyWidths);
}));
