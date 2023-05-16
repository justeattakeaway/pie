import genReactWrapper from './scripts/react-gen-wrapper.js';
import fs from 'fs-extra';

// fetches custom-elements.json file
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

export default {
    plugins: [
        genReactWrapper(
            loadJSON(`./custom-elements.json`)
        ),
    ],
};