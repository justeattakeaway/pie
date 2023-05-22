import { createWriteStream } from 'fs';

let componentSrc;

export default function genReactWrapper (customElementsObject) {
    const components = [];
    const customElements = Object.entries(customElementsObject);

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        let componentObject;
        if (key === 'modules') {
            value.forEach((k) => {
                k.declarations.forEach((decl) => {
                    componentObject = decl.customElement === true ? components.push({ class: decl, path: k.path.replace('index.js', 'react.ts') }) : '';
                });
            });
        }

        return componentObject;
    });

    /**
     * function to fetch events from the component
     *
     * @param {*} component object from within components array
     * @param {*} event empty array to be populated with events
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

    // create wrapper src code and add to index.ts file
    components.forEach((component) => {
        const events = getEvents(component.class);

        componentSrc = `
// eslint-disable
import * as React from 'react';
import { ${component.class.name} as ${`${component.class.name}React`}} from './index';
import { createComponent } from '@lit-labs/react'; ${
component.class.events?.length > 0
    ? "\n        import { EventName } from '@lit-labs/react';"
    : ''
}
        
export const ${component.class.name} = createComponent({
    displayName: '${component.class.name}',
    elementClass: ${`${component.class.name}React`},
    react: React,
    tagName: '${component.class.tagName}',
    events: {
        ${events?.flat().reduce(
    (pre, event) => `${pre
                }${`on${event.name}`}: '${event.name}' as EventName<${event.type}>, ${
                    event.description ? `// ${event.description}` : ''
                }`,
    '',
)}
    }
});`;

        const reactFile = createWriteStream(
            component.path,
            (err) => {
                console.error(err);
            },
        );

        if (componentSrc.length > 0) {
            reactFile.write(componentSrc);
        }
    });

    return componentSrc;
}
