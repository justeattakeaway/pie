import { getAllPropCombinations } from '../get-all-prop-combos';

describe('getAllPropCombinations', () => {
    test('With boolean properties', () => {
        const result = getAllPropCombinations({ key1: true, key2: true });
        expect(result).toEqual([
            { key1: true, key2: true },
            { key1: true, key2: false },
            { key1: false, key2: true },
            { key1: false, key2: false },
        ]);
    });

    test('With array properties', () => {
        const result = getAllPropCombinations({ key1: [1, 2], key2: ['a', 'b'] });
        expect(result).toEqual([
            { key1: 1, key2: 'a' },
            { key1: 1, key2: 'b' },
            { key1: 2, key2: 'a' },
            { key1: 2, key2: 'b' },
        ]);
    });

    test('With mixed boolean and array properties', () => {
        const result = getAllPropCombinations({ key1: true, key2: [1, 2] });
        expect(result).toEqual([
            { key1: true, key2: 1 },
            { key1: true, key2: 2 },
            { key1: false, key2: 1 },
            { key1: false, key2: 2 },
        ]);
    });
});

