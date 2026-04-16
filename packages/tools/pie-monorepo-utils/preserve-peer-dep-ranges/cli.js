#!/usr/bin/env node

/**
 * CLI for preserve-peer-dep-ranges.
 *
 * Prevents `changeset version` from clobbering fuzzy peerDependency ranges
 * on internal packages (e.g. "1.x" → "1.1.0").
 *
 * Usage (wired into the changeset:version script in root package.json):
 *   preserve-peer-dep-ranges snapshot
 *   preserve-peer-dep-ranges restore
 */

const path = require('path');
const findMonorepoRoot = require('../utils/find-monorepo-root');
const { runSnapshot, runRestore } = require('./preserve-peer-dep-ranges');

const root = findMonorepoRoot();
const SNAPSHOT_PATH = path.join(root, '.changeset', '.peer-dep-ranges-snapshot.json');
const [,, command] = process.argv;

if (command === 'snapshot') {
    runSnapshot(SNAPSHOT_PATH);
} else if (command === 'restore') {
    runRestore(SNAPSHOT_PATH);
} else {
    console.error('Usage: preserve-peer-dep-ranges <snapshot|restore>'); // eslint-disable-line no-console
    process.exit(1);
}
