# @justeattakeaway/pie-code-connect

Figma Code Connect templates, configuration files, and utility functions for PIE web components and icons.

**Note**: This package is not intended to be consumed. It provides internal tooling for generating and publishing Code Connect mappings to Figma.

## Overview

This package automates the creation of Figma Code Connect templates that link Figma component designs to their corresponding code implementations. It includes:

- **Template files** - Batch code templates for components (web components and React variants) and icons
- **Configuration files** - Metadata and publish configurations for different component families
- **Build scripts** - Node.js tooling that processes template files and generates production-ready Code Connect files
- **Reusable utility functions** - Helpers for reading Figma instance properties, rendering component props, and generating import statements

## Scripts

### Build

Generate production Code Connect files from source templates:

```bash
yarn build:web    # Generate web component templates
yarn build:react  # Generate React component templates
```

The build process:
1. Reads source `*.figma.batch.js` template files from the root directory
2. Inlines local `require()` calls from utility files
3. Substitutes environment variables (e.g., `FRAMEWORK`, `COMPONENT_PREFIX`)
4. Writes the processed output to the `dist/` directory

**Environment variables:**
- `FRAMEWORK` - Set to `'web'` or `'react'` to control template output format
- `COMPONENT_PREFIX` - (Optional) Filter template files by prefix. For example, `COMPONENT_PREFIX=pie-icons` will only process files starting with `pie-icons`

### Publish

Build and publish Code Connect mappings to Figma:

```bash
yarn publish-components:web     # Publish web component mappings
yarn publish-components:react   # Publish React component mappings
yarn publish-icons:web          # Publish web icon mappings
yarn publish-icons:react        # Publish React icon mappings
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

const componentNameHtml = figma.batch.id;
const componentNameReact = figma.batch.name;
const componentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentNameHtml;
const getInstanceProp = createGetInstanceProp(figma);

// Map Figma instance properties to component props
const size = getInstanceProp('getEnum', 'Size', {
    Large: 'large',
    Medium: 'medium',
    Small: 'small',
}) || 'medium';

// Build the template
const template = `<${componentName}
    size="${size}"
>
    Your content here
</${componentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentNameHtml, componentNameReact)],
    id: componentNameHtml,
};
```

**Important note about templates**

The code provided in the template files will literally run inside Figma UI, therefore any dependency other than the figma package will not be resolved, what leads to a crash.

We go around this limitation by inlining code. It means that we can import code, so far it is limited to one level deep and external dependencies should not be used.

### 2. Update component metadata

Add an entry to `components.figma.batch.json` with:

- `templateFile` - Path to the built (not source) template file in the `dist/` directory (e.g., `"dist/pie-{component-name}.figma.batch.js"`)
- `components` - Array of component metadata objects, each containing:
  - `name` - React component name (e.g., `'PieButton'`)
  - `id` - Kebab-case component ID (e.g., `'pie-button'`)
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
      "name": "PieMyComponent",
      "id": "pie-my-component",
      "source": "https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-my-component/src/index.ts",
      "url": "https://www.figma.com/design/.../node-id=123-456"
    }
  ]
}
```

### 3. Build and publish

```bash
yarn publish-components:web
yarn publish-components:react
```

## Adding New Icons

Icons are managed similarly to components but with a key difference: there's no need to create a template file, only adding more data to the `icons.figma.batch.json` file.

### 1. Update icons metadata

Add entries to `icons.figma.batch.json` for each icon:

```json
{
  "name": "Archive",
  "id": "archive",
  "source": "./packages/tools/pie-icons/src/index.js",
  "url": "https://www.figma.com/design/.../node-id=15777-535"
}
```

### 2. Publish icons

```bash
yarn publish-icons:web
yarn publish-icons:react
```

## Template File Structure

A template file (`*.figma.batch.js`) is a Node.js CommonJS module that defines how to generate code for a Figma component.

### Available properties

- `figma.batch.id` - Kebab-case component ID from the batch configuration
- `figma.batch.name` - Display name from the batch configuration
- `figma.selectedInstance` - The Figma component instance currently being processed
- `process.env.FRAMEWORK` - The target framework (`'web'` or `'react'`)

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

#### `renderProp(propName, value, defaultValue)`

Renders a component prop in web or React syntax.

It automatically omits the prop if its value matches the default.

### Example: Complete template

```javascript
const figma = require('figma');
const createGetInstanceProp = require('./utils/get-instance-prop.js');
const renderProp = require('./utils/render-prop.js');
const getImportStatement = require('./utils/get-import-statement.js');
const trimEmptyLines = require('./utils/trim-empty-lines.js');

const componentNameHtml = figma.batch.id;
const componentNameReact = figma.batch.name;
const componentName = process.env.FRAMEWORK === 'react' ? componentNameReact : componentNameHtml;
const getInstanceProp = createGetInstanceProp(figma);

// PROP MAPPING
const isDisabled = getInstanceProp('getBoolean', 'Disabled');
const buttonText = getInstanceProp(['Button'], 'getString', 'Label') || 'Click';

// TEMPLATE RENDERING
const template = `<${componentName}
    ${renderProp('disabled', isDisabled, false)}
>
    ${buttonText}
</${componentName}>`;

export default {
    example: figma.code`${trimEmptyLines(template)}`,
    imports: [getImportStatement(componentNameHtml, componentNameReact)],
    id: componentNameHtml,
};
```

## Publishing Code Connect changes

These are the steps to to publish Code Connect mappings in local development environment:

1. **Have or set up a Personal Access Token:**

From the file browser (the tab with a "home" icon), click the account menu in the top-left corner and select "Settings".
Select the "Security" tab.
Scroll to the "Personal access tokens" section, then click "Generate" new token.

The token should have the following permissions:
- `file_code_connect:write`
- `file_content:read permissions`

Copy it and set the `FIGMA_ACCESS_TOKEN` env var with its value.

```bash
# .env, .zshenv or similar
export FIGMA_ACCESS_TOKEN=...
```

2. **Publish:**

Ensure the FIGMA_ACCESS_TOKEN env var is readable before publishing for the first time.

```bash
yarn publish-icons:web
yarn publish-icons:react
yarn publish-components:web
yarn publish-components:react
```

The Figma CLI will read the batch metadata, process each template, and publish the mappings to the specified Figma file and components.
