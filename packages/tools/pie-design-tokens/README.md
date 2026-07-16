<div align="center">
<h1>pie-design-tokens</h1>

<p>Pie Design Tokens repo – our JET global design token package.</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Fpie-design-tokens.svg)](https://badge.fury.io/js/%40justeat%2Fpie-design-tokens)

## How to contribute:

### Pre-flight

Setup environment:

- yarn @ ^1.0.0
- node @ ^16.0.0

Install the project:

```console
yarn install
```

Build the project:

```console
yarn build
```

If you need to add, change or remove tokens the changes should be done in `pie-design-tokens.jsonc` file, where all the tokens are stored. To verify that the changes took effect, build the project and check the compiled files in the dist folder.

Each change needs to be accompanied by manual changelog entry in CHANGELOG.md and package version bump in package.json. The package follows [semantic versioning](https://docs.npmjs.com/about-semantic-versioning).

Each change should also be replicated in `metadata/tokensMetadata.json` file.

`yarn test` and `yarn test:output -u` have to be run to verify any update.

If your change touches the tokens structure, compile scripts in the build folder might need to be updated to make sure that the tokens are compiled as expected.

### Pull requests

When raising a merge request in the pie-design-tokens repo, please follow these guidelines.

#### PR title
PR titles should start with the package version number. To mark the ticket as wip, please raise it as a Draft PR on Github.

#### PR Descriptions
You can copy the changelog entry into the PR description.

#### Things to do before requesting PR reviews

- Make sure that the build ran successfully and all the PR checks passed.
- Add all the details for your change to the PR description and Changelog. Use previous PRs in the repo as an example.

## Dark Mode Token Support

The PIE Design Tokens now provide dark mode support through a set of html data attributes and media query rules.

### How Dark Mode Tokens Work

The compiled CSS and SCSS files include two sets of dark mode rules:

1. **Data Attribute Rule** (Primary) - Triggered by HTML `data-color-mode="dark"` data attribute.
2. **Media Query Fallback** - Applied when there is no `data-color-mode="dark"` data attribute present, system preferences are set to dark mode and a `data-darkmode-system` data attribute is present on the html element.

### CSS Selector Logic

The generated CSS uses the following selector hierarchy:

```css
/* Primary: Explicit dark mode activation */
html[data-color-mode="dark"] {
    --dt-color-background-default: var(--dt-color-truffle-100);
    /* ... other dark mode tokens ... */
}

/* Fallback: System preference with no explicit override */
@media (prefers-color-scheme: dark) {
    html[data-darkmode-system]:not([data-color-mode]) {
        --dt-color-background-default: var(--dt-color-truffle-100);
        /* ... other dark mode tokens ... */
    }
}
```

### Implementation Examples

#### Manual Dark Mode Control
```html
<!-- Force dark mode -->
<html data-color-mode="dark">
```

#### Automatic System Preference
```html
<!-- Respect system preference, no manual override -->
<html data-darkmode-system>
```

### Token Categories Affected

Dark mode tokens are available for:
- **Colors**: Background, border, content, interactive states
- **Elevation**: Box shadows with dark theme variants
- **Gradients**

### Browser Support

- **Data Attributes**: Supported in all modern browsers
- **Media Queries**: `prefers-color-scheme` supported in all modern browsers (IE not supported)
- **Fallback**: Light theme is the default when no conditions are met

## Publishing to npm

Publishing to npm is handled automatically via GitHub Actions, as defined in the `.github/workflows/build.yml` file.

- **Manual Trigger:** Publishing is performed when the workflow is triggered manually using `workflow_dispatch` in GitHub Actions.
- **Branch Selection:** When manually triggering the publish workflow, make sure to select the branch you want to publish from (e.g., `master`).

- **Note:** Regular pushes and pull requests do not trigger publishing. Only a manual workflow dispatch will publish the package to npm.

For more details, see the `build.yml` file in the `.github/workflows` directory.
