import chalk from 'chalk';

export class ComponentService {
    constructor (fs, path) {
        this.fs = fs;
        this.path = path;
    }

    /**
     * Helper function to get some frequently-used paths for the script.
     * @param {string} workingDir - The current working directory.
     * @returns {Object} - An object containing useful paths for the script.
     */
    getPathShortcuts (workingDir) {
        const componentsSourceDir = this.path.resolve(workingDir, 'packages/components');
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

    /**
     * Checks if a directory exists and creates it if it doesn't.
     * @param {string} dir - The directory to create if it doesn't exist.
     */
    ensureDirectoryExists (dir) {
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
        }
    }

    /**
     * Reads and returns the package.json file at the given path,
     * making sure that the `exports` and `dependencies` fields are present.
     * @param {string} packageJsonPath - Path to the package.json file, including the file name.
     * @returns - The prepared package.json object.
     */
    readAndPreparePackageJson (packageJsonPath) {
        const packageJsonData = this.fs.readFileSync(packageJsonPath, 'utf-8');
        const packageJson = JSON.parse(packageJsonData);
        packageJson.exports = packageJson.exports || {};
        packageJson.dependencies = packageJson.dependencies || {};

        return packageJson;
    }

    /**
     * Verifies that the script is run from the root of the monorepo
     * and that the package name matches the expected package name.
     * @param {string} workingDir - The working directory from which the script is being run.
     * @param {*} expectedPackageName - The expected package name for the directory the script should be run from.
     */
    verifyRootDirectory (workingDir, expectedPackageName) {
        const packageJsonPath = this.path.join(workingDir, 'package.json');

        if (!this.fs.existsSync(packageJsonPath)) {
            throw new Error(chalk.redBright('Please run this script from the root of the monorepo.'));
        }

        const packageJson = JSON.parse(this.fs.readFileSync(packageJsonPath, 'utf8'));

        if (packageJson.name !== expectedPackageName) {
            throw new Error(chalk.redBright('Incorrect package: Please run this script from the root of the monorepo.'));
        }
    }

    /**
     * Creates the exports for a component to be added to the pie-webc package.json.
     * @param {string} componentName - The name of the component to create exports for, omitting the `'pie-'` prefix.
     * @returns {Object} - An object containing the exports for the component.
     */
    createPackageJsonExports (componentName) {
        const exports = {
            [`./components/${componentName}`]: {
                import: `./components/${componentName}.js`,
                require: `./components/${componentName}.js`,
                types: `./components/${componentName}.d.ts`,
            },
            [`./components/${componentName}.js`]: {
                import: `./components/${componentName}.js`,
                require: `./components/${componentName}.js`,
                types: `./components/${componentName}.d.ts`,
            },
            [`./react/${componentName}`]: {
                import: `./react/${componentName}.js`,
                require: `./react/${componentName}.js`,
                types: `./react/${componentName}.d.ts`,
            },
            [`./react/${componentName}.js`]: {
                import: `./react/${componentName}.js`,
                require: `./react/${componentName}.js`,
                types: `./react/${componentName}.d.ts`,
            },
        };

        return exports;
    }

    /**
     * Writes a `.js` and `.d.ts` file for the given component to the target directory.
     * @param {*} componentName - The name of the component to write files for, omitting the `'pie-'` prefix.
     * @param {*} target - An object containing the target directory and the export path.
     * @param {*} target.dir - The target directory to write the files to.
     * Either `'components'` or `'react'`.
     * @param {*} target.exportPath - The export path for the component.
     * For react components, this should be the path to the react.js file including the package name, e.g., `'@justeattakeaway/pie-button/dist/react.js'`.
     * Otherwise, this should be the package name, e.g., `'@justeattakeaway/pie-button'`.
     */
    writeFilesForComponent (componentName, target) {
        const jsFilePath = this.path.join(target.dir, `${componentName}.js`);
        const tsFilePath = this.path.join(target.dir, `${componentName}.d.ts`);

        const fileContent = `export * from '${target.exportPath}';\n`;
        this.fs.writeFileSync(jsFilePath, fileContent);
        this.fs.writeFileSync(tsFilePath, fileContent);
    }

