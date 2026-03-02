# No framework

This guide will show you how to set up the PIE Web Components in a web application without any specific framework.

> This guide assumes you have first followed the Getting started, Typography and CSS setup guides.
> Please make sure to follow them before continuing with this guide.

## Table of Contents

- [Dependencies](#dependencies)
- [Usage](#usage)

## Dependencies
Please refer to the Getting started guide for the dependencies required to use PIE Web Components in your application.

## Usage
Please ensure that you import the components **without any destructuring**. Simply import the package.

```ts

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
