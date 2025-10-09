# @justeattakeaway/pie-lottie-player

## 0.2.7

### Patch Changes

- Updated dependencies []:
  - @justeattakeaway/pie-webc-core@3.0.0

## 0.2.6

### Patch Changes

- Updated dependencies [[`6d7157b`](https://github.com/justeattakeaway/pie/commit/6d7157b6a2fb54f8136427c76220e5beaeee8575), [`e68681a`](https://github.com/justeattakeaway/pie/commit/e68681ac1b3242e88240a65446164522d048c26e)]:
  - @justeattakeaway/pie-webc-core@2.0.0

## 0.2.5

### Patch Changes

- Updated dependencies [[`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229), [`afd39cf`](https://github.com/justeattakeaway/pie/commit/afd39cfd880f10fad92c2e2d8023dace26110229)]:
  - @justeattakeaway/pie-webc-core@1.1.0

## 0.2.4

### Patch Changes

- [Changed] - Add consistent git info and storybook url to package.json file ([#2443](https://github.com/justeattakeaway/pie/pull/2443)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.2.3

### Patch Changes

- [Fixed] display props for web components top level element ([#2403](https://github.com/justeattakeaway/pie/pull/2403)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.2.2

### Patch Changes

- [Changed] - Updated component readme to include documentation ([#2385](https://github.com/justeattakeaway/pie/pull/2385)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.2.1

### Patch Changes

- Updated dependencies [[`8866307`](https://github.com/justeattakeaway/pie/commit/8866307deed67e698088e731bb87e5e6db45f0e3)]:
  - @justeattakeaway/pie-webc-core@1.0.0

## 0.2.0

### Minor Changes

- [Changed] - Use lit customElement decorator ([#2286](https://github.com/justeattakeaway/pie/pull/2286)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`07b8fca`](https://github.com/justeattakeaway/pie/commit/07b8fca26662f794e8e5f6137b1ee7c7f755f6b0)]:
  - @justeattakeaway/pie-webc-core@0.26.0

## 0.1.1

### Patch Changes

- [Changed] - use a centralised TS declaration file for common duplicated declares ([#2303](https://github.com/justeattakeaway/pie/pull/2303)) by [@jamieomaguire](https://github.com/jamieomaguire)

- Updated dependencies [[`edb0490`](https://github.com/justeattakeaway/pie/commit/edb049031b49a1d8a752c93db4cb164aa90eed3e)]:
  - @justeattakeaway/pie-webc-core@0.25.1

## 0.1.0

### Minor Changes

- [Changed] - Add a v property to all components using vite to bake the version number into the code ([#2301](https://github.com/justeattakeaway/pie/pull/2301)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`87e902f`](https://github.com/justeattakeaway/pie/commit/87e902f4995af214770200e430eaec2bad7d21b3)]:
  - @justeattakeaway/pie-webc-core@0.25.0

## 0.0.5

### Patch Changes

- [Changed] - Update prop definitions to align with conventions ([#2000](https://github.com/justeattakeaway/pie/pull/2000)) by [@xander-marjoram](https://github.com/xander-marjoram)

  - Use component props interface for all prop type definitions (e.g., `CardProps['href']` instead of just `string`).
    - Don't use `?` when declaring props, this comes from the interface anyway.
  - If the prop has a default value, use that from `defaultProps`, and let TS infer the type.
  - Make sure all uses of `@property()` have a `type`.
  - `@state` properties should be private and prefixed with an underscore.
  - Use `!` when a `@query` property is guaranteed to exist, reducing the complexity of the code.

## 0.0.4

### Patch Changes

- [Fixed] - Imports to align with new linting rule ([#1622](https://github.com/justeattakeaway/pie/pull/1622)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Empty lines at the start of some files

- Updated dependencies [[`efb35af66`](https://github.com/justeattakeaway/pie/commit/efb35af6604ca86d0b39ec01421a376050698edf)]:
  - @justeattakeaway/pie-webc-core@0.24.2

## 0.0.3

### Patch Changes

- Updated dependencies [[`b14535438`](https://github.com/justeattakeaway/pie/commit/b14535438da533aeb9a5520c2a239203dafb0c9a)]:
  - @justeattakeaway/pie-webc-core@0.24.1

## 0.0.2

### Patch Changes

- [Fixed] - autoplay prop behaviour ([#1845](https://github.com/justeattakeaway/pie/pull/1845)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.0.1

### Patch Changes

- [Added] - Component for playing Lottie animation files ([#1763](https://github.com/justeattakeaway/pie/pull/1763)) by [@fernandofranca](https://github.com/fernandofranca)
