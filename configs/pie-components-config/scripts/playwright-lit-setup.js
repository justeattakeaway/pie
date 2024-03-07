#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destinationDir = path.resolve(process.cwd(), 'playwright');

async function copyPlaywrightHTML () {
    try {
        try {
            await fs.access(destinationDir);
        } catch (err) {
            await fs.mkdir(destinationDir, { recursive: true });
        }

        const sourceFile = path.resolve(__dirname, '..', 'playwright/index.html');
        const destinationFile = path.resolve(destinationDir, 'index.html');

        await fs.copyFile(sourceFile, destinationFile);
        console.log('Playwright HTML file copied successfully.');
    } catch (err) {
        console.error('Error copying Playwright HTML:', err);
    }
}

copyPlaywrightHTML();
