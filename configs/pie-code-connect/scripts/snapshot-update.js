const { execFileSync } = require('child_process');
const fs = require('fs');
const {
    CHECKS,
    ROOT,
    SNAPSHOTS_DIR,
    listTemplates,
    runPreview,
    snapshotPathFor,
} = require('./snapshot-utils');

function main () {
    console.info('Building React templates…');
    execFileSync('yarn', ['code-connect-build:react'], { cwd: ROOT, stdio: 'inherit' });

    if (!fs.existsSync(SNAPSHOTS_DIR)) {
        fs.mkdirSync(SNAPSHOTS_DIR);
    }

    const templates = listTemplates();
    const failures = [];

    templates.forEach(({ component, templateFile }) => {
        process.stdout.write(`  ${component} … `);

        const pendingWrites = [];
        const errors = [];

        CHECKS.forEach(({ label, flags }) => {
            try {
                const content = runPreview(templateFile, flags);
                pendingWrites.push({ snapshotPath: snapshotPathFor(component, label), content });
            } catch (err) {
                errors.push(`${label}: ${err.message}`);
            }
        });

        // A component's two snapshots describe the same point in time, so only commit
        // them to disk once both previews have succeeded. Writing them independently
        // would leave a mixed-vintage pair (one fresh file, one stale) behind whenever
        // a single preview failed, producing diffs unrelated to the change under review.
        if (errors.length === 0) {
            pendingWrites.forEach(({ snapshotPath, content }) => {
                fs.writeFileSync(snapshotPath, `${content}\n`, 'utf8');
            });
            console.info('done');
        } else {
            console.error(`FAILED (baseline left unchanged)\n    ${errors.join('\n    ')}`);
            failures.push({ component, errors });
        }
    });

    console.info(`\nSnapshots written to snapshots/ (${templates.length - failures.length}/${templates.length} succeeded)`);

    if (failures.length > 0) {
        console.error('\nFailed components:');
        failures.forEach(({ component, errors }) => {
            console.error(`  ${component}:\n    ${errors.join('\n    ')}`);
        });
        process.exit(1);
    }
}

main();
