const { ESLint } = require('eslint');


const srcCodeWithIssues = `const aConst = 10;
class MyClass {
    foo () {
    }

    bar () {
        for (let i = 0; i < 10; i--) {
        }
    }
}`;

const srcCodeWithoutIssues = `let foo = 10;
export default class MyClass {
    static foo () {
        foo = foo++;
    }

    static bar () {
        for (let i = 0; i < 10; i++) {
            //
        }
    }
}
`;

const eslintConfig = {
    // TODO: useEslintrc and overrideConfigFile can be removed once we update the root .eslintrc.js
    useEslintrc: false,
    overrideConfigFile: '.eslintrc.js',
};

describe('ESLint', () => {
    it('should find the expected errors', async () => {
        const eslint = new ESLint(eslintConfig);
        const results = await eslint.lintText(srcCodeWithIssues);

        expect(results.length).toBe(1);
        expect(results[0].messages).toMatchSnapshot();
    });

    it('shouldnt find any errors', async () => {
        const eslint = new ESLint(eslintConfig);
        const results = await eslint.lintText(srcCodeWithoutIssues);

        expect(results.length).toBe(1);
        expect(results[0].messages).toEqual([]);
    });
});
