import {
    describe, it, expect, afterEach,
} from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';

import {
    isRange,
    isInternalDep,
    buildSnapshot,
    saveSnapshot,
    restoreFromSnapshot,
} from '../../preserve-peer-dep-ranges/preserve-peer-dep-ranges';

/**
 * Creates a temporary workspace directory structure for testing.
 * Returns { root, cleanup } where root is the temp dir path.
 */
function createTempWorkspace (packages = []) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'peer-dep-test-'));

    // Root package.json with workspaces config
    fs.writeFileSync(
        path.join(root, 'package.json'),
        JSON.stringify({
            name: 'test-monorepo',
            workspaces: { packages: ['packages/*'] },
        }, null, 2),
    );

    // Create yarn.lock so findMonorepoRoot can locate the root
    fs.writeFileSync(path.join(root, 'yarn.lock'), '');

    // Create each package
    fs.mkdirSync(path.join(root, 'packages'), { recursive: true });
    packages.forEach((pkg) => {
        const pkgDir = path.join(root, 'packages', pkg.dirName);
        fs.mkdirSync(pkgDir, { recursive: true });
        fs.writeFileSync(
            path.join(pkgDir, 'package.json'),
            JSON.stringify(pkg.packageJson, null, 2),
        );
    });

    const cleanup = () => fs.rmSync(root, { recursive: true, force: true });

    return { root, cleanup };
}

