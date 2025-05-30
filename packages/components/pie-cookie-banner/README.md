# @justeattakeaway/pie-cookie-banner
[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-cookie-banner) | [Design Documentation](https://pie.design/patterns/cookie-banner/) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-cookie-banner)

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-cookie-banner">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-cookie-banner.svg">
  </a>
</p>

`@justeattakeaway/pie-cookie-banner` is a Web Component built using the Lit library. It offers a simple and accessible interactive cookie-banner component for web applications.

⚠️ `pie-cookie-banner` purely handles the UI and user interactions for cookie consent. It does not handle the setting or management of cookies or the storage of user preferences. It is the responsibility of the consuming application to handle these aspects.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [CDN](#cdn)
- [Localisation](#localisation)
- [Usage Examples](#usage-examples)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties
| Prop                    | Options                                                                 | Description                                                                                                                                                                                                                         | Default     |
|-------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `hasPrimaryActionsOnly` | `true`, `false`                                                         | When true, sets the variant to `"primary"` for the button which accepts necessary cookies only.                                                                                                                                    | `false`     |
| `country`               | 2 character country code                                                | Used to load the localisation data for the component strings. If not provided, the default country of `'gb'` will be used. Note this value is case-insensitive.                                                                   | `"gb"`      |
| `language`              | 2 character language code                                               | Used to load the localisation data for the component strings. If not provided, the default language of the country will be used. Note this value is case-insensitive.                                                              | `"en"`      |
| `cookieStatementLink`   | —                                                                       | The URL of the cookie statement page the banner should link to.                                                                                                                              | `""`        |
| `cookieTechnologiesLink`| —                                                                       | The URL for the cookie technology link.                                                                                                                                                                                             | `""`        |
| `defaultPreferences`    | `all`, `necessary`, `functional`, `analytical`, `personalized`          | Allows default preferences to be passed in by the consumer, for example `{ 'functional': true, 'personalized': true, 'analytical': true }`.                                                  | `{}`        |

### Slots
This component does not have any slots. All content is controlled through properties.

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events

| Event                               | Type          | Description                                                              |
|-------------------------------------|---------------|--------------------------------------------------------------------------|
| `pie-cookie-banner-accept-all`      | `CustomEvent` | Triggered when the user chooses to accept all cookies.                   |
| `pie-cookie-banner-necessary-only`  | `CustomEvent` | Triggered when the user chooses to accept necessary cookies only.        |
| `pie-cookie-banner-manage-prefs`    | `CustomEvent` | Triggered when the user chooses to manage their cookie preferences.      |
| `pie-cookie-banner-prefs-saved`     | `CustomEvent` | Triggered when the user saves their cookie preferences.                  |


## CDN

This is not the recommended way to use the component. However, it may be appropriate for some consumers if they are unable to install the package into their application.

Example (without typography) can be seen in this [Codepen](https://codepen.io/JamieMaguire/pen/emYGwgy)

To check for the most up-to-date versions of our cookie banner and css, check their npm pages [here](https://www.npmjs.com/package/@justeattakeaway/pie-cookie-banner) and [here](https://www.npmjs.com/package/@justeattakeaway/pie-css). It is important to stay up to date. These will be the versions you use in the CDN links.

### Setup

1. Please add the `pie-css` stylesheet to your application. This can be imported from our CDN like so:

```html
<link rel="stylesheet" href="https://pie-design-system-cdn.production.jet-external.com/pie-css/v0.16.0/index.css">
```

2. Now you can add the Cookie Banner script to your application. This can also be imported from our CDN like so:

```html
<script src="https://pie-design-system-cdn.production.jet-external.com/pie-cookie-banner/v1.4.0/index.js"></script>
```

We would recommend placing this script somewhere in the bottom of your HTML body tag. However what works for each application will be different. Please consider how this could affect the loading of your page.

## Localisation

By default, the component displays its content in English `en`. To display the content in another language, you need to supply a language and country pairing to the `language` and `country` props(*).

Currently the following locale languages are supported:

```js
bg (BULGARIAN)
ca (CATALAN)
da (DANISH)
de (GERMAN)
en (ENGLISH)
es (SPANISH)
he (HEBREW)
it (ITALIAN)
nl (DUTCH)
pl (POLISH)
sk (SLOVAK)
```
And the following bespoke locales are supported (_sometimes added to accommodate specific legal wording for a particular country_):

```js
en-fr (ENGLISH-FRANCE)
fr-fr (FRENCH-FRANCE)
```
(*) This is the logic order for loading the locale;

1. We attempt to load the bespoke locale for a given language/country combination, e.g. `fr-fr`.
2. We would attempt to use the locale file based on the language supplied, e.g. if you supplied language `de` & country `ch` we would use the locale file `de`, if you supplied language `fr` & country `ca` then we would use the locale file `fr`, etc.
3. If you supply an unsupported language in the language/country combination then we would attempt to use the default locale file based on the country supplied, e.g. if you supplied language `pt` & country `es` we would use the locale file `es`, if you supplied language `ru` & country `fr` then we would use the locale file `fr`, etc.
4. If both the language and country are unsupported then we would use the default of `en`.

> If you wish to support a new language or combination, then create a new locale file and then extend the code to support this new language/country.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/cookie-banner.js';
```

```html
<!-- pass js file into <script> tag -->
<pie-cookie-banner></pie-cookie-banner>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/cookie-banner.js';

<pie-cookie-banner
  hasPrimaryActionsOnly
  :language='en'
  :country='gb'
  :defaultPreferences='{ functional: true, personalized: true, analytical: true }'
  cookieTechnologiesLink='https://justeattakeaway.com';
  cookieStatementLink='https://justeattakeaway.com'>
</pie-cookie-banner>;
```
**For React Applications:**

```jsx
// React templates
import { PieCookieBanner } from "@justeattakeaway/pie-webc/react/cookie-banner.js";

const defaultPreferences= {functional: true, personalized: true, analytical: true}

<PieCookieBanner
  hasPrimaryActionsOnly
  language="en"
  country="gb"
  defaultPreferences={defaultPreferences}
  cookieTechnologiesLink="https://justeattakeaway.com"
  cookieStatementLink="https://justeattakeaway.com">
</PieCookieBanner>
```

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
