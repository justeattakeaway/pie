#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import { ComponentService } from './componentService.js';

const main = (fs, path) => {
    const workingDir = process.cwd();
    const componentService = new ComponentService(fs, path);
    componentService.verifyRootDirectory(workingDir, 'pie-monorepo');

    const { componentsTargetDir, reactTargetDir, pieWebcPackageJsonPath } = componentService.getPathShortcuts(workingDir);

    componentService.ensureDirectoryExists(componentsTargetDir);
    componentService.ensureDirectoryExists(reactTargetDir);

    const pieWebcPackageJson = componentService.readAndPreparePackageJson(pieWebcPackageJsonPath);

    const excludedFolders = ['pie-webc', 'pie-webc-core', 'pie-webc-testing'];
    const updatedPackageJson = componentService.processComponents(workingDir, excludedFolders, pieWebcPackageJson);

    componentService.writePackageJson(pieWebcPackageJsonPath, updatedPackageJson);
    console.info(chalk.green('\nAll components added to pie-webc!'));
};

main(fs, path);
