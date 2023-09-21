import path from 'node:path';
import fs from 'node:fs';
import { exec } from 'node:child_process';
import { resolve } from 'import-meta-resolve';
import { globSync } from 'glob';

function runCommand (cmd) {
    console.info(cmd);
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            console.info(stdout || stderr);
            resolve(stdout || stderr);
        });
    });
}

async function runInSeries (aFunction, arrItems) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of arrItems) {
        // eslint-disable-next-line no-await-in-loop
        await aFunction(item);
        // TODO: Provide proper error handling strategy
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
    return runCommand(cmd);
}

const template = `import '@justeattakeaway/pie-css';
import * as Stories from 'pie-storybook/FILE_NAME';

import { renderStories } from './render-stories';

renderStories(Stories);
`;

const storiesModulePath = resolve('pie-storybook', import.meta.url);
const storiesResolvedPath = path.parse(storiesModulePath).dir.replace(/file:\/\//, '');
const storiesFiles = globSync(`${storiesResolvedPath}/*.stories.ts`);
await runInSeries(buildPage, storiesFiles);
