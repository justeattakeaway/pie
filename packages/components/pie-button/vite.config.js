import viteConfig from '@justeattakeaway/pie-components-config/vite.config';

export default viteConfig({
    build: {
        rollupOptions: {
            external: [
                '@justeattakeaway/pie-spinner',
            ],
        },
    },
});
