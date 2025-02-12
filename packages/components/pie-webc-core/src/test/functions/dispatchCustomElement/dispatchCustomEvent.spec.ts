import {
    describe,
    it,
    expect,
    vi,
    beforeEach,
    afterEach,
} from 'vitest';
import { MockComponent } from './MockComponent.ts';

describe('dispatchCustomEvent function', () => {
    let mockComponent: MockComponent;
    let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        mockComponent = new MockComponent();
        document.body.appendChild(mockComponent);
        consoleWarnSpy = vi.spyOn(console, 'warn');
    });

    afterEach(() => {
        document.body.removeChild(mockComponent);
        vi.restoreAllMocks();
    });

    it('should dispatch an event when clicked', async () => {
        // Arrange
        const events: Array<Event> = [];
        mockComponent.addEventListener('pie-mock-event', (event: Event) => events.push(event));

        // Act
        await mockComponent.updateComplete;
        const button = mockComponent.shadowRoot?.querySelector('[data-test-id="dispatch-custom-event-mock"]');
        if (!button) {
            throw new Error('Button not found');
        }
        (button as HTMLButtonElement).click();

        // Assert
        expect(events).toHaveLength(1);
    });

    it('should call console.warn when event name does not start with "pie-"', async () => {
        // Arrange
        mockComponent.eventName = 'mock-event';

        // Act
        await mockComponent.updateComplete;
        const button = mockComponent.shadowRoot?.querySelector('[data-test-id="dispatch-custom-event-mock"]');
        if (!button) {
            throw new Error('Button not found');
        }
        (button as HTMLButtonElement).click();

        // Assert
        expect(consoleWarnSpy).toHaveBeenCalledWith('A custom event name should start with `pie-`');
    });
});
