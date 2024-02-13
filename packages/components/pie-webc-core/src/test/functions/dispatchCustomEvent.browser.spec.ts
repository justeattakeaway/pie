import { test, expect } from '@sand4rt/experimental-ct-web';
import { MockComponent } from './MockComponent.ts';

test.describe('dispatchCustomEvent function', () => {
    test('should dispatch an event when called', async ({ mount, page }) => {
        // Arrange
        const events : Array<Event> = [];

        await mount(MockComponent, {
            on: {
                'mocked-event': (event: Event) => events.push(event),
            },
        });

        // Act
        await page.locator('[data-test-id="dispatch-custom-event-mock"]').click();

        // Assert
        expect(events).toHaveLength(1);
    });
});
