const stylelint = require('stylelint');
const strictConfig = require('../../rules/strict');

describe('strict Stylelint rules', () => {
    describe('color-named', () => {
        describe('valid CSS', () => {
            // this is very ugly but allows the template string to not flag new line and indentation errors
            const validCSS = `a {
    color: #FF0000;
}
`;

            let result;

            beforeEach(() => {
                result = stylelint.lint({
                    code: validCSS,
                    config: strictConfig,
                });
            });

            it('did not error', () => result.then((data) => expect(data.errored).toBeFalsy()));

            it('flags no warnings', () =>
                result.then((data) => expect(data.results[0].warnings.length).toBe(0)));
        });

        describe('invalid CSS', () => {
            // this is very ugly but allows the template string to not flag new line and indentation errors
            const invalidCSS = `a {
    color: red;
}
`;

            let result;

            beforeEach(() => {
                result = stylelint.lint({
                    code: invalidCSS,
                    config: strictConfig,
                });
            });

            it('did error', () => result.then((data) => expect(data.errored).toBeTruthy()));

            it('flags one warning', () =>
                result.then((data) => expect(data.results[0].warnings.length).toBe(1)));

            it('correct warning text', () =>
                result.then((data) =>
                    expect(data.results[0].warnings[0].text).toBe(
                        'Unexpected named color "red" (color-named)',
                    ),
                ));

            it('correct rule flagged', () =>
                result.then((data) =>
                    expect(data.results[0].warnings[0].rule).toBe('color-named'),
                ));

            it('correct severity flagged', () =>
                result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error')));

            it('correct line number', () =>
                result.then((data) => expect(data.results[0].warnings[0].line).toBe(2)));

            it('correct column number', () =>
                result.then((data) => expect(data.results[0].warnings[0].column).toBe(12)));
        });
    });
});
