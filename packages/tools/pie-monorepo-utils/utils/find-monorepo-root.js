const fs = require('fs');
const path = require('path');

function findMonorepoRoot (startPath = process.cwd(), expectedFile = 'yarn.lock') {
    let testedPath = startPath;
    let fileExists = false;

    do {
        fileExists = fs.existsSync(path.join(testedPath, expectedFile));
        if (!fileExists) testedPath = path.join(testedPath, '../');
    } while (fileExists === false);

    return testedPath;
}

module.exports = findMonorepoRoot;
