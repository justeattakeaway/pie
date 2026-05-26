// eslint-disable-next-line import/no-extraneous-dependencies
import {
    describe, expect, it, vi,
} from 'vitest';
import { extractComponentData } from '../lib/extract-component-data';

function makeDeps (packages) {
    const globSync = vi.fn(() => packages.map((_, i) => `/fake/path/${i}/package.json`));
    const readFileSync = vi.fn((filePath) => {
        const index = parseInt(filePath.split('/')[3], 10);
        return JSON.stringify(packages[index]);
    });

    return { fs: { readFileSync }, globSync };
}

describe('extractComponentData', () => {
    describe('componentStatus filtering', () => {
        it('includes components with beta status', () => {
            const deps = makeDeps([
                { name: '@pie/button', pieMetadata: { componentStatus: 'beta', replaces: { snacks: ['SnacksButton'] } } },
            ]);

            const result = extractComponentData('/fake', deps);

            expect(result).toEqual({ SnacksButton: { piePackage: '@pie/button', status: 'beta' } });
        });

        it('includes components with stable status', () => {
            const deps = makeDeps([
                { name: '@pie/input', pieMetadata: { componentStatus: 'stable', replaces: { snacks: ['SnacksInput'] } } },
            ]);

            const result = extractComponentData('/fake', deps);

            expect(result).toEqual({ SnacksInput: { piePackage: '@pie/input', status: 'stable' } });
        });

        it('excludes components with alpha status', () => {
            const deps = makeDeps([
                { name: '@pie/alpha-comp', pieMetadata: { componentStatus: 'alpha', replaces: { snacks: ['SnacksAlpha'] } } },
                { name: '@pie/button', pieMetadata: { componentStatus: 'stable', replaces: { snacks: ['SnacksButton'] } } },
            ]);

            const result = extractComponentData('/fake', deps);

            expect(result).not.toHaveProperty('SnacksAlpha');
            expect(result).toHaveProperty('SnacksButton');
        });

        it('excludes components with deprecated status', () => {
            const deps = makeDeps([
                { name: '@pie/old', pieMetadata: { componentStatus: 'deprecated', replaces: { snacks: ['SnacksOld'] } } },
                { name: '@pie/button', pieMetadata: { componentStatus: 'stable', replaces: { snacks: ['SnacksButton'] } } },
            ]);

            const result = extractComponentData('/fake', deps);

            expect(result).not.toHaveProperty('SnacksOld');
        });

        it('excludes packages without pieMetadata', () => {
            const deps = makeDeps([
                { name: '@pie/no-meta' },
                { name: '@pie/button', pieMetadata: { componentStatus: 'stable', replaces: { snacks: ['SnacksButton'] } } },
            ]);

            const result = extractComponentData('/fake', deps);

            expect(result).toHaveProperty('SnacksButton');
        });

        it('excludes packages with no snacks replacements', () => {
            const deps = makeDeps([
                { name: '@pie/standalone', pieMetadata: { componentStatus: 'stable', replaces: { snacks: [] } } },
                { name: '@pie/button', pieMetadata: { componentStatus: 'stable', replaces: { snacks: ['SnacksButton'] } } },
            ]);

            const result = extractComponentData('/fake', deps);

            expect(result).toHaveProperty('SnacksButton');
        });
    });

    describe('error handling', () => {
        it('throws when no matching components are found', () => {
            const deps = makeDeps([
                { name: '@pie/alpha', pieMetadata: { componentStatus: 'alpha', replaces: { snacks: ['SnacksAlpha'] } } },
            ]);

            expect(() => extractComponentData('/fake', deps)).toThrow('extractComponentData() failed. No components could be found.');
        });

        it('throws when all packages lack pieMetadata', () => {
            const deps = makeDeps([
                { name: '@pie/no-meta-a' },
                { name: '@pie/no-meta-b' },
            ]);

            expect(() => extractComponentData('/fake', deps)).toThrow('extractComponentData() failed. No components could be found.');
        });

        it('throws when no package files are found', () => {
            const deps = makeDeps([]);

            expect(() => extractComponentData('/fake', deps)).toThrow('extractComponentData() failed. No components could be found.');
        });
    });

    describe('sort order', () => {
        it('returns components sorted alphabetically regardless of discovery order', () => {
            const deps = makeDeps([
                { name: '@pie/z', pieMetadata: { componentStatus: 'stable', replaces: { snacks: ['SnacksZebra', 'SnacksAardvark', 'SnacksMango'] } } },
            ]);

            const result = extractComponentData('/fake', deps);

            expect(Object.keys(result)).toEqual(['SnacksAardvark', 'SnacksMango', 'SnacksZebra']);
        });

        it('produces a result with deterministic order', () => {
            const packages = [
                { name: '@pie/b', pieMetadata: { componentStatus: 'beta', replaces: { snacks: ['SnacksAardvark'] } } },
                { name: '@pie/a', pieMetadata: { componentStatus: 'stable', replaces: { snacks: ['SnacksZebra'] } } },
                { name: '@pie/b', pieMetadata: { componentStatus: 'beta', replaces: { snacks: ['SnacksCat'] } } },
            ];

            const depsForwardOrder = makeDeps(packages);

            const result = extractComponentData('/fake', depsForwardOrder);
            expect(result).toMatchSnapshot();
        });
    });
});
