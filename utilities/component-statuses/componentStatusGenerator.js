class ComponentStatusGenerator {
    constructor ({
        fs, path, promisify, console,
    }) {
        this.fs = fs;
        this.path = path;
        this.promisify = promisify;
        this.console = console;

        this.readdir = promisify(fs.readdir);
        this.stat = promisify(fs.stat);
        this.readFile = promisify(fs.readFile);
        this.writeFile = promisify(fs.writeFile);

        // These are packages that live in the components folder that we don't need to query for statuses
        this.excludes = [
            '@justeattakeaway/pie-webc',
            '@justeattakeaway/pie-webc-core',
            '@justeattakeaway/pie-webc-testing'
        ];
    }

    // Finds the root of the monorepo by looking for a 'packages/components' directory
    findMonorepoRootSync (startDir) {
        let currentDir = startDir;

        while (currentDir !== this.path.parse(currentDir).root) {
            const potentialComponentsDir = this.path.join(currentDir, 'packages', 'components');
            if (this.fs.existsSync(potentialComponentsDir) && this.fs.lstatSync(potentialComponentsDir).isDirectory()) {
                return currentDir;
            }
            currentDir = this.path.dirname(currentDir);
        }

        throw new Error('Could not find the monorepo root.');
    }

    // Generates a json file with the statuses of each PIE component. The status is sourced from the package.json file of each component.
    // The json will be outputted to the root of the package invoking this script as 'component-statuses.json'
    async generateStatuses () {
        this.console.info('Generating component statuses...');

        try {
            const monorepoRoot = this.findMonorepoRootSync(process.cwd());

            // Find components base dir
            const componentsDir = this.path.resolve(monorepoRoot, 'packages/components');
            const files = await this.readdir(componentsDir);

            // Gather component directories
            const componentDirs = (await Promise
                .all(files.map(async (file) => {
                    const isNotAnExcludedPackage = !this.excludes.includes(`@justeattakeaway/${file}`) ? file : null;
                    const componentPath = this.path.resolve(componentsDir, file);
                    const stats = await this.stat(componentPath);

                    return stats.isDirectory() && isNotAnExcludedPackage;
                })))
                .filter(Boolean)
                .filter((dirName) => !dirName.startsWith('.')); // Filter hidden directories (e.g., .turbo)

            // Read component statuses
            const statuses = await Promise.all(componentDirs.map(async (component) => {
                const componentPath = this.path.resolve(componentsDir, component, 'package.json');

                try {
                    const data = await this.readFile(componentPath, 'utf-8');
                    const json = JSON.parse(data);

                    if (!json.pieMetadata?.componentStatus) {
                        this.console.error('Error: componentStatus not found at path:', componentPath, 'Please add to pieMetadata.componentStatus in the component package.json');
                        return null;
                    }

                    return {
                        name: json.name,
                        status: json.pieMetadata.componentStatus,
                    };
                } catch (err) {
                    this.console.error('Error reading or parsing package.json for', component, err);
                    return null;
                }
            }));

            // Filter components statuses and remove null entries
            const filteredStatuses = statuses.reduce((acc, entry) => {
                if (entry !== null) {
                    const name = entry.name.replace('@justeattakeaway/', '');
                    acc[name] = entry.status;
                }
                return acc;
            }, {});

            this.console.info('Component statuses:', filteredStatuses);

            // write the statuses json file
            const outputPath = this.path.resolve(process.cwd(), 'component-statuses.json');
            await this.writeFile(outputPath, JSON.stringify(filteredStatuses, null, 2));

            this.console.info(`Successfully wrote component statuses to ${outputPath}`);
        } catch (err) {
            this.console.error('An error occurred:', err);
        }
    }
}

module.exports = ComponentStatusGenerator;
