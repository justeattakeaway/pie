/* eslint-disable no-restricted-syntax */
import { createWriteStream } from 'fs';
import path from 'path';
import fs from 'fs-extra';

// Fetches custom-elements.json file
export function loadCustomElementsFile (customElementsDirectory = process.argv[2] || process.cwd()) {
    return JSON.parse(fs.readFileSync(path.resolve(customElementsDirectory, 'custom-elements.json')));
}

/**
 * Reads the given component path and extracts the ReactBaseType as a string
 *
 * @param {string} componentRelativePath - the relative path to the component
 * @returns {string | null} - the Type definition for React as String or null
 */
function getReactBaseType (componentRelativePath) {
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
 * Extracts the ReactBaseType definition as a string
 *
 * @param {string} fileContent - the whole content of the file as string
 * @returns {string | null} - the Type definition for React as String or null
 */
function extractReactBaseType (fileContent) {
    const matches = fileContent.match(/^export type ReactBaseType.*$/gm);
    if (!matches || !matches[0]) return null;
    return matches[0].replace(/^export /, '');
}

/**
 * Generates a TypeScript type definition for an array of events
 * @param {Array} events - An array of event objects.
 * @param {string} componentsClassName - The name of the class the events belong to.
 * @returns {[string, string] | null} - A tuple with the type definition string and the type name, or null.
 */
function getEventsTypeDefinition (events, componentsClassName) {
    if (!events || events.flat().length === 0) return null;
    const eventsItems = events.flat().map((event) => {
        const formattedEventName = `on${formatEventName(event.name)}`;
        return `    ${formattedEventName}?: (event: ${event.type}) => void;`;
    });
    const eventsTypeName = `${componentsClassName}Events`;
    const eventTypes = [
        `type ${eventsTypeName} = {`,
        ...eventsItems,
        '};',
    ].join('\n');
    return [eventTypes, eventsTypeName];
}

function formatEventName (eventName) {
    return eventName.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function kebabToPascalCase (str) {
    return str.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

/**
 * Generates React wrappers for custom elements.
 * @param {object} customElementsObject - The parsed custom-elements.json object.
 */
export function addReactWrapper (customElementsObject) {
    const customElements = Object.entries(customElementsObject);
    const componentsByPath = new Map();

    customElements.forEach(([key, value]) => {
        if (key === 'modules') {
            value.forEach((k) => {
                const moduleComponents = k.declarations
                    .filter((decl) => decl.customElement === true)
                    .map((decl) => ({
                        class: { ...decl, tagName: decl.tagName },
                        path: k.path,
                    }));

                if (moduleComponents.length > 0) {
                    const reactPath = k.path.replace('index.js', 'react.ts');
                    componentsByPath.set(reactPath, moduleComponents);
                }
            });
        }
    });

    function getEvents (component) {
        if (!component?.events) return [];
        return [component.events
            .filter((event) => !!event.name)
            .map((event) => ({
                name: event.name,
                type: event.type?.text || 'Event',
                description: event.description,
            }))];
    }

    for (const [reactPath, componentsInFile] of componentsByPath.entries()) {
        const componentClasses = componentsInFile.map((c) => c.class.name);
        const propTypeDefs = componentsInFile.map((c) => {
            const pascalCaseName = kebabToPascalCase(c.class.tagName.replace(/^pie-/, ''));
            return `${pascalCaseName}Props`;
        });

        const componentImports = componentClasses.map((name) => `${name} as ${name}WC`).join(', ');

        const imports = `import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { ${componentImports} } from './index';
import { ${propTypeDefs.map((p) => `type ${p}`).join(', ')} } from './defs';`;

        const exportDefs = 'export * from \'./defs\';';
        const reactBaseTypeForFile = getReactBaseType(componentsInFile[0].path);

        const wrapperSnippets = componentsInFile.map((component) => {
            const events = getEvents(component.class);
            const eventNames = events.flat().reduce((pre, event) => `${pre}        on${formatEventName(event.name)}: '${event.name}' as EventName<${event.type}>,${event.description ? ` // ${event.description}` : ''}\n`, '');
            const eventsObject = eventNames ? `{\n${eventNames}    }` : '{}';
            const [eventsTypeDefinition, eventsTypeName] = getEventsTypeDefinition(events, component.class.name) || [null, null];
            const pascalCaseName = kebabToPascalCase(component.class.tagName.replace(/^pie-/, ''));
            const componentPropsExportName = `${pascalCaseName}Props`;
            const webComponentClassName = `${component.class.name}WC`;

            return `const ${component.class.name}React = createComponent({
    displayName: '${component.class.name}',
    elementClass: ${webComponentClassName},
    react: React,
    tagName: '${component.class.tagName}',
    events: ${eventsObject},
});
${eventsTypeDefinition ? `\n${eventsTypeDefinition}` : ''}
export const ${component.class.name} = ${component.class.name}React as React.ForwardRefExoticComponent<React.PropsWithoutRef<${componentPropsExportName}>
    & React.RefAttributes<${webComponentClassName}>${eventsTypeDefinition ? ` & ${eventsTypeName}` : ''}${reactBaseTypeForFile ? ' & ReactBaseType' : ''}>;`;
        }).join('\n\n');

        const finalFileParts = [imports, exportDefs];
        if (reactBaseTypeForFile) {
            finalFileParts.push(reactBaseTypeForFile);
        }
        finalFileParts.push(wrapperSnippets);

        // MODIFICATION: Add a newline at the end of the file content
        const finalFileContent = `${finalFileParts.join('\n\n')}\n`;

        if (reactPath !== 'pie-wrapper-react') {
            fs.writeFileSync(reactPath, finalFileContent);
            console.info(`React wrapper for ${reactPath} has been added!`);
        }
    }
}

