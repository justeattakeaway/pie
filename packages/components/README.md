# PIE Web Components

This readme contains some general information that is relevant for all components. For specific information about a component, please refer to the readme in the component's directory.

## Testing

### Browser tests
For testing component functionality, we currently aim to test in real browsers rather than isolated node-based environments. This ensures that browser APIs are called as expected and that our components actually work in the browser.

To write our tests, we use Playwright and an [experimental package](https://github.com/sand4rt/playwright-ct-web) that allows us to mount our Lit components using Playwright's APIs. This is not an official Playwright package, we may look to change our browser test strategy in future. If this happens, this readme will be updated.

#### Rendering Web Components in our tests
Getting our web components to render in Playwright requires a little bit of setup. Typically a test file will render an isolated component like so:

```ts
const component = await mount(
        PieButton,
        {
            props: {
              variant: 'secondary',
            }
            slots: {
                default: 'Click me!',
            },
        },
    );
```

This is fine for simple tests on an isolated component, however sometimes we want to test a component in a page with additional markup. In these case, we need to change our approach slightly.

Let's take the example of testing a button component within an HTML form. To do this, we can render HTML in playwright using `page.setContent`.

In order to embed our component within this form, we can use a string representation of the component in HTML like so:

```ts
await page.setContent(`
    <form id="testForm" action="/foo" method="POST">
        <input type="text" id="username" name="username" required>
        <input type="password" id="password" name="password" required>

        <pie-button variant="primary" type="submit">Submit</pie-button>
    </form>
`);
```

Unfortunately, you may notice that the component is not rendering correctly, nor does it have a shadow DOM. In this kind of test we still need to first mount the component. This appears to get Playwright to correctly load the web component and make it available in the browser. For this reason, we can mount and unmount the component before each test like so:

```ts
  test.beforeEach(async ({ mount }) => {
      const component = await mount(PieButton);
      await component.unmount();
  });
```

A caveat to this is that if you have a test file that already mounts the component somewhere then the `/playwright/.cache` folder is likely keeping a cached version of the asset loaded in the test browser. If you delete the cache, and run the test which does not explicitly mount the component, you will see the component no longer renders successfully.

A recommendation is that to avoid any rendering issues, simply add the mount and unmount before each component test. This ensures that the component is always loaded in the browser before the test runs and will not affect the test result.

### Visual tests
Our visual tests currently use the same Playwright packages as our browser tests, and uses Percy for snapshot testing. We write tests the same way as our browser tests, but then call a snapshot at the end as part of the assertion like so:

```ts
await percySnapshot(page, `PIE Button - Variant: ${variant}`, percyWidths);
```

Sometimes when we are testing our components using Percy, we want to place the tested component inside of some markup that can display information about what props are being passed to the component. This is useful for testing components that have a lot of props, or components that have complex logic that is difficult to test in isolation.

We currently use  a `WebComponentTestWrapper` component to do this. The component takes a string representation of a component and renders it with some additional information about the props being used. This is the same concept as outlined in the Browser tests section above.

As with the browser tests, it is vital that the component to test is mounted and unmounted in a `beforeEach` block. This ensures that the component is loaded in the browser before the test runs.
