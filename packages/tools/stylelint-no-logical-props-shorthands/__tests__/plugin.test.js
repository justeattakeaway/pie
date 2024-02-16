import {
    describe,
    it,
    expect,
    beforeEach,
} from 'vitest';

import stylelint from 'stylelint';

const config = {
    extends: '@justeattakeaway/stylelint-config-pie/base',
    plugins: [
        '@justeattakeaway/stylelint-no-logical-props-shorthands',
    ],
    rules: {
        '@justeattakeaway/stylelint-no-logical-props-shorthands': true,
    },
};

describe('stylelint-no-logical-props-shorthands', () => {
    let result;

    describe('when given valid CSS', () => {
        const validCSS = `a { margin-block-start: 10px; }
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: validCSS,
                config,
            });
        });

        it('doesn\'t raises an error', () => result.then((data) => {
            expect(data.errored).toBeFalsy();
        }));
    });

    describe('when given invalid CSS', () => {
        const invalidCSS = `a { margin-block: var(--dt-spacing-e); }
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: invalidCSS,
                config,
            });
        });

        it('raises an error', () => result.then((data) => {
            expect(data.errored).toBeTruthy();
        }));

        describe('when autofix is true', () => {
            beforeEach(() => {
                result = stylelint.lint({
                    code: invalidCSS,
                    config,
                    fix: true,
                });
            });

            describe('when a single value is given', () => {
                it('provides the expected suggestion', async () => {
                    const code = `a { margin-block: 10px; }
`;
                    const result = await stylelint.lint({
                        code,
                        config,
                        fix: true,
                    });

                    expect(result.code).toMatchInlineSnapshot(`
                      "a { margin-block: 10px; }
                      "
                    `);
                });
            });

            describe('when multiple values are given', () => {
                describe('and value does not contains a CSS variable', () => {
                    it('should keep it unchanged', async () => {
                        const code = `a { margin-block: 12px 34px; }
    `;
                        const result = await stylelint.lint({
                            code,
                            config,
                            fix: true,
                        });

                        expect(result.code).toMatchInlineSnapshot(`
                          "a { margin-block: 12px 34px; }
                              "
                        `);
                    });
                });

                describe('and value contains a CSS variable', () => {
                    it('should provide the expected suggestion', async () => {
                        const code = `a { margin-block: 12px var(--dt-spacing-e); }
    `;
                        const result = await stylelint.lint({
                            code,
                            config,
                            fix: true,
                        });

                        expect(result.code).toMatchInlineSnapshot(`
                          "a { margin-block-start: 12px;margin-block-end: var(--dt-spacing-e); }
                              "
                        `);
                    });
                });

                describe('and values are complex', () => {
                    it('provides the expected suggestion', async () => {
                        const code = `a { padding-inline: calc(var(--dt-spacing-d) + $nav-item-inline-start-margin) var(--dt-spacing-d); }
    `;
                        const result = await stylelint.lint({
                            code: code.trim(),
                            config,
                            fix: true,
                        });

                        expect(result.code).toMatchInlineSnapshot('"a { padding-inline-start: calc(var(--dt-spacing-d) + $nav-item-inline-start-margin);padding-inline-end: var(--dt-spacing-d); }"');
                    });
                });
            });
        });
    });
});
