#!/usr/bin/env node
// CLI tool to check for missing major bump in pie-webc after changeset creation
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const parseChangesetFile = require('@changesets/parse').default;
const { execSync } = require('child_process');
const findMonorepoRoot = require('../utils/find-monorepo-root');
const getPackageVersion = require('../utils/get-package-version');
const getChangesetFilesInCurrentBranch = require('../utils/get-changeset-files-in-current-branch');

const monorepoRoot = findMonorepoRoot();

function getWebcInternalDependencies () {
    const packageJsonPath = path.join(monorepoRoot, 'packages/components/pie-webc/package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const dependencies = packageJson.dependencies || {};
    return Object.keys(dependencies).filter((dep) => dep.startsWith('@justeattakeaway/pie-'));
}

function getWorkspacePackages (monorepoRoot) {
    try {
        const output = execSync('yarn workspaces list --json', { encoding: 'utf-8', cwd: monorepoRoot });
        return output.split('\n').filter(Boolean).map((line) => JSON.parse(line));
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(chalk.red(err.message));
        process.exit(1);
    }
    return []; // fallback for linting
}

function getDepVersionAndStatus (depName, workspacePackages) {
    const dep = workspacePackages.find((pkg) => pkg.name === depName);
    if (!dep) {
        // eslint-disable-next-line no-console
        console.error(chalk.red(`Could not find location for dependency: ${depName}`));
        process.exit(1);
    }
    const depPkgPath = path.join(monorepoRoot, dep.location, 'package.json');
    try {
        const version = getPackageVersion(path.join(monorepoRoot, dep.location));
        const depPkg = JSON.parse(fs.readFileSync(depPkgPath, 'utf-8'));
        const status = depPkg.pieMetadata && depPkg.pieMetadata.componentStatus;
        if (!status) {
            // eslint-disable-next-line no-console
            console.error(chalk.red(`No componentStatus found in ${depPkgPath}. Unable to determine if pie-webc needs a major bump.`));
            process.exit(1);
        }
        return { version, status };
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Could not read or parse ${depPkgPath}:`, err.message);
        process.exit(1);
    }
    return { version: null, status: null }; // fallback for linting
}

function printWebcVersioningWarning({ title, bodyLines }) {
    if (process.env.GITHUB_ACTIONS) {
        // Output pretty markdown for GitHub Actions (Danger)
        const deps = bodyLines
            .filter(line => line.trim().startsWith('-'))
            .map(line => line.trim())
            .join('\n');
        const hasDeps = deps.length > 0;
        const markdown = [
            `## :warning: ${title}`,
            '',
            hasDeps ? '**Major changes detected in PIE Webc dependencies:**' : '',
            hasDeps ? deps : '',
            '',
            'You must also add a **major changeset** for `@justeattakeaway/pie-webc` detailing the breaking changes, and a migration path for consumers.',
            '',
            '**To fix:**',
            '1. Run <code>yarn changeset</code> and select <code>@justeattakeaway/pie-webc</code> for a major bump.',
            '2. Commit the new changeset file.',
            ''
        ].filter(Boolean).join('\n');
        // eslint-disable-next-line no-console
        console.error(markdown);
    } else {
        // Local/terminal output (keep emoji/chalk)
        // eslint-disable-next-line no-console
        console.error(chalk.red.bold(`🦋  ${title}`));
        bodyLines.forEach((line) => {
            // eslint-disable-next-line no-console
            console.error(chalk.yellow(`🦋  ${line}`));
        });
    }
}

function checkWebcMajorVersioning () {
    const webcDependencies = getWebcInternalDependencies();
    const branchChangesetFiles = getChangesetFilesInCurrentBranch(monorepoRoot);
    const workspacePackages = getWorkspacePackages(monorepoRoot);
    let hasWebcMajorBump = false;
    const webcDependenciesWithMajorBump = [];
    const pieWebcMajorBumpChangesetFiles = [];

    branchChangesetFiles.forEach((file) => {
        try {
            const content = fs.readFileSync(file, 'utf-8');
            const { releases } = parseChangesetFile(content);
            releases.forEach(({ name, type }) => {
                if (name === '@justeattakeaway/pie-webc' && type === 'major') {
                    hasWebcMajorBump = true;
                    pieWebcMajorBumpChangesetFiles.push(file);
                }

                if (webcDependencies.includes(name) && type === 'major') {
                    const { version, status } = getDepVersionAndStatus(name, workspacePackages);

                    /* Ignore component status promotion.
                       0.x.x -> 1.x.x is a major bump, but we don't want to require a major bump for pie-webc if the dependency is only being promoted from alpha to beta.
                       0.x.x with 'beta' status will only be possible before the 'Version Packages' PR is merged.
                    */
                    if (version && version.startsWith('0.') && (status === 'alpha' || status === 'beta')) {
                        return;
                    }
                    webcDependenciesWithMajorBump.push(name);
                }
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(chalk.red(`Error parsing changeset file ${file}:`, e.message));
            process.exit(1);
        }
    });

    if (webcDependenciesWithMajorBump.length > 0 && !hasWebcMajorBump) {
        printWebcVersioningWarning({
            title: 'PIE Webc Versioning Warning',
            bodyLines: [
                '',
                'Major changes detected in PIE Webc dependencies:',
                ...webcDependenciesWithMajorBump.map((dep) => `  - ${dep}`),
                '',
                `You must also add a major changeset for ${chalk.bold('@justeattakeaway/pie-webc')} detailing the breaking changes, and a migration path for consumers`,
                '',
                'To fix:',
                `  1. Run ${chalk.cyan('yarn changeset')} and select ${chalk.bold('@justeattakeaway/pie-webc')} for a major bump.`,
                '  2. Commit the new changeset file.',
                ''
            ],
        });
        process.exit(1);
    }

    if (webcDependenciesWithMajorBump.length > 0 && hasWebcMajorBump) {
        // eslint-disable-next-line no-console
        console.log(chalk.green('🦋  PIE Webc versioning check passed.'));
        if (pieWebcMajorBumpChangesetFiles.length > 0) {
            // eslint-disable-next-line no-console
            console.log(chalk.green('🦋  Major bump for @justeattakeaway/pie-webc found in:'));
            pieWebcMajorBumpChangesetFiles.forEach((filePath) => {
                // eslint-disable-next-line no-console
                console.log(chalk.green(`    - ${filePath}`));
            });
        }
    }
}

checkWebcMajorVersioning();
