# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
