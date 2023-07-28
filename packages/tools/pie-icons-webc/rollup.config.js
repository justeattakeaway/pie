import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'icons/*.ts',
        output: {
            exports: 'named',
            dir: 'dist/icons',
            format: 'esm',
            name: '@justeattakeaway/pie-icons-webc',
        },
        plugins: [
            multiInput.default({ relative: 'icons/' }),
            nodeResolve({
                resolveOnly: [
                    '@justeattakeaway/pie-icons-configs',
                    'lit',
                ],
            }),
            typescript({
                compilerOptions: {
                    target: 'es6',
                    declarationDir: './dist/icons',
                    outDir: './dist/icons',
                    rootDir: './icons',
                },
            }),
        ],
    },
];
