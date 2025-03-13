<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-cookie-banner">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-cookie-banner.svg">
  </a>
</p>

## pie-cookie-banner

`pie-cookie-banner` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.

## Cookies
`pie-cookie-banner` purely handles the UI and user interactions for cookie consent. It does not handle the setting or management of cookies or the storage of user preferences. It is the responsibility of the consuming application to handle these aspects.


## Installation

To install `pie-cookie-banner` in your application, run the following on your command line:

```bash
npm i @justeattakeaway/pie-cookie-banner

yarn add @justeattakeaway/pie-cookie-banner
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).

## CDN Usage

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
<script src="https://pie-design-system-cdn.production.jet-external.com/pie-cookie-banner/1.3.0/index.js"></script>
```

We would recommend placing this script somewhere in the bottom of your HTML body tag. However what works for each application will be different. Please consider how this could affect the loading of your page.

## Documentation

Visit  [Cookie Banner | PIE Design System](https://pie.design/patterns/cookie-banner/code/) to view more information on this component.

## Questions

Please head to [FAQs | PIE Design System](https://pie.design/support/contact-us/) to see our FAQs and get in touch.

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
