import {
    beforeEach,
    afterEach,
    describe,
    it,
    expect,
    vi,
} from 'vitest';

import { requiredProperty } from '../required-property';

describe('requiredProperty', () => {
    let consoleErrorSpy: unknown;

    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    // Mock class to test the decorator
    class MockComponent {
        @requiredProperty('mock-component')
            color?: string | null;
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
});
