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

test.describe('Prop: `Label`', () => {
    test.describe('when passed in', () => {
        const labelPositions = [
            { leading: true, trailing: false },
            { leading: false, trailing: true }
        ];

        labelPositions.forEach(async (position) => {
            test(`should render a label next to the toggle switch (position: leading=${position.leading}, trailing=${position.trailing})`, async ({ page, mount }) => {
                await mount(PieToggleSwitch, {
                    props: {
                        label: {
                            text: 'Label',
                            position: {
                                leading: position.leading,
                                trailing: position.trailing,
                            },
                        },
                    },
                });

                await percySnapshot(page, `ToggleSwitch - label position: leading=${position.leading}, trailing=${position.trailing}`);
            });
        });
    });

    test.describe('when both leading and trailing is passed in as true', () => {
        test('should not render a label', async ({ page, mount }) => {
            await mount(PieToggleSwitch, {
                props: {
                    label: {
                        text: 'Label',
                        position: {
                            leading: true,
                            trailing: true,
                        },
                    },
                },
            });

            await percySnapshot(page, 'ToggleSwitch - label is not rendered');
        });
    });
});
