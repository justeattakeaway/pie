import removeReactWrapper from './scripts/react-remove-wrapper.js';
import fs from 'fs-extra';
import path from 'path';

const componentPath = path.resolve(process.cwd(), './custom-elements.json')

// fetches custom-elements.json file
const loadJSON = (path) => JSON.parse(fs.readFileSync(path));

export default {
    plugins: [
        removeReactWrapper(
            loadJSON(componentPath)
        ),
    ],
};