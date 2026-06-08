import childProcess from 'child_process';

export default async function webcMajorVersion ({ fail, flags }) {
    if (flags.isAutomationPR) return;

    try {
        childProcess.execSync('yarn detect-webc-major-version', { stdio: 'pipe' });
    } catch (err) {
        const errorOutput = err.stderr ? err.stderr.toString() : '';
        fail(`${errorOutput}`);
    }
}
