const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {
    CHECKS,
    ROOT,
    countRenderFailures,
    listTemplates,
    runPreview,
    snapshotPathFor,
} = require('./snapshot-utils');

const IS_CI = process.argv.includes('--ci');

/**
 * Compares one check's output against its baseline.
 *
 * @param {string} storedPath - Baseline file for this check.
 * @param {string} newContent - Freshly generated output.
 * @returns {{ state: string }|null} `null` when unchanged, otherwise the condition to
 *          name on the status line — empty for an ordinary change.
 */
function diffSnapshot (storedPath, newContent) {
    if (!fs.existsSync(storedPath)) {
        return { state: 'no baseline' };
    }

    // Compared in process, so detecting a change cannot fail and nothing is spawned to
    // render one: a run reports what moved, and reading it is a separate step.
    if (fs.readFileSync(storedPath, 'utf8') === `${newContent}\n`) {
        return null; // no diff
    }

    return { state: '' };
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

        const notes = [];
        let failed = false;
        let changedHere = false;

        CHECKS.forEach(({ label, flags }) => {
            const snapshotPath = snapshotPathFor(component, label);
            let newContent;

            try {
                newContent = runPreview(templateFile, flags);
            } catch (err) {
                errors.push({ component, label, error: err.message });
                failed = true;
                return;
            }

            const changed = diffSnapshot(snapshotPath, newContent);
            const conditions = [];

            if (changed !== null) {
                diffs.push({
                    component, label, newContent, snapshotPath, ...changed,
                });
                changedHere = true;

                if (changed.state) conditions.push(changed.state);
            }

            // Not a property of the diff: a combination that stopped rendering is worth
            // saying even when the baseline already recorded it as failing.
            const { failed: failedRenders, total } = countRenderFailures(JSON.parse(newContent));

            if (failedRenders > 0) {
                conditions.push(`${failedRenders}/${total} renders failing`);
            }

            if (conditions.length > 0) {
                notes.push(`${label}: ${conditions.join(', ')}`);
            } else if (changed !== null) {
                notes.push(label);
            }
        });

        let state = 'ok';

        if (failed) {
            state = 'FAILED';
        } else if (changedHere) {
            state = 'CHANGED';
        }

        console.info(notes.length > 0 ? `${state} (${notes.join(', ')})` : state);
    });

    const hasDifferences = diffs.length > 0 || errors.length > 0;

    if (errors.length > 0) {
        console.error('\n--- Errors ---');
        errors.forEach(({ component, label, error }) => {
            console.error(`${component} (${label}): ${error}`);
        });
    }

    // A component that failed reports as failed on its status line, so count it once,
    // under failed, even if its other check also differed.
    const failedComponents = new Set(errors.map(({ component }) => component));
    const changedComponents = new Set(diffs
        .map(({ component }) => component)
        .filter((component) => !failedComponents.has(component)));
    const okCount = templates.length - failedComponents.size - changedComponents.size;

    console.info(`\n${templates.length} component(s): ${okCount} ok, ${changedComponents.size} changed, ${failedComponents.size} failed`);

    if (!hasDifferences) {
        console.info('No differences found.');
        return;
    }

    if (IS_CI) {
        console.error(`\n${diffs.length} snapshot(s) differ, ${errors.length} error(s).`);
        process.exit(1);
    }

    if (diffs.length === 0) {
        return;
    }

    // Interactive: offer to update baseline
    const answer = await prompt('\nUpdate all snapshots with the new output? (y/N) ');

    if (answer === 'y' || answer === 'yes') {
        // A component whose preview failed only has a new snapshot for the check that
        // succeeded. Writing it would leave a mixed baseline pair (one fresh file,
        //  one stale), so skip that component entirely and leave both files alone.
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
