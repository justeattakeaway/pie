/**
 * Returns the import statement for a PIE component based on the current FRAMEWORK env var.
 *
 * @param {string} id - The component id, e.g. 'pie-modal'
 * @param {string} pascalName - The PascalCase component name, e.g. 'PieModal'
 * @returns {string}
 */
function getImportStatement (id, pascalName) {
    const name = id.replace(/^pie-/, '');

    if (process.env.FRAMEWORK === 'react') {
        return `import { ${pascalName} } from '@justeattakeaway/pie-webc/react/${name}.js'`;
    }
    return `import '@justeattakeaway/pie-webc/components/${name}.js';`;
}

module.exports = getImportStatement;
