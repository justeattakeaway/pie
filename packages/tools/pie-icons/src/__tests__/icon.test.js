import Icon, { normaliseClassname } from '../icon';

const icon1 = new Icon(
    'test',
    '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
    '',
    '',
    ['hello', 'world', 'foo', 'bar'],
);

const icon2 = new Icon(
    'test',
    '<line x1="23" y1="1" x2="1" y2="23" /><line x1="1" y1="1" x2="23" y2="23" />',
);

test('constructs icon object correctly', () => {
    expect(icon1).toMatchSnapshot();
    expect(icon2).toMatchSnapshot();
});

describe('toSvg()', () => {
    test('returns correct string when run with no additional attrs', () => {
        expect(icon1.toSvg()).toMatchSnapshot();
    });
    test('appends fill and stroke-width attributes when passed through', () => {
        expect(icon1.toSvg({ fill: 'red', 'stroke-width': 1 })).toMatchSnapshot();
    });
    test('appends classnames and attributes when passed through as attrs', () => {
        expect(icon1.toSvg({ class: 'foo bar', fill: 'red' })).toMatchSnapshot();
    });

    test('adds React Native default attrs when platform = "reactNative"', () => {
        expect(icon1.toSvg({}, 'reactNative')).toMatchSnapshot();
    });
});

test('toString() returns correct string', () => {
    expect(icon1.toString()).toMatchSnapshot();
});

describe('normaliseClassname()', () => {
    test('returns camelCased String when capitalised string is passed in', () => {
        const classname = 'Alert';
        expect(normaliseClassname(classname)).toBe('alert');
    });

    test('returns camelCased String when dashed string is passed in', () => {
        const classname = 'alert-filled-large';
        expect(normaliseClassname(classname)).toBe('alertFilledLarge');
    });

    test('returns camelCased String when dashed capitalised string is passed in', () => {
        const classname = 'Alert-filled-large';
        expect(normaliseClassname(classname)).toBe('alertFilledLarge');
    });
});
