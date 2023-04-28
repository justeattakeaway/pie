import { readFile, writeFile } from 'fs';
import { components } from './react-gen-wrapper.js';

// removes react wrapper from index.ts after dist has built
function removeReactWrapper (component) {
    readFile(`../../components/${component.tagName}/src/index.ts`, { encoding: 'utf8', flag: 'r' }, (err, data) => {
        if (err) throw (err);

        if (data.includes('import * as React')) {
            const fileData = data.split('import * as React')[0];

            writeFile(`../../components/${component.tagName}/src/index.ts`, fileData, () => {
                if (err) throw (err);
            });
        }
    });
}

if (components.length > 0) {
    components.forEach((component) => removeReactWrapper(component));
}
