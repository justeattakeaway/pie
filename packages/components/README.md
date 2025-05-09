# PIE Web Components

This readme contains some general information that is relevant for all components. For specific information about a component, please refer to the readme in the component's directory.

## Development

### Creating a new component
We have a component generator package for generating new components named `generator-pie-component`. Please read the readme file found at `packages/tools/generator-pie-component/README.md` for information on how to use it.

### Running Storybook
To run Storybook, run the following command from the root of the monorepo:

```bash
yarn dev --filter=@justeattakeaway/pie-storybook
```

### Watch a component whilst running Storybook
We can run storybook as above, and then watch a specific component in another shell. This is useful for developing a component in isolation. Run both commands from the root of the monorepo.

```bash
yarn dev --filter=@justeattakeaway/pie-storybook
```
In another shell:
```bash
yarn watch --filter={{COMPONENT_NAME}}
```

## Events
Some components dispatch events that consuming applications can listen for. In some cases, we simply allow native events, such as `input` to bubble up from the component. However, in some cases we need to dispatch custom events. This could be due to the fact that the component does not have a native counterpart, and so the event is unique to the component. Or it could be that the native event, such as `change`
has `composed` set to false. This prevents such events from bubbling outside of the shadow DOM. [Reference](https://javascript.info/shadow-dom-events#event-composed).

In the case of native events that do not bubble, we will dispatch a custom event that is the same name as the native event and attach a reference to the original event. The original event can be accessed via `detail.sourceEvent`. For example:

```ts
inputEl.addEventListener('change', (e: CustomEvent) => {
    console.log(e.detail.sourceEvent);
});
```

In the case of unique component events, we will dispatch a custom event with a unique name that begins with `pie-`.

In both cases, these can be listened to the same way as any other event.

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
            },
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

## Bundling
When we build a component, we run a plugin for Rollup named `rollup-plugin-visualizer`. This generates a file for each component named `stats.html` in the root of the component package. This file can be viewed in the browser to visualise the bundled Javascript and better understand what contributes to the size of the final build output.

## PIE Metadata Configuration

The `pieMetadata` object in a package's `package.json` file is used to configure various aspects of PIE packages. This metadata controls component status, CDN publishing, and other features.

### Component Status changes
The `package.json` file of each component is the source of truth for its status. Any change of status will be automatically reflected in Storybook and the Documentation site.

Supported statuses are `alpha`, `beta` and `stable`.

```json
// package.json
"pieMetadata": {
  "componentStatus": "alpha"
},
```

### CDN Publishing

To enable CDN publishing for a package, add the following properties:

```json
// package.json
"pieMetadata": {
  "cdnPublish": true,
  "cdnSourceFolder": "dist",
  "cdnContentType": "text/javascript"
}
```


### Release Categorisation
|                    | Prerelease/Alpha (v0.x.x)                                                                                                           | Beta (v0.x.x)                                                                                                            | Stable (v1.x.x)                                                                                                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **NPM Versioning** | Breaking changes should be expected. Component is still in active development and released as v0.x.x (indicating semver prerelease) | Breaking changes will be less likely, but could still occur due to component being integration tested with applications. | Component moves to v1.x.x NPM release. Breaking changes are communicated through version updates and any major feature changes will be tested as beta package releases.                                           |
| **Use in production applications is** | Not recommended. Component is still in active development and may have known issues. Is done so at application teams own risk.      | Is encouraged, but with appropriate level of caution for a beta package release. Thorough testing is recommended.        | Is encouraged and we don’t expect any obvious defects being found.  Component has already been tested in other applications and is therefore considered stable. As always, thorough testing is still recommended. |

### What to do as a contributor
Versioning will happen automatically through our pipeline, and will use each commit description to determine the right version. Remember you can use `yarn cz` when committing any changes. You don't need to change versions manually in the `package.json`.

#### When to change a component's status
Use `alpha` during development of the first epic or MVP of the component.

Once the MVP is done, the component will be released as `beta`. This is generally done by the PIE team.

It will move to `stable` after it has been tested in at least 2 production environments. This is generally done by the PIE team.

