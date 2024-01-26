// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest';
import { getReactSvgProps } from '../configs-react';

describe('getReactSvgProps', () => {
    describe('when called', () => {
        it('returns an object that contains a className property, width and height', () => {
            const received = getReactSvgProps('c-pieIcon c-pieIcon--app-order', null, 'xs', 'IconAppOrder');

            expect(received).toHaveProperty('className');
            expect(received).not.toHaveProperty('class');
            expect(received).toHaveProperty('width');
            expect(received).toHaveProperty('height');
        });
    });
});
