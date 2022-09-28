import fs from 'fs';
import path from 'path';
import { getAllSvgs } from './build-icons-json';

import processSvg from './process-svg';

const IN_DIR = `${process.cwd()}/src/pie-icons`;

console.log(`Processing SVGs in ${IN_DIR}...`);

const svgFiles = getAllSvgs().filter((file) => path.extname(file) === '.svg');

svgFiles.forEach((svgFile) => {
  const svg = fs.readFileSync(svgFile);
  processSvg(svg)
    .then((svg) => fs.writeFileSync(path.join(IN_DIR, svgFile), svg))
    .catch((error) => {
      console.error(svgFile, error);
    });
});
