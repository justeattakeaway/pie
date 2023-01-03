# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v1.29.0
------------------------------
*January 3, 2023*

### Added
- Typography page folder and overview page content
- Scaffolding for the typography token and code pages (no content yet)
- Typography page assets (not all SVGs have been optimised because we are likely going to update images soon with properly optimised ones)
- New `deindentHTML` shortcode utility function to allow us to use proper indentation when writing shortcodes without causing markdown rendering issues

### Changed
- Add multiple image support to the `contentPageImage` shortcode for pages that require swapping images based on screen size. I.e. 1 image for wide, another for narrow.

### Removed
- `codesandbox` and `storybook` example shortcodes


v1.28.0
------------------------------
*December 19, 2022*

### Added
- Radius overview page
- Radius tabs
- svgs for radius pages
- prefetch for `home-hero` and `coming-soon` images


v1.27.0
------------------------------
*December 19, 2022*
### Changed
- Commented out GTM script until we have a privacy policy and cookie banner in place


v1.26.0
------------------------------
*December 14, 2022*

### Added
- Background image to hero section of content pages and home page
- Home page image

### Changed
- Increased small screen styling media query from `narrowMid` to `mid` to fix awkward tablet styling


v1.25.0
------------------------------
*December 2, 2022*

### Added
- Added new test related package.json scripts.
- Add Jest test to compare actual PIE routes to `expected-routes.snapshot.json`.
- Added WebDriverIO system test to test PIE routes.


v1.24.0
------------------------------
*November 29, 2022*

### Added

- `tokenTable` shortcode to display design tokens as list
- design tokens to colour pages


v1.23.0
------------------------------
*November 29, 2022*

### Added
- GTM script for production builds


v1.22.0
------------------------------
*November 24, 2022*

### Added
- Basic WebDriverIO test framework with a navigation test.


v1.21.1
------------------------------
*November 24, 2022*

### Changed
- Use new product-orange image on colour page


v1.21.0
------------------------------
*November 21, 2022*

### Fixed
- Unwanted horizontal page scrolling caused by left margin on page tabs
- Overlap/conflict between page tags and page content toggles caused by z-index 


v1.20.0
------------------------------
*November 17, 2022*

### Added
- Toggled page content layouts which allow a user to switch between two content variants on a single page (i.e. dark theme and light theme alias tokens).
- A markdown rendering quirk to `README.md`
- Documentation around reusable markdown conventions in `README.md`
- New JS module to handle content toggling and keeping the URL slug in sync
- Styling for the new `toggle` component
- directory level data files in the colour folder to reduce front matter duplication

### Changed
- Moved colour tokens pages into a `tokens` subdirectory for better organisation


v1.19.0
------------------------------
*November 8, 2022*

### Added
- JS folder added to assets
- new JS folder passes through to dist folder
- Eslint and linting scripts

### Changed
- `scripts.njk` now loads JS modules from assets folder rather than having JS written directly in it

### Fixed
- Eslint errors across all JS files


v1.18.0
------------------------------
*November 1, 2022*

### Added
- `eleventy-plugin-rev` to hash CSS

### Changed
- Re-structure yarn scripts for sass watching and compilation
- Clear the previously compiled css in `/dist` when running `yarn dev` command to correctly reload on SCSS changes when serving
- Use Eleventy plugins to compile SCSS to CSS (`eleventy-sass`, `eleventy-plugin-rev` and `eleventy-plugin-clean`)

### Removed
- Old sass and post-css yarn scripts


v1.17.0
------------------------------
*October 26, 2022*

### Added
- coming soon styled graphic/page to show on unfinished pages

### Changed
- extract the page tabs to their own template - `page-tabs.njk`
- conditionally show page tabs only if a `navKey` front matter value is present
- add conditional to `page-layout` to show coming-soon if no page content exists

### Removed
- placeholder content from empty pages


v1.16.2
------------------------------
*September 22, 2022*

### Changed
- Use lists rather than captions for some colour images

### Removed
- figcaption lists (not needed)


v1.16.1
------------------------------
*September 22, 2022*

### Added
- CNAME file to allow domain settings to persist between deployments


v1.16.0
------------------------------
*September 22, 2022*

### Removed
- unused `deploy.yml` file
- `/pie/` eleventy folder prefix


v1.15.0
------------------------------
*September 22, 2022*

### Fixed
- Styling for tabs alignment.
- zindex issue on background.
- Linting error.

v1.14.0
------------------------------
*September 12, 2022*

### Added
- Styling for tabs.
- Tabs markup to layout file.


v1.13.0
------------------------------
*September 06, 2022*

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



v1.12.1
------------------------------
*September 02, 2022*

### Removed
- Moved most dev dependencies to project root


v1.12.0
------------------------------
*September 01, 2022*

### Added
- `cssnano` for minification and `postcss-cli` & `postcss` for autoprefixing.

### Removed
- `scss.js` (previous way we were prefixing and compiling css).


v1.11.0
------------------------------
*August 31, 2022*

### Fixed
- css watch and build tasks running when making changes.


v1.10.0
------------------------------
*August 30, 2022*

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


v1.9.0
------------------------------
*August 3, 2022*

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


v1.8.1
------------------------------
*July 28, 2022*

### Added
- Example codesandbox shortcode that embeds a CodeSandbox component onto the page


v1.8.0
------------------------------
*July 28, 2022*

### Added
- Shortcode plumbing
- Example shortcode that embeds a Storybook component onto the page

### Changed
- Tidied up module exports for `./_11ty` files
- Removed placeholder background colour from site
- Set the markdown file renderer to Nunjucks


v1.7.0
------------------------------
*July 28, 2022*

### Added
- Linting script commands.


v1.6.0
------------------------------
*July 27, 2022*

### Added
- Autoprefixer and PostCSS integration into SCSS compiler


v1.5.0
------------------------------
*July 26, 2022*

### Added
- `SCSS` support
- Custom file extension handling plumbing in `.eleventy.js` file


### Changed
- Tidied up 11ty project structure


v1.4.0
------------------------------
*July 22, 2022*

### Added
- PIE Icons support via a custom filter


v1.3.0
------------------------------
*July 22, 2022*

### Added
- Basic pages
- Basic nav that categorises pages


v1.2.0
------------------------------
*July 20, 2022*

### Added
- Browserslist config to `package.json` extending our Fozzie config


v1.1.0
------------------------------
*July 18, 2022*

### Added
- Page layout template
- Statically generated example pages created from markdown files


### Removed
- `react` and `react-dom` dependencies


v1.0.0
------------------------------
*June 15, 2022*

### Added
- Initial Files
