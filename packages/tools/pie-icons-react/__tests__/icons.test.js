import React from 'react';
import renderer from 'react-test-renderer';
import IconAlcohol from '../icons/IconAlcohol';

it('renders correctly without extraClass prop', () => {
  const tree = renderer
    .create(<IconAlcohol />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with extraClass prop', () => {
    const tree = renderer
      .create(<IconAlcohol extraClass="additional-styling" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
});