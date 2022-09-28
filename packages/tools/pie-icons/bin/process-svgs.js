import fs from 'fs';
import path from 'path';
import { getAllSvgs } from './get-svgs';

import processSvg from './process-svg';

const IN_DIR = `${process.cwd()}/src/assets`;
const OUT_DIR = `${process.cwd()}/src/assets/optimised`;

console.log(`Processing SVGs in ${IN_DIR}...`);

const svgFiles = getAllSvgs().filter((file) => path.extname(file.fileName) === '.svg');

svgFiles.forEach((svgObject) => {
  const fullPath = path.join(svgObject.path, '/', svgObject.fileName)

  const svg = fs.readFileSync(fullPath);
  const optimisedSvg = processSvg(svg);

  processSvg(svg)
    .then(svg => {
      fs.writeFileSync(path.join(OUT_DIR, svgObject.fileName), svg)
    })
    .catch(error => {
      console.error(svgObject, error);
    });
});
