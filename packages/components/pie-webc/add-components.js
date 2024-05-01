import fs from 'fs';
import path from 'path';

// Define the directory paths accurately
const rootDir = path.join(process.cwd(), '../../'); // Adjusted to go two levels up
const componentsSourceDir = path.join(rootDir, 'components'); // Source components directory, siblings to the current script's directory
const componentsTargetDir = path.join(process.cwd(), 'components'); // Target components directory within the script's directory
const reactTargetDir = path.join(process.cwd(), 'react'); // Target react directory within the script's directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
const excludedFolders = ['pie-webc', 'pie-webc-core', 'pie-webc-testing']; // Folders to exclude

// Read and parse the package.json of the project running the script
const mainPackageJsonData = fs.readFileSync(packageJsonPath, 'utf-8');
const mainPackageJson = JSON.parse(mainPackageJsonData);
mainPackageJson.exports = mainPackageJson.exports || {};
mainPackageJson.dependencies = mainPackageJson.dependencies || {};

// Ensure target directories exist
if (!fs.existsSync(componentsTargetDir)) fs.mkdirSync(componentsTargetDir, { recursive: true });
if (!fs.existsSync(reactTargetDir)) fs.mkdirSync(reactTargetDir, { recursive: true });

// Process components directory
fs.readdirSync(componentsSourceDir).forEach((folder) => {
    if (folder.startsWith('pie-') && !excludedFolders.includes(folder)) {
        const fullFolderPath = path.join(componentsSourceDir, folder);
        const componentName = folder.replace('pie-', '');
        const packageName = `@justeattakeaway/${folder}`;
        const componentPackageJsonPath = path.join(fullFolderPath, 'package.json');
        const componentPackageJsonData = fs.readFileSync(componentPackageJsonPath, 'utf-8');
        const componentPackageJson = JSON.parse(componentPackageJsonData);

        // Update the dependencies in the package.json of the project running the script
        mainPackageJson.dependencies[packageName] = componentPackageJson.version;

        // JavaScript and TypeScript files
        const targets = [
            { dir: componentsTargetDir, type: 'components', exportPath: packageName },
            { dir: reactTargetDir, type: 'react', exportPath: `${packageName}/dist/react.js` }
        ];

        targets.forEach((target) => {
            const jsFilePath = path.join(target.dir, `${componentName}.js`);
            const tsFilePath = path.join(target.dir, `${componentName}.d.ts`);

            const fileContent = `export * from '${target.exportPath}';\n`;
            fs.writeFileSync(jsFilePath, fileContent);
            fs.writeFileSync(tsFilePath, fileContent);

            // Update exports in the package.json of the project running the script
            mainPackageJson.exports[`./${target.type}/${componentName}.js`] = {
                import: `./${target.type}/${componentName}.js`,
                require: `./${target.type}/${componentName}.js`,
                types: `./${target.type}/${componentName}.d.ts`,
            };
        });
    }
});

// Write updates back to the package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(mainPackageJson, null, 2));
console.log('Components processed successfully.');
