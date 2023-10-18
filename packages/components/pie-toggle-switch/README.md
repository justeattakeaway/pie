<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-toggle-switch">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-toggle-switch.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-toggle-switch)
2. [Installation](#installation)
3. [Importing the component](#importing-the-component)
4. [Peer Dependencies](#peer-dependencies)
5. [Props](#props)


## pie-toggle-switch

`pie-toggle-switch` is a Web Component built using the Lit library.

This component can be easily integrated into various frontend frameworks and customized through a set of properties.


## Installation

To install `pie-toggle-switch` in your application, run the following on your command line:

```bash
# npm
$ npm i @justeattakeaway/pie-toggle-switch

# yarn
$ yarn add @justeattakeaway/pie-toggle-switch
```

For full information on using PIE components as part of an application, check out the [Getting Started Guide](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components).


### Importing the component

```js
// default
import { PieToggleSwitch } from '@justeattakeaway/pie-toggle-switch';

// react
import { PieToggleSwitch } from '@justeattakeaway/pie-toggle-switch/dist/react';
```


## Peer Dependencies

> [!IMPORTANT]
> When using `pie-toggle-switch`, you will also need to include a couple of dependencies to ensure the component renders as expected. See [the PIE Wiki](https://github.com/justeattakeaway/pie/wiki/Getting-started-with-PIE-Web-Components#expected-dependencies) for more information and how to include these in your application.


## Props

| Property | Type | Default | Description |
|---|---|---|---|
| isChecked | `Boolean` | false | Indicates whether the switch is on or off |
| isDisabled | `Boolean` | false | Indicates whether the switch is disabled or not |
| aria  | `Object`  | `undefined`  | An object representing the aria labels `label` & `describedBy` that can be used on the toggle-switch;

In your markup or JSX, you can then use these to set the properties for the `pie-toggle-switch` component:

```html
<!-- Native HTML -->
<pie-toggle-switch></pie-toggle-switch>

<!-- JSX -->
<PieToggleSwitch></PieToggleSwitch>
```
