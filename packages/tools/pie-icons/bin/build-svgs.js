import fs from 'fs';
import path from 'path';
import icons from '../src/icons';

const OUT_DIR = `${process.cwd()}/dist/icons`;

console.log(`Building SVGs in ${OUT_DIR}...`);

Object.keys(icons).forEach(name => {
    const svg = icons[name].toSvg();
    const outputDirectory = OUT_DIR + (icons[name].pathPrefix ?? '');

    fs.mkdirSync(outputDirectory, { recursive: true });
    fs.writeFileSync(path.join(outputDirectory, `${name}.svg`), svg);
});
