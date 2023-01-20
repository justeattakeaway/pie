# Changelog

## 1.43.0

### Minor Changes

- [#19](https://github.com/siggerzz/pie/pull/19) [`9123491`](https://github.com/siggerzz/pie/commit/9123491aa0359790a45dc6918c54b71e121678a5) Thanks [@siggerzz](https://github.com/siggerzz)! - Made package private so it's not published to npm

## 1.43.0-beta.0

### Minor Changes

- [#19](https://github.com/siggerzz/pie/pull/19) [`9123491`](https://github.com/siggerzz/pie/commit/9123491aa0359790a45dc6918c54b71e121678a5) Thanks [@siggerzz](https://github.com/siggerzz)! - Made package private so it's not published to npm

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## v1.42.1

_January 20, 2023_

### Changed

- Punctuation in Radius Global and Alias copy from `:` to `.`

## v1.42.0

_January 20, 2023_

### Added

- Design Tokens Overview page

## v1.41.0

_January 20, 2023_

### Added

- Typography Page - Code section

### Changed

- prism to include support for Shell snippets
- chromedriver to 109.0.0

## v1.40.0

_January 18, 2023_

### Changed

- token specific logic out of `tokensTable/index.js` to separate files

## v1.39.0

_January 18, 2023_

### Added

- Spacing alias tokens content
- High Contrast colour tokens to global tokens

### Changed

- `tokenTable` display names to handle high contrast names

### Updated

- `pie-design-tokens` from `3.2.0` to `3.5.0`

## v1.38.0

_January 18, 2023_

### Added

- Alias tokens to radius page

## v1.37.0

_January 17, 2023_

### Fixed

- Heading font size resolved for large and narrow devices.
- Divider missing for main section heading.

## v1.36.0

_January 17, 2023_

### Added

- List out the typography global tokens on the global page, and group them as per the Figma designs.

## v1.35.0

_January 17, 2023_

### Added

- Typography alias tokens on the alias page, and group them as per the Figma designs
- A normalization layer to pie design tokens to group font alias tokens into wide/narrow
- DisplayName logic to the token metadata

## v1.34.0

_January 16, 2023_

### Added

- Radius page for global design tokens

### Changed

- Tokens metadata for radius global design tokens

## v1.33.1

_January 12, 2023_

### Added

- Spacing heading and copy.

## v1.33.0

_January 11, 2023_

### Added

- global design tokens to spacing page

## v1.32.0

_January 11, 2023_

### Added

- copy to Iconography library page
- New `iconList` shortcode to render icons

### Changed

- `pieIconsSvg` filter to return all icons or icons by name

## v1.31.0

_January 10, 2023_

### Added

- Prism syntax highlighting.

## v1.30.0

_January 9, 2023_

### Added

- Iconography page folder and overview page content
- Iconography page assets (not all SVGs have been optimised because we are likely going to update images soon with properly optimised ones)
- New `list` shortcode to allow render 'pill' and 'ordered' lists

### Changed

- Notification shortcode to render markdown
- Markdown filter to render inline markdown

## v1.29.0

_January 3, 2023_

### Added

- Typography page folder and overview page content
- Scaffolding for the typography token and code pages (no content yet)
- Typography page assets (not all SVGs have been optimised because we are likely going to update images soon with properly optimised ones)
- New `deindentHTML` shortcode utility function to allow us to use proper indentation when writing shortcodes without causing markdown rendering issues

### Changed

- Add multiple image support to the `contentPageImage` shortcode for pages that require swapping images based on screen size. I.e. 1 image for wide, another for narrow.
- Allow image captions in the `contentPageImage` shortcode to contain markdown (will transform it into HTML).

### Removed

- `codesandbox` and `storybook` example shortcodes

## v1.28.0

_December 19, 2022_

### Added

- Radius overview page
- Radius tabs
- svgs for radius pages
- prefetch for `home-hero` and `coming-soon` images

## v1.27.0

_December 19, 2022_

### Changed

- Commented out GTM script until we have a privacy policy and cookie banner in place

## v1.26.0

_December 14, 2022_

### Added

- Background image to hero section of content pages and home page
- Home page image

### Changed

- Increased small screen styling media query from `narrowMid` to `mid` to fix awkward tablet styling

## v1.25.0

_December 2, 2022_

### Added

- Added new test related package.json scripts.
- Add Jest test to compare actual PIE routes to `expected-routes.snapshot.json`.
- Added WebDriverIO system test to test PIE routes.

## v1.24.0

_November 29, 2022_

### Added

- `tokenTable` shortcode to display design tokens as list
- design tokens to colour pages

## v1.23.0

_November 29, 2022_

### Added

- GTM script for production builds

## v1.22.0

_November 24, 2022_

### Added

- Basic WebDriverIO test framework with a navigation test.

## v1.21.1

_November 24, 2022_

### Changed

- Use new product-orange image on colour page

## v1.21.0

_November 21, 2022_

### Fixed

- Unwanted horizontal page scrolling caused by left margin on page tabs
- Overlap/conflict between page tags and page content toggles caused by z-index

## v1.20.0

_November 17, 2022_

### Added

- Toggled page content layouts which allow a user to switch between two content variants on a single page (i.e. dark theme and light theme alias tokens).
- A markdown rendering quirk to `README.md`
- Documentation around reusable markdown conventions in `README.md`
- New JS module to handle content toggling and keeping the URL slug in sync
- Styling for the new `toggle` component
- directory level data files in the colour folder to reduce front matter duplication

### Changed

- Moved colour tokens pages into a `tokens` subdirectory for better organisation

## v1.19.0

_November 8, 2022_

### Added

- JS folder added to assets
- new JS folder passes through to dist folder
- Eslint and linting scripts

### Changed

- `scripts.njk` now loads JS modules from assets folder rather than having JS written directly in it

### Fixed

- Eslint errors across all JS files

## v1.18.0

_November 1, 2022_

### Added

- `eleventy-plugin-rev` to hash CSS

### Changed

- Re-structure yarn scripts for sass watching and compilation
- Clear the previously compiled css in `/dist` when running `yarn dev` command to correctly reload on SCSS changes when serving
- Use Eleventy plugins to compile SCSS to CSS (`eleventy-sass`, `eleventy-plugin-rev` and `eleventy-plugin-clean`)

### Removed

- Old sass and post-css yarn scripts

## v1.17.0

_October 26, 2022_

### Added

- coming soon styled graphic/page to show on unfinished pages

### Changed

- extract the page tabs to their own template - `page-tabs.njk`
- conditionally show page tabs only if a `navKey` front matter value is present
- add conditional to `page-layout` to show coming-soon if no page content exists

### Removed

- placeholder content from empty pages

## v1.16.2

_September 22, 2022_

### Changed

- Use lists rather than captions for some colour images

### Removed

- figcaption lists (not needed)

## v1.16.1

_September 22, 2022_

### Added

- CNAME file to allow domain settings to persist between deployments

## v1.16.0

_September 22, 2022_

### Removed

- unused `deploy.yml` file
- `/pie/` eleventy folder prefix

## v1.15.0

_September 22, 2022_

### Fixed

- Styling for tabs alignment.
- zindex issue on background.
- Linting error.

## v1.14.0

_September 12, 2022_

### Added

- Styling for tabs.
- Tabs markup to layout file.

## v1.13.0

_September 06, 2022_

### Added

- Styling for the content pages
- A shortcode, `contentPageImage` to add captioned / non-captioned images to `markdown` files in line with the designs
- A `notification` shortcode for adding them to `markdown` file content
- Bold and Extrabold `JETSansDigital` fonts

### Changed

- Use module-based functions to register all plugins, shortcodes and filters in `.eleventy.js`
- Use `markdown` file for index page rather than `HTML`

### Removed

- Placeholder react and vue component pages

## v1.12.1

_September 02, 2022_

### Removed

- Moved most dev dependencies to project root

## v1.12.0

_September 01, 2022_

### Added

- `cssnano` for minification and `postcss-cli` & `postcss` for autoprefixing.

### Removed

- `scss.js` (previous way we were prefixing and compiling css).

## v1.11.0

_August 31, 2022_

### Fixed

- css watch and build tasks running when making changes.

## v1.10.0

_August 30, 2022_

### Added

- Base JET styles via Fozzie
- Basic SCSS architecture to start the project off
- Navigation styling for large and small screens
- Base page styling
- Base footer styling
- New 11ty filter to assist with accessing PIE design token colour values whilst in nunjucks template files

### Fixed

- Corrected header logo alignment and sizing

### Removed

- Placeholder home page content

## v1.9.0

_August 3, 2022_

### Added

- `@11ty/eleventy-navigation` plugin
- SCSS file for navigation bar
- Markdowns of the main & sub categories to support the ordering of navigation items

### Changed

- Markdown of the pages to adopt `@11ty/eleventy-navigation`
- Display logic of navigation items

### Removed

- Custom collection `allPageCategories`
- Tags in the markdown of the pages

## v1.8.1

_July 28, 2022_

### Added

- Example codesandbox shortcode that embeds a CodeSandbox component onto the page

## v1.8.0

_July 28, 2022_

### Added

- Shortcode plumbing
- Example shortcode that embeds a Storybook component onto the page

### Changed

- Tidied up module exports for `./_11ty` files
- Removed placeholder background colour from site
- Set the markdown file renderer to Nunjucks

## v1.7.0

_July 28, 2022_

### Added

- Linting script commands.

## v1.6.0

_July 27, 2022_

### Added

- Autoprefixer and PostCSS integration into SCSS compiler

## v1.5.0

_July 26, 2022_

### Added

- `SCSS` support
- Custom file extension handling plumbing in `.eleventy.js` file

### Changed

- Tidied up 11ty project structure

## v1.4.0

_July 22, 2022_

### Added

- PIE Icons support via a custom filter

## v1.3.0

_July 22, 2022_

### Added

- Basic pages
- Basic nav that categorises pages

## v1.2.0

_July 20, 2022_

### Added

- Browserslist config to `package.json` extending our Fozzie config

## v1.1.0

_July 18, 2022_

### Added

- Page layout template
- Statically generated example pages created from markdown files

### Removed

- `react` and `react-dom` dependencies

## v1.0.0

_June 15, 2022_

### Added

- Initial Files
