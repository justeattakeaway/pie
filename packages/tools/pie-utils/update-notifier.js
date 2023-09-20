#!/usr/bin/env node
import updateNotifier from 'update-notifier';
import path from 'path';
import { promises as fs } from 'fs';

async function notifyUpdate() {
    // Resolve the path to the package.json of the calling module
    const pkgPath = path.join(process.cwd(), 'package.json');

    // Read and parse the JSON file
    const pkgContent = await fs.readFile(pkgPath, 'utf-8');
    const pkg = JSON.parse(pkgContent);

    // Check for updates every day
    const notifier = updateNotifier({
        pkg,
        updateCheckInterval: 0,
        shouldNotifyInNpmScript: true, // one day in milliseconds
    });

    notifier.notify();
}

notifyUpdate();
