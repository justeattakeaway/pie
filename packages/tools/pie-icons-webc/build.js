import { html } from 'lit';
import pascalCase from 'just-pascal-case';
import kebabCase from 'just-kebab-case';
import path from 'path';
import fs from 'fs';

import pieIcons from '@justeattakeaway/pie-icons';
import { normalizeIconName } from '@justeattakeaway/pie-icons-configs';

const { icons } = pieIcons.default;

// The following styles make sure that if the icon is used inside pie-icon-button, it will be sized correctly
const styleTag = html`
    <style>
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    </style>`;

const componentTemplate = (name, svg) => {
    const svgClasses = svg.match(/class="(.+?)"/)?.[1];

    return `import {
    html, LitElement, TemplateResult, css,
} from 'lit';
import { property, query } from 'lit/decorators.js';
import type { DependentMap } from '@justeattakeaway/pie-webc-core';
import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const sizes = ['small', 'medium', 'large', 'xlarge', 'xxlarge'] as const;
type Size = typeof sizes[number];

interface IconProps {
    size: Size;
    class: string;
}

const componentSelector = '${kebabCase(name)}';

export class ${name} extends LitElement implements IconProps {
    static styles = css\`
        :host-context(pie-icon-button) svg,
        :host-context(pie-button) svg {
            display:block;
            width: var(--btn-icon-size);
            height: var(--btn-icon-size);
        }
    \`;

    @property({ type: String, reflect: true })
    public size : Size = 'medium';

    @property({ type: String, reflect: true })
    public class = '${svgClasses}';

    @query('svg')
    private _svg? : SVGElement;

    connectedCallback () : void {
        if (this._svg?.getAttribute('width') === null) {
            const svgSize = getSvgProps('${svgClasses}', '', null, '${name}');
            this._svg?.setAttribute('width', svgSize.width);
            this._svg?.setAttribute('height', svgSize.height);
        }
    }

    updated (changedProperties: DependentMap<IconProps>) : void {
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

customElements.define(componentSelector, ${name});

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: ${name};
    }
}
`;
};

const ICONS_DIR = `${process.cwd()}/icons`;
const indexPath = path.join(ICONS_DIR, '/index.ts');

async function checkDirExists (directoryPath) {
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

async function build () {
    // check if /icons directory exists, if not create it
    await checkDirExists(ICONS_DIR);

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
    });

    fs.writeFileSync(indexPath, indexFileString, 'utf8');
}

build();
