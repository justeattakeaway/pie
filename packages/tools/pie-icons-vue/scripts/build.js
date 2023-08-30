import path from 'path';
import { pascalCase } from 'pascal-case';
import fs from 'fs-extra';

import pieIcons from '@justeattakeaway/pie-icons';
import { normalizeIconName } from '@justeattakeaway/pie-icons-configs';

const componentTemplate = (name, svg) => {
    const isLargeIcon = name.endsWith('Large');
    const iconSize = isLargeIcon ? 'large' : 'regular';
    const [, svgClasses] = svg.match(/class="(.+?)"/);

    return `import { iconSize, updateContextData } from '@justeattakeaway/pie-icons-configs/configs-vue';

export default {
    name: '${name}',

    props: {
        size: iconSize.${iconSize},
    },

    functional: true,

    render (h, ctx) {
        ctx.data = updateContextData(ctx, '${svgClasses}', '${name}');

        return ${svg.replace(/(class=".+?")/, '{...ctx.data}')};
    }
};
`;
};

const { icons } = pieIcons.default;

const ICONS_DIR = `${process.cwd()}/generated`;
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

async function build () {
    // check if /generated directory exists, if not create it
    await checkDirExists(ICONS_DIR);

    let indexFileString = '/* eslint-disable camelcase */\n';

    // loop through the icons in pie-icons, generate each component and add it to the index.tsx
    Object.keys(icons).forEach((iconKey) => {
        const { pathPrefix } = icons[iconKey];
        const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
        const pascalCasedName = pascalCase(normalizeIconName(iconKey));
        const componentName = `Icon${capitalisedPathPrefix + pascalCasedName}`;

        const svg = pieIcons.default.icons[iconKey].toSvg();
        let component = componentTemplate(componentName, svg);
        component = component.replace(/xlink:href/g, 'xlinkHref'); // replace so it gets parsed by JSX correctly

        indexFileString += `export { default as ${componentName} } from './${componentName}';\n`;

        fs.writeFileSync(`./generated/${componentName}.js`, component, 'utf8');
    });

    fs.outputFileSync(indexPath, indexFileString, 'utf8');
}

build();
