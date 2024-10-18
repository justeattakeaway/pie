// Base
import baseBestPractices from '../base/rules/best-practices.js';
import baseClasses from '../base/rules/classes.js';
import baseErrors from '../base/rules/errors.js';
import baseEs6 from '../base/rules/es6.js';
import baseImports from '../base/rules/imports.js';
import baseNode from '../base/rules/node.js';
import baseStyle from '../base/rules/style.js';
import baseVitest from '../base/rules/vitest.js';

// Strict
import strictBestPractices from './rules/best-practices.js';
import strictStyle from './rules/style.js';
import strictImports from './rules/imports.js';

export default [
    ...baseBestPractices,
    ...baseClasses,
    ...baseErrors,
    ...baseEs6,
    ...baseImports,
    ...baseNode,
    ...baseStyle,
    ...baseVitest,
    ...strictBestPractices,
    ...strictStyle,
    ...strictImports,
];