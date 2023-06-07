import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: ["icons/index.tsx"],
        output: {
            exports: "named",
            dir: "esm",
            format: "esm",
            name: "@justeattakeaway/pie-icons-react",
            preserveModulesRoot: 'icons',
            globals: {
                react: "React",
            },
            preserveModules: true
        },
        plugins: [
            del({ targets: ["esm/*"] }),
            typescript(),
            nodeResolve({resolveOnly: ['@justeattakeaway/pie-icons-configs']}),
        ]
    },
    {
        input: ["icons/index.tsx"],
        output: {
            exports: "named",
            dir: "dist",
            format: "cjs",
            name: "@justeattakeaway/pie-icons-react",
            preserveModulesRoot: 'icons',
            globals: {
                react: "React",
            },
            preserveModules: true
        },
        plugins: [
            del({ targets: ["dist/*"] }),
            typescript(),
            nodeResolve({
                resolveOnly: ['@justeattakeaway/pie-icons-configs']
            })
        ]
    },
];
