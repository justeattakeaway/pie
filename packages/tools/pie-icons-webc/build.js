import pascalCase from 'just-pascal-case';
import kebabCase from 'just-kebab-case';
import path from 'path';
import fs from 'fs';

import pieIcons from '@justeattakeaway/pie-icons';
import {
    normalizeIconName,
    // largeIconSizeDefault,
    // regularIconSizeDefault,
} from '@justeattakeaway/pie-icons-configs';

const { icons } = pieIcons.default;

const componentTemplate = (name, svg) => {
    // const svgClasses = svg.match(/class="(.+?)"/)?.[1];

    const isLargeIcon = name.endsWith('Large');
    // const sizeType = isLargeIcon ? 'LargeIconSize' : 'RegularIconSize';

    return `import {LitElement, html, css} from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';

const componentSelector = '${kebabCase(name)}';

/**
 * @tagname ${kebabCase(name)}
 */
export class ${name} extends LitElement {
    static override styles = css\`
    :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
    }
    \`;

    override render() {
    return html\`
        <p>I'm in icon innit</p>
    \`;
    }
}

defineCustomElement(componentSelector, ${name});

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: ${name};
    }
}
`;
};

const ICONS_DIR = `${process.cwd()}/icons`;
const indexPath = path.join(ICONS_DIR, '/index.ts');
const reactIndexPath = path.join(ICONS_DIR, '/react/index.ts');

/**
 * Checks that a directory exists at a specified path, if not it creates it.
 * @param {string} directoryPath
 */
function ensureDirExists (directoryPath) {
    try {
        if (!fs.existsSync(directoryPath)) {
            console.info(`Creating directory "${directoryPath}".`);
            fs.mkdirSync(directoryPath);
        } else {
            console.info(`Directory "${directoryPath}" already exists.`);
        }
    } catch (err) {
        console.error(err);
    }
}

function build () {
    // check if /icons directory exists, if not create it
    ensureDirExists(ICONS_DIR);

    // check if /icons/react directory exists, if not create it
    ensureDirExists(`${ICONS_DIR}/react`);

    let indexFileString = '';

    // loop through the icons in pie-icons, generate each component and add it to the index.ts
    Object.keys(icons).forEach((iconKey) => {
        const icon = icons[iconKey];
        const { pathPrefix } = icon;
        const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
        const pascalCasedName = pascalCase(normalizeIconName(iconKey));

        const componentName = `Icon${capitalisedPathPrefix + pascalCasedName}`;

        const svg = icon.toSvg();

        let component = componentTemplate(componentName, svg);
        component = component.replace(/xlink:href/g, 'xlinkHref'); // replace so it gets parsed by JSX correctly

        indexFileString += `export { ${componentName} } from './${componentName}';\n`;

        fs.writeFileSync(`./icons/${componentName}.ts`, component, 'utf8');

        // create a {ComponentName}ReactExport.ts file for each component
        const reactExportTemplate = `import * as React from 'react';
import { createComponent } from '@lit/react';
import { ${componentName} as ${componentName}React } from '../${componentName}';

export const ${componentName} = createComponent({
    displayName: '${componentName}',
    elementClass: ${componentName}React,
    react: React,
    tagName: '${kebabCase(componentName)}',
    events: {},
});
`;

        fs.writeFileSync(`./icons/react/${componentName}.ts`, reactExportTemplate, 'utf8');
    });

    fs.writeFileSync(indexPath, indexFileString, 'utf8');
    fs.writeFileSync(reactIndexPath, indexFileString, 'utf8');
}

build();
