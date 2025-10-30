import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

function getEslintInstance(options = {}) {
    const { parser } = options;

    const baseConfig = {
        plugins: ['@justeattakeaway/snacks-pie-migration'],
        rules: {
            '@justeattakeaway/snacks-pie-migration/deprecated-components': 'error'
        },
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        }
    };

    // Add TypeScript parser if specified
    if (parser === 'ts') {
        baseConfig.parser = '@typescript-eslint/parser';
    }

    return new ESLint({
        useEslintrc: false,
        baseConfig,
    });
}

function lintText(sourceCode, options = {}) {
    const { parser, filePath = 'test.js' } = options;
    return getEslintInstance({ parser }).lintText(sourceCode, { filePath });
}

const tsOptions = {
    parser: 'ts',
    filePath: 'test.ts'
}

describe('deprecated-components rule', () => {
    describe('plain JavaScript', () => {
        it('detects deprecated components', async () => {
            const sourceCode = `import { Button } from 'snacks-design-system';`;
            const result = await lintText(sourceCode);

            expect(result[0].messages[0]).toMatchSnapshot();
        });

        it('doesnt detect deprecated components when the component is not in the deprecation list', async () => {
            const sourceCode = `import { FooBar } from 'snacks-design-system';`;
            const result = await lintText(sourceCode);

            expect(result[0].messages.length).toBe(0);
        });
    });
    describe('TypeScript', () => {
        it('handles TypeScript syntax without breaking', async () => {
            const sourceCode = `const str:string = '1';`;
            const result = await lintText(sourceCode, tsOptions);

            expect(result[0].messages.length).toBe(0);
        });

        it('doesnt detect deprecated components when the component is not in the deprecation list', async () => {
            const sourceCode = `import { FooBar } from 'snacks-design-system'; const str:string = '1';`;
            const result = await lintText(sourceCode, tsOptions);

            expect(result[0].messages.length).toBe(0);
        });

        it('detects deprecated components in TypeScript', async () => {
            const sourceCode = `import { Button } from 'snacks-design-system'; const str:string = '1';`;
            const result = await lintText(sourceCode, tsOptions);

            expect(result[0].messages[0]).toMatchSnapshot();
        });
    });
});
