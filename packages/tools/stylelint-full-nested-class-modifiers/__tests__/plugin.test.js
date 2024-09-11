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
        '@justeattakeaway/stylelint-full-nested-class-modifiers',
    ],
    rules: {
        '@justeattakeaway/stylelint-full-nested-class-modifiers': true,
    },
};

describe('stylelint-full-nested-class-modifiers', () => {
    let result;

    describe('when given valid CSS', () => {
        const validCSS = `
.foo {
    &.foo--bar {
        color: red;
    }
}
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: validCSS,
                config,
            });
        });

        it('does not raise an error', () => result.then((data) => {
            expect(data.errored).toBeFalsy();
        }));
    });

    describe('when given invalid CSS', () => {
        const invalidCSS = `
.foo {
    &--bar {
        color: red;
    }
}
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

        it('provides the correct message', () => result.then((data) => {
            const [firstResult] = data.results;
            const { warnings } = firstResult;
            expect(warnings).toHaveLength(1);
            expect(warnings[0].text).toContain('Nested class modifier');
        }));

        describe('when autofix is true', () => {
            beforeEach(() => {
                result = stylelint.lint({
                    code: invalidCSS,
                    config,
                    fix: true,
                });
            });

            it('provides the expected autofixed output', async () => {
                const { output } = await result;
                expect(output).toBe(`
.foo {
    &.foo--bar {
        color: red;
    }
}
`);
            });
        });

        describe('when autofix is true with multiple nested modifiers', () => {
            const invalidMultiCSS = `
        .foo {
            &--bar {
                color: red;
            }

            &--baz {
                color: blue;
            }
        }
        `;

            beforeEach(() => {
                result = stylelint.lint({
                    code: invalidMultiCSS,
                    config,
                    fix: true,
                });
            });

            it('provides the expected autofixed output', async () => {
                const { output } = await result;
                expect(output).toBe(`
        .foo {
            &.foo--bar {
                color: red;
            }

            &.foo--baz {
                color: blue;
            }
        }
        `);
            });
        });
    });
});
