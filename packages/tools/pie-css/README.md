# @justeattakeaway/pie-css
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-css)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-css">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-css.svg">
  </a>
</p>

`@justeattakeaway/pie-css` is a styling library that provides two distinct features:

1. A minimal set of CSS styles to help PIE web components display as intended in web applications and providing our design tokens for applications to use.
2. A set of SCSS style helpers (mixins, functions and variables) to help with common styling tasks when authoring PIE web components.

The PIE design tokens (and HSL colour variants) are exposed as CSS variables, as these variables are used across the PIE component styles and therefore need to be imported when using the PIE Web Components.

# Table of Contents

1. [Installation](#installation)
2. [Using the `pie-css` CSS stylesheet in your web application](#using-the-pie-css-css-stylesheet-in-your-web-application)
    1. JS or Framework import (via bundler)
    2. Nuxt
    3. Sass /SCSS
    4. Native HTML
3. [What's included in the `pie-css` base stylesheet](#whats-included-in-the-pie-css-base-stylesheet)
    1. [PIE Design Tokens](#pie-design-tokens)
    2. [box-sizing](#box-sizing)
    3. [Typography](#typography)
    4. [z-index variables](#z-index-variables)
    5. [Reusable Animations](#reusable-animations)
4. [Typography Utility Classes](#typography-utility-classes)
5. [Using the `pie-css` SCSS helpers (mixins & functions)](#using-the-pie-css-scss-helpers-mixins--functions)
    1. [Importing the `pie-css` SCSS helpers](#importing-the-pie-css-scss-helpers)
    2. [`pie-css` SCSS Helper Definitions](#pie-css-scss-helper-definitions)
        -  [`font-size()`](#font-size)
        - [`@include media()`](#include-media)
        - [Radio Static Mixins](#radio-static-mixins)
6. [Testing](#testing)
    - [CSS](#css)
    - [SCSS](#scss)


---

## Installation

To install `pie-css`, run the following on your command line:

```bash
# npm
npm i @justeattakeaway/pie-css

# yarn
yarn add @justeattakeaway/pie-css
```

## Using the `pie-css` CSS stylesheet in your web application

`pie-css` provides a base stylesheet that sets up some basic styles used by the PIE Web Components. It is essential that this stylesheet is included in any application that uses PIE Web Components. The stylesheet provides a minimal set of styles for ensuring typography displayed as intended, while also importing the PIE design tokens that are used by our components.

[Once installed](#installation), how you include these styles will largely depend on the type of application you are building (and your own preference), but here are a few examples.


### JS or Framework import (via bundler)

One common way of importing the styles would be through a regular JS import as part of your application bundle.

```js
import '@justeattakeaway/pie-css';
```


For example, in React (or NextJS), you could add the `pie-css` import to your `App.js` file:

```js
import '@justeattakeaway/pie-css';

function App () {
    return (
        …
    );
}

export default App;
```

Similarly, in Vue 3, you will likely include it as part of your `/src/main.ts` file:


```js
import { createApp } from 'vue';
import '@justeattakeaway/pie-css';
import App from './App.vue';

createApp(App).mount('#app');
```

### Nuxt

If you are using Nuxt, you can import `pie-css` in your `nuxt.config.js` file.


For Nuxt v3, this would look like this:

```js
// Nuxt v3
export default defineNuxtConfig({
    css: ['@justeattakeaway/pie-css'],
    …
});
 ```

For Nuxt v2, it is very similar, looking more like this:

```js
export default {
    css: [
        '@justeattakeaway/pie-css',
    ],
    …
}
```


### Sass / SCSS

If you are using Sass, you could import the CSS file as part of your styles directly.

```scss
@use 'node_modules/@justeattakeaway/pie-css/dist/index.css';
```


### Native HTML

Of course, you could include the styles straight inside your HTML document – most likely you'd want to link to the `/@justeattakeaway/pie-css/dist/index.css` CSS file in the head of your HTML.


## What's included in the `pie-css` base stylesheet

You can see the pre-compiled `pie-css` styles [in the `pie-css` repo](https://github.com/justeattakeaway/pie/blob/main/packages/tools/pie-css/css/input.css), but let's run through what's included.

### PIE Design Tokens

A core dependency of our PIE Web Components are the PIE design tokens. These are imported in the `pie-css` styles, as well as tokens for HSL colour variants (which are useful when needing to lighten/darken colours).

### box-sizing

We set `box-sizing: border-box` so that the CSS box model acts consistently when using PIE components.

### Typography

There are a number of typographic CSS rules that we specify to help with font rendering. These are:

```css
/*  These rules with smooth fonts. It makes fonts look crisp and clean on devices
that support it. */
text-rendering: optimizelegibility;
-webkit-font-smoothing: antialiased;
-moz-font-smoothing: antialiased;

/*  These are added to prevent text size adjustments in various browsers.
    In some browsers, such as iOS Safari, will try to increase the font-size
    when you rotate the screen. This can be jarring and break layouts.  */
-webkit-text-size-adjust: 100%;
text-size-adjust: 100%;
```

### z-index variables

Some PIE Web Components use a z-index value to control how they stack on a webpage. These values are defined as CSS variables and are utilized internally.

In most cases, a webpage should follow the DOM's natural stacking order and the default z-index order assigned for each component. However, if you're creating custom components, refer to the following table to make sure they don't conflict with other components.

| Token                      | Z-Index Value  |
| -------------------------- | ---------------|
| --dt-z-index-base: 1;      | 1              |
| --dt-z-index-dropdown      | 1000           |
| --dt-z-index-fab           | 1000           |
| --dt-z-index-tooltip       | 2000           |
| --dt-z-index-popover       | 3000           |
| --dt-z-index-bottom-sheet  | 4000           |
| --dt-z-index-side-sheet    | 4000           |
| --dt-z-index-modal         | 4000           |
| --dt-z-index-cookie-banner | 5000           |
| --dt-z-index-toast         | 6000           |

### Reusable Animations

`pie-css` also ships with a set of reusable animations that can be applied to elements by adding a CSS class.

#### Slide Animation

| Class                      | Description  |
| -------------------------- | ---------------|
| `.pie-animation--slide-in` | Slides an element in from the left. |
| `.pie-animation--slide-out`| Slides an element out to the left. |


**Customisation:**

The starting position of the slide animation can be customised by overriding the `--pie-animation-slide-translate-start` CSS variable. The default value is `-100%`.

### Static Radio CSS Classes

`pie-css` provides CSS-only classes for displaying static radio button visuals. These are intended for non-interactive display contexts such as receipts, confirmations, and documentation.

**Single-element architecture:** The `.c-radio-static` class can be applied directly to either a native `<input type="radio">` element or a non-form element like `<div>`.

#### Basic Usage

```html
<!-- On a div element -->
<div class="c-radio-static"></div>
<div class="c-radio-static c-radio-static--checked"></div>

<!-- On a native input (preserves native functionality) -->
<input type="radio" class="c-radio-static" />
<input type="radio" class="c-radio-static" checked />
```

#### Available Classes

| Class                      | Description  |
| -------------------------- | ---------------|
| `.c-radio-static` | Base class - displays unchecked radio button |
| `.c-radio-static--checked` | Modifier - displays checked state (filled circle with center dot) |
| `.c-radio-static--disabled` | Modifier - displays disabled appearance (greyed out) |
| `.c-radio-static--error` | Modifier - displays error state (red border/fill) |

#### State Combinations

```html
<!-- Checked + Disabled -->
<div class="c-radio-static c-radio-static--checked c-radio-static--disabled"></div>

<!-- Checked + Error -->
<div class="c-radio-static c-radio-static--checked c-radio-static--error"></div>
```

**Note:** For native inputs, the `:checked` and `:disabled` pseudo-classes work automatically:

```html
<input type="radio" class="c-radio-static" checked disabled />
```

#### Customisation

The radio appearance can be customised by overriding CSS custom properties:

```css
.my-custom-radio {
    --radio-size: 32px; /* Larger size */
    --radio-dot-size: 12px; /* Larger dot */
    --radio-bg-color--checked: var(--my-brand-color); /* Custom color */
}
```

**Available CSS Custom Properties:**
- `--radio-size` (default: 24px) - Circle diameter
- `--radio-dot-size` (default: 8px) - Center dot diameter
- `--radio-border-width` (default: 1px) - Border thickness
- `--radio-border-color` - Border color
- `--radio-bg-color` - Background color (unchecked)
- `--radio-bg-color--checked` - Filled circle color (checked)
- `--radio-dot-bg-color` - Center dot color


---

## Typography Utility Classes

`pie-css` includes a comprehensive set of typography utility classes that provide consistent typography styles across your application. These utility classes are built on top of PIE design tokens and automatically apply the correct font family, weight, size, line height, and spacing.

The utility classes follow a simple naming convention: `u-font-{token-name}`, where the token name matches the design token used in Figma. For example, the `body-l-link` token becomes the `.u-font-body-l-link` utility class.

To use the typography utilities, import the typography CSS file:

```js
import '@justeattakeaway/pie-css/dist/helpers/typography.css';
```

For complete documentation on all available typography utility classes, including usage examples and best practices, see the [Typography Utilities documentation in Storybook](/docs/additional-libraries-pie-css-typography-utility-classes--docs).

---

## Using the `pie-css` SCSS helpers (mixins & functions)

PIE CSS provides an optional set of SCSS helpers that are used by the PIE Web Components. These can also be used by web applications using SCSS, by importing the helpers into their project.

These helpers are for carrying out common tasks when interacting with the PIE design tokens, such as setting font sizes and media-queries in a consistent way, and for sharing styles definitions via SCSS mixins and functions.

One common example is to add unit suffixes (such as `px`) to the end of `font-size` declarations, as these are imported as unit-less values from our design tokens.

### Importing the `pie-css` SCSS helpers

Ensure you have installed `pie-css` as set out in [the installation section](Installation).

Once you have done this, you can then import the helpers by writing the following in your SCSS:

```scss
@use '@justeattakeaway/pie-css/scss' as *;

// or to namespace the mixins and functions, to avoid collisions
// import the helpers while defining a namespace
@use '@justeattakeaway/pie-css/scss' as p;
```

You should now be able to use the `pie-scss` helpers in that SCSS scope.

Be aware that if you want to set this up globally across your application, you'll need to add this import to your application SCSS config, but it's recommended to `@use` the helpers only in the SCSS files that use them on your project.

### `pie-css` SCSS Helper Definitions

#### `font-size()`

Used to reference design token font variables to add `px` unit values.

`font-size` can be used as a mixin to output the full style declaration, or as a function when you would like to assign the design token to a CSS variable.

```scss
// Use the font-size() mixin
.c-label {
  @include font-size(--dt-font-body-s-size);
}
// Outputs:
.c-label {
  font-size: calc(var(--dt-font-body-s-size) * 1px);
}
```

```scss
// Use the font-size function
--body-font-size: #{font-size(--dt-font-body-s-size)};

.c-label {
  font-size: var(--body-font-size);
}

// Outputs:
--body-font-size: calc(var(--dt-font-body-s-size) * 1px);

.c-label {
  font-size: var(--dt-font-body-s-size);
}
```

#### `@include media()`

For media queries, we use an SCSS helper library called [include-media](https://eduardoboucas.github.io/include-media).

This library allows you to setup shortcut names for common breakpoints and provides a nicer syntax for working with media queries through the use of logical operators (such as `>=` and `<=`).

As part of the `pie-css` SCSS helpers, we setup the breakpoint shortcut names such that:

```scss
$breakpoints: (
    xs: 320px,
    sm: 600px,
    md: 768px,
    lg: 1024px,
    xl: 1280px,
    xxl: 1440px
);
```

You can then use these in your SCSS like so:

```scss
@use '@justeattakeaway/pie-css/scss' as *;

.c-formField {
  color: red;

  @include media('>=sm') {
    color: blue;
  }
}

// Outputs:
.c-formField {
  color: red;
}
@media (min-width: 600px) {
  .c-formField {
    color: blue;
  }
}
```

It also lets you write nice expressions like this:

```scss
.c-formField {
  // target between sm and md breakpoints on retina2x devices
  @include media('>=sm', '<=md', 'retina2x') {
    color: purple;
  }
}

```

To see the full list of features `include-media` provides, [check out their website](https://eduardoboucas.github.io/include-media).

#### Radio Static Mixins

`pie-css` provides SCSS mixins and CSS classes for static radio button styling. These are designed for two primary use cases:

1. **Static displays** - Non-interactive radio representations (e.g., in confirmation screens, receipts, read-only forms)
2. **Parent container interactions** - Applying radio state styles based on parent element interactions (e.g., hover, active, focus states on a card containing a radio)

For comprehensive documentation with visual examples, see the [Radio Static Styling documentation in Storybook](/docs/additional-libraries-pie-css-radio-static-styling--docs).

##### Installation

The radio styles are included as part of the `@justeattakeaway/pie-css` package:

```bash
# Using Yarn
yarn add @justeattakeaway/pie-css

# Using NPM
npm install @justeattakeaway/pie-css
```

##### Quick Start: Using CSS Classes

For most use cases, we recommend using the pre-generated CSS classes:

**1. Import the radio CSS:**

```javascript
import '@justeattakeaway/pie-css/dist/helpers/radio.css';
```

**2. Apply base class to radio input:**

```html
<!-- Unchecked state -->
<input type="radio" class="c-radio-static" name="option" />

<!-- Checked state (add checked attribute) -->
<input type="radio" class="c-radio-static" name="option" checked />

<!-- Disabled state -->
<input type="radio" class="c-radio-static" name="option" disabled />

<!-- Error state -->
<input type="radio" class="c-radio-static c-radio-static--error" name="option" />
```

**3. For parent container interactions (using SCSS mixins):**

```html
<div class="interactive-card" tabindex="0">
    <input type="radio" class="c-radio-static" name="card-option" />
    <span>Select this card</span>
</div>
```

```scss
@use '@justeattakeaway/pie-css/scss/helpers/radio';

.interactive-card {
    padding: 1rem;
    border: 1px solid #ccc;
    cursor: pointer;
    
    // Apply hover state to radio when card is hovered
    &:hover .c-radio-static {
        @include radio.radio-static-hover;
    }
}
```

**Note:** The radio input itself already has native `:hover` that activates when you hover directly on it. The parent container pattern above is for when you want the entire card hover to trigger the radio's hover state.

##### Advanced: Using SCSS Mixins

If you're using SCSS and need more control, you can use the mixins directly:

**Import the radio helpers:**

```scss
@use '@justeattakeaway/pie-css/scss/helpers/radio';
```

**Available mixins:**

| Mixin | Description |
| ----- | ----------- |
| `radio-static()` | Base radio styles with `:checked`, `:disabled`, and native interactive states (`:hover`, `:active`, `:focus-visible`) |
| `radio-static-error()` | Error state appearance (red border/fill) |
| `radio-static-hover()` | Hover appearance for parent container interactions |
| `radio-static-active()` | Active appearance for parent container interactions |
| `radio-static-focus()` | Focus ring for parent container interactions |
| `radio-static-hover-error()` | Combined hover + error state for parent interactions |
| `radio-static-active-error()` | Combined active + error state for parent interactions |

**Example - Basic usage:**

```scss
@use '@justeattakeaway/pie-css/scss/helpers/radio';

.my-radio {
    @include radio.radio-static;
}

.my-radio-error {
    @include radio.radio-static;
    @include radio.radio-static-error;
}
```

**Example - Parent container interaction:**

```scss
@use '@justeattakeaway/pie-css/scss/helpers/radio';

.interactive-card {
    // Apply hover state to nested radio when card is hovered
    &:hover .c-radio-static {
        @include radio.radio-static-hover;
    }
    
    // Apply active state when card is pressed
    &:active .c-radio-static {
        @include radio.radio-static-active;
    }
    
    // Apply focus state when card is keyboard-focused
    &:focus-visible .c-radio-static {
        @include radio.radio-static-focus;
    }
}
```

##### Important Notes

**Native Interactive States:**
- The base `radio-static()` mixin and `.c-radio-static` class include native `:hover`, `:active`, and `:focus-visible` pseudo-classes
- This means radio inputs automatically respond to direct user interactions (hovering, clicking, keyboard focus)
- No additional code needed for standard radio button interactions

**Parent Container States:**
- Use the `-hover`, `-active`, and `-focus` mixins/classes when you want parent elements (like cards) to trigger radio state changes
- These are separate from native states and intended for custom UI patterns

**Customization:**
- All styles use CSS custom properties that can be overridden
- See the full documentation in Storybook for customization examples

##### Available CSS Classes

| Class | Description |
| ----- | ----------- |
| `.c-radio-static` | Base radio styles (includes native interactive states) |
| `.c-radio-static--error` | Error state modifier |
| `.c-radio-static--hover` | Hover state modifier (for parent interactions) |
| `.c-radio-static--active` | Active state modifier (for parent interactions) |
| `.c-radio-static--focus` | Focus state modifier (for parent interactions) |
| `.c-radio-static--hover.c-radio-static--error` | Combined hover + error (for parent interactions) |
| `.c-radio-static--active.c-radio-static--error` | Combined active + error (for parent interactions) |


### Other SCSS helpers

We will be writing more in-depth docs on all of our SCSS helpers shortly, but for now, feel free to browse the [SCSS code in the PIE mono-repo](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-css/scss) – or reach out to one of the DS team who can take you through what's available.

---

## Testing

We strive to ensure all styles are appropriately tested. How we test the styles differs for CSS and SCSS. Below, we outline both approaches.

> [!WARNING]
> Any pull requests that fail to test newly added or altered styling will likely be rejected. Please do ensure that tests have been added before raising a pull request.

### CSS

For our raw CSS styles, we test two things:

1. Ensure that all our our CSS passes W3C CSS validation. This is done by reading the built CSS file and making a network request to the W3C validation service.

2. Ensure that our CSS output is what we expect via snapshot testing. We use some tools such as PostCSS to generate the output, so we want to ensure that we catch any regressions before our consumers do!

> [!NOTE]
> Our CSS tests can be found under `/test/css`.

### SCSS

Our SCSS styles are tested in a number of ways:

1. Unit tests to ensure that our SCSS mixins and functions output the expected CSS. These unit tests are written using `vitest`. What we do is write out a string of SCSS that calls the SCSS code we want to test and then run it through a compiler function to generate CSS. We then compare the output CSS to what we expect. This is done for all SCSS. To make things easier, we strip whitespace from the compiled CSS we test.

2. Ensure that all of the compiled CSS passes W3C CSS validation. This is done by compiling the SCSS to CSS and then making a request to the W3C validation service. Because we do not want to spam network requests, we add all the SCSS to `./test/scss/validityTest.scss` and use that file to compile during the test.

> [!NOTE]
> Our SCSS tests can be found under `/test/scss`.
