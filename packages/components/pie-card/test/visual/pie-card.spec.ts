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
import { PieCard } from '../../src/index';
import { tags, variants, paddingValues } from '../../src/defs';

// This is just an arbitrary example of some markup a user may pass into the card
const slotContent = `<div style="font-size: calc(var(--dt-font-body-l-size) * 1px); font-family: var(--dt-font-interactive-m-family); padding: var(--dt-spacing-b);">
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

// Renders a <pie-card> HTML string with the given prop values
const renderTestPieCard = (propVals: WebComponentPropValues) => `<pie-card tag="${propVals.tag}" padding="${propVals.padding}"  variant="${propVals.variant}" ${propVals.disabled ? 'disabled' : ''} >${slotContent}</pie-card>`;

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieCard,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-card');
        element?.remove();
    });
});

test.describe('PieCard - Visual tests`', () => {
    const props: PropObject = {
        tag: tags,
        variant: variants,
        disabled: [true, false],
    };
    const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
    const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
    const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

    componentVariants.forEach((variant) => test(`should render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
        await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
            const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieCard);
            const propKeyValues = `tag: ${testComponent.propValues.tag}, disabled: ${testComponent.propValues.disabled}`;
            const darkMode = variant.includes('inverse');

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

        await percySnapshot(page, `PIE Card - Variant: ${variant}`, percyWidths);
    }));
});

test.describe('PieCard - `padding` prop', async () => {
    const batchSize = Math.ceil(paddingValues.length / 7);
    const batches: string[][] = [];

    for (let i = 0; i < paddingValues.length; i += batchSize) {
        batches.push(paddingValues.slice(i, i + batchSize));
    }

    batches.forEach((batch, index) => test(`should render the padding prop value of batch number: ${index}`, async ({ page, mount }) => {
        await Promise.all(batch.map(async (padding) => {
            const testComponent: WebComponentTestInput = createTestWebComponent({ padding }, renderTestPieCard);
            const propKeyValues = `padding: ${testComponent.propValues.padding}`;

            await mount(
                WebComponentTestWrapper,
                {
                    props: { propKeyValues },
                    slots: { component: testComponent.renderedString.trim() },
                },
            );
        }));

        await percySnapshot(page, `PIE Card - Padding values | batch number: ${index}`, percyWidths);
    }));
});
