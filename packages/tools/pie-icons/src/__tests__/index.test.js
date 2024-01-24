import { test, expect } from 'vitest';
import pieIcons from '../index';

test('has correct properties', () => {
    expect(pieIcons).toHaveProperty('icons');
    expect(pieIcons).toHaveProperty('replace');
});
