import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { setRTL } from '@justeattakeaway/pie-webc-testing/src/helpers/set-rtl-direction.ts';
import { PieSwitch } from '../../src/index.ts';
import { type SwitchProps, labelPlacements } from '../../src/defs.ts';

[
    [false, false],
    [false, true],
    [true, false],
    [true, true],
].forEach(([checked, disabled]) => {
    test(`should render correctly with checked = ${checked} and disabled = ${disabled}`, async ({ page, mount }) => {
        await mount(PieSwitch, {
            props: {
                checked,
                disabled,
            },
        });

        await percySnapshot(page, `Switch - checked = ${checked} and disabled = ${disabled}`, percyWidths);
    });
});

test.describe('Prop: `Label`', () => {
    test.describe('when passed in', () => {
        labelPlacements.forEach(async (placement) => {
            test(`should render a label next to the switch (placement: ${placement})`, async ({ page, mount }) => {
                await mount(PieSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement: placement,
                    } as SwitchProps,
                });

                await percySnapshot(page, `Switch - label placement: ${placement}`, percyWidths);
            });
        });
    });
});

test.describe('when in RTL settings', () => {
    [true, false].forEach(async (checkedState) => {
        test(`should render in rtl correctly when (checked: ${checkedState})`, async ({ page, mount }) => {
            await setRTL(page);

            await mount(PieSwitch, {
                props: {
                    label: 'Label',
                    checked: checkedState,
                } as SwitchProps,
            });

            await percySnapshot(page, `Switch - in RTL - (checked: ${checkedState})`, percyWidths);
        });
    });
});
