// .github/scripts/post-component-size-report.js

const fs = require('fs');
const path = require('path');

module.exports = async ({ github, context }) => {
    const watermark = '<!-- COMPONENT_SIZE_REPORT -->';
    let summary = "| Component | Expected Threshold | Actual Size (KB) |\n| --- | --- | --- |\n";

    // Find all compsizer-failure-report.json files
    const reportFiles = getAllReportFiles('packages/components');

    // Log the files found to verify
    console.log("Found report files:", reportFiles);

    // If no files are found, log and exit to prevent an empty comment
    if (reportFiles.length === 0) {
        console.log("No compsizer-failure-report.json files found. Exiting without comment.");
        return;
    }

    // Build the markdown table from JSON data in each file
    for (const file of reportFiles) {
        try {
            const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

            data.forEach(({ component, expectedThreshold, actualSizeKB }) => {
                summary += `| ${component} | ${expectedThreshold} | ${actualSizeKB} |\n`;
            });
        } catch (error) {
            console.error(`Failed to parse JSON in file ${file}:`, error);
        }
    }

    // Check if summary was populated
    console.log("Generated summary:", summary);

    const commentBody = `${watermark}\n### Component Size Report\n${summary}`;
    const { owner, repo } = context.repo;
    const issueNumber = context.payload.pull_request.number;

    // Fetch existing comments and find the one with the watermark
    const { data: comments } = await github.rest.issues.listComments({
        owner,
        repo,
        issue_number: issueNumber,
    });

    const existingComment = comments.find(comment => comment.body.startsWith(watermark));

    if (existingComment) {
        // Update the existing comment
        await github.rest.issues.updateComment({
            owner,
            repo,
            comment_id: existingComment.id,
            body: commentBody,
        });
    } else {
        // Create a new comment
        await github.rest.issues.createComment({
            owner,
            repo,
            issue_number: issueNumber,
            body: commentBody,
        });
    }
};

// Helper function to find all report files
function getAllReportFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.resolve(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllReportFiles(filePath));
        } else if (file === 'compsizer-failure-report.json') {
            results.push(filePath);
        }
    });
    return results;
}
