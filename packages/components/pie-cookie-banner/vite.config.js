import viteConfig from '@justeattakeaway/pie-components-config/vite.config';

export default viteConfig({
    build: {
        rollupOptions: {
            external: [
                '@justeattakeaway/pie-button',
                '@justeattakeaway/pie-divider',
                '@justeattakeaway/pie-icon-button',
                '@justeattakeaway/pie-link',
                '@justeattakeaway/pie-modal',
                '@justeattakeaway/pie-switch',
            ],
        },
    },
});
