---
eleventyNavigation:
    key: Overview
    parent: engineers-web-components
    order: 1
permalink: engineers/web-components/
---

## Introduction

[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) are a set of native browser technologies that allow us to build custom components. In other words, create custom HTML elements native to browsers.

Currently, this technology is supported by all browsers, making it possible to have one central library that will work with most frontend frameworks.

The long-term aim will be to migrate JET teams over to this Web Component system, so we have one single source of truth for our global PIE components.

{% notification {
  type: "information",
  message: "Our web components can be used via the [@justeattakeaway/pie-webc](https://npmjs.com/package/@justeattakeaway/pie-webc) library. Individual component packages are also available, but we advise sticking to the single entry point."
} %}

___

## Getting started

For every framework, you can start with our [Prerequisites Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).

### Integration Guides
For integrating our components with specific frameworks, please follow these guides:

- [Nuxt 3](/engineers/web-components/integration-guides/nuxt-3/)

- [NextJS 14](/engineers/web-components/integration-guides/nextjs-14/)

### Other guides
- [Vue & Nuxt ‐ Known gotchas](https://github.com/justeattakeaway/pie/wiki/Vue-Nuxt-%E2%80%90-Known-gotchas)

For existing users, you may be interested in our [Migration guide of Web Components to Lit 3](https://github.com/justeattakeaway/pie/wiki/PIE-Web-Components-%E2%80%90-Nuxt-2---Next-10---Vue-2-Integration). This guide also details some specific configurations for React, Next and Vue2.

More guides coming soon! 🚀

___

## Component status

You can find the documentation for all of our components on this site in the **Components** section.

For a list of which components are supported in each of our libraries, please refer to the [Component Status page](/components/component-status/).

---

## Usage

The following guides are meant to support you while using our web components.

### Forms
For information about form elements and how to handle form data and validation, check out our [Form Usage Guide](https://github.com/justeattakeaway/pie/wiki/Form-Controls#pie-forms-usage).
