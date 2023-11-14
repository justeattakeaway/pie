<p align="center">
  <img align="center" src="../../readme_image.png" height="200" alt="">
</p>

# pie-components-config

The purpose of this package is to centralize components configurations (build, testing, etc...) in one place to avoid synchronization issues and unnecessary maintenance.
## Vite

To use the shared config, all you need to do is import and re-export it in your own `vite.config.js`:

```js
import viteConfig from '@justeattakeaway/pie-components-config/vite.config';

export default viteConfig;
```

You can also override any values by passing in an object which will be merged deeply with the default values.
