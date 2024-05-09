export class ComponentService {
    constructor (fs, path) {
        this.fs = fs;
        this.path = path;
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

    verifyRootDirectory (workingDir, expectedPackageName) {
        const packageJsonPath = this.path.join(workingDir, 'package.json');

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
}
