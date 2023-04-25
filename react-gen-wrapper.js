import { pascalCase } from 'pascal-case';
import camelCase from 'camelcase';
import kebabCase from 'kebab-case';
import fs, { outputFile } from 'fs-extra';
import { readFile, appendFile } from 'fs';

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const componentObject = loadJSON('./custom-elements.json');

console.log(componentObject)

let declMap = []
let components = []
let fileImports = []
const componentImports = [];
const reactComponents = [];
const importSrc = []
const exportSrc = []
// const outDir;

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

async function getEvents(component, declMap, events) {
    console.log('1111', component)

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

    fileImports = fileImports.filter(e => !e.includes('react-wrapper'))

    componentImports.push(                                          // package name
        `import { ${component.name} as WC${component.name} } from './index';`
    );

    importSrc.push(`import { ${component.name.replace('Pie', 'P')} } from './react-wrapper';` );
    exportSrc.push(`export { ${component.name.replace('Pie', 'P')} };` );


    // outDir = `./packages/components/${kebabCase(component.name).replace(/^./, "")}/dist`

    const reactComponent = {};
    reactComponent.name = `${component.name}`;
    reactComponent.swcComponentName = `${component.name}`;
    reactComponent.elementName = component.tagName;
    const events = [];
    await getEvents(component, declMap, events);
    reactComponent.events = uniqueBy(events.flat(), 'name');

    reactComponents.push(reactComponent);
}


const componentSrc = `
import * as React from 'react';
import { createComponent } from '@lit-labs/react';${
    reactComponents.flatMap((component) => component.events)
        .length > 0
        ? "\nimport type { EventName } from '@lit-labs/react';"
        : ''
}
${componentImports.reduce((pre, cur) => pre + cur + '\n', '')}
${fileImports.reduce((pre, cur) => pre + cur + '\n', '')}

${reactComponents.reduce(
    (pre, component) =>
        pre +
        `export const ${component.name.replace('Pie', 'P')} = createComponent({
        displayName: '${component.name}',
        elementClass: WC${component.swcComponentName},
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

${reactComponents.reduce(
    (pre, component) =>
        pre +
        `export type ${component.name}Type = EventTarget & WC${component.swcComponentName};\n`,
    ''
)}
`;


/**
 * CEM package will invoke this callback function.
 *
 * @param {*} exclude array of excluded component class name
 * @param {*} outDir root output directory for generated code
 * @param {*} prettierConfig prettier library configuration
 */
export default async function genReactWrapper({
    outDir = `./src`
} = {}) {

        async function checkDirExists (directoryPath) {
            try {
                await fs.ensureDir(directoryPath);
                console.log(`Directory "${directoryPath}" exists.`);
            } catch (err) {
                console.error(err);
            }
        }

        checkDirExists(outDir);

        fs.writeFile(`${outDir}/react-wrapper.ts`, componentSrc, (err) => {
            if (err) console.error(err);
        });

        const links = `${importSrc.reduce((pre, cur) => pre + cur + '\n', '')} \n${exportSrc.reduce((pre, cur) => pre + cur + '\n', '')}`

        fs.appendFile(`${outDir}/index.ts`, links, (err) => {
            if (err) console.error(err);
        });

        if (components.length === 0) {
            return;
        }
};
