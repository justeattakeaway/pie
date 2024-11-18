const fs = require('fs');
const { execSync } = require('child_process');

module.exports = async ({ github, context }) => {
    const { repo : { owner, repo }} = context;

    const allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
        owner,
        repo,
        run_id: context.payload.workflow_run.id,
    });
    const matchArtifact = allArtifacts.data.artifacts.find((artifact) => {
        return artifact.name == "tmp-labels.json"
    });

    // There are no labels to add
    if (!matchArtifact) return;

    // Download artifact
    const download = await github.rest.actions.downloadArtifact({
        artifact_id: matchArtifact.id,
        archive_format: 'zip',
        owner,
        repo,
    });

    // Write and unzip artifact
    const artifactFilePath = `${process.env.GITHUB_WORKSPACE}/tmp-labels.zip`;
    fs.writeFileSync(artifactFilePath, Buffer.from(download.data));
    execSync(`unzip -o ${artifactFilePath}`);

    // Read and parse artifact
    const artifactStr = fs.readFileSync(`${process.env.GITHUB_WORKSPACE}/tmp-labels.json`, 'utf-8');
    const { prNumber, newLabels } = JSON.parse(artifactStr);

    // Fetch existing labels
    const repoLabelsResponse = await github.rest.issues.listLabelsForRepo({ owner, repo });
    const repoLabels = repoLabelsResponse.data.map(({name}) => name);

    // Verify which labels are new and create them
    for (const newLabel of newLabels) {
        const labelExists = repoLabels.includes(newLabel)
        const labelIsValid = newLabel.startsWith('pie-') && newLabel.length <= 32

        if (!labelExists && labelIsValid) {
            console.info(`Creating label`);
            await github.rest.issues.createLabel({
                name: newLabel,
                color: 'ededed',
                owner,
                repo,
            });

            console.info(`Assigning label to the PR`);
            await github.rest.issues.addLabels({
                issue_number: prNumber,
                labels: [newLabel],
                owner,
                repo,
            });
        }
    }
};
