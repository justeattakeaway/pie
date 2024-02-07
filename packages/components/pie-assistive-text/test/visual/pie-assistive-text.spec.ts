
import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { PieAssistiveText, AssistiveTextProps } from '../../src/index.ts';

test.describe('PieAssistiveText - Visual tests`', () => {
    test('should display the PieAssistiveText component successfully', async ({ page, mount }) => {
        await mount(PieAssistiveText, {
            props: {} as AssistiveTextProps,
        });

        await percySnapshot(page, 'PieAssistiveText - Visual Test');
    });
});
