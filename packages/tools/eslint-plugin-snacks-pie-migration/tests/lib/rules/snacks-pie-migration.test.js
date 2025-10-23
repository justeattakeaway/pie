const { RuleTester } = require("eslint");
const snacksPieMigration = require("../../../lib/rules/snacks-pie-migration");


const ruleTester = new RuleTester({
	// Must use at least ecmaVersion 2015 because
	// that's when `const` variables were introduced.
	languageOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
	"snacks-pie-migration", // rule name
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

console.log("All tests passed!");
