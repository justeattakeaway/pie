import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';
import { customElementVsCodePlugin } from 'custom-element-vs-code-integration';
import { customElementVuejsPlugin } from 'custom-element-vuejs-integration';

// Strips `export * from './internal'` wildcard re-export entries whose target
// module isn't in the manifest. After scoping globs to library entries, internal
// modules like defs.ts aren't analysed, so these wildcards point at nothing
// useful and reference files that Vite bundles into dist/index.js.
const dropOrphanedWildcardExports = () => ({
    name: 'pie-drop-orphaned-wildcard-exports',
    packageLinkPhase ({ customElementsManifest }) {
        const modulePaths = new Set(
            (customElementsManifest.modules ?? []).map((m) => m.path),
        );
        for (const mod of customElementsManifest.modules ?? []) {
            mod.exports = (mod.exports ?? []).filter((ex) => {
                const isWildcard = ex.name === '*';
                const targetModule = ex.declaration?.module;
                return !(isWildcard && targetModule && !modulePaths.has(targetModule));
            });
        }
    },
});

export default {
    // Match only the top-level component entry and any sub-component entries.
    // Internal modules like defs.ts are bundled into dist/index.js by Vite,
    // so emitting them as separate top-level CEM modules points at files
    // that don't exist after publish.
    globs: [
        './src/**/index.ts',
    ],
    exclude: [
        '**/*.d.ts',
        '**/*.d.js',
        '**/test/**',
        '**/node_modules/**',
    ],
    plugins: [
        moduleFileExtensionsPlugin({
            from: /^src\/(.*)\.(t|j)sx?$/,
            to: 'dist/$1.js',
        }),
        dropOrphanedWildcardExports(),
        customElementVsCodePlugin({
            outdir: 'dist',
        }),
        customElementVuejsPlugin({
            outdir: 'dist',
            fileName: 'vue.d.ts',
            globalTypePath: './index.js',
        }),
    ],
};
