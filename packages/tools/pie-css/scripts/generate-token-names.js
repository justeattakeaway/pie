#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUTPUT = path.join(__dirname, '../scss/_internal/constants/_token-names.scss');

// Display name suffixes for breakpoint utility classes.
// These cannot be derived from the token keys alone so are defined here.
// If a new breakpoint token is added, add its display name to this map.
const BREAKPOINT_DISPLAY_NAMES = {
    xs: 'XSmall',
    sm: 'Small',
    md: 'Mid',
    lg: 'Large',
    xl: 'XLarge',
    xxl: 'XXLarge',
};

function getMetadata () {
    const metadataPath = require.resolve('@justeat/pie-design-tokens/metadata/tokensMetadata.json');

    return JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}

function main () {
    const metadata = getMetadata();

    const spacingNames = Object.keys(metadata.spacing.alias);
    const typographyNames = Object.keys(metadata.font.alias.wide).map((name) => `font-${name}`);
    const breakpointKeys = Object.keys(metadata.breakpoint.alias);

    const breakpointMap = breakpointKeys.map((key) => {
        const displayName = BREAKPOINT_DISPLAY_NAMES[key];

        if (!displayName) {
            throw new Error(`No display name defined for breakpoint token "${key}". Add it to BREAKPOINT_DISPLAY_NAMES in generate-token-names.js.`);
        }

        return `'${key}': '${displayName}'`;
    }).join(', ');

    const lines = [
        '// Auto-generated from @justeat/pie-design-tokens — do not edit manually.',
        '// Run `yarn generate:token-names` to update.',
        `$spacing-names: ${spacingNames.join(' ')};`,
        `$typography-names: ${typographyNames.join(' ')};`,
        `$breakpoint-names: (${breakpointMap});`,
        '',
    ];

    const dir = path.dirname(OUTPUT);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT, lines.join('\n'), 'utf8');
    // eslint-disable-next-line no-console
    console.log(`✓ Generated ${path.relative(process.cwd(), OUTPUT)}`);
    // eslint-disable-next-line no-console
    console.log(`  spacing tokens: ${spacingNames.join(', ')}`);
    // eslint-disable-next-line no-console
    console.log(`  typography tokens: ${typographyNames.join(', ')}`);
    // eslint-disable-next-line no-console
    console.log(`  breakpoint tokens: ${breakpointKeys.join(', ')}`);
}

main();

module.exports = { getMetadata };
