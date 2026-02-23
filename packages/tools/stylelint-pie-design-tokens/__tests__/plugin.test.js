import {
    describe,
    it,
    expect,
    beforeEach,
} from 'vitest';

import stylelint from 'stylelint';

const config = {
    plugins: [
        '@justeattakeaway/stylelint-pie-design-tokens',
    ],
    rules: {
        '@justeattakeaway/stylelint-pie-design-tokens': true,
    },
};

describe('stylelint-pie-design-tokens', () => {
    let result;

    describe('when given non-deprecated tokens', () => {
        const validCSS = `.element {
    color: var(--dt-color-orange);
    background: var(--dt-color-green);
    border-color: var(--dt-color-cupcake-30);
}
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: validCSS,
                config,
            });
        });

        it('doesn\'t raise an error', () => result.then((data) => {
            expect(data.errored).toBeFalsy();
        }));

        it('flags no warnings', () => result.then((data) => {
            expect(data.results[0].warnings.length).toBe(0);
        }));
    });

    describe('when given deprecated token', () => {
        const invalidCSS = `.element {
    color: var(--dt-color-blue-25);
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

        it('has correct warning text', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('--dt-color-blue-25');
            expect(data.results[0].warnings[0].text).toContain('deprecated');
        }));

        it('suggests replacement token', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('cupcake-30');
        }));
    });

    describe('when given multiple deprecated tokens', () => {
        const invalidCSS = `.element {
    color: var(--dt-color-blue-25);
    background: var(--dt-color-blue-70);
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

        it('flags two warnings', () => result.then((data) => {
            expect(data.results[0].warnings.length).toBe(2);
        }));

        it('first warning is for blue-25', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('--dt-color-blue-25');
        }));

        it('second warning is for blue-70', () => result.then((data) => {
            expect(data.results[0].warnings[1].text).toContain('--dt-color-blue-70');
        }));
    });

    describe('when given deprecated token with custom prefix such as xds', () => {
        const invalidCSS = `.element {
    color: var(--xds-color-blue-25);
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

        it('flags one warning', () => result.then((data) => {
            expect(data.results[0].warnings.length).toBe(1);
        }));
    });

    describe('when given deprecated token as custom property value', () => {
        const invalidCSS = `.element {
    --custom-prop: --dt-color-blue-25;
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

        it('flags one warning', () => result.then((data) => {
            expect(data.results[0].warnings.length).toBe(1);
        }));
    });

    describe('when given a non-existent token', () => {
        const invalidCSS = `.element {
    color: var(--dt-color-fake-token-999);
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

        it('has correct warning text', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('--dt-color-fake-token-999');
            expect(data.results[0].warnings[0].text).toContain('not a valid pie token');
        }));
    });

    describe('when rule is disabled', () => {
        const invalidCSS = `.element {
    color: var(--dt-color-blue-25);
}
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: invalidCSS,
                config: {
                    plugins: [
                        '@justeattakeaway/stylelint-pie-design-tokens',
                    ],
                    rules: {
                        '@justeattakeaway/stylelint-pie-design-tokens': null,
                    },
                },
            });
        });

        it('doesn\'t raise an error', () => result.then((data) => {
            expect(data.errored).toBeFalsy();
        }));

        it('flags no warnings', () => result.then((data) => {
            expect(data.results[0].warnings.length).toBe(0);
        }));
    });
});
