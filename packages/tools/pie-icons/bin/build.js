const { execSync } = require('child_process');

console.log('Clearing old svgs');
execSync('npx rimraf src/assets/_optimised');

console.log('Making src/assets/_optimised directory');
execSync('mkdir "src/assets/_optimised"');

// Process SVG files (Optimise)
console.log('Optimising SVGS');
execSync('npx babel-node bin/process-svgs.js', { stdio: 'inherit' });

// Create dist directory
console.log('Creating dist directory');
execSync('npx rimraf dist');
execSync('mkdir dist');

// Build icons.json
console.log('Building icons.json');
execSync('npx babel-node bin/build-icons-json.js', { stdio: 'inherit' });

// Create dist/icons directory
console.log('Creating dist/icons directory');
execSync('npx rimraf dist/icons');
execSync('mkdir "dist/icons"');

// Build SVG icons
console.log('Building SVG icons');
execSync('npx babel-node bin/build-svgs.js', { stdio: 'inherit' });

// Build JavaScript library
console.log('Building JavaScript library');
execSync('npx webpack --output-filename pie-icons.js --mode development');
execSync('npx webpack --output-filename pie-icons.min.js --mode production');

// Copy helpers directory
console.log('Copy src/helpers directory to dist/helpers');
execSync('npx copyfiles -e "**/*.test.js" -u 1 ./src/helpers/index.js dist');
