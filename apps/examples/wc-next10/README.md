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

In order to use Lit components in the next 10 application, they need to be dynamically imported or mounted with UseEffect hooks. Without this, you are likely to receive the `window is not defined` error.

```
  const PButton = dynamic(() => import('../components/PieButton'), { ssr: false });
```

Dynamically importing components into a React application means that, unless required immediately for a page to load and bundle, the import is held off until needed.
