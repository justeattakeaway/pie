const svgr = require('@svgr/core');
const pieIcons = require('@justeattakeaway/pie-icons').default;
const { pascalCase } = require('pascal-case');
const path = require('path');
const fs = require('fs-extra');

const { icons } = pieIcons;

const ICONS_DIR = `${process.cwd()}/icons`;
const filePath = path.join(ICONS_DIR, '/index.tsx');

async function checkDirExists (directoryPath) {
    try {
        await fs.ensureDir(directoryPath);
        console.log(`Directory "${directoryPath}" exists.`);
    } catch (err) {
        console.error(err)
    }
}

// check that the /icons directory exists, if not create it
checkDirExists(ICONS_DIR);

// open a write stream to index.tsx
const indexFile = fs.createWriteStream(
    filePath,
    err => {
        console.error(err);
    }
);

// loop through the icons in pie-icons, generate each component and add it to the index.tsx
Object.keys(icons).map(iconKey => {
    const componentName = pascalCase(iconKey);
    const Comp = svgr.transform.sync(
        icons[iconKey].toSvg(),
        { icon: true, typescript: true },
        { componentName }
    );
    fs.writeFile(`${ICONS_DIR}/${componentName}.tsx`, Comp, err => {
        if (err) console.error(err);
    });

    indexFile.write(`export { default as ${componentName} } from './${componentName}';\n`);
});
