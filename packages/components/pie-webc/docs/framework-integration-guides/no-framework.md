# No framework

This guide will show you how to set up the PIE Web Components in a web application without any specific framework.

> This guide assumes you have first followed the [Getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs), [Typography](https://webc.pie.design/?path=/docs/introduction-typography--docs) and [CSS setup](https://webc.pie.design/?path=/docs/introduction-css-setup--docs) guides.
> Please make sure to follow them before continuing with this guide.

## Table of Contents

- [Dependencies](#dependencies)
- [Usage](#usage)
- [Configuring the test-id attribute](#configuring-the-test-id-attribute)

## Dependencies
Please refer to the [Getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) guide for the dependencies required to use PIE Web Components in your application.

## Usage
Please ensure that you import the components **without any destructuring**. Simply import the package.

```ts
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
import '@justeattakeaway/pie-css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="card">
        <pie-button id="counter" type="button">count is 0</pie-button>
        <pie-icon-button>
            <icon-close></icon-close>
        </pie-icon-button>
    </div>
`;

function setupCounter(button: HTMLElement) {
    let counter = 0;
    const updateText = () => {
        button.textContent = `count is ${counter}`;
    };
    button.addEventListener('click', () => {
        counter++;
        updateText();
    });
    updateText();
}

setupCounter(document.querySelector<HTMLElement>('#counter')!);
```

You should now be able to use any components you need in your application!

## Configuring the test-id attribute

PIE components expose their internal test hooks using the `data-test-id` attribute by default. If your test tooling targets a different attribute (for example, Playwright's `testConfig.testIdAttribute`), you can tell PIE to use the same attribute name so a single `getByTestId` strategy works for both your own markup and PIE internals.

Call `setPieTestIdAttribute` **once**, before any PIE component is added to the page:

```ts
import { setPieTestIdAttribute } from '@justeattakeaway/pie-webc-core';

// Run before the components are rendered into the DOM.
setPieTestIdAttribute('data-qa');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <pie-button id="counter" type="button">count is 0</pie-button>
`;
```

- Defaults to `data-test-id`. Pass any valid attribute name (e.g. `data-qa`). Invalid names are ignored with a warning.
- Set it **before components first render** — a component that has already rendered keeps `data-test-id` until it next updates.
- `setPieTestIdAttribute` is provided by `@justeattakeaway/pie-webc-core`, which is installed automatically as a dependency of the PIE components.
