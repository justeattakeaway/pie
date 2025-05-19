import viteConfig from '@justeattakeaway/pie-components-config/vite.config';
import getPackageVersion from '@justeattakeaway/pie-monorepo-utils/utils/get-package-version.js';

export default viteConfig({
    version: getPackageVersion(__dirname),
    build: {
        lib: {
            entry: {
                'pie-breadcrumb-item/index': 'src/pie-breadcrumb-item/index.ts',
                'pie-breadcrumb-item/react': 'src/pie-breadcrumb-item/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
