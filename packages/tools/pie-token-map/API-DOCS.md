# API Documentation — @justeattakeaway/pie-token-map

Everything exported from the package entry point (`src/index.ts`).

---

## Types

### `CssVarRef`

A template literal type representing a CSS custom property reference.

```ts
type CssVarRef = `var(--dt-${string})`;
```

All getter functions (except `getTypography`) return this type. In practice the values look like `'var(--dt-color-background-default)'` or `'var(--dt-spacing-b)'`.

---

### `TokenCategory`

A union of the nine supported token category strings.

```ts
type TokenCategory =
  | 'color'
  | 'typography'
  | 'radius'
  | 'spacing'
  | 'elevation'
  | 'gradient'
  | 'motion'
  | 'breakpoint'
  | 'zIndex';
```

Used as the first argument to `hasToken()`.

---

### `TypographyTokenValue`

An object describing the full set of CSS variable references for a single typography token. Headings and subheadings are "responsive" (they have separate `sizeWide`/`sizeNarrow` values). Body and caption tokens are "non-responsive" (they have a single `size`).

```ts
interface TypographyTokenValue {
  family: CssVarRef;            // Always present
  weight: CssVarRef;            // Always present
  size?: CssVarRef;             // Non-responsive tokens only
  lineHeight?: CssVarRef;       // Non-responsive tokens only
  sizeWide?: CssVarRef;         // Responsive tokens only
  lineHeightWide?: CssVarRef;   // Responsive tokens only
  sizeNarrow?: CssVarRef;       // Responsive tokens only
  lineHeightNarrow?: CssVarRef; // Responsive tokens only
  fontStyle?: CssVarRef;        // Italic tokens only
  textDecoration?: CssVarRef;   // Link tokens only
  paragraph?: CssVarRef;        // Body and caption tokens only
}
```

---

### Token Name Types

Each category exports a string literal union type for its valid token names. These are generated from the design tokens source.

| Type | Category | Example values |
|---|---|---|
| `ColorTokenName` | Color | `'background-default'`, `'interactive-brand'` |
| `TypographyTokenName` | Typography | `'heading-m'`, `'body-s'`, `'caption'` |
| `RadiusTokenName` | Radius | `'rounded-a'`, `'rounded-none'` |
| `SpacingTokenName` | Spacing | `'a'`, `'b'`, `'c'`, `'none'` |
| `ElevationTokenName` | Elevation | `'01'`, `'card'`, `'below-10'` |
| `GradientTokenName` | Gradient | `'jetplus-brand-01'`, `'ai-container-default'` |
| `MotionTokenName` | Motion | `'easing-in'`, `'timing-200'` |
| `BreakpointTokenName` | Breakpoint | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'` |
| `ZIndexTokenName` | Z-Index | `'base'`, `'modal'`, `'toast'`, `'tooltip'` |

---

## Functions

### `getColor(name)`

Look up a color design token by name.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the color token name |
| **Returns** | `CssVarRef \| undefined` — the CSS variable reference, or `undefined` if the name is not found |

```ts
import { getColor } from '@justeattakeaway/pie-token-map';

getColor('background-default');  // 'var(--dt-color-background-default)'
getColor('interactive-brand');   // 'var(--dt-color-interactive-brand)'
getColor('nonexistent');         // undefined
```

Platform-agnostic aliases are included. For example, `getColor('container-base')` returns `'var(--dt-color-web-container-base)'` — the alias maps to the web-prefixed CSS variable automatically.

---

### `getTypography(name)`

Look up a typography design token by name. Returns a composite object instead of a single CSS variable string.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the typography token name |
| **Returns** | `TypographyTokenValue \| undefined` — an object of CSS variable references, or `undefined` if not found |

