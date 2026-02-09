import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';
import propsEnrichmentPlugin from '@justeattakeaway/pie-components-config/cem-plugin-props-enrichment.js';
import defsEnrichmentPlugin from '@justeattakeaway/pie-components-config/cem-plugin-defs-enrichment.js';

export default {
    globs: [
        './src/**/!(*.css).ts',
    ],
    exclude: [
        '**/*.d.ts',
        '**/*.d.js',
        '**/react.ts',
        '**/test/**',
        '**/node_modules/**',
    ],
    plugins: [moduleFileExtensionsPlugin(), propsEnrichmentPlugin(), defsEnrichmentPlugin()],
};
