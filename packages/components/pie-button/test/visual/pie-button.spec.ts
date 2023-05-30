import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { getAllPropCombinations } from '@justeattakeaway/pie-webc-core';
import { PieButton } from '@/index';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@/defs';

const props = {
    variant: Object.values(BUTTON_VARIANT),
    size: Object.values(BUTTON_SIZE),
    type: Object.values(BUTTON_TYPE),
    isFullWidth: [true, false],
    disabled: [true, false],
};

test('Render all prop variations', async ({ page, mount }) => {
    const combinations = getAllPropCombinations(props);
    await Promise.all(combinations.map(async (combo) => {
        await mount(
            PieButton,
            {
                props: { ...combo },
                slots: {
                    default: `Variant: ${combo.variant}, Size: ${combo.size}, Type: ${combo.type}, isFullWidth: ${combo.isFullWidth}, disabled: ${combo.disabled}`,
                },
            },
        );
    }));

    await percySnapshot(page, 'PIE Button - Visual Tests');
});
