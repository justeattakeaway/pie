import {
    beforeEach,
    afterEach,
    describe,
    it,
    expect,
    vi,
} from 'vitest';

import { requiredProperty } from '../../decorators/required-property';

describe('requiredProperty', () => {
    let consoleErrorSpy: unknown;

    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    const connectedCallbackSpy = vi.fn();

    // Mock class to test the decorator, with a `connectedCallback` mirroring how real
    // components (e.g. pie-radio, pie-modal) define their lifecycle method on the prototype.
    class MockComponent {
        @requiredProperty('mock-component')
            color?: string | null;

        connectedCallback (): void {
            connectedCallbackSpy();
        }
    }

    it('should log an error if the property is undefined', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = undefined;

        // Assert
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should log an error if the property is null', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = null;

        // Assert
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should log an error if the property is an empty string', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = '';

        // Assert
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should not log an error if the property is a non-empty string', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = 'blue';

        // Assert
        expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    describe('when the component connects', () => {
        beforeEach(() => {
            connectedCallbackSpy.mockClear();
        });

        it('should log an error if the property was never set before connecting', () => {
            // Arrange
            const mockComponent = new MockComponent();

            // Act
            mockComponent.connectedCallback();

            // Assert
            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        });

        it('should not log an error if a valid value was already set before connecting', () => {
            // Arrange
            const mockComponent = new MockComponent();
            mockComponent.color = 'blue';

            // Act
            mockComponent.connectedCallback();

            // Assert
            expect(consoleErrorSpy).not.toHaveBeenCalled();
        });

        it('should not log a duplicate error if an invalid value was already set before connecting', () => {
            // Arrange
            const mockComponent = new MockComponent();
            mockComponent.color = '';

            // Act
            mockComponent.connectedCallback();

            // Assert
            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        });

        it('should still call the original connectedCallback implementation', () => {
            // Arrange
            const mockComponent = new MockComponent();
            mockComponent.color = 'blue';

            // Act
            mockComponent.connectedCallback();

            // Assert
            expect(connectedCallbackSpy).toHaveBeenCalledTimes(1);
        });

        it('should only log once if the component reconnects repeatedly while still missing the property', () => {
            // Arrange
            const mockComponent = new MockComponent();

            // Act
            mockComponent.connectedCallback();
            mockComponent.connectedCallback();
            mockComponent.connectedCallback();

            // Assert
            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        });
    });
});
