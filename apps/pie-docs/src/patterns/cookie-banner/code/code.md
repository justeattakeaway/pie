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
  message: "You can try out this component on our [Storybook](https://webc.pie.design/?path=/story/cookie-banner) instance!"
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

{% notification {
  type: "neutral",
  iconName: "link",
  message: "For more information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components)."
} %}

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

By default, the component displays its content in English. To display the content in another language, you need to import the locale data for that language and pass it in the `locale` prop. For example, to display the content in Dutch, you need to import the Dutch locale data:

```js
import locale from '@justeattakeaway/pie-cookie-banner/locales/nl-nl.json';

<!-- JSX -->
<PieCookieBanner locale={locale}></PieCookieBanner>
```

It's possible to import all locales at once, if necessary:

```js
import allLocales from '@justeattakeaway/pie-cookie-banner/locales';
```

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
  import enGB from "@justeattakeaway/pie-cookie-banner/locales/en-gb.json";
</script>

<pie-cookie-banner
  hasPrimaryActionsOnly
  :locale='enGB'
  cookieTechnologiesLink='https://justeattakeaway.com';
  cookieStatementLink='https://justeattakeaway.com'>
</pie-cookie-banner>;
```

Default preferences can be configured and passed to the component:

```jsx
// React templates (using Next 13)
import { PieCookieBanner } from "@justeattakeaway/pie-cookie-banner/dist/react";
import locales from "@justeattakeaway/pie-cookie-banner/locales";

const defaultPreferences= {functional: true, personalized: true, analytical: true}

<PieCookieBanner
    locale={locales.enGB}
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
