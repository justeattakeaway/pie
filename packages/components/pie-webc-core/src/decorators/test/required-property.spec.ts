import {
    beforeEach,
    afterEach,
    describe,
    it,
    expect,
    vi,
} from 'vitest';

import { requiredPropertyDecoratorFactory } from '../required-property';

const mockComponentSelector = 'mock-component';
const requiredProperty = requiredPropertyDecoratorFactory(mockComponentSelector);

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
        @requiredProperty()
            color?: string | null;

        private _requestUpdateArgs = {};

        requestUpdate (propertyKey: string, oldValue: unknown) {
            this._requestUpdateArgs = { propertyKey, oldValue };
        }

        requestUpdateCalledWith () {
            return this._requestUpdateArgs;
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

    it('should call requestUpdate when the property is set', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = 'blue';

        // Assert
        expect(mockComponent.requestUpdateCalledWith()).toStrictEqual({ propertyKey: 'color', oldValue: undefined });
    });
});
