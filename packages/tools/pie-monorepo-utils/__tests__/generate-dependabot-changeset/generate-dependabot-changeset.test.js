import {
    describe, it, expect, vi,
} from 'vitest';
import generateDependabotChangeset from '../../generate-dependabot-changeset/generate-dependabot-changeset.js';

function encodeContent (obj) {
    return Buffer.from(JSON.stringify(obj)).toString('base64');
}

function makeContext ({
    prNumber = 42,
    headRef = 'dependabot/npm_and_yarn/foo-1.2.3',
    headSha = 'head-sha-abc',
    baseSha = 'base-sha-xyz',
} = {}) {
    return {
        repo: { owner: 'justeattakeaway', repo: 'pie' },
        payload: {
            pull_request: {
                number: prNumber,
                head: { ref: headRef, sha: headSha },
                base: { sha: baseSha },
            },
        },
    };
}

/**
 * packageContents: Record<`${ref}:${path}`, object | string | 'NOT_FOUND'>
 * - object: encoded as JSON (a package.json fixture)
 * - string: encoded as raw file content (e.g. an existing changeset file)
 * - 'NOT_FOUND': rejects with status 404
 */
function makeGithub ({ files = [], packageContents = {} } = {}) {
    return {
        // `github.paginate(endpoint, params)` resolves to the fully-paginated, flattened array.
        paginate: vi.fn().mockResolvedValue(files),
        rest: {
            pulls: {
                listFiles: vi.fn().mockResolvedValue({ data: files }),
            },
            repos: {
                getContent: vi.fn().mockImplementation(({ path, ref }) => {
                    const key = `${ref}:${path}`;
                    const value = packageContents[key];
                    if (value === undefined) {
                        throw new Error(`makeGithub: no fixture registered for key "${key}" — check your packageContents map`);
                    }
                    if (value === 'NOT_FOUND') {
                        const err = new Error('Not Found');
                        err.status = 404;
                        return Promise.reject(err);
                    }
                    const rawContent = typeof value === 'string'
                        ? Buffer.from(value).toString('base64')
                        : encodeContent(value);
                    return Promise.resolve({ data: { content: rawContent, sha: `sha-of-${path}` } });
                }),
                createOrUpdateFileContents: vi.fn().mockResolvedValue({}),
            },
        },
    };
}

