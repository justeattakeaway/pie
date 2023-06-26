import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: ['icons/index.js'],
        output: {
            dir: 'dist',
            format: 'cjs',
            name: '@justeattakeaway/pie-icons-webc',
            preserveModulesRoot: 'icons',
            preserveModules: true,
        },
        plugins: [
            nodeResolve({ resolveOnly: ['@justeattakeaway/pie-icons-configs'] }),
        ],
    },
];
