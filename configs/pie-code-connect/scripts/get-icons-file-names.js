const fs = require('fs');
const path = require('path');

function getIconsFileNames () {
    const SRC_DIR = process.cwd();
    const PIE_ICONS_ASSETS = path.resolve(SRC_DIR, '../../packages/tools/pie-icons/src/assets');
    const TEMP_DIR = path.join(SRC_DIR, 'temp');

    const categories = [
        { folder: 'flag', output: 'file-names-flag-icons.js' },
        { folder: 'payment', output: 'file-names-payment-icons.js' },
    ];

    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR, { recursive: true });
    }

    categories.forEach(({ folder, output }) => {
        const folderPath = path.join(PIE_ICONS_ASSETS, folder);
        const names = fs.readdirSync(folderPath)
            .filter((file) => path.extname(file) === '.svg')
            .map((file) => path.basename(file, path.extname(file)));

        const outputPath = path.join(TEMP_DIR, output);
        const fileContent = `const iconFiles = ${JSON.stringify(names, null, 2)}
module.exports = files;`;

        fs.writeFileSync(outputPath, fileContent, 'utf8');

        console.info(`Written ${names.length} names → temp/${output}`);
    });
}

getIconsFileNames();