```ts
import { getTypography } from '@justeattakeaway/pie-token-map';

const heading = getTypography('heading-xs');
// {
//   family: 'var(--dt-font-heading-xs-family)',
//   weight: 'var(--dt-font-heading-xs-weight)',
//   sizeWide: 'var(--dt-font-heading-xs-size--wide)',
//   lineHeightWide: 'var(--dt-font-heading-xs-line-height--wide)',
//   sizeNarrow: 'var(--dt-font-heading-xs-size--narrow)',
//   lineHeightNarrow: 'var(--dt-font-heading-xs-line-height--narrow)',
// }

const body = getTypography('body-s');
// {
//   family: 'var(--dt-font-body-s-family)',
//   weight: 'var(--dt-font-body-s-weight)',
//   size: 'var(--dt-font-body-s-size)',
//   lineHeight: 'var(--dt-font-body-s-line-height)',
//   paragraph: 'var(--dt-font-body-s-paragraph)',
// }

getTypography('nonexistent'); // undefined
```

**Responsive vs. non-responsive:** heading and subheading tokens have `sizeWide`/`sizeNarrow`/`lineHeightWide`/`lineHeightNarrow` (and no `size`/`lineHeight`). Body, caption, and interactive tokens have `size`/`lineHeight` (and no wide/narrow variants).

**Optional fields:** `fontStyle` appears only on italic tokens (e.g., `heading-m-italic`). `textDecoration` appears only on link tokens (e.g., `body-s-link`). `paragraph` appears on body and caption tokens but not on heading or interactive tokens.

---

### `getRadius(name)`

Look up a border-radius design token by name.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the radius token name |
| **Returns** | `CssVarRef \| undefined` |

```ts
import { getRadius } from '@justeattakeaway/pie-token-map';

getRadius('rounded-a');   // 'var(--dt-radius-rounded-a)'
getRadius('rounded-none'); // 'var(--dt-radius-rounded-none)'
getRadius('nonexistent'); // undefined
```

Available names: `rounded-a`, `rounded-b`, `rounded-c`, `rounded-d`, `rounded-e`, `rounded-none`.

---

### `getSpacing(name)`

Look up a spacing design token by name.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the spacing token name |
| **Returns** | `CssVarRef \| undefined` |

```ts
import { getSpacing } from '@justeattakeaway/pie-token-map';

getSpacing('b');    // 'var(--dt-spacing-b)'
getSpacing('none'); // 'var(--dt-spacing-none)'
getSpacing('zzz');  // undefined
```

Available names: `a`, `a-small`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `none`.

---

### `getElevation(name)`

Look up an elevation (box-shadow) design token by name.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the elevation token name |
| **Returns** | `CssVarRef \| undefined` |

```ts
import { getElevation } from '@justeattakeaway/pie-token-map';

getElevation('below-10'); // 'var(--dt-elevation-below-10)'
getElevation('card');     // 'var(--dt-elevation-card)'
getElevation('nope');     // undefined
```

Available names: `01`, `02`, `03`, `04`, `05`, `above-20`, `below-10`, `below-20`, `card`, `inverse-01`, `inverse-02`, `inverse-03`, `inverse-04`, `inverse-05`, `inverse-above-20`, `inverse-below-10`, `inverse-below-20`, `inverse-card`.

---

### `getGradient(name)`

Look up a gradient design token by name.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the gradient token name |
| **Returns** | `CssVarRef \| undefined` |

```ts
import { getGradient } from '@justeattakeaway/pie-token-map';

getGradient('jetplus-brand-01');    // 'var(--dt-gradient-jetplus-brand-01)'
getGradient('ai-container-default'); // 'var(--dt-gradient-ai-container-default)'
getGradient('nonexistent');          // undefined
```

Available names: `ai-border-default`, `ai-container-default`, `jetplus-brand-01`, `jetplus-brand-02`, `jetplus-brand-03`, `jetplus-support-01`, `jetplus-support-02`.

---

### `getMotion(name)`

Look up a motion (animation easing or timing) design token by name.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the motion token name |
| **Returns** | `CssVarRef \| undefined` |

