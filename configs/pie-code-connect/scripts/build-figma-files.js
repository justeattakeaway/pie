const fs = require('fs');
const path = require('path');

const SRC_DIR = process.cwd();
const DIST_DIR = path.join(SRC_DIR, 'dist');
const { COMPONENT_PREFIX } = process.env;

/**
 * Reads a source file and inlines any local `require('./...')` calls by replacing them
 * with the content of the required file.
 *
 * @param {string} srcPath - Absolute path to the source file to process.
 * @returns {string} The source file content with local requires inlined.
 */
function inlineRequires (srcPath) {
    const content = fs.readFileSync(srcPath, 'utf8');
    const lines = content.split('\n');
    const result = [];

    lines.forEach((line) => {
        // Match: const X = require('./some-file') - skip require('figma')
        const match = line.match(/^(\s*)const (\w+) = require\('\.\/([^']+)'\);$/);
        if (match) {
            const [, , , requiredFile] = match;
            const requiredPath = path.join(
                path.dirname(srcPath),
                requiredFile.endsWith('.js') ? requiredFile : `${requiredFile}.js`,
            );
            let inlined = fs.readFileSync(requiredPath, 'utf8');

            // Remove require('figma') from the inlined file - figma is already in scope
            inlined = inlined.replace(/^const figma = require\('figma'\);\n?/gm, '');

            // Remove the export as the content will be inlined
            inlined = inlined.replace(/^export default \w+;\n?/gm, '');
            inlined = inlined.replace(/^module.exports = \w+;\n?/gm, '');

            result.push(inlined.trimEnd());
        } else {
            result.push(line);
        }
    });

    return result.join('\n');
}

/**
 * Replaces `process.env.SOME_VAR` expressions in the given source string with the
 * literal value of that environment variable. Unset variables are left unchanged.
 *
 * @param {string} content - The source code string to process.
 * @returns {string} The source code with env var references replaced by their values.
 */
function inlineEnvVars (content) {
    return content.replace(/process\.env\.([A-Z_][A-Z0-9_]*)/g, (match, varName) => {
        const value = process.env[varName];
        if (value === undefined) return match;
        return JSON.stringify(value);
    });
}

function buildFigmaFiles (fileSuffix = 'figma.batch.js') {
    // Create destination folder if necessary
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    // Clean-up destination directory to avoid leftover files
    fs.readdirSync(DIST_DIR).forEach((file) => {
        fs.rmSync(path.join(DIST_DIR, file));
    });

    // Read and filter files to build
    const figmaFiles = fs.readdirSync(SRC_DIR).filter((file) => {
        if (!file.endsWith(fileSuffix)) return false;
        if (COMPONENT_PREFIX && !file.startsWith(COMPONENT_PREFIX)) return false;
        return true;
    });

    if (figmaFiles.length === 0) {
        console.info('No source files found.');
        process.exit(0);
    }

    figmaFiles.forEach((file) => {
        const srcPath = path.join(SRC_DIR, file);
        const distPath = path.join(DIST_DIR, file);
        const output = inlineEnvVars(inlineRequires(srcPath));

        fs.writeFileSync(distPath, output, 'utf8');

        console.info(`  ${file} → dist/${file}`);
    });

    console.info(`\nBuilt ${figmaFiles.length} file(s) to dist/`);
}

buildFigmaFiles();
