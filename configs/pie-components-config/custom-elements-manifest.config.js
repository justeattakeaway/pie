import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';
import { componentCompassPlugin }from '@component-compass/manifest-cem'

export default {
    globs: [
        './src/**/!(*.css).ts',
    ],
    exclude: [
        '**/*.d.ts',
        '**/*.d.js',
        '**/test/**',
        '**/node_modules/**',
    ],
    plugins: [moduleFileExtensionsPlugin(), componentCompassPlugin()],
};
