import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import {
    PropObject, Combination, getAllPropCombinations, splitCombinationsByPropertyValue,
} from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@/defs';
import { LabelledComponent } from './LabelledComponent';

const props: PropObject = {
    variant: Object.values(BUTTON_VARIANT),
    size: Object.values(BUTTON_SIZE),
    type: BUTTON_TYPE.BUTTON, // Changing the type does not affect the appearance of the button
    isFullWidth: [true, false],
    disabled: [true, false],
};

type WebComponentPropValues = {
    [key: string]: any;
}
type WebComponentTestInput = {
    propValues: WebComponentPropValues;
    renderedString: string
}

const createTestComponent = (propVals: WebComponentPropValues): WebComponentTestInput => {
    // hard coding one for now

    const testComponent: WebComponentTestInput = {
        propValues: propVals,
        renderedString: `<pie-button variant="${propVals.variant}" size="${propVals.size}" type="${propVals.type}" ${propVals.isFullWidth ? 'isFullWidth' : ''} ${propVals.disabled ? 'disabled' : ''}>Hello world</pie-button>`,
    };

    return testComponent;
};

const componentPropsMatrix : Combination[] = getAllPropCombinations(props);
const componentPropsMatrixByVariant: Record<string, Combination[]> = splitCombinationsByPropertyValue(componentPropsMatrix, 'variant');
const componentVariants: string[] = Object.keys(componentPropsMatrixByVariant);

componentVariants.forEach((variant) => test(`Render all prop variations for Variant: ${variant}`, async ({ page, mount }) => {
    await Promise.all(componentPropsMatrixByVariant[variant].map(async (combo: Combination) => {
        const testComponent = createTestComponent(combo);
        const label = `variant: ${testComponent.propValues.variant}, size: ${testComponent.propValues.size}, type: ${testComponent.propValues.type}, isFullWidth: ${testComponent.propValues.isFullWidth}, disabled: ${testComponent.propValues.disabled}`;

        await mount(
            LabelledComponent,
            {
                props: { label },
                slots: {
                    default: testComponent.renderedString,
                },
            },
        );
    }));

    await percySnapshot(page, `PIE Button - Variant: ${variant}`);
}));
