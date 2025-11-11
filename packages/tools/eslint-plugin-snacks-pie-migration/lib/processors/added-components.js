const { readFileSync } = require('fs');
const { isFileNew, getFileStateFromBranch } = require('../util/git-utils');
const { addedComponentsPostprocessor } = require('../util/added-components-postprocessor');

module.exports = {
    // Filter out errors for components that weren't added
    postprocess (messages, filePath) {
        return addedComponentsPostprocessor(messages, filePath, { readFileSync, isFileNew, getFileStateFromBranch });
    },
};
