import { describe, it, expect } from 'vitest';
import { diffComponentData, formatPrBody } from '../../eslint-plugin-update/shared.js';

describe('diffComponentData', () => {
    it('returns empty diff when stored and current are identical', () => {
        const data = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'stable' },
        };
        const result = diffComponentData(data, data);
        expect(result).toEqual({
            added: [], removed: [], statusChanged: [], snacksChanged: [],
        });
    });

    it('detects added components', () => {
        const stored = {};
        const current = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'stable' },
        };
        const result = diffComponentData(stored, current);
        expect(result.added).toEqual([{
            snacksComponent: 'PieButton',
            piePackage: '@justeattakeaway/pie-button',
            status: 'stable',
        }]);
        expect(result.removed).toHaveLength(0);
    });

    it('detects removed components', () => {
        const stored = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'stable' },
        };
        const current = {};
        const result = diffComponentData(stored, current);
        expect(result.removed).toEqual([{
            snacksComponent: 'PieButton',
            piePackage: '@justeattakeaway/pie-button',
            status: 'stable',
        }]);
        expect(result.added).toHaveLength(0);
    });

    it('detects status changes', () => {
        const stored = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'beta' },
        };
        const current = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'stable' },
        };
        const result = diffComponentData(stored, current);
        expect(result.statusChanged).toEqual([{
            snacksComponent: 'PieButton',
            piePackage: '@justeattakeaway/pie-button',
            from: 'beta',
            to: 'stable',
        }]);
        expect(result.snacksChanged).toHaveLength(0);
    });

    it('detects piePackage changes when status is the same', () => {
        const stored = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'stable' },
        };
        const current = {
            PieButton: { piePackage: '@justeattakeaway/pie-button-v2', status: 'stable' },
        };
        const result = diffComponentData(stored, current);
        expect(result.snacksChanged).toEqual([{
            snacksComponent: 'PieButton',
            from: '@justeattakeaway/pie-button',
            to: '@justeattakeaway/pie-button-v2',
            status: 'stable',
        }]);
        expect(result.statusChanged).toHaveLength(0);
    });

    it('prioritises statusChanged over snacksChanged when both differ', () => {
        const stored = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'beta' },
        };
        const current = {
            PieButton: { piePackage: '@justeattakeaway/pie-button-v2', status: 'stable' },
        };
        const result = diffComponentData(stored, current);
        expect(result.statusChanged).toHaveLength(1);
        expect(result.snacksChanged).toHaveLength(0);
    });

    it('handles multiple components across all diff categories', () => {
        const stored = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'stable' },
            PieLink: { piePackage: '@justeattakeaway/pie-link', status: 'beta' },
            PieOld: { piePackage: '@justeattakeaway/pie-old', status: 'stable' },
        };
        const current = {
            PieButton: { piePackage: '@justeattakeaway/pie-button', status: 'stable' },
            PieLink: { piePackage: '@justeattakeaway/pie-link', status: 'stable' },
            PieNew: { piePackage: '@justeattakeaway/pie-new', status: 'alpha' },
        };
        const result = diffComponentData(stored, current);
        expect(result.added).toEqual([{ snacksComponent: 'PieNew', piePackage: '@justeattakeaway/pie-new', status: 'alpha' }]);
        expect(result.removed).toEqual([{ snacksComponent: 'PieOld', piePackage: '@justeattakeaway/pie-old', status: 'stable' }]);
        expect(result.statusChanged).toEqual([{
            snacksComponent: 'PieLink', piePackage: '@justeattakeaway/pie-link', from: 'beta', to: 'stable',
        }]);
        expect(result.snacksChanged).toHaveLength(0);
    });
});

describe('formatPrBody', () => {
    it('returns empty string when diff has no changes', () => {
        const diff = {
            added: [], removed: [], statusChanged: [], snacksChanged: [],
        };
        expect(formatPrBody(diff)).toBe('');
    });

    it('formats added components', () => {
        const diff = {
            added: [{ snacksComponent: 'PieButton', piePackage: '@justeattakeaway/pie-button', status: 'stable' }],
            removed: [],
            statusChanged: [],
            snacksChanged: [],
        };
        expect(formatPrBody(diff)).toBe('## Added\n\n- `PieButton` → `@justeattakeaway/pie-button` (stable)');
    });

    it('formats removed components', () => {
        const diff = {
            added: [],
            removed: [{ snacksComponent: 'PieOld', piePackage: '@justeattakeaway/pie-old' }],
            statusChanged: [],
            snacksChanged: [],
        };
        expect(formatPrBody(diff)).toBe('## Removed\n\n- `PieOld` (was `@justeattakeaway/pie-old`)');
    });

    it('formats status changes', () => {
        const diff = {
            added: [],
            removed: [],
            statusChanged: [{
                snacksComponent: 'PieButton', piePackage: '@justeattakeaway/pie-button', from: 'beta', to: 'stable',
            }],
            snacksChanged: [],
        };
        expect(formatPrBody(diff)).toBe('## Status Changes\n\n- `PieButton` → `@justeattakeaway/pie-button`: beta → **stable**');
    });

    it('formats package name changes', () => {
        const diff = {
            added: [],
            removed: [],
            statusChanged: [],
            snacksChanged: [{
                snacksComponent: 'PieButton', from: '@justeattakeaway/pie-button', to: '@justeattakeaway/pie-button-new', status: 'stable',
            }],
        };
        expect(formatPrBody(diff)).toBe('## Package Changes\n\n- `PieButton` (stable): `@justeattakeaway/pie-button` → `@justeattakeaway/pie-button-new`');
    });

    it('joins multiple sections with double newlines', () => {
        const diff = {
            added: [{ snacksComponent: 'PieNew', piePackage: '@justeattakeaway/pie-new', status: 'alpha' }],
            removed: [{ snacksComponent: 'PieOld', piePackage: '@justeattakeaway/pie-old' }],
            statusChanged: [],
            snacksChanged: [],
        };
        const body = formatPrBody(diff);
        expect(body).toBe('## Added\n\n- `PieNew` → `@justeattakeaway/pie-new` (alpha)\n\n## Removed\n\n- `PieOld` (was `@justeattakeaway/pie-old`)');
    });

    it('formats multiple items within a section', () => {
        const diff = {
            added: [
                { snacksComponent: 'PieButton', piePackage: '@justeattakeaway/pie-button', status: 'stable' },
                { snacksComponent: 'PieLink', piePackage: '@justeattakeaway/pie-link', status: 'beta' },
            ],
            removed: [],
            statusChanged: [],
            snacksChanged: [],
        };
        expect(formatPrBody(diff)).toBe('## Added\n\n- `PieButton` → `@justeattakeaway/pie-button` (stable)\n- `PieLink` → `@justeattakeaway/pie-link` (beta)');
    });
});
