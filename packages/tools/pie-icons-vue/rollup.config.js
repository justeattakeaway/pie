import del from 'rollup-plugin-delete';
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
            globals: {
                vue: 'Vue',
            },
            preserveModules: true,
        },
        plugins: [
            del({ targets: ['esm/*'] }),
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
            preserveModules: true,
        },
        plugins: [
            del({ targets: ['dist/*'] }),
            nodeResolve({
                resolveOnly: ['@justeattakeaway/pie-icons-configs'],
            })
        ],
    },
];
