import fs from 'fs/promises';
import path from 'path';
import postcss, { type Result } from 'postcss';
import atImport from 'postcss-import';

const cssInputFilePath = 'css/input.css';
const cssOutputFilePath = 'dist/index.css';

const normalizeInputFilePath = 'css/app/resets/normalize.css';
const normalizeOutputFilePath = 'dist/app/resets/normalize.css';

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
        console.info(`Processing "${cssInputFilePath}" file...`);
        const result = await processCSS(cssInputFilePath);

        console.info(`Writing "${cssOutputFilePath}" file...`);
        await writeOutput(cssOutputFilePath, result.css);

        console.info(`"${cssOutputFilePath}" file written`);

        console.info(`Processing "${normalizeInputFilePath}" file...`);
        const normalizeResult = await processCSS(normalizeInputFilePath);

        console.info(`Writing "${normalizeOutputFilePath}" file...`);
        await writeOutput(normalizeOutputFilePath, normalizeResult.css);

        console.info(`"${normalizeOutputFilePath}" file written`);
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
}

main();
