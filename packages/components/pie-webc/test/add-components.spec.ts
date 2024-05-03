import {
    beforeEach,
    afterEach,
    describe,
    it,
    expect,
    vi,
} from 'vitest';

describe('requiredProperty', () => {
    beforeEach(() => {
        console.log('beforeEach');
    });

    afterEach(() => {
        console.log('afterEach');
    });

    it('test', () => {
        expect(1).toBe(1);
    });
});