```ts
import { getMotion } from '@justeattakeaway/pie-token-map';

getMotion('easing-in');  // 'var(--dt-motion-easing-in)'
getMotion('timing-200'); // 'var(--dt-motion-timing-200)'
getMotion('nonexistent'); // undefined
```

Available names: `easing-in`, `easing-out`, `easing-persistent-expressive`, `easing-persistent-functional`, `timing-100`, `timing-150`, `timing-200`, `timing-250`, `timing-300`, `timing-350`.

---

### `getBreakpoint(name)`

Look up a responsive breakpoint design token by name.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the breakpoint token name |
| **Returns** | `CssVarRef \| undefined` |

```ts
import { getBreakpoint } from '@justeattakeaway/pie-token-map';

getBreakpoint('sm');  // 'var(--dt-breakpoint-sm)'
getBreakpoint('xxl'); // 'var(--dt-breakpoint-xxl)'
getBreakpoint('nonexistent'); // undefined
```

Available names: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.

---

### `getZIndex(name)`

Look up a z-index design token by name. These values come from `pie-css` rather than `tokens.json`.

| Detail | Value |
|---|---|
| **Parameter** | `name: string` — the z-index token name |
| **Returns** | `CssVarRef \| undefined` |

```ts
import { getZIndex } from '@justeattakeaway/pie-token-map';

getZIndex('modal'); // 'var(--dt-z-index-modal)'
getZIndex('toast'); // 'var(--dt-z-index-toast)'
getZIndex('nonexistent'); // undefined
```

Available names: `base`, `bottom-sheet`, `cookie-banner`, `dropdown`, `fab`, `modal`, `popover`, `side-sheet`, `toast`, `tooltip`.

---

### `hasToken(category, name)`

Check whether a token name exists in a given category. Useful for validation before calling a getter.

| Detail | Value |
|---|---|
| **Parameters** | `category: TokenCategory` — one of the nine category strings; `name: string` — the token name to check |
| **Returns** | `boolean` — `true` if the token exists, `false` otherwise |

```ts
import { hasToken } from '@justeattakeaway/pie-token-map';

hasToken('color', 'background-default'); // true
hasToken('color', 'nonexistent');        // false
hasToken('spacing', 'b');                // true
hasToken('zIndex', 'modal');             // true
```

---

## Objects

### `tokenMap`

A convenience object that bundles all getter functions and raw maps into a single import. Useful when you want one import to access everything.

| Property | Type | Description |
|---|---|---|
| `getColor` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getColor` function |
| `getTypography` | `(name: string) => TypographyTokenValue \| undefined` | Same as the standalone `getTypography` function |
| `getRadius` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getRadius` function |
| `getSpacing` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getSpacing` function |
| `getElevation` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getElevation` function |
| `getGradient` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getGradient` function |
| `getMotion` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getMotion` function |
| `getBreakpoint` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getBreakpoint` function |
| `getZIndex` | `(name: string) => CssVarRef \| undefined` | Same as the standalone `getZIndex` function |
| `hasToken` | `(category: TokenCategory, name: string) => boolean` | Same as the standalone `hasToken` function |
| `version` | `string` | The version of `@justeat/pie-design-tokens` used to generate the maps (e.g., `'7.11.1'`) |
| `colors` | `Record<ColorTokenName, CssVarRef>` | The raw color map object |
| `typography` | `Record<TypographyTokenName, TypographyTokenValue>` | The raw typography map object |
| `radii` | `Record<RadiusTokenName, CssVarRef>` | The raw radius map object |
| `spacing` | `Record<SpacingTokenName, CssVarRef>` | The raw spacing map object |
| `elevation` | `Record<ElevationTokenName, CssVarRef>` | The raw elevation map object |
| `gradients` | `Record<GradientTokenName, CssVarRef>` | The raw gradient map object |
| `motion` | `Record<MotionTokenName, CssVarRef>` | The raw motion map object |
| `breakpoints` | `Record<BreakpointTokenName, CssVarRef>` | The raw breakpoint map object |
| `zIndices` | `Record<ZIndexTokenName, CssVarRef>` | The raw z-index map object |

```ts
import { tokenMap } from '@justeattakeaway/pie-token-map';

