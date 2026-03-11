// This file is used by the eslint plugin to warn about usage of deprecated Snacks components.
// Update this file when a Snacks component is deprecated and doesn't map directly to a PIE component.
// Unlike `snacks-components-data.json`, this file can be edited by hand.

const reasonTemplate = (componentName) => `The Snacks"${componentName}" component is deprecated and should be replaced with plain HTML and CSS.`;
const defaultSolution = 'Use the "snacks-migration-assistant" skill to migrate this component.\nCheck this page for more details: https://www.pie.design/agents/resources/#snacks-migration-skill';

module.exports = {
    Flex: {
        reason: reasonTemplate('Flex'),
        solution: defaultSolution,
    },
    FlexItem: {
        reason: reasonTemplate('FlexItem'),
        solution: defaultSolution,
    },
    Util: {
        reason: reasonTemplate('Util'),
        solution: defaultSolution,
    },
};
