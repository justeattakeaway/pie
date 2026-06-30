import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: ['icons/index.tsx'],
        output: {
            exports: 'named',
            dir: 'esm',
            format: 'esm',
            name: '@justeattakeaway/pie-icons-react',
            preserveModulesRoot: 'icons',
            globals: {
                react: 'React',
            },
            preserveModules: true,
        },
        plugins: [
            typescript({ tsconfig: './tsconfig.json', noEmit: false, declarationDir: 'esm' }),
            nodeResolve({ resolveOnly: ['@justeattakeaway/pie-icons-configs'] }),
        ],
    },
    {
        input: ['icons/index.tsx'],
        output: {
            exports: 'named',
            dir: 'dist',
            format: 'cjs',
            name: '@justeattakeaway/pie-icons-react',
            preserveModulesRoot: 'icons',
            globals: {
                react: 'React',
            },
            preserveModules: true,
        },
        plugins: [
            typescript({ tsconfig: './tsconfig.json', noEmit: false, declarationDir: 'dist' }),
            nodeResolve({
                resolveOnly: ['@justeattakeaway/pie-icons-configs'],
            })
        ],
    },
];
