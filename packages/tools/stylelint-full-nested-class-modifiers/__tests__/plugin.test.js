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
            .c-foo {
                &.c-foo--bar {
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
            .component-element {
                &--active {
                    display: block;
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

            it('provides the expected autofixed code', async () => {
                const { code } = await result;
                expect(code).toMatchSnapshot();
            });
        });
    });

    describe('when given more complicated invalid css', () => {
        const invalidCSS = `
                .c-block-item {
                    &--modifier-one {
                        color: purple;
                    }

                    &--modifier-two {
                        font-size: 12px;
                    }
                }

                .component-element {
                    &--active {
                        display: block;
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

        it('provides the correct messages', () => result.then((data) => {
            const [firstResult] = data.results;
            const { warnings } = firstResult;
            expect(warnings).toHaveLength(3);
            expect(warnings[0].text).toContain('Nested class modifier "&--modifier-one" does not use the full class name. Use "&.c-block-item--modifier-one" instead.');
            expect(warnings[1].text).toContain('Nested class modifier "&--modifier-two" does not use the full class name. Use "&.c-block-item--modifier-two" instead.');
            expect(warnings[2].text).toContain('Nested class modifier "&--active" does not use the full class name. Use "&.component-element--active" instead.');
        }));

        describe('when autofix is true', () => {
            beforeEach(() => {
                result = stylelint.lint({
                    code: invalidCSS,
                    config,
                    fix: true,
                });
            });

            it('provides the expected autofixed code', async () => {
                const { code } = await result;
                expect(code).toMatchSnapshot();
            });
        });
    });
});
