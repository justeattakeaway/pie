import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieToggleSwitch } from '@/index';

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
