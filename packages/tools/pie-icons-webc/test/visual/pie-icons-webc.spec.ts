import { test } from '@sand4rt/experimental-ct-web';
import percySnapshot from '@percy/playwright';
import { percyWidths } from '@justeattakeaway/pie-webc-testing/src/percy/breakpoints.ts';
import { IconChatConversation } from '@justeattakeaway/pie-icons-webc/dist/IconChatConversation';
import { IconChatConversationLarge } from '@justeattakeaway/pie-icons-webc/dist/IconChatConversationLarge';

// This ensures the component is registered in the DOM for each test
// This is not required if your tests mount the web component directly in the tests
test.beforeEach(async ({ mount }) => {
    const iconChatConversation = await mount(IconChatConversation);
    await iconChatConversation.unmount();
    const iconChatConversationLarge = await mount(IconChatConversationLarge);
    await iconChatConversationLarge.unmount();
});

test.describe('PIE Icons Webc - Visual tests`', () => {
    test('Regular and Large icons render', async ({ page, mount }) => {
        await mount(IconChatConversation);
        await mount(IconChatConversationLarge);

        await percySnapshot(page, 'PIE Icons Webc - Regular and Large icons render', percyWidths);
    });

    test('Regular and Large icons resize based on size prop', async ({ page, mount }) => {
        await mount(IconChatConversation, {
            props: {
                size: 'xxl',
            },
        });

        await mount(IconChatConversationLarge, {
            props: {
                size: 80,
            },
        });

        await percySnapshot(page, 'PIE Icons Webc - Regular and Large icons render', percyWidths);
    });
});
