const fs = require('fs');
const { execFileSync } = require('child_process');

function appendToGithubOutput (key, value) {
    if (!process.env.GITHUB_OUTPUT) return;
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
}

function appendToGithubEnv (key, value) {
    if (!process.env.GITHUB_ENV) return;
    fs.appendFileSync(process.env.GITHUB_ENV, `${key}=${value}\n`);
}

function appendJsonToGithubEnv (key, value) {
    if (!process.env.GITHUB_ENV) return;
    fs.appendFileSync(process.env.GITHUB_ENV, `${key}<<EOF\n${JSON.stringify(value)}\nEOF\n`);
}

function configureGitUser () {
    if (!process.env.GITHUB_ENV) return;

    const gitUserName = process.env.GIT_USER_NAME || 'github-actions[bot]';
    const gitUserEmail = process.env.GIT_USER_EMAIL || '41898282+github-actions[bot]@users.noreply.github.com';
    execFileSync('git', ['config', '--global', 'user.name', gitUserName]);
    execFileSync('git', ['config', '--global', 'user.email', gitUserEmail]);
}

module.exports = {
    appendToGithubOutput, appendToGithubEnv, appendJsonToGithubEnv, configureGitUser,
};
