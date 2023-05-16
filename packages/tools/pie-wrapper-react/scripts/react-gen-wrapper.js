import { appendFileSync } from 'fs'

let componentSrc;

export default function genReactWrapper(customElementsObject){
    let components = []
    let componentPath = ''
    const customElements = Object.entries(customElementsObject)

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        if ( key === 'modules') {
            return value.forEach(k => {
                k.declarations.forEach((decl) => {
                    decl.customElement === true ? components.push(decl) : ''
                    componentPath = k.path.replace('.js', '.ts')
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
    function getEvents(component, events) {
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

    // create wrapper src code and add to index.ts file
    components.forEach(component => {
        const events = []
        getEvents(component, events)

        componentSrc = `import * as React from 'react';
        import { createComponent } from '@lit-labs/react'; ${
        component?.events?.length > 0 ? 
        "\n         import type { EventName } from '@lit-labs/react';" : 
        ''
        }
        
        export const ${component.name.replace('Pie', 'P')} = createComponent({
            displayName: '${component.name}',
            elementClass: ${component.name},
            react: React,
            tagName: '${component.tagName}',
            events: {
                ${events.flat().reduce(
                    (pre, event) =>
                        pre +
                        `${'on' + event.name}: '${event.name}' as EventName<${event.type}>, ${
                            event.description ? `// ${event.description}` : ''
                        }`,
                    ''
                )}
            }
        });`

        if (componentSrc.length > 0) {
                appendFileSync(componentPath, componentSrc);

            return componentSrc;
        }
    })

    return componentSrc;
}
























// import fs from 'fs-extra';
// import { appendFile } from 'fs'

// // fetches custom-elements.json file
// const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

// const customElementsObject = loadJSON(`../custom-elements.json`);

// export let components = []

// const customElements = Object.entries(customElementsObject)

// // sort through customElements array and put all components into a separate array
// customElements.forEach(([key, value]) => {
//     if ( key === 'modules') {
//         return value.forEach(k => {
//             k.declarations.forEach((decl) => {
//                 decl.customElement === true ? components.push(decl) : ''
//             })
//         })
//     }
// })

// /**
//  * function to fetch events from the component
//  *
//  * @param {*} component object from within components array
//  * @param {*} event empty array to be populated with events
//  */
// function getEvents(component, events) {
//        if (component?.events) {
//             events.push(
//                 component?.events
//                     .filter((event) => !!event.name)
//                     .map((event) => {
//                         return {
//                             name: event.name,
//                             type: event.type?.text || 'Event',
//                             description: event.description,
//                         };
//                     })
//             );
//         }
//     }

// // create wrapper src code and add to index.ts file
// components.forEach(component => {
//     const events = []
//     getEvents(component, events)

//     const componentSrc = `import * as React from 'react';
// import { createComponent } from '@lit-labs/react';${
//     component?.events?.length > 0
//         ? "\nimport type { EventName } from '@lit-labs/react';"
//         : ''
//     }
//         export const ${component.name.replace('Pie', 'P')} = createComponent({
//         displayName: '${component.name}',
//         elementClass: ${component.name},
//         react: React,
//         tagName: '${component.tagName}',
//         events: {
//             ${events.flat().reduce(
//                 (pre, event) =>
//                     pre +
//                     `${'on' + event.name}: '${event.name}' as EventName<${event.type}>, ${
//                         event.description ? `// ${event.description}` : ''
//                     }`,
//                 ''
//             )}
//         }
//     });`

//     appendFile(`../../components/${component.tagName}/src/index.ts`, componentSrc, (err) => {
//         if (err) throw(err);
//     });
// })
