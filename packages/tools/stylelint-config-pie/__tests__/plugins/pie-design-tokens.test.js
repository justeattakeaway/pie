import stylelint from 'stylelint';
import pieDesignTokensPlugin from '../../plugins/pie-design-tokens';

const config = {
    plugins: [
        pieDesignTokensPlugin,
    ],
    rules: {
        '@justeattakeaway/pie-design-tokens': true,
    },
};

describe('pie-design-tokens', () => {
    let result;

    describe('when given alias tokens', () => {
        const validCSS = `.element {
    color: var(--dt-color-content-default);
    background: var(--dt-color-container-default);
    border-color: var(--xds-color-border-subtle);
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

    describe('when given global colour token', () => {
        const invalidCSS = `.element {
    color: var(--dt-color-orange);
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
            expect(data.results[0].warnings[0].text).toContain('--dt-color-orange');
            expect(data.results[0].warnings[0].text).toContain('global');
            expect(data.results[0].warnings[0].text).toContain('alias');
        }));
    });

    describe('when given global colour token with number suffix', () => {
        const invalidCSS = `.element {
    color: var(--xds-color-blue-30);
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

        it('flags warning for global token', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('global');
        }));
    });

    describe('when given global font token', () => {
        const invalidCSS = `.element {
    font-weight: var(--dt-font-weight-extrablack);
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

        it('flags warning for global token', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('global');
        }));
    });

    describe('when given global spacing token', () => {
        const invalidCSS = `.element {
    padding: var(--dt-spacing-16);
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

        it('flags warning for global token', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('global');
        }));
    });

    describe('when given global radius token', () => {
        const invalidCSS = `.element {
    border-radius: var(--dt-radius-08);
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

        it('flags warning for global token', () => result.then((data) => {
            expect(data.results[0].warnings[0].text).toContain('global');
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

        it('flags global token warning (global check takes priority)', () => result.then((data) => {
            const warnings = data.results[0].warnings;
            const globalWarning = warnings.find((w) => w.text.includes('global'));
            expect(globalWarning).toBeDefined();
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

        it('flags warnings for both tokens', () => result.then((data) => {
            const [{ warnings }] = data.results;
            const blue25Warning = warnings.find((w) => w.text.includes('--dt-color-blue-25'));
            const blue70Warning = warnings.find((w) => w.text.includes('--dt-color-blue-70'));
            expect(blue25Warning).toBeDefined();
            expect(blue70Warning).toBeDefined();
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

    describe('when font-size uses a font token without calc()', () => {
        const invalidCSS = `.element {
    font-size: var(--dt-font-heading-xl-size--wide);
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
            expect(data.results[0].warnings[0].text).toContain('calc()');
        }));
    });

    describe('when line-height uses a font token without calc()', () => {
        const invalidCSS = `.element {
    line-height: var(--dt-font-heading-xl-line-height--wide);
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
            expect(data.results[0].warnings[0].text).toContain('calc()');
        }));
    });

    describe('when a custom property assigns a font token without calc()', () => {
        const invalidCSS = `.element {
    --tag-font-size: var(--dt-font-body-s-size);
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
            expect(data.results[0].warnings[0].text).toContain('calc()');
        }));
    });

    describe('when font-size uses a font token with calc()', () => {
        const validCSS = `.element {
    font-size: calc(var(--dt-font-heading-xl-size--wide) * 1px);
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

    describe('when line-height uses a font token with calc()', () => {
        const validCSS = `.element {
    line-height: calc(var(--dt-font-heading-xl-line-height--wide) * 1px);
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

    describe('when font-size uses pie-css SCSS helper', () => {
        const validCSS = `.element {
    --tag-font-size: #{p.font-size(--dt-font-body-s-size)};
}
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: validCSS,
                config,
            });
        });

        it('doesn\'t raise a calc error', () => result.then((data) => {
            const calcWarning = data.results[0].warnings.find((w) => w.text.includes('calc()'));
            expect(calcWarning).toBeUndefined();
        }));
    });

    describe('when line-height uses pie-css SCSS helper', () => {
        const validCSS = `.element {
    --tag-line-height: #{p.line-height(--dt-font-body-s-line-height)};
}
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: validCSS,
                config,
            });
        });

        it('doesn\'t raise a calc error', () => result.then((data) => {
            const calcWarning = data.results[0].warnings.find((w) => w.text.includes('calc()'));
            expect(calcWarning).toBeUndefined();
        }));
    });

    describe('when rule is disabled', () => {
        const invalidCSS = `.element {
    background: var(--dt-color-orange);
}
`;
        beforeEach(() => {
            result = stylelint.lint({
                code: invalidCSS,
                config: {
                    plugins: [
                        pieDesignTokensPlugin,
                    ],
                    rules: {
                        '@justeattakeaway/pie-design-tokens': null,
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
