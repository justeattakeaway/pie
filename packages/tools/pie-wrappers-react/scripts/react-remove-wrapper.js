import { readFile, writeFile } from 'fs';
import { reactComponent } from './react-gen-wrapper.js';

// removes react wrapper from index.ts after dist has built
function removeReactWrapper () {
    readFile(`../../components/${reactComponent.elementName}/src/index.ts`, { encoding: 'utf8', flag: 'r' }, (err, data) => {
        if (err) throw (err);

        if (data.includes('import * as React')) {
            const fileData = data.split('import * as React')[0];

            writeFile(`../../components/${reactComponent.elementName}/src/index.ts`, fileData, (err) => {
                if (err) throw (err);
            });
        }
    });
}

export default {
    plugins: [
        removeReactWrapper(),
    ],
};
