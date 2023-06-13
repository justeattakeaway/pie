import fs from 'fs';
import path from 'path';
import getAllSvgs from './get-svgs';
import pathHelpers from './path-helpers';
import processSvg from './process-svg';

const IN_DIR = `${process.cwd()}/src/assets`;
const OUT_DIR = `${process.cwd()}/src/assets/_optimised`;

console.log(`Processing SVGs in ${IN_DIR}...`);

const svgFiles = getAllSvgs().filter((file) => path.extname(file.fileName) === '.svg');

svgFiles.forEach((svgObject) => {
    const fullPath = path.join(svgObject.path, '/', svgObject.fileName);

    const svg = fs.readFileSync(fullPath);
    const directorySuffix = pathHelpers.getAssetDirectoryName(svgObject.path);

    processSvg(svg, svgObject.fileName, fullPath)
        .then((svg) => {
            const outputDirectory = OUT_DIR + directorySuffix;
            const normalisedFilename = (svgObject.fileName).toLowerCase();

            fs.mkdirSync(outputDirectory, { recursive: true });
            fs.writeFileSync(path.join(outputDirectory, normalisedFilename), svg);
        })
        .catch((error) => {
            console.error(svgObject, error);
        });
});
