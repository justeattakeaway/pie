import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';

export default {
    globs: [
        '../../components/**/src/**/!(*.css).ts',
    ],
    exclude: [
        '../../**/*.d.ts',
        '../../**/*.d.js',
        '../../**/test/**',
        'node_modules/*',
        '../../**/node_modules/**',
    ],
    plugins: [moduleFileExtensionsPlugin()],
};
