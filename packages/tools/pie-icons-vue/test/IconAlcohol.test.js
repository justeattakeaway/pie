import { mount } from '@vue/test-utils';
import {
    describe,
    expect,
    test,
    vi,
} from 'vitest';

// eslint-disable-next-line import/no-unresolved
import { sizeToValueMap } from '@justeattakeaway/pie-icons-configs';

// eslint-disable-next-line import/no-unresolved, import/extensions
import IconAlcohol from '../esm/IconAlcohol';

describe('IconAlcohol (Regular variant) ::', () => {
    test('should exist', () => {
        // Arrange & Act
        const wrapper = mount(IconAlcohol);

        // Assert
        expect(wrapper.exists()).toBe(true);
    });

    test.each([
        ['xs', sizeToValueMap.xs],
        ['s', sizeToValueMap.s],
        ['m', sizeToValueMap.m],
        ['l', sizeToValueMap.l],
        ['xl', sizeToValueMap.xl],
        ['xxl', sizeToValueMap.xxl],
    ])('should apply correct width and height for each icon size', (sizeKey, sizeValue) => {
        // Arrange
        const propsData = { size: sizeKey };

        // Act
        const wrapper = mount(IconAlcohol, { propsData });

        // Assert
        expect(wrapper.html()).toContain(`width="${sizeValue}"`);
        expect(wrapper.html()).toContain(`height="${sizeValue}"`);
    });

    test.each([
        'xxs',
        'xxxl',
        '',
    ])('should not allow invalid sizes - %s', (size) => {
        // Arrange
        const defaultIconSize = sizeToValueMap.xs;
        const spy = vi.spyOn(console, 'error').mockImplementation(vi.fn());

        const propsData = { size };

        // Act
        const wrapper = mount(IconAlcohol, { propsData });

        // Assert
        expect(wrapper.html()).toContain(`width="${defaultIconSize}"`);
        expect(wrapper.html()).toContain(`height="${defaultIconSize}"`);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    test('should ignore custom height and width', () => {
        // Arrange
        const defaultIconSize = sizeToValueMap.xs;

        const propsData = {
            height: '40px',
            width: '100px',
        };

        // Act
        const wrapper = mount(IconAlcohol, { propsData });

        // Assert
        expect(wrapper.html()).toContain(`width="${defaultIconSize}"`);
        expect(wrapper.html()).toContain(`height="${defaultIconSize}"`);
    });

    test('should respect user-defined classes', () => {
        // Arrange
        const context = {
            class: 'test-class',
        };

        // Act
        const wrapper = mount(IconAlcohol, { context });

        // Assert
        expect(wrapper.classes()).toContain('test-class');
        expect(wrapper.classes()).toHaveLength(3);
    });
});
