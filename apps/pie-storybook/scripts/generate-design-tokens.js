#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to generate an MDX file documenting all CSS design tokens from jet.css
 * Uses tokens.json to determine if tokens are global or alias for proper categorization
 */

function parseTokensFromCSS () {
    const cssFilePath = path.join(process.cwd(), 'node_modules/@justeat/pie-design-tokens/dist/jet.css');

    if (!fs.existsSync(cssFilePath)) {
        console.error('Error: jet.css file not found at', cssFilePath);
        process.exit(1);
    }

    const cssContent = fs.readFileSync(cssFilePath, 'utf8');
    const lines = cssContent.split('\n');

    const categories = {};
    let currentCategory = null;
    let currentSubCategory = null;
    let insideRootBlock = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Detect when we enter the main :root block
        if (line === ':root {') {
            insideRootBlock = true;
        } else if (line.startsWith('}') ||
            line.includes('/* Dark color theme */') ||
            line.includes('html[data-color-mode=') ||
            line.includes('@media (prefers-color-scheme:')) {
            // Reset category context when we exit the root block or encounter new theme sections
            currentCategory = null;
            currentSubCategory = null;
            if (line.startsWith('}')) {
                insideRootBlock = false;
            }
        } else if (insideRootBlock) {
            // Only process tokens when we're inside the main root block

            // Detect category headers (e.g., "/* Global tokens - Color */" or "/* Alias tokens - Color */")
            if (line.match(/\/\*\s*(Global|Alias)\s+tokens\s+-\s+.*\s*\*\//)) {
                const match = line.match(/\/\*\s*(Global|Alias)\s+tokens\s+-\s+(.*?)\s*\*\//);
                if (match) {
                    const [, tokenType, tokenCategory] = match;

                    currentCategory = tokenCategory;
                    currentSubCategory = tokenType;

                    if (!categories[currentCategory]) {
                        categories[currentCategory] = {
                            global: [],
                            alias: [],
                        };
                    }
                }
            } else if (line.match(/^\s*--dt-.*?:\s*.*?;/)) {
                // Detect CSS variables (--dt-*)
                const match = line.match(/^\s*(--dt-.*?):\s*(.*?);/);
                if (match && currentCategory && currentSubCategory) {
                    const [, variableName, variableValue] = match;

                    const tokenInfo = {
                        name: variableName,
                        value: variableValue,
                    };

                    if (currentSubCategory.toLowerCase() === 'global') {
                        categories[currentCategory].global.push(tokenInfo);
                    } else if (currentSubCategory.toLowerCase() === 'alias') {
                        categories[currentCategory].alias.push(tokenInfo);
                    }
                }
            }
        }
    }

    return categories;
}

function generateMDXContent (categories, packageVersion) {
    let mdxContent = `import { Meta } from '@storybook/addon-docs';
import '@justeattakeaway/pie-webc/components/notification.js';

export const spacingBelow = {
    marginBlockEnd: 'var(--dt-spacing-d)',
}

<Meta title="Introduction/Design tokens" />

# Design Tokens

[Design Documentation](https://pie.design/foundations/design-tokens/) | [NPM](https://www.npmjs.com/package/@justeat/pie-design-tokens)

This page provides a comprehensive overview of all CSS custom properties (design tokens) available in the PIE Design System.
These tokens are automatically generated from the \`@justeat/pie-design-tokens\` package version \`${packageVersion}\`.

<pie-notification style={spacingBelow} variant="warning">Remember, please avoid using Global tokens directly in your projects. Instead, always prefer using Alias tokens.</pie-notification>

## Table of Contents

`;

    // Generate table of contents
    const sortedCategories = Object.keys(categories).sort();
    sortedCategories.forEach((categoryName) => {
        const category = categories[categoryName];
        const categoryId = categoryName.toLowerCase().replace(/\s+/g, '-');
        mdxContent += `- [${categoryName}](#${categoryId})\n`;

        if (category.global.length > 0) {
            mdxContent += `    - [Global ${categoryName} Tokens](#global-${categoryId}-tokens)\n`;
        }
        if (category.alias.length > 0) {
            mdxContent += `    - [Alias ${categoryName} Tokens](#alias-${categoryId}-tokens)\n`;
        }
    });

    mdxContent += '\n';

    // Helper function to extract numeric value from token name for sorting
    const extractNumericValue = (tokenName) => {
        // For spacing tokens: --dt-spacing-XX -> XX
        const spacingMatch = tokenName.match(/--dt-spacing-(\d+)/);
        if (spacingMatch) {
            return parseInt(spacingMatch[1], 10);
        }

        // For breakpoint tokens: --dt-breakpoint-size-XXXX -> XXXX
        const breakpointMatch = tokenName.match(/--dt-breakpoint-size-(\d+)/);
        if (breakpointMatch) {
            return parseInt(breakpointMatch[1], 10);
        }

        return null;
    };

    // Helper function to sort tokens numerically for specific categories
    const sortTokensNumerically = (tokens, categoryName) => {
        if (categoryName.toLowerCase() === 'spacing' || categoryName.toLowerCase() === 'breakpoint') {
            return [...tokens].sort((a, b) => {
                const numA = extractNumericValue(a.name);
                const numB = extractNumericValue(b.name);

                // If both have numeric values, sort numerically
                if (numA !== null && numB !== null) {
                    return numA - numB;
                }

                // Fallback to alphabetical sorting if no numeric values found
                return a.name.localeCompare(b.name);
            });
        }

        // For other categories, return tokens as-is (maintain original order)
        return tokens;
    };

    // Helper function to extract color value for swatch
    const getColorForSwatch = (value, tokenName) => {
        // Check if the value is actually a color value before proceeding
        const isValidColor = (val) => (
            // Valid color formats: hex, rgb, rgba, hsl, hsla, named colors, var() references to colors
            val.match(/^#[0-9a-fA-F]{3,8}$/) || // hex colors
            val.match(/^rgb/) || // rgb/rgba colors
            val.match(/^hsl/) || // hsl/hsla colors
            val.includes('var(--dt-color-') || // CSS variable references to colors
            ['transparent', 'black', 'white', 'red', 'green', 'blue'].includes(val.toLowerCase()) // basic named colors
        );

        // If the raw value is not a valid color (like percentages, numbers, etc.), don't show preview
        if (!isValidColor(value)) {
            return null;
        }

        // For color tokens, always use the CSS variable itself for proper theming support
        if (tokenName && tokenName.includes('--dt-color-')) {
            return `var(${tokenName})`;
        }

        // For var() references to other color tokens, return as-is
        if (value.includes('var(--dt-color-')) {
            return value;
        }

        // Return raw color values as fallback
        if (value.match(/^#[0-9a-fA-F]{3,8}$/)) {
            return value;
        }
        if (value.match(/^rgb/)) {
            return value;
        }

        return null;
    };

    // Helper function to detect if a value is a gradient
    const isGradient = (value) => value.includes('linear-gradient(') ||
               value.includes('radial-gradient(') ||
               value.includes('conic-gradient(');

    // Helper function to create gradient preview
    const getGradientForSwatch = (value, tokenName) => {
        if (!isGradient(value)) {
            return null;
        }

        // For gradient tokens, use the CSS variable itself for proper theming support
        let gradientValue;
        if (tokenName && tokenName.includes('--dt-gradient-')) {
            gradientValue = `var(${tokenName})`;
        } else {
            gradientValue = value;
        }

        return `<span style={{display: 'inline-block', width: '40px', height: '20px', background: '${gradientValue}', border: '1px solid #ccc', borderRadius: '3px', marginRight: '8px', verticalAlign: 'middle'}}></span>`;
    };

    // Generate content for each category
    Object.keys(categories).sort().forEach((categoryName) => {
        const category = categories[categoryName];

        mdxContent += `## ${categoryName}\n\n`;

        // Global tokens section
        if (category.global.length > 0) {
            mdxContent += `### Global ${categoryName} Tokens\n\n`;

            if (categoryName.toLowerCase() === 'color') {
                mdxContent += '| Token | Value | Preview |\n';
                mdxContent += '|-------|-------|----------|\n';
            } else if (categoryName.toLowerCase() === 'gradient') {
                mdxContent += '| Token | Value | Preview |\n';
                mdxContent += '|-------|-------|----------|\n';
            } else {
                mdxContent += '| Token | Value |\n';
                mdxContent += '|-------|-------|\n';
            }

            // Sort tokens numerically for spacing and breakpoint categories
            const sortedGlobalTokens = sortTokensNumerically(category.global, categoryName);

            sortedGlobalTokens.forEach((token) => {
                // Escape pipe characters in values for markdown tables
                const escapedValue = token.value.replace(/\|/g, '\\|');

                if (categoryName.toLowerCase() === 'color') {
                    const colorValue = getColorForSwatch(token.value, token.name);
                    const swatch = colorValue
                        ? `<span style={{display: 'inline-block', width: '20px', height: '20px', backgroundColor: '${colorValue}', border: '1px solid #ccc', borderRadius: '3px', marginRight: '8px', verticalAlign: 'middle'}}></span>`
                        : '';
                    mdxContent += `| \`${token.name}\` | \`${escapedValue}\` | ${swatch} |\n`;
                } else if (categoryName.toLowerCase() === 'gradient') {
                    const gradientSwatch = getGradientForSwatch(token.value, token.name);
                    const preview = gradientSwatch || '';
                    mdxContent += `| \`${token.name}\` | \`${escapedValue}\` | ${preview} |\n`;
                } else {
                    mdxContent += `| \`${token.name}\` | \`${escapedValue}\` |\n`;
                }
            });

            mdxContent += '\n';
        }

        // Alias tokens section
        if (category.alias.length > 0) {
            mdxContent += `### Alias ${categoryName} Tokens\n\n`;

            if (categoryName.toLowerCase() === 'color') {
                mdxContent += '| Token | Value | Preview |\n';
                mdxContent += '|-------|-------|----------|\n';
            } else if (categoryName.toLowerCase() === 'gradient') {
                mdxContent += '| Token | Value | Preview |\n';
                mdxContent += '|-------|-------|----------|\n';
            } else {
                mdxContent += '| Token | Value |\n';
                mdxContent += '|-------|-------|\n';
            }

            // Sort tokens numerically for spacing and breakpoint categories
            const sortedAliasTokens = sortTokensNumerically(category.alias, categoryName);

            sortedAliasTokens.forEach((token) => {
                // Escape pipe characters in values for markdown tables
                const escapedValue = token.value.replace(/\|/g, '\\|');

                if (categoryName.toLowerCase() === 'color') {
                    const colorValue = getColorForSwatch(token.value, token.name);
                    const swatch = colorValue
                        ? `<span style={{display: 'inline-block', width: '20px', height: '20px', backgroundColor: '${colorValue}', border: '1px solid #ccc', borderRadius: '3px', marginRight: '8px', verticalAlign: 'middle'}}></span>`
                        : '';
                    mdxContent += `| \`${token.name}\` | \`${escapedValue}\` | ${swatch} |\n`;
                } else if (categoryName.toLowerCase() === 'gradient') {
                    const gradientSwatch = getGradientForSwatch(token.value, token.name);
                    const preview = gradientSwatch || '';
                    mdxContent += `| \`${token.name}\` | \`${escapedValue}\` | ${preview} |\n`;
                } else {
                    mdxContent += `| \`${token.name}\` | \`${escapedValue}\` |\n`;
                }
            });

            mdxContent += '\n';
        }
    });

    mdxContent += `
---

*This documentation is automatically generated from the \`@justeat/pie-design-tokens\` package.*
*Last updated: ${new Date().toISOString().split('T')[0]}*
`;

    return mdxContent;
}

function main () {
    // eslint-disable-next-line no-console
    console.log('🚀 Generating design tokens documentation...');

    try {
        // Read package version
        const packageJsonPath = path.join(process.cwd(), 'node_modules/@justeat/pie-design-tokens/package.json');
        let packageVersion = 'unknown';

        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            packageVersion = packageJson.version;
        }

        // Parse tokens from CSS
        const categories = parseTokensFromCSS();

        // Generate MDX content
        const mdxContent = generateMDXContent(categories, packageVersion);

        // Write to stories directory
        const outputPath = path.join(process.cwd(), 'stories', 'design-tokens.mdx');
        fs.writeFileSync(outputPath, mdxContent);

        // eslint-disable-next-line no-console
        console.log('✅ Design tokens documentation generated at:', outputPath);

        // Log summary
        const totalTokens = Object.values(categories).reduce((total, category) => total + category.global.length + category.alias.length, 0);

        // eslint-disable-next-line no-console
        console.log(`📊 Summary: ${totalTokens} tokens across ${Object.keys(categories).length} categories`);
    } catch (error) {
        console.error('❌ Error generating design tokens documentation:', error);
        process.exit(1);
    }
}

// Run the script
main();

