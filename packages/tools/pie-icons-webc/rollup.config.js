import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: ['icons/index.js'],
        output: {
            exports: 'named',
            dir: 'dist',
            format: 'es',
            preserveModules: true,
        },
        plugins: [
            nodeResolve({ resolveOnly: ['@justeattakeaway/pie-icons-configs'] }),
        ],
    },
];
