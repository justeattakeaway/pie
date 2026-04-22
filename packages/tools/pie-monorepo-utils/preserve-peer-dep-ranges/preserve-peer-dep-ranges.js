/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const findMonorepoRoot = require('../utils/find-monorepo-root');

const INTERNAL_SCOPE_PREFIXES = ['@justeattakeaway/', '@justeat/'];

/**
 * Returns true if a version string is a range (not an exact version).
 *
 * Exact versions match: 1.0.0, 0.26.21, 14.0.0
 * Ranges match: *, 1.x, ^1.0.0, ~2.3.0, >=1.0.0, >1, 1.x || 2.x, etc.
 */
function isRange (version) {
    if (version === '*') return true;
    if (/[~^><=|]/.test(version)) return true;
    if (/\.x(?:\.|$)/i.test(version)) return true;
    return false;
}

/**
 * Returns true if a dependency name belongs to an internal scope.
 */
function isInternalDep (depName) {
    return INTERNAL_SCOPE_PREFIXES.some((prefix) => depName.startsWith(prefix));
}

/**
 * Discovers all workspace package.json paths by reading the root package.json
 * workspaces config and globbing for package.json files.
 */
function getWorkspacePackageJsonPaths (root) {
    const rootPkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
    const workspaceGlobs = rootPkg.workspaces?.packages || rootPkg.workspaces || [];

    return workspaceGlobs
        .filter((pattern) => pattern !== './')
        .flatMap((pattern) => fs.globSync(path.join(root, pattern, 'package.json')));
}

/**
 * Scans all workspace package.json files and returns a snapshot object
 * mapping file paths to their internal peer dep ranges.
 */
function buildSnapshot (root) {
    const pkgPaths = getWorkspacePackageJsonPaths(root);
    const snapshot = {};

    pkgPaths.forEach((pkgPath) => {
        try {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            const peerDeps = pkg.peerDependencies;

            if (!peerDeps) return;

            const rangesToPreserve = {};

            Object.entries(peerDeps).forEach(([depName, depVersion]) => {
                if (isInternalDep(depName) && isRange(depVersion)) {
                    rangesToPreserve[depName] = depVersion;
                }
            });

            if (Object.keys(rangesToPreserve).length > 0) {
                snapshot[pkgPath] = {
                    name: pkg.name,
                    ranges: rangesToPreserve,
                };
            }
        } catch (err) {
            console.warn(`[preserve-peer-dep-ranges] Skipping ${pkgPath}: ${err.message}`);
        }
    });

    return snapshot;
}

/**
 * Writes a snapshot to the given file path.
 */
function saveSnapshot (snapshotPath, snapshot) {
    fs.writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2));
}

/**
 * Reads a snapshot from the given file path, restores clobbered ranges
 * in their package.json files, and deletes the snapshot file.
 *
 * Returns { found, restorations } where `found` indicates the snapshot existed,
 * and `restorations` is an array of { package, dep, from, to } for each restored range.
 */
function restoreFromSnapshot (snapshotPath) {
    if (!fs.existsSync(snapshotPath)) {
        return { found: false, restorations: [] };
    }

    const snapshot = JSON.parse(fs.readFileSync(snapshotPath, 'utf8'));
    const restorations = [];

    Object.entries(snapshot).forEach(([pkgPath, entry]) => {
        try {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

            if (!pkg.peerDependencies) return;

            let changed = false;

            Object.entries(entry.ranges).forEach(([dep, originalRange]) => {
                const currentValue = pkg.peerDependencies[dep];

                if (currentValue !== undefined && currentValue !== originalRange) {
                    pkg.peerDependencies[dep] = originalRange;
                    changed = true;
                    restorations.push({
                        package: entry.name,
                        dep,
                        from: currentValue,
                        to: originalRange,
                    });
                }
            });

            if (changed) {
                fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
            }
        } catch (err) {
            console.error(`[preserve-peer-dep-ranges] Failed to restore ${pkgPath}: ${err.message}`);
        }
    });

    fs.unlinkSync(snapshotPath);

    return { found: true, restorations };
}

/**
 * CLI handler: snapshot mode.
 * Scans workspaces and saves internal peer dep ranges to a temp file.
 */
function runSnapshot (snapshotPath) {
    const root = findMonorepoRoot();
    const snapshot = buildSnapshot(root);

    if (Object.keys(snapshot).length === 0) {
        console.log('[preserve-peer-dep-ranges] No internal peer dep ranges found to preserve.');
        return;
    }

    saveSnapshot(snapshotPath, snapshot);

    Object.values(snapshot).forEach((entry) => {
        Object.entries(entry.ranges).forEach(([dep, range]) => {
            console.log(`[preserve-peer-dep-ranges] Snapshotted ${entry.name} → ${dep}: "${range}"`);
        });
    });
}

/**
 * CLI handler: restore mode.
 * Reads the snapshot and overwrites clobbered ranges back to originals.
 */
function runRestore (snapshotPath) {
    const { found, restorations } = restoreFromSnapshot(snapshotPath);

    if (!found) {
        console.log('[preserve-peer-dep-ranges] No snapshot found — nothing to restore.');
        return;
    }

    if (restorations.length === 0) {
        console.log('[preserve-peer-dep-ranges] No peer dep ranges were clobbered — nothing to restore.');
        console.log('[preserve-peer-dep-ranges] Snapshot cleaned up.');
        return;
    }

    restorations.forEach((r) => {
        console.log(`[preserve-peer-dep-ranges] Restored ${r.package} → ${r.dep}: "${r.from}" → "${r.to}"`);
    });

    console.log('[preserve-peer-dep-ranges] Snapshot cleaned up.');
}

module.exports = {
    isRange,
    isInternalDep,
    buildSnapshot,
    saveSnapshot,
    restoreFromSnapshot,
    runSnapshot,
    runRestore,
};
