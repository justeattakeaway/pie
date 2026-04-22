#!/usr/bin/env bash

# changeset-version.sh
#
# Wrapper around `changeset version` that preserves fuzzy peerDependency
# ranges on internal packages (e.g. "1.x", "^1.0.0", "*").
#
# Problem:
#   `changeset version` rewrites internal peerDependency ranges to exact
#   versions (e.g. "1.x" → "1.1.0"). This is undesirable because we
#   intentionally use ranges so consumers aren't forced to pin.
#
# Solution:
#   1. Snapshot all internal peer dep ranges before versioning.
#   2. Run `changeset version` (which may clobber them).
#   3. Restore any clobbered ranges from the snapshot.
#   4. Update the yarn lockfile to reflect the final state.
#
# The restore step runs even if `changeset version` fails, via a trap,
# so the snapshot file is always cleaned up.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

cleanup() {
    node "$SCRIPT_DIR/cli.js" restore
}

# Step 1: Snapshot current peer dep ranges
node "$SCRIPT_DIR/cli.js" snapshot

# Ensure restore always runs, even on failure
trap cleanup EXIT

# Step 2: Run changeset version
changeset version

# Step 3: restore runs automatically via the EXIT trap

# Step 4: Update the lockfile (runs after trap, only if changeset succeeded)
trap - EXIT
cleanup
yarn --mode update-lockfile
