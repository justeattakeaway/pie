/* eslint-disable camelcase */

function decodeBase64 (base64) {
    return Buffer.from(base64, 'base64').toString('utf-8');
}

function getChangedDependencies (basePkg, headPkg) {
    const baseDeps = basePkg.dependencies ?? {};
    const headDeps = headPkg.dependencies ?? {};
    const allKeys = [...new Set([...Object.keys(baseDeps), ...Object.keys(headDeps)])];
    return allKeys
        .filter((key) => baseDeps[key] !== headDeps[key])
        .map((key) => `${key} ${baseDeps[key] ?? 'added'} → ${headDeps[key] ?? 'removed'}`);
}

function buildChangesetContent (packageNames, depChanges) {
    const frontmatter = packageNames.map((name) => `"${name}": patch`).join('\n');

    let body;
    if (depChanges.length === 0) {
        body = '[Changed] - Dependency updates';
    } else if (depChanges.length === 1) {
        body = `[Changed] - Dependency updates: ${depChanges[0]}`;
    } else {
        const bullets = depChanges.map((c) => `- ${c}`).join('\n');
        body = `[Changed] - Dependency updates:\n${bullets}`;
    }

    return `---\n${frontmatter}\n---\n\n${body}\n`;
}

async function getFileContent (github, owner, repo, path, ref) {
    try {
        const { data } = await github.rest.repos.getContent({
            owner, repo, path, ref,
        });
        return JSON.parse(decodeBase64(data.content));
    } catch (err) {
        if (err.status === 404) return null;
        throw err;
    }
}

async function getExistingFile (github, owner, repo, path, ref) {
    try {
        const { data } = await github.rest.repos.getContent({
            owner, repo, path, ref,
        });
        return { sha: data.sha, content: decodeBase64(data.content) };
    } catch (err) {
        if (err.status === 404) return null;
        throw err;
    }
}

module.exports = async ({ github, context }) => {
    const { owner, repo } = context.repo;
    const pr = context.payload.pull_request;
    const prNumber = pr.number;
    const headRef = pr.head.ref;
    const headSha = pr.head.sha;
    const baseSha = pr.base.sha;

    const files = await github.paginate(github.rest.pulls.listFiles, {
        owner, repo, pull_number: prNumber, per_page: 100,
    });

    const packageJsonFiles = files
        .map((f) => f.filename)
        .filter((f) => !f.includes('node_modules/'))
        .filter((f) => f === 'package.json' || f.endsWith('/package.json'))
        .sort();

    if (packageJsonFiles.length === 0) {
        console.info('No package.json files changed — skipping changeset creation.');
        return;
    }

    const inspectedPackages = await Promise.all(packageJsonFiles.map(async (filePath) => {
        const [basePkg, headPkg] = await Promise.all([
            getFileContent(github, owner, repo, filePath, baseSha),
            getFileContent(github, owner, repo, filePath, headSha),
        ]);

        if (!headPkg || !headPkg.name || headPkg.private === true) return null;

        const changedDeps = getChangedDependencies(basePkg ?? {}, headPkg);
        if (changedDeps.length === 0) return null;

        return { name: headPkg.name, changedDeps };
    }));

    const affected = inspectedPackages.filter(Boolean);
    const affectedPackages = affected.map((pkg) => pkg.name).sort();
    const allDepChanges = [...new Set(affected.flatMap((pkg) => pkg.changedDeps))].sort();
    if (affectedPackages.length === 0) {
        console.info('No public packages with changed dependencies — skipping changeset creation.');
        return;
    }

    const changesetPath = `.changeset/dependabot-pr-${prNumber}.md`;
    const changesetContent = buildChangesetContent(affectedPackages, allDepChanges);
    const existingFile = await getExistingFile(github, owner, repo, changesetPath, headRef);

    if (existingFile && existingFile.content === changesetContent) {
        console.info('Changeset already up to date — skipping commit to avoid re-triggering the workflow.');
        return;
    }

    await github.rest.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: changesetPath,
        message: `chore: add changeset for dependabot PR #${prNumber}`,
        content: Buffer.from(changesetContent).toString('base64'),
        branch: headRef,
        ...(existingFile ? { sha: existingFile.sha } : {}),
    });

    console.info(`✅ Changeset created at ${changesetPath} for: ${affectedPackages.join(', ')}`);
};
