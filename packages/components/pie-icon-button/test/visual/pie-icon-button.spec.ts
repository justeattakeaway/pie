import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PropObject, Combination, getAllPropCombinations } from '@justeattakeaway/pie-webc-core/src/test-helpers/get-all-prop-combos.ts';
import { PieIconButton } from '@/index';
import { ICON_BUTTON_VARIANT } from '@/defs';

const props: PropObject = {
    variant: Object.values(ICON_BUTTON_VARIANT),
    disabled: [true, false],
};

test('Render all prop variations', async ({ page, mount }) => {
    const combinations = getAllPropCombinations(props);
    await Promise.all(combinations.map(async (combo: Combination) => {
        await mount(
            PieIconButton,
            {
                props: { ...combo },
            },
        );
    }));

    await percySnapshot(page, 'PIE Icon Button - Visual Tests');
});
