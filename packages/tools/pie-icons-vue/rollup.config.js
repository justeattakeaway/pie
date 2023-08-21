import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: ['icons/index.js'],
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
            nodeResolve(),
            commonjs(),
        ],
    },
    {
        input: ['icons/index.js'],
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
            nodeResolve(),
            commonjs(),
        ],
    },
];
