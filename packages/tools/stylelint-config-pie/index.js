import baseRules from './rules/base';
import strictRules from './rules/strict';
import orderingRules from './rules/ordering';

export default {
    extends: [
        baseRules,
        strictRules,
        orderingRules
    ],
};
