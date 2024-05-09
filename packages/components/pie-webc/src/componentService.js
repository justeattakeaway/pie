export class ComponentService {
    constructor (fs, path) {
        this.fs = fs;
        this.path = path;
        this.cwd = process.cwd();
    }

    getPathShortcuts () {
        const componentsSourceDir = this.path.resolve(this.cwd, 'packages/components');
        const pieWebcDir = this.path.join(componentsSourceDir, 'pie-webc');
        const componentsTargetDir = this.path.join(pieWebcDir, 'components');
        const reactTargetDir = this.path.join(pieWebcDir, 'react');
        const pieWebcPackageJsonPath = this.path.join(pieWebcDir, 'package.json');

        return {
            componentsSourceDir,
            componentsTargetDir,
            reactTargetDir,
            pieWebcPackageJsonPath,
        };
    }

    processComponents (excludedFolders, packageJson) {
        const newPackageJson = { ...packageJson };
        const {
            componentsSourceDir, componentsTargetDir, reactTargetDir,
        } = this.getPathShortcuts();

        this.fs.readdirSync(componentsSourceDir).forEach((folder) => {
            if (!folder.startsWith('pie-')) {
                console.info(`Skipping non-component folder: ${folder}`);
                return;
            }
            if (excludedFolders.includes(folder)) {
                console.info(`Skipping excluded folder: ${folder}`);
                return;
            }

            const fullFolderPath = this.path.join(componentsSourceDir, folder);
            const componentName = folder.replace('pie-', '');
            const packageName = `@justeattakeaway/${folder}`;
            const componentPackageJsonPath = this.path.join(fullFolderPath, 'package.json');
            const componentPackageJsonData = this.fs.readFileSync(componentPackageJsonPath, 'utf-8');
            const componentPackageJson = JSON.parse(componentPackageJsonData);

            newPackageJson.dependencies[packageName] = componentPackageJson.version;

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
                this.writeFilesForComponent(componentName, target);
            });

            newPackageJson.exports = {
                ...newPackageJson.exports,
                ...this.createPackageJsonExports(componentName),
            };
        });

        return newPackageJson;
    }

    ensureDirectoryExists (dir) {
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
        }
    }

    readAndPreparePackageJson (packageJsonPath) {
        const packageJsonData = this.fs.readFileSync(packageJsonPath, 'utf-8');
        const packageJson = JSON.parse(packageJsonData);
        packageJson.exports = packageJson.exports || {};
        packageJson.dependencies = packageJson.dependencies || {};

        return packageJson;
    }

    verifyRootDirectory (expectedPackageName) {
        const packageJsonPath = this.path.join(this.cwd, 'package.json');

        if (!this.fs.existsSync(packageJsonPath)) {
            console.error('Please run this script from the root of the monorepo.');
            process.exit(1);
        }

        const packageJson = JSON.parse(this.fs.readFileSync(packageJsonPath, 'utf8'));

        if (packageJson.name !== expectedPackageName) {
            console.error('Incorrect package: Please run this script from the root of the monorepo.');
            process.exit(1);
        }
    }

    createPackageJsonExports (componentName) {
        const exports = {
            [`./components/${componentName}.js`]: {
                import: `./components/${componentName}.js`,
                require: `./components/${componentName}.js`,
                types: `./components/${componentName}.d.ts`,
            },
            [`./react/${componentName}.js`]: {
                import: `./react/${componentName}.js`,
                require: `./react/${componentName}.js`,
                types: `./react/${componentName}.d.ts`,
            },
        };

        return exports;
    }

    writeFilesForComponent (componentName, target) {
        const jsFilePath = this.path.join(target.dir, `${componentName}.js`);
        const tsFilePath = this.path.join(target.dir, `${componentName}.d.ts`);

        const fileContent = `export * from '${target.exportPath}';\n`;
        this.fs.writeFileSync(jsFilePath, fileContent);
        this.fs.writeFileSync(tsFilePath, fileContent);
    }

    writePackageJson (path, content) {
        this.fs.writeFileSync(path, `${JSON.stringify(content, null, 2)}\n`);
    }
}
