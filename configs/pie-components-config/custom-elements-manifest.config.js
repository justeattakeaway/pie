import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';
import cemPieDocs from './cem-pie-docs.js';
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
    plugins: [moduleFileExtensionsPlugin(), cemPieDocs()],
};
