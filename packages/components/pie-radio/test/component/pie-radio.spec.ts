
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieRadio } from '../../src/index.ts';
import { defaultProps } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-radio"]';

test.describe('PieRadio - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieRadio, {
            props: defaultProps,
            slots: {
                default: 'Label',
            },
        });

        // Act
        const radio = page.locator(componentSelector);

        // Assert
        expect(radio).toBeVisible();
    });
});
