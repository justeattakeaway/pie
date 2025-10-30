import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

describe('snacks-pie-migration', () => {
    it('tests my plugin', async () => {
        const testCode = `const foo = 'baz';`;

        // Configure ESLint to use our plugin
        const eslint = new ESLint({
            useEslintrc: false,
            baseConfig: {
                plugins: ['@justeattakeaway/snacks-pie-migration'],
                rules: {
                    '@justeattakeaway/snacks-pie-migration/snacks-pie-migration': 'error'
                },
                parserOptions: {
                    ecmaVersion: 2020,
                    sourceType: 'module',
                }
            },
        });

        const results = await eslint.lintText(testCode, { filePath: 'test.js' });
        expect(results[0].messages.length).toBe(1);
    })
});
