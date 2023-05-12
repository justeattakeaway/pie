<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-button">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-button.svg">
  </a>
</p>

# Table of Contents

1. [Introduction](#pie-button)
2. [Local Development](#local-development)
3. [Props](#props)
4. [Events](#events)
   - [HTML example](#html)
   - [Vue example (using Nuxt 3)](#vue-templates-using-nuxt-3)
   - [React example (using Next 13)](#react-templates-using-next-13)
5. [TypeScript Enum Exports](#typescript-enum-exports)
6. [Testing](#testing)
   - [Browser Tests](#browser-tests)
   - [Visual Tests](#visual-tests)


## `pie-button`

`pie-button` is a Web Component built using the Lit library. It offers a simple and accessible button component for web applications. This component can be easily integrated into various frontend frameworks and customized through a set of properties. For TypeScript projects, it also provides exported enums for type safety and autocompletion.

## Local development

Install dependencies at the root
```
yarn
```

Navigate to this folder, compile with TypeScript and build with Vite
```
cd packages/components/pie-button
yarn build
```

Compile and watch for changes (auto-compiles `dist` on save)
```
yarn watch
```

## Props

| Property    | Type      | Default         | Description                                                          |
|-------------|-----------|-----------------|----------------------------------------------------------------------|
| size        | `String`  | `BUTTON_SIZE.MEDIUM`    | Size of the button, one of `BUTTON_SIZE` enum values (TypeScript Enum) or a raw string value such as `'large'` |
| type        | `String`  | `BUTTON_TYPE.SUBMIT`    | Type of the button, one of `BUTTON_TYPE` enum values (TypeScript Enum) or a raw string value such as `'submit'` |
| variant     | `String`  | `BUTTON_VARIANT.PRIMARY` | Variant of the button, one of `BUTTON_VARIANT` enum values (TypeScript Enum) or a raw string value such as `'primary'` |
| disabled    | `Boolean` | `false`         | If `true`, disables the button.                                      |
| isFullWidth | `Boolean` | `false`         | If `true`, sets the button width to 100% of it's container.                            |


## Events

This component does not use any custom event handlers. In order to add event listening to this component, you can treat it like a native HTML element in your application.

For example, to add a click handler in various templates:

### HTML
```html
<!-- Other attributes omitted for clarity -->
<pie-button onclick="e => console.log(e)">Click me!</pie-button>
```

### Vue templates (using Nuxt 3)
```html
<!-- Other attributes omitted for clarity -->
<pie-button @click="handleClick">Click me!</pie-button>
```

### React templates (using Next 13)
```html
<!-- Other attributes omitted for clarity -->
<PieButton onClick={handleClick}>increment</PieButton>

```

## TypeScript Enum Exports

For TypeScript projects, we export three enums related to button properties: `BUTTON_SIZE`, `BUTTON_TYPE`, and `BUTTON_VARIANT`. You can import and use these enums to set the corresponding property values for the `pie-button` component. This ensures better type safety and autocompletion in your project.

Here's an example of how to import and use the enums in a TypeScript project:

```typescript
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

// Using the enums to set property values
const myButtonSize = BUTTON_SIZE.LARGE;
const myButtonType = BUTTON_TYPE.RESET;
const myButtonVariant = BUTTON_VARIANT.SECONDARY;
```

In your markup or JSX, you can then use these variables to set the properties for the pie-button component:

```html
<PieButton size={myButtonSize} type={myButtonType} variant={myButtonVariant}>Click me!</PieButton>
```


## Testing

### Browser tests

Run at the root of the monorepo:
```
yarn test:browsers --filter=pie-button
```

### Visual tests

Run at the root of the monorepo:
```
yarn test:visual --filter=pie-button
```
