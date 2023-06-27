import { mount } from '@vue/test-utils';
import {
    describe,
    expect,
    test,
    vi,
} from 'vitest';

import IconAlcoholLarge from '../icons/IconAlcoholLarge';

describe('IconAlcoholLarge (Large variant) ::', () => {
    test('should exist', () => {
        // Arrange & Act
        const wrapper = mount(IconAlcoholLarge);

        // Assert
        expect(wrapper.exists()).toBe(true);
    });

    describe('`size` prop', () => {
        describe('validator', () => {
            test.each([
                32,
                40,
                120
            ])('should allow valid sizes - %s', (size) => {
                // Arrange
                const { validator } = IconAlcoholLarge.props.size;

                // Act
                const isValid = validator(size);

                // Assert
                expect(isValid).toBe(true);
            });

            test.each([
                24, // Too small
                36, // Not a multiple of 8
            ])('should not allow invalid sizes - %s', (size) => {
                // Arrange
                const { validator } = IconAlcoholLarge.props.size;

                // Act
                const isValid = validator(size);

                // Assert
                expect(isValid).toBe(false);
            });
        });
    });

    describe('when mapping to attributes', () => {
        test.each([
            32,
            40,
            120
        ])('should be correctly mapped to width and height - %s', (size) => {
            // Arrange
            const propsData = { size };

            // Act
            const wrapper = mount(IconAlcoholLarge, { propsData });

            // Assert
            expect(wrapper.html()).toContain(`width="${size}"`);
            expect(wrapper.html()).toContain(`height="${size}"`);
        });

        test.each([
            24, // Too small
            36, // Not a multiple of 8
        ])('should fall back from %s to the default size', (size) => {
            // Arrange
            const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

            const propsData = { size };

            // Act
            const wrapper = mount(IconAlcoholLarge, { propsData });

            // Assert
            expect(wrapper.html()).toContain('width="32"');
            expect(wrapper.html()).toContain('height="32"');
            expect(spy).toHaveBeenCalled();
            spy.mockRestore();
        });
    });
});
