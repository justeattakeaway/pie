import { transform } from '@svgr/core'
import pieIcons from '@justeattakeaway/pie-icons';
import { pascalCase } from "pascal-case";
import { join } from 'path';
import fs from 'fs-extra';

const { icons } = pieIcons.default;

const ICONS_DIR = `${process.cwd()}/icons`;
const filePath = join(ICONS_DIR, '/index.tsx');

async function checkDirExists (directoryPath) {
    try {
        await fs.ensureDir(directoryPath);
        console.log(`Directory "${directoryPath}" exists.`);
    } catch (err) {
        console.error(err);
    }
}

const handleComponentName = (name) => name.replace(/\-(\d+)/, '$1'); // eslint-disable-line no-useless-escape

// check that the /icons directory exists, if not create it
checkDirExists(ICONS_DIR);

// open a write stream to index.tsx
const indexFile = fs.createWriteStream(
    filePath,
    (err) => {
        console.error(err);
    }
);

const template = (variables, { tpl }) => {
    return tpl`
    ${variables.imports};
    ${variables.interfaces};
    const ${variables.componentName} = (props: any) => {
        const { className, ...remainingProps } = props;

        return (${variables.jsx});
    }

    ${variables.exports};
`;
}

// loop through the icons in pie-icons, generate each component and add it to the index.tsx
Object.keys(icons).map((iconKey) => {
    const { pathPrefix } = icons[iconKey];
    const capitalisedPathPrefix = (pathPrefix !== undefined ? (pathPrefix).substring(1, 2).toUpperCase() + (pathPrefix).substring(2) : '');
    const componentName = `Icon${capitalisedPathPrefix + pascalCase(handleComponentName(iconKey))}`;

    let Comp = transform.sync(
        icons[iconKey].toSvg(),
        {
            icon: true,
            typescript: true,
            template: template,
        },
        { componentName },
    );

    const customClassName = `className={"pie-icon pie-icon--${iconKey.toLowerCase()}" + (props.className ? ' ' : '') + (props.className ?? '') }`;
    Comp = Comp.replace(/className=".+?"/, customClassName);
    Comp = Comp.replace('{...props}', '{...remainingProps}');

    fs.writeFile(`${ICONS_DIR}/${componentName}.tsx`, Comp, (err) => {
        if (err) console.error(err);
    });

    indexFile.write(`export { default as ${componentName} } from './${componentName}';\n`);
});
