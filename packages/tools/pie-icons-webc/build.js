/* eslint-disable */
const path = require('path');
const pieIcons = require('@justeattakeaway/pie-icons').default;
const { pascalCase } = require('pascal-case');
const fs = require('fs-extra');
const { execSync } = require('child_process');
const kebabCase = require('kebab-case');
const { removeHyphenBeforeDigits } = require('./helpers');

const { icons } = pieIcons;

const componentTemplate = (name, svg) => `import { getDefaultIconSize, iconSize, getSvgProps } from '@justeattakeaway/pie-icons-configs/configs';

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

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        const defaultSize = getDefaultIconSize('${name}');

        svg.setAttribute('width', iconSize[defaultSize]);
        svg.setAttribute('height', iconSize[defaultSize]);

        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');

        const svgSize = getSvgProps('', '', newVal, '${name}');

        svg.setAttribute('width', svgSize.width);
        svg.setAttribute('height', svgSize.height);

        this.root.append(svg);
    }
}

customElements.define('${kebabCase(name).replace(/-/, '')}', ${name});
`;

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

function copyIconsConfigFiles () {
    const srcFilePaths = [
        path.resolve(process.cwd(), '../pie-icons-configs/configs.js'),
    ];
    const destFilePath = path.resolve(process.cwd(), './icons');

    srcFilePaths.forEach((srcFilePath) => execSync(`copy ${srcFilePath} ${destFilePath}`));
}

async function build () {
    // check if /icons directory exists, if not create it
    await checkDirExists(ICONS_DIR);

    copyIconsConfigFiles();

    let indexFileString = '/* eslint-disable camelcase */\n';

    // loop through the icons in pie-icons, generate each component and add it to the index.js
    Object.keys(icons).forEach((iconKey) => {
        const { pathPrefix } = icons[iconKey];
        const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
        const pascalCasedName = pascalCase(removeHyphenBeforeDigits(iconKey));

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
