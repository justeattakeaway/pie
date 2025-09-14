/* eslint-disable no-restricted-syntax */
import { createWriteStream } from 'fs';
import path from 'path';
import fs from 'fs-extra';

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
 * Generates a TypeScript type definition for an array of events
 * @param events - The `events` parameter is an array of event objects. Each event object has a `name`
 * property representing the name of the event and a `type` property representing the type of the
 * event.
 * @param componentsClassName - The `componentsClassName` parameter is a string that represents the
 * name of the class or component that the events belong to.
 * @returns An array with two elements. The first element is a string that represents the type
 * definition for the events, and the second element is a string that represents the name of the events
 * type.
 */
function getEventsTypeDefinition (events, componentsClassName) {
    if (!events) return null;

    const eventsItems = events.flat()
        .map((event) => {
            const formattedEventName = `on${formatEventName(event.name)}`;

            return [formattedEventName, event.type];
        })
        .map(([eventName, eventType]) => `    ${eventName}?: (event: ${eventType}) => void;`);

    const eventsTypeName = `${componentsClassName}Events`;

    const eventTypes = [
        `type ${eventsTypeName} = {`,
        ...eventsItems.map((eventItem) => eventItem),
        '};',
    ].join('\n');

    return [eventTypes, eventsTypeName];
}

// format event names in a React friendly way - removes hyphens and capitalises
// i.e. foo-bar-baz becomes FooBarBaz
function formatEventName (eventName) {
    return eventName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// format tag names in a React friendly way - removes hyphens and capitalises
// i.e. foo-bar-baz becomes FooBarBaz
function kebabToPascalCase (str) {
    return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

/**
 * This function generates a react wrapper to enable custom lit components to be used in react apps.
 *
 * @param {JSON} - A JSON file of custom components and their attributes, generated from the @custom-elements-manifest/analyzer package
 * @return {string} - The source code of the react wrapper
 *
 */
export function addReactWrapper (customElementsObject) {
    const customElements = Object.entries(customElementsObject);

    // Group components by their file path
    const componentsByPath = new Map();

    customElements.forEach(([key, value]) => {
        if (key === 'modules') {
            value.forEach((k) => {
                const moduleComponents = [];
                k.declarations.forEach((decl) => {
                    if (decl.customElement === true) {
                        const componentSelector = k.declarations.find((i) => i.kind === 'variable' && i.name === 'componentSelector');
                        const componentData = {
                            class: { ...decl, tagName: componentSelector?.default.replace(/'/g, '') ?? decl.tagName },
                            path: k.path,
                            reactBaseType: getReactBaseType(k.path),
                        };
                        moduleComponents.push(componentData);
                    }
                });

                if (moduleComponents.length > 0) {
                    const reactPath = k.path.replace('index.js', 'react.ts');
                    componentsByPath.set(reactPath, moduleComponents);
                }
            });
        }
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

    // Iterate over each file path and generate a single wrapper file for all components within it
    for (const [reactPath, componentsInFile] of componentsByPath.entries()) {
        const componentClasses = componentsInFile.map((c) => c.class.name);
        const propTypeDefs = componentsInFile.map((c) => {
            const { tagName } = c.class;
            const tagNameWithoutPrefix = tagName.replace(/^pie-/, '');
            const pascalCaseName = kebabToPascalCase(tagNameWithoutPrefix);
            return `${pascalCaseName}Props`;
        });

        const imports = `import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { ${componentClasses.join(', ')} } from './index';
import { ${propTypeDefs.map((p) => `type ${p}`).join(', ')} } from './defs';`;

        const exportDefs = 'export * from \'./defs\';';

        const wrapperSnippets = componentsInFile.map((component) => {
            const events = getEvents(component.class);

            let eventNames = '';
            if (events.flat().length > 0) {
                eventNames = events.flat().reduce((pre, event) => `${pre
                    }        ${`on${formatEventName(event.name)}`}: '${event.name}' as EventName<${event.type}>,${event.description ? ` // ${event.description}` : ''}\n`, '');
            }

            const eventsObject = eventNames ? `{\n${eventNames}    }` : '{}';
            const [eventsTypeDefinition, eventsTypeName] = getEventsTypeDefinition(events, component.class.name);

            const { tagName } = component.class;
            const tagNameWithoutPrefix = tagName.replace(/^pie-/, '');
            const pascalCaseName = kebabToPascalCase(tagNameWithoutPrefix);
            const componentPropsExportName = `${pascalCaseName}Props`;

            return `const ${component.class.name}React = createComponent({
    displayName: '${component.class.name}',
    elementClass: ${component.class.name},
    react: React,
    tagName: '${tagName}',
    events: ${eventsObject},
});
${component.reactBaseType ? `\n${component.reactBaseType}` : ''}
${eventsTypeDefinition ? `\n${eventsTypeDefinition}` : ''}
export const ${component.class.name} = ${component.class.name}React as React.ForwardRefExoticComponent<React.PropsWithoutRef<${componentPropsExportName}>
    & React.RefAttributes<${component.class.name}>${eventsTypeDefinition ? ` & ${eventsTypeName}` : ''}${component.reactBaseType ? ' & ReactBaseType' : ''}>;`;
        }).join('\n\n');

        const finalFileContent = [imports, exportDefs, wrapperSnippets].join('\n\n');

        if (reactPath !== 'pie-wrapper-react') {
            const reactFile = createWriteStream(reactPath, (err) => {
                if (err) throw err;
            });
            reactFile.write(finalFileContent);
            console.info(`React wrapper for ${reactPath} has been added!`);
        }
    }
}

