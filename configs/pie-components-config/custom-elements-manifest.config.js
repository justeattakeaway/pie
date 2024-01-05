import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';
import { customElementReactWrapperPlugin } from 'custom-element-react-wrappers';
import { customElementVuejsPlugin } from 'custom-element-vuejs-integration';
import path from 'path';
import fs from 'fs/promises';

// Defining the file path
const manifestPath = path.join(process.cwd(), 'custom-elements.json');

async function getTagName () {
    try {
        const data = await fs.readFile(manifestPath, 'utf8');
        const manifest = JSON.parse(data);

        // Finding the first class declaration where tagName contains 'pie-' and customElement is true
        for (const module of manifest.modules) {
            for (const declaration of module.declarations) {
                if (
                    declaration.kind === 'class' &&
                    declaration.tagName &&
                    declaration.tagName.includes('pie-') &&
                    declaration.customElement
                ) {
                    return declaration.tagName;
                }
            }
        }

        throw new Error("No custom element with tagName containing 'pie-' found in manifest");
    } catch (error) {
        console.error('Error reading custom-elements.json manifest', error);
        throw error;
    }
}

const tagName = await getTagName();
console.log("tagggg", tagName);

export default {
    globs: ["./src/**/!(*.css).ts"],
    exclude: [
        "**/*.d.ts",
        "**/*.d.js",
        "**/react.ts",
        "**/test/**",
        "**/node_modules/**",
    ],
    plugins: [
        moduleFileExtensionsPlugin(),
        customElementReactWrapperPlugin(manifestPath, {
            outdir: "./react",
        }),
        customElementVuejsPlugin({
            outdir: "./vue",
            fileName: `${tagName}-vuejs.d.ts`,
        }),
    ],
};
