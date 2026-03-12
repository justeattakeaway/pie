import { ESLint } from 'eslint';
import { createRequire } from 'node:module';
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import plugin from '../lib/index';

const require = createRequire(import.meta.url);
const solutions = require('../snacks-components-solutions');

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
        it('detects components that have a PIE replacement', async () => {
            const sourceCode = 'import { Button } from \'snacks-design-system\';';
            const result = await lintText(sourceCode);

            expect(result[0].messages[0]).toMatchSnapshot();
        });

        it('detects deprecated components that should be replaced with HTML/CSS', async () => {
            const sourceCode = 'import { Flex } from \'snacks-design-system\';';
            const result = await lintText(sourceCode);

            expect(result[0].messages[0]).toMatchSnapshot();
        });

        it('components that have a PIE replacement can also use solution guidance', async () => {
            // Note: The mocking code can be removed as soon as one of the components with a PIE replacement also has a solution guidance.
            const sourceCode = 'import { Button } from \'snacks-design-system\';';
            const originalSolution = solutions.Button;

            try {
                solutions.Button = 'Mocked migration guidance for Button';

                const result = await lintText(sourceCode);

                expect(result[0].messages[0].message).toMatchSnapshot();
            } finally {
                if (originalSolution === undefined) {
                    delete solutions.Button;
                } else {
                    solutions.Button = originalSolution;
                }
            }
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
