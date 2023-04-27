import kebabCase from 'kebab-case';
import fs from 'fs-extra';
import { readFile, appendFile, writeFile } from 'fs'

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const componentObject = loadJSON(`../../../../custom-elements.json`);

let declMap = []
let components = []
let fileImports = []
const reactComponents = [];
export const reactComponent = {};

const customComponents = Object.entries(componentObject)

customComponents.forEach(([key, value]) => {
    if ( key === 'modules') {
        value.forEach(k => {
            k.declarations.map((decl) => declMap.push(decl.name, decl))
        })
    }
  });

customComponents.forEach(([key, value]) => {
    if ( key === 'modules') {
        return value.forEach(k => {
            k.declarations.forEach((decl) => {
                decl.customElement === true ? components.push(decl) : ''
            })
        })
    }
})

function uniqueBy(arr, prop) {
    return [...new Map(arr.map((m) => [m[prop], m])).values()];
}

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

for (let component of components) {
    customComponents.forEach(([key, value]) => {
        if ( key === 'modules') {
            return value.forEach(k => {
                fileImports.push(`import '${k.path.replace(`packages/components/${kebabCase(component.name).slice(1)}/src`, '.').replace('js', 'ts')}'`)
            })
        }
    });

    console.log('yoo', customComponents.length)

    console.log('heyyyy', component.name)

    reactComponent.name = `${component.name}`;
    reactComponent.swcComponentName = `${component.name}`;
    reactComponent.elementName = component.tagName;
    const events = [];
    await getEvents(component, events);
    reactComponent.events = uniqueBy(events.flat(), 'name');
    reactComponents.push(reactComponent);
}

console.log('yooo', reactComponents.length)


const componentSrc = `
import * as React from 'react';
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
        elementClass: ${component.swcComponentName},
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

async function genReactWrapper() {
    appendFile(`../../components/${reactComponent.elementName}/src/index.ts`, componentSrc, (err) => {
        if (err) console.error(err);
    });
};

export default {
    plugins: [
        genReactWrapper(),
    ],
};

