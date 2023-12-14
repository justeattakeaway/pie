import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieSwitch } from '@/index';
import { SwitchProps, labelPlacements } from '@/defs';

[
    [false, false],
    [false, true],
    [true, false],
    [true, true],
].forEach(([checked, isDisabled]) => {
    test(`should render correctly with checked = ${checked} and isDisabled = ${isDisabled}`, async ({ page, mount }) => {
        await mount(PieSwitch, {
            props: {
                checked,
                isDisabled,
            },
        });

        await percySnapshot(page, `Switch - checked = ${checked} and isDisabled = ${isDisabled}`);
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

                await percySnapshot(page, `Switch - label placement: ${placement}`);
            });
        });
    });
});
