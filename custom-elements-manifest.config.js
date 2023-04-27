import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';

export default {
    globs: [
        'packages/**/src/**/!(*.css).ts',
    ],
    exclude: [
        '**/*.d.ts',
        '**/test/**',
        'node_modules/*',
        '**/node_modules/**',
    ],
    plugins: [moduleFileExtensionsPlugin()],
};
