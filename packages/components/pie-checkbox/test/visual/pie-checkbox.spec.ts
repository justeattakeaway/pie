
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieCheckbox, CheckboxProps } from '../../src/index.ts';

test.describe('PieCheckbox - Visual tests`', () => {
    test('should display the PieCheckbox component successfully', async ({ page, mount }) => {
        await mount(PieCheckbox, {
            props: {} as CheckboxProps,
        });

        await percySnapshot(page, 'PieCheckbox - Visual Test');
    });
});
