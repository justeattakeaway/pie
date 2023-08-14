import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: ['generated/index.js'],
        output: {
            exports: 'named',
            dir: 'esm',
            format: 'esm',
            name: '@justeattakeaway/pie-icons-vue',
            preserveModulesRoot: 'icons',
            entryFileNames: '[name].mjs',
            preserveModules: true,
        },
        plugins: [
            nodeResolve({ resolveOnly: ['@justeattakeaway/pie-icons-configs'] }),
        ],
    },
    {
        input: ['generated/index.js'],
        output: {
            exports: 'named',
            dir: 'dist',
            format: 'cjs',
            name: '@justeattakeaway/pie-icons-vue',
            preserveModulesRoot: 'icons',
            entryFileNames: '[name].cjs',
            preserveModules: true,
        },
        plugins: [
            nodeResolve({
                resolveOnly: ['@justeattakeaway/pie-icons-configs'],
            })
        ],
    },
];
