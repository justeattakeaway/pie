
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { Pie<%= componentName %>, <%= componentName %>Props } from '@/index';

test.describe.skip('Pie<%= componentName %> - Visual tests`', () => {
    test('should display the Pie<%= componentName %> component successfully', async ({ page, mount }) => {
        await mount(Pie<%= componentName %>, {
            props: {} as <%= componentName %>Props,
        });

        await percySnapshot(page, 'Pie<%= componentName %> - Visual Test');
    });
});
