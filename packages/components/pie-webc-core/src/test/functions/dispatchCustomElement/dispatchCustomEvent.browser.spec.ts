import { test, expect } from '@sand4rt/experimental-ct-web';
import { MockComponent } from './MockComponent.ts';

test.describe('dispatchCustomEvent function', () => {
    test('should dispatch an event when clicked', async ({ mount, page }) => {
        // Arrange
        const events : Array<Event> = [];

        await mount(MockComponent, {
            on: {
                'pie-mock-event': (event: Event) => events.push(event),
            },
        });

        // Act
        await page.locator('[data-test-id="dispatch-custom-event-mock"]').click();

        // Assert
        expect(events).toHaveLength(1);
    });

    test('should call console.warn when event name do not start with "pie-"', async ({ mount, page }) => {
        // Arrange
        let result = '';
        const expected = 'A custom event name should start with `pie-`';

        await mount(MockComponent, {
            props: {
                eventName: 'mock-event',
            },
        });

        page.on('console', (msg) => {
            if (msg.type() === 'warning') {
                result = msg.text();
            }
        });

        // Act
        await page.locator('[data-test-id="dispatch-custom-event-mock"]').click();

        // Assert
        expect(result).toMatch(expected);
    });
});
