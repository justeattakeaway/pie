function getIconImportStatement (componentName, isReact) {
    if (isReact) {
        return `import { ${componentName} } from "@justeattakeaway/pie-icons-webc/dist/react/${componentName}.js"`;
    }
    return `import "@justeattakeaway/pie-icons-webc/dist/${componentName}.js"`;
}

module.exports = getIconImportStatement;
