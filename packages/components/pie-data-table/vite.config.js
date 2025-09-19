import viteConfig from '@justeattakeaway/pie-components-config/vite.config';
import getPackageVersion from '@justeattakeaway/pie-monorepo-utils/utils/get-package-version.js';

export default viteConfig({
    version: getPackageVersion(__dirname),
    build: {
        lib: {
            entry: {
                'pie-data-table-header/index': 'src/pie-data-table-header/index.ts',
                'pie-data-table-header/react': 'src/pie-data-table-header/react.ts',
                'pie-data-table-row/index': 'src/pie-data-table-row/index.ts',
                'pie-data-table-row/react': 'src/pie-data-table-row/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
