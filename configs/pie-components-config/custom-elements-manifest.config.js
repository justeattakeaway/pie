import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';
import { customElementVsCodePlugin } from 'custom-element-vs-code-integration';
import { customElementVuejsPlugin } from 'custom-element-vuejs-integration';

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
        customElementVsCodePlugin({}),
        customElementVuejsPlugin({
            fileName: 'vue.d.ts',
            globalTypePath: './dist/index.js',
        }),
    ],
};
