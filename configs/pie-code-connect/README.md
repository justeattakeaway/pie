# @justeattakeaway/pie-code-connect

Figma Code Connect templates, configuration files, and utility functions for PIE web components and icons.

**Note**: This package is not intended to be consumed. It provides internal tooling for generating and publishing Code Connect mappings to Figma.

## Overview

This package automates the creation of Figma Code Connect templates that link Figma component designs to their corresponding code implementations. It includes:

- **Template files** - Batch code templates for components (web components, React, and Vue variants) and icons
- **Configuration files** - Metadata and publish configurations for different component families
- **Build scripts** - Node.js tooling that processes template files and generates production-ready Code Connect files
- **Reusable utility functions** - Helpers for reading Figma instance properties, rendering component props, and generating import statements

## Scripts

### Build

Generate production Code Connect files from source templates:

```bash
yarn build:web    # Generate web component templates
yarn build:react  # Generate React component templates
yarn build:vue    # Generate Vue component templates
```

The build process:
1. Reads source `*.figma.batch.js` template files from the root directory (optionally filtered by `COMPONENT_PREFIX`)
2. Inlines local `require()` calls from utility files
3. Substitutes `process.env` references (e.g., `process.env.FRAMEWORK`) with their literal values
4. Writes the processed output to the `dist/` directory

### Publish

Build and publish Code Connect mappings to Figma:

```bash
yarn publish-components:web     # Publish web component mappings
yarn publish-components:react   # Publish React component mappings
yarn publish-components:vue     # Publish Vue component mappings
yarn publish-components:all     # Publish component mappings for all frameworks

yarn publish-icons:web          # Publish web icon mappings
yarn publish-icons:react        # Publish React icon mappings
yarn publish-icons:vue          # Publish Vue icon mappings
yarn publish-icons:all          # Publish icon mappings for all frameworks

yarn publish:all                # Publish all component and icon mappings for all frameworks
```

These commands build the templates, then use the Figma CLI to publish them using the corresponding configuration file.

## Adding New Components

To add a new component to the Code Connect mappings:

### 1. Create a template file

Create a new file named `pie-{component-name}.figma.batch.js` in the root directory. This file should:

- Import utility functions from the `utils/` directory (see example below)
- Export a default object with:
  - `example` - A Figma code template (wrapped in `figma.code\`...\``)
  - `imports` - An array of import statements for the component
  - `id` - The kebab-case component ID (e.g., `'pie-button'`)

**Example template structure:**

```javascript
const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const trimEmptyLines = require('./utils/trim-empty-lines.js');

const { componentName, componentNameReact } = figma.batch;
const selectedComponentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentName;
const getInstanceProp = createGetInstanceProp(figma);

// PROP MAPPING
const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
}) || 'medium';
const isDisabled = getInstanceProp('getBoolean', 'Disabled');
const buttonText = getInstanceProp(['Button'], 'getString', 'Label') || 'Click';

// TEMPLATE RENDERING
const template = `<${selectedComponentName}
    ${renderProp('size', size, 'medium')}
    ${renderProp('disabled', isDisabled, false)}
>
    ${buttonText}
