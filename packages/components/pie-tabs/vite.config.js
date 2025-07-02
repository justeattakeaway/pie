import viteConfig from '@justeattakeaway/pie-components-config/vite.config';
import getPackageVersion from '@justeattakeaway/pie-monorepo-utils/utils/get-package-version.js';

export default viteConfig({
    version: getPackageVersion(__dirname),
    build: {
        lib: {
            entry: {
                'pie-tab-panel/index': 'src/pie-tab-panel/index.ts',
                'pie-tab-panel/react': 'src/pie-tab-panel/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
