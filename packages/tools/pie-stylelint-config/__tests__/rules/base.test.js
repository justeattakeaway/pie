const stylelint = require('stylelint');
const baseConfig = require('../../rules/base');

describe('base Stylelint rules', () => {
    describe('alpha-value-notation', () => {
        describe('valid CSS', () => {
            // this is very ugly but allows the template string to not flag new line and indentation errors
            const validCSS = `a {
    color: rgb(0, 0, 0, 0.5);
}
`;

            let result;

            beforeEach(() => {
                result = stylelint.lint({
                    code: validCSS,
                    config: baseConfig,
                });
            });

            it('did not error', () => result.then((data) => expect(data.errored).toBeFalsy()));

            it('flags no warnings', () => result.then((data) => (
                expect(data.results[0].warnings.length).toBe(0)
            )));
        });

        describe('invalid CSS', () => {
            // this is very ugly but allows the template string to not flag new line and indentation errors
            const invalidCSS = `a {
    color: rgb(0, 0, 0, 50%);
}
`;

            let result;

            beforeEach(() => {
                result = stylelint.lint({
                    code: invalidCSS,
                    config: baseConfig,
                });
            });

            it('did error', () => result.then((data) => (
                expect(data.errored).toBeTruthy()
            )));

            it('flags one warning', () => result.then((data) => (
                expect(data.results[0].warnings.length).toBe(1)
            )));

            it('correct warning text', () => result.then((data) => (
                expect(data.results[0].warnings[0].text).toBe('Expected "50%" to be "0.5" (alpha-value-notation)')
            )));

            it('correct rule flagged', () => result.then((data) => (
                expect(data.results[0].warnings[0].rule).toBe('alpha-value-notation')
            )));

            it('correct severity flagged', () => result.then((data) => (
                expect(data.results[0].warnings[0].severity).toBe('error')
            )));

            it('correct line number', () => result.then((data) => (
                expect(data.results[0].warnings[0].line).toBe(2)
            )));

            it('correct column number', () => result.then((data) => (
                expect(data.results[0].warnings[0].column).toBe(25)
            )));
        });
    });
});
