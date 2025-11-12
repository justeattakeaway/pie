/**
 * @fileoverview This plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components
 * @author Just Eat Takeaway.com - Design System Team
 */

const packageData = require('../package.json');
const { parserOptions, parser } = require('./config');
const deprecatedComponents = require('./rules/deprecated-components');
const addedComponents = require('./processors/added-components');

module.exports = {
    meta: {
        name: packageData.name,
        version: packageData.version,
        namespace: packageData.name,
    },
    rules: {
        'deprecated-components': deprecatedComponents,
    },
    configs: {
        recommended: {
            plugins: ['@justeattakeaway/snacks-pie-migration'],
            rules: {
                '@justeattakeaway/snacks-pie-migration/deprecated-components': 'error',
            },
            processor: '@justeattakeaway/snacks-pie-migration/added-components',
            parserOptions,
            parser,
        },
        // Alternative and less aggressive enforcement
        warn: {
            plugins: ['@justeattakeaway/snacks-pie-migration'],
            rules: {
                '@justeattakeaway/snacks-pie-migration/deprecated-components': 'warn',
            },
            processor: '@justeattakeaway/snacks-pie-migration/added-components',
            parserOptions,
            parser,
        },
    },
    processors: {
        'added-components': addedComponents,
    },
};
