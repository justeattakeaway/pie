import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieToggleSwitch } from '@/index';
import { ToggleSwitchProps, labelPlacements } from '@/defs';

[
    [false, false],
    [false, true],
    [true, false],
    [true, true],
].forEach(([isChecked, isDisabled]) => {
    test(`should render correctly with isChecked = ${isChecked} and isDisabled = ${isDisabled}`, async ({ page, mount }) => {
        await mount(PieToggleSwitch, {
            props: {
                isChecked,
                isDisabled,
            },
        });

        await percySnapshot(page, `ToggleSwitch - isChecked = ${isChecked} and isDisabled = ${isDisabled}`);
    });
});

test.describe('Prop: `Label`', () => {
    test.describe('when passed in', () => {
        labelPlacements.forEach(async (placement) => {
            test(`should render a label next to the toggle switch (placement: ${placement})`, async ({ page, mount }) => {
                await mount(PieToggleSwitch, {
                    props: {
                        label: 'Label',
                        labelPlacement: placement,
                    } as ToggleSwitchProps,
                });

                await percySnapshot(page, `ToggleSwitch - label placement: ${placement}`);
            });
        });
    });
});
