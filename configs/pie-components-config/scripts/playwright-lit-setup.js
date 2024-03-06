#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises'; // Use promise-based fs module

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const destinationDir = path.resolve(process.cwd(), 'playwright');

// Use async/await for better readability and error handling
async function copyPlaywrightHTML() {
  try {
    // Check if the destination directory exists; if not, create it
    try {
      await fs.access(destinationDir);
    } catch (err) {
      await fs.mkdir(destinationDir, { recursive: true }); // Ensure directory is created if it doesn't exist
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