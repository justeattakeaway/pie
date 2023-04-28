import fs from 'fs-extra';
import { appendFile } from 'fs'

// fetches custom-elements.json file from the root
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const componentObject = loadJSON(`../../../../custom-elements.json`);

let components = []
const reactComponents = [];
export const reactComponent = {};

const customComponents = Object.entries(componentObject)

// sort through json and put all components into a separate array
customComponents.forEach(([key, value]) => {
    if ( key === 'modules') {
        return value.forEach(k => {
            k.declarations.forEach((decl) => {
                decl.customElement === true ? components.push(decl) : ''
            })
        })
    }
})


/**
 * function to fetch events from the component
 *
 * @param {*} component object from within components array
 * @param {*} event empty array to be populated with events
 */
async function getEvents(component, events) {
       if (component?.events) {
            events.push(
                component?.events
                    .filter((event) => !!event.name)
                    .map((event) => {
                        return {
                            name: event.name,
                            type: event.type?.text || 'Event',
                            description: event.description,
                        };
                    })
            );
        }
    }

    console.log('heyyy', components)
// sorts component into a reactComponent object
for (let component of components) {
    reactComponent.name = `${component.name}`;
    reactComponent.swcComponentName = `${component.name}`;
    reactComponent.elementName = component.tagName;
    const events = [];
    await getEvents(component, events);
    reactComponent.events = events.flat();
    reactComponents.push(reactComponent);
}

// generates wrapper from reactComponent
const componentSrc = `import * as React from 'react';
import { createComponent } from '@lit-labs/react';${
    reactComponents.flatMap((component) => component.events)
        .length > 0
        ? "\nimport type { EventName } from '@lit-labs/react';"
        : ''
}

${reactComponents.reduce(
    (pre, component) =>
        pre +
        `export const ${component.name.replace('Pie', 'P')} = createComponent({
        displayName: '${component.name}',
        elementClass: ${component.name},
        react: React,
        tagName: '${component.elementName}',
        events: {
            ${component.events.reduce(
                (pre, event) =>
                    pre +
                    `${event.name.replace(/-./g, (m) =>
                        m[1].toUpperCase()
                    )}: '${event.name}' as EventName<${event.type}>, ${
                        event.description ? `// ${event.description}` : ''
                    }`,
                ''
            )}
        }
    });`,
    ''
)}
`;

// appends wrapper to the src/index.ts file of the component
appendFile(`../../components/${reactComponent.elementName}/src/index.ts`, componentSrc, (err) => {
    if (err) throw(err);
});
