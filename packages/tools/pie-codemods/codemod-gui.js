#!/usr/bin/env node

// load the jscodeshift runner
import * as jscodeshift from 'jscodeshift/src/Runner.js';
import * as path from 'path';

import { select, Separator } from '@inquirer/prompts';

const answer = await select({
    message: 'Select a migration',
    choices: [
        {
            name: 'pie-button@v2',
            value: 'pie-button@v2',
            description: 'Some stuff here',
        },
        {
            name: 'pie-design-tokens@v5',
            value: 'pie-design-tokens@v5',
            description: 'Some stuff here',
        },
        new Separator(),
        {
            name: 'v1asasd',
            value: 'v1asdasdas',
            description: 'Some stuff here',
        },
        {
            name: 'vasaasdas1',
            value: 'vasdasd1',
            description: 'Some stuff here',
        },
    ],
});
