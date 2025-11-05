import { ESLint } from 'eslint';
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import plugin from '../lib/index';

function getEslintInstance () {
    return new ESLint({
        useEslintrc: false,
        baseConfig: {
            ...plugin.configs.recommended,
            processor: undefined,
        },
    });
}

function lintText (sourceCode) {
    return getEslintInstance().lintText(sourceCode);
}

const tsOptions = {
    parser: 'ts',
    filePath: 'test.ts',
};

describe('deprecated-components rule', () => {
    describe('with plain JavaScript syntax', () => {
        it('doesnt detect deprecated components when the component is not in the deprecation list', async () => {
            const sourceCode = 'import { FooBar } from \'snacks-design-system\';';
            const result = await lintText(sourceCode);

            expect(result[0].messages.length).toBe(0);
        });
        it('detects deprecated components', async () => {
            const sourceCode = 'import { Button } from \'snacks-design-system\';';
            const result = await lintText(sourceCode);

            expect(result[0].messages[0]).toMatchSnapshot();
        });
    });
    describe('with TypeScript syntax', () => {
        it('handles TypeScript syntax without breaking', async () => {
            const sourceCode = 'const str:string = \'1\';';
            const result = await lintText(sourceCode, tsOptions);

            expect(result[0].messages.length).toBe(0);
        });
        it('doesnt detect deprecated components when the component is not in the deprecation list', async () => {
            const sourceCode = 'import { FooBar } from \'snacks-design-system\'; const str:string = \'1\';';
            const result = await lintText(sourceCode, tsOptions);

            expect(result[0].messages.length).toBe(0);
        });
        it('detects deprecated components in TypeScript', async () => {
            const sourceCode = 'import { Button } from \'snacks-design-system\'; const str:string = \'1\';';
            const result = await lintText(sourceCode, tsOptions);

            expect(result[0].messages[0]).toMatchSnapshot();
        });
    });
});
