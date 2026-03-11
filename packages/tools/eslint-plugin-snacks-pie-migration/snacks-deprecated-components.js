// Update this file when a Snacks component is deprecated and doesn't map to a Pie component.
// This file is used by the eslint plugin to warn about usage of deprecated Snacks components.
// Unlike `snacks-components-data.json`, this file can be edited by hand and doesn't need to be generated from the codebase.

const reasonTemplate = (componentName) => `The ${componentName} component is deprecated and should be replaced with plain HTML and CSS.`;
const defaultSolution = 'Use the "snacks-migration-assistant" skill to migrate this component. The skill MUST be installed from the Snacks repository';

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
