#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

import { ComponentService } from './componentService.js';

const main = (fs, path) => {
    const componentService = new ComponentService(fs, path);
    componentService.verifyRootDirectory('pie-monorepo');

    const {
        componentsTargetDir, reactTargetDir, pieWebcPackageJsonPath,
    } = componentService.getPathShortcuts();

    componentService.ensureDirectoryExists(componentsTargetDir);
    componentService.ensureDirectoryExists(reactTargetDir);

    const pieWebcPackageJson = componentService.readAndPreparePackageJson(pieWebcPackageJsonPath);

    const excludedFolders = ['pie-webc', 'pie-webc-core', 'pie-webc-testing'];
    const updatedPackageJson = componentService.processComponents(excludedFolders, pieWebcPackageJson);

    componentService.writePackageJson(pieWebcPackageJsonPath, updatedPackageJson);
    console.info('All components added to pie-webc!');
};

main(fs, path);
