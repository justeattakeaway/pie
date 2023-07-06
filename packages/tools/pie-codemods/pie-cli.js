#!/usr/bin/env node

const jscodeshift = require('jscodeshift/src/Runner');
const path = require('path');

const codemodName = process.argv[2];
const targetFile = process.argv[3];

if (!codemodName || !targetFile) {
  console.error('You must provide a codemod name and target file.');
  process.exit(1);
}

let migration;

try {
  migration = path.join(__dirname, `src/transforms/${codemodName}.js`);
  console.log('HELLLLLLO', migration);

} catch (error) {
  console.error(`The codemod "${codemodName}" could not be found.`);
  process.exit(1);
}

jscodeshift.run(migration, [targetFile], {
  babel: true,
  ignorePattern: ['**/node_modules/**', '**/.next/**', '**/build/**'],
  extensions: 'tsx,ts,jsx,js',
  parser: 'tsx',
  verbose: 2,
  silent: false,
  stdin: false,
});