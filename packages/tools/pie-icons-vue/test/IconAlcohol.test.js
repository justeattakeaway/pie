import { mount } from '@vue/test-utils';
/* eslint-disable import/no-extraneous-dependencies */
import {
    afterEach,
    describe,
    expect,
    test,
    vi,
} from 'vitest';
/* eslint-enable import/no-extraneous-dependencies */

import IconAlcohol from '../icons/IconAlcohol';

describe('IconAlcohol (Regular variant) ::', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

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

    test.each([
        'xxs',
        'xxxl',
        '',
    ])('should not allow invalid sizes - %s', (iconSize) => {
        // Arrange
        const errorMock = vi.fn();
        console.error = errorMock;

        const propsData = { iconSize };

        // Act
        const wrapper = mount(IconAlcohol, { propsData });

        // Assert
        expect(wrapper.classes()).not.toContain(`c-pieIcon--${iconSize}`);
        expect(wrapper.classes()).toContain('c-pieIcon--xs'); // Default size
        expect(errorMock).toHaveBeenCalledTimes(1);
    });

    test('should ignore custom height and width', () => {
        // Arrange
        const propsData = {
            height: '40px',
            width: '100px',
        };

        // Act
        const wrapper = mount(IconAlcohol, { propsData });

        // Assert
        expect(wrapper.html()).not.toContain('width');
        expect(wrapper.html()).not.toContain('height');
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
        expect(wrapper.classes()).toHaveLength(4);
    });
});
