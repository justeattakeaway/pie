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
import { PieCardContainer } from '@/index';
import { interactionTypes, variants } from '@/defs';

const props: PropObject = {
    interactionType: interactionTypes,
    variant: variants,
    disabled: [true, false],
};

// This is just an arbitrary example of some markup a user may pass into the card
const slotContent = `<div style="color: var(--card-color); font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-m-family); padding: var(--dt-spacing-b);">
    <h2> Card title </h2>
    <p> Card content </p>
    <p> Lorem ipsum dolor sit amet
    consectetur adipisicing elit.
    Fugiat dolore dolorem maxime,
    quod, in minima esse fugit
    distinctio, officia et soluta
    dicta consequuntur commodi officiis
    tempora asperiores aspernatur atque quas.</p>
</div>`;

// Renders a <pie-card-container> HTML string with the given prop values
const renderTestPieCardContainer = (propVals: WebComponentPropValues) => `<pie-card-container interactionType="${propVals.interactionType}" variant="${propVals.variant}" ${propVals.disabled ? 'disabled' : ''} >${slotContent}</pie-card-container>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieCardContainer,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-card-container');
        element?.remove();
    });
});

test.describe('PieCardContainer - Visual tests`', () => {
    componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
        await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
            const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieCardContainer);
            const propKeyValues = `interactionType: ${testComponent.propValues.interactionType}, disabled: ${testComponent.propValues.disabled}`;
            const darkMode = variant.includes('inverse');

            await mount(
                WebComponentTestWrapper,
                {
                    props: { propKeyValues, darkMode },
                    slots: {
                        component: `<div style="--card-color: var(--dt-color-content-${darkMode ? 'light' : 'default'})">
                        ${testComponent.renderedString.trim()}
                        </div>`,
                    },
                },
            );
        }));

        await percySnapshot(page, `PIE Card Container - Variant: ${variant}`, percyWidths);
    }));
});
