import { mount } from '@vue/test-utils';
/* eslint-disable import/no-extraneous-dependencies */
import {
    describe,
    expect,
    test,
    vi,
} from 'vitest';
/* eslint-enable import/no-extraneous-dependencies */

import IconAlcohol from '../icons/IconAlcohol';
import { regularIconSizeDefault } from '../icons/configs';

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

    test.each([
        'xxs',
        'xxxl',
        '',
    ])('should not allow invalid sizes - %s', (iconSize) => {
        // Arrange
        const consoleError = console.error;
        const errorMock = vi.fn();
        console.error = errorMock;
        const propsData = { iconSize };

        // Act
        const wrapper = mount(IconAlcohol, { propsData });

        // Assert
        expect(wrapper.classes()).not.toContain(`c-pieIcon--${iconSize}`);
        expect(wrapper.classes()).toContain(`c-pieIcon--${regularIconSizeDefault}`);
        expect(errorMock.mock.calls[0][0].startsWith('[Vue warn]: Invalid prop')).toBeTruthy();

        console.error = consoleError;
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
});
