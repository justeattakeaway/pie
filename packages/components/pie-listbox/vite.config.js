import viteConfig from '@justeattakeaway/pie-components-config/vite.config';
import getPackageVersion from '@justeattakeaway/pie-monorepo-utils/utils/get-package-version.js';

export default viteConfig({
    version: getPackageVersion(__dirname),
    build: {
        lib: {
            entry: {
                'pie-listbox-option/index': 'src/pie-listbox-option/index.ts',
                'pie-listbox-option/react': 'src/pie-listbox-option/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
