import fs from 'fs';
import path from 'path';

const IN_DIR = `${process.cwd()}/src/assets`;

export function getAllSvgs(dirPath = IN_DIR, arrayOfFiles = []) {
  console.log(`Getting SVGs from ${dirPath}...`);

  const allFiles = fs.readdirSync(dirPath) || [];
  allFiles.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory() && file !== 'optimised') {
      arrayOfFiles.concat(getAllSvgs(dirPath + '/' + file, arrayOfFiles));
    } else {
      arrayOfFiles.push({
        path: dirPath,
        fileName: file
      });
    }
  });
  return arrayOfFiles;
}
