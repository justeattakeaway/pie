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
    '​@lit/react',
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
  const PieButton = dynamic(() => import('../components/PieButton/dist/react'), { ssr: false });
```


## Lit SSR with Next.js@10 

The Lit framework offers a package called [@lit-labs/ssr-react](https://github.com/lit/lit/tree/main/packages/labs/ssr-react) that enables server-side rendering (SSR) integration with React frameworks such as Nextjs. This package, along with its dependencies, is distributed as ES Modules. It heavily relies on [export conditions](https://github.com/lit/lit/blob/main/packages/labs/ssr-client/package.json#L19) to ship different bundles based on the environment (browser/server). However, integrating `@lit-labs/ssr-react` with Next.js@10 poses some challenges due to Next.js@10 lacking native support for ES Modules and using webpack@4. Additionally, the SSR support provided by `@lit-labs/ssr-react` is aimed at newer versions of Next.js (>=12).


During the integration process, a couple of issues were encountered, including:
 
 - Explicitly specifying all the sub-dependencies of `@lit-labs/ssr-react` in `next-transpile-modules`. Failure to do so results in the following error:

  ```
Error: require() of ES Module node_modules/lit-html/node/lit-html.js from wc-next10/.next/server/pages/_document.js not supported. Instead change the require of lit-html.js in wc-next10/.next/server/pages/_document.js to a dynamic import() which is available in all CommonJS modules.
  ```
  
- Even after specifying all dependencies, some modules do not correctly reference the entry point of the export condition. This can lead to incorrect usage of the `window` object in a server environment, causing the following error:

  ```
    ReferenceError: window is not defined

  ```
  
- In an attempt to resolve the issue, the Lit team recommended overriding the webpack configuration in the Next.js config file. This involved extending the [resolve.conditionNames](https://webpack.js.org/configuration/resolve/#resolveconditionnames) to include the condition "node" when Next.js is running on the server. Additionally, when running in development mode, the "development" condition needed to be added. However, this approach did not help due to Next.js@10 utilizing webpack@4, which does not support this workaround.

Therefore, achieving SSR support in Next.js@10 can be considerably challenging, and it is highly recommended to upgrade to at least Next.js@12. The newer versions of Next.js provide better compatibility with ES Modules and offer improved support for server-side rendering, making the integration process smoother and more reliable.