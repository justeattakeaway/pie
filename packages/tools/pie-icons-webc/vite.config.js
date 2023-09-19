import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

/**
 * Get all Icon TS files from the icons folder
 * @returns {Object} - An object containing all TS icon entries
 */
function getIconEntries () {
    const iconDir = path.resolve(__dirname, 'icons');
    const iconFiles = fs.readdirSync(iconDir)
        .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

    const entries = iconFiles.map((file) => [file.replace('.ts', ''), path.resolve(iconDir, file)]);

    return Object.fromEntries(entries);
}

const iconEntries = getIconEntries();

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, 'icons/index.ts'),
                ...iconEntries,
            },
            name: (name) => `@justeattakeaway/pie-icons-webc/${name}`,
            formats: ['es'],
            fileName: () => 'dist/[name].js',
        },
        rollupOptions: {
            external: [/^lit/],
            output: {
                exports: 'named',
                dir: 'dist',
                format: 'esm',
                entryFileNames: '[name].js',
                chunkFileNames: '[name].[hash].js',
            },
        },
    },
});

