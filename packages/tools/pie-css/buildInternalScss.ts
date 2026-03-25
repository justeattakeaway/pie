import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
import { glob } from 'glob';

const INTERNAL_DIR = 'scss/_internal';
const DIST_DIR = 'dist';
const NODE_MODULES_PATH = '../../../node_modules';

/**
 * Discovers all .scss files under scss/_internal/ and compiles each one
 * to the mirrored path under dist/.
 *
 * The subdirectory structure determines the output location:
 *   scss/_internal/components/button.scss  -> dist/components/button.css
 *   scss/_internal/helpers/typography.scss  -> dist/helpers/typography.css
 */
async function buildInternalScss (): Promise<void> {
    const files = await glob(`${INTERNAL_DIR}/**/*.scss`);

    if (files.length === 0) {
        console.info('No SCSS files found in %s', INTERNAL_DIR);
        return;
    }

    // Ensure all output directories exist, then compile each file
    const compilations = files.map((inputFile) => {
        const relativePath = path.relative(INTERNAL_DIR, inputFile);
        const outputFile = path
            .join(DIST_DIR, relativePath)
            .replace(/\.scss$/, '.css');

        return { inputFile, outputFile };
    });

    await Promise.all(compilations.map(({ outputFile }) => fs.mkdir(path.dirname(outputFile), { recursive: true })));

    compilations.forEach(({ inputFile, outputFile }) => {
        console.info(`Compiling ${inputFile} -> ${outputFile}`);

        execSync(
            `yarn run -T sass --load-path=${NODE_MODULES_PATH} ${inputFile} ${outputFile} --no-source-map`,
            { stdio: 'inherit' },
        );
    });

    console.info(`Compiled ${files.length} SCSS file(s)`);
}

buildInternalScss().catch((error) => {
    console.error('Failed to build internal SCSS:', error);
    process.exit(1);
});
