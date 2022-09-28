/* eslint-env jest */
import Icon from '../icon';

const icon1 = new Icon(
    'test',
    '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
    '',
    ['hello', 'world', 'foo', 'bar']
);

const icon2 = new Icon(
    'test',
    '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />'
);

test('constructs icon object correctly', () => {
    expect(icon1).toMatchSnapshot();
    expect(icon2).toMatchSnapshot();
});

describe('toSvg()', () => {
    test('returns correct string when run with no additional attrs', () => {
        expect(icon1.toSvg()).toMatchSnapshot();
    });
    test('appends color and stroke-width attributes when passed through', () => {
        expect(icon1.toSvg({ color: 'red', 'stroke-width': 1 })).toMatchSnapshot();
    });
    test('appends classnames and attributes when passed through as attrs', () => {
        expect(icon1.toSvg({ class: 'foo bar', color: 'red' })).toMatchSnapshot();
    });

    test('adds React Native default attrs when platform = "reactNative"', () => {
        expect(icon1.toSvg({}, 'reactNative')).toMatchSnapshot();
    });
});

test('toString() returns correct string', () => {
    expect(icon1.toString()).toMatchSnapshot();
});
