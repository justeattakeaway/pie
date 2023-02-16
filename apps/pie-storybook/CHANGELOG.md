# Changelog

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
