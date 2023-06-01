import { createWriteStream } from 'fs';
import path from 'path';
import fs from 'fs-extra';

let componentSrc;

// fetches custom-elements.json file
const loadCustomElementsFile = () => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './custom-elements.json')));

/**
 * This function generates a react wrapper to enable custom lit components to be used in react apps.
 *
 * @param {JSON} - A JSON file of custom components and their attributes, generated from the @custom-elements-manifest/analyzer package
 * @param {string} - component folder name fetched from package.json script
 * @return {string} - The source code of the react wrapper
 *
 */
export function addReactWrapper (customElementsObject, folderName = process.argv[2]) {
    const components = [];
    const customElements = Object.entries(customElementsObject);

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        let componentObject;
        if (key === 'modules') {
            value.forEach((k) => {
                if (k.path.includes(folderName)) {
                    k.declarations.forEach((decl) => {
                        if (decl.customElement === true) components.push({ class: decl, path: k.path.replace('index.js', 'react.ts') });
                    });
                }
            });
        }

        return componentObject;
    });

    /**
     * Fetch events from the component
     *
     * @param {*} component object from within components array
     * @return {*} events array containing a component's custom events
     */
    function getEvents (component) {
        const events = [];
        if (component?.events) {
            events.push(component.events
                    .filter((event) => !!event.name)
                    .map((event) => ({
                        name: event.name,
                        type: event.type?.text || 'Event',
                        description: event.description,
                    })));
        }

        return events;
    }

    // create wrapper src code and add to react.ts file
    if (components.length > 0) {
        components.forEach((component) => {
            const events = getEvents(component.class);

            componentSrc = `
import * as React from 'react';
import { ${component.class.name} as ${`${component.class.name}React`} } from './index';
import { createComponent } from '@lit-labs/react';${
component.class.events?.length > 0
    ? "\nimport { EventName } from '@lit-labs/react';"
    : ''
}

export const ${component.class.name} = createComponent({
    displayName: '${component.class.name}',
    elementClass: ${`${component.class.name}React`},
    react: React,
    tagName: '${component.class.tagName}',
    events: { ${events?.flat().reduce(
    (pre, event) => `${pre
                }${`on${event.name}`}: '${event.name}' as EventName<${event.type}>, ${
                    event.description ? `// ${event.description}` : ''
                }`,
    '',
)}},
});
`;
            let reactFile;

            if (component.path !== 'pie-wrapper-react') {
                reactFile = createWriteStream(
                    component.path,
                    (err) => {
                        throw (err);
                    },
                );
            }

            if (componentSrc.length > 0 && reactFile !== undefined) {
                reactFile.write(componentSrc);

                console.info('react wrapper has been added!');
            }
        });
    } else {
        componentSrc = '';
    }

    return componentSrc;
}

addReactWrapper(loadCustomElementsFile());
