#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destinationDir = path.resolve(process.cwd(), 'playwright');

async function copyPlaywrightFiles () {
    try {
        try {
            await fs.access(destinationDir);
        } catch (err) {
            await fs.mkdir(destinationDir, { recursive: true });
        }

        const playwrightFiles = ['index.html', 'index.ts'];
        playwrightFiles.forEach(async (file) => {
            const sourceFile = path.resolve(__dirname, '..', `playwright/${file}`);
            const destinationFile = path.resolve(destinationDir, file);

            await fs.copyFile(sourceFile, destinationFile);
            console.log(`Playwright ${file} copied successfully.`);
        });
    } catch (err) {
        console.error('Error copying Playwright HTML:', err);
    }
}

copyPlaywrightFiles();
