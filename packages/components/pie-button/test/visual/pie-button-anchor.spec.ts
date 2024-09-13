import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';

import { type PropObject, type WebComponentPropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import { getAllPropCombinations } from '@justeattakeaway/pie-webc-testing/src/helpers/get-all-prop-combos.ts';
import { createTestWebComponent } from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
import { WebComponentTestWrapper } from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';

import { PieButton } from '../../src/index.ts';
import { type ButtonProps, sizes, variants } from '../../src/defs.ts';

const props: PropObject<ButtonProps> = {
    variant: variants,
    size: sizes,
    tag: 'a',
};

// Renders a <pie-button> HTML string with the given prop values
const renderTestPieButton = (propVals: WebComponentPropValues) => `<pie-button tag="${propVals.tag}" size="${propVals.size}" variant="${propVals.variant}">Hello world</pie-button>`;

const componentPropsMatrix = getAllPropCombinations(props);

test.beforeEach(async ({ mount }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 40000);
    const component = await mount(PieButton);
    await component.unmount();
});

test('should render all size and variant variations for anchor tag', async ({ page, mount }) => {
    for (const combo of componentPropsMatrix) {
        const { renderedString, propValues } = createTestWebComponent(combo, renderTestPieButton);
        const propKeyValues = `tag: ${propValues.tag}, size: ${propValues.size}, variant: ${propValues.variant}`;
        const darkMode = ['inverse', 'ghost-inverse', 'outline-inverse'].includes(propValues.variant);

        await mount(
            WebComponentTestWrapper,
            {
                props: { propKeyValues, darkMode },
                slots: {
                    component: renderedString.trim(),
                },
            },
        );
    }

    await percySnapshot(page, 'PIE Button Anchor - sizes/variants', percyWidths);
});
