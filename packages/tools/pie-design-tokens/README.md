# @justeat/pie-design-tokens
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-design-tokens) | [NPM](https://www.npmjs.com/package/@justeat/pie-design-tokens)

<p>
  <a href="https://www.npmjs.com/@justeat/pie-design-tokens">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeat/pie-design-tokens.svg">
  </a>
</p>

## How to contribute:

Build the project:

```console
yarn build --filter=@justeat/pie-design-tokens
```

If you need to add, change or remove tokens the changes should be done in `pie-design-tokens.jsonc` file, where all the tokens are stored. To verify that the changes took effect, build the project and check the compiled files in the dist folder.

Each change should also be replicated in `metadata/tokensMetadata.json` file.

Update the output snapshots and run the tests to verify any update:

```console
yarn test:output --filter=@justeat/pie-design-tokens -- -u
yarn test --filter=@justeat/pie-design-tokens
```

Each change needs to be accompanied by a changeset, which handles both the changelog entry and the version bump:

```console
yarn changeset
```

Do not bump the version in `package.json` by hand. Dependants pin the tokens version exactly, so a manual bump makes them resolve the published package from npm instead of this workspace, silently and without any error.

If your change touches the tokens structure, compile scripts in the build folder might need to be updated to make sure that the tokens are compiled as expected.


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