describe('preserve-peer-dep-ranges', () => {
    describe('isRange', () => {
        it('should return true for wildcard *', () => {
            expect(isRange('*')).toBe(true);
        });

        it('should return true for .x ranges', () => {
            expect(isRange('1.x')).toBe(true);
            expect(isRange('2.x')).toBe(true);
            expect(isRange('16.x')).toBe(true);
            expect(isRange('1.0.x')).toBe(true);
        });

        it('should return true for caret ranges', () => {
            expect(isRange('^1.0.0')).toBe(true);
            expect(isRange('^2.3.4')).toBe(true);
        });

        it('should return true for tilde ranges', () => {
            expect(isRange('~1.0.0')).toBe(true);
            expect(isRange('~2.3.4')).toBe(true);
        });

        it('should return true for comparator ranges', () => {
            expect(isRange('>=1.0.0')).toBe(true);
            expect(isRange('>1')).toBe(true);
            expect(isRange('<2.0.0')).toBe(true);
            expect(isRange('<=3.0.0')).toBe(true);
        });

        it('should return true for union ranges', () => {
            expect(isRange('^1.0.0 || ^2.0.0')).toBe(true);
        });

        it('should return false for exact versions', () => {
            expect(isRange('1.0.0')).toBe(false);
            expect(isRange('0.26.21')).toBe(false);
            expect(isRange('14.0.0')).toBe(false);
            expect(isRange('1.1.0')).toBe(false);
        });
    });

    describe('isInternalDep', () => {
        it('should return true for @justeattakeaway/ scoped packages', () => {
            expect(isInternalDep('@justeattakeaway/pie-css')).toBe(true);
            expect(isInternalDep('@justeattakeaway/pie-webc-core')).toBe(true);
        });

        it('should return true for @justeat/ scoped packages', () => {
            expect(isInternalDep('@justeat/pie-design-tokens')).toBe(true);
        });

        it('should return false for external packages', () => {
            expect(isInternalDep('stylelint')).toBe(false);
            expect(isInternalDep('@playwright/test')).toBe(false);
            expect(isInternalDep('lit')).toBe(false);
        });
    });

    describe('buildSnapshot', () => {
        let workspace;

        afterEach(() => {
            if (workspace) workspace.cleanup();
        });

        it('should detect internal peer deps with range formats', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        peerDependencies: {
                            '@justeattakeaway/pie-css': '1.x',
                        },
                    },
                },
            ]);

            const snapshot = buildSnapshot(workspace.root);
            const entries = Object.values(snapshot);

            expect(entries).toHaveLength(1);
            expect(entries[0].name).toBe('@justeattakeaway/pkg-a');
            expect(entries[0].ranges).toEqual({
                '@justeattakeaway/pie-css': '1.x',
            });
        });

        it('should ignore internal peer deps with exact versions', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        peerDependencies: {
                            '@justeattakeaway/pie-css': '1.1.0',
                        },
                    },
                },
            ]);

            const snapshot = buildSnapshot(workspace.root);
            expect(Object.keys(snapshot)).toHaveLength(0);
        });

        it('should ignore external peer deps even if they use ranges', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        peerDependencies: {
                            stylelint: '16.x',
                            '@playwright/test': '^1.0.0',
                        },
                    },
                },
            ]);

            const snapshot = buildSnapshot(workspace.root);
            expect(Object.keys(snapshot)).toHaveLength(0);
        });

        it('should handle packages with no peerDependencies', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        dependencies: { lit: '3.2.0' },
                    },
                },
            ]);

            const snapshot = buildSnapshot(workspace.root);
            expect(Object.keys(snapshot)).toHaveLength(0);
        });

        it('should snapshot multiple packages', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        peerDependencies: {
                            '@justeattakeaway/pie-css': '1.x',
                        },
                    },
                },
                {
                    dirName: 'pkg-b',
                    packageJson: {
                        name: '@justeattakeaway/pkg-b',
                        peerDependencies: {
                            '@justeat/pie-design-tokens': '*',
                            '@justeattakeaway/pie-css': '^1.0.0',
                        },
                    },
                },
            ]);

            const snapshot = buildSnapshot(workspace.root);
            const entries = Object.values(snapshot);

            expect(entries).toHaveLength(2);

            const pkgB = entries.find((e) => e.name === '@justeattakeaway/pkg-b');
            expect(pkgB.ranges).toEqual({
                '@justeat/pie-design-tokens': '*',
                '@justeattakeaway/pie-css': '^1.0.0',
            });
        });
    });

    describe('saveSnapshot + restoreFromSnapshot', () => {
        let workspace;
        let snapshotPath;

        afterEach(() => {
            if (workspace) workspace.cleanup();
        });

        it('should restore clobbered ranges to their original values', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        peerDependencies: {
                            '@justeattakeaway/pie-css': '1.x',
                        },
                    },
                },
            ]);

            snapshotPath = path.join(workspace.root, '.snapshot.json');

            // 1. Build and save snapshot
            const snapshot = buildSnapshot(workspace.root);
            saveSnapshot(snapshotPath, snapshot);

            // 2. Simulate changeset clobbering the range
            const [pkgPath] = Object.keys(snapshot);
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            pkg.peerDependencies['@justeattakeaway/pie-css'] = '1.1.0';
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

            // 3. Restore
            const { found, restorations } = restoreFromSnapshot(snapshotPath);

            expect(found).toBe(true);
            expect(restorations).toHaveLength(1);
            expect(restorations[0]).toEqual({
                package: '@justeattakeaway/pkg-a',
                dep: '@justeattakeaway/pie-css',
                from: '1.1.0',
                to: '1.x',
            });

            // 4. Verify the file on disk was updated
            const restored = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            expect(restored.peerDependencies['@justeattakeaway/pie-css']).toBe('1.x');

            // 5. Verify snapshot file was deleted
            expect(fs.existsSync(snapshotPath)).toBe(false);
        });

        it('should return found=true with empty restorations when nothing was clobbered', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        peerDependencies: {
                            '@justeattakeaway/pie-css': '1.x',
                        },
                    },
                },
            ]);

            snapshotPath = path.join(workspace.root, '.snapshot.json');
            const snapshot = buildSnapshot(workspace.root);
            saveSnapshot(snapshotPath, snapshot);

            // Do NOT clobber anything — restore immediately
            const { found, restorations } = restoreFromSnapshot(snapshotPath);

            expect(found).toBe(true);
            expect(restorations).toHaveLength(0);
            expect(fs.existsSync(snapshotPath)).toBe(false);
        });

        it('should return found=false when no snapshot file exists', () => {
            const { found, restorations } = restoreFromSnapshot('/tmp/nonexistent-snapshot.json');

            expect(found).toBe(false);
            expect(restorations).toHaveLength(0);
        });

        it('should handle multiple packages with mixed clobbered and unclobbered ranges', () => {
            workspace = createTempWorkspace([
                {
                    dirName: 'pkg-a',
                    packageJson: {
                        name: '@justeattakeaway/pkg-a',
                        peerDependencies: {
                            '@justeattakeaway/pie-css': '1.x',
                        },
                    },
                },
                {
                    dirName: 'pkg-b',
                    packageJson: {
                        name: '@justeattakeaway/pkg-b',
                        peerDependencies: {
                            '@justeat/pie-design-tokens': '*',
                        },
                    },
                },
            ]);

            snapshotPath = path.join(workspace.root, '.snapshot.json');
            const snapshot = buildSnapshot(workspace.root);
            saveSnapshot(snapshotPath, snapshot);

            // Only clobber pkg-a
            const pkgAPath = Object.keys(snapshot).find((p) => p.includes('pkg-a'));
            const pkgA = JSON.parse(fs.readFileSync(pkgAPath, 'utf8'));
            pkgA.peerDependencies['@justeattakeaway/pie-css'] = '1.2.0';
            fs.writeFileSync(pkgAPath, JSON.stringify(pkgA, null, 2));

            const { found, restorations } = restoreFromSnapshot(snapshotPath);

            expect(found).toBe(true);
            expect(restorations).toHaveLength(1);
            expect(restorations[0].package).toBe('@justeattakeaway/pkg-a');
            expect(restorations[0].from).toBe('1.2.0');
            expect(restorations[0].to).toBe('1.x');
        });
    });
});