describe('generateDependabotChangeset', () => {
    const context = makeContext();

    describe('early exit — no changeset created', () => {
        it('does nothing when no package.json files changed', async () => {
            const github = makeGithub({
                files: [{ filename: '.github/workflows/ci.yml' }],
            });
            await generateDependabotChangeset({ github, context });
            expect(github.rest.repos.createOrUpdateFileContents).not.toHaveBeenCalled();
        });

        it('does nothing when only devDependencies changed', async () => {
            const base = { name: '@justeattakeaway/pie-foo', devDependencies: { vitest: '1.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', devDependencies: { vitest: '2.0.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });
            expect(github.rest.repos.createOrUpdateFileContents).not.toHaveBeenCalled();
        });

        it('does nothing when the only changed package is private', async () => {
            const base = { name: '@justeattakeaway/pie-foo', private: true, dependencies: { lodash: '4.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', private: true, dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });
            expect(github.rest.repos.createOrUpdateFileContents).not.toHaveBeenCalled();
        });

        it('does nothing when package.json has no name field', async () => {
            const base = { dependencies: { lodash: '4.0.0' } };
            const head = { dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });
            expect(github.rest.repos.createOrUpdateFileContents).not.toHaveBeenCalled();
        });

        it('skips node_modules package.json files', async () => {
            const github = makeGithub({
                files: [{ filename: 'node_modules/lodash/package.json' }],
            });
            await generateDependabotChangeset({ github, context });
            expect(github.rest.repos.getContent).not.toHaveBeenCalled();
            expect(github.rest.repos.createOrUpdateFileContents).not.toHaveBeenCalled();
        });
    });

    describe('changeset creation', () => {
        it('creates a changeset for a single public package with changed dependencies', async () => {
            const base = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });

            expect(github.rest.repos.createOrUpdateFileContents).toHaveBeenCalledOnce();
            const call = github.rest.repos.createOrUpdateFileContents.mock.calls[0][0];
            expect(call.path).toBe('.changeset/dependabot-pr-42.md');
            expect(call.branch).toBe('dependabot/npm_and_yarn/foo-1.2.3');
            expect(call.sha).toBeUndefined();

            const decoded = Buffer.from(call.content, 'base64').toString('utf-8');
            expect(decoded).toBe('---\n"@justeattakeaway/pie-foo": patch\n---\n\n[Changed] - Dependency updates: lodash 4.0.0 → 4.1.0\n');
        });

        it('renders multiple dependency changes as a bulleted list', async () => {
            const base = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.0.0', react: '18.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.1.0', react: '18.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });

            const call = github.rest.repos.createOrUpdateFileContents.mock.calls[0][0];
            const decoded = Buffer.from(call.content, 'base64').toString('utf-8');
            expect(decoded).toBe('---\n"@justeattakeaway/pie-foo": patch\n---\n\n[Changed] - Dependency updates:\n- lodash 4.0.0 → 4.1.0\n- react 18.0.0 → 18.1.0\n');
        });

        it('creates a changeset covering multiple public packages', async () => {
            const baseFoo = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.0.0' } };
            const headFoo = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.1.0' } };
            const baseBar = { name: '@justeattakeaway/pie-bar', dependencies: { lodash: '4.0.0' } };
            const headBar = { name: '@justeattakeaway/pie-bar', dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [
                    { filename: 'packages/components/pie-foo/package.json' },
                    { filename: 'packages/components/pie-bar/package.json' },
                ],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': baseFoo,
                    'head-sha-abc:packages/components/pie-foo/package.json': headFoo,
                    'base-sha-xyz:packages/components/pie-bar/package.json': baseBar,
                    'head-sha-abc:packages/components/pie-bar/package.json': headBar,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });

            expect(github.rest.repos.createOrUpdateFileContents).toHaveBeenCalledOnce();
            const call = github.rest.repos.createOrUpdateFileContents.mock.calls[0][0];
            const decoded = Buffer.from(call.content, 'base64').toString('utf-8');
            expect(decoded).toContain('"@justeattakeaway/pie-foo": patch');
            expect(decoded).toContain('"@justeattakeaway/pie-bar": patch');
            expect(decoded).toContain('[Changed] - Dependency updates');
        });

        it('updates an existing changeset file by passing its SHA', async () => {
            const base = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
            });
            github.rest.repos.getContent.mockImplementation(({ path, ref }) => {
                if (path === '.changeset/dependabot-pr-42.md') {
                    return Promise.resolve({ data: { content: Buffer.from('old content').toString('base64'), sha: 'existing-sha-999' } });
                }
                const key = `${ref}:${path}`;
                const pkgs = {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                };
                if (pkgs[key]) return Promise.resolve({ data: { content: encodeContent(pkgs[key]), sha: 'file-sha' } });
                const err = new Error('Not Found'); err.status = 404; return Promise.reject(err);
            });

            await generateDependabotChangeset({ github, context });

            const call = github.rest.repos.createOrUpdateFileContents.mock.calls[0][0];
            expect(call.sha).toBe('existing-sha-999');
        });

        it('treats a package with no base package.json as having no base dependencies', async () => {
            const head = { name: '@justeattakeaway/pie-new', dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-new/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-new/package.json': 'NOT_FOUND',
                    'head-sha-abc:packages/components/pie-new/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });
            expect(github.rest.repos.createOrUpdateFileContents).toHaveBeenCalledOnce();
        });

        it('only includes public packages with changed dependencies when the PR mixes package types', async () => {
            const basePub = { name: '@justeattakeaway/pie-pub', dependencies: { lodash: '4.0.0' } };
            const headPub = { name: '@justeattakeaway/pie-pub', dependencies: { lodash: '4.1.0' } };
            const basePriv = { name: '@justeattakeaway/pie-priv', private: true, dependencies: { lodash: '4.0.0' } };
            const headPriv = { name: '@justeattakeaway/pie-priv', private: true, dependencies: { lodash: '4.1.0' } };
            const baseDev = { name: '@justeattakeaway/pie-dev', devDependencies: { vitest: '1.0.0' } };
            const headDev = { name: '@justeattakeaway/pie-dev', devDependencies: { vitest: '2.0.0' } };
            const github = makeGithub({
                files: [
                    { filename: 'packages/pub/package.json' },
                    { filename: 'packages/priv/package.json' },
                    { filename: 'packages/dev/package.json' },
                ],
                packageContents: {
                    'base-sha-xyz:packages/pub/package.json': basePub,
                    'head-sha-abc:packages/pub/package.json': headPub,
                    'base-sha-xyz:packages/priv/package.json': basePriv,
                    'head-sha-abc:packages/priv/package.json': headPriv,
                    'base-sha-xyz:packages/dev/package.json': baseDev,
                    'head-sha-abc:packages/dev/package.json': headDev,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });

            expect(github.rest.repos.createOrUpdateFileContents).toHaveBeenCalledOnce();
            const call = github.rest.repos.createOrUpdateFileContents.mock.calls[0][0];
            const decoded = Buffer.from(call.content, 'base64').toString('utf-8');
            expect(decoded).toContain('"@justeattakeaway/pie-pub": patch');
            expect(decoded).not.toContain('pie-priv');
            expect(decoded).not.toContain('pie-dev');
        });

        it('uses pagination to fetch the full list of changed files', async () => {
            const base = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'NOT_FOUND',
                },
            });
            await generateDependabotChangeset({ github, context });

            expect(github.paginate).toHaveBeenCalledOnce();
            const [endpoint, params] = github.paginate.mock.calls[0];
            expect(endpoint).toBe(github.rest.pulls.listFiles);
            expect(params).toMatchObject({ pull_number: 42, per_page: 100 });
        });

        it('does not commit when the existing changeset already matches (prevents re-trigger loop)', async () => {
            const base = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.1.0' } };
            const expectedContent = '---\n"@justeattakeaway/pie-foo": patch\n---\n\n[Changed] - Dependency updates: lodash 4.0.0 → 4.1.0\n';
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': expectedContent,
                },
            });
            await generateDependabotChangeset({ github, context });
            expect(github.rest.repos.createOrUpdateFileContents).not.toHaveBeenCalled();
        });

        it('commits an update when the existing changeset differs', async () => {
            const base = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.0.0' } };
            const head = { name: '@justeattakeaway/pie-foo', dependencies: { lodash: '4.1.0' } };
            const github = makeGithub({
                files: [{ filename: 'packages/components/pie-foo/package.json' }],
                packageContents: {
                    'base-sha-xyz:packages/components/pie-foo/package.json': base,
                    'head-sha-abc:packages/components/pie-foo/package.json': head,
                    'dependabot/npm_and_yarn/foo-1.2.3:.changeset/dependabot-pr-42.md': 'stale content from an earlier run',
                },
            });
            await generateDependabotChangeset({ github, context });

            expect(github.rest.repos.createOrUpdateFileContents).toHaveBeenCalledOnce();
            const call = github.rest.repos.createOrUpdateFileContents.mock.calls[0][0];
            expect(call.sha).toBe('sha-of-.changeset/dependabot-pr-42.md');
        });
    });
});
