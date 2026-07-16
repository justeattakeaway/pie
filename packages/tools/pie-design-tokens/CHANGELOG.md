# Changelog

## v7.14.1
*July 09, 2026*
------------------------------

### Fixed
- Added missing metadata entries for global radius tokens `radius-20` and `radius-24`.

### Changed
- Replaced the Volta toolchain pin with a Mise configuration.

## v7.14.0
*July 06, 2026*
------------------------------

### Added
- Added `color-turmeric-75` global token.

### Changed
- Updated `color-turmeric-80` global token value to `#5D4918`.
- Updated `support-brand-05-tonal` (Dark) alias token to `color-turmeric-80`.
- Updated `support-brand-05-subtle` (Dark) alias token to `color-turmeric-75`.

## v7.13.1
*June 09, 2026*
------------------------------

### Changed
- Updated Subheading S Narrow line height from 24px to 20px

## v7.13.0
*June 03, 2026*
------------------------------

### Added
- New global radius tokens:
    - `radius-20`
    - `radius-24`

- New alias radius tokens:
    - `rounded-f`
    - `rounded-g`

## v7.12.0
*April 8, 2026*
------------------------------

### Added
- Added `color-thirdparty-morrisons-green-05` and `color-thirdparty-morrisons-green-90` global tokens.
- Added `color-thirdparty-morrisons-container-primary` alias token (light/dark theme support).


## v7.11.1
*February 25, 2026*
------------------------------

### Fixed
- Updated the deprecated tokens metadata to reference tokens directly.


## v7.11.0
*February 23, 2026*
------------------------------

### Added
- New caption italic tokens
- New alias token for container base dark:
  - `web-container-base-dark`
  - `ios-container-base-dark`
  - `android-container-base-dark`

## v7.10.2
*January 20, 2026*
------------------------------

### Added
- New content alias tokens:
    - `content-interactive-subdued-solid`

## v7.10.1 (Colour)
------------------------------
*December 2, 2025*

### Added
- Missing color tokens to the `high-contrast` and `high-contrast-dark` themes:
    - `border-neutral`
    - `content-brand-solid`
    - `content-dark-solid`
    - `content-default-solid`
    - `content-disabled-solid`
    - `content-error-solid`
    - `content-interactive-brand-solid`
    - `content-interactive-dark-solid`
    - `content-interactive-error-solid`
    - `content-interactive-inverse-solid`
    - `content-interactive-light-solid`
    - `content-interactive-primary-solid`
    - `content-interactive-secondary-solid`
    - `content-inverse-solid`
    - `content-light-solid`
    - `content-placeholder-solid`
    - `content-positive-solid`
    - `content-subdued-solid`
    - `skeleton-shimmer-01`
    - `skeleton-shimmer-02`
    - `skeleton-shimmer-03`
    - `support-brand-03-tonal`
    - `support-brand-04-tonal`
    - `support-brand-05-tonal`
    - `support-brand-06-tonal`
    - `support-brand-08-tonal`
    - `support-brand-tonal`
    - `thirdparty-android-background-dashboard`
    - `thirdparty-apple-container-primary`
    - `thirdparty-apple-container-secondary`
    - `thirdparty-apple-content-primary`
    - `thirdparty-apple-content-secondary`
    - `thirdparty-coop-container-primary`
    - `thirdparty-facebook-container-primary`
    - `thirdparty-facebook-container-secondary`
    - `thirdparty-facebook-content-primary`
    - `thirdparty-facebook-content-secondary`
    - `thirdparty-google-border-primary`
    - `thirdparty-google-border-secondary`
    - `thirdparty-google-container-primary`
    - `thirdparty-google-container-secondary`
    - `thirdparty-google-content-primary`
    - `thirdparty-google-content-primary-subdued`
    - `thirdparty-google-content-secondary`
    - `thirdparty-google-content-secondary-subdued`
    - `thirdparty-microsoft-border-primary`
    - `thirdparty-microsoft-border-secondary`
    - `thirdparty-microsoft-container-primary`
    - `thirdparty-microsoft-container-secondary`
    - `thirdparty-microsoft-content-primary`
    - `thirdparty-microsoft-content-secondary`
    - `web-container-base`
    - `web-container-neutral`
    - `web-container-prominent`
    - `ios-container-base`
    - `ios-container-neutral`
    - `ios-container-prominent`
    - `android-container-base`
    - `android-container-neutral`
    - `android-container-prominent`

## v7.10.0 (Typography)
------------------------------
*November 17, 2025*

### Changed
#### Line height
line-height tokens have been reduced by 4px (e.g., a line-height of 24 is now 20). This may introduce visual differences, so designer review and involvement are recommended when updating apps.

To facilitate this change, the following new global tokens have been added:
  - `line-height-16`
  - `line-height-20`
  - `line-height-24`
  - `line-height-28`
  - `line-height-32`
  - `line-height-36`
  - `line-height-52`

- In addition to the above, the following alias tokens were updated:
  - `heading-xs-weight`
  - `heading-s-weight`
  - `heading-m-weight`
  - `heading-l-weight`
  - `heading-xl-weight`
  - `heading-xxl-weight`
  - `interactive-s-weight`
  - `interactive-l-weight`

#### `tokens.json`
The structure of font alias tokens in the JSON output has changed to provide separate `size` and `line-height` properties instead of nested objects:

**Previous structure:**
```json
"heading-xs": {
  "size--wide": {
    "font-size": "16",
    "line-height": "20"
  },
  "size--narrow": {
    "font-size": "14",
    "line-height": "20"
  },
  "family": "JetSansDigital",
  "weight": "Black"
}
```

**New structure:**
```json
"heading-xs": {
  "size--wide": "16",
  "line-height--wide": "20",
  "size--narrow": "14",
  "line-height--narrow": "20",
  "family": "JetSansDigital",
  "weight": "Black"
}
```

If you consume the `tokens.json` file directly, you will need to update your code to access `size--wide` and `line-height--wide` as separate properties rather than nested `font-size` and `line-height` properties within `size--wide`.


#### Color
- Updated global color tokens:
  - `latte-10`
  - `latte-20`
  - `cupcake-10`
  - `cupcake-20`

### Added
- New alias color token
  - `interactive-dark`

### Deprecated
(Web only) - The following tokens are marked as deprecated and will be removed in the upcoming major releases. Please refer to the mapping table below to find their updated equivalents.
  - `font-size-12-line-height`
  - `font-size-14-line-height`
  - `font-size-16-line-height`
  - `font-size-20-line-height`
  - `font-size-24-line-height`
  - `font-size-28-line-height`
  - `font-size-32-line-height`
  - `font-size-48-line-height`

#### Token mapping:
(Web only) The table below provides a 1:1 mapping between the old and new line-height tokens to help with the migration process:

| Deprecated Token | New Token |
| --- | --- |
| `font-size-12-line-height` | `font-line-height-16` |
| `font-size-14-line-height` | `font-line-height-20` |
| `font-size-16-line-height` | `font-line-height-20` |
| `font-size-20-line-height` | `font-line-height-24` |
| `font-size-24-line-height` | `font-line-height-28` |
| `font-size-28-line-height` | `font-line-height-32` |
| `font-size-32-line-height` | `font-line-height-36` |
| `font-size-48-line-height` | `font-line-height-52` |

### Migration Guide:
- As typography tokens still maintain the same structure, no changes are required for most consumers as the new values should propogate automatically. However, it’s recommended to update the pie component library used in your app to the latest version or reach out to the design system team for more information if you maintain one, as several core components have been refined to better align with the updated line-height values. You should also involve your design and QA team to verify that these changes don’t introduce unintended visual differences in your app.

## v7.9.0 (Typography)
------------------------------
*November 4, 2025*

### Changed
The font family token for italic heading tokens now points to `family-primary` (JetSansDigital) instead of `font-alternative` (JETSansVF2). Please contact the Design System team to get the updated JET Sans font file. We’ve unified the JET fonts into a single optimized file that includes all variants, replacing the previous separate primary and alternative files.

