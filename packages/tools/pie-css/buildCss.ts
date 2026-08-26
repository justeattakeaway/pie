import fs from 'fs/promises';
import path from 'path';
import postcss, { type Result } from 'postcss';
import atImport from 'postcss-import';

const cssFiles: Array<{ input: string; output: string }> = [
    { input: 'css/input.css', output: 'dist/index.css' },
    { input: 'css/app/resets/normalize.css', output: 'dist/app/resets/normalize.css' },
];

async function processCSS (inputPath: string): Promise<Result> {
    const css = await fs.readFile(inputPath, 'utf8');

    return postcss()
        .use(atImport())
        .process(css, { from: inputPath });
}

async function writeOutput (outputPath: string, content: string): Promise<void> {
    const dir = path.dirname(outputPath);
    await fs.mkdir(dir, { recursive: true });

    return fs.writeFile(outputPath, content);
}

async function main (): Promise<void> {
    try {
        await Promise.all(cssFiles.map(async ({ input, output }) => {
            console.info(`Processing "${input}" file...`);
            const result = await processCSS(input);

            console.info(`Writing "${output}" file...`);
            await writeOutput(output, result.css);

            console.info(`"${output}" file written`);
        }));
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

main();
