---
eleventyNavigation:
    key: Code
    parent: 'Cookie Banner'
    order: 3
shouldShowContents: true
eleventyComputed:
    props: "{% include './props.json' %}"
    events: "{% include './events.json' %}"
---

## Overview

<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-cookie-banner">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-cookie-banner.svg">
  </a>
</p>

`pie-cookie-banner` is a Web Component built using [Lit](https://lit.dev/).

This component can be easily integrated into various frontend frameworks and customised through a set of properties.

{% notification {
  type: "information",
  iconName: "engineers",
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/components-cookie-banner) instance!"
} %}

## Cookies
`pie-cookie-banner` purely handles the UI and user interactions for cookie consent. It does not handle the setting or management of cookies or the storage of user preferences. It is the responsibility of the consuming application to handle these aspects. See [Events](#events) for more information.


## Installation

To install `pie-cookie-banner` in your application, run the following on your command line:

```shell
npm i @justeattakeaway/pie-cookie-banner
```

```shell
yarn add @justeattakeaway/pie-cookie-banner
```

{% componentCodeMoreInformationNotification %}

## Props

{% componentDetailsTable {
  tableData: props
} %}

## Events

The PIE cookie banner does not directly manage cookies within the application or component. Instead, it has several events that application developers (consumers of this component) can listen for, letting applications manage their own cookies. The table below provides a list of events you can listen for:

{% componentDetailsTable {
tableData: events
} %}

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

{% notification {
  type: "information",
  message: "If you wish to support a new language or combination, then create a new locale file and then extend the code to support this new language/country."
} %}

## Examples

For HTML:

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-cookie-banner';
```

```html
<!-- pass js file into <script> tag -->
<pie-cookie-banner></pie-cookie-banner>
<script type="module" src="/main.js"></script>
```

For Native JS Applications, Vue, Angular, Svelte etc.:

```js
// Default – for Native JS Applications, Vue, Angular, Svelte, etc.
import '@justeattakeaway/pie-cookie-banner';

// Or, if you need to use the component class
import { PieCookieBanner } from '@justeattakeaway/pie-cookie-banner';
```

Use of locales in Vue:

```html
// Vue templates (using Nuxt 3)
<script setup lang="ts">
  import '@justeattakeaway/pie-cookie-banner';
</script>

<pie-cookie-banner
  hasPrimaryActionsOnly
  :language='en'
  :country='gb'
  cookieTechnologiesLink='https://justeattakeaway.com';
  cookieStatementLink='https://justeattakeaway.com'>
</pie-cookie-banner>;
```

Default preferences can be configured and passed to the component:

```jsx
// React templates
import { PieCookieBanner } from "@justeattakeaway/pie-cookie-banner/dist/react";

const defaultPreferences= {functional: true, personalized: true, analytical: true}

<PieCookieBanner
    language='en'
    country='gb'
    defaultPreferences={defaultPreferences}
/>
```


{% notification {
type: "neutral",
iconName: "link",
message: "For more examples, see [here](https://github.com/justeattakeaway/pie-aperture/tree/main)."
} %}


## Changelog

{% notification {
type: "neutral",
iconName: "link",
message: "See [here](https://github.com/justeattakeaway/pie/blob/main/packages/components/pie-cookie-banner/CHANGELOG.md)."
} %}
