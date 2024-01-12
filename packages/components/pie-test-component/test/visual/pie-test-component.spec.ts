
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieTestComponent, TestComponentProps } from '../../src/index.ts';

test.describe('PieTestComponent - Visual tests`', () => {
    test('should display the PieTestComponent component successfully', async ({ page, mount }) => {
        await mount(PieTestComponent, {
            props: {} as TestComponentProps,
        });

        await percySnapshot(page, 'PieTestComponent - Visual Test');
    });
});
