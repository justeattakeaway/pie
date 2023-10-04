# `pie-icons` — PIE Icon Set

[![npm version](https://img.shields.io/npm/v/@justeattakeaway/pie-icons.svg)](https://img.shields.io/npm/v/@justeattakeaway/pie-icons.svg)

## Contributing

If you want to add a new icon please check [our icon set](https://pie.design/foundations/iconography/library/) first to avoid duplications. Before adding an svg file, please run it through [svgomg](https://jakearchibald.github.io/svgomg/) with the default settings applied and make sure to **turn off** “Clean IDs” setting and **turn on** "Prefer viewBox to width/height" and "Prettify markup" settings.

On top of that please prefix all the ids in the files with the icon name. For example `id="symbol"` for close-circle.svg should become `id="close-circle-symbol"`, as same ids in different SVG files can conflict and cause visual issues as well as invalidate the markup.


## Usage

At its core, `pie-icons` is a collection of [SVG](https://svgontheweb.com/#svg) files. This means that you can use these icons in all the same ways you can use SVGs (e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`). Here's a helpful article detailing the many ways SVGs can be used on the web: [SVG on the Web – Implementation Options](https://svgontheweb.com/#implementation)

The following are additional ways you can use `pie-icons`.


### Client-side JavaScript

You can either use the pie-icons package using native JS, or hook into the compiled framework components that are generated for React and Vue.

#### Native JS

#### 1. Install

> [!NOTE]
> If you intend to use `pie-icons` with a CDN, you can skip this installation step.

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or Yarn.

```shell
npm install @justeattakeaway/pie-icons --save

yarn add @justeattakeaway/pie-icons
```

Or just copy [`pie-icons.js`](https://unpkg.com/@justeattakeaway/pie-icons/dist/pie-icons.js) or [`pie-icons.min.js`](https://unpkg.com/@justeattakeaway/pie-icons/dist/pie-icons.min.js) into your project directory. You don't need both `pie-icons.js` and `pie-icons.min.js`.

#### 2. Include

Include `pie-icons.js` or `pie-icons.min.js` with a `<script>` tag:

```html
<script src="path/to/dist/pie-icons.js"></script>
```

> [!NOTE]
> `pie-icons.js` and `pie-icons.min.js` are located in the `dist` directory of the npm package.

Or load the script from a CDN provider:

```html
<!-- choose one -->
<script src="https://unpkg.com/@justeattakeaway/pie-icons"></script>
<script src="https://cdn.jsdelivr.net/npm/@justeattakeaway/pie-icons/dist/pie-icons.min.js"></script>
```

After including the script, `pieicons` will be available as a global variable. ### TODO test if this is the name of the global variable ###

#### 3. Use

To use an icon on your page, add a `data-pie-icons` attribute with the icon name to an element:

```html
<i data-pie-icons="alert"></i>
```

#### 4. Replace

Call the `pieicons.replace()` method:

```html
<script>
  pieicons.replace()
</script>
```

All elements that have a `data-pie-icons` attribute will be replaced with SVG markup corresponding to their `data-pie-icons` attribute value. See the [API Reference](#api-reference) for more information about `pieicons.replace()`.


### Node
#### 1. Install

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or Yarn:

```shell
npm install @justeattakeaway/pie-icons --save

yarn add @justeattakeaway/pie-icons
```

#### 2. Require

```js
const pieicons = require('@justeattakeaway/pie-icons');
```

#### 3. Use

```js
pieicons.icons.x
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

pieicons.icons.x.toSvg()
// <svg class="c-pieIcon c-pieIcon--x" ...><line ... /><line ... /></svg>

pieicons.icons.x.toSvg({ class: 'foo bar', 'stroke-width': 1, color: 'red' })
// <svg class="c-pieIcon c-pieIcon--x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
```

See the [API Reference](#api-reference) for more information about the available properties and methods of the `pieicons` object.

## API Reference

### `pieicons.icons`

An object with data about every icon.

#### Usage

```js
pieicons.icons.x
// {
//    name: 'x',
//    contents: '<line ... /><line ... />',
//    tags: ['cancel', 'close', 'delete', 'remove'],
//    attrs: {
//      xmlns: 'http://www.w3.org/2000/svg',
//      width: 24,
//      height: 24,
//      viewBox: '0 0 24 24',
//      fill: 'none',
//      stroke: 'currentColor',
//      'stroke-width': 2,
//      'stroke-linecap': 'round',
//      'stroke-linejoin': 'round',
//    },
//    toSvg: [Function],
// }

pieicons.icons.x.toString()
// '<line ... /><line ... />'
```

> [!NOTE]
> `x` in the above example can be replaced with any valid icon name.  Icons with multi-word names (e.g. `arrow-right`) **cannot** be accessed using dot notation (e.g. `pieicons.icons.x`). Instead, use bracket notation (e.g. `pieicons.icons['arrow-right']`).

[View Source](https://github.com/justeat/pie-icons/blob/master/src/icons.js)

---

### `pieicons.icons[name].toSvg([attrs], platform)`

Returns an SVG string.

#### Parameters

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| `attrs` (optional)    | Object |  Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |
| `platform` (optional) | String |  Defaults to 'default'. Can be changed to allow for specific attrs to be included/excluded. Current valid options are `"reactNative"` |

> [!NOTE]
> You might find these SVG attributes helpful for manipulating icons:
> * [`color`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color)
> * [`width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width)
> * [`height`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height)
> * [`stroke-width`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)
> * [`stroke-linecap`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)
> * [`stroke-linejoin`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)

#### Usage

```js
pieicons.icons.circle.toSvg()
// '<svg class="c-pieIcon c-pieIcon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

pieicons.icons.circle.toSvg({ 'stroke-width': 1 })
// '<svg class="c-pieIcon c-pieIcon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

pieicons.icons.circle.toSvg({ class: 'foo bar' })
// '<svg class="c-pieIcon c-pieIcon--circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'
```

[View Source](https://github.com/justeat/pie-icons/blob/master/src/icon.js)

---

### `pieicons.replace([attrs])`

Replaces all elements that have a `data-pie-icons` attribute with SVG markup corresponding to the element's `data-pie-icons` attribute value.

#### Parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `attrs` (optional)  | Object | Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

#### Usage

> [!NOTE]
> `pieicons.replace()` only works in a browser environment.

Simple usage:
```html
<i data-pie-icons="circle"></i>
<!--
<i> will be replaced with:
<svg class="c-pieIcon c-pieIcon--circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  pieicons.replace()
</script>
```

You can pass `pieicons.replace()` an `attrs` object:
```html
<i data-pie-icons="circle"></i>
<!--
<i> will be replaced with:
<svg class="c-pieIcon c-pieIcon--circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  pieicons.replace({ class: 'foo bar', 'stroke-width': 1 })
</script>
```

All attributes on the placeholder element (i.e. `<i>`) will be copied to the `<svg>` tag:

```html
<i data-pie-icons="circle" id="my-circle" class="foo bar" stroke-width="1"></i>
<!--
<i> will be replaced with:
<svg id="my-circle" class="c-pieIcon c-pieIcon--circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  pieicons.replace()
</script>
```

[View Source](https://github.com/justeat/pie-icons/blob/master/src/replace.js)

---

## Credits

The `@justeattakeaway/pie-icons` project owes a great deal to the [Feather SVG Icon Library](https://github.com/feathericons/feather).  This project started as a fork of that project for developers at Just Eat to build out icons, while giving us a great platform for the initial build and API that Feather had already built.
