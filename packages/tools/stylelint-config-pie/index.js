/* eslint-disable import/extensions */
import baseRules from './rules/base.js';
import strictRules from './rules/strict.js';
import orderingRules from './rules/ordering.js';

export default {
    extends: [
        baseRules,
        strictRules,
        orderingRules
    ],
};
