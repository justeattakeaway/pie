import viteConfig, { getComponentDependencies } from '@justeattakeaway/pie-components-config/vite.config';

const { dependencies } = require('./package.json');

export default viteConfig({
    build: {
        rollupOptions: {
            external: getComponentDependencies(dependencies),
        },
    },
});
