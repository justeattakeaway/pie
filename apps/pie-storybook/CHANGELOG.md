# Changelog

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
