import fs from 'fs';

const IN_DIR = `${process.cwd()}/src/assets`;

function getAllSvgs(dirPath = IN_DIR, arrayOfFiles = []) {
    console.log(`Getting SVGs from ${dirPath}...`);

    const allFiles = fs.readdirSync(dirPath) || [];
    allFiles.forEach((file) => {
        if (fs.statSync(`${dirPath}/${file}`).isDirectory() && file !== '_optimised') {
            arrayOfFiles.concat(getAllSvgs(`${dirPath}/${file}`, arrayOfFiles));
        } else {
            arrayOfFiles.push({
                fileName: file,
                path: dirPath,
            });
        }
    });
    return arrayOfFiles;
}

export default getAllSvgs;
