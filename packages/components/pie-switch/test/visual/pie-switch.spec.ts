import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import type {
    WebComponentPropValues,
    WebComponentTestInput
} from '@justeattakeaway/pie-webc-testing/src/helpers/defs.ts';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { PieSwitch } from '../../src/index.ts';
import { SwitchProps, labelPlacements } from '../../src/defs.ts';
import {
    WebComponentTestWrapper,
} from '@justeattakeaway/pie-webc-testing/src/helpers/components/web-component-test-wrapper/WebComponentTestWrapper.ts';
import {
    createTestWebComponent,
} from '@justeattakeaway/pie-webc-testing/src/helpers/rendering.ts';
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

const props: SwitchProps = {
    checked: true,
};

const renderTestPieSwitch = (propVals: WebComponentPropValues) => `<pie-switch checked="${propVals.checked}"></pie-switch>`;

test.describe('Pie Switch RTL - Visual tests`', () => {
    [false, true].forEach(async (checked) => {
        test(`should render component correctly (checked: ${checked})`, async ({ page, mount }) => {
            const testComponent: WebComponentTestInput = createTestWebComponent(props, renderTestPieSwitch);
            const propKeyValues = `checked: ${testComponent.propValues.checked}`;

            await mount(WebComponentTestWrapper, {
                props: { propKeyValues },
                slots: {
                    component: testComponent.renderedString.trim(),
                },
            });

            await percySnapshot(page, 'Pie Switch - RTL Visual Test', percyWidths);
        });
    });
});
