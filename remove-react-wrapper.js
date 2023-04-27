import { readFile, writeFile } from 'fs'

function removeReactWrapper() {
    readFile('./src/index.ts',
        {encoding:'utf8', flag:'r'},
        function(err, data) {
    if(err)
        throw(err)
    else
        if ( data.includes('import * as React')) {
            const fileData = data.split('import * as React')[0]

            writeFile(`./src/index.ts`, fileData, (err) => {
                if (err) throw(err);
            });
        }
    });
}

export default {
    plugins: [
        removeReactWrapper(),
    ],
};