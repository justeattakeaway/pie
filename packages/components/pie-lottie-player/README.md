# @justeattakeaway/pie-lottie-player

[Source Code](https://github.com/justeattakeaway/pie/tree/main/packages/components/pie-lottie-player) | [NPM](https://www.npmjs.com/package/@justeattakeaway/pie-lottie-player)
<p>
  <a href="https://www.npmjs.com/@justeattakeaway/pie-lottie-player">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-lottie-player.svg">
  </a>
</p>

`@justeattakeaway/pie-lottie-player` is a Web Component built using the Lit library. It offers a simple and accessible wrapper component for the animation library, [Lottie](https://github.com/airbnb/lottie-web), for web applications.

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Properties](#properties)
  - [Slots](#slots)
  - [CSS Variables](#css-variables)
  - [Events](#events)
- [Usage Examples](#usage-examples)
- [Accessibility](#accessibility)
- [Questions and Support](#questions-and-support)
- [Contributing](#contributing)

## Installation

> To install any of our web components in your application, we would suggest following the [getting started guide](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) to set up your project.

Ideally, you should install the component using the **`@justeattakeaway/pie-webc`** package, which includes all of the components. Or you can install the individual component package.

## Documentation

### Properties

| Prop | Options | Description | Default |
| --- | --- | --- | --- |
| `animationSrc` | — | Lottie animation JSON file URL or relative path. `animationSrc` and `animationData` are mutually exclusive. | `-` |
| `animationData` | — | Object with Lottie animation data. `animationSrc` and `animationData` are mutually exclusive. | `-` |
| `loopDisabled` | `true`, `false` | By default, animations loop. Setting this prop to `true` will prevent that behavior. | `false` |
| `autoPlayDisabled` | `true`, `false` | By default, animations start playing as soon as their data is available. Setting this prop to `true` will prevent that behavior. | `false` |
| `speed` | — | Determines the animation playback speed. `1` is normal speed, `2` is twice as fast, etc. | `1` |
| `direction` | `"forward"`, `"reverse"` | Sets the animation playback direction. | `"forward"` |

### Slots
This component does not have any slots. All content is controlled through properties.

### CSS Variables
This component does not expose any CSS variables for style overrides.

### Events
This component does not emit any custom events. In order to add event listening to this component, you can treat it like a native HTML element in your application.

## Usage Examples

**For HTML:**

```js
// import as module into a js file e.g. main.js
import '@justeattakeaway/pie-webc/components/pie-lottie-player.js';
```

```html
<!-- pass js file into <script> tag -->
<pie-lottie-player animationSrc="./animation-file.json"></pie-lottie-player>
<script type="module" src="/main.js"></script>
```

**For Native JS Applications, Vue, Angular, Svelte, etc.:**

```js
// Vue templates (using Nuxt 3)
import '@justeattakeaway/pie-webc/components/pie-lottie-player.js';

<pie-lottie-player animationSrc="./animation-file.json"></pie-lottie-player>
```

**For React Applications:**

```jsx
import { PieLottiePlayer } from '@justeattakeaway/pie-webc/react/lottie-player.js';

<PieLottiePlayer animationSrc="./animation-file.json"></PieLottiePlayer>
```

## Accessibility

Currently the component is always hidden from screen readers because animations should only be decorative and supplementary. Any important meaning and context should be presented alongside the animation as text.

For the users with the "Reduce motion" setting enabled, the animation will be paused on the first frame.

## Questions and Support

If you work at Just Eat Takeaway.com, please contact us on **#help-designsystem**. Otherwise, please raise an issue on [Github](https://github.com/justeattakeaway/pie/issues).

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development) and how to run specific [component tests](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#testing).
