import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import IconAlcohol from '../icons/IconAlcohol';

describe('Icon', () => {
    it('renders correctly without className prop', () => {
        const tree = renderer
        .create(<IconAlcohol />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with className prop', () => {
        const tree = renderer
        .create(<IconAlcohol className="additional-styling" />)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
