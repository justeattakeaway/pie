import { createWriteStream } from 'fs';
import path from 'path';
import fs from 'fs-extra';

let componentSrc;

// fetches custom-elements.json file
export function loadCustomElementsFile (customElementsDirectory = process.argv[2] || process.cwd()) {
    return JSON.parse(fs.readFileSync(path.resolve(customElementsDirectory, 'custom-elements.json')));
}

/**
 * Reads the given component path and extracts the ReactBaseType as a string
 *
 * @param {string} componentRelativePath - the relative path to the component
 * @returns {string} - the Type definition for React as String
 */
function getReactBaseType (componentRelativePath) {
    // Read file
    const componentFolder = path.parse(componentRelativePath).dir;
    const componentReactDefs = path.resolve(componentFolder, './defs-react.ts');

    let fileContent;
    try {
        fileContent = fs.readFileSync(componentReactDefs, 'utf-8');
    } catch {
        return null;
    }

    return extractReactBaseType(fileContent);
}

/**
 * Extracts the ReactBaseType definition as a string, given a string representing the file content
 *
 * @param {string} fileContent - the whole content of the file as string
 * @returns {string} - the Type definition for React as String
 */
function extractReactBaseType (fileContent) {
    // Matches from the line start so it can ignore if it is commented out
    const matches = fileContent.match(/^export type ReactBaseType.*$/gm);
    const hasMatch = matches && matches[0];

    if (!hasMatch) return null;

    // Strip the "export" keyword as it is not necessary
    const reactBaseType = matches[0].replace(/^export /, '');

    return reactBaseType;
}

/**
 * This function generates a react wrapper to enable custom lit components to be used in react apps.
 *
 * @param {JSON} - A JSON file of custom components and their attributes, generated from the @custom-elements-manifest/analyzer package
 * @param {string} - component folder name fetched from package.json script
 * @return {string} - The source code of the react wrapper
 *
 */
export function addReactWrapper (customElementsObject) {
    const components = [];
    const customElements = Object.entries(customElementsObject);

    let sortedModules;

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        let componentObject;
        if (key === 'modules') {
            sortedModules = value.sort((a, b) => a.path.length - b.path.length);

            value.forEach((k) => {
                k.declarations.forEach((decl) => {
                    if (decl.customElement === true) {
                        const componentSelector = k.declarations.find((i) => i.kind === 'variable' && i.name === 'componentSelector');
                        const componentData = {
                            class: { ...decl, tagName: componentSelector?.default.replace(/'/g, '') ?? decl.tagName },
                            path: k.path.replace('index.js', 'react.ts'),
                            reactBaseType: getReactBaseType(k.path),
                        };

                        components.push(componentData);
                    }
                });
            });
        }

        return componentObject;
    });

    // replace custom-elements.json with an ordered object
    const customElementsCopy = Object.fromEntries(customElements);
    customElementsCopy.modules = sortedModules;

    const customElementsFile = createWriteStream(
        'custom-elements.json',
        (err) => {
            throw (err);
        },
    );

    customElementsFile.write(JSON.stringify(customElementsCopy, null, 4));

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

    // format event names in a React friendly way - removes hyphens and capitalises
    // i.e. foo-bar-baz becomes FooBarBaz
    function formatEventName (eventName) {
        return eventName
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
    }

    // create wrapper src code and add to react.ts file
    if (components.length > 0) {
        components.forEach((component) => {
            const events = getEvents(component.class);

            // Prepare the event names and comments
            let eventNames = '';
            if (component.class.events && component.class.events.length > 0) {
                eventNames = events?.flat().reduce((pre, event) => `${pre
                    }        ${`on${formatEventName(event.name)}`}: '${event.name}' as EventName<${event.type}>,${event.description ? ` // ${event.description}` : ''}\n`, '');
            }

            let eventsObject = '{}';
            if (eventNames) {
                eventsObject = `{\n${eventNames}    }`;
            }

            const componentPropsExportName = `${component.class.name.replace(/^Pie/, '')}Props`;

            // Create the main source code
            componentSrc = `import * as React from 'react';
import { createComponent${component.class.events?.length > 0 ? ', EventName' : ''} } from '@lit/react';
import { ${component.class.name} as ${component.class.name}Lit } from './index';
import { ${componentPropsExportName} } from './defs';

export * from './defs';

const ${component.class.name}React = createComponent({
    displayName: '${component.class.name}',
    elementClass: ${component.class.name}Lit,
    react: React,
    tagName: '${component.class.tagName}',
    events: ${eventsObject},
});

${component.reactBaseType ? component.reactBaseType : ''}

export const ${component.class.name} = ${component.class.name}React as React.ForwardRefExoticComponent<React.PropsWithoutRef<${componentPropsExportName}> & React.RefAttributes<${component.class.name}Lit>${component.reactBaseType ? ' & ReactBaseType' : ''}>;
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
                console.info('React wrapper has been added!');
            }
        });
    } else {
        componentSrc = '';
    }

    return componentSrc;
}
