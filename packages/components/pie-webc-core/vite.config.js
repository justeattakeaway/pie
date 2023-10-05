import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
const sharedConfig = (extendedConfig = {}) => defineConfig({
    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, 'src/index.ts'),
                'mixins/rtl/rtlMixin': path.resolve(__dirname, 'src/mixins/rtl/rtlMixin.ts'),
                'decorators/required-property': path.resolve(__dirname, 'src/decorators/required-property.ts'),
                'decorators/valid-property-values': path.resolve(__dirname, 'src/decorators/valid-property-values.ts'),
            },
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', /^lit/],
        },
    },
    ...extendedConfig,
});

export default sharedConfig;
