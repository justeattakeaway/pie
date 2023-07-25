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
import { PieButton } from '@/index';
import { sizes, variants } from '@/defs';

const props: PropObject = {
    variant: variants,
    size: sizes,
    type: 'button', // Changing the type does not affect the appearance of the button
    isFullWidth: [true, false],
    disabled: [true, false],
    isLoading: [true, false],
};

// Renders a <pie-button> HTML string with the given prop values
const renderTestPieButton = (propVals: WebComponentPropValues) => `<pie-button variant="${propVals.variant}" size="${propVals.size}" type="${propVals.type}" ${propVals.isFullWidth ? 'isFullWidth' : ''} ${propVals.disabled ? 'disabled' : ''} ${propVals.isLoading ? 'isLoading' : ''}>Hello world</pie-button>`;

const componentPropsMatrix : WebComponentPropValues[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, WebComponentPropValues[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ page, mount }) => {
    await mount(
        PieButton,
        {},
    );

    // Removing the element so it's not present in the tests (but is still registered in the DOM)
    await page.evaluate(() => {
        const element : Element | null = document.querySelector('pie-button');
        element?.remove();
    });
});

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: WebComponentPropValues) => {
        const testComponent: WebComponentTestInput = createTestWebComponent(combo, renderTestPieButton);
        const propKeyValues = `size: ${testComponent.propValues.size}, isFullWidth: ${testComponent.propValues.isFullWidth}, disabled: ${testComponent.propValues.disabled}, isLoading: ${testComponent.propValues.isLoading}`;
        const darkMode = variant === 'inverse' || variant === 'ghost-inverse';

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

    await percySnapshot(page, `PIE Button - Variant: ${variant}`);
}));

// TODO: Currently setting the slot to use a straight up SVG
//       This should be updated to use pie-icons-webc, but after some investigation, we think that we'll
//       need to convert the webc icons to use Lit, as currently the components don't work well in a Node env like Playwright
//       Atm, importing them like `import '@justeattakeaway/pie-icons-webc/icons/IconClose.js';` results in an `HTMLElement is not defined` error
const plusSVG = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--plusCircle"><path d="M8.656 4.596H7.344v2.748H4.596v1.312h2.748v2.748h1.312V8.656h2.748V7.344H8.656V4.596Z"></path><path d="M12.795 3.205a6.781 6.781 0 1 0 0 9.625 6.79 6.79 0 0 0 0-9.625Zm-.927 8.662a5.469 5.469 0 1 1-7.734-7.735 5.469 5.469 0 0 1 7.734 7.736Z"></path></svg>';
const chevronSVG = '<svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chevronDown"><path d="M2.82 5.044 8 10.399 13.197 5l.963.875-5.364 5.565a1.164 1.164 0 0 1-1.636 0L1.875 5.945l.945-.901Z"></path></svg>';

sizes.forEach((size) => test(`Render icon slot variations for Size: ${size}`, async ({ page, mount }) => {
    const iconSlotVariations = [
        {
            'icon-leading': plusSVG,
        },
        {
            'icon-trailing': chevronSVG,
        },
        {
            'icon-leading': plusSVG,
            'icon-trailing': chevronSVG,
        },
    ];

    await Promise.all(iconSlotVariations.map(async (iconSlots) => {
        const iconLeading = iconSlots['icon-leading'] ? iconSlots['icon-leading'].replace('<svg', '<svg slot="icon-leading"') : '';
        const iconTrailing = iconSlots['icon-trailing'] ? iconSlots['icon-trailing'].replace('<svg', '<svg slot="icon-trailing"') : '';

        await mount(
            WebComponentTestWrapper,
            {
                props: {
                    size,
                },
                slots: {
                    component: `<pie-button size="${size}">
                                    ${iconLeading || ''}
                                    Hello, ${size} Button!
                                    ${iconTrailing || ''}
                                </pie-button>`,
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Button Leading Icon - Size: ${size}`);
}));

