const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const getWorkspaceDirs = () => {
    const output = execSync('yarn workspaces list --json', { encoding: 'utf8' });
    const lines = output.split('\n').filter((line) => line.startsWith('{'));
    const workspaces = lines.map((line) => JSON.parse(line));
    return workspaces
        .filter((ws) => ws.location.startsWith('packages'))
        .map((ws) => ws.location);
};

const loadBundlewatchConfigs = () => {
    const dirs = getWorkspaceDirs();
    const configs = [];

    dirs.forEach((dir) => {
        const packageJsonPath = path.join(dir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            if (packageJson.bundlewatch) {
                configs.push(...packageJson.bundlewatch.files);
            }
        }
    });

    return configs;
};

module.exports = {
    files: loadBundlewatchConfigs(),
};
