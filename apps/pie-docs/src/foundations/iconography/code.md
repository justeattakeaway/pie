---
eleventyNavigation:
    key: Code
    parent: Iconography
    order: 3
---

## Overview
- [Our packages](#our-packages)
- [Web Components (pie-icons-webc)](#web-components-pie-icons-webc)
- [Vanilla JS (pie-icons)](#vanilla-js-pie-icons)
- [React (pie-icons-react)](#react-pie-icons-react)
- [Vue (pie-icons-vue)](#vue-pie-icons-vue)
- [iOS library and naming conventions](#ios-library-and-naming-conventions)
- [Android library and naming conventions](#android-library-and-naming-conventions)

---

## Our packages

We have a number of different icon packages available for use in our applications. We have a package for each framework we support, as well as a base package for the icons themselves.

---

## Web Components (pie-icons-webc)

This package generates a framework-agnostic Web Component icon set for web applications. It uses the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in `pie-icons` are compiled into [Lit](https://lit.dev/) web components.

### Usage

#### Installation

```sh
npm install @justeattakeaway/pie-icons-webc --save
```
```sh
yarn add @justeattakeaway/pie-icons-webc
```

#### Import into your project
We suggest importing the bundle for an individual component directly.

{% notification {
  type: "information",
  message: "These components are compiled from TypeScript and have type definitions available. Therefore they will work in TypeScript projects."
} %}

```js
import '@justeattakeaway/pie-icons-webc/dist/IconAppRestaurant.js';

export class MyAmazingComponent extends LitElement {
  render () {
    return html`
      <h2>
        This is a heading
        <icon-app-restaurant size="xl" />
      </h2>`;
  }
}
```

#### Size

Icons are made available in different size variants:
- small
- large, when its name has the `Large` suffix

Small icons default size is `xs` and can use one of the following pre-determined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about small icon sizes [here](/foundations/iconography/#sizes-for-the-small-icon-set).

Large icons `size` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise they will fallback to the default value. You can learn more about large icon sizes [here](/foundations/iconography/#sizes-for-the-large-icon-set).

Example:

```js
<IconAlertTriangle size="l" />
<IconAlertTriangleLarge size="40" />
```

{% notification {
  type: "information",
  message: "For more information, please refer to the [package README](https://github.com/justeattakeaway/pie/blob/main/packages/tools/pie-icons-webc/README.md)."
} %}

---

## Vanilla JS (pie-icons)

`@justeattakeaway/pie-icons` is our base icon package, from which our other icon packages extend.

It is essentially a collection of the SVG files that make up the PIE Iconset. This means that you can use these icons in all the same ways you can use SVGs (e.g. img, background-image, inline, object, embed, iframe).

[This package](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons) also provides a JavaScript API for the iconset, and this is what is used to build the framework-specific icons for Web Components, React and Vue.


{% notification {
  type: "warning",
  message: "Whilst the `pie-icons` package can be used for web applications, we strongly advise that you use one of our framework-specific implementations instead."
} %}

### Usage - Client-side Javascript

To use the icons in your application, you need to include the package in your project, add the icons using data-attributes and invoke the `replace()` function:

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons --save
```
```sh
yarn add @justeattakeaway/pie-icons
```

#### Include the package
You can load directly from the installed package, or from a CDN provider.

```html
<script src="path/to/dist/pie-icons.js"></script>
```
```html
<!-- choose one -->
<script src="https://unpkg.com/@justeattakeaway/pie-icons"></script>
<script src="https://cdn.jsdelivr.net/npm/@justeattakeaway/pie-icons/dist/pie-icons.min.js"></script>
```

#### HTML
Simply add a `data-pie-icons` attribute with the icon name to an element. You can see all of our icons on the [library page](/foundations/iconography/library/).

```html
<i data-pie-icons="menu"></i>
```

#### Invoke the package
Calling the `replace()` function will replace all elements with the `data-pie-icons` attribute with the relevant icon.

```html
<script>
  window['pie-icons'].default.replace();
</script>
```
---

### Usage - NodeJS

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons --save
```
```sh
yarn add @justeattakeaway/pie-icons
```

#### Import the package
Simply import the package in your application where needed:

```js
import pieIcons from '@justeattakeaway/pie-icons';
```

#### Call the APIs
The package exposes a number of APIs for you to use:

```js
const { icons } = pieIcons.default;

icons.x
// {
//    name: 'x',
//    contents: '<line ... /><line ... />`,
//    tags: ['cancel', 'close', 'delete', 'remove'],
//    attrs: {
//      class: 'c-pieIcon c-pieIcon--x',
//      xmlns: 'http://www.w3.org/2000/svg',
//    },
//    toSvg: [Function],
// }

icons.x.toSvg()
// <svg class="c-pieIcon c-pieIcon--x" ...><line ... /><line ... /></svg>

icons.x.toSvg({ class: 'foo bar', 'stroke-width': 1, color: 'red' })
// <svg class="c-pieIcon c-pieIcon--x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
```

{% notification {
  type: "information",
  message: "For more information about the APIs in this package, please take a look at the [API reference](https://github.com/justeattakeaway/pie/tree/main/packages/tools/pie-icons#api-reference) in the project README."
} %}


---

## React (pie-icons-react)

This package generates an icon set for React applications using the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in `pie-icons` are compiled into React components.

The icons are bundled as CommonJS and ES Modules, to be more easily adopted for modern React Applications.


### Usage

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons-react --save
```
```sh
yarn add @justeattakeaway/pie-icons-react
```

#### Import into your project
Simply import the icons you need into your project:

```tsx
import { IconAlertTriangleLarge, IconCalendar } from "@justeattakeaway/pie-icons-react";

export default function App() {
  return (
    <div className="App">
      <IconCalendar />
      <IconAlertTriangleLarge />
    </div>
  );
}
```

#### Size

Icons are made available in different size variants:
- small
- large, when its name has the `Large` suffix

Small icons default size is `xs` and can use one of the following pre-determined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about small icon sizes [here](/foundations/iconography/#sizes-for-the-small-icon-set).

Large icons `size` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise they will fallback to the default value. You can learn more about large icon sizes [here](/foundations/iconography/#sizes-for-the-large-icon-set).

Example:

```tsx
<IconAlertTriangle size="l" />
<IconAlertTriangleLarge size={40} />
```

{% notification {
  type: "information",
  message: "For more information, please refer to the package [README](https://github.com/justeattakeaway/pie/blob/main/packages/tools/pie-icons-react/README.md)."
} %}

---

## Vue (pie-icons-vue)

This package generates an icon set for Vue.js applications using the base [pie-icons](https://www.npmjs.com/package/@justeattakeaway/pie-icons) package. The SVGs in `pie-icons` are compiled into single file components that can be imported into Vue applications.

{% notification {
  type: "warning",
  message: "The package is fully compatible with Vue 2. To use these icons in Vue 3, you may need to take some extra steps when building your application. Please reach out to **#help-designsystem** for assistance."
} %}

### Usage

#### Installation
You can install the package using `npm` or `yarn`:

```sh
npm install @justeattakeaway/pie-icons-vue --save
```
```sh
yarn add @justeattakeaway/pie-icons-vue
```

#### Import into your project
Simply import the icons you need into your project:

```html
  <template>
      <icon-calendar />
      <icon-alert-triangle-large />
  </template>

  <script>
  import { IconCalendar, IconAlertTriangleLarge } from '@justeattakeaway/pie-icons-vue';

  export default {
      components: {
          IconCalendar,
          IconAlertTriangleLarge
      }
  };

  </script>
  <style>
    svg {
      fill: {PIE_ALIAS_COLOR_TOKEN};
    }
  </style>
  ```

#### Size

Icons are made available in different size variants:
- small
- large, when its name has the `Large` suffix

Small icons default size is `xs` and can use one of the following pre-determined values for `size`: `xs`, `s`, `m`, `l`, `xl`, and `xxl`. You can learn more about small icon sizes [here](/foundations/iconography/#sizes-for-the-small-icon-set).

Large icons `size` default and minimum value is `32`. Values larger than the minimum must be multiples of `8`, otherwise they will fallback to the default value. You can learn more about large icon sizes [here](/foundations/iconography/#sizes-for-the-large-icon-set).

Example:

```js
<IconAlertTriangle size="l" />
<IconAlertTriangleLarge size="40" />
```

{% notification {
  type: "information",
  message: "For more information, please refer to the [package README](https://github.com/justeattakeaway/pie/blob/main/packages/tools/pie-icons-vue/README.md)."
} %}

---

## iOS library and naming conventions

iOS packs all icons into the JustUI core library. Our iOS library will use the same name of the icon, but transforming it from kebab-case to CamelCase (removing the hyphens):
For example, the `gift-filled-large` icon would be `giftFilledLarge`.

---

## Android library and naming conventions

### Use the latest version

In order to get all the PIE Icons in your app, you’ll need to include the com.jet.pie2:icons library in your gradle module. 
Library versions are controlled via a Bill of Materials (BOM), that will ensure all PIE libraries use a compatible version.

This will handle all versions for you, BOM version: 2025.01.00 or higher:
```
implementation(platform("com.jet.pie2:bom:$latestBOMversion"))
```
Access to all PIE Icons:
```
implementation("com.jet.pie2:icons")
```

Access to all PIE Illustrations:
```
implementation("com.jet.pie2:illustrations")
```

Access to all PIE Logos:
```
implementation("com.jet.pie2:logos")
```

{% notification {
  type: "information",
  message: "We strongly recommend using the PIE BOM to handle your dependencies. Of course, you're free to override any version of the above libraries, but that is at your own risk. To ensure you’re on the latest version, please head to the [Android PIE repository](https://github.je-labs.com/Android/PIE)."
} %}

### Get the information directly from Figma

Naming convention for icons: ```ic_pie_{category}_{icon_name}```. 

For example, the icon below would be ```ic_pie_benefits_gift_filled_large``` and available as ```@drawableic_pie_benefits_gift_filled_large``` or ```R.drawable ic_pie_benefits_gift_filled_large```.

{% contentPageImage {
src:"../../../assets/img/foundations/iconography/icons-example-code-section.png",
alt: "Gift icons with example of a naming convention for Android",
width:"350px"
} %}

### Tint the icons with the correct colour token

Icons come with a fuchsia tint by default, so it’s your responsibility to make sure they look OK in both Light and Dark themes. To do so, get the colour token from Figma and apply it directly to the icon.

{% notification {
  type: "information",
  message: "You can use ```contentDefault``` as your default design token colour for tinting your icon if you’re not sure. This will make sure that the icon looks neat in both Light and Dark modes. Please review with your designer/Figma files that you’re using the right token for the icon."
} %}

Example for XML Views:

```
android:drawableStart="@drawable/ic_pie_alert_info_help_circle_filled_large
android:drawableTint="?attr/jetColorContentDefault"
```
or
```
app:srcCompat="@drawable/ic_pie_chevron_chevron_down"
app:tint="?attr/jetColorInteractivePrimary"
```

Example for Jetpack Compose:

```
Icon(
    ...
    imageVector = ImageVector.vectorResource(id = PieIconR.drawable.ic_pie_arrow_arrow_left),
    tint = JetTheme.colors.contentInteractiveBrand,
    ...
) 
```

## FAQs

**Q: I’ve imported the library. Where can I find the icons?**

A: Icons are located in their own namespace: com.jet.pie2.icons.R. More information [here](https://github.je-labs.com/Android/PIE/wiki/Getting-started#step-4---use-pie-assets).

**Q: I can’t find the icon I need. Can I add it to the library?**

A: No. All icons will be automatically generated. If your icon doesn’t belong to PIE, it needs to live inside your own project.

**Q: My icon belongs to PIE, I can see it in Figma. Can I add it?**

A: If your icon belongs to PIE and it’s not in the library, make sure you’re using the latest version of PIE BOM. If you still can’t see it, message us via #help-designsystem Slack channel and we’ll update the icons for you.