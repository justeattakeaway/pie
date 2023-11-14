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
import { sizes, variants, iconPlacements } from '@/defs';

const props: PropObject = {
    variant: variants,
    size: sizes,
    type: 'button', // Changing the type does not affect the appearance of the button
    isFullWidth: [true, false],
    disabled: [true, false],
    isLoading: [true, false],
    iconPlacement: [undefined, ...iconPlacements],
};

// TODO: Currently setting the slot to use a straight up SVG
//       This should be updated to use pie-icons-webc, but after some investigation, we think that we'll
//       need to convert the webc icons to use Lit, as currently the components don't work well in a Node env like Playwright
//       Atm, importing them like `import '@justeattakeaway/pie-icons-webc/icons/IconClose.js';` results in an `HTMLElement is not defined` error
const icon = '<svg slot="icon" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plusCircle"><path d="M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z"></path><path d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z"></path></svg>';

// Renders a <pie-button> HTML string with the given prop values
const renderTestPieButton = (propVals: WebComponentPropValues) => `<pie-button variant="${propVals.variant}" size="${propVals.size}" type="${propVals.type}" iconPlacement="${propVals.iconPlacement}" ${propVals.isFullWidth ? 'isFullWidth' : ''} ${propVals.disabled ? 'disabled' : ''} ${propVals.isLoading ? 'isLoading' : ''}>${propVals.iconPlacement ? icon : ''} Hello world</pie-button>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

// eslint-disable-next-line no-empty-pattern
test.beforeEach(async ({ }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);
});

componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieButton);
        const propKeyValues = `size: ${testComponent.propValues.size}, iconPlacement: ${testComponent.propValues.iconPlacement}, isFullWidth: ${testComponent.propValues.isFullWidth}, disabled: ${testComponent.propValues.disabled}, isLoading: ${testComponent.propValues.isLoading}`;
        const darkMode = ['inverse', 'ghost-inverse', 'outline-inverse'].includes(variant);

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

    await percySnapshot(page, `PIE Button - Variant: ${variant}`, percyWidths);
}));
