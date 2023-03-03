# Changelog

## 0.5.1

### Patch Changes

- [Added] README content for `yarn watch` script ([#233](https://github.com/justeattakeaway/pie/pull/233)) by [@LTurns](https://github.com/LTurns)

- Updated dependencies [[`85a75085`](https://github.com/justeattakeaway/pie/commit/85a75085d1b0a30d962c89e91c23944d0e99b8b1)]:
  - @justeattakeaway/pie-button@0.6.1

## 0.5.0

### Minor Changes

- [Added] - state styling to button (focus/hover/active/disabled) ([#234](https://github.com/justeattakeaway/pie/pull/234)) by [@raoufswe](https://github.com/raoufswe)

### Patch Changes

- Updated dependencies [[`fab1233e`](https://github.com/justeattakeaway/pie/commit/fab1233efd061033a52db4fc43f1cdde4e37e06f)]:
  - @justeattakeaway/pie-button@0.6.0

## 0.4.2

### Patch Changes

- [Fixed] - minor typo in package.json ([#226](https://github.com/justeattakeaway/pie/pull/226)) by [@LTurns](https://github.com/LTurns)

- Updated dependencies [[`76797a73`](https://github.com/justeattakeaway/pie/commit/76797a735617c262ef50ad6f6a486f37c8b9dc2f)]:
  - @justeattakeaway/pie-button@0.5.1

## 0.4.1

### Patch Changes

- Downgrade storybook version to fix build error ([#193](https://github.com/justeattakeaway/pie/pull/193)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.4.0

### Minor Changes

- [Changed] - Bring button styles into the component ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Update table in pie-button story and use latest storybook version ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - Size property to pie-button component ([#178](https://github.com/justeattakeaway/pie/pull/178)) by [@xander-marjoram](https://github.com/xander-marjoram)

### Patch Changes

- Updated dependencies [[`2a1eaa35`](https://github.com/justeattakeaway/pie/commit/2a1eaa35c6d027d419c99c6cddba72eabab19689), [`2a1eaa35`](https://github.com/justeattakeaway/pie/commit/2a1eaa35c6d027d419c99c6cddba72eabab19689), [`2a1eaa35`](https://github.com/justeattakeaway/pie/commit/2a1eaa35c6d027d419c99c6cddba72eabab19689)]:
  - @justeattakeaway/pie-button@0.5.0

## 0.3.0

### Minor Changes

- [Changed] - Updated component interface for `pie-button` and use hard coded property values in select controls ([#171](https://github.com/justeattakeaway/pie/pull/171)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d), [`a0e4f52d`](https://github.com/justeattakeaway/pie/commit/a0e4f52d52370e45f2952d751499bd61082c6e5d)]:
  - @justeattakeaway/pie-button@0.4.0

## 0.2.0

### Minor Changes

- Set up gh-pages deployments and PR previews using github actions ([#167](https://github.com/justeattakeaway/pie/pull/167)) by [@siggerzz](https://github.com/siggerzz)

- Modified the following `package.json` scripts: ([#167](https://github.com/justeattakeaway/pie/pull/167)) by [@siggerzz](https://github.com/siggerzz)

  ```json
      "dev": "storybook dev -p 6006",
      "build": "storybook build --output-dir dist",
      "serve": "serve --no-request-logging dist"
  ```

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v0.1.0

_January 23, 2023_

### Added

- `pie-storybook` workspace
- Storybook with Web Components setup
- Sample `pie-button` story
