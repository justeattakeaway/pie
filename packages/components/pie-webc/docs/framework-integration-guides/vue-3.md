# Vue 3

This guide will show you how to set up the PIE Web Components in a Vue 3 application.

> This guide assumes you have first followed the [Getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs), [Typography](https://webc.pie.design/?path=/docs/introduction-typography--docs) and [CSS setup](https://webc.pie.design/?path=/docs/introduction-css-setup--docs) guides.
> Please make sure to follow them before continuing with this guide.

## Table of Contents

- [Dependencies](#dependencies)
- [Usage](#usage)
- [Configuring the test-id attribute](#configuring-the-test-id-attribute)

## Dependencies
There are no vue-specific dependencies required. Please refer to the [Getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs) guide for the dependencies required to use PIE Web Components in your application.

## Usage
Please ensure that you import the components **without any destructuring**. Simply import the package.

```html
<script setup lang="ts">
import { ref } from 'vue';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';

import '@justeattakeaway/pie-css';
</script>

<template>
    <div class="card">
        <pie-button @click="count++"> count is {{ count }} </pie-button>

        <pie-icon-button>
            <icon-close></icon-close>
        </pie-icon-button>
    </div>
</template>

<script lang="ts">
const count = ref(0);
</script>
```

You should now be able to use any components you need in your Vue application!

## Configuring the test-id attribute

PIE components expose their internal test hooks using the `data-test-id` attribute by default. If your test tooling targets a different attribute (for example, Playwright's `testConfig.testIdAttribute`), you can tell PIE to use the same attribute name so a single `getByTestId` strategy works for both your own markup and PIE internals.

Call `setPieTestIdAttribute` **once**, before mounting the app — for example in `main.ts`:

```ts
// main.ts — before app.mount()
import { createApp } from 'vue';
import { setPieTestIdAttribute } from '@justeattakeaway/pie-webc-core';
import App from './App.vue';

setPieTestIdAttribute('data-qa');

createApp(App).mount('#app');
```

- Defaults to `data-test-id`. Pass any valid attribute name (e.g. `data-qa`). Invalid names are ignored with a warning.
- Set it **before components first render** — a component that has already rendered keeps `data-test-id` until it next updates.
- `setPieTestIdAttribute` is provided by `@justeattakeaway/pie-webc-core`, which is installed automatically as a dependency of the PIE components.
