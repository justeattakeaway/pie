import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieToggleSwitch } from '@/index';
import { labelPositions } from '@/defs.ts';

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
        labelPositions.forEach(async (position) => {
            test(`should render a label next to the toggle switch (position: ${position})`, async ({ page, mount }) => {
                await mount(PieToggleSwitch, {
                    props: {
                        label: {
                            text: 'Label',
                            position,
                        },
                    },
                });

                await percySnapshot(page, `ToggleSwitch - label position: ${position}`);
            });
        });
    });
});

