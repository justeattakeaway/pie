## How to use Next.js App

### `yarn dev`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `yarn build`

Builds the app for production to the `build` folder.

All Next versions before Next 13 do not transpile modules natively. Therefore, we need to install a separate package: `next-transpile-modules` for transpiling modules.

Once this is installed, head to your `next.config.js` and transpile modules needed for adding the button component:

```
const transpileModules = [
    '@justeattakeaway/pie-button',
    '@lit-labs/react',
    'lit'
];

const withTM = require('next-transpile-modules')(transpileModules);

module.exports = withTM;
```

You can also pass in nextConfig as a parameter in `withTM` if you have additional configuration settings:

```
const nextConfig = {
    // settings
};

module.exports = withTM(nextConfig);
```

In order to use the Pie Button components in the Next 10 application, it needs to be dynamically imported. Without this, you are likely to receive the `window is not defined` error.
```
  const PButton = dynamic(() => import('../components/PieButton'), { ssr: false });
```
