import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { sizeToValueMap, largeIconSizeDefault } from '@justeattakeaway/pie-icons-configs';

import IconAlcohol from '../icons/IconAlcohol';
import IconAlcoholLarge from '../esm/IconAlcoholLarge';

describe('Icon', () => {
    [IconAlcohol, IconAlcoholLarge].forEach((Icon) => {
        it('renders correctly without className prop', () => {
            // Arrange & Act
            const tree = renderer.create(<Icon />).toJSON();

            // Assert
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with className prop', () => {
            // Arrange & Act
            const tree = renderer
            .create(<IconAlcohol className="additional-styling" />)
            .toJSON();

            // Assert
            expect(tree).toMatchSnapshot();
        });
    });
});
describe('Regular Icon', () => {
    it.each([
        ['xs', sizeToValueMap.xs],
        ['s', sizeToValueMap.s],
        ['m', sizeToValueMap.m],
        ['l', sizeToValueMap.l],
        ['xl', sizeToValueMap.xl],
        ['xxl', sizeToValueMap.xxl],
    ])('should apply correct width and height for each icon size', (sizeKey, sizeValue) => {
        // Arrange
        const tree = renderer.create(<IconAlcohol size={sizeKey} />).toJSON();

        // Assert
        expect(tree).toHaveProperty('props.width', sizeValue);
        expect(tree).toHaveProperty('props.height', sizeValue);
    });

    it.each([
        'xxs',
        'xxxl',
        ''
    ])('should not allow invalid sizes - %s', (size) => {
        // Arrange
        const defaultIconSize = sizeToValueMap.xs;

        // Act
        const tree = renderer.create(<IconAlcohol size={size} />).toJSON();

        // Assert
        expect(tree).toHaveProperty('props.width', defaultIconSize);
        expect(tree).toHaveProperty('props.height', defaultIconSize);
    });

    it('should ignore custom height and width', () => {
        // Arrange
        const defaultIconSize = sizeToValueMap.xs;

        const props = {
            height: '40px',
            width: '100px',
        };

        // Act
        const tree = renderer.create(<IconAlcohol {...props} />).toJSON();

        // Assert
        expect(tree).toHaveProperty('props.width', defaultIconSize);
        expect(tree).toHaveProperty('props.height', defaultIconSize);
    });
});

describe('Large Icon', () => {
    it('renders correctly without className prop', () => {
        // Arrange & Act
        const tree = renderer.create(<IconAlcoholLarge />).toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with className prop', () => {
        // Arrange & Act
        const tree = renderer
        .create(<IconAlcoholLarge className="additional-styling" />)
        .toJSON();

        // Assert
        expect(tree).toMatchSnapshot();
    });

    it.each([
        32,
        40,
        120,
    ])('should apply correct width and height for each icon size', (size) => {
        // Arrange
        const tree = renderer.create(<IconAlcoholLarge size={size} />).toJSON();

        // Assert
        expect(tree).toHaveProperty('props.width', size);
        expect(tree).toHaveProperty('props.height', size);
    });

    it.each([
        24, // Too small
        36, // Not a multiple of 8
    ])('should not allow invalid sizes - %s', (size) => {
        // Act
        const tree = renderer.create(<IconAlcoholLarge size={size} />).toJSON();

        // Assert
        expect(tree).toHaveProperty('props.width', largeIconSizeDefault);
        expect(tree).toHaveProperty('props.height', largeIconSizeDefault);
    });

    it('should ignore custom height and width', () => {
        const props = {
            height: '40px',
            width: '100px',
        };

        // Act
        const tree = renderer
            .create(<IconAlcoholLarge {...props} />)
            .toJSON();

        // Assert
        expect(tree).toHaveProperty('props.width', largeIconSizeDefault);
        expect(tree).toHaveProperty('props.height', largeIconSizeDefault);
    });
});
