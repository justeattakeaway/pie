<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-webc-core">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-webc-core.svg">
  </a>
</p>

# pie-webc-core

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Importing the package](#importing-the-package)
4. [Dependencies](#dependencies)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Bundling](#bundling)

## Introduction

A core library for PIE web components which contains classes, mixins, utilities and anything other functionality that can be shared across web components.


## Installation

To add `pie-webc-core` to your component, run the following on your command line:

```bash
$ yarn add @justeattakeaway/pie-webc-core
```

## Importing the package

```js
import { RequiredProperty, RtlMixin } from '@justeattakeaway/pie-webc-core';

export class MyComponent extends RtlMixin(LitElement) implements MyComponentProps {
  // ...

  @property({ type: String })
  @requiredProperty('my-component')
  public value!: string;

  // ...
}
```
## Internals
The folder `internals` contains Typescript files that are to be imported into Pie Web Components and build into the bundles for each component. Everything else in this package is designed to be a one-time imported externalised dependency in applications using the web components to prevent duplication of code. The code in `internals` is the exception to this that contains things that must be included in each component bundle.

## Shared ARIA context

`ariaContext` (with the `ContextualAria` type) lets an ancestor component supply an accessible name and/or description to a descendant, using [`@lit/context`](https://lit.dev/docs/data/context/). A provider sets the value; any component below it can consume it and decide for itself what to do with each field, applying it to whichever element carries its semantics.

`ContextualAria` is deliberately an **extensible bag** and there is intentionally no shared "apply" helper: where and how each field maps is component-specific (a radio names its host, a checkbox names its internal input), so each subscriber owns that small piece of logic. A little set/remove code is repeated across consumers, but in exchange the contract stays open to new ARIA fields without a central mapper having to know how every component applies them.

```ts
// Provider (an ancestor, e.g. pie-list-item): stitch a name/description and provide it.
private _ariaProvider = new ContextProvider(this, { context: ariaContext });
// ...in updated():
this._ariaProvider.setValue({ label: this.primaryText, description: this.secondaryText });

// Consumer (a control): read it and apply the fields it cares about to the right element.
// pie-radio applies to its host (role="radio"); pie-checkbox / pie-switch to their internal input.
@consume({ context: ariaContext, subscribe: true })
@state()
private _contextAria?: ContextualAria;
// ...in updated():
if (this._contextAria?.label) this._input.setAttribute('aria-label', this._contextAria.label);
```

### Why a context, rather than ARIA props on each component

A control already exposes its own ARIA (for example `pie-switch`'s `aria` prop), and the context is always a fallback behind those. The context solves a different problem: letting a *wrapper* name a control it does not own, and doing so without coupling the two together.

- **It crosses shadow boundaries.** `aria-labelledby` / `aria-describedby` are IDREFs and cannot point from one shadow root into another, so a wrapper that renders the visible label (like `pie-list-item`) cannot associate it with a slotted control that way. The context carries the resolved *string* instead, which the control applies inside its own shadow root.
- **It avoids prop drilling.** A provided value reaches consumers at any depth below the provider, through any number of intermediate components and shadow boundaries, without threading a prop through every layer. A provider high in the tree can supply a deeply nested control directly.
- **It decouples provider and consumer.** The control declares once that it can be named by an ancestor; the provider never needs a reference to the control, and neither needs to know the other's internals. New providers (a form field, a settings row) and new consumers compose without either side changing.
- **It is extensible.** Adding a field to `ContextualAria` is a single change that every consumer can opt into (each applying it however suits its own DOM), rather than widening the prop API of every component. Restrict additions to string/boolean ARIA that can be applied directly (not IDREFs, which cannot cross the boundary).
- **It is reactive.** With `subscribe: true`, consumers update automatically when the provided value changes.

### `parentDisabledContext`

`parentDisabledContext` (a `boolean`) applies the same pattern to disabled state: a disabling ancestor (such as a `pie-radio-group` or `pie-checkbox-group`) provides it, and descendants (such as a `pie-list-item`) consume it to reflect being disabled. It is a plain boolean rather than a bag, but it exists for the same reasons: it crosses shadow boundaries, reaches descendants at any depth without prop drilling, and decouples the disabling container from whatever chooses to react to it.

## Dependencies

This package provides `lit` as a dependency which means the package that depends on `@justeattakeaway/pie-webc-core` will automatically install `lit` into the `node_modules` folder of its consuming application.

Other dependencies may be added in future to make it easier for people to install and use our components.

## Contributing

Check out our [contributing guide](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide) for more information on [local development](https://github.com/justeattakeaway/pie/wiki/Contributing-Guide#local-development).

To run the unit tests, simply run `yarn test --filter=@justeattakeaway/pie-webc-core` from the root of the monorepo.

## Testing

- Currently we have two methods of testing our core utilities:
  - Unit tests using Vitest
  - Browser tests using Playwright

### Unit tests
We write unit tests for small pieces of functionality that can be tested in isolation. These could be things such as class decorators or utility functions. However, sometimes testing in an isolated node environment is not enough. This is where Browser tests come in.

### Browser tests
We write browser tests for functionality that requires a browser environment to test. This could be things such as component class mixins. For these, we run our tests using Playwright. This allows us to run our tests in a real browser environment and test things such as DOM manipulation and events. A useful pattern for this kind of testing is to write a mock component that uses the mixin you want to test. This allows you to test the mixin in isolation without having to worry about the implementation of the component itself.

### Naming and running tests
Currently, for writing unit tests we simply name the file `**/*.spec.ts`. To write browser tests, we name the file `**/*.browser.spec.ts`. This allows us to run all unit tests using `yarn test --filter=@justeattakeaway/pie-webc-core` and all browser tests using `yarn test:browsers --filter=@justeattakeaway/pie-webc-core`.

## Bundling
When we build the package, we run a plugin for Rollup named `rollup-plugin-visualizer`. This generates a file named `stats.html` in the root of the package. This file can be viewed in the browser to visualise the bundled Javascript and better understand what contributes to the size of the final build output.
