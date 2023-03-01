import fs from 'fs';
import path from 'path';

import getAllSvgs from './get-svgs';
import buildIconsObject from './build-icons-object';

const IN_DIR = `${process.cwd()}/src/assets/_optimised`; // get optimised SVG files
const OUT_FILE = `${process.cwd()}/dist/icons.json`;

console.log(`Building ${OUT_FILE}...`);

const svgFiles = getAllSvgs(IN_DIR)
    .filter(file => path.extname(file.fileName) === '.svg')
    .map(file => path.join(file.path, file.fileName));

const getSvg = svgFile => fs.readFileSync(svgFile);

const icons = buildIconsObject(svgFiles, getSvg);

fs.writeFileSync(OUT_FILE, JSON.stringify(icons));
