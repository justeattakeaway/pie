const { execSync } = require('child_process');

function wasLineModified (filename, firstLine, lastLine) {
    try {
        // Get the diff for the specific file between current state and main branch
        const gitDiff = execSync(`git diff -U0 main -- "${filename}"`, { encoding: 'utf8' }).trim();

        // File wasnt modified
        if (gitDiff === '') return false;

        // Parse the diff and get modified line numbers
        const modifiedLines = new Set();
        const diffLines = gitDiff.split('\n');

        diffLines.forEach((diffLine) => {
            // Match lines that start with @@ to get line number ranges
            const diffHunk = diffLine.match(/^@@ -\d+,?\d* \+(\d+),?(\d*) @@/);

            if (diffHunk) {
                const startLine = parseInt(diffHunk[1], 10);
                const lineCount = diffHunk[2] ? parseInt(diffHunk[2], 10) : 1;

                // Add all lines in the range to the set
                for (let i = 0; i < lineCount; i++) {
                    modifiedLines.add(startLine + i);
                }
            }
        });

        // Check if the current error line is in the modified lines
        const errorLineRange = lastLine
            ? Array.from({ length: lastLine - firstLine + 1 }, (el, index) => firstLine + index)
            : [firstLine];

        return errorLineRange.some((lineNum) => modifiedLines.has(lineNum));
    } catch (error) {
        throw new Error(`eslint-plugin-snacks-pie-migration/wasLineModified failed "${error}"`);
    }
}

module.exports = wasLineModified;
