import { unlink, existsSync } from 'fs';
import path from 'path';
import fs from 'fs-extra';

const componentPath = path.resolve(process.cwd(), './custom-elements.json');

// fetches custom-elements.json file
const loadJSON = (file) => JSON.parse(fs.readFileSync(file));

/**
 * This function removes the react wrapper and react.ts file if it has been generated
 *
 * @param {JSON} - A JSON file of custom components and their attributes, generated from the @custom-elements-manifest/analyzer package
 * @return {undefined} - text to confirm that wrapper has been removed
 *
 */
// removes react wrapper from index.ts after dist has built
export default function removeReactWrapper (customElementsObject) {
    const components = [];
    const customElements = Object.entries(customElementsObject);

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        let componentObject;
        if (key === 'modules') {
            value.forEach((k) => {
                k.declarations.forEach((decl) => {
                    componentObject = decl.customElement === true ? components.push({ class: decl, path: k.path.replace('index.js', 'react.ts') }) : '';
                });
            });
        }

        return componentObject;
    });

    if (components.length > 0) {
        components.forEach((component) => {
            const data = existsSync(component.path, { encoding: 'utf8', flag: 'r' });

            if (data) {
                unlink(component.path, (err) => {
                    if (err) throw err;
                });
            }
        });
    }
}

removeReactWrapper(loadJSON(componentPath));
