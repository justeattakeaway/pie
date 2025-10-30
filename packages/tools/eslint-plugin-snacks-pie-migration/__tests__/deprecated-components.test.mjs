import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

function getEslintInstance() {
    return new ESLint({
        useEslintrc: false,
        baseConfig: {
            plugins: ['@justeattakeaway/snacks-pie-migration'],
            rules: {
                '@justeattakeaway/snacks-pie-migration/deprecated-components': 'error'
            },
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
            }
        },
    });
}

function lintText(sourceCode) {
    return getEslintInstance().lintText(sourceCode, { filePath: 'test.js' });
}

describe('deprecated-components rule', () => {
    describe('import declarations', () => {
        it('detects deprecated components', async () => {
            const sourceCode = `import { Button } from 'snacks-design-system';`;
            const result = await lintText(sourceCode);

            expect(result[0].messages[0]).toMatchSnapshot();
        })
        it('doesnt detect deprecated components when the component is not in the deprecation list', async () => {
            const sourceCode = `import { FooBar } from 'snacks-design-system';`;
            const result = await lintText(sourceCode);

            expect(result.length).toBe(1);
            expect(result[0].messages.length).toBe(0); // No errors here
        })
    });
});
