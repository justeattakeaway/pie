# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v1.45.0
------------------------------
*January 24, 2023*

### Added
- Elevation page - Overview tab 


v1.44.0
------------------------------
*January 24, 2023*

### Added
- `markdown-it-attrs` to support opening markdown links in a new tab


v1.43.1
------------------------------
*January 23, 2023*

### Fixed
- Spacing alias item height on desktop
- Token names to correct casing
- token table margin top


v1.43.0
------------------------------
*January 23, 2023*

### Added
- Design Tokens - updates and maintenance foundations page


v1.42.1
------------------------------
*January 20, 2023*

### Changed
- Punctuation in Radius Global and Alias copy from `:` to `.`


v1.42.0
------------------------------
*January 20, 2023*

### Added
- Design Tokens Overview page


v1.41.0
------------------------------
*January 20, 2023*

### Added
- Typography Page - Code section

### Changed
- prism to include support for Shell snippets
- chromedriver to 109.0.0


v1.40.0
------------------------------
*January 18, 2023*

### Changed
- token specific logic out of `tokensTable/index.js` to separate files


v1.39.0
------------------------------
*January 18, 2023*

### Added
- Spacing alias tokens content
- High Contrast colour tokens to global tokens

### Changed
- `tokenTable` display names to handle high contrast names

### Updated
- `pie-design-tokens` from `3.2.0` to `3.5.0`


v1.38.0
------------------------------
*January 18, 2023*

### Added
-   Alias tokens to radius page


v1.37.0
------------------------------
*January 17, 2023*

### Fixed
- Heading font size resolved for large and narrow devices.
- Divider missing for main section heading.


v1.36.0
------------------------------
*January 17, 2023*

### Added
- List out the typography global tokens on the global page, and group them as per the Figma designs.


v1.35.0
------------------------------
*January 17, 2023*

### Added
- Typography alias tokens on the alias page, and group them as per the Figma designs
- A normalization layer to pie design tokens to group font alias tokens into wide/narrow
- DisplayName logic to the token metadata


v1.34.0
------------------------------
*January 16, 2023*

### Added
-   Radius page for global design tokens 

### Changed
-   Tokens metadata for radius global design tokens 


v1.33.1
------------------------------
*January 12, 2023*

### Added
- Spacing heading and copy.


v1.33.0
------------------------------
*January 11, 2023*

### Added
- global design tokens to spacing page


v1.32.0
------------------------------
*January 11, 2023*

### Added
- copy to Iconography library page
- New `iconList` shortcode to render icons

### Changed
- `pieIconsSvg` filter to return all icons or icons by name


v1.31.0
------------------------------
*January 10, 2023*

### Added
- Prism syntax highlighting.


v1.30.0
------------------------------
*January 9, 2023*

### Added
- Iconography page folder and overview page content
- Iconography page assets (not all SVGs have been optimised because we are likely going to update images soon with properly optimised ones)
- New `list` shortcode to allow render 'pill' and 'ordered' lists

### Changed
- Notification shortcode to render markdown
- Markdown filter to render inline markdown


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
- Allow image captions in the `contentPageImage` shortcode to contain markdown (will transform it into HTML).

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