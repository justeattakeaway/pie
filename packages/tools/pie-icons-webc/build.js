import pieIcons from '@justeattakeaway/pie-icons';
import { pascalCase } from 'pascal-case';
import path from 'path';
import fs from 'fs-extra';
import kebabCase from 'kebab-case';

const { icons } = pieIcons.default;

const componentTemplate = (name, svg) => {
    const [, svgClasses] = svg.match(/class="(.+?)"/);

    return `import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '${svg}';

export class ${name} extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');
        const svgSize = getSvgProps('${svgClasses}', '', null, '${name}');
        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);
        this.setAttribute('class', '${svgClasses}');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('${svgClasses}', '', newVal, '${name}');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('${kebabCase(name).replace(/-/, '')}', ${name});
`;
};

const ICONS_DIR = `${process.cwd()}/icons`;
const indexPath = path.join(ICONS_DIR, '/index.js');

async function checkDirExists (directoryPath) {
    try {
        await fs.ensureDir(directoryPath);
        console.info(`Directory "${directoryPath}" exists.`);
    } catch (err) {
        console.error(err);
    }
}

const handleComponentName = (name) => name.replace(/\-(\d+)/, '$1'); // eslint-disable-line no-useless-escape

async function build () {
    // check if /icons directory exists, if not create it
    await checkDirExists(ICONS_DIR);

    let indexFileString = '/* eslint-disable camelcase */\n';

    // loop through the icons in pie-icons, generate each component and add it to the index.js
    Object.keys(icons).forEach((iconKey) => {
        const { pathPrefix } = icons[iconKey];
        const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
        const pascalCasedName = pascalCase(handleComponentName(iconKey));

        const componentName = `Icon${capitalisedPathPrefix + pascalCasedName}`;

        const svg = icons[iconKey].toSvg();

        let component = componentTemplate(componentName, svg);
        component = component.replace(/xlink:href/g, 'xlinkHref'); // replace so it gets parsed by JSX correctly

        indexFileString += `export { ${componentName} } from './${componentName}';\n`;

        fs.writeFileSync(`./icons/${componentName}.js`, component, 'utf8');
    });

    fs.outputFileSync(indexPath, indexFileString, 'utf8');
}

build();
