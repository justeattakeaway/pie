# Demo

This branches code is able to remove all console.logs from the codebase.
This is just a basic example.

## Testing this package

To test this package currently, it's best to publish it to a private proxy npm registry using [Verdaccio](https://verdaccio.org/).

First install Verdaccio:

```js
npm install --global verdaccio
```

Once installed, running the following command will start your local npm registry:

```bash
$ verdaccio
```

This should by default start a local registry, hosted at `http://localhost:4873/`.

Now, if you navigate to the root of this package in terminal, you can publish the package to your local registry using:

```bash
$ npm publish --registry http://localhost:4873
```

Once published, you can run any of the following codemod commands to run the package.


# Commands

```bash
# To run the PIE Migration GUI
$ npx pie-codemods

# To run the PIE Codemod CLI
$ npx pie-codemods {FILES/DIRECTORY}
```







<!-- Native javascript:

`jscodeshift -t ./codemod/my-transform.js ./demoapp/src/index.js`

Vue files:

`jscodeshift -t ./codemod/my-transform.js ./demoapp/src/Demo.vue`

TS Files:

`jscodeshift -t ./codemod/index.js ./demoapp/src/buttonWebC/src/index.ts --extensions=ts --parser=ts`

CSS Files:

`npx @codeshift/cli -t ./codemod/css.js -e css ./demoapp/src/styles.css` -->
