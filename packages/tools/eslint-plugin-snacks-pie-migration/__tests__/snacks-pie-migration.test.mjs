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
                // processor: '@justeattakeaway/snacks-pie-migration/changed-lines',
                parserOptions: {
                    ecmaVersion: 2020,
                    sourceType: 'module',
                }
            },
        });

        const results = await eslint.lintText(testCode, { filePath: 'test.js' });
        // console.log('ESLint results:', JSON.stringify(results, null, 2));
        expect(results[0].messages.length).toBe(1);

        console.log(results[0].messages);
    })
});
