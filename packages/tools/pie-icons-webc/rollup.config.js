/* eslint-disable */
// const { nodeResolve } = require('@rollup/plugin-node-resolve')
// const del = require('rollup-plugin-delete')

import del from "rollup-plugin-delete";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: ['icons/index.js'],
        output: {
            exports: 'named',
            dir: 'esm',
            format: 'esm',
            name: '@justeattakeaway/pie-icons-webc',
            preserveModulesRoot: 'icons',
            preserveModules: true,
        },
        plugins: [
            del({ targets: ['esm/*'] }),
            nodeResolve({ resolveOnly: ['@justeattakeaway/pie-icons-configs'] }),
        ],
    },
    {
        input: ['icons/index.js'],
        output: {
            exports: 'named',
            dir: 'dist',
            format: 'cjs',
            name: '@justeattakeaway/pie-icons-webc',
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