    /**
     * Writes the package.json file to the given path.
     * @param {string} path - The path to write the package.json file to.
     * @param {Object} content - The content to write to the package.json file.
     */
    writePackageJson (path, content) {
        this.fs.writeFileSync(path, `${JSON.stringify(content, null, 2)}\n`);
    }

    /**
     * Finds sub components in a component directory.
     * @param {string} componentPath - The path to the component directory.
     * @returns {Array} - An array of sub component names found in the component's src directory.
     */
    findSubComponents (componentPath) {
        const srcPath = this.path.join(componentPath, 'src');

        if (!this.fs.existsSync(srcPath)) {
            return [];
        }

        return this.fs.readdirSync(srcPath)
            .filter((item) => {
                const itemPath = this.path.join(srcPath, item);
                return this.fs.statSync(itemPath).isDirectory() && item.startsWith('pie-');
            });
    }

    /**
     * Processes all components in the components directory, adding them to the pie-webc package.
     * @param {*} workingDir - The working directory from which the script is run.
     * @param {*} excludedFolders - An array of folder names to exclude from the processing.
     * By default, any folder starting with 'pie-' will be processed, unless excluded.
     * @param {*} packageJson - The package.json object to update with the new dependencies and exports.
     * @returns - The updated package.json object.
     */
    processComponents (workingDir, excludedFolders, packageJson) {
        const newPackageJson = { ...packageJson };
        const {
            componentsSourceDir, componentsTargetDir, reactTargetDir,
        } = this.getPathShortcuts(workingDir);

        this.fs.readdirSync(componentsSourceDir).forEach((folder) => {
            if (!folder.startsWith('pie-')) {
                return;
            }
            if (excludedFolders.includes(folder)) {
                console.info(chalk.yellow(`Excluding: ${chalk.white(folder)}`));
                return;
            }

            const fullFolderPath = this.path.join(componentsSourceDir, folder);
            const componentName = folder.replace('pie-', '');
            const packageName = `@justeattakeaway/${folder}`;
            const componentPackageJsonPath = this.path.join(fullFolderPath, 'package.json');
            const componentPackageJsonData = this.fs.readFileSync(componentPackageJsonPath, 'utf-8');
            const componentPackageJson = JSON.parse(componentPackageJsonData);

            // Add the component to dependencies
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

            console.info(chalk.gray(`Adding:    ${chalk.white(folder)}`));

            targets.forEach((target) => {
                this.writeFilesForComponent(componentName, target);
            });

            const subComponents = this.findSubComponents(fullFolderPath);

            if (subComponents.length > 0) {
                subComponents.forEach((subComponent) => {
                    const subComponentName = subComponent.replace('pie-', '');

                    console.info(chalk.gray(`Adding sub-component: ${chalk.white(subComponent)}`));

                    const subComponentTargets = [
                        {
                            dir: componentsTargetDir,
                            exportPath: `${packageName}/dist/${subComponent}/index.js`,
                        },
                        {
                            dir: reactTargetDir,
                            exportPath: `${packageName}/dist/${subComponent}/react.js`,
                        }
                    ];

                    subComponentTargets.forEach((target) => {
                        this.writeFilesForComponent(subComponentName, target);
                    });

                    const subComponentExports = this.createPackageJsonExports(subComponentName);
                    newPackageJson.exports = {
                        ...newPackageJson.exports,
                        ...subComponentExports,
                    };
                });
            }

            const exportsObj = {
                ...newPackageJson.exports,
                ...this.createPackageJsonExports(componentName),
            };

            const sortedExports = Object.keys(exportsObj)
                .sort((a, b) => {
                    // Extract path parts
                    const { dir: dirA, name: nameA } = this.path.parse(a);
                    const { dir: dirB, name: nameB } = this.path.parse(b);

                    // Compare by file names
                    const nameComparison = nameA.localeCompare(nameB);

                    // If the base names are the same, compare the paths
                    if (nameComparison === 0) return dirA.localeCompare(dirB);

                    // Otherwise, use the file name comparison
                    return nameComparison;
                })
                .reduce((acc, key) => {
                    // Use the sorted keys to build a new object
                    acc[key] = exportsObj[key];
                    return acc;
                }, {});

            newPackageJson.exports = sortedExports;
        });

        return newPackageJson;
    }
}
