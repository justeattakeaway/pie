import { mount } from '@vue/test-utils';

import IconAlcohol from '../icons/IconAlcohol';

describe('IconAlcohol', () => {
    test('should exist', () => {
        // Arrange & Act
        const wrapper = mount(IconAlcohol);

        // Assert
        expect(wrapper.exists()).toBe(true);
    });

    test.each([
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ])('should apply correct class for size "%s"', (iconSize) => {
        // Arrange
        const propsData = { iconSize };

        // Act
        const wrapper = mount(IconAlcohol, { propsData });

        // Assert
        expect(wrapper.classes()).toContain(`c-pieIcon--${iconSize}`);
        expect(wrapper.classes()).toHaveLength(3);
    });
});
