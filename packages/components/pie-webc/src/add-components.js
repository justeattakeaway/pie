import { ComponentService } from './componentService.js';

// Dependency Injection for fs and path modules
export const main = (fs, path) => {
    const componentService = new ComponentService(fs, path);

    const workingDir = process.cwd();
    componentService.verifyRootDirectory(workingDir, 'pie-monorepo');

    const componentsSourceDir = path.resolve(workingDir, 'packages/components');
    const pieWebcDir = path.join(componentsSourceDir, 'pie-webc');
    const componentsTargetDir = path.join(pieWebcDir, 'components');
    const reactTargetDir = path.join(pieWebcDir, 'react');
    const pieWebcPackageJsonPath = path.join(pieWebcDir, 'package.json');

    componentService.ensureDirectoryExists(componentsTargetDir);
    componentService.ensureDirectoryExists(reactTargetDir);

    const pieWebcPackageJson = componentService.readAndPreparePackageJson(pieWebcPackageJsonPath);
    const excludedFolders = ['pie-webc', 'pie-webc-core', 'pie-webc-testing'];

    const updatedPackageJson = processComponents(componentsSourceDir, excludedFolders, pieWebcPackageJson, componentsTargetDir, reactTargetDir, fs, path, componentService);

    fs.writeFileSync(pieWebcPackageJsonPath, `${JSON.stringify(updatedPackageJson, null, 2)}\n`);
    console.info('All components added to pie-webc!');
};

export const processComponents = (sourceDir, excludedFolders, packageJson, componentsTargetDir, reactTargetDir, fs, path, componentService) => {
    fs.readdirSync(sourceDir).forEach((folder) => {
        if (!folder.startsWith('pie-')) {
            console.info(`Skipping non-component folder: ${folder}`);
            return;
        }
        if (excludedFolders.includes(folder)) {
            console.info(`Skipping excluded folder: ${folder}`);
            return;
        }

        const fullFolderPath = path.join(sourceDir, folder);
        const componentName = folder.replace('pie-', '');
        const packageName = `@justeattakeaway/${folder}`;
        const componentPackageJsonPath = path.join(fullFolderPath, 'package.json');
        const componentPackageJsonData = fs.readFileSync(componentPackageJsonPath, 'utf-8');
        const componentPackageJson = JSON.parse(componentPackageJsonData);

        packageJson.dependencies[packageName] = componentPackageJson.version;

        const targets = [
            {
                dir: componentsTargetDir,
                exportPath: packageName,
            },
            {
                dir: reactTargetDir,
                exportPath: `${packageName}/dist/react.js`,
            }
        ];

        console.info(`Adding component: ${folder}`);

        targets.forEach((target) => {
            componentService.writeFilesForComponent(componentName, target);
        });

        packageJson.exports = {
            ...packageJson.exports,
            ...componentService.createPackageJsonExports(componentName),
        };
    });

    return packageJson;
};
