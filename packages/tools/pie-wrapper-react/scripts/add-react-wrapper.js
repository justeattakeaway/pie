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

/**
 * Determines whether a component behaves like a controlled text input.
 *
 * A component is treated as a controlled input when it exposes a `value` field
 * and dispatches an `input` event. These are the components for which `@lit/react`'s
 * generic wrapper is insufficient, because it does not replicate the controlled-input
 * value tracking that ReactDOM applies to native form controls.
 *
 * @param {object} componentClass - the component declaration from the custom elements manifest
 * @return {boolean} - true if the component should receive the controlled-input wrapper
 */
function isControlledInputComponent (componentClass) {
    const hasValueField = (componentClass.members || [])
        .some((member) => member.kind === 'field' && member.name === 'value');
    const hasInputEvent = (componentClass.events || [])
        .some((event) => event.name === 'input');

    return hasValueField && hasInputEvent;
}

/**
 * Generates a controlled-input-aware React wrapper for input-like components.
 *
 * `@lit/react`'s `createComponent` writes the `value` prop onto the custom element
 * whenever it changes between renders, but it does not implement the value tracking
 * that ReactDOM applies to native form controls. As a result a stale `value` (for
 * example while a user is typing and parent state updates are debounced) can overwrite
 * the user's latest keystroke.
 *
 * The generated wrapper replicates React's controlled-input contract: `value` is only
 * written to the element when the controlled value genuinely changes since it was last
 * applied, so in-flight user input is never clobbered. The `value` prop is therefore not
 * forwarded to the underlying `createComponent` element and is managed here instead.
 *
 * @param {string} componentName - the component class name (e.g. `PieTextInput`)
 * @param {string} propsTypeDefinition - the composed React props type for the component
 * @return {string} - the source code for the controlled wrapper and its export
 */
function generateControlledWrapper (componentName, propsTypeDefinition) {
    return `type ${componentName}WrapperProps = ${propsTypeDefinition};

// Use a layout effect on the client (so value writes happen before paint) and a
// regular effect on the server to avoid React's "useLayoutEffect does nothing on
// the server" warning during SSR.
const useIsomorphic${componentName}LayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const ${componentName}Controlled = React.forwardRef<${componentName}Lit, ${componentName}WrapperProps>((props, forwardedRef) => {
    const { value, children, ...restProps } = props as ${componentName}WrapperProps & { value?: string | number | null };
    const elementRef = React.useRef<${componentName}Lit | null>(null);
    const lastAppliedValueRef = React.useRef<string | number | null | undefined>(undefined);

    const setElementRef = React.useCallback((node: ${componentName}Lit | null) => {
        elementRef.current = node;

        if (typeof forwardedRef === 'function') {
            forwardedRef(node);
        } else if (forwardedRef) {
            (forwardedRef as React.MutableRefObject<${componentName}Lit | null>).current = node;
        }
    }, [forwardedRef]);

    useIsomorphic${componentName}LayoutEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        // Only write when the controlled value has actually changed since we last
        // applied it. This prevents a re-render carrying an already-applied value
        // from overwriting characters the user has typed in the meantime.
        if (value !== lastAppliedValueRef.current) {
            lastAppliedValueRef.current = value;

            const nextValue = value == null ? '' : String(value);

            if (element.value !== nextValue) {
                element.value = nextValue;
            }
        }
    });

    return React.createElement(
        ${componentName}React,
        { ...restProps, ref: setElementRef } as unknown as React.ComponentProps<typeof ${componentName}React>,
        children,
    );
});

${componentName}Controlled.displayName = '${componentName}';

export const ${componentName} = ${componentName}Controlled as React.ForwardRefExoticComponent<${componentName}WrapperProps>;`;
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

            // This is a workaround for the missing events in the component TS api
            const [eventsTypeDefinition, eventsTypeName] = eventNames && getEventsTypeDefinition(events, component.class.name);

            const componentPropsExportName = `${component.class.name.replace(/^Pie/, '')}Props`;

            // The composed React props type, shared by the standard and controlled exports.
            const propsTypeDefinition = `React.PropsWithChildren<Omit<React.PropsWithoutRef<${componentPropsExportName}>, 'children'>>
    & React.RefAttributes<${component.class.name}Lit>${eventsTypeDefinition ? ` & ${eventsTypeName}` : ''}${component.reactBaseType ? ' & ReactBaseType' : ''}`;

            // Shared header: imports, the createComponent element, and optional types.
            const header = `import * as React from 'react';
import { createComponent${component.class.events?.length > 0 ? ', type EventName' : ''} } from '@lit/react';
import { ${component.class.name} as ${component.class.name}Lit } from './index';
import { type ${componentPropsExportName} } from './defs';

export * from './defs';

const ${component.class.name}React = createComponent({
    displayName: '${component.class.name}',
    elementClass: ${component.class.name}Lit,
    react: React,
    tagName: '${component.class.tagName}',
    events: ${eventsObject},
});${// weird indentation here so we don't end up with extra whitespace in the generated file
    component.reactBaseType ? `

${component.reactBaseType}` : ''
}${
    eventsTypeDefinition ? `

${eventsTypeDefinition}` : ''
}`;

            // Input-like components need a controlled-input-aware wrapper; everything else
            // can be exported directly from the generic createComponent element.
            if (isControlledInputComponent(component.class)) {
                componentSrc = `${header}

${generateControlledWrapper(component.class.name, propsTypeDefinition)}
`;
            } else {
                componentSrc = `${header}

export const ${component.class.name} = ${component.class.name}React as React.ForwardRefExoticComponent<${propsTypeDefinition}>;
`;
            }
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
