<p align="center">
  <img align="center" src="../../../readme_image.png" height="200" alt="">
</p>

<p align="center">
  <a href="https://www.npmjs.com/@justeattakeaway/pie-modal">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/npm/v/@justeattakeaway/pie-modal.svg">
  </a>
</p>

# pie-modal

This modal is a Web Component built using Lit.

## Local development

Install dependencies at the root
```
yarn
```

Navigate to this folder, compile with TypeScript and build with Vite
```
cd packages/components/pie-modal
yarn build
```

Compile and watch for changes (auto-compiles `dist` on save)
```
yarn watch
```

### Importing the component

```javascript
// default
import { PieModal } from '@justeattakeaway/pie-button';

// react
import { PieModal } from '@justeattakeaway/pie-button/dist/react';
```

## Testing

### Visual tests

Run at the root of the monorepo:
```
yarn test:visual --filter=pie-modal
```

Note: To run these locally, you will need to ensure that any environment variables required are set up on your machine to mirror those on CI (such as Percy tokens). How you achieve this will differ between operating systems.

Setup via bash:

```
export PERCY_TOKEN_PIE_MODAL=abcde
```

Setup via package.json:

Under scripts `test:visual` replace the environment variable with the below:

```
PERCY_TOKEN_PIE_MODAL=abcde
