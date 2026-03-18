# @justeattakeaway/pie-token-map

Programmatic lookup of PIE design tokens by name. Instead of hard-coding CSS custom property strings throughout your codebase, this package gives you typed functions and maps that return the correct `var(--dt-...)` references at runtime. It works alongside `pie-css` (which defines the actual custom properties) and PIE web components.

## Status

**Alpha** — the API is functional and tested but may change before 1.0.

## Tech Stack

| Tool | Purpose |
|---|---|
| TypeScript | Source language |
| Vite | Library bundler (ES module output) |
| Vitest | Unit testing |
| `vite-plugin-dts` | Generates rolled-up `.d.ts` type declarations |
| `rollup-plugin-visualizer` | Bundle size analysis (`stats.html`) |
| `@justeat/pie-design-tokens` | Source of truth for token definitions (`tokens.json`) |
| Turborepo | Monorepo task orchestration (the `run -T` commands) |

## Installation

```bash
# With yarn (recommended inside the PIE monorepo)
yarn add @justeattakeaway/pie-token-map

# With npm
npm install @justeattakeaway/pie-token-map
```

### Peer Requirement

Your page must load `pie-css` so that the CSS custom properties (`--dt-color-*`, `--dt-font-*`, etc.) are actually defined. Without `pie-css`, the `var(--dt-...)` strings this package returns will resolve to empty values in the browser.

## Usage Examples

### Basic token lookup

```ts
import { getColor, getSpacing, getRadius } from '@justeattakeaway/pie-token-map';

// Returns 'var(--dt-color-background-default)' or undefined
const bg = getColor('background-default');

// Returns 'var(--dt-spacing-b)' or undefined
const gap = getSpacing('b');

// Returns 'var(--dt-radius-rounded-a)' or undefined
const corners = getRadius('rounded-a');
```

### Typography tokens

Typography tokens are composite objects rather than single CSS var strings, because a single font style involves multiple properties.

```ts
import { getTypography } from '@justeattakeaway/pie-token-map';

const heading = getTypography('heading-m');
// heading.family    → 'var(--dt-font-heading-m-family)'
// heading.weight    → 'var(--dt-font-heading-m-weight)'
// heading.sizeWide  → 'var(--dt-font-heading-m-size--wide)'
// heading.sizeNarrow → 'var(--dt-font-heading-m-size--narrow)'

const body = getTypography('body-s');
// body.size       → 'var(--dt-font-body-s-size)'
// body.lineHeight → 'var(--dt-font-body-s-line-height)'
// body.paragraph  → 'var(--dt-font-body-s-paragraph)'
```

### Check if a token exists

```ts
import { hasToken } from '@justeattakeaway/pie-token-map';

hasToken('color', 'background-default'); // true
hasToken('color', 'made-up-name');       // false
hasToken('zIndex', 'modal');             // true
```

### Use the convenience object

```ts
import { tokenMap } from '@justeattakeaway/pie-token-map';

tokenMap.getColor('interactive-brand');
tokenMap.getSpacing('d');
tokenMap.hasToken('radius', 'rounded-a');
tokenMap.version; // e.g. '7.11.1'
```

### Access raw maps directly

```ts
import { colorMap, spacingMap } from '@justeattakeaway/pie-token-map';

// Iterate all color tokens
Object.entries(colorMap).forEach(([name, cssVar]) => {
  console.log(name, cssVar);
});
```

## Integration with pie-css and Web Components

### With pie-css

`pie-css` outputs the CSS custom properties that this package references. A typical setup:

```html
<!-- Load pie-css to define the custom properties -->
<link rel="stylesheet" href="@user/pie-css/css/pie.css" />

<script type="module">
  import { getColor, getSpacing } from '@justeattakeaway/pie-token-map';

  // Now the var() strings resolve to real values
  document.querySelector('.card').style.backgroundColor = getColor('container-default');
  document.querySelector('.card').style.padding = getSpacing('d');
</script>
```

### With PIE Web Components

Use token-map inside a web component to apply design tokens programmatically:

```ts
import { LitElement, html, css, unsafeCSS } from 'lit';
import { getColor, getSpacing, getRadius } from '@justeattakeaway/pie-token-map';

class MyCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: ${unsafeCSS(getColor('container-default'))};
      padding: ${unsafeCSS(getSpacing('d'))};
      border-radius: ${unsafeCSS(getRadius('rounded-b'))};
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
customElements.define('my-card', MyCard);
```

### Dynamic styling based on tokens

```ts
import { tokenMap } from '@justeattakeaway/pie-token-map';

function applyElevation(element: HTMLElement, level: string) {
  const elevation = tokenMap.getElevation(level);
  if (elevation) {
    element.style.boxShadow = elevation;
  }
}

function applyMotion(element: HTMLElement) {
  const easing = tokenMap.getMotion('easing-persistent-functional');
  const duration = tokenMap.getMotion('timing-200');
  if (easing && duration) {
    element.style.transition = `all ${duration} ${easing}`;
  }
}
```

## Token Categories

This package covers nine categories of design tokens:

| Category | Getter function | Example token names |
|---|---|---|
| Color | `getColor()` | `background-default`, `interactive-brand`, `content-link` |
| Typography | `getTypography()` | `heading-m`, `body-s`, `caption`, `interactive-l` |
| Radius | `getRadius()` | `rounded-a` through `rounded-e`, `rounded-none` |
| Spacing | `getSpacing()` | `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `none` |
| Elevation | `getElevation()` | `01` through `05`, `card`, `below-10`, `above-20` |
| Gradient | `getGradient()` | `jetplus-brand-01`, `ai-container-default` |
| Motion | `getMotion()` | `easing-in`, `easing-out`, `timing-200` |
| Breakpoint | `getBreakpoint()` | `xs`, `sm`, `md`, `lg`, `xl`, `xxl` |
| Z-Index | `getZIndex()` | `base`, `modal`, `toast`, `tooltip`, `dropdown` |

## Scripts

```bash
yarn generate      # Regenerate token maps from @justeat/pie-design-tokens
yarn build         # Generate + bundle with Vite
yarn test          # Run unit tests with Vitest
yarn lint:scripts  # Lint with ESLint
yarn watch         # Build in watch mode
```

## How Code Generation Works

The `scripts/generate-token-map.ts` script reads `@justeat/pie-design-tokens/dist/tokens.json`, then writes typed TypeScript map files into `src/generated/`. These generated files are committed to the repo so consumers do not need the design tokens package installed at runtime. When the upstream tokens package is updated, run `yarn generate` to refresh the maps.

## Contribution Guidelines

1. **Clone the PIE monorepo** — this package lives at `packages/tools/pie-token-map`.
2. **Install dependencies** — run `yarn` from the repo root.
3. **Make changes** — edit files in `src/` or `scripts/`. Do not edit files in `src/generated/` by hand; run `yarn generate` instead.
4. **Run tests** — `yarn test` must pass before you open a PR.
5. **Run the linter** — `yarn lint:scripts` (or `yarn lint:scripts:fix` to auto-fix).
6. **Keep generated files in sync** — if you update the generator script or bump the design tokens version, run `yarn generate` and commit the updated generated files.
7. **Follow the existing code style** — the project uses ESLint with the shared `@justeattakeaway/pie-components-config` configuration.
8. **Open a PR** against the main PIE repo with a clear description of what changed and why.
