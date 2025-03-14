import viteConfig from '@justeattakeaway/pie-components-config/vite.config';

export default viteConfig({
    build: {
        lib: {
            entry: {
                'pie-option/index': 'src/pie-option/index.ts',
                'pie-option/react': 'src/pie-option/react.ts',
                'pie-option-group/index': 'src/pie-option-group/index.ts',
                'pie-option-group/react': 'src/pie-option-group/react.ts',
            },
        },
    },
    dtsConfig: {
        entryRoot: 'src',
        rollupTypes: false,
    },
});
