import stylelint from 'stylelint';
import pieDesignTokensPlugin from '../../plugins/pie-design-tokens';

const config = {
    plugins: [pieDesignTokensPlugin],
    rules: { '@justeattakeaway/pie-design-tokens': true },
};

const lint = (code) => stylelint.lint({ code, config });

const getWarnings = async (code) => {
    const data = await lint(code);
    return data.results[0].warnings;
};

describe('pie-design-tokens', () => {
    describe('valid alias tokens', () => {
        it('should not warn for valid alias tokens', async () => {
            const warnings = await getWarnings(`.element {
    color: var(--dt-color-content-default);
    --bg-color: var(--dt-color-container-strong);
}`);
            expect(warnings).toEqual([]);
        });
    });

    describe('global tokens', () => {
        it('should warn when a global token is used', async () => {
            const warnings = await getWarnings(`.element {
    color: var(--dt-color-orange);
    --bg-color: var(--dt-color-blue-30);
}`);
            expect(warnings).toMatchSnapshot();
        });
    });

    describe('invalid tokens', () => {
        it('should warn when a token does not exist', async () => {
            const warnings = await getWarnings(`.element {
    color: var(--dt-color-fake-token-999);
    --custom-prop: var(--dt-color-fake-token-000);
}`);
            expect(warnings).toMatchSnapshot();
        });
    });

    describe('font token calc() enforcement', () => {
        it.each([
            ['font-size', 'font-size: var(--dt-font-heading-xl-size--wide);'],
            ['line-height', 'line-height: var(--dt-font-heading-xl-line-height--wide);'],
        ])('should warn when %s uses a font size/line-height token without calc()', async (_label, declaration) => {
            const warnings = await getWarnings(`.element { ${declaration} }`);
            expect(warnings).toMatchSnapshot();
        });

        it.each([
            ['calc()', 'font-size: calc(var(--dt-font-heading-xl-size--wide) * 1px);'],
            ['calc() for line-height', 'line-height: calc(var(--dt-font-heading-xl-line-height--wide) * 1px);'],
            ['SCSS font-size helper', '--font-size: #{p.font-size(--dt-font-body-s-size)};'],
            ['SCSS line-height helper', '--line-height: #{p.line-height(--dt-font-body-s-line-height)};'],
        ])('should not warn when font token is wrapped in %s', async (_label, declaration) => {
            const warnings = await getWarnings(`.element { ${declaration} }`);
            expect(warnings).toEqual([]);
        });
    });

    describe('rule disabled', () => {
        it('should not warn when rule is set to null', async () => {
            const data = await stylelint.lint({
                code: '.element { background: var(--dt-color-orange); }',
                config: {
                    plugins: [pieDesignTokensPlugin],
                    rules: { '@justeattakeaway/pie-design-tokens': null },
                },
            });
            expect(data.results[0].warnings).toEqual([]);
        });
    });

    describe('deprecated tokens', () => {
        const mockMetadata = {
            color: {
                alias: {
                    content: {
                        'interactive-primary': {
                            description: 'Interactive primary content colour',
                            status: { name: 'deprecated', replacementToken: 'content-interactive-brand' },
                        },
                        subdued: {
                            description: 'Subdued content colour',
                            status: { name: 'deprecated' },
                        },
                    },
                },
            },
        };

        const getMockedWarnings = async (code) => {
            vi.resetModules();

            const mockReadFileSync = (filePath) => {
                if (filePath.includes('tokensMetadata')) {
                    return JSON.stringify(mockMetadata);
                }
                return ':root { --dt-color-content-interactive-primary: #000; --dt-color-content-subdued: #000; }';
            };

            vi.doMock('fs', async () => {
                const actual = await vi.importActual('fs');
                return {
                    ...actual,
                    default: { ...actual, readFileSync: mockReadFileSync },
                    readFileSync: mockReadFileSync,
                };
            });

            const { default: plugin } = await import('../../plugins/pie-design-tokens');
            const data = await stylelint.lint({
                code,
                config: {
                    plugins: [plugin],
                    rules: { '@justeattakeaway/pie-design-tokens': true },
                },
            });

            return data.results[0].warnings;
        };

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should warn when deprecated tokens are used', async () => {
            const warnings = await getMockedWarnings(`.element {
    color: var(--dt-color-content-interactive-primary);
    --text-color: var(--dt-color-content-subdued);
}`);
            expect(warnings).toMatchSnapshot();
        });
    });
});
