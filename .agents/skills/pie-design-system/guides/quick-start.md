# Quick Start

Follow these steps if `@justeattakeaway/pie-webc` is not yet installed in the project.

## 1. Install core packages

Using the project's package manager, install:

```bash
@justeattakeaway/pie-webc @justeattakeaway/pie-css @justeattakeaway/pie-icons-webc
```

## 2. Load the JETSansDigital font

Add the following to the `<head>` of your application:

```html
<link rel="preload" href="https://pie-design-system-cdn.production.jet-external.com/fonts/JETSansDigital-VF-opt.woff2" as="font" type="font/woff2" crossorigin>
<style>
  @font-face {
    font-family: JETSansDigital;
    src: url('https://pie-design-system-cdn.production.jet-external.com/fonts/JETSansDigital-VF-opt.woff2') format("woff2");
    font-weight: 100 1000;       /* variable font: full weight range */
    font-stretch: 25% 151%;      /* variable font: full width range */
    font-style: oblique 0deg 20deg; /* variable font: slant axis */
    font-display: swap;
  }
  body {
    font-feature-settings: "tnum"; /* tabular (fixed-width) numbers */
  }
</style>
```

> For extended language support (Hebrew, Bulgarian, Cyrillic), replace the font URL with `JETSansDigital-VF-optimised-extended.woff2`.

## 3. Import base CSS

Import `@justeattakeaway/pie-css` in your application entry point so that design tokens and base styles are available:

```js
import '@justeattakeaway/pie-css';
```

If the project uses TypeScript, add a declaration file (e.g. `src/types/pie-css.d.ts`):

```ts
declare module '*.css';
declare module '@justeattakeaway/pie-css';
```

## 4. Framework-specific setup

See the relevant framework guide:

- Next.js → Read `guides/nextjs.md`
- Nuxt 3 → Read `guides/nuxt.md`
- React (without Next.js) → Install `@lit/react` and import from the `/react/` sub-path:

```jsx
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';
```

## 5. Verify setup

Render a `<pie-button>` (or `<PieButton>` in React) in the app. If it renders with the correct JET styling, setup is complete.
