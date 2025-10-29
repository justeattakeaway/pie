import path from 'path';
import fs from 'fs';
import { globSync } from 'glob';

const componentsPath = path.resolve(path.join(process.cwd(), '../../components/'));

function listFiles (startPath) {
    const files = globSync('**/package.json', {
        ignore: 'node_modules/**',
        cwd: startPath,
        absolute: true,
    });
    return files;
}

function extractComponentData (startPath = componentsPath) {
    const packageFiles = listFiles(startPath);
    const components = {};

    packageFiles.forEach((filePath) => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const parsedPackage = JSON.parse(fileContent);

        if (!parsedPackage.pieMetadata) return;
        const { pieMetadata } = parsedPackage;

        const hasStatus = pieMetadata?.componentStatus === 'beta' || pieMetadata?.componentStatus === 'stable';
        const isReplacement = pieMetadata?.replaces?.snacks?.length > 0;

        if (hasStatus && isReplacement) {
            pieMetadata?.replaces?.snacks.forEach((snacksComponentName) => {
                components[snacksComponentName] = {
                    piePackage: parsedPackage.name,
                    status: pieMetadata.componentStatus,
                };
            });
        }
    });

    if (Object.keys(components).length === 0) {
        throw new Error('collectComponentData() failed. No components could be found to be listed.');
    }

    // Create a new object based on components, but sorted by the key
    const sortedComponents = Object.keys(components)
        .sort()
        .reduce((acc, key) => {
            acc[key] = components[key];
            return acc;
        }, {});

    const destinationFilePath = path.join(process.cwd(), 'snacks-components-data.json');
    fs.writeFileSync(destinationFilePath, JSON.stringify(sortedComponents, null, 2), 'utf8');

    return sortedComponents;
}

extractComponentData();