</${selectedComponentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentName, componentNameReact)],
    id: componentName,
};
```

**Important note about templates**

The code provided in the template files will literally run inside Figma UI, therefore any dependency other than the figma package will not be resolved, what leads to a crash.

We go around this limitation by inlining code. It means that we can import code, so far it is limited to one level deep and external dependencies should not be used.

### 2. Update component metadata

Add an entry to `components.figma.batch.json` with:

- `templateFile` - Path to the built (not source) template file in the `dist/` directory (e.g., `"dist/pie-{component-name}.figma.batch.js"`)
- `components` - Array of component metadata objects, each containing:
  - `componentName` - Kebab-case component name (e.g., `'pie-button'`)
  - `componentNameReact` - e.g., `'PieButton'`
  - `source` - GitHub source URL to the component's entry point
  - `url` - Figma design URL (the node where the component is located)
  - Optional custom properties for complex template logic (e.g. Components with multiple component sets and diverging props)

It's common to have multiple Figma component sets related to a single component template. If that is the case, provide another object to the components array, pointing to the url of each Figma component set (see PieModal settings).

**Example:**

```json
{
  "templateFile": "dist/pie-my-component.figma.batch.js",
  "components": [
    {
      "componentName": "pie-my-component",
      "componentNameReact": "PieMyComponent",
      "source": "https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-my-component/src/index.ts",
      "url": "https://www.figma.com/design/.../node-id=123-456"
    }
  ]
}
```

### 3. Build and publish

```bash
yarn publish-components:all
```

## Adding New Icons

Before adding or updating any icons settings, ensure the SVG files are present in `packages/tools/pie-icons/src/assets`.

Icons are managed similarly to components but with a key difference: there's no need to create a template file, only adding new data to the respective `batch.json` file, when needed.

There are four categories of icons, each with its own `batch.json` configuration file:
- `icons-standard.figma.batch.json`
- `icons-social.figma.batch.json`
- `icons-payment.figma.batch.json`
- `icons-flags.figma.batch.json`

### Standard and social icons

These icons require updating their respective `batch.json` file. Each icon must be present in the `components` array:

```json
{
  "baseName": "icon-app-order",
  "source": "https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons/src/index.js",
  "url": "https://www.figma.com/design/k7gPJ4MZRUj4nlZK2hL0Op/-Core--Icons--PIE-3-?node-id=18-468"
}
```

- `baseName` - the icon name in lower kebab case
- `source` - does not need to be updated
- `url` - the icon Figma component set URL

### Payment and flags icons

These icons work differently because the Figma components are structured differently - each category has a single Figma component set, so their `batch.json` files do not need to be updated.

The only requirement is that any new icon file is added to `packages/tools/pie-icons/src/assets/payment` or `packages/tools/pie-icons/src/assets/flags`. The file names are used as base names for these icons.

## Publishing icons

```bash
yarn publish-icons:all
```

## Template File Structure

A template file (`*.figma.batch.js`) is a Node.js CommonJS module that defines how to generate code for a Figma component.

### Available properties

- `process.env.FRAMEWORK` - The target framework (`'web'`, `'react'`, or `'vue'`), this is determined by env var set on each of the build scripts
- `figma.selectedInstance` - The Figma component instance currently being processed
- `figma.batch.baseName` - Kebab-case component name from the batch configuration (e.g. `'pie-modal'`)

Any additional custom properties defined on a component in the batch configuration (e.g. `isSubtle` on PieModal) are also available under `figma.batch`.

### Utility functions

#### `getInstanceProp(pathOrMethod, methodOrFirstArg, ...rest)`

Reads a property value from the selected Figma instance or a nested child instance. This utility function simplifies retrieving nested component instances prop values.

##### Signatures:
- `getInstanceProp(method, propName, ...args)` - Calls a method on the root instance
- `getInstanceProp(path, method, propName, ...args)` - Traverses a path of nested instances, then calls a method

##### Available methods:

These can be the same Figma Code Connect API methods described in https://developers.figma.com/docs/code-connect/template-api/#methods:

- `getEnum(propName, mapping)` - Maps a variant property to a code value
- `getString(propName)` - Reads a text property
- `getBoolean(propName)` - Reads a boolean property
- `getPropertyValue(propName)` - Reads a raw property value

The main difference between the returned value from the original API and this, is that it returns `null` if the property doesn't exist or the instance cannot be found, instead of an error object.

This approach aims to bring convenience, rather than requiring to figure out each time if the returned value is an error or actual value.

#### `getSlotContent(slotName)`

Retrieves the connected instances for a named slot on the selected Figma instance and returns their rendered template examples as an array.

##### Parameters:
- `slotName` - The name of the slot as defined in the Figma component (e.g. `'Card content'`)

##### Returns:
An array of rendered template examples from each connected instance. Pass the result directly to `figma.code`.

#### `renderProp(propName, value, defaultValue)`

Renders a component prop in web or React syntax.

It automatically omits the prop if its value matches the default.

## Publishing Code Connect changes

These are the steps to publish Code Connect mappings in local development environment:

1. **Have or set up a Personal Access Token:**

From the file browser (the tab with a "home" icon), click the account menu in the top-left corner and select "Settings".
Select the "Security" tab.
Scroll to the "Personal access tokens" section, then click "Generate" new token.

The token should have the following permissions:
- `file_code_connect:write`
- `file_content:read`

Copy it and set the `FIGMA_ACCESS_TOKEN` env var with its value.

```bash
# .env, .zshenv or similar
export FIGMA_ACCESS_TOKEN=...
```

2. **Publish:**

Ensure the FIGMA_ACCESS_TOKEN env var is readable before publishing for the first time.

```bash
yarn publish:all
```

Or publish components and icons separately:

```bash
yarn publish-components:all
yarn publish-icons:all
```

The Figma CLI will read the batch metadata, process each template, and publish the mappings to the specified Figma file and components.
