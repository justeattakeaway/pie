import { pascalCase } from "pascal-case";
import fs from 'fs-extra';

/**
 * CEM package will invoke this callback function.
 *
 * @param {*} exclude array of excluded component class name
 * @param {*} outDir root output directory for generated code
 * @param {*} prettierConfig prettier library configuration
 */
export default function genReactWrapper({
    componentName = 'pie-button',
    outDir = `./packages/components/${componentName}/react`
} = {}) {

    async function checkDirExists (directoryPath) {
        try {
            await fs.ensureDir(directoryPath);
            console.log(`Directory "${directoryPath}" exists.`);
        } catch (err) {
            console.error(err);
        }
    }

    checkDirExists(outDir);

    const componentSrc = `
    import { ${pascalCase(componentName)} } from '@justeattakeaway/${componentName}';
    import { createComponent } from '@lit-labs/react';
    import * as React from 'react';

    const PieBtn = createComponent({
                elementClass: ${pascalCase(componentName)},
                react: React,
                tagName: '${componentName}',
                events: { onCustomEvents: 'CustomEvent' }
            });

    export default PieBtn
    `
    
    fs.writeFile(`${outDir}/pie-button.ts`, componentSrc, (err) => {
        if (err) console.error(err);
    });

    return {
        name: 'react-wrapper'
    };
}