The affected tokens are:
- heading-xs-italic
- heading-s-italic
- heading-m-italic
- heading-l-italic
- heading-xl-italic
- heading-xxl-italic

### Deprecated
The following tokens are marked as deprecated and will be removed in the upcoming major releases. Please refer to the mapping table below to find their updated equivalents.

- Alias tokens:
  - `font-alternative`

#### Token mapping:
The table below provides a 1:1 mapping between the old and new font tokens to help with the migration process:

| Old global | New global |
| --- | --- |
| `font-alternative` | `family-global` |


## v7.8.2
------------------------------
*October 15, 2025*

### Added
- New global tokens:
  - `aubergine-90`
  - `aubergine-100`

### Changed
- `yellow-30`
- `brand-06-subtle` (dark theme)
- `brand-06-tonal` (dark theme)


## v7.8.1
------------------------------
*October 8, 2025*

### Added
- Added `heading-xs-italic` font token


## v7.8.0
------------------------------
*October 3, 2025*

### Changed
- Removes CSS tokens file without system preferences conditions. Instead new data attributes support was introduced: `data-color-mode="dark"` and `data-darkmode-system`. Media query now applies only for the `html[data-darkmode-system]:not([data-color-mode])` rule. This change is unrelated to the brand refresh, and only applies to web.


## v7.7.1 (Blur)
------------------------------
*October 2, 2025*

### Changed
- Updated the metadata file to include blur tokens
- Blur tokens should not provide alternate modes as light and dark theme tokens are the same


## v7.7.0 (Blur)
------------------------------
*September 25, 2025*

### Added
- New global tokens:
  - `blur-uniform-18`
  - `blur-uniform-25`
  - `blur-uniform-48`

- New alias tokens:
  - `blur-base`
  - `blur-neutral`
  - `blur-prominent`
  - `ios-container-base`
  - `ios-container-neutral`
  - `ios-container-prominent`
  - `android-container-base`
  - `android-container-neutral`
  - `android-container-prominent`
  - `web-container-base`
  - `web-container-neutral`
  - `web-container-prominent`


## v7.6.2
------------------------------
*September 30, 2025*

### Changed
- High contrast and high contrast dark tokens removed from css and scss outputs. This change is unrelated to the brand refresh, and only applies to web.


## v7.6.1 (Colour - Content Opacity)
------------------------------
*September 15, 2025*

### Changed
- Updated the following tokens to ensure better accessibility:
  - `content-disabled`
  - `content-placeholder`


## v7.6.0 (Colour - Content Opacity)
------------------------------
*September 8, 2025*

### Added
- New content alias tokens:
  - `content-default-solid`
  - `content-subdued-solid`
  - `content-light-solid`
  - `content-inverse-solid`
  - `content-dark-solid`
  - `content-disabled-solid`
  - `content-placeholder-solid`
  - `content-brand-solid`
  - `content-error-solid`
  - `content-positive-solid`
  - `content-interactive-light-solid`
  - `content-interactive-primary-solid`
  - `content-interactive-secondary-solid`
  - `content-interactive-inverse-solid`
  - `content-interactive-dark-solid`
  - `content-interactive-brand-solid`
  - `content-interactive-error-solid`

### Changed
- Updated content tokens with new opacity values:
  - `content-default`
  - `content-subdued`
  - `content-light`
  - `content-inverse`
  - `content-dark`
  - `content-disabled`
  - `content-placeholder`
  - `content-interactive-light`
  - `content-interactive-primary`
  - `content-interactive-secondary`
  - `content-interactive-inverse`
  - `content-interactive-dark`
  - `content-interactive-subdued`

### Deprecated
The following tokens are marked as deprecated and will be removed in the upcoming major releases. Please refer to the mapping table below to find their updated equivalents.

- Alias tokens:
  - `content-interactive-tertiary`
  - `content-interactive-brand`
  - `content-interactive-error`
  - `content-brand`
  - `content-error`
  - `content-positive`

#### Token mapping:
The table below provides a 1:1 mapping between the old and new content color tokens to help with the migration process:

| Old alias | New alias |
| --- | --- |
| `content-interactive-tertiary` | `content-interactive-secondary` |
| `content-interactive-brand` | `content-interactive-brand-solid` |
| `content-interactive-error` | `content-interactive-error-solid` |
| `content-brand` | `content-brand-solid` |
| `content-error` | `content-error-solid` |
| `content-positive` | `content-positive-solid` |

### Component migration guide:
The following components have been updated to use the new solid content tokens:

