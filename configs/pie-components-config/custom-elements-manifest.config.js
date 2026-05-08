import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';

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
    plugins: [
        moduleFileExtensionsPlugin({
            from: /^src\/(.*)\.(t|j)sx?$/,
            to: 'dist/$1.js',
        }),
    ],
};
