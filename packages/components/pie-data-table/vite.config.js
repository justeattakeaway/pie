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
                'pie-data-table-body/index': 'src/pie-data-table-body/index.ts',
                'pie-data-table-body/react': 'src/pie-data-table-body/react.ts',
                'pie-data-table-cell/index': 'src/pie-data-table-cell/index.ts',
                'pie-data-table-cell/react': 'src/pie-data-table-cell/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
