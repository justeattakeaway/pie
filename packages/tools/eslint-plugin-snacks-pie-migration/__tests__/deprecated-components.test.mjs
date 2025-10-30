import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

// Configure ESLint to use our plugin AND rule
const eslint = new ESLint({
    useEslintrc: false,
    baseConfig: {
        plugins: ['@justeattakeaway/snacks-pie-migration'],
        rules: {
            '@justeattakeaway/snacks-pie-migration/deprecated-components': 'error'
        },
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        }
    },
});

describe('deprecated-components rule', () => {
    describe('import declarations', () => {
        it('detects deprecated components', async () => {
            const sourceCode = `import { Button } from 'snacks-design-system';`;
            const result = await eslint.lintText(sourceCode, { filePath: 'test.js' });

            expect(result[0].messages[0]).toMatchSnapshot();
        })
        it('doesnt detect deprecated components when the component is not in the deprecation list', async () => {
            const sourceCode = `import { FooBar } from 'snacks-design-system';`;
            const result = await eslint.lintText(sourceCode, { filePath: 'test.js' });

            expect(result.length).toBe(1);
            expect(result[0].messages.length).toBe(0);
        })
    });
});
