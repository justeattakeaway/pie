import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { Pie<%= componentName %> } from '../../src/index.ts';

test.describe('Pie<%= componentName %> - Visual tests`', () => {
    test('should display the Pie<%= componentName %> component successfully', async ({ page, mount }) => {
        await mount(Pie<%= componentName %>);

        await percySnapshot(page, 'Pie<%= componentName %> - Visual Test');
    });
});
