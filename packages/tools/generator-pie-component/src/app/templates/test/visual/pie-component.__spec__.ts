/*
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { Pie<%= componentName %>, <%= componentName %>Props } from '@/index';

test.describe('Prop: `PropName`', () => {
    test.describe('when it\'s set', () => {
        test('should be x', async ({ page, mount }) => {
            await mount(Pie<%= componentName %>, {
                props: {

                } as <%= componentName %>Props,
            });

            await percySnapshot(page, '<%= componentName %> - PropName = value');
        });
    });

    test.describe('when it isn\'t set', () => {
        test('should not be x ', async ({ page, mount }) => {
            await mount(Pie<%= componentName %>, {
                props: {
                } as <%= componentName %>Props,
            });

            await percySnapshot(page, '<%= componentName %> - PropName = whatever');
        });
    });
});
*/
