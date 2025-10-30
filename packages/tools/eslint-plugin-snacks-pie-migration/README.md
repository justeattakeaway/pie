# @justeattakeaway/eslint-plugin-snacks-pie-migration

This plugin helps developers to identify deprecated Snacks components and provides suggestions of replacement PIE components

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@justeattakeaway/eslint-plugin-snacks-pie-migration`:

```sh
npm install @justeattakeaway/eslint-plugin-snacks-pie-migration --save-dev
```

## Usage

- In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `@justeattakeaway/eslint-plugin-snacks-pie-migration` and add `snacks-pie-migration` to the `plugins` key
- Then configure the rules you want to use under the `rules` key

```js
import { defineConfig } from "eslint/config";
import snacksPieMigration from "@justeattakeaway/eslint-plugin-snacks-pie-migration";

export default defineConfig([
    {
        plugins: {
            snacksPieMigration
        },
        rules: {
            "snacks-pie-migration/deprecated-components": "error"
        }
    }
]);
```

### Usage with deprecated configuration file formats
You can also use the plugin with [deprecated configuration file formats](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) such as `.eslintrc.js`.

```js
module.exports = {
    plugins: [
        '@justeattakeaway/snacks-pie-migration'
    ],
    rules: {
        '@justeattakeaway/snacks-pie-migration/deprecated-components': 'error',
    },
};
```

## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


