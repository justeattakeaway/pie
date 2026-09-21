const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {
    CHECKS,
    MAX_BUFFER,
    ROOT,
    listTemplates,
    runPreview,
    snapshotPathFor,
} = require('./snapshot-utils');

const IS_CI = process.argv.includes('--ci');

function diffSnapshot (storedPath, newContent) {
    if (!fs.existsSync(storedPath)) {
        return `No baseline found at ${storedPath} — run snapshot:update first.`;
    }

    // Detect the change in process. Both sides are already in memory, so this cannot
    // fail; `diff` is shelled out to purely for rendering. Keeping it off the
    // correctness path matters because a large diff used to overflow its output buffer
    // and throw an error that escaped both loops, aborting the run before any
    // difference was printed and leaving later components unchecked.
    if (fs.readFileSync(storedPath, 'utf8') === `${newContent}\n`) {
        return null; // no diff
    }

    try {
        execFileSync('diff', ['-u', storedPath, '-'], {
            input: `${newContent}\n`,
            encoding: 'utf8',
            maxBuffer: MAX_BUFFER,
        });
        return '(snapshots differ, but diff reported no changes)';
    } catch (err) {
        // diff exits with 1 when differences are found; the diff output is in stdout
        if (err.status === 1) return err.stdout;
        return `(snapshots differ, but the diff could not be rendered: ${err.code || err.message})`;
    }
}

function prompt (question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim().toLowerCase());
        });
    });
}

async function main () {
    console.info('Building React templates…');
    execFileSync('yarn', ['build:react'], { cwd: ROOT, stdio: 'inherit' });

    const templates = listTemplates();
    const diffs = []; // { component, label, diff, newContent, snapshotPath }
    const errors = []; // { component, label, error }

    templates.forEach(({ component, templateFile }) => {
        process.stdout.write(`  ${component} … `);

        let ok = true;

        CHECKS.forEach(({ label, flags }) => {
            const snapshotPath = snapshotPathFor(component, label);
            let newContent;

            try {
                newContent = runPreview(templateFile, flags);
            } catch (err) {
                errors.push({ component, label, error: err.message });
                ok = false;
                return;
            }

            const diff = diffSnapshot(snapshotPath, newContent);

            if (diff !== null) {
                diffs.push({
                    component, label, diff, newContent, snapshotPath,
                });
                ok = false;
            }
        });

        console.info(ok ? 'ok' : 'CHANGED');
    });

    const hasDifferences = diffs.length > 0 || errors.length > 0;

    if (errors.length > 0) {
        console.error('\n--- Errors ---');
        errors.forEach(({ component, label, error }) => {
            console.error(`${component} (${label}): ${error}`);
        });
    }

    if (diffs.length > 0) {
        console.info('\n--- Differences ---');
        diffs.forEach(({ component, label, diff }) => {
            console.info(`\n[${component} — ${label}]`);
            console.info(diff);
        });
    }

    if (!hasDifferences) {
        console.info('\nNo differences found.');
        return;
    }

    if (IS_CI) {
        console.error(`\n${diffs.length} snapshot(s) differ, ${errors.length} error(s). Failing CI.`);
        process.exit(1);
    }

    // Interactive: offer to update baseline
    const answer = await prompt('\nUpdate all snapshots with the new output? (y/N) ');

    if (answer === 'y' || answer === 'yes') {
        // A component whose preview failed only has a new snapshot for the check that
        // succeeded. Writing it would leave a mixed baseline pair (one fresh file,
        //  one stale), so skip that component entirely and leave both files alone.
        const failedComponents = new Set(errors.map(({ component }) => component));
        const writable = diffs.filter(({ component }) => !failedComponents.has(component));
        const skipped = diffs.filter(({ component }) => failedComponents.has(component));

        writable.forEach(({ snapshotPath, newContent }) => {
            fs.writeFileSync(snapshotPath, `${newContent}\n`, 'utf8');
            console.info(`  Updated ${path.relative(ROOT, snapshotPath)}`);
        });

        if (skipped.length > 0) {
            const names = [...new Set(skipped.map(({ component }) => component))].join(', ');
            console.info(`  Skipped ${skipped.length} snapshot(s) — preview failed for: ${names}`);
        }

        console.info(writable.length > 0 ? 'Baseline updated.' : 'Baseline unchanged.');
    } else {
        console.info('Baseline unchanged.');
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
