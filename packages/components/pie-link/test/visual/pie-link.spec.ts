import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { BasePage } from '@justeattakeaway/pie-webc-testing/src/helpers/page-object/base-page.ts';
import {
    type PropObject,
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import {
    getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import {
    type LinkProps, variants, sizes,
} from '../../src/defs.ts';

const props: PropObject<LinkProps> = {
    variant: variants,
    size: sizes,
};

const componentPropsMatrix = getAllPropCombinations(props);
const componentPropsMatrixByVariant = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');

variants.forEach((variant) => {
    const componentPropsMatrixBySize = splitCombinationsByPropertyValue(componentPropsMatrixByVariant[variant], 'size');
    const componentSizes: string[] = Object.keys(componentPropsMatrixBySize);

    componentSizes.forEach((size) => {
        test(`should render all prop variations for Variant: ${variant} and Size: ${size}`, async ({ page }) => {
            const basePage = new BasePage(page, `link--${variant}-${size}-variations`);

            await basePage.load();

            await percySnapshot(page, `PIE Link - Variant: ${variant} - Size: ${size}`, percyWidths);
        });
    });
});
