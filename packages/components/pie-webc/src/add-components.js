// Dependency Injection for fs and path modules
export const main = (fs, path) => {
    const workingDir = process.cwd();
    verifyRootDirectory(workingDir, 'pie-monorepo', fs, path);

    const componentsSourceDir = path.resolve(workingDir, 'packages/components');
    const pieWebcDir = path.join(componentsSourceDir, 'pie-webc');
    const componentsTargetDir = path.join(pieWebcDir, 'components');
    const reactTargetDir = path.join(pieWebcDir, 'react');
    const pieWebcPackageJsonPath = path.join(pieWebcDir, 'package.json');

    const pieWebcPackageJson = ensureDirectoriesAndReadPackageJson(pieWebcPackageJsonPath, componentsTargetDir, reactTargetDir, fs);
    const excludedFolders = ['pie-webc', 'pie-webc-core', 'pie-webc-testing'];

    processComponents(componentsSourceDir, excludedFolders, pieWebcPackageJson, componentsTargetDir, reactTargetDir, fs, path);

    fs.writeFileSync(pieWebcPackageJsonPath, `${JSON.stringify(pieWebcPackageJson, null, 2)}\n`);
    console.info('All components added to pie-webc');
};

export const verifyRootDirectory = (workingDir, expectedPackageName, fs, path) => {
    const packageJsonPath = path.join(workingDir, 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
        throw new Error('Please run this script from the root of the monorepo.');
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    if (packageJson.name !== expectedPackageName) {
        throw new Error('Incorrect package: Please run this script from the root of the monorepo.');
    }
};

export const ensureDirectoriesAndReadPackageJson = (packageJsonPath, componentsTargetDir, reactTargetDir, fs) => {
    if (!fs.existsSync(componentsTargetDir)) {
        fs.mkdirSync(componentsTargetDir, { recursive: true });
    }

    if (!fs.existsSync(reactTargetDir)) {
        fs.mkdirSync(reactTargetDir, { recursive: true });
    }

    const packageJsonData = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonData);
    packageJson.exports = packageJson.exports || {};
    packageJson.dependencies = packageJson.dependencies || {};

    return packageJson;
};

export const processComponents = (sourceDir, excludedFolders, packageJson, componentsTargetDir, reactTargetDir, fs, path) => {
    fs.readdirSync(sourceDir).forEach((folder) => {
        if (folder.startsWith('pie-') && !excludedFolders.includes(folder)) {
            addComponentToPackage(folder, sourceDir, packageJson, componentsTargetDir, reactTargetDir, fs, path);
        }
    });
};

export const addComponentToPackage = (folder, sourceDir, packageJson, componentsTargetDir, reactTargetDir, fs, path) => {
    const fullFolderPath = path.join(sourceDir, folder);
    const componentName = folder.replace('pie-', '');
    const packageName = `@justeattakeaway/${folder}`;
    const componentPackageJsonPath = path.join(fullFolderPath, 'package.json');
    const componentPackageJsonData = fs.readFileSync(componentPackageJsonPath, 'utf-8');
    const componentPackageJson = JSON.parse(componentPackageJsonData);

    packageJson.dependencies[packageName] = componentPackageJson.version;

    const targets = [
        { dir: componentsTargetDir, type: 'components', exportPath: packageName },
        { dir: reactTargetDir, type: 'react', exportPath: `${packageName}/dist/react.js` }
    ];

    targets.forEach((target) => {
        createFilesForComponent(componentName, target, fs, path, packageJson);
    });
};

export const createFilesForComponent = (componentName, target, fs, path, packageJson) => {
    const jsFilePath = path.join(target.dir, `${componentName}.js`);
    const tsFilePath = path.join(target.dir, `${componentName}.d.ts`);

    const fileContent = `export * from '${target.exportPath}';\n`;
    fs.writeFileSync(jsFilePath, fileContent);
    fs.writeFileSync(tsFilePath, fileContent);

    packageJson.exports[`./${target.type}/${componentName}.js`] = {
        import: `./${target.type}/${componentName}.js`,
        require: `./${target.type}/${componentName}.js`,
        types: `./${target.type}/${componentName}.d.ts`,
    };
};
