import fs from 'fs';
import packageJson from './package.json' assert { type: 'json' };

const excludes = ['@justeattakeaway/pie-css', '@justeattakeaway/pie-icons-webc'];

const pieComponentDependencies = Object.keys(packageJson.dependencies)
    .filter((dep) => dep.startsWith('@justeattakeaway/pie-') && !excludes.includes(dep));

const statuses = pieComponentDependencies.map(async (component) => {
    const json = await import(`./node_modules/${component}/package.json`, {
        assert: { type: 'json' },
    });

    if (json.default.pieMetadata?.componentStatus) {
        return {
            name: json.default.name,
            status: json.default.pieMetadata.componentStatus,
        };
    }

    console.error('Error: componentStatus not found in', json.default.name, 'Please add to pieMetadata.componentStatus in the component package.json');
    return null;
});

Promise.all(statuses).then((resolvedStatuses) => {
    const filteredStatuses = resolvedStatuses.reduce((acc, entry) => {
        if (entry !== null) {
            const name = entry.name.replace('@justeattakeaway/', '');
            acc[name] = entry.status;
        }

        return acc;
    }, {});

    fs.writeFile('./component-statuses.json', JSON.stringify(filteredStatuses, null, 2), (err) => {
        if (err) {
            console.error('Error writing component-statuses.json', err);
        } else {
            console.info('Successfully wrote component statuses to ./component-statuses.json');
        }
    });
});
