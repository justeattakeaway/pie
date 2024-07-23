
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieCheckboxGroup, type CheckboxGroupProps } from '../../src/index.ts';

test.describe('PieCheckboxGroup - Visual tests`', () => {
    test('should display the PieCheckboxGroup component successfully', async ({ page, mount }) => {
        await mount(PieCheckboxGroup, {
            props: {} as CheckboxGroupProps,
        });

        await percySnapshot(page, 'PieCheckboxGroup - Visual Test');
    });
});
