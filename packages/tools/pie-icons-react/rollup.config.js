import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";

export default [
    {
        input: ["icons/index.tsx"],
        output: {
            exports: "named",
            dir: "esm",
            format: "esm",
            name: "@justeattakeaway/pie-icons-react",
            globals: {
                react: "React",
            },
        },
        plugins: [del({ targets: ["esm/*"] }), typescript()],
        preserveModules: true,
    },
    {
        input: ["icons/index.tsx"],
        output: {
            exports: "named",
            dir: "dist",
            format: "cjs",
            name: "@justeattakeaway/pie-icons-react",
            globals: {
                react: "React",
            },
        },
        plugins: [del({ targets: ["dist/*"] }), typescript()],
        preserveModules: true,
    },
];
