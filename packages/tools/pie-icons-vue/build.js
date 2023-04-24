/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const pieIcons = require('@justeattakeaway/pie-icons').default;
const { pascalCase } = require('pascal-case');
const fs = require('fs-extra');

const componentTemplate = (name, svg) => `
export default {
    name: '${name}',

    props: {
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;

        return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')};
    }
};
`.replace(/^\s+/g, ''); // trim start of string

const { icons } = pieIcons;

const ICONS_DIR = `${process.cwd()}/generated`;
const COMPONENTS_DIR = `${ICONS_DIR}/components`;
const indexPath = path.join(ICONS_DIR, '/index.js');

// Try to convert to the same as React build gen
async function checkDirExists (directoryPath) {
    try {
        await fs.ensureDir(directoryPath);
        // eslint-disable-next-line no-console
        console.log(`Directory "${directoryPath}" exists.`);
    } catch (err) {
        console.error(err);
    }
}

const handleComponentName = (name) => name.replace(/\-(\d+)/, '$1'); // eslint-disable-line no-useless-escape

// check that the /generated directory exists, if not create it
checkDirExists(ICONS_DIR)
    // check that the /generated/components directory exists, if not create it
    .then(() => checkDirExists(COMPONENTS_DIR))
    .then(() => {
        let indexFileString = '/* eslint-disable camelcase */\n';

        // loop through the icons in pie-icons, generate each component and add it to the index.tsx
        Promise.all(Object.keys(icons).map((iconKey) => {
            const { pathPrefix } = icons[iconKey];
            const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
            const pascalCasedName = pascalCase(handleComponentName(iconKey));
            const componentName = `Icon${capitalisedPathPrefix + pascalCasedName}`;

            const svg = pieIcons.icons[iconKey].toSvg();
            let component = componentTemplate(componentName, svg);
            component = component.replace(/xlink:href/g, 'xlinkHref'); // replace so it gets parsed by JSX correctly

            indexFileString += `export { default as ${componentName} } from '../icons/${componentName}';\n`;

            return fs.writeFile(`./generated/components/${componentName}.js`, component, 'utf8', (err) => {
                if (err) console.error(err);
            });
        })).then(() => fs.outputFile(indexPath, indexFileString, 'utf8'));
    });
