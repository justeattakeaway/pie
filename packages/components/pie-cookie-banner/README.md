<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-cookie-banner">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-cookie-banner.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-cookie-banner)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)
6. [Contributing](#contributing)


## pie-cookie-banner

`pie-cookie-banner` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-cookie-banner` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-cookie-banner

# yarn
$ yarn add @justeattakeaway/pie-cookie-banner
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

#### JavaScript
```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import { PieCookieBanner } from '@justeattakeaway/pie-cookie-banner';

// If you don't need to reference the imported object, you can simply
// import the module which registers the component as a custom element.
import '@justeattakeaway/pie-cookie-banner';
```

#### React
```js
// React
// For React, you will need to import our React-specific component build
// which wraps the web component using ​@lit/react
import { PieCookieBanner } from '@justeattakeaway/pie-cookie-banner/dist/react';
```

> [!NOTE]
> When using the React version of the component, please make sure to also
> include React as a [peer dependency](#peer-dependencies) in your project.


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-cookie-banner`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.

## Props

| Property | Type | Default | Description |
|---|---|---|---|
| hasPrimaryActionsOnly | `Boolean` | `false` | When true, sets the variant to "primary" for the button which accepts necessary cookies only. |
| locale | `Object`  | {English language locale} | Assigns the localisation data for the component strings. |
| cookieStatementLink | `String`  | `''` | Allows a url to be passed for the cookie statement link. |
| cookieTechnologiesLink | `String`  | `''` | Allows a url to be passed for the cookie technology link. |
| defaultPreferences | `Object`  | `{}` | Allows default preferences to be passed in by the consumer`{ 'functional': true, 'personalized': true, 'analytical': true }` or `{ 'functional': true }`. |

In your markup or JSX, you can then use these to set the properties for the `pie-cookie-banner` component:

```html
<!-- Native HTML -->
<pie-cookie-banner></pie-cookie-banner>

<!-- JSX -->
<PieCookieBanner></PieCookieBanner>
```

### Localisation

By default the component displays its content in English language. To display the content in another language, you need to import the locale data for that language and pass it in the `locale` prop. For example, to display the content in Dutch, you need to import the Dutch locale data:

```js
import locale from '@justeattakeaway/pie-cookie-banner/locales/nl-nl.json';

<!-- JSX -->
<PieCookieBanner locale={locale}></PieCookieBanner>
```

It's possible to import all locales at once, if necessary:

```js
import allLocales from '@justeattakeaway/pie-cookie-banner/locales';
```

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
