import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type { WebComponentPropValues } from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { PieSwitch } from '../../src/index.ts';
import { SwitchProps, labelPlacements } from '../../src/defs.ts';

// const renderRTLPieSwitch = (propVals: WebComponentPropValues) => {
//     const { checked } = propVals;
//     `<div ?isRTL=true, ?checked=${checked}><pie-switch ></pie-switch></div>`;
// };

// const renderRTLPieSwitch = '<div ?isRTL=true><pie-switch ></pie-switch></div>';

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

test.describe('RTL', () => {
    test.describe('when passed in', () => {
        [false, true].forEach(async (checked) => {
            test.only(`should render component correctly (checked: ${checked})`, async ({ page, mount }) => {
                await page.setContent('<div dir="rtl" id="app"></div>');

                await mount(PieSwitch, {
                    props: {
                        label: 'Label',
                        checked,
                    } as SwitchProps,
                });

                await percySnapshot(page, `Switch - checked: ${checked} (dir: rtl)`, percyWidths);
            });
        });
    });
});
