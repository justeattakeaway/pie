import globals from 'globals';
// import eslintConfigAirbnbBase from 'eslint-config-airbnb-base';

import bestPractices from './rules/best-practices.js';
import classes from './rules/classes.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import imports from './rules/imports.js';
import node from './rules/node.js';
import style from './rules/style.js';
import vitest from './rules/vitest.js';

export default [
    // eslintConfigAirbnbBase,
    ...bestPractices,
    ...classes,
    ...errors,
    ...es6,
    ...imports,
    ...node,
    ...style,
    ...vitest,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2015,
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
            },
        },
        rules: {
            strict: 'error',
        },
    }
];
