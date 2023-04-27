#!/usr/bin/env node
// index.js
const path = require('path');
const execa = require('execa');

const [, , codemodName, ...args] = process.argv;

if (!codemodName) {
  console.error('Please provide a codemod name.');
  process.exit(1);
}

const transformerPath = path.join(__dirname, 'src', 'transforms', `${codemodName}.js`);

(async () => {
  try {
    await execa('npx', ['jscodeshift', '-t', transformerPath, ...args]);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();