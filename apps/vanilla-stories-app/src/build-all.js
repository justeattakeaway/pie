import path from 'node:path';
import fs from 'node:fs';
import { exec } from 'node:child_process';
import { resolve } from 'import-meta-resolve';
import { globSync } from 'glob';

const modulePath = resolve('pie-storybook', import.meta.url);
const resolvedPath = path.parse(modulePath).dir.replace(/file:\/\//, '');
const files = globSync(`${resolvedPath}/*.stories.ts`);

const template = `import '@justeattakeaway/pie-css';
import * as Stories from 'pie-storybook/FILE_NAME';

import { renderStories } from './render-stories';

renderStories(Stories);
`;

function runBashCommand (cmd) {
    console.info(cmd);
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            console.info(stdout || stderr);
            resolve(stdout || stderr);
        });
    });
}

async function processQueue (iterable, action) {
    // eslint-disable-next-line no-restricted-syntax
    for (const x of iterable) {
        // eslint-disable-next-line no-await-in-loop
        await action(x);
    }
}

function buildPage (filePath) {
    const fileName = path.parse(filePath).name;

    // replace component import path in main.js
    const temporaryMainContent = template.replace(/FILE_NAME/g, fileName);
    fs.writeFileSync('./src/main.ts', temporaryMainContent);

    // build page with vite into a specific folder
    const destFolderName = fileName.replace(/\.stories/, '');
    const cmd = `yarn vite build --outDir dist/${destFolderName}`;
    return runBashCommand(cmd);
}

await processQueue(files, buildPage);
