import pascalCase from 'just-pascal-case';
import kebabCase from 'just-kebab-case';
import path from 'path';
import fs from 'fs';

import pieIcons from '@justeattakeaway/pie-icons';
import {
    normalizeIconName,
    largeIconSizeDefault,
    regularIconSizeDefault,
} from '@justeattakeaway/pie-icons-configs';

const { icons } = pieIcons.default;

const componentTemplate = (name, svg) => {
    const svgClasses = svg.match(/class="(.+?)"/)?.[1];

    const isLargeIcon = name.endsWith('Large');
    const sizeType = isLargeIcon ? 'LargeIconSize' : 'RegularIconSize';

    return `import {
    html, LitElement, TemplateResult, css, PropertyValues,
} from 'lit';
import { defineCustomElement } from '@justeattakeaway/pie-webc-core';
import { property, query } from 'lit/decorators.js';
import { getSvgProps, ${sizeType} } from '@justeattakeaway/pie-icons-configs';

interface IconProps {
    size: ${sizeType};
    class: string;
}

const componentSelector = '${kebabCase(name)}';

/**
 * @tagname ${kebabCase(name)}
 */
export class ${name} extends LitElement implements IconProps {
    // The following styles make sure that the icon will be sized correctly
    static styles = css\`
        :host(.has-element) svg {
            display: block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    \`;

    @property({ type: String, reflect: true })
    public size : ${sizeType} = ${isLargeIcon ? largeIconSizeDefault : `'${regularIconSizeDefault}'`};

    @property({ type: String, reflect: true })
    public class = '${svgClasses}';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        super.connectedCallback();
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('${svgClasses}', '', null, '${name}');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }

        const hasEl = this.closest('pie-icon-button, pie-button');
        if (hasEl) {
            this.classList.add('has-element');
        }
    }

    updated (changedProperties: PropertyValues<this>) : void {
        let svgSize : { width: string, height: string, class: string };

        if (changedProperties.has('size')) {
            svgSize = getSvgProps('${svgClasses}', '', this.size, '${name}');

            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    render () : TemplateResult {
        return html\`${svg}\`;
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
