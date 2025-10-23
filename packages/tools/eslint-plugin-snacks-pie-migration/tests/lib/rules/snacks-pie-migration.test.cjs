const { RuleTester } = require('eslint');
const snacksPieMigration = require('../../../lib/rules/snacks-pie-migration.cjs');

const ruleTester = new RuleTester({
    parserOptions: {
        // Specify the ECMAScript version you want to use
        ecmaVersion: 2020,
    },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
    'snacks-pie-migration', // rule name
    snacksPieMigration, // rule code
    {
        // checks
        // 'valid' checks cases that should pass
        valid: [
            {
                code: "const foo = 'bar';",
            },
        ],
        // 'invalid' checks cases that should not pass
        invalid: [
            {
                code: "const foo = 'baz';",
                output: 'const foo = "bar";',
                errors: 1,
            },
        ],
    },
);
