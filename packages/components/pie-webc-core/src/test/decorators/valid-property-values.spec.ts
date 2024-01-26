import {
    beforeEach,
    afterEach,
    describe,
    it,
    expect,
    vi,
} from 'vitest';

import { validPropertyValues } from '../../decorators/valid-property-values';

describe('validPropertyValues', () => {
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
        @validPropertyValues('mock-component', ['red', 'green', 'blue'], 'red')
            color = 'red';
    }

    it('should allow value to be updated with a valid value', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = 'green';

        // Assert
        expect(mockComponent.color).toBe('green');
        expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should fallback to the default value if an invalid value is assigned', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = 'yellow';

        // Assert
        expect(mockComponent.color).toBe('red');
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should log an error message if an invalid value is assigned', () => {
        // Arrange
        const mockComponent = new MockComponent();

        // Act
        mockComponent.color = 'yellow';

        // Assert
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            '<mock-component> Invalid value "yellow" provided for property "color".',
            'Must be one of: red | green | blue.',
            'Falling back to default value: "red"',
        );
    });
});
