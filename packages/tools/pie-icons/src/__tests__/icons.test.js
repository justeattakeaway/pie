/* eslint-env jest */
import icons from '../icons';

jest.mock('../../dist/icons.json', () => ({
    icon1: {
        contents: '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
    },
    icon2: {
        contents: '<circle cx="12" cy="12" r="11" />',
    },
}));

test('exports correct object', () => {
    expect(icons).toMatchSnapshot();
});
