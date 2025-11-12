const { readFileSync } = require('fs');
const { isFileNew, getFileStateFromBranch } = require('../util/git-utils');
const { addedComponentsPostprocessor } = require('../util/added-components-postprocessor');

/**
 * This post process function helps to identify errors only for components that
 * were introduced by the commit or the branch, hence ignoring component imports
 * that were already present in the main branch
 */
module.exports = {
    postprocess (messages, filePath) {
        return addedComponentsPostprocessor(messages, filePath, { readFileSync, isFileNew, getFileStateFromBranch });
    },
};
