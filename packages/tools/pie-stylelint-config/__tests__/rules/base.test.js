const stylelint = require('stylelint');
const baseConfig = require('../../rules/base');

describe('base Stylelint rules', () => {
    describe('alpha-value-notation', () => {
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
                    config: baseConfig
                });
            });

            it('did error', () => result.then(data => (
                expect(data.errored).toBeTruthy()
            )));

            it('flags one warning', () => result.then(data => {
                console.log(data.results[0].warnings);
                expect(data.results[0].warnings.length).toBe(1);
            }));
        });
    });
});
