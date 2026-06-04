const { execSync } = require('child_process');

console.info('Clearing old svgs');
execSync('yarn run -T rimraf src/assets/_optimised');

console.info('Making src/assets/_optimised directory');
execSync('mkdir "src/assets/_optimised"');

// Process SVG files (Optimise)
console.info('Optimising SVGS');
execSync('yarn babel-node bin/process-svgs.js', { stdio: 'inherit' });

// Create dist directory
console.info('Creating dist directory');
execSync('yarn run -T rimraf dist');
execSync('mkdir dist');

// Build icons.json
console.info('Building icons.json');
execSync('yarn babel-node bin/build-icons-json.js', { stdio: 'inherit' });

// Create dist/icons directory
console.info('Creating dist/icons directory');
execSync('yarn run -T rimraf dist/icons');
execSync('mkdir "dist/icons"');

// Build SVG icons
console.info('Building SVG icons');
execSync('yarn babel-node bin/build-svgs.js', { stdio: 'inherit' });

// Build JavaScript library
console.info('Building JavaScript library');
execSync('yarn webpack --output-filename pie-icons.js --mode development');
execSync('yarn webpack --output-filename pie-icons.min.js --mode production');

// Copy iconData.json
console.info('Copying data file');
execSync('cp src/iconData.json dist/iconData.json');
