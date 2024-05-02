#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const workingDir = process.cwd();

// Function to check if the script is run from the expected directory
function verifyRootDirectory (expectedPackageName) {
    const packageJsonPath = path.join(workingDir, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
        console.error('Error: Please run this script from the root of the monorepo.');
        process.exit(1);
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (packageJson.name !== expectedPackageName) {
        console.error('Error: Please run this script from the root of the monorepo.');
        process.exit(1);
    }
}

// Ensure the script is run from the root of the monorepo
verifyRootDirectory('pie-monorepo');

const componentsSourceDir = path.resolve('packages/components');
const pieWebcDir = path.join(componentsSourceDir, 'pie-webc');
const componentsTargetDir = path.join(pieWebcDir, 'components');
const reactTargetDir = path.join(pieWebcDir, 'react');
const pieWebcPackageJsonPath = path.join(pieWebcDir, 'package.json');
const excludedFolders = ['pie-webc', 'pie-webc-core', 'pie-webc-testing'];

// Read and parse the package.json of pie-webc
const pieWebcPackageJsonData = fs.readFileSync(pieWebcPackageJsonPath, 'utf-8');
const pieWebcPackageJson = JSON.parse(pieWebcPackageJsonData);
pieWebcPackageJson.exports = pieWebcPackageJson.exports || {};
pieWebcPackageJson.dependencies = pieWebcPackageJson.dependencies || {};

// Ensure target 'components' and 'react' directories exist
if (!fs.existsSync(componentsTargetDir)) {
    fs.mkdirSync(componentsTargetDir, { recursive: true });
}

if (!fs.existsSync(reactTargetDir)) {
    fs.mkdirSync(reactTargetDir, { recursive: true });
}

// Loop over all pie component packages and add them to pie-webc
fs.readdirSync(componentsSourceDir).forEach((folder) => {
    if (folder.startsWith('pie-') && !excludedFolders.includes(folder)) {
        const fullFolderPath = path.join(componentsSourceDir, folder);
        const componentName = folder.replace('pie-', '');
        const packageName = `@justeattakeaway/${folder}`;
        const componentPackageJsonPath = path.join(fullFolderPath, 'package.json');
        const componentPackageJsonData = fs.readFileSync(componentPackageJsonPath, 'utf-8');
        const componentPackageJson = JSON.parse(componentPackageJsonData);

        // Add the component package as a dependency to pie-webc
        pieWebcPackageJson.dependencies[packageName] = componentPackageJson.version;

        const targets = [
            { dir: componentsTargetDir, type: 'components', exportPath: packageName },
            { dir: reactTargetDir, type: 'react', exportPath: `${packageName}/dist/react.js` }
        ];

        // Create the js and d.ts files for the component in the target directories
        targets.forEach((target) => {
            const jsFilePath = path.join(target.dir, `${componentName}.js`);
            const tsFilePath = path.join(target.dir, `${componentName}.d.ts`);

            const fileContent = `export * from '${target.exportPath}';\n`;
            fs.writeFileSync(jsFilePath, fileContent);
            fs.writeFileSync(tsFilePath, fileContent);

            if (!pieWebcPackageJson.exports) {
                pieWebcPackageJson.exports = {};
            }

            // Update exports in the pie-webc package.json to include the component
            pieWebcPackageJson.exports[`./${target.type}/${componentName}.js`] = {
                import: `./${target.type}/${componentName}.js`,
                require: `./${target.type}/${componentName}.js`,
                types: `./${target.type}/${componentName}.d.ts`,
            };
        });
    }
});

// Write updates back to the package.json
fs.writeFileSync(pieWebcPackageJsonPath, `${JSON.stringify(pieWebcPackageJson, null, 2)}\n`);
console.info('All components added to pie-webc');
