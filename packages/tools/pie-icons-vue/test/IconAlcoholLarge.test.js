import { mount } from '@vue/test-utils';

import IconAlcoholLarge from '../icons/IconAlcoholLarge';

describe('IconAlcoholLarge', () => {
    test('should exist', () => {
        // Arrange & Act
        const wrapper = mount(IconAlcoholLarge);

        // Assert
        expect(wrapper.exists()).toBe(true);
    });

    test.each([
        32, 40, 48, 120
    ])('should not apply additional classes for large icon of size "%s"', (iconSize) => {
        // Arrange
        const propsData = { iconSize };

        // Act
        const wrapper = mount(IconAlcoholLarge, { propsData });

        // Assert
        expect(wrapper.classes()).toEqual(['c-pieIcon', 'c-pieIcon--alcoholLarge']);
    });
});
