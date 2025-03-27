import viteConfig from '@justeattakeaway/pie-components-config/vite.config';

export default viteConfig({
    build: {
        lib: {
            entry: {
                'pie-breadcrumb-item/index': 'src/pie-breadcrumb-item/index.ts',
                'pie-breadcrumb-item/react': 'src/pie-breadcrumb-item/react.ts',
                'pie-breadcrumb-separator/index': 'src/pie-breadcrumb-separator/index.ts',
                'pie-breadcrumb-separator/react': 'src/pie-breadcrumb-separator/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
