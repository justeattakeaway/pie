import del from 'rollup-plugin-delete';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const compilerOptions = {
    target: 'es6',
};

export default [
    {
        input: ['icons/index.ts'],
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
            nodeResolve({
                resolveOnly: ['@justeattakeaway/pie-icons-configs'],
            }),
            typescript({ compilerOptions }),
        ],
    },
    // {
    //     input: ['icons/index.ts'],
    //     output: {
    //         exports: 'named',
    //         dir: 'dist',
    //         format: 'cjs',
    //         name: '@justeattakeaway/pie-icons-webc',
    //         preserveModulesRoot: 'icons',
    //         preserveModules: true,
    //     },
    //     plugins: [
    //         del({ targets: ['dist/*'] }),
    //         nodeResolve({
    //             resolveOnly: ['@justeattakeaway/pie-icons-configs'],
    //         }),
    //         typescript({ compilerOptions }),
    //     ],
    // },
];
