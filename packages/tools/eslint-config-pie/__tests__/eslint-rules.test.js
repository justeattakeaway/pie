const { ESLint } = require('eslint');

const ESLINT_SEVERITY = {
    WARN: 1,
    ERROR: 2,
};

const srcCodeWithIssues = `const aConst = 10;
class MyClass {
    foo () {
    }

    bar () {
        for (let i = 0; i < 10; i--) {
        }
    }
}`;

const srcCodeWithoutIssues = `let foo = 10;
export default class MyClass {
    static foo () {
        foo = foo++;
    }

    static bar () {
        for (let i = 0; i < 10; i++) {
            //
        }
    }
}
`;

const srcCodeWith2EmptyLines = `function foo () {}


export default foo;
`;

const baseConfig = { overrideConfigFile: './base/index.js' };
const strictConfig = { overrideConfigFile: './strict/index.js' };

describe('ESLint', () => {
    describe('base', () => {
        it('should find the expected errors', async () => {
            const eslint = new ESLint(baseConfig);
            const results = await eslint.lintText(srcCodeWithIssues);

            expect(results.length).toBe(1);
            expect(results[0].messages).toMatchSnapshot();
        });

        it('shouldnt find any errors', async () => {
            const eslint = new ESLint(baseConfig);
            const results = await eslint.lintText(srcCodeWithoutIssues);

            expect(results.length).toBe(1);
            expect(results[0].messages).toEqual([]);
        });

        it('console.log usage should raise a warning', async () => {
            const eslint = new ESLint(baseConfig);
            const results = await eslint.lintText('console.log(1);\n');

            expect(results[0].messages).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        ruleId: 'no-console',
                        severity: ESLINT_SEVERITY.WARN,
                    }),
                ]),
            );
        });

        it('no-multiple-empty-lines should not raise an error for 2 empty lines', async () => {
            const src = srcCodeWith2EmptyLines;
            const eslint = new ESLint(baseConfig);
            const results = await eslint.lintText(src);

            expect(results[0].messages).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        ruleId: 'no-multiple-empty-lines',
                        severity: ESLINT_SEVERITY.ERROR,
                    }),
                ]),
            );
        });
    });

    describe('strict', () => {
        describe('inherits base', () => {
            it('should find the expected errors', async () => {
                const eslint = new ESLint(strictConfig);
                const results = await eslint.lintText(srcCodeWithIssues);

                expect(results.length).toBe(1);
                expect(results[0].messages).toMatchSnapshot();
            });

            it('shouldnt find any errors', async () => {
                const eslint = new ESLint(strictConfig);
                const results = await eslint.lintText(srcCodeWithoutIssues);

                expect(results.length).toBe(1);
                expect(results[0].messages).toEqual([]);
            });
        });

        describe('own rules', () => {
            it('console.log usage should raise an error', async () => {
                const eslint = new ESLint(strictConfig);
                const results = await eslint.lintText('console.log(1);\n');

                expect(results[0].messages).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            ruleId: 'no-console',
                            severity: ESLINT_SEVERITY.WARN,
                        }),
                    ]),
                );
            });

            it('no-multiple-empty-lines should raise an error when more than 1 empty line is found', async () => {
                const src = srcCodeWith2EmptyLines;
                const eslint = new ESLint(strictConfig);
                const results = await eslint.lintText(src);

                expect(results[0].messages).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            ruleId: 'no-multiple-empty-lines',
                            severity: ESLINT_SEVERITY.ERROR,
                        }),
                    ]),
                );
            });
        });
    });
});
