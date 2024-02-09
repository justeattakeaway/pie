import { Octokit } from '@octokit/rest';
import fetch from 'node-fetch';

const createAndPublish = async ({ github, context }, execa) => {
    await execa.command('yarn changeset:version --snapshot snapshot-release', { stdio: 'inherit' });

    const releaseProcess = execa.command('yarn changeset:publish --no-git-tags --snapshot --tag snapshot-release');
    releaseProcess.stdout.pipe(process.stdout);

    const { stdout } = await releaseProcess;

    const newTags = Array
        .from(stdout.matchAll(/New tag:\s+([^\s\n]+)/g))
        .map(([_, tag]) => tag)
        .filter((tag) => !/^wc-.+$|pie-(monorepo|docs|storybook)/.test(tag));

    let body;

    if (newTags.length > 0) {
        const multiple = newTags.length > 1;

        body = `@${context.actor} Your snapshot${multiple ? 's have' : ' has'} been published to npm!

Test the snapshot${multiple ? 's' : ''} by updating your \`package.json\` with the newly-published version${multiple ? 's' : ''}:\n`;

        if (multiple) {
            body += `> [!NOTE]
> If you have more than one of these packages installed, we suggest using the new snapshots for all of them to help avoid version conflicts.

${newTags.map(tag => `\`\`\`sh
yarn up ${tag} --mode=update-lockfile
\`\`\``).join('\n')}
Then finally:
\`\`\`sh
yarn install
\`\`\``;
        } else {
            body += `\`\`\`sh
yarn up ${newTags[0]}
\`\`\``;
        }

    // After posting the comment about the snapshot release, trigger the PIE-Aperture CI
    const octokit = new Octokit({ auth: `Bearer ${process.env.GITHUB_TOKEN}` });

    try {
        await octokit.rest.repos.createDispatchEvent({
            request:{
                fetch: fetch
            },
            owner: 'justeattakeaway',
            repo: 'PIE-Aperture',
            event_type: 'pie-snapshot-trigger',
            client_payload: {
                snapshotVersions: newTags, // Pass the newTags array as part of the payload
            },
        });

        console.log('Successfully dispatched PIE-Aperture CI trigger event.');
    } catch (error) {
        console.error('Failed to dispatch PIE-Aperture CI trigger event:', error);
    }
    } else {
        body = `No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.`;
    }

    await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body,
    });
};

export {
    createAndPublish
}