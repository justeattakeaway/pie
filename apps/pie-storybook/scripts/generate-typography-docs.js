#!/usr/bin/env node

/**
 * Script to generate typography utility class documentation from CSS file
 * This script parses the typography.css file and generates MDX documentation
 * with automatically generated class tables.
 */

const fs = require('fs');
const path = require('path');

const CSS_FILE_PATH = path.join(__dirname, '../../../packages/tools/pie-css/dist/helpers/typography.css');
const OUTPUT_FILE_PATH = path.join(__dirname, '../stories/pie-css-typography.mdx');

/**
 * Parse CSS file and extract utility class information
 */
function parseCSSFile (cssContent) {
    const classMap = new Map(); // Track unique classes by name
    const responsiveClasses = new Set(); // Track which classes have media queries

    // First pass: find all unique class definitions
    const classRegex = /^\.(u-font-[a-z0-9-]+)\s*\{/gm;
    let match;
    match = classRegex.exec(cssContent);
    while (match !== null) {
        const [, className] = match;
        if (!classMap.has(className)) {
            classMap.set(className, {
                name: className,
                category: categorizeClass(className),
                responsive: false,
                properties: [],
                hasItalic: className.includes('-italic'),
                hasLink: className.includes('-link'),
                hasStrong: className.includes('-strong'),
            });
        }
        match = classRegex.exec(cssContent);
    }

    // Second pass: find media queries and mark classes as responsive
    const mediaQueryRegex = /@media[^{]*\{[^}]*\.(u-font-[a-z0-9-]+)/g;
    match = mediaQueryRegex.exec(cssContent);
    while (match !== null) {
        const [, className] = match;
        responsiveClasses.add(className);
        match = mediaQueryRegex.exec(cssContent);
    }

    // Mark responsive classes
    responsiveClasses.forEach((className) => {
        if (classMap.has(className)) {
            classMap.get(className).responsive = true;
        }
    });

    // Convert Map to Array
    return Array.from(classMap.values());
}

/**
 * Categorize a class name into its type
 */
function categorizeClass (className) {
    // Check subheading first (before heading) since it contains "heading"
    if (className.includes('subheading')) {
        return 'subheading';
    }
    if (className.includes('heading')) {
        return 'heading';
    }
    if (className.includes('interactive')) {
        return 'interactive';
    }
    if (className.includes('caption')) {
        return 'caption';
    }
    if (className.includes('body')) {
        return 'body';
    }
    return 'other';
}

/**
 * Get a human-readable description for a class
 */
function getClassDescription (className) {
    const parts = className.replace('u-font-', '').split('-');
    let size = '';
    if (parts.includes('xs')) {
        size = 'Extra small';
    } else if (parts.includes('s')) {
        size = 'Small';
    } else if (parts.includes('m')) {
        size = 'Medium';
    } else if (parts.includes('l')) {
        size = 'Large';
    } else if (parts.includes('xl')) {
        size = 'Extra large';
    } else if (parts.includes('xxl')) {
        size = 'Extra extra large';
    }

    let type = 'text';
    if (parts.includes('heading')) {
        type = 'heading';
    } else if (parts.includes('subheading')) {
        type = 'subheading';
    } else if (parts.includes('interactive')) {
        type = 'interactive text';
    } else if (parts.includes('body')) {
        type = 'body text';
    } else if (parts.includes('caption')) {
        type = 'caption';
    }

    const modifiers = [];
    if (parts.includes('italic')) modifiers.push('italic');
    if (parts.includes('strong')) modifiers.push('bold/strong');
    if (parts.includes('link')) modifiers.push('link');

    const modifierText = modifiers.length > 0 ? ` ${modifiers.join(' ')}` : '';
    const sizeText = size ? `${size} ` : '';

    return `${sizeText}${type}${modifierText}`;
}

/**
 * Group classes by category
 */
function groupClassesByCategory (classes) {
    const grouped = {
        heading: { standard: [], italic: [] },
        subheading: [],
        interactive: [],
        body: {
            standard: [], link: [], strong: [], strongLink: [],
        },
        caption: {
            standard: [], link: [], strong: [], strongLink: [],
        },
    };

    classes.forEach((cls) => {
        if (cls.category === 'heading') {
            if (cls.hasItalic) {
                grouped.heading.italic.push(cls);
            } else {
                grouped.heading.standard.push(cls);
            }
        } else if (cls.category === 'subheading') {
            grouped.subheading.push(cls);
        } else if (cls.category === 'interactive') {
            grouped.interactive.push(cls);
        } else if (cls.category === 'body') {
            if (cls.hasStrong && cls.hasLink) {
                grouped.body.strongLink.push(cls);
            } else if (cls.hasStrong) {
                grouped.body.strong.push(cls);
            } else if (cls.hasLink) {
                grouped.body.link.push(cls);
            } else {
                grouped.body.standard.push(cls);
            }
        } else if (cls.category === 'caption') {
            if (cls.hasStrong && cls.hasLink) {
                grouped.caption.strongLink.push(cls);
            } else if (cls.hasStrong) {
                grouped.caption.strong.push(cls);
            } else if (cls.hasLink) {
                grouped.caption.link.push(cls);
            } else {
                grouped.caption.standard.push(cls);
            }
        }
    });

    return grouped;
}

/**
 * Generate markdown table for a group of classes
 */
function generateTable (classes) {
    if (classes.length === 0) return '';

    const columns = ['Class', 'Use Case'];
    const rows = classes.map((cls) => {
        const className = `\`.${cls.name}\``;
        const useCase = getClassDescription(cls.name);
        return `| ${className} | ${useCase} |`;
    });

    const header = `| ${columns.join(' | ')} |\n| ${columns.map(() => '---').join(' | ')} |`;
    return `${header}\n${rows.join('\n')}`;
}

/**
 * Generate the complete MDX content
 */
function generateMDXContent (classes) {
    const grouped = groupClassesByCategory(classes);

    // Sort classes within groups by size order
    const sizeOrder = ['xxl', 'xl', 'l', 'm', 's', 'xs'];
    const sortBySize = (a, b) => {
        const aSize = sizeOrder.find((size) => a.name.includes(`-${size}`)) || '';
        const bSize = sizeOrder.find((size) => b.name.includes(`-${size}`)) || '';
        return sizeOrder.indexOf(aSize) - sizeOrder.indexOf(bSize);
    };

    Object.values(grouped.heading).forEach((arr) => arr.sort(sortBySize));
    grouped.subheading.sort(sortBySize);
    grouped.interactive.sort(sortBySize);
    Object.values(grouped.body).forEach((arr) => arr.sort(sortBySize));
    Object.values(grouped.caption).forEach((arr) => arr.sort(sortBySize));

    return `import { Meta } from '@storybook/addon-docs';
import { Canvas } from '@storybook/blocks';

<Meta title="Additional libraries/PIE CSS Typography Utility Classes" />

# PIE CSS Typography Utility Classes

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM Package](https://www.npmjs.com/package/@justeattakeaway/pie-css)

The PIE CSS Typography Utilities provide a comprehensive set of utility classes for applying consistent typography styles across your application. These classes are built on top of PIE design tokens and ensure your typography follows the design system's guidelines automatically.

## Table of Contents

- [Why?](#why)
- [Installation](#installation)
- [Importing](#importing)
    - [JavaScript/Framework Import (via bundler)](#javascriptframework-import-via-bundler)
    - [SCSS/Sass Import](#scsssass-import)
- [Which Class Should I Use?](#which-class-should-i-use)
    - [If You Have Designs](#if-you-have-designs)
    - [If You Don't Have Designs](#if-you-dont-have-designs)
- [Available Classes](#available-classes)
- [Usage Examples](#usage-examples)
- [What Each Utility Class Applies](#what-each-utility-class-applies)
- [Troubleshooting](#troubleshooting)
    - [Utilities Not Working](#utilities-not-working)
    - [Font Not Displaying](#font-not-displaying)

## Why?

Our typography utility classes offer several key benefits:

- **Consistency**: Ensures all typography across your application follows the PIE design system standards
- **Responsive by Default**: Many utilities automatically adjust for narrow and wide viewports (breakpoint at 768px)
- **Design Token Integration**: Built directly on PIE design tokens, so updates to tokens automatically propagate
- **Maintainability**: Single source of truth for typography styles reduces duplication and makes updates easier. You don't need to manually apply individual token combinations, it's done for you

## Installation

The typography utilities are included as part of the \`@justeattakeaway/pie-css\` package. If you haven't already installed it:

\`\`\`bash
# Using Yarn
yarn add @justeattakeaway/pie-css

# Using NPM
npm install @justeattakeaway/pie-css
\`\`\`

## Importing

To use the typography utility classes, you need to import the typography CSS file. The import method depends on your project setup:

### JavaScript/Framework Import (via bundler)

\`\`\`javascript
// Import the typography utilities
import '@justeattakeaway/pie-css/dist/helpers/typography.css';
\`\`\`

### SCSS/Sass Import

\`\`\`scss
@use '@justeattakeaway/pie-css/dist/helpers/typography.css';
\`\`\`

> **Note**: Make sure you've also imported the base \`@justeattakeaway/pie-css\` package, as the typography utilities depend on the design token CSS variables defined there.

## Which Class Should I Use?

### If You Have Designs

If you have access to Figma designs, the font token used in the design should be available in Figma. The CSS utility class name directly matches the token name by prefixing it with \`u-font-\`.

**Note**: In Figma, token names may appear differently in the Typography section. For example, the \`body-l\` token might be displayed as "Body Large", "Large", or "Body Large/Large". The underlying token name will match the CSS class name format.

For example:
- If the design uses the \`body-l-link\` token (may appear as "Body Large Link" in Figma) → use the \`.u-font-body-l-link\` class
- If the design uses the \`heading-m\` token (may appear as "Heading Medium" in Figma) → use the \`.u-font-heading-m\` class
- If the design uses the \`caption-strong\` token (may appear as "Caption Strong" in Figma) → use the \`.u-font-caption-strong\` class

Simply take the token name from Figma and add the \`u-font-\` prefix to get the corresponding CSS class.

### If You Don't Have Designs

If you don't have access to designs, you have two options:

1. **Use the most appropriate class** by reading the use cases for each utility class in the tables below. Each class is documented with its intended use case to help you make the right choice.

2. **Reach out to the design system team** for guidance on which typography utility class to use for your specific use case.

## Available Classes

The typography utilities are organized into several categories. This documentation is automatically generated from the CSS source file.

### Headings

Heading utilities are designed for page titles, section headers, and other prominent text. All heading utilities are responsive and adjust font size and line height at the 768px breakpoint.

#### Standard Headings

${generateTable(grouped.heading.standard)}

#### Italic Headings

${generateTable(grouped.heading.italic)}

### Subheadings

Subheadings are used for secondary headings and section titles.

${generateTable(grouped.subheading)}

### Interactive Text

Interactive text utilities are optimized for buttons, links, and other interactive elements.

${generateTable(grouped.interactive)}

### Body Text

Body text utilities are for paragraphs and general content. These utilities include automatic paragraph spacing via \`margin-block-end\`.

${generateTable(grouped.body.standard)}

### Body Link

Body link utilities combine body text styling with link-specific properties like text decoration.

${generateTable(grouped.body.link)}

### Body Strong

Body strong utilities are for bold/emphasized body text.

${generateTable(grouped.body.strong)}

### Body Strong Link

Body strong link utilities combine bold body text styling with link properties.

${generateTable(grouped.body.strongLink)}

### Captions

Caption utilities are for small supporting text, labels, and metadata.

${generateTable(grouped.caption.standard)}

### Caption Link

Caption link utilities combine caption styling with link properties.

${generateTable(grouped.caption.link)}

### Caption Strong

Caption strong utilities are for bold captions.

${generateTable(grouped.caption.strong)}

### Caption Strong Link

Caption strong link utilities combine bold caption styling with link properties.

${generateTable(grouped.caption.strongLink)}

## Usage Examples

### Basic Usage

Simply add the utility class to your HTML element:

\`\`\`html
<h1 class="u-font-heading-xl">Page Title</h1>
<p class="u-font-body-l">This is a paragraph of body text.</p>
\`\`\`

### React Example

\`\`\`jsx
function MyComponent() {
  return (
    <div>
      <h1 className="u-font-heading-xl">Welcome</h1>
      <h2 className="u-font-heading-m">Section Title</h2>
      <p className="u-font-body-l">
        This is a paragraph using the body large utility class.
      </p>
      <a href="#" className="u-font-body-l-link">Learn more</a>
    </div>
  );
}
\`\`\`

### Vue Example

\`\`\`html
<template>
  <div>
    <h1 class="u-font-heading-xl">Welcome</h1>
    <h2 class="u-font-heading-m">Section Title</h2>
    <p class="u-font-body-l">
      This is a paragraph using the body large utility class.
    </p>
    <a href="#" class="u-font-body-l-link">Learn more</a>
  </div>
</template>
\`\`\`

### Combining with Other Classes

You can combine typography utilities with other CSS classes:

\`\`\`html
<div class="card">
  <h2 class="u-font-heading-m card-title">Card Title</h2>
  <p class="u-font-body-s card-description">Card description text.</p>
</div>
\`\`\`

### Responsive Behavior

Heading and subheading utilities automatically adjust at the 768px breakpoint:

\`\`\`html
<!-- This heading will be smaller on mobile and larger on desktop -->
<h1 class="u-font-heading-xl">Responsive Heading</h1>
\`\`\`

The utility classes handle the responsive behavior automatically, so you don't need to write additional media queries.

## What Each Utility Class Applies

Each typography utility class applies a complete set of typography properties:

- **\`font-family\`**: Uses the appropriate design token font family ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family))
- **\`font-weight\`**: Applies the correct font weight from design tokens ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight))
- **\`font-size\`**: Sets the font size (responsive for headings/subheadings) ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size))
- **\`line-height\`**: Applies the appropriate line height for readability ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))
- **\`font-style\`**: Applied for italic variants ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style))
- **\`text-decoration\`**: Applied for link variants ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration))
- **\`margin-block-end\`**: Applied for body and caption variants to provide paragraph spacing ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end))

## Troubleshooting

### Utilities Not Working

If the typography utilities aren't applying:

1. Ensure you've imported the typography CSS file: \`@justeattakeaway/pie-css/dist/helpers/typography.css\`
2. Verify the base \`@justeattakeaway/pie-css\` package is imported (required for design tokens)
3. Check that your build process is including the CSS file
4. Inspect the element in browser dev tools to see if classes are being applied

### Font Not Displaying

If fonts aren't displaying correctly:

1. Ensure you've set up the JETSansDigital font as described in the [Typography setup guide](?path=/docs/introduction-typography--docs)
2. Check that font files are loading correctly
3. Verify font-face declarations are correct

---
*This documentation is automatically generated from the CSS source file. Last updated: ${new Date().toISOString().split('T')[0]}*
`;
}

/**
 * Main function
 */
function main () {
    try {
        // Read CSS file
        if (!fs.existsSync(CSS_FILE_PATH)) {
            // eslint-disable-next-line no-console
            console.error(`Error: CSS file not found at ${CSS_FILE_PATH}`);
            process.exit(1);
        }

        const cssContent = fs.readFileSync(CSS_FILE_PATH, 'utf8');

        // Parse CSS and extract classes
        const classes = parseCSSFile(cssContent);

        if (classes.length === 0) {
            // eslint-disable-next-line no-console
            console.error('Error: No utility classes found in CSS file');
            process.exit(1);
        }

        // eslint-disable-next-line no-console
        console.log(`Found ${classes.length} utility classes`);

        // Generate MDX content
        const mdxContent = generateMDXContent(classes);

        // Ensure output directory exists
        const outputDir = path.dirname(OUTPUT_FILE_PATH);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Write MDX file
        fs.writeFileSync(OUTPUT_FILE_PATH, mdxContent, 'utf8');

        // eslint-disable-next-line no-console
        console.log(`✓ Successfully generated ${OUTPUT_FILE_PATH}`);
        // eslint-disable-next-line no-console
        console.log(`  - Documented ${classes.length} utility classes`);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error generating typography documentation:', error);
        process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { parseCSSFile, categorizeClass, generateMDXContent };
