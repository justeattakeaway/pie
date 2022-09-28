import fs from 'fs';
import path from 'path';

import buildIconsObject from './build-icons-object';

const IN_DIR = `${process.cwd()}/src/pie-icons`;
const OUT_FILE = `${process.cwd()}/dist/icons.json`;

console.log(`Building ${OUT_FILE}...`);

export function getAllSvgs(dirPath = IN_DIR, arrayOfFiles = []) {
  const allFiles = fs.readdirSync(dirPath) || [];
  allFiles.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles.concat(getAllSvgs(dirPath + '/' + file, arrayOfFiles));
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });
  return arrayOfFiles;
}

const svgFiles = getAllSvgs().filter((file) => path.extname(file) === '.svg');

const getSvg = (svgFile) => fs.readFileSync(svgFile);

const icons = buildIconsObject(svgFiles, getSvg);

fs.writeFileSync(OUT_FILE, JSON.stringify(icons));
