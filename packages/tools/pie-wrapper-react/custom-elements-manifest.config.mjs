import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';

export default {
    globs: [
        '../../components/**/src/**/!(*.css).ts',
    ],
    exclude: [
        '../../**/*.d.ts',
        '../../**/*.d.js',
        '../../**/react.ts',
        '../../**/test/**',
        'node_modules/*',
        '../../**/node_modules/**',
    ],
    plugins: [moduleFileExtensionsPlugin()],
};
