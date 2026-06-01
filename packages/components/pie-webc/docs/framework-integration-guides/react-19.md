# React 19

This guide will show you how to set up the PIE Web Components in a React 19 application.

> This guide assumes you have first followed the [Getting started](https://webc.pie.design/?path=/docs/introduction-getting-started--docs), [Typography](https://webc.pie.design/?path=/docs/introduction-typography--docs) and [CSS setup](https://webc.pie.design/?path=/docs/introduction-css-setup--docs) guides.
> Please make sure to follow them before continuing with this guide.

## Table of Contents

- [Dependencies](#dependencies)
- [Usage](#usage)
- [Configuring the test-id attribute](#configuring-the-test-id-attribute)

## Dependencies
The first step is to install the React specific dependency:

**Using Yarn:**

```bash
yarn add @lit/react
```

**Using NPM:**

```bash
npm install @lit/react
```

## Usage

For React-based applications, there is a `/react/` entry point in both `@justeattakeaway/pie-webc` and `@justeattakeaway/pie-icons-webc` as shown in the example code below:

```tsx
import { useState } from 'react';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';

import './App.css';
import '@justeattakeaway/pie-css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="card">
            <PieButton onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </PieButton>

            <PieIconButton>
                <IconClose></IconClose>
            </PieIconButton>
        </div>
        </>
    );
}

export default App;
```

You should now be able to use any components you need in your React application!

## Configuring the test-id attribute

PIE components expose their internal test hooks using the `data-test-id` attribute by default. If your test tooling targets a different attribute (for example, Playwright's `testConfig.testIdAttribute`), you can tell PIE to use the same attribute name so a single `getByTestId` strategy works for both your own markup and PIE internals.

Call `setPieTestIdAttribute` **once**, before your app renders — for example at the top of your client entry (`src/main.tsx`):

```tsx
// src/main.tsx — before ReactDOM renders your app
import { setPieTestIdAttribute } from '@justeattakeaway/pie-webc-core';

setPieTestIdAttribute('data-qa');
```

- Defaults to `data-test-id`. Pass any valid attribute name (e.g. `data-qa`). Invalid names are ignored with a warning.
- Set it **before components first render** — a component that has already rendered keeps `data-test-id` until it next updates.
- `setPieTestIdAttribute` is provided by `@justeattakeaway/pie-webc-core`, which is installed automatically as a dependency of the PIE components.