Design log can be found [here](https://docs.google.com/spreadsheets/d/18cyqgOA9FsUsjaPBUxsssNYWqR1fDerwgVCdgVXvXf4/edit?gid=1372682638#gid=1372682638)

| Component | Change Summary |
| --- | --- |
| **Assistive text** | Default text changed to `$content-subdued-solid`, success variant changed to `$content-positive-solid` and error variant changed to `$content-error-solid` |
| **Badge** | Brand variant - Default state, size XL and L only: label changed to `$content-light-solid` (from `$content-inverse`)<br>Brand variant, size M and S stay the same. |
| **Checkbox** | All labels changed to `$content-default-solid` |
| **Data visualisation (Bar charts)** | Labels changed to `$content-default-solid` & `$content-inverse-solid`<br>Secondary labels changed to `$content-subdued-solid` |
| **Divider** | Labels changed to `$content-subdued-solid` for default and `$content-inverse-solid` for inverse |
| **FAB** | Compact & Extended: Brand variant, size L, M and S label and icon changed to `$content-interactive-light-solid`<br>Brand variant, size XS stays the same. |
| **Form label** | Labels and icons changed to `$content-default-solid`<br>Secondary text changed to `$content-subdued-solid` |
| **Map pin** | Brand variant: Label and icon changed to `$content-light-solid` |
| **Map Pin - Cluster** | 01 Orange variant: Numbers changed to `$content-light-solid` |
| **Pagination** (Web) | Default: Wide: Labels changed to `$content-interactive-secondary-solid`<br>Ellipsis changed to `$content-default-solid`<br>Narrow: Label changed to `$content-interactive-secondary-solid`<br>Dropdown: Label changed to `$content-interactive-secondary-solid` |
| **Pagination** (Mobile) | Label changed to `$content-interactive-secondary-solid` |
| **Progress stepper** | Labels changed to `$content-default-solid`<br>Secondary text changed to `$content-subdued-solid` |
| **Radio** | Labels changed to `$content-default-solid` |
| **Scroll bar** | Bar changed to `$content-disabled-solid` |
| **Spinner** | Secondary: `$content-interactive-secondary-solid`<br>Inverse: `$content-inverse-solid`<br>Secondary Dark: `$content-interactive-dark-solid`<br>Inverse light: `$content-light-solid` |
| **Switch** | Labels changed to `$content-default-solid` |
| **Tab** | Selected Label and icon changed to `$content-default-solid`<br>Unselected Label and icon changed to `$content-subdued-solid`<br>Disabled in all variants: Label & icon changed to `$content-disabled-solid` |
| **Avatar (Initials, Icon, Photo)** | Unauthenticated icon: `$content-interactive-secondary-solid`<br>Disabled icon: `$content-disabled-solid` |
| **Breadcrumb (Default only)** | Non-Scrim current page label: `$content-subdued-solid`<br>Scrim current page label: `$content-light-solid` |
| **Button** | Primary: label and icon changed to `$content-interactive-light-solid`<br>Outline: label changed to `$content-interactive-secondary-solid` (icon stays the same)<br>Ghost: label changed to `$content-interactive-secondary-solid` (icon stays the same)<br>Ghost secondary: label and icon changed to `$content-interactive-secondary-solid`<br>Ghost dark: label changed to `$content-interactive-secondary-dark-solid` (icon stays the same)<br>Inverse outline: label changed to `$content-interactive-primary-solid` (icon stays the same)<br>Inverse ghost: label changed to `$content-interactive-primary-solid` (icon stays the same)<br>Inverse ghost light: label changed to `$content-interactive-light-solid` (icon stays the same)<br>Disabled in Ghost, Ghost secondary, Ghost dark, Destructive ghost, Inverse ghost, Inverse ghost light: label and icon changed to `$content-disabled-solid` |
| **Chip** | Outline/Ghost labels and icons: `$content-interactive-secondary-solid`<br>Disabled Ghost: `$content-disabled-solid` |
| **Icon button** | Primary: icon changed to `$content-interactive-light-solid`<br>Ghost secondary: Icon changed to `$content-interactive-secondary-solid`<br>Ghost secondary dark: Icon changed to `$content-interactive-dark-solid`<br>Inverse outline: Icon changed to `$content-interactive-primary-solid`<br>Inverse ghost: Icon changed to `$content-interactive-primary-solid`<br>Inverse ghost light: Icon changed to `$content-interactive-light-solid`<br>Disabled in Ghost, Ghost secondary, Ghost dark, Inverse ghost, Inverse ghost light: Icon changed to `$content-disabled-solid` |
| **Tag & Tag - icon only** | Outline/Ghost labels and icons: `$content-default-solid` |
| **App bar (Apps only)** | All variants without background<br>Title (Label) changed to `$content-default-solid` |


## v7.5.0
------------------------------
*September 3, 2025*

### Added

- Include CSS tokens file without system preferences conditions. This is so applications can just use the `data-darkmode-enabled` attribute as the main condition for darkmode. N.b. This change is unrelated to the brand refresh, and only applies to web CSS variables.

## v7.4.0 (Colour - Brand)
------------------------------
*September 2, 2025*

### Added
- New global tokens:
  - `cupcake-30`
  - `cupcake-80`
  - `cupcake-90`
  - `berry-40`
  - `berry-80`
  - `turmeric-20`
  - `turmeric-40`
  - `turmeric-90`
  - `aubergine-20`
  - `aubergine-70`
  - `latte-20`
  - `latte-80`
  - `latte-90`

- New alias tokens:
  - `support-brand-tonal`
  - `support-brand-03-tonal`
  - `support-brand-04-tonal`
  - `support-brand-05-tonal`
  - `support-brand-06-tonal`
  - `support-brand-08-tonal`

### Changed
- Updated global color tokens:
  - `orange-75`
  - `cupcake-90`
  - `berry-10`
  - `aubergine-10`
  - `latte-10`

- Updated alias tokens:
  - `support-brand-02` (light theme)
  - `support-brand-03-subtle`
  - `support-brand-04`
  - `support-brand-04-subtle`
  - `support-brand-05`
  - `support-brand-05-subtle`
  - `support-brand-06`
  - `support-brand-06-subtle` (light theme)
  - `support-brand-08-subtle`

### Deprecated
The following tokens are marked as deprecated and will be removed in the upcoming major releases. Please refer to the mapping table below to find their updated equivalents.

- Global color tokens:
  - `blue-25`
  - `red-25`
  - `turmeric-5`
  - `turmeric-60`
  - `purple`

#### Token mapping:
The table below provides a 1:1 mapping between the old and new color tokens to help with the migration process:

| Old global | New global |
| --- | --- |
| `blue-25` | `cupcake-30` |
| `red-25` | `berry-40` |
| `turmeric-5` | `turmeric-10` |
| `turmeric-60` | `yellow-75` |
| `purple` | `aubergine-70` |

### Component migration guide:
The following components have been updated to use the new tonal tokens:

| Component | Change Summary |
| --- | --- |
| **Notification** | Updated the feedback variants’ background tokens to use the tonal set. Info → `support-info-tonal`, Positive → `support-positive-tonal`, Warning → `support-warning-tonal`, Error → `support-error-tonal` |


## v7.3.0 (Colour - Truffle and Feedback)
------------------------------
*August 21, 2025*

### Added
- New global color tokens:
  - `truffle-5`
  - `truffle-10`
  - `truffle-20`
  - `truffle-30`
  - `truffle-55`
  - `truffle-65`
  - `truffle-70`
  - `truffle-75`
  - `truffle-80`
  - `truffle-85`
  - `truffle-90`
  - `truffle-100`
  - `red-5`
  - `red-50`
  - `red-100`
  - `blue-5`
  - `blue-75`
  - `blue-80`
  - `yellow-30`
  - `yellow-40`
  - `yellow-75`
  - `yellow-80`
  - `green-5`
  - `green-80`

- New alias tokens:
  - `border-neutral`
  - `support-error-tonal`
  - `support-warning-tonal`
  - `support-positive-tonal`
  - `support-info-tonal`

### Changed
- Updated global color tokens:
  - `red-10`
  - `red-30`
  - `red-90`
  - `blue-10`
  - `blue-30`
  - `blue-90`
  - `yellow-10`
  - `yellow-90`
  - `green-10`
  - `green-30`
  - `green-90`

- Updated alias tokens:
  - `background-default`
  - `background-subtle`
  - `background-dark`
  - `container-default`
  - `container-subtle`
  - `container-strong`
  - `container-dark`
  - `container-inverse`
  - `container-inverse-alternative`
  - `interactive-primary`
  - `interactive-secondary`
  - `interactive-inverse`
  - `interactive-form`
  - `border-default`
  - `border-subtle`
  - `border-strong`
  - `border-inverse`
  - `border-selected`
  - `border-form`
  - `support-neutral`
  - `support-neutral-persistent`
  - `disabled-01`
  - `disabled-01-inverse`
  - `skeleton-01`
  - `skeleton-02`
  - `skeleton-03`
  - `skeleton-shimmer-01`
  - `skeleton-shimmer-02`
  - `skeleton-shimmer-03`
  - `gradient-jetplus-support-01`
  - `support-warning-02`
  - `support-warning-inverse`
  - `support-positive-02`
  - `support-info`
  - `support-info-02`
  - `focus-outer` (light theme)
  - `support-error` (dark theme)
  - `support-warning` (dark theme)
  - `content-error` (dark theme)
  - `content-interactive-error` (dark theme)
  - `content-positive` (dark theme)
  - `content-link-distinct` (dark theme)
  - `background-interactive-error` (dark theme)
  - `interactive-error` (dark theme)

### Deprecated
The following tokens are marked as deprecated and will be removed in the upcoming major releases. Please refer to the mapping table below to find their updated equivalents.

- Global color token:
  - `mozzarella-5`
  - `mozzarella-10`
  - `mozzarella-20`
  - `mozzarella-30`
  - `mozzarella-50`
  - `mozzarella-55`
  - `mozzarella-60`
  - `mozzarella-70`
  - `mozzarella-75`
  - `mozzarella-80`
  - `mozzarella-90`
  - `mozzarella-100`
  - `red-40`
  - `blue-70`

#### Token mapping:
The table below provides a 1:1 mapping between the old and new color tokens to help with the migration process:

| Old global | New global |
| --- | --- |
| `mozzarella-5` | `truffle-5` |
| `mozzarella-10` | `truffle-10` |
| `mozzarella-20` | `truffle-20` |
| `mozzarella-30` | `truffle-30` |
| `mozzarella-50` | `truffle-55` |
| `mozzarella-55` | `truffle-65` |
| `mozzarella-60` | `truffle-65` |
| `mozzarella-70` | `truffle-70` |
| `mozzarella-75` | `truffle-75` |
| `mozzarella-80` | `truffle-80` |
| `mozzarella-90` | `truffle-90` |
| `mozzarella-100` | `truffle-100` |
| `red-40` | `red-50` |
| `blue-70` | `blue` |


## v7.2.1 (Elevation)
------------------------------
*August 1, 2025*

### Fixed
- Updated the deprecated tokens metadata to reference tokens directly.


## v7.2.0 (Elevation)
------------------------------
*July 24, 2025*

### Added
- A new set of global elevation tokens:
  - `box-shadow-a`
  - `box-shadow-b`
  - `box-shadow-c`
  - `box-shadow-d`
  - `box-shadow-e`
  - `box-shadow-f`

- A new set of alias elevation tokens:
  - `elevation-below-10`
  - `elevation-below-20`
  - `elevation-above-20`
  - `elevation-inverse-below-10`
  - `elevation-inverse-below-20`
  - `elevation-inverse-above-20`

### Deprecated
The following tokens are marked as deprecated and will be removed in the upcoming major releases. Please refer to the mapping table below to find their updated equivalents.

- Global elevation tokens:
  - `box-shadow-00`
  - `box-shadow-01`
  - `box-shadow-02`
  - `box-shadow-03`
  - `box-shadow-04`
  - `box-shadow-05`
  - `box-shadow-06`
  - `box-shadow-07`
  - `box-shadow-08`
  - `box-shadow-09`
  - `box-shadow-10`
  - `box-shadow-11`
  - `box-shadow-12`

- Alias tokens:
  - `elevation-01`
  - `elevation-02`
  - `elevation-03`
  - `elevation-04`
  - `elevation-05`
  - `elevation-card`
  - `elevation-inverse-01`
  - `elevation-inverse-02`
  - `elevation-inverse-03`
  - `elevation-inverse-04`
  - `elevation-inverse-05`
  - `elevation-inverse-card`

#### Token mapping:
The table below provides a 1:1 mapping between the old and new elevation tokens to help with the migration process:

| Old global | New global |
| --- | --- |
| `box-shadow-01` | `box-shadow-a` |
| `box-shadow-02` | `box-shadow-a` |
| `box-shadow-03` | `box-shadow-b` |
| `box-shadow-04` | `box-shadow-b` |
| `box-shadow-05` | `box-shadow-c` |
| `box-shadow-06` | `box-shadow-d` |
| `box-shadow-07` | `box-shadow-d` |
| `box-shadow-08` | `box-shadow-e` |
| `box-shadow-09` | `box-shadow-e` |
| `box-shadow-10` | `box-shadow-f` |
| `box-shadow-11` | `box-shadow-a` |
| `box-shadow-12` | `box-shadow-d` |

| Old alias | New alias |
| --- | --- |
| `elevation-01` | `elevation-below-10` |
| `elevation-02` | `elevation-below-10` |
| `elevation-03` | `elevation-below-20` |
| `elevation-04` | `elevation-below-20` |
| `elevation-05` | `elevation-above-20` |
| `elevation-card` | `elevation-below-10` |
| `elevation-inverse-01` | `elevation-inverse-below-10` |
| `elevation-inverse-02` | `elevation-inverse-below-10` |
| `elevation-inverse-03` | `elevation-inverse-below-20` |
| `elevation-inverse-04` | `elevation-inverse-below-20` |
| `elevation-inverse-05` | `elevation-inverse-above-20` |
| `elevation-inverse-card` | `elevation-inverse-below-10` |


v7.1.0
------------------------------
*July 21, 2025*

### Added
- Added `heading-xs` font token


v7.0.3
------------------------------
*July 11, 2025*

### Fixed

- Updated italic font tokens to use the `font-style` property instead of `text-decoration` to identify italic styles.


v7.0.2
------------------------------
*July 8, 2025*

### Fixed
- Updated the `border-decorative-brand` token value to use `$orange-30` instead of `$support-brand-01`.


v7.0.1
------------------------------
*July 7, 2025*

### Fixed
- Updated tokens order to fix an SCSS forward reference issue where the `$color-support-brand-01` token was being used before it was defined.


v7.0.0
------------------------------
*July 4, 2025*

## Breaking changes

### Changed
- Global spacing tokens have been renamed to reflect their value (eg: `spacing-04` means `4px`):
  - `spacing-01` → `spacing-04`
  - `spacing-02` → `spacing-08`
  - `spacing-03` → `spacing-12`
  - `spacing-04` → `spacing-16`
  - `spacing-05` → `spacing-24`
  - `spacing-06` → `spacing-32`
  - `spacing-07` → `spacing-40`
  - `spacing-08` → `spacing-56`
  - `spacing-09` → `spacing-64`
  - `spacing-10` → `spacing-80`

- Global radius tokens have been renamed to reflect their value (eg: `radius-04` means `4px`):
  - `radius-02` → `radius-04`
  - `radius-03` → `radius-08`
  - `radius-04` → `radius-12`
  - `radius-05` → `radius-16`
  - `radius-06` → `radius-round`

- The value of the following color tokens have changed:
  - `aubergine-80`
  - `berry-10`
  - `berry-90`
  - `cupcake-10`
  - `orange-10`
  - `orange-90`
  - `turmeric-05`
  - `turmeric-60`
  - `turmeric-80`
  - `red-10`
  - `blue-10`
  - `green-10`

### Removed
- Alias dark theme colour token:
  - `support-brand-02-subtle`
  - `color-orange-55`
  - `color-tomato-05`

## New additions (Non-Breaking Changes)

### Added
- Global spacing token:
  - `spacing-02`

- Global colour tokens:
  - `aubergine-5`
  - `aubergine-30`
  - `aubergine-75`
  - `berry-20`
  - `berry-70`
  - `cupcake-20`
  - `cupcake-40`
  - `cupcake-70`
  - `cupcake-80`
  - `latte-10`
  - `latte-30`
  - `latte-70`
  - `orange-0`
  - `orange-20`
  - `orange-25`
  - `orange-70`
  - `orange-75`
  - `tomato-5`
  - `tomato-30`
  - `tomato-50`
  - `tomato-90`
  - `tomato-100`
  - `turmeric-10`
  - `turmeric-20`
  - `turmeric-70`
  - `thirdparty-coop-blue-05`
  - `thirdparty-coop-blue-90`

- Global font tokens:
  - `family-alternative`
  - `weight-black`
  - `weight-extrablack`
  - `style-italic`

- Alias spacing token:
  - `a-small`

- Alias colour tokens:
  - `support-brand-07`
  - `support-brand-07-subtle`
  - `support-brand-08`
  - `support-brand-08-subtle`
  - `braze-container-01`
  - `braze-container-03`
  - `braze-container-04`
  - `braze-container-05`
  - `braze-container-08`
  - `thirdparty-coop-container-primary`
  - `border-decorative-brand`

- Alias tokens for italic heading variants:
  - `heading-s-italic`
  - `heading-m-italic`
  - `heading-l-italic`
  - `heading-xl-italic`
  - `heading-xxl-italic`

- Alias tokens for gradient tokens:
  - `jetplus-brand-01`
  - `jetplus-brand-02`
  - `jetplus-brand-03`
  - `gradient-jetplus-support-01`
  - `gradient-jetplus-support-02`
  - `ai-container-default`
  - `ai-border-default`

v7.0.0-beta.19
------------------------------
*July 02 2025*

### Changed
- `thirdparty-google-container-secondary` changed from `color-white` to `white`

v7.0.0-beta.18
------------------------------
*June 30 2025*

### Added
- Global colour token:
  - `thirdparty-coop-blue-05`
  - `thirdparty-coop-blue-90`

- Alias tokens:
  - `thirdparty-coop-container-primary`
  - `border-decorative-brand`

### Changed
- `thirdparty-google-container-primary` changed from `color-white` to `thirdparty-google-grey-100`
- `thirdparty-google-content-primary` changed from `thirdparty-google-grey-100` to `thirdparty-google-grey-30`
- `thirdparty-google-content-primary-subdued` changed from `thirdparty-google-grey-70` to `thirdparty-google-grey-30`
- `thirdparty-google-border-primary` changed from `thirdparty-google-grey-60` to `thirdparty-google-grey-30`
- `thirdparty-google-container-secondary` changed from `thirdparty-google-grey-100` to `color-white`
- `thirdparty-google-content-secondary` changed from `thirdparty-google-grey-30` to `thirdparty-google-grey-100`
- `thirdparty-google-content-secondary-subdued` changed from `thirdparty-google-grey-30` to `thirdparty-google-grey-70`
- `thirdparty-google-border-secondary` changed from `thirdparty-google-grey-30` to `thirdparty-google-grey-60`

v7.0.0-beta.17
------------------------------
*May 12 2025*

### Added
- Global colour token:
  - `cupcake-40`
  - `cupcake-80`
  - `aubergine-5`
  - `aubergine-30`

- Alias tokens for gradient tokens:
  - `ai-container-default`
  - `ai-border-default`


v7.0.0-beta.16
------------------------------
*May 7, 2025*

### Changed
- Renamed `gradient-jetplus-background-01` to `gradient-jetplus-support-01`
- Renamed `gradient-jetplus-background-02` to `gradient-jetplus-support-02`


v7.0.0-beta.15
------------------------------
*May 7, 2025*

### Changed
- Updated the `compileToJson` script to include gradient `angle` and `type` in `tokens.json`


v7.0.0-beta.14
------------------------------
*April 30, 2025*

### Changed
- family-alternative value of `JetSansVF2` updated to `JETSansVF2`


v7.0.0-beta.13
------------------------------
*April 30, 2025*

### Changed
- Refactored gradient token build scripts to explicitly check for category === 'gradient' instead of relying on array structure.


v7.0.0-beta.12
------------------------------
*April 29, 2025*

- Extended the token scripts to support gradient tokens for different platforms

### Added
- Alias tokens for gradient tokens:
  - `jetplus-brand-01`
  - `jetplus-brand-02`
  - `jetplus-brand-03`
  - `jetplus-background-01`
  - `jetplus-background-02`


v7.0.0-beta.11
------------------------------
*April 28, 2025*

### Added
- Alias tokens for italic heading variants:
    - `heading-s-italic`
    - `heading-m-italic`
    - `heading-l-italic`
    - `heading-xl-italic`
    - `heading-xxl-italic`


v7.0.0-beta.10
------------------------------
*April 28, 2025*

### Added
- Global colour token:
    - `orange-0`
    - `orange-25`
    - `orange-70`
    - `tomato-5`
    - `tomato-30`
    - `tomato-50`
    - `tomato-90`
    - `tomato-100`

- Alias colour tokens
  - `support-brand-07` for all the themes
  - `support-brand-07-subtle` for all the themes


v7.0.0-beta.9
------------------------------
*April 23, 2025*

### Added
- Global font token:
    - `family-alternative`
    - `weight-black`
    - `weight-extrablack`
    - `style-italic`


v7.0.0-beta.8
------------------------------
*April 15, 2025*

### Changed
- Alias dark theme colour tokens:
  - `support-brand-02`
  - `support-brand-03-subtle`
  - `support-brand-04-subtle`
  - `support-brand-05-subtle`
  - `support-brand-08-subtle`

### Removed
- Alias dark theme colour tokens:
  - `support-brand-02-subtle`


v7.0.0-beta.7
------------------------------
*March 28, 2025*

### Added
- Global colour token:
  - `aubergine-75`
  - `berry-20`
  - `berry-70`
  - `cupcake-20`
  - `cupcake-70`
  - `latte-10`
  - `latte-30`
  - `latte-70`
  - `orange-20`
  - `orange-75`
  - `turmeric-10`
  - `turmeric-20`
  - `turmeric-70`
  - `support-brand-02-subtle` for dark theme

- Alias colour tokens
  - `support-brand-08` for all the themes
  - `support-brand-08-subtle` for all the themes
  - `braze-container-01` for all the themes
  - `braze-container-03` for all the themes
  - `braze-container-04` for all the themes
  - `braze-container-05` for all the themes
  - `braze-container-08` for all the themes

### Changed
- Global colour token:
  - `aubergine-80`
  - `berry-10`
  - `berry-90`
  - `cupcake-10`
  - `orange-10`
  - `orange-90`
  - `turmeric-05`
  - `turmeric-60`
  - `turmeric-80`
  - `red-10`
  - `blue-10`
  - `green-10`

- Alias colour tokens
  - `support-brand-03-subtle` for dark themes
  - `support-brand-04-subtle` for dark themes
  - `support-brand-05-subtle` for all the themes
  - `support-brand-06-subtle` for dark themes

### Removed
- The following tokens are being deprecated by the Brand team. There is no alternative and any instance will need to be assessed and another brand colour selected where needed. It is likely this tokens were not widely used.

- Global colour token:
  - `$color-orange-55`
  - `$color-tomato-05`
  - `$color-tomato-90`

- Alias colour tokens
  - `$color-support-brand-07`
  - `$color-support-brand-07-subtle`


v7.0.0-beta.6
------------------------------
*March 7, 2025*

- Bringing beta branch in sync with master by pulling in v6.8.2, 6.9.0 & 6.10.0.


v6.10.0
------------------------------
*February 24, 2025*

### Added
- Transparent token.


v6.9.0
------------------------------
*February 10, 2025*

### Changed
- Exported CSS and SCSS files now include new custom properties containing the correct hover/active background colour (black/white) for each interactive state (hover/active, -01/-02, default/dark theme, etc).


v6.8.2
------------------------------
*February 4, 2025*

### Changed
- `compileToCss.js` to reduce repetition and break down some of the large functions, i.e. `parseTokens`


v7.0.0-beta.5
------------------------------
*January 27, 2025*

- Bringing beta branch in sync with master by pulling in v6.7.0 to 6.8.1.
- Added a third party alias for android in-car experience.


v6.8.1
------------------------------
*January 8, 2025*

### Changed
- The order of nesting in css output to ensure a valid outcome.


v6.8.0
------------------------------
*January 2, 2025*

### Changed
- Naming of alias tokens for dark, highcontrast and highcontrast-dark modes to match the default to allow switching.
- Conditionally set the alias token variables based on attributes on the `html` element and `@media` queries.


v6.7.0
------------------------------
*December 17, 2024*

### Changed
- rgb conversion for values with opacity for scss compilation


v7.0.0-beta.4
------------------------------
*November 14, 2024*

Added third party global and alias tokens


v7.0.0-beta.3
------------------------------
*November 7, 2024*

Bringing beta branch in sync with master by pulling in v6.5.0 and 6.6.0


v6.6.0
------------------------------
*October 17, 2024*

### Added
- Global colour token:
  - `mozzarella-55`
- Alias colour tokens
  - `border-form` for all the themes
  - `container-light` for all the themes


v6.5.0
------------------------------
*September 13, 2024*

### Added
- Global breakpoint tokens
- Alias breakpoint tokens


v7.0.0-beta.2
------------------------------
*September 3, 2024*

Bringing beta branch in sync with master by pulling in v6.4.0, 6.3.1 and 6.3.0


v6.4.0
------------------------------
*September 3, 2024*

### Added
- Global colour token:
    - `charcoal-57`
- Alias colour token:
    - `content-placeholder` for all the themes


v6.3.1
------------------------------
*June 24, 2024*

### Changed
- Typo fix for `turmeric-60` global token


v6.3.0
------------------------------
*May 27, 2024*

### Added
- Global Motion tokens:
    - `motion-easing-in` (cubic-bezier(0.8, 0, 1, 1))
    - `motion-easing-out` (cubic-bezier(0, 0, 0.18, 0.99))
    - `motion-easing-persistent-expressive` (cubic-bezier(0.95, 0, 0, 0.95))
    - `motion-easing-persistent-functional` (cubic-bezier(0.45, 0, 0.55, 1))
    - `motion-timing-100` (100ms)
    - `motion-timing-150` (150ms)
    - `motion-timing-200` (200ms)
    - `motion-timing-250` (250ms)
    - `motion-timing-300` (300ms)
    - `motion-timing-350` (350ms)
    -
### Changed
- renamed `support-error-inverse` duplicate to `support-warning-inverse` alias for the dark theme in metadata file


v7.0.0-beta.1
------------------------------
*April 8, 2024*

### Changed
- Global radius tokens have been renamed to reflect their value (eg: `radius-04` means `4px`).


v7.0.0-beta.0
------------------------------
*April 4, 2024*

### Added
- New `02` global spacing token for `2px`.
- New `a-small` alias spacing token.

### Changed
- Global spacing tokens have been renamed to reflect their value (eg: `spacing-04` means `4px`).


v6.2.1
------------------------------
*March 21, 2024*

### Added
- New `red-40` global color token


v6.2.0
------------------------------
*March 21, 2024*

### Added
- New `turmeric-60` global color token
- New `support-warning-inverse` alias token
- New `interactive-error` alias token

### Changed
- Global color token `red-30` to HEX value #F68179
- Alias token `support-error` value for the dark theme is now `$color-red-40`
- Alias token `support-error-inverse` value for the light theme is now `$color-red-40`


v6.1.0
------------------------------
*March 21, 2024*

### Added
- New `skeleton-shimmer-01` alias token
- New `skeleton-shimmer-02` alias token
- New `skeleton-shimmer-03` alias token

### Changed
- `skeleton-02` value for the dark theme is now `$color-mozzarella-75`


v6.0.0
------------------------------
*March 08, 2024*

### Added
- New `support-neutral-persistent` alias token
- New `support-error-inverse` alias token
- New `resting` alias token

### Changed
- Alias `support-error` dark theme value to `$color-red-30`

### Removed
- The global `$font-size-19`, and the alias `$font-interactive-m` being removed as there are similar alternatives, and to avoid similarity. Any instances of `$font-interactive-m` should be replaced with `$font-interactive-l`.


v5.11.0
------------------------------
*March 7, 2024*

### Changed
- `hover-` and `active-` tokens now include a `black` or `white` base colour, only for the compiled JSON.


v5.10.1
------------------------------
*January 30, 2024*

### Changed
- add `$` to `color-border-selected-brand` alias token in metadata file


v5.10.0
------------------------------
*January 30, 2024*

### Added
- New `color-border-selected-brand` alias token


v5.9.0
------------------------------
*November 7, 2023*

### Added
- New `content-dark` alias token


v5.8.2
------------------------------
*September 28, 2023*

### Added
- `focus` tokens for the dark theme to the metadata object


v5.8.1
------------------------------
*September 26, 2023*

### Changed
- `--dt-elevation-box-shadow-11` elevation value.


v5.8.0
------------------------------
*September 25, 2023*

### Added
- New global elevation tokens:
    - `--dt-elevation-box-shadow-11`
    - `--dt-elevation-box-shadow-12`

- New alias elevation tokens:
    - `--dt-elevation-card`
    - `--dt-elevation-inverse-card`
    - `--dt-elevation-dark-card`
    - `--dt-elevation-dark-inverse-card`

- New alias border tokens:
    - `--dt-color-border-selected`
    - `--dt-color-highcontrast-border-selected`
    - `--dt-color-dark-border-selected`
    - `--dt-color-highcontrast-dark-border-selected`

### Changed:
- `--dt-color-overlay`, `--dt-color-highcontrast-overlay`, `--dt-color-dark-overlay`, `--dt-color-highcontrast-dark-overlay` alias colour tokens value updated from `rgb(0,0,0,0.5)` to `rgb(0,0,0,0.55)`


v5.7.0
------------------------------
*August 29, 2023*

### Fixed
- Removed `backdrop` selector from the CSS variable declaration scopes due to Safari 14 compatibility issues.


v5.6.2
------------------------------
*August 25, 2023*

### Fixed
- `container-inverse-alternative` value for the dark theme


v5.6.1
------------------------------
*August 24, 2023*

### Added
- `container-inverse-alternative` to the metadata object


v5.6.0
------------------------------
*August 24, 2023*

### Added
- `container-inverse-alternative`


v5.5.1
------------------------------
*August 16, 2023*

### Added
- `/metadata/tokenCategories.json` file to hold the categories for the design tokens as shown in the PIE docs site.
- `/metadata/tokenMetadata.json` file to hold the metadata for the design tokens. Currently used in the PIE docs site but available for any other consumers too.


v5.5.0
------------------------------
*August 10, 2023*

### Added
- `turmeric-5`

### Fixed
- Update value of `turmeric-80`
- Update global token for alias `support-brand-05-subtle`


v5.4.0
------------------------------
*July 10, 2023*

### Changed
- ESLint config updated to use the `eslint-config-pie` package


v5.3.1
------------------------------
*July 7, 2023*

### Fixed
- Added missing `#` in hexcode for `aubergine-10`


v5.3.0
------------------------------
*June 26, 2023*

### Added
- Global Color tokens:
    - $cupcake-10 (#e7f4f6)
    - $cupcake-90 (#254043)
    - $berry-10 (#ffe7eb)
    - $berry-90 (#622d35)
    - $turmeric-80 (#ffd770)
    - $aubergine-10 (#e7d6e7)
    - $aubergine-80 (#452844)
    - $tomato-5 (#ffd3bf)
    - $tomato-90 (#622b18)

- Alias Color tokens for light, high contrast, dark and high contrast dark themes:
    - $support-brand-03-subtle
    - $support-brand-04-subtle
    - $support-brand-05-subtle
    - $support-brand-06-subtle
    - $support-brand-07-subtle


Note: tokens for High Contrast and High Contrast Dark themes have the same values because they are added as placeholders because these themes are currently not worked on.


v5.2.0
------------------------------
*May 26, 2023*

### Added
- `::backdrop` to the CSS variable declaration scopes (as `::backdrop` does not inherit from `:root`)


v5.1.0
------------------------------
*May 17, 2023*

### Added
- HSL color exports for CSS


v5.0.1
------------------------------
*April 5, 2023*

### Added
- text-decoration tokens that were removed as part of `v5` have been re-added, as are used extensively in our apps currently.


v5.0.0
------------------------------
*March 15, 2023*

### Removed
- `focus` colour alias tokens
- Unused colour tokens:
  - `blue-60`
  - `green-60`
  - `orange-light-hc`
  - `red-30-hc` and `red-60`
  - `external-bta-text` and `external-bta-background`
    - and as a result, `purple-10`
  - `yellow-30`
  - `transparent`
- Unused elevation and typography tokens
  - `box-shadow-00`
    - and its alias, `elevation-00`
  - `letter-spacing-00`
  - `style-underline`
- Font aliases
  - `body-s-link`
  - `body-l-link`
  - `caption-link`
  - `body-strong-s-link`
  - `body-strong-l-link`
  - `caption-strong-link`

### Added
- `focus-inner` and `focus-outer` colour alias tokens
- `color-blue-70` global token

### Changed
- New value of `color-blue-30`
  - `#4996fd` -> `#7aadf6`


v4.3.0
------------------------------
*March 2, 2023*

### Fixed
- rgb conversion for values with opacity for css compilation


v4.2.0
------------------------------
*February 21, 2023*

### Changed
- Font token `family-code` to `PTMono`


v4.1.0
------------------------------
*February 17, 2023*

### Added
- Elevation `dark` alias object and tokens:
  - `00: box-shadow-00`
  - `01: box-shadow-06`
  - `02: box-shadow-07`
  - `03: box-shadow-08`
  - `04: box-shadow-09`
  - `05: box-shadow-10`
  - `inverse-01: box-shadow-01`
  - `inverse-02: box-shadow-02`
  - `inverse-03: box-shadow-03`
  - `inverse-04: box-shadow-04`
  - `inverse-05: box-shadow-05`


v4.0.0-beta.1
------------------------------
*February 3, 2023*

### Added
- New global font-size token: `size-19 { font-size: 19, line-height: 28 }`

### Changed
- Global font-size tokens now named with numbers and formatted as objects:
  - `size-a: 12|16` → `size-12 { font-size: 12, line-height: 16 }`
  - `size-b: 14|20` → `size-14 { font-size: 14, line-height: 20 }`
  - `size-c: 16|24` → `size-16 { font-size: 16, line-height: 24 }`
  - `size-d: 20|28` → `size-20 { font-size: 20, line-height: 28 }`
  - `size-e: 24|32` → `size-24 { font-size: 24, line-height: 32 }`
  - `size-f: 28|36` → `size-28 { font-size: 28, line-height: 36 }`
  - `size-g: 32|40` → `size-32 { font-size: 32, line-height: 40 }`
  - `size-h: 48|56` → `size-48 { font-size: 48, line-height: 56 }`
- Typography alias tokens pointing to these global token values have now also been updated with these new names.


v4.0.0-beta.0
------------------------------
*February 3, 2023*

### Added
- New `$box-shadow-00` global token

### Changed
- elevation token names:
  - `$elevation-06` → `$elevation-inverse-01`
  - `$elevation-07` → `$elevation-inverse-02`
  - `$elevation-08` → `$elevation-inverse-03`
  - `$elevation-09` → `$elevation-inverse-04`
  - `$elevation-10` → `$elevation-inverse-05`


v3.9.0
------------------------------
*February 1, 2023*

### Changed
- global elevation tokens.
- Snapshot tests to align with changes.


v3.8.0
------------------------------
*February 1, 2023*

### Changed
- Align colour tokens with latest design definitions


v3.7.0
------------------------------
*January 19, 2023*

### Changed
- `active-01-light` and `hover-01-light` to `active-02-light` and `hover-02-light`.
- Snapshot tests to align with changes.


v3.6.0
------------------------------
*January 18, 2023*

### Changed
- `support-brand-01` alias colour token value to `$color-orange-30` for `highcontrast` and `highcontrast-dark` themes


v3.5.0
------------------------------
*December 7, 2022*

### Added
- `charcoal-40` global colour token.


v3.4.0
------------------------------
*December 7, 2022*

### Added
- `charcoal-60` global colour token.
- Alias colour token `content-interactive-subdued` added to light and dark themes.


v3.3.0
------------------------------
*December 1, 2022*

### Added
- High contrast global and alias colour tokens
- License file and basic README

### Changed
- Switching to Github Actions from CircleCI

### Removed
- CircleCI config


v3.2.0
------------------------------
*October 21, 2022*

### Changed
- `$color-orange` token updated to #f36805, inline with design update.
- Updated the design-changelog with the last couple of weekly updates


v3.1.0
------------------------------
*September 22, 2022*

### Added
- New alias colour token `skeleton-03` added to light and dark themes.

### Changed
- `skeleton-02` alias updated to reference `mozzarella-70` in dark theme.
- Updating devDependencies.


v3.0.0
------------------------------
*September 21, 2022*

### Changed
- Global tokens relating to paragraph spacing are now more explicitly named:
  - `$paragraph-01` → `$paragraph-spacing-01`
  - `$paragraph-02` → `$paragraph-spacing-02`
  - `$paragraph-03` → `$paragraph-spacing-03`
- Typography alias tokens pointing to these global token values have now also been updated with these new names.
- Design Changelog updated with the latest design language updates.


v2.0.0
------------------------------
*July 25, 2022*

### Added
- `mozzarella` and `charcoal` global colour tokens.
- `hover-01-light`, `hover-01-dark`, `active-01-light`, `active-01-dark` and `disabled-01-inverse` alias tokens for both light and dark themes.
- `content-link-visited-inverse` colour token for dark theme.

### Changed
- `content-link-inverse` from `color-blue` to `color-charcoal-80` for dark theme.
- `content-link-visited` from null to `color-system-purple-10` for dark theme.
- renamed `button` type token keys to `interactive` type tokens.

### Removed
- `grey` global colour tokens replacing them in alias tokens with new `mozzarella` and `charcoal` global colour tokens.

### Breaking changes:
- If you are using grey global colour tokens directly then those values should be checked and updated with appropriate alias colour tokens or in exceptional cases with new `mozzarella` or `charcoal` global colour tokens.
- `button` type token keys now called `interactive` so all the references should be updated.


v1.6.0
------------------------------
*May 16, 2022*

### Added
- CSS Variable generation.
- Unit test coverage.

### Changed
- Extracted shared methods into helpers file.


v1.5.0
------------------------------
*April 21, 2022*

### Added
- `system-purple` and `system-purple-10` global colour tokens.
- `content-link-visited-inverse` alias colour token for light theme.

### Changed
- `content-link-visited` token from `color-grey-50` to `color-system-purple` for light theme.


v1.4.0
------------------------------
*January 14, 2022*

### Added
- Shadow / Elevation tokens.
- Modified `compileToScss.js` methods to fit in with new global shadow structure.
- Tests to cover method `getConvertedShadowsToBoxShadowValues`.


v1.3.0
------------------------------
*November 25, 2021*

### Added
- spacing tokens.
- `color-background-subtle`, `color-content-interactive-error` and `content-link-visited` tokens for both light and dark themes.


v1.2.0
------------------------------
*October 25, 2021*

### Added
- `color-interactive-form` token.

### Changed
- `color-grey-45` from `#b2b0ae` to `#8A8786`.
- `color-divider-inverse` value for light theme from 0.08 to 0.20.
- `color-divider-default` value for dark theme from 0.08 to 0.20.


v1.1.0
------------------------------
*September 20, 2021*

### Added
- Alias colour tokens:
    - `content-interactive-light`

### Changed
- Alias font tokens:
    - subheading `font-weight` from `$font-weight-bold` back to `$font-weight-regular`
    - renamed `font-bodyStrong-l` tokens to `font-body-strong-l`
    - renamed `font-bodyStrong-s` tokens to `font-body-strong-s`
    - renamed `font-captionStrong` tokens to `font-caption-strong-link`
- Global colour tokens:
    - `$color-grey-45` from `#b2aca4` to `#b2b0ae`
- Alias colour tokens:
    - `content-interactive-brand` from `$color-white` to `$color-orange`
    !!!Note: for text/icon colour on the `$color-interactive-brand` background now use `content-interactive-light` token instead of `content-interactive-brand`


v1.0.0
------------------------------
*September 14, 2021*

### Changed
- Structure of the pie-design-tokens.jsonc file to have one jet theme instead of jet and skip themes.
- Global colour tokens:
    - `$color-orange` from `#f36d00` to `#fb6100`
    - `$color-blue-10` from `#edf1fe` to `#ebf6fa`
    - `$color-purple` from `#3b1249` to `#5b3d5b`
    - `$color-yellow` from `#ffb727` to `#f6c243`
    - `$color-grey-10` from `#f9fafb` to `#fcfcfb`
    - `$color-grey-20` from `#f1f2f4` to `#f5f3f1`
    - `$color-grey-30` from `#e2e6e9` to `#efedea`
    - `$color-grey-40` from `#c5ccd3` to `#e6e3de`
    - `$color-grey-45` from `#929faa` to `#b2aca4`
    - `$color-grey-50` from `#5e6b77` to `#425457`
    - `$color-grey` from `#2a3846` to `#313f41`
    - `$color-grey-60` from `#1b252e` to `#2b3639`
    - `$color-grey-70` from `#162028` to `#242e30`
    - `$color-grey-80` from `#111b22` to `#131819`
    - `$color-grey-90` from `#0c151d` to `#0a0c0d`
- Alias colour tokens for light theme:
    - `$color-border-inverse` from `grey` to `grey-50`,
    - `$color-interactive-primary` from `blue` to `grey-70`,
    - `$color-interactive-secondary` from `blue-10` to `grey-20`,
    - `$color-support-neutral` from `grey-20` to `grey-30`,
    - `$color-support-brand` -> `support-brand-01` from `orange` to `orange-30`,
    - `$color-content-default` from `grey` to `grey-70`,
    - `$color-content-interactive-secondary` from `blue` to `grey-70`,
    - `$color-content-interactive-dark` from `blue` to `grey-70`,
    - `$color-content-link` from `blue` to `grey-70`,
- Alias colour tokens for dark theme:
    - `$color-interactive-primary` from `blue` to `white`,
    - `$color-interactive-secondary` from `blue-90` to `grey`,
    - `$color-interactive-inverse` from `blue` to `grey-70`,
    - `$color-support-positive` from `green-30` to `green`,
    - `$color-support-info` from `blue-30` to `blue`,
    - `$color-support-brand` -> `support-brand-01` from `orange` to `orange-30`,
    - `$color-content-interactive-primary` from `white` to `grey-70`,
    - `$color-content-interactive-secondary` from `blue-30` to `white`,
    - `$color-content-interactive-dark` from `white` to `grey-70`,
    - `$color-content-inverse` from `grey` to `grey-70`,
    - `$color-content-link` from `blue-30` to `white`,
    - `$color-skeleton-01` from `grey-80` to `grey`,
    - `$color-skeleton-02` from `grey-60` to `grey-80`
- - Alias type tokens:
    - headings `font-weight` from `$font-weight-bold` to `$font-weight-extrabold`,
    - subheading `font-weight` from `$font-weight-regular` to `$font-weight-bold`,
    - `button-s-font-size` from `$font-size-b` to `$font-size-c`,
    - `button-m-font-size` from `$font-size-c` to `$font-size-d`

### Added
- Global colour tokens:
    - `$color-orange-55`
    - `$color-blue-25`
    - `$color-red-25`
    - `$color-yellow-30`
- Alias colour tokens:
    - `$color-support-brand-03`,
    - `$color-support-brand-04`,
    - `$color-support-brand-05`,
    - `$color-support-brand-06`,
    - `$color-support-brand-07`,
    - `$color-content-link-distinct`
- Global type tokens:
    - `$font-family-code`
    - `$font-style-underline`
- Alias type tokens:
    - `$font-body-s-link`,
    - `$font-body-l-link`,
    - `$font-body-strong-s-link`,
    - `$font-body-strong-l-link`,
    - `$font-caption-link`,
    - `$font-caption-strong-link`,
    - `$font-button-xs`
- Global and alias radius values

### Removed
- Global colour tokens:
    - `$color-orange-60`
- Alias colour tokens:
    - `$color-field`,
    - `$color-content-brand-strong` (use `$color-content-default` instead),
    - `$color-pressed`,
    - `$color-dragged`
- Global type tokens:
    - `$font-letter-spacing-01`
    - `$font-letter-spacing-02`


v1.0.0-beta.0
------------------------------
*August 19, 2021*

### Updated
- `family-primary` from `JustEatBasis` to `JetSansDigital`
- `weight-bold` from 600 to 700

### Added
- `family-secondary` Arial font
- Font weight `weight-extrabold`

### Removed
- Font weight `weight-medium`


v0.19.0
------------------------------
*July 7, 2021*

### Updated

- Global tokens:
    -  `blue-90` from `#0a3847` to `#083343`
    - `green` from `#00893f` to `#017a39`

- JE Light theme alias tokens:
    - `hover-02` from 2% to 8%
    - `active-01` from 10% to 12%
    - `active-02` from 6% to 20%

- JE Dark theme alias tokens:
    - `hover-02` from 2% to 4%
    - `active-01` from 16% to 20%
    - `active-02` from 6% to 12%

- Skip Light theme alias tokens:
    - `content-link` from `blue` to `blue-60`
    - `content-positive` from `green` to `green-60`
    - `hover-02` from 2% to 8%
    - `active-01` from 10% to 12%
    - `active-02` from 6% to 20%

- Skip Dark theme alias tokens:
    - `hover-02` from 2% to 4%
    - `active-01` from 16% to 20%
    - `active-02` from 6% to 12%


v0.18.2
------------------------------
*July 7, 2021*

### Fixed
- Linting fix 🙈


v0.18.1
------------------------------
*July 7, 2021*

### Fixed
- `compare-csv` script fixed so that it works after linting changes.


v0.18.0
------------------------------
*March 5, 2021*

### Added
- Tokens for BTA colours. Global tokens `purple`, `purple-10` and alias tokens `external-bta-background`, `external-bta-text`.


v0.17.0
------------------------------
*March 2, 2021*

### Changed
- Hover and Active colour alias tokens changed to percentages to `darken` base colour by when in hover or active state.


v0.16.0
------------------------------
*February 24, 2021*

### Added
- CircleCI lint check to config.

### Changed
- Font values for SCSS output now compiled to comma separated Sass list, so that it's valid SCSS that can be inserted into our type map.

### Fixed
- Linting issues.


v0.15.0
------------------------------
*January 29, 2021*

### Added
- Update colors to match current design token spreadsheet.
- Script added which will take a csv export of the token spreadsheet and compare it to the jsonc to easily see differences.


v0.14.0
------------------------------
*January 28, 2021*

### Added
- Adds version number to json output

### Changed
- Fixed font size of buttonS and buttonL being swapped


v0.13.0
------------------------------
*December 4, 2020*

### Added
- Added JET dark color alias tokens.


v0.12.0
------------------------------
*October 19, 2020*

### Changed
- Updated color alias tokens.


v0.11.0
------------------------------
*October 15, 2020*

### Added
- Added strong variants of caption and body alias tokens.


v0.10.0
------------------------------
*October 13, 2020*

### Added
- Platform transformations now added for tokens that need to be compiled with respect to specific platform variants.


v0.9.0
------------------------------
*September 24, 2020*

### Added
- Added base JE typography aliases to JSONC file.


v0.8.0
------------------------------
*September 24, 2020*

### Added
- Added `files` to `package.json` so that the generated assets get pushed to NPM.


v0.7.0
------------------------------
*September 2, 2020*

### Added
- Token parsing has now been implemented in the JSON compilation step so that alias values can be converted when needed.
- More of the global typography tokens added to the design tokens.

### Changed
- Snapshots updated.
- When merging global tokens together, it sorts the keys alphabetically (mainly for ease of readability in the compiled output).


v0.6.0
------------------------------
*August 28, 2020*

### Added
- Snapshot tests for compiled tokens.
- `yarn test:output` script for running output snapshot tests.
- Separate config files for `yarn test` and `yarn test:output`.


v0.5.1
------------------------------
*August 19, 2020*

### Added
- Store artifacts from build.


v0.5.0
------------------------------
*August 18, 2020*

### Added
- Set up eslint.
- `dangerfile.js`, and danger as a dependency
- `.circleci/config.yml`.

### Changed
- Fixed existing linting issues, including:
    - Convert for-in loops to forEach.
    - Fix ordering of function declarations.
    - Use arrow-function syntax.


v0.4.1
------------------------------
*August 14, 2020*

### Changed
- Extract extension-specific file writing functions to a single helper function.
- General refactoring.
- Don't write out theme-specific SCSS or XML files if there are no themes provided.

### Added
- Test coverage for exported methods.

### Removed
- Some unnecessary comments.


v0.4.0
------------------------------
*August 7, 2020*

### Added
- Checks for `undefined` when looping through and compiling tokens.
- `font-family` definitions.
- Comments at base of JSONC definition.

### Changed
- Copy base global tokens into each theme before passing the token JSON into the separate platform compilation methods (to save doing it multiple times).


v0.3.0
------------------------------
*August 5, 2020*

### Added
- JSDoc comments added to all functions.

### Changed
- Structure of design tokens changed slightly. `defaults` has been removed in favour of `global` tokens. Any tokens defined in `global` are copied over to each theme as part of the compilation step.
- Compilation methods updated to match the new design structure and to output alias tokens.
- Alias tokens converted as links to global tokens in SCSS.


v0.2.0
------------------------------
*June 26, 2020*

### Added
- Base compilation of colours to XML


v0.1.0
------------------------------
*February 14, 2020*

### Added
- JSONC file toto hold documented data of design tokens (taken from PIE Design Spreadsheet)
- Basic SCSS compilation. Currently converts JSONC > SCSS files for Skip and JE (Global tokens only atm)
- Basic JSON compilation. Currently converts JSONC > JSON, replacing any values set as `$default` to the appropriate value set in `theme.default`.
