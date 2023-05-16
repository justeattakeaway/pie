import { appendFileSync } from 'fs'

let componentSrc;

export default function genReactWrapper(customElementsObject){
    let components = []
    let componentPath = []
    const customElements = Object.entries(customElementsObject)

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        if ( key === 'modules') {
            return value.forEach(k => {
                k.declarations.forEach((decl) => {
                    decl.customElement === true ? components.push({class: decl, path: k.path.replace('.js', '.ts')}) : ''
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
    function getEvents(component) {
        const events = []
        if (component?.events) {
            events.push(
                component.events
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

        return events;
    }

    // create wrapper src code and add to index.ts file
    components.forEach(component => {
        const events = getEvents(component.class)

        componentSrc = `import * as React from 'react';
        import { createComponent } from '@lit-labs/react'; ${
        component.class.events?.length > 0 ? 
        "\n         import type { EventName } from '@lit-labs/react';" : 
        ''
        }
        
        export const ${component.class.name.replace('Pie', 'P')} = createComponent({
            displayName: '${component.class.name}',
            elementClass: ${component.class.name},
            react: React,
            tagName: '${component.class.tagName}',
            events: {
                ${events?.flat().reduce(
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
                appendFileSync(component.path, componentSrc);
        }
    })

    return componentSrc;
}
