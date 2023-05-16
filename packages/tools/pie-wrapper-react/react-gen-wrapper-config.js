import genReactWrapper from './scripts/react-gen-wrapper.js';
import path from 'path';
import fs from 'fs-extra';

const componentPath = path.resolve(process.cwd(), './custom-elements.json')

// fetches custom-elements.json file
const loadJSON = (path) => JSON.parse(fs.readFileSync(path));

export default {
    plugins: [
        genReactWrapper(
            loadJSON(componentPath)
        ),
    ],
};