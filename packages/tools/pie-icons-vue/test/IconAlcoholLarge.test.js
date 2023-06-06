import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest'; // eslint-disable-line import/no-extraneous-dependencies

import IconAlcoholLarge from '../icons/IconAlcoholLarge';
import { largeIconSizeDefault } from '../icons/configs';

describe('IconAlcoholLarge', () => {
    test('should exist', () => {
        // Arrange & Act
        const wrapper = mount(IconAlcoholLarge);

        // Assert
        expect(wrapper.exists()).toBe(true);
    });

    describe('iconSize prop', () => {
        describe('validator', () => {
            test.each([
                32,
                40,
                120
            ])('should allow valid sizes - %s', (iconSize) => {
                // Arrange
                const { validator } = IconAlcoholLarge.props.iconSize;

                // Act
                const isValid = validator(iconSize);

                // Assert
                expect(isValid).toBe(true);
            });

            test.each([
                24, // Too small
                36, // Not a multiple of 8
            ])('should not allow invalid sizes - %s', (iconSize) => {
                // Arrange
                const { validator } = IconAlcoholLarge.props.iconSize;

                // Act
                const isValid = validator(iconSize);

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
        ])('should be correctly mapped to width and height - %s', (iconSize) => {
            // Arrange
            const propsData = { iconSize };

            // Act
            const wrapper = mount(IconAlcoholLarge, { propsData });

            // Assert
            expect(wrapper.html()).toContain(`width="${iconSize}"`);
            expect(wrapper.html()).toContain(`height="${iconSize}"`);
        });

        test.each([
            24, // Too small
            36, // Not a multiple of 8
        ])('should fall back to the default size - %s', (iconSize) => {
            // Arrange
            const propsData = { iconSize };

            // Act
            const wrapper = mount(IconAlcoholLarge, { propsData });

            // Assert
            expect(wrapper.html()).toContain(`width="${largeIconSizeDefault}"`);
            expect(wrapper.html()).toContain(`height="${largeIconSizeDefault}"`);
        });
    });
});
