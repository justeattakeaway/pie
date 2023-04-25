import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';

export default {
    globs: [
        'packages/**/src/**/!(*.css).ts',
    ],
    exclude: [
        '**/*.d.ts',
        '**/stories/**',
        '**/test/**',
        'node_modules/*',
        '**/node_modules/**',
        '**/*.dev.*',
    ],
    outdir: '.',
    litelement: true,
    packagejson: false,
    plugins: [moduleFileExtensionsPlugin()],
};
