/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const pieIcons = require('@justeattakeaway/pie-icons').default;
const { pascalCase } = require('pascal-case');
const kebabCase = require('kebab-case');
const fs = require('fs-extra');
const { execSync } = require('child_process');

const { removeHyphenBeforeDigits } = require('./helpers');

const componentTemplate = (name, svg) => {
    const isLargeIcon = name.endsWith('Large');
    const iconSize = isLargeIcon ? 'large' : 'regular';

    // NOTE: The eslint-disable-next-line is a temporary fix for the fact that the configs-vue file is not being copied to the generated folder
    // TODO: Remove eslint-disable-next-line as soon as the compilation issue is solved
    return `
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from '@justeattakeaway/pie-icons-configs/configs-vue';

const template = document.createElement('template');
template.innerHTML = '${svg}'

export class ${name} extends HTMLElement {
    constructor () {
        super();

        const clone = template.content.cloneNode(true);

        this
            .attachShadow({ mode: 'open' })
            .append(clone);
    }
}

customElements.define('${kebabCase(name).replace(/-/, '')}', ${name});
`;
};

const { icons } = pieIcons;

const ICONS_DIR = `${process.cwd()}/icons`;
// const COMPONENTS_DIR = `${ICONS_DIR}/components`;
const indexPath = path.join(ICONS_DIR, '/index.js');

// Try to convert to the same as React build gen
async function checkDirExists (directoryPath) {
    try {
        await fs.ensureDir(directoryPath);
        console.info(`Directory "${directoryPath}" exists.`);
    } catch (err) {
        console.error(err);
    }
}

// function copyIconsConfigFiles () {
//     const srcFilePaths = [
//         path.resolve(process.cwd(), '../pie-icons-configs/configs.js'),
//         path.resolve(process.cwd(), '../pie-icons-configs/configs-vue.js')
//     ];
//     const destFilePath = path.resolve(process.cwd(), './generated/components/');

//     srcFilePaths.forEach((srcFilePath) => execSync(`cp ${srcFilePath} ${destFilePath}`));
// }

async function build () {
    // check if /generated directory exists, if not create it
    await checkDirExists(ICONS_DIR);

    // check if /generated/components directory exists, if not create it
    // await checkDirExists(COMPONENTS_DIR);

    // copyIconsConfigFiles();

    let indexFileString = '/* eslint-disable camelcase */\n';

    // loop through the icons in pie-icons, generate each component and add it to the index.tsx
    Object.keys(icons).forEach((iconKey) => {
        const { pathPrefix } = icons[iconKey];
        const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
        const pascalCasedName = pascalCase(removeHyphenBeforeDigits(iconKey));
        const componentName = `Icon${capitalisedPathPrefix + pascalCasedName}`;

        const svg = pieIcons.icons[iconKey].toSvg();
        let component = componentTemplate(componentName, svg);
        component = component.replace(/xlink:href/g, 'xlinkHref'); // replace so it gets parsed by JSX correctly

        indexFileString += `export { ${componentName} } from './${componentName}';\n`;

        fs.writeFileSync(`./icons/${componentName}.js`, component, 'utf8');
    });

    fs.outputFileSync(indexPath, indexFileString, 'utf8');
}

build();
