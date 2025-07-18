#!/usr/bin/env node
// CLI tool to check for missing major bump in pie-webc after changeset creation
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');
const findMonorepoRoot = require('../utils/find-monorepo-root');
const parse = require('@changesets/parse').default;

const monorepoRoot = findMonorepoRoot();

function getWebcInternalDependencies () {
    const packageJsonPath = path.join(monorepoRoot, 'packages/components/pie-webc/package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const dependencies = packageJson.dependencies || {};
    return Object.keys(dependencies).filter((dep) => dep.startsWith('@justeattakeaway/pie-'));
}

function getUntrackedChangesetFiles () {
    const untrackedFiles = new Set();
    try {
        /*
        git ls-files --others --exclude-standard .changeset/*.md
        This command lists all files in the .changeset directory that are not tracked by Git.
        --others: Include untracked files
        --exclude-standard: Exclude standard Git ignore patterns
        .changeset/*.md: Only include .md files in the .changeset directory
        */
        const untracked = execSync(
            'git ls-files --others --exclude-standard .changeset/*.md',
            { encoding: 'utf-8', cwd: monorepoRoot },
        );
        untracked.split('\n').filter(Boolean).forEach((file) => {
            untrackedFiles.add(path.join(monorepoRoot, file));
        });
    } catch (err) {
        console.error('Could not list untracked changeset files:', err.message);
        process.exit(1);
    }
    return Array.from(untrackedFiles);
}

function parseChangesetFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    try {
        return parse(content); // returns { summary, releases: [{ name, type }] }
    } catch (e) {
        console.error(`Failed to parse changeset file ${filePath}: ${e.message}`);
        return { summary: '', releases: [] };
    }
}

function getDepVersionAndStatus (depName) {
    const depShortName = depName.replace('@justeattakeaway/', '');
    const depPkgPath = path.join(monorepoRoot, `packages/components/${depShortName}/package.json`);
    try {
        const depPkg = JSON.parse(fs.readFileSync(depPkgPath, 'utf-8'));
        const { version } = depPkg;
        const status = depPkg.pieMetadata && depPkg.pieMetadata.componentStatus;
        return { version, status };
    } catch (err) {
        return { version: null, status: null };
    }
}

function printWebcVersioningWarning({ title, bodyLines }) {
    // Print the title with a single butterfly
    console.error(chalk.red.bold(`🦋  ${title}`));
    // Print each body line with a butterfly
    bodyLines.forEach(line => {
        console.error(chalk.yellow(`🦋  ${line}`));
    });
}

function checkWebcMajorVersioning () {
    const webcDependencies = getWebcInternalDependencies();
    const untrackedChangesetFiles = getUntrackedChangesetFiles();
    let hasWebcMajorBump = false;
    const majorBumpedDependencies = [];

    for (const file of untrackedChangesetFiles) {
        const { releases } = parseChangesetFile(file);
        for (const { name, type } of releases) {
            if (name === '@justeattakeaway/pie-webc' && type === 'major') {
                hasWebcMajorBump = true;
            }
            if (webcDependencies.includes(name) && type === 'major') {
                // Check version and status
                const { version, status } = getDepVersionAndStatus(name);
                if (
                    version &&
                    version.startsWith('0.') &&
                    (status === 'alpha' || status === 'beta')
                ) {
                    // Ignore this dependency
                    continue;
                }
                majorBumpedDependencies.push(name);
            }
        }
    }

    if (majorBumpedDependencies.length > 0 && !hasWebcMajorBump) {
        printWebcVersioningWarning({
            title: 'PIE Webc Versioning Warning',
            bodyLines: [
                '',
                'Major changes detected in PIE Webc dependencies:',
                ...majorBumpedDependencies.map(dep => `  - ${dep}`),
                '',
                `You must also add a major changeset for ${chalk.bold('@justeattakeaway/pie-webc')} detailing the breaking changes, and a migration path for consumers`,
                '',
                'To fix:',
                `  1. Run ${chalk.cyan('yarn changeset')} and select ${chalk.bold('@justeattakeaway/pie-webc')} for a major bump.`,
                '  2. Commit the new changeset file.',
                ''
            ]
        });
        process.exit(1);
    } else if (majorBumpedDependencies.length > 0 && hasWebcMajorBump) {
        console.log(chalk.green('🦋  PIE Webc versioning check passed.'));
    }
}

checkWebcMajorVersioning();