tokenMap.getColor('interactive-brand');        // 'var(--dt-color-interactive-brand)'
tokenMap.hasToken('elevation', 'card');         // true
tokenMap.version;                               // '7.11.1'
Object.keys(tokenMap.colors);                   // all color token names
```

---

## Constants

### `tokenCategories`

A readonly array of all nine category strings. Useful for iteration.

```ts
import { tokenCategories } from '@justeattakeaway/pie-token-map';

// ['color', 'typography', 'radius', 'spacing', 'elevation',
//  'gradient', 'motion', 'breakpoint', 'zIndex']
```

### `tokensVersion`

The version string of the `@justeat/pie-design-tokens` package that was used to generate the current maps.

```ts
import { tokensVersion } from '@justeattakeaway/pie-token-map';

console.log(tokensVersion); // '7.11.1'
```

### Token Name Arrays

Each category exports a readonly array of its valid token names. These are the same values used to define the token name union types.

| Export | Example |
|---|---|
| `colorTokenNames` | `['active-01', 'background-default', ...]` |
| `typographyTokenNames` | `['body-l', 'body-s', 'heading-m', ...]` |
| `radiusTokenNames` | `['rounded-a', 'rounded-b', ...]` |
| `spacingTokenNames` | `['a', 'a-small', 'b', ...]` |
| `elevationTokenNames` | `['01', '02', 'card', ...]` |
| `gradientTokenNames` | `['ai-border-default', 'jetplus-brand-01', ...]` |
| `motionTokenNames` | `['easing-in', 'timing-100', ...]` |
| `breakpointTokenNames` | `['lg', 'md', 'sm', 'xl', 'xs', 'xxl']` |
| `zIndexTokenNames` | `['base', 'modal', 'toast', ...]` |

### Raw Map Objects

Each category also exports its full map object directly, for cases where you want to iterate or spread all tokens at once.

| Export | Type |
|---|---|
| `colorMap` | `Record<ColorTokenName, CssVarRef>` |
| `typographyMap` | `Record<TypographyTokenName, TypographyTokenValue>` |
| `radiusMap` | `Record<RadiusTokenName, CssVarRef>` |
| `spacingMap` | `Record<SpacingTokenName, CssVarRef>` |
| `elevationMap` | `Record<ElevationTokenName, CssVarRef>` |
| `gradientMap` | `Record<GradientTokenName, CssVarRef>` |
| `motionMap` | `Record<MotionTokenName, CssVarRef>` |
| `breakpointMap` | `Record<BreakpointTokenName, CssVarRef>` |
| `zIndexMap` | `Record<ZIndexTokenName, CssVarRef>` |

---

## Code Generation Script

The file `scripts/generate-token-map.ts` is not part of the public API, but it is responsible for creating all the files in `src/generated/`. It reads `@justeat/pie-design-tokens/dist/tokens.json` and writes one TypeScript file per category.

### Key internal functions (not exported)

| Function | What it does |
|---|---|
| `generateSimpleMap(names, prefix, typeName, mapName, namesArrayName)` | Creates a `.ts` file mapping token names to `var(--dt-{prefix}-{name})` strings. Used for radius, spacing, elevation, gradient, motion, breakpoint, and z-index. |
| `generateColorMap()` | Generates the color map, filtering out platform-specific tokens (`android-*`, `ios-*`) and adding platform-agnostic aliases (`container-base` → `web-container-base`). |
| `generateTypographyMap()` | Generates the typography map with composite `TypographyTokenValue` objects, handling responsive vs. non-responsive tokens, italic styles, link decorations, and paragraph spacing. |
| `generateVersion()` | Writes a file exporting the `@justeat/pie-design-tokens` package version string. |

Run the generator with:

```bash
yarn generate
```
