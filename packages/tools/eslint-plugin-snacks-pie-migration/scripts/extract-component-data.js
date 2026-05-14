const path = require('path');
const fs = require('fs');
const { extractComponentData } = require('../lib/extract-component-data');

const startPath = path.resolve(process.cwd(), '../../components/');
const destinationFilePath = path.join(process.cwd(), 'snacks-components-data.json');

const data = extractComponentData(startPath);
fs.writeFileSync(destinationFilePath, JSON.stringify(data, null, 2), 'utf8');
