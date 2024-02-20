
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieChip, ChipProps } from '../../src/index.ts';
import { ON_CHIP_CLOSE_EVENT } from '../../src/defs.ts';

const componentSelector = '[data-test-id="pie-chip"]';
const closeBtnSelector = '[data-test-id="chip-close-button"]';

const props: Partial<ChipProps> = {
    variant: 'default',
    isSelected: false,
    isDismissible: false,
    disabled: false,
};

const dismissibleProps: Partial<ChipProps> = {
    variant: 'default',
    isSelected: true,
    isDismissible: true,
};

test.describe('PieChip - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        await mount(PieChip, {
            props,
            slots: {
                default: 'Label',
            },
        });

        // Act
        const chip = page.locator(componentSelector);

        // Assert
        expect(chip).toBeVisible();
    });

    test.describe('if NOT disabled', () => {
        test('closeBtnSelector should emit the close event', async ({ mount, page }) => {
            // Arrange
            const events : Array<Event> = [];

            await mount(PieChip, {
                props: {
                    ...dismissibleProps,
                    disabled: false,
                },
                on: {
                    [ON_CHIP_CLOSE_EVENT]: (event: Event) => events.push(event),
                },
            });

            const chip = page.locator(componentSelector);
            const closeButton = chip.locator(closeBtnSelector);

            // Act
            await closeButton.click();

            // Assert
            expect(events).toHaveLength(1);
        });
    });

    test.describe('if disabled', () => {
        test('closeBtnSelector should be disabled', async ({ mount, page }) => {
            // Arrange
            await mount(PieChip, {
                props: {
                    ...dismissibleProps,
                    disabled: true,
                },
            });

            const chip = page.locator(componentSelector);
            const closeButton = chip.locator(closeBtnSelector);

            // Act && Assert
            await expect(closeButton).toBeDisabled();
        });
    });
});
